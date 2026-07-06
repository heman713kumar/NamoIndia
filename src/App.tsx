import { RouterProvider, useRouter } from './context/RouterContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import DestinationsGrid from './components/DestinationsGrid';
import DestinationDetail from './components/DestinationDetail';
import CityDetail from './components/CityDetail';
import AttractionDetail from './components/AttractionDetail';
import { NationalParksGrid, NationalParkDetail } from './components/NationalParksView';
import { HeritageSitesGrid, HeritageSiteDetail } from './components/HeritageSitesView';
import { AdventureHub, AdventureDetail, AdventureRouteDetail } from './components/AdventureActivitiesView';
import ExperientialDetail from './components/ExperientialDetail';
import SavedItineraryView from './components/SavedItineraryView';
import { AboutView, TravelTipsView, FAQView, PrivacyPolicyView, TermsView } from './components/UtilityViews';
import FestivalsGrid from './components/FestivalsGrid';
import FestivalDetail from './components/FestivalDetail';
import ThingsToDoHub from './components/ThingsToDoHub';
import ThingsToDoSubPage from './components/ThingsToDoSubPage';
import CultureExperienceDetail from './components/CultureExperienceDetail';
import WellnessExperienceDetail from './components/WellnessExperienceDetail';
import { CuisineHub, CuisineDetail } from './components/CuisineView';
import TripPlanner from './components/TripPlanner';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';
import WeddingDestinationsView from './components/WeddingDestinationsView';
import CulturalFestivalsView from './components/CulturalFestivalsView';
import SocialAtlasView from './components/SocialAtlasView';
import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const { route } = useRouter();

  // Route-to-component mapping
  const renderPage = () => {
    switch (route.path) {
      case 'home':
        return <HomeView />;
      case 'destinations':
        return <DestinationsGrid />;
      case 'destination-detail':
        return <DestinationDetail />;
      case 'city-detail':
        return <CityDetail />;
      case 'attraction-detail':
        return <AttractionDetail />;
      case 'national-parks':
        return <NationalParksGrid />;
      case 'national-park-detail':
        return <NationalParkDetail />;
      case 'heritage-sites':
        return <HeritageSitesGrid />;
      case 'heritage-site-detail':
        return <HeritageSiteDetail />;
      case 'experiential-detail':
      case 'adventure-detail':
      case 'food-detail':
      case 'culture-detail':
      case 'wellness-detail':
        return <ExperientialDetail />;
      case 'adventure':
        return <AdventureHub />;
      case 'adventure-activity-detail':
        return <AdventureDetail />;
      case 'adventure-route-detail':
        return <AdventureRouteDetail />;
      case 'trip-planner-detail':
        return <SavedItineraryView />;
      case 'about':
        return <AboutView />;
      case 'travel-tips':
        return <TravelTipsView />;
      case 'faq':
        return <FAQView />;
      case 'privacy-policy':
        return <PrivacyPolicyView />;
      case 'terms':
        return <TermsView />;
      case 'festivals':
        return <FestivalsGrid />;
      case 'festival-detail':
        return <FestivalDetail />;
      case 'things-to-do':
        return <ThingsToDoHub />;
      case 'food':
        return <CuisineHub />;
      case 'cuisine-detail':
        return <CuisineDetail />;
      case 'culture':
      case 'wellness':
        return <ThingsToDoSubPage />;
      case 'culture-experience-detail':
        return <CultureExperienceDetail />;
      case 'wellness-experience-detail':
        return <WellnessExperienceDetail />;
      case 'trip-planner':
        return <TripPlanner />;
      case 'blog':
      case 'blog-detail':
        return <BlogView />;
      case 'contact':
        return <ContactView />;
      case 'weddings':
        return <WeddingDestinationsView />;
      case 'festivals-guide':
        return <CulturalFestivalsView />;
      case 'social-atlas':
        return <SocialAtlasView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream selection:bg-gold/30 text-charcoal">
      <Header />
      
      {/* Route-driven main container with luxurious fade entrance animation */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={route.path + (route.params?.id || route.params?.slug || route.params?.stateId || route.params?.cityId || route.params?.attractionId || route.params?.parkId || route.params?.siteId || route.params?.itineraryId || route.params?.activityId || route.params?.routeId || route.params?.cuisineId || route.params?.experienceId || '')}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
