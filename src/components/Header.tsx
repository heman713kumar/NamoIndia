import { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { Heart, Menu, X, Compass, MapPin, Sparkles, Calendar, BookOpen, Send, ShieldCheck, Trees, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DESTINATIONS } from '../data/destinations';
import { FESTIVALS } from '../data/festivals';

export default function Header() {
  const { navigate, route, activeBucket, wishlist, toggleWishlist } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close menus on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsWishlistOpen(false);
    setActiveDropdown(null);
  }, [route]);

  const navBuckets = [
    {
      id: 'inspired',
      label: 'Be Inspired',
      description: 'Dream of heritage & celebrations',
      items: [
        { label: 'Home Portal', path: 'home', icon: Compass },
        { label: 'Destination Weddings', path: 'weddings', icon: Heart },
        { label: 'Festivals of India', path: 'festivals', icon: Calendar },
        { label: '50 Iconic Cultural Events', path: 'festivals-guide', icon: Sparkles },
        { label: 'Social Media Atlas', path: 'social-atlas', icon: Video },
        { label: 'Travel Stories & Blogs', path: 'blog', icon: BookOpen },
      ]
    },
    {
      id: 'places',
      label: 'Places to Go',
      description: 'Explore 36 States & Territories',
      items: [
        { label: 'All Destinations', path: 'destinations', icon: MapPin },
        { label: 'National Parks & Wildlife', path: 'national-parks', icon: Trees },
        { label: 'Northern Himalayas', path: 'destinations', params: { region: 'North' }, icon: Sparkles },
        { label: 'Southern Coasts', path: 'destinations', params: { region: 'South' }, icon: Sparkles },
        { label: 'Western Deserts', path: 'destinations', params: { region: 'West' }, icon: Sparkles },
      ]
    },
    {
      id: 'things',
      label: 'Things to Do',
      description: 'Curated experiences by intent',
      items: [
        { label: 'Experiential Hub', path: 'things-to-do', icon: Sparkles },
        { label: 'Heritage & Culture', path: 'culture', icon: Sparkles },
        { label: 'Flavors & Cuisine', path: 'food', icon: Sparkles },
        { label: 'Adventure & Nature', path: 'adventure', icon: Sparkles },
        { label: 'Wellness & Spirituality', path: 'wellness', icon: Sparkles },
      ]
    },
    {
      id: 'plan',
      label: 'Plan Your Trip',
      description: 'Itineraries & logistics concierge',
      items: [
        { label: 'Interactive Itinerary Builder', path: 'trip-planner', icon: Send },
        { label: 'Contact & Travel Concierge', path: 'contact', icon: ShieldCheck },
      ]
    }
  ];

  const handleDropdownToggle = (bucketId: string) => {
    if (activeDropdown === bucketId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(bucketId);
    }
  };

  const getWishlistItems = () => {
    const states = DESTINATIONS.filter(d => wishlist.includes(d.id)).map(d => ({ ...d, typeLabel: 'Destination' }));
    const fests = FESTIVALS.filter(f => wishlist.includes(f.id)).map(f => ({ ...f, typeLabel: 'Festival' }));
    return [...states, ...fests];
  };

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-gold/15 shadow-sm" id="main-navigation-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo - Artistic Flair with "अ" Emblem */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none group" 
            onClick={() => navigate('home')}
            id="brand-logo"
          >
            <div className="w-10 h-10 bg-heritage-red rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md border border-gold/20">
              <span className="text-gold font-serif font-bold text-xl">अ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-black tracking-tight text-heritage-red leading-none">
                India<span className="italic font-light text-gold">.com</span>
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] text-charcoal-light uppercase font-semibold">
                Incredible Journeys
              </span>
            </div>
          </div>

          {/* Desktop Navigation Buckets */}
          <nav className="hidden lg:flex space-x-1" id="desktop-nav-menu">
            {navBuckets.map((bucket) => {
              const isActive = activeBucket === bucket.id;
              return (
                <div 
                  key={bucket.id} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(bucket.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`px-5 py-7 text-sm font-medium tracking-wider uppercase transition-colors duration-200 border-b-2 flex items-center gap-1 ${
                      isActive 
                        ? 'text-heritage-red border-heritage-red' 
                        : 'text-charcoal-light border-transparent hover:text-heritage-red hover:border-gold/30'
                    }`}
                    onClick={() => handleDropdownToggle(bucket.id)}
                  >
                    {bucket.label}
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === bucket.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 w-80 bg-cream border border-gold/20 rounded-lg shadow-xl p-4 z-50"
                      >
                        <div className="mb-3 border-b border-gold/10 pb-2">
                          <p className="text-xs font-semibold tracking-wider text-gold uppercase">{bucket.label}</p>
                          <p className="text-xs text-charcoal/60 mt-0.5">{bucket.description}</p>
                        </div>
                        <div className="grid gap-2">
                          {bucket.items.map((item, idx) => {
                            const IconComp = item.icon || Compass;
                            return (
                              <button
                                key={idx}
                                onClick={() => {
                                  if (item.path === 'destinations' && item.params) {
                                    navigate(item.path, item.params);
                                  } else {
                                    navigate(item.path);
                                  }
                                }}
                                className="flex items-center gap-3 w-full text-left p-2.5 rounded-md text-charcoal hover:bg-gold/10 hover:text-heritage-red transition-colors duration-150 text-sm font-medium"
                              >
                                <IconComp className="w-4 h-4 text-gold" />
                                <span>{item.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Action Icons: Wishlist & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Wishlist Heart Icon */}
            <button
              onClick={() => setIsWishlistOpen(!isWishlistOpen)}
              className="relative p-2.5 text-charcoal-light hover:text-heritage-red transition-colors duration-200"
              aria-label="Wishlist"
              id="wishlist-trigger-btn"
            >
              <Heart className={`w-6 h-6 ${wishlist.length > 0 ? 'fill-heritage-red text-heritage-red animate-pulse' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-heritage-red text-[9px] font-bold text-cream">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Burger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal hover:text-heritage-red transition-colors duration-200"
              aria-label="Toggle Menu"
              id="mobile-menu-burger"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Slide-out Wishlist Tray */}
      <AnimatePresence>
        {isWishlistOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWishlistOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            
            {/* Slider Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:w-96 bg-cream border-l border-gold/20 shadow-2xl z-50 flex flex-col"
              id="wishlist-slider-panel"
            >
              <div className="p-6 border-b border-gold/15 flex justify-between items-center bg-cream-dark">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-heritage-red fill-heritage-red" />
                  <h3 className="font-serif text-xl font-semibold text-heritage-red tracking-wide">My Travel Wishlist</h3>
                </div>
                <button 
                  onClick={() => setIsWishlistOpen(false)}
                  className="p-1 rounded-full hover:bg-gold/10 text-charcoal-light"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Wishlist Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {getWishlistItems().length === 0 ? (
                  <div className="text-center py-12 px-4">
                    <Compass className="w-12 h-12 text-gold/40 mx-auto mb-4" />
                    <p className="font-serif text-lg text-charcoal/70">Your dream board is empty</p>
                    <p className="text-xs text-charcoal/50 mt-2">Browse places to go and things to do, and click the heart icon to save them here.</p>
                    <button
                      onClick={() => {
                        setIsWishlistOpen(false);
                        navigate('destinations');
                      }}
                      className="mt-6 px-4 py-2 bg-gold hover:bg-gold-light text-cream rounded-md text-xs tracking-wider uppercase font-medium transition-colors"
                    >
                      Start Exploring
                    </button>
                  </div>
                ) : (
                  getWishlistItems().map((item) => (
                    <div 
                      key={item.id} 
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gold/10 hover:border-gold/30 shadow-sm transition-all relative group"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] tracking-wider uppercase text-gold font-semibold block">{item.typeLabel}</span>
                        <h4 className="font-serif text-sm font-bold text-charcoal truncate pr-6">{item.name}</h4>
                        <button
                          onClick={() => {
                            setIsWishlistOpen(false);
                            if (item.typeLabel === 'Destination') {
                              navigate('destination-detail', { id: item.id });
                            } else {
                              navigate('festival-detail', { id: item.id });
                            }
                          }}
                          className="text-xs text-teal-dark hover:text-teal-light font-medium mt-1 inline-block"
                        >
                          View Guide &rarr;
                        </button>
                      </div>
                      
                      {/* Heart Toggle Inside Wishlist to Remove */}
                      <button
                        onClick={() => toggleWishlist(item.id)}
                        className="absolute top-2 right-2 p-1 text-heritage-red hover:text-charcoal"
                      >
                        <Heart className="w-4 h-4 fill-heritage-red" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Wishlist CTA */}
              {getWishlistItems().length > 0 && (
                <div className="p-6 border-t border-gold/15 bg-cream-dark">
                  <button
                    onClick={() => {
                      setIsWishlistOpen(false);
                      navigate('trip-planner');
                    }}
                    className="w-full py-3 bg-heritage-red hover:bg-heritage-red-light text-cream rounded-md text-sm font-semibold tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Generate Custom Itinerary</span>
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-cream border-b border-gold/20 shadow-2xl p-6 z-40 max-h-[calc(100vh-5rem)] overflow-y-auto"
            id="mobile-navigation-drawer"
          >
            <div className="space-y-6">
              {navBuckets.map((bucket) => (
                <div key={bucket.id} className="border-b border-gold/10 pb-4">
                  <h4 className="text-xs font-bold tracking-widest text-gold uppercase mb-3">{bucket.label}</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {bucket.items.map((item, idx) => {
                      const IconComp = item.icon || Compass;
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            if (item.path === 'destinations' && item.params) {
                              navigate(item.path, item.params);
                            } else {
                              navigate(item.path);
                            }
                          }}
                          className="flex items-center gap-3 p-2 rounded text-charcoal hover:bg-gold/10 hover:text-heritage-red text-sm font-medium w-full text-left"
                        >
                          <IconComp className="w-4 h-4 text-gold" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
