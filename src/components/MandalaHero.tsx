import { useEffect, useRef, useState } from 'react';

export default function MandalaHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = 1.0 - e.clientY / window.innerHeight; // Flip Y for WebGL
      mouseRef.current = { x, y };
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.warn('WebGL not supported in this browser.');
      return;
    }

    // Set canvas dimensions
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Vertex Shader (Passthrough)
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment Shader (Kaleidoscope Mandala Shader)
    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_scroll;

      #define PI 3.14159265359

      // Color Palette: Cream, Heritage Red, Gold, Teal-Dark
      vec3 cream = vec3(0.98, 0.97, 0.95);
      vec3 deepRed = vec3(0.5, 0.11, 0.11);
      vec3 gold = vec3(0.77, 0.63, 0.35);
      vec3 teal = vec3(0.04, 0.36, 0.36);
      vec3 background = vec3(0.09, 0.08, 0.07); // Dark carbon for contrast

      // Polar coordinates conversion
      vec2 toPolar(vec2 uv) {
        float r = length(uv);
        float theta = atan(uv.y, uv.x);
        return vec2(r, theta);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        
        // Dynamic scaling based on mouse & scroll
        float scrollEffect = u_scroll * 0.0015;
        uv *= (1.2 + scrollEffect + sin(u_time * 0.15) * 0.05);

        // Convert to polar
        vec2 polar = toPolar(uv);
        float r = polar.x;
        float theta = polar.y;

        // Apply 12-fold kaleidoscope symmetry
        float segments = 12.0;
        float segmentAngle = 2.0 * PI / segments;
        float angle = mod(theta - u_time * 0.04 + u_mouse.x * 0.1, segmentAngle) - segmentAngle * 0.5;

        // Reconstruct mirrored Cartesian coordinates
        vec2 p = vec2(cos(angle), sin(angle)) * r;

        // Create intricate geometric layers of the Mandala
        float ring1 = smoothstep(0.02, 0.0, abs(r - 0.45 - sin(angle * 12.0) * 0.015));
        float ring2 = smoothstep(0.015, 0.0, abs(r - 0.7 - cos(angle * 6.0) * 0.02));
        float ring3 = smoothstep(0.01, 0.0, abs(r - 0.25));

        // Central floral/sun petals
        float petals = smoothstep(0.18, 0.0, r - 0.15 - abs(sin(angle * 6.0 + PI * 0.5)) * 0.08);
        float centerGlow = smoothstep(0.08, 0.0, r);

        // Outer geometric star rays
        float star = smoothstep(0.01, 0.0, abs(p.y) - (0.8 - r) * 0.08);
        star *= step(r, 0.8) * step(0.3, r);

        // Intricate dotted lace rings
        float dots1 = smoothstep(0.012, 0.0, length(p - vec2(0.35, 0.0)) - 0.01);
        float dots2 = smoothstep(0.012, 0.0, length(p - vec2(0.55, 0.0)) - 0.008);
        
        // Assemble design layers
        vec3 col = background;

        // Base red-gold gradient glow
        float gradientGlow = smoothstep(0.9, 0.0, r);
        col = mix(col, deepRed * 0.4, gradientGlow);

        // Color individual geometric elements
        col = mix(col, gold, petals * 0.6);
        col = mix(col, cream, centerGlow);
        col = mix(col, gold, star * 0.5);
        col = mix(col, gold, ring1 * 0.8);
        col = mix(col, cream, ring2 * 0.7);
        col = mix(col, teal, ring3 * 0.9);
        col = mix(col, gold, dots1 * 0.9);
        col = mix(col, cream, dots2 * 0.9);

        // Subtle vignette shadow
        col *= smoothstep(2.0, 0.4, length(uv));

        gl_FragColor = vec4(col, 0.65); // Semi-transparent for overlay blending
      }
    `;

    // Helper to compile shaders
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    // Link Program
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Set up vertex buffer (full-screen quad)
    const vertices = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Get Uniform Locations
    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uResolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse');
    const uScrollLoc = gl.getUniformLocation(program, 'u_scroll');

    let animationFrameId: number;
    let scrollY = window.scrollY;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    const render = (time: number) => {
      gl.clearColor(0.09, 0.08, 0.07, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Pass values to uniforms
      gl.uniform1f(uTimeLoc, time * 0.001);
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      gl.uniform2f(uMouseLoc, mouseRef.current.x, mouseRef.current.y);
      gl.uniform1f(uScrollLoc, scrollY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 bg-charcoal overflow-hidden" id="canvas-container">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover mix-blend-screen opacity-95 transition-opacity duration-1000"
        id="mandala-webgl-canvas"
      />
      {/* Editorial overlay scrim to fade the WebGL canvas smoothly into content */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />
      <div className="absolute inset-0 bg-black/35 mix-blend-multiply" />
    </div>
  );
}
