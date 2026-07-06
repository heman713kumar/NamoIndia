import React, { createContext, useContext, useState, useEffect } from 'react';

export type ActiveBucket = 'inspired' | 'places' | 'things' | 'plan';

export interface PageState {
  path: string;
  params?: Record<string, string>;
}

interface RouterContextType {
  route: PageState;
  activeBucket: ActiveBucket;
  navigate: (path: string, params?: Record<string, string>) => void;
  wishlist: string[]; // List of destination/festival IDs
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [route, setRoute] = useState<PageState>({ path: 'home' });
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('india_tourism_wishlist');
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const navigate = (path: string, params?: Record<string, string>) => {
    setRoute({ path, params });
    // Scroll to top with luxurious smooth feel
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('india_tourism_wishlist', JSON.stringify(next));
      return next;
    });
  };

  const isInWishlist = (id: string) => wishlist.includes(id);

  // Determine active category bucket based on path
  let activeBucket: ActiveBucket = 'inspired';
  const path = route.path;
  if (path === 'destinations' || path === 'destination-detail') {
    activeBucket = 'places';
  } else if (path === 'things-to-do' || ['adventure', 'food', 'culture', 'wellness'].includes(path)) {
    activeBucket = 'things';
  } else if (path === 'trip-planner' || path === 'contact') {
    activeBucket = 'plan';
  } else {
    activeBucket = 'inspired';
  }

  return (
    <RouterContext.Provider
      value={{
        route,
        activeBucket,
        navigate,
        wishlist,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}
