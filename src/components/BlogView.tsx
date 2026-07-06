import { useRouter } from '../context/RouterContext';
import { BLOG_POSTS } from '../data/blog';
import { DESTINATIONS } from '../data/destinations';
import { FESTIVALS } from '../data/festivals';
import { Clock, BookOpen, User, Calendar, ArrowLeft, Tag, Compass, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function BlogView() {
  const { route, navigate } = useRouter();

  // Determine if we're rendering the INDEX or a DETAIL post
  const isDetail = route.path === 'blog-detail';
  const activeSlug = route.params?.slug || '';
  const post = BLOG_POSTS.find((p) => p.slug === activeSlug);

  // 1. Article Detail view
  if (isDetail && post) {
    // Gather matching Destinations and Festivals featured in this article
    const featuredStates = DESTINATIONS.filter((d) => post.relatedDestinations.includes(d.id));
    const featuredFestivals = FESTIVALS.filter((f) => post.relatedFestivals.includes(f.id));

    return (
      <div className="bg-cream min-h-screen py-12" id={`blog-detail-${post.slug}-view`}>
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <button
            onClick={() => navigate('blog')}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-charcoal/60 hover:text-heritage-red mb-8 bg-white border border-gold/15 px-3.5 py-1.5 rounded-full shadow-sm transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Travel Stories</span>
          </button>

          {/* Article Header */}
          <header className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-3">HERITAGE DISPATCHES</span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              {post.title}
            </h1>
            
            {/* Metadata bar */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs text-charcoal/50 mt-6 border-y border-gold/15 py-4 font-sans">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-gold" />
                <span>By <strong className="font-semibold text-charcoal">{post.author}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Large cover image */}
          <div className="h-64 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md border border-gold/15 mb-12">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main content body (rendered beautifully using paragraphs and custom styling) */}
          <div className="prose prose-lg max-w-none text-charcoal-light leading-relaxed font-sans space-y-6 text-sm sm:text-base">
            {post.content.map((paragraph, index) => {
              if (paragraph.trim()) {
                return <p key={index}>{paragraph}</p>;
              }
              return null;
            })}
          </div>

          {/* Article tags */}
          <div className="flex flex-wrap items-center gap-2 mt-12 pt-6 border-t border-gold/15">
            <Tag className="w-4 h-4 text-gold shrink-0" />
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* DYNAMIC HISTORIC CROSS LINKS BOX */}
          {(featuredStates.length > 0 || featuredFestivals.length > 0) && (
            <div className="mt-16 bg-cream-dark border border-gold/15 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="font-serif text-xl font-bold text-heritage-red border-b border-gold/10 pb-2">
                Featured Guides in this Story
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* States column */}
                {featuredStates.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase text-gold tracking-wider block">FEATURED STATES</span>
                    <div className="space-y-2">
                      {featuredStates.map((state) => (
                        <div 
                          key={state.id}
                          onClick={() => navigate('destination-detail', { id: state.id })}
                          className="flex items-center justify-between p-3 bg-white border border-gold/10 hover:border-gold/30 rounded-xl cursor-pointer transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <img src={state.image} alt={state.name} className="w-10 h-10 object-cover rounded-md" />
                            <span className="font-serif text-sm font-bold text-charcoal group-hover:text-heritage-red transition-colors">{state.name}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Festivals column */}
                {featuredFestivals.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase text-gold tracking-wider block">FEATURED CELEBRATIONS</span>
                    <div className="space-y-2">
                      {featuredFestivals.map((fest) => (
                        <div 
                          key={fest.id}
                          onClick={() => navigate('festival-detail', { id: fest.id })}
                          className="flex items-center justify-between p-3 bg-white border border-gold/10 hover:border-gold/30 rounded-xl cursor-pointer transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <img src={fest.image} alt={fest.name} className="w-10 h-10 object-cover rounded-md" />
                            <span className="font-serif text-sm font-bold text-charcoal group-hover:text-heritage-red transition-colors">{fest.name}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}

        </article>
      </div>
    );
  }

  // 2. Blog Index view (All stories in a gorgeous grid layout)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="blog-stories-index">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-2">BE INSPIRED</span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight">
          Travel Stories & Logs
        </h1>
        <p className="mt-4 text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans">
          Deep, cinematic dispatches penned by our global travel authors. Immerse yourself in specific micro-adventures, slow-cooking guides, and spiritual retreats across India.
        </p>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {BLOG_POSTS.map((post, idx) => (
          <article 
            key={post.slug}
            className="bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between cursor-pointer group"
            onClick={() => navigate('blog-detail', { slug: post.slug })}
          >
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-0.5 bg-cream text-charcoal text-[8px] font-bold uppercase tracking-wider rounded">
                  {post.tags[0]}
                </span>
              </div>
            </div>

            {/* Card contents */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-[10px] text-charcoal/40 mb-3 font-sans font-medium">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 text-gold" />
                    <span>{post.author}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal group-hover:text-heritage-red transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/65 mt-3 line-clamp-3 leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-gold/10 pt-4 mt-6">
                <span className="text-[10px] uppercase font-bold tracking-wider text-heritage-red group-hover:text-heritage-red-light">
                  Read Full Story &rarr;
                </span>
                <span className="text-[9px] text-charcoal/40 font-sans font-medium">
                  {post.date}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
