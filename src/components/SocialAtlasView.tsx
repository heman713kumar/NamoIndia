import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Youtube, 
  Instagram, 
  MapPin, 
  Heart, 
  Eye, 
  Search, 
  Filter, 
  Share2, 
  Plus, 
  X, 
  Compass, 
  ExternalLink, 
  Play, 
  Sparkles,
  Award,
  Video,
  ChevronRight,
  Globe
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { socialMediaPosts as initialPosts, SocialMediaPost } from '../data/socialMediaData';

export default function SocialAtlasView() {
  const { navigate, route } = useRouter();
  const [posts, setPosts] = useState<SocialMediaPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [activeWatchPost, setActiveWatchPost] = useState<SocialMediaPost | null>(null);
  
  // Custom suggestion form state
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [formCreatorName, setFormCreatorName] = useState('');
  const [formHandle, setFormHandle] = useState('');
  const [formPlatform, setFormPlatform] = useState<'youtube' | 'instagram'>('youtube');
  const [formTitle, setFormTitle] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formUrl, setFormUrl] = useState('');
  const [formState, setFormState] = useState('Rajasthan');
  const [formTags, setFormTags] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  // Load posts including custom ones from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('india_tourism_custom_vlogs');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPosts([...initialPosts, ...parsed]);
      } catch (e) {
        setPosts(initialPosts);
      }
    } else {
      setPosts(initialPosts);
    }
  }, []);

  // Filter posts based on user search and dropdown selections
  useEffect(() => {
    // If we have a filter from router params (e.g. stateId), pre-select it
    if (route.params?.stateId) {
      const match = posts.find(p => p.stateId.toLowerCase() === route.params?.stateId?.toLowerCase());
      if (match) {
        setSelectedState(match.stateName);
      }
    }
  }, [route.params?.stateId, posts]);

  const uniqueStates = ['All', ...Array.from(new Set(posts.map(p => p.stateName)))];
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.creatorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.creatorHandle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesState = selectedState === 'All' || post.stateName === selectedState;
    const matchesPlatform = selectedPlatform === 'All' || post.platform === selectedPlatform;
    
    return matchesSearch && matchesState && matchesPlatform;
  });

  const handleRecommendSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formCreatorName || !formTitle || !formUrl) return;

    // Helper to extract youtube ID
    let embedId = '';
    if (formPlatform === 'youtube') {
      const ytMatch = formUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
      embedId = ytMatch ? ytMatch[1] : 'F3S6S_A0_4g'; // Fallback sample
    } else {
      embedId = 'Cx1abc'; // Fallback insta mock
    }

    const stateIdLower = formState.toLowerCase().replace(/\s+/g, '-');

    const newPost: SocialMediaPost = {
      id: `custom-${Date.now()}`,
      creatorName: formCreatorName,
      creatorHandle: formHandle.startsWith('@') ? formHandle : `@${formHandle}` || '@traveler',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150', // Default user avatar
      platform: formPlatform,
      title: formTitle,
      description: formDesc,
      url: formUrl,
      embedId,
      stateId: stateIdLower,
      stateName: formState,
      countryName: 'India',
      likes: '1.2K',
      views: '12K',
      thumbnail: formPlatform === 'youtube' 
        ? 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600'
        : 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=600',
      tags: formTags ? formTags.split(',').map(t => t.trim()) : ['Culture', 'Travel', formState]
    };

    const currentCustom = localStorage.getItem('india_tourism_custom_vlogs');
    let customList: SocialMediaPost[] = [];
    if (currentCustom) {
      try {
        customList = JSON.parse(currentCustom);
      } catch (err) {}
    }
    
    const updatedCustom = [newPost, ...customList];
    localStorage.setItem('india_tourism_custom_vlogs', JSON.stringify(updatedCustom));
    setPosts([...initialPosts, ...updatedCustom]);

    // Reset and close
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setShowSubmitModal(false);
      // Reset form fields
      setFormCreatorName('');
      setFormHandle('');
      setFormTitle('');
      setFormDesc('');
      setFormUrl('');
      setFormTags('');
    }, 1800);
  };

  const shareContent = (post: SocialMediaPost, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: `Check out ${post.creatorName}'s amazing travel content about ${post.stateName}, India!`,
        url: post.url,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(post.url);
      alert('Vlog link copied to clipboard! Share it with your fellow travelers.');
    }
  };

  return (
    <div className="bg-cream min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative Traditional Mandala Backdrop */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Breadcrumb & Intro */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold-dark rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
            <Globe className="w-3 h-3 animate-spin-slow" />
            Social Media Atlas
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal tracking-tight mb-4">
            India in <span className="text-gold-dark italic">Motion</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Experience India through the eyes of local storytellers, independent travel filmmakers, and daily vloggers. Explore real-life YouTube diaries and Instagram reels directly tied to the states and heritage trails of India.
          </p>
        </div>

        {/* Filter and Control Bar */}
        <div className="bg-white/75 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-md border border-gold/10 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search creators, states or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cream/40 border border-gold/20 rounded-xl py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-charcoal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Dropdown Filters */}
          <div className="flex flex-wrap gap-3 w-full md:w-auto items-center">
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mr-1">
              <Filter className="w-3.5 h-3.5 text-gold-dark" />
              <span>FILTER BY:</span>
            </div>

            {/* State Selection */}
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="bg-cream/40 border border-gold/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold cursor-pointer"
            >
              <option value="All">All States/UTs</option>
              {uniqueStates.filter(s => s !== 'All').map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>

            {/* Platform Selection */}
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="bg-cream/40 border border-gold/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold cursor-pointer"
            >
              <option value="All">All Platforms</option>
              <option value="youtube">YouTube vlogs</option>
              <option value="instagram">Instagram reels</option>
            </select>

            {/* Submit dynamic button */}
            <button
              onClick={() => setShowSubmitModal(true)}
              className="bg-gold-dark hover:bg-gold text-white rounded-xl px-4 py-2 text-sm font-medium transition-all shadow-sm flex items-center gap-1.5 ml-auto md:ml-0"
            >
              <Plus className="w-4 h-4" />
              Recommend Vlogger
            </button>
          </div>

        </div>

        {/* Results Banner */}
        <div className="mb-6 flex justify-between items-center px-2">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-charcoal">{filteredPosts.length}</span> authentic Indian travel videos
          </p>
          { (selectedState !== 'All' || selectedPlatform !== 'All' || searchQuery !== '') && (
            <button 
              onClick={() => {
                setSelectedState('All');
                setSelectedPlatform('All');
                setSearchQuery('');
              }}
              className="text-xs text-gold-dark hover:underline font-medium"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border border-gold/10 shadow-sm max-w-xl mx-auto my-12">
            <Compass className="w-12 h-12 text-gold/60 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-bold text-charcoal mb-2">No Social Videos Found</h3>
            <p className="text-gray-500 text-sm mb-6">
              We couldn't find any travel videos matching your search criteria. Be the first to recommend your favorite vlogger or channel for this region!
            </p>
            <button
              onClick={() => setShowSubmitModal(true)}
              className="bg-gold-dark hover:bg-gold text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-all shadow-sm inline-flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              Recommend a Video
            </button>
          </div>
        )}

        {/* Main Grid Layout of Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              layout
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gold/10 hover:shadow-xl transition-all flex flex-col group relative"
            >
              {/* Media Thumbnail Container with Play button overlay */}
              <div 
                className="relative aspect-video w-full overflow-hidden bg-charcoal cursor-pointer"
                onClick={() => setActiveWatchPost(post)}
              >
                <img 
                  src={post.thumbnail} 
                  alt={post.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
                  {/* Platform Tag */}
                  <div className="flex justify-between items-start">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white shadow-md ${
                      post.platform === 'youtube' ? 'bg-red-600' : 'bg-gradient-to-r from-purple-600 to-pink-500'
                    }`}>
                      {post.platform === 'youtube' ? <Youtube className="w-3.5 h-3.5" /> : <Instagram className="w-3.5 h-3.5" />}
                      {post.platform === 'youtube' ? 'YouTube' : 'Instagram'}
                    </span>
                    
                    {/* Location Tag */}
                    <span className="bg-black/40 backdrop-blur-sm text-white/90 text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold" />
                      {post.stateName}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 text-gold-dark rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>

                  {/* Creator and Metadata */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <img 
                        src={post.avatar} 
                        alt={post.creatorName} 
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 rounded-full border border-white/60 object-cover"
                      />
                      <div className="text-left">
                        <p className="text-white text-xs font-semibold leading-tight">{post.creatorName}</p>
                        <p className="text-white/70 text-[10px]">{post.creatorHandle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 text-[11px] font-mono">
                      <span className="flex items-center gap-0.5"><Eye className="w-3 h-3" />{post.views}</span>
                      <span className="flex items-center gap-0.5"><Heart className="w-3 h-3 text-red-500 fill-current" />{post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Information */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Highlights and Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-[10px] uppercase font-semibold text-gold-dark bg-gold/10 px-2 py-0.5 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 
                  className="font-serif text-lg font-bold text-charcoal leading-snug mb-2 hover:text-gold-dark cursor-pointer line-clamp-2"
                  onClick={() => setActiveWatchPost(post)}
                >
                  {post.title}
                </h3>

                {/* Country Highlight */}
                <p className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1">
                  <span className="w-4 h-2.5 bg-gradient-to-b from-orange-400 via-white to-green-600 rounded-sm inline-block border border-gray-200"></span>
                  {post.countryName} &bull; {post.stateName} state
                </p>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-grow line-clamp-3">
                  {post.description}
                </p>

                {/* Actions Bottom panel */}
                <div className="pt-4 border-t border-cream flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setActiveWatchPost(post)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gold-dark hover:text-charcoal transition-colors group-all"
                  >
                    <span>Watch Diaries</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => shareContent(post, e)}
                      title="Share link"
                      className="p-1.5 rounded-lg bg-cream hover:bg-gold/10 text-gray-500 hover:text-gold-dark transition-colors"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Original Link"
                      className="p-1.5 rounded-lg bg-cream hover:bg-gold/10 text-gray-500 hover:text-gold-dark transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Suggestion Box at bottom */}
        <div className="mt-16 bg-gradient-to-r from-gold/15 to-gold/5 rounded-3xl p-8 border border-gold/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-2xl">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-dark" />
              Do you create or love Indian travel vlogs?
            </h3>
            <p className="text-gray-600 text-sm">
              We want to share authentic creator journeys. Recommend a YouTube channel, vlogger, shorts creator, or a specific Instagram reel about any destination in India. Our community will love exploring it!
            </p>
          </div>
          <button
            onClick={() => setShowSubmitModal(true)}
            className="whitespace-nowrap bg-charcoal hover:bg-gold-dark text-white hover:text-white rounded-xl px-6 py-3 text-sm font-semibold transition-all shadow-md flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Recommend Content Now
          </button>
        </div>

      </div>

      {/* WATCH THEATER MODAL */}
      <AnimatePresence>
        {activeWatchPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveWatchPost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-charcoal text-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col md:flex-row relative border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveWatchPost(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 text-white/80 hover:text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Player (Real YouTube iframe or Mock Player) */}
              <div className="flex-grow md:w-3/5 bg-black aspect-video md:aspect-auto md:min-h-[460px] relative">
                {activeWatchPost.platform === 'youtube' && activeWatchPost.embedId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${activeWatchPost.embedId}?autoplay=1`}
                    title={activeWatchPost.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full min-h-[300px] md:h-full"
                  ></iframe>
                ) : (
                  // Mock vertical Reels player since Instagram doesn't support iframe embeds nicely in sandbox iframe
                  <div className="w-full h-full min-h-[300px] md:min-h-[460px] flex flex-col justify-end p-6 relative">
                    <img 
                      src={activeWatchPost.thumbnail} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-40 filter blur-[2px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold/90 text-white flex items-center justify-center animate-pulse">
                        <Play className="w-8 h-8 fill-current ml-1" />
                      </div>
                    </div>
                    {/* Simulated Reels overlay */}
                    <div className="relative z-10 text-left text-white mt-auto">
                      <span className="px-2.5 py-1 bg-gradient-to-r from-purple-600 to-pink-500 text-[10px] font-bold rounded-full uppercase tracking-wider mb-2 inline-block">
                        INSTAGRAM REEL
                      </span>
                      <h4 className="font-serif text-lg font-bold line-clamp-2">{activeWatchPost.title}</h4>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Information & Comments */}
              <div className="w-full md:w-2/5 p-6 flex flex-col justify-between bg-[#1f1f1f] text-gray-200">
                <div className="flex flex-col">
                  {/* Creator Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={activeWatchPost.avatar} 
                      alt={activeWatchPost.creatorName} 
                      className="w-10 h-10 rounded-full border border-gold object-cover"
                    />
                    <div className="text-left">
                      <p className="text-white text-sm font-bold flex items-center gap-1">
                        {activeWatchPost.creatorName}
                        <Award className="w-3.5 h-3.5 text-gold" />
                      </p>
                      <p className="text-gold text-xs">{activeWatchPost.creatorHandle}</p>
                    </div>
                  </div>

                  {/* Title and Country */}
                  <h3 className="font-serif text-xl font-semibold text-white mb-2 leading-snug">
                    {activeWatchPost.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1 text-gold">
                      <MapPin className="w-3 h-3" />
                      {activeWatchPost.stateName}, India
                    </span>
                    <span>&bull;</span>
                    <span>{activeWatchPost.views} Views</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 bg-black/30 p-3 rounded-xl max-h-40 overflow-y-auto">
                    {activeWatchPost.description}
                  </p>

                  {/* Dynamic Simulation Tip */}
                  <div className="bg-gold/10 border border-gold/20 p-3 rounded-xl text-xs text-gold">
                    <span className="font-bold">🌍 Local Perspective:</span> Traveling is best experienced through the voice of those who live and breathe the culture. Supporting independent creators keeps the heritage alive!
                  </div>
                </div>

                {/* Bottom Actions inside modal */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3 mt-4">
                  <a
                    href={activeWatchPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow bg-gold hover:bg-gold-dark text-charcoal hover:text-charcoal font-bold py-2.5 px-4 rounded-xl text-center text-xs tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>View on {activeWatchPost.platform === 'youtube' ? 'YouTube' : 'Instagram'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  
                  <button
                    onClick={(e) => shareContent(activeWatchPost, e)}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
                    title="Share Video"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RECOMMEND SUBMIT MODAL */}
      <AnimatePresence>
        {showSubmitModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSubmitModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl text-left border border-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setShowSubmitModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-charcoal p-1 rounded-full bg-cream"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2 flex items-center gap-2">
                <Compass className="w-5.5 h-5.5 text-gold-dark" />
                Recommend Vlogger
              </h3>
              <p className="text-gray-500 text-xs mb-6">
                Tell us about an outstanding travel vlogger or specific video. It will instantly render on the interactive Social Atlas.
              </p>

              {successMsg ? (
                <div className="py-8 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="font-bold text-lg text-charcoal mb-1">Thank You!</h4>
                  <p className="text-gray-500 text-sm">Your recommendation is now live in the Social Atlas!</p>
                </div>
              ) : (
                <form onSubmit={handleRecommendSubmit} className="space-y-4">
                  {/* Creator Name & Handle */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-charcoal mb-1">CREATOR NAME *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Karl Rock"
                        value={formCreatorName}
                        onChange={(e) => setFormCreatorName(e.target.value)}
                        className="w-full bg-cream/40 border border-gold/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-charcoal mb-1">HANDLE (@)</label>
                      <input 
                        type="text" 
                        placeholder="e.g. @karlrock"
                        value={formHandle}
                        onChange={(e) => setFormHandle(e.target.value)}
                        className="w-full bg-cream/40 border border-gold/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  {/* Platform & State selection */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-charcoal mb-1">PLATFORM</label>
                      <select
                        value={formPlatform}
                        onChange={(e) => setFormPlatform(e.target.value as any)}
                        className="w-full bg-cream/40 border border-gold/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold cursor-pointer"
                      >
                        <option value="youtube">YouTube Video</option>
                        <option value="instagram">Instagram Reel</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-charcoal mb-1">TARGET STATE</label>
                      <select
                        value={formState}
                        onChange={(e) => setFormState(e.target.value)}
                        className="w-full bg-cream/40 border border-gold/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold cursor-pointer"
                      >
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Goa">Goa</option>
                        <option value="Ladakh">Ladakh</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Assam">Assam</option>
                      </select>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1">VIDEO TITLE *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Incredible Street Food in Chandni Chowk"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      className="w-full bg-cream/40 border border-gold/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1">SUMMARY / DESCRIPTION</label>
                    <textarea 
                      placeholder="Short sentence of why travelers must watch this video..."
                      value={formDesc}
                      onChange={(e) => setFormDesc(e.target.value)}
                      rows={2}
                      className="w-full bg-cream/40 border border-gold/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold resize-none"
                    />
                  </div>

                  {/* Link URL */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1">VIDEO / REEL URL *</label>
                    <input 
                      type="url" 
                      required
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={formUrl}
                      onChange={(e) => setFormUrl(e.target.value)}
                      className="w-full bg-cream/40 border border-gold/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1">TAGS (COMMA SEPARATED)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Street Food, Markets, Culture"
                      value={formTags}
                      onChange={(e) => setFormTags(e.target.value)}
                      className="w-full bg-cream/40 border border-gold/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full bg-gold-dark hover:bg-gold text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md mt-2"
                  >
                    Publish to Social Atlas
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
