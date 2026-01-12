import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, Shield, Globe, Code, Lock, Database, 
  Cpu, Cloud, Server, Terminal, Sparkles, 
  BarChart, CpuIcon, Brain, Wifi, Star, Rocket,
  Infinity as InfinityIcon, Target, Layers, 
  Sparkle, ChevronRight, Users, Clock, TrendingUp,
  Heart, X, Filter, Plus, RefreshCw, Volume2
} from "lucide-react";
import MainLayout from "../layouts/MainLayout";

const UiSamples = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedCards, setLikedCards] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const [cardInteractions, setCardInteractions] = useState({});

  // Categories for filtering
  const categories = [
    { id: "all", label: "All Cards", count: 10, icon: Layers },
    { id: "basic", label: "Basic", count: 3, icon: Star },
    { id: "medium", label: "Medium", count: 3, icon: TrendingUp },
    { id: "advanced", label: "Advanced", count: 4, icon: Rocket },
    { id: "favorites", label: "Favorites", count: 0, icon: Heart }
  ];

  // Enhanced cards data with more variety
  const cards = [
    {
      id: 1,
      category: "basic",    
      title: "Essential Security",
      description: "Core protection for your applications with advanced threat detection",
      icon: Shield,
      features: ["Real-time threat detection", "SSL/TLS encryption", "24/7 monitoring", "DDoS protection"],
      gradient: "from-blue-500/20 via-cyan-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
      accentColor: "blue",
      price: "$29/mo",
      rating: 4.8,
      users: "10K+",
      animation: "pulse",
      action: "secure",
      progress: 75,
      tags: ["security", "essential", "beginner"]
    },
    {
      id: 2,
      category: "basic",
      title: "Performance Boost",
      description: "Optimize your application speed with intelligent caching",
      icon: Zap,
      features: ["Global CDN", "Asset optimization", "Smart caching", "Load balancing"],
      gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
      accentColor: "purple",
      price: "$39/mo",
      rating: 4.9,
      users: "15K+",
      animation: "shake",
      action: "boost",
      progress: 90,
      tags: ["performance", "speed", "optimization"]
    },
    {
      id: 3,
      category: "basic",
      title: "Global Reach",
      description: "Deploy your apps worldwide with minimal latency",
      icon: Globe,
      features: ["100+ regions", "Geo-routing", "Edge computing", "Local caching"],
      gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400",
      accentColor: "green",
      price: "$49/mo",
      rating: 4.7,
      users: "8K+",
      animation: "orbit",
      action: "deploy",
      progress: 60,
      tags: ["global", "deployment", "latency"]
    },
    {
      id: 4,
      category: "medium",
      title: "Advanced Analytics",
      description: "Deep insights into user behavior and performance",
      icon: BarChart,
      features: ["Real-time dashboards", "Predictive analytics", "Custom metrics", "AI insights"],
      gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/40",
      iconColor: "text-orange-400",
      accentColor: "orange",
      price: "$99/mo",
      rating: 4.9,
      users: "5K+",
      animation: "wave",
      action: "analyze",
      progress: 85,
      hasFloatingOrbs: true,
      tags: ["analytics", "insights", "data"]
    },
    {
      id: 5,
      category: "medium",
      title: "AI Integration",
      description: "Smart features powered by cutting-edge AI",
      icon: Brain,
      features: ["ML models", "NLP processing", "Computer vision", "Predictive models"],
      gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
      borderColor: "border-violet-500/40",
      iconColor: "text-violet-400",
      accentColor: "violet",
      price: "$149/mo",
      rating: 4.8,
      users: "3K+",
      animation: "neural",
      action: "ai",
      progress: 70,
      hasFloatingOrbs: true,
      tags: ["ai", "machine-learning", "intelligence"]
    },
    {
      id: 6,
      category: "medium",
      title: "Cloud Native",
      description: "Modern cloud architecture for scalable applications",
      icon: Cloud,
      features: ["Kubernetes", "Microservices", "Auto-scaling", "Serverless"],
      gradient: "from-cyan-500/20 via-sky-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/40",
      iconColor: "text-cyan-400",
      accentColor: "cyan",
      price: "$129/mo",
      rating: 4.9,
      users: "12K+",
      animation: "cloud",
      action: "cloud",
      progress: 95,
      hasFloatingOrbs: true,
      tags: ["cloud", "scalable", "modern"]
    },
    {
      id: 7,
      category: "advanced",
      title: "Quantum Compute",
      description: "Next-generation computing power for complex problems",
      icon: CpuIcon,
      features: ["Quantum algorithms", "Quantum-safe encryption", "Hybrid computing", "Parallel processing"],
      gradient: "from-fuchsia-500/30 via-purple-500/30 to-pink-500/30",
      borderColor: "border-fuchsia-500/50",
      iconColor: "text-fuchsia-400",
      accentColor: "fuchsia",
      price: "$299/mo",
      rating: 4.9,
      users: "500+",
      animation: "quantum",
      action: "compute",
      progress: 100,
      hasAnimatedBorder: true,
      hasParticles: true,
      tags: ["quantum", "compute", "future"]
    },
    {
      id: 8,
      category: "advanced",
      title: "Blockchain Security",
      description: "Decentralized security protocols for maximum protection",
      icon: Lock,
      features: ["Smart contracts", "Distributed ledger", "Immutable logs", "Zero-knowledge proofs"],
      gradient: "from-amber-500/30 via-yellow-500/30 to-orange-500/30",
      borderColor: "border-amber-500/50",
      iconColor: "text-amber-400",
      accentColor: "amber",
      price: "$199/mo",
      rating: 4.7,
      users: "2K+",
      animation: "blockchain",
      action: "blockchain",
      progress: 80,
      hasAnimatedBorder: true,
      hasParticles: true,
      tags: ["blockchain", "security", "decentralized"]
    },
    {
      id: 9,
      category: "advanced",
      title: "Neural Network",
      description: "Deep learning infrastructure for intelligent applications",
      icon: Brain,
      features: ["Neural architecture", "Training pipelines", "Inference engines", "Model optimization"],
      gradient: "from-rose-500/30 via-pink-500/30 to-red-500/30",
      borderColor: "border-rose-500/50",
      iconColor: "text-rose-400",
      accentColor: "rose",
      price: "$249/mo",
      rating: 4.8,
      users: "1.5K+",
      animation: "neural-network",
      action: "neural",
      progress: 88,
      hasAnimatedBorder: true,
      hasParticles: true,
      tags: ["neural", "deep-learning", "ai"]
    },
    {
      id: 10,
      category: "advanced",
      title: "IoT Ecosystem",
      description: "Connected device management at massive scale",
      icon: Wifi,
      features: ["Edge computing", "Device orchestration", "Real-time telemetry", "Predictive maintenance"],
      gradient: "from-sky-500/30 via-cyan-500/30 to-teal-500/30",
      borderColor: "border-sky-500/50",
      iconColor: "text-sky-400",
      accentColor: "sky",
      price: "$179/mo",
      rating: 4.6,
      users: "4K+",
      animation: "iot",
      action: "iot",
      progress: 92,
      hasAnimatedBorder: true,
      hasParticles: true,
      tags: ["iot", "devices", "edge"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  // Filter cards based on selected category
  const filteredCards = selectedCategory === "all" 
    ? cards 
    : selectedCategory === "favorites"
    ? cards.filter(card => likedCards[card.id])
    : cards.filter(card => card.category === selectedCategory);

  // Update favorites count
  useEffect(() => {
    const favoritesCount = cards.filter(card => likedCards[card.id]).length;
    categories[4].count = favoritesCount;
  }, [likedCards]);

  // Update view count
  useEffect(() => {
    const timer = setTimeout(() => {
      setViewCount(prev => prev + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle like for a card
  const toggleLike = (cardId) => {
    setLikedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
    
    // Update interactions
    setCardInteractions(prev => ({
      ...prev,
      [cardId]: (prev[cardId] || 0) + 1
    }));
  };

  // Handle card action
  const handleCardAction = (action, cardId) => {
    console.log(`Action: ${action} on card ${cardId}`);
    setCardInteractions(prev => ({
      ...prev,
      [cardId]: (prev[cardId] || 0) + 1
    }));
    
    // Add visual feedback
    const cardElement = document.getElementById(`card-${cardId}`);
    if (cardElement) {
      cardElement.classList.add('active-action');
      setTimeout(() => {
        cardElement.classList.remove('active-action');
      }, 300);
    }
  };

  // Get animation style based on card type
  const getAnimationStyle = (card) => {
    switch(card.animation) {
      case 'pulse':
        return { animation: 'pulse 2s infinite' };
      case 'shake':
        return { animation: 'shake 0.5s ease-in-out infinite' };
      case 'orbit':
        return { animation: 'orbit 3s linear infinite' };
      case 'wave':
        return { animation: 'wave 1.5s ease-in-out infinite' };
      case 'cloud':
        return { animation: 'float 4s ease-in-out infinite' };
      case 'neural':
        return { animation: 'neuralPulse 2s ease-in-out infinite' };
      case 'quantum':
        return { animation: 'quantumSpin 1s linear infinite' };
      case 'blockchain':
        return { animation: 'blockchainMove 2s ease-in-out infinite' };
      case 'neural-network':
        return { animation: 'neuralFlow 3s ease-in-out infinite' };
      case 'iot':
        return { animation: 'pulse 1.5s ease-in-out infinite' };
      default:
        return {};
    }
  };

  const Card = ({ card }) => {
    const Icon = card.icon;
    const interactions = cardInteractions[card.id] || 0;

    return (
      <motion.div
        id={`card-${card.id}`}
        variants={cardVariants}
        layout
        className="group h-full w-full max-w-[90%] mx-auto"
        onMouseEnter={() => setHoveredCard(card.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <motion.div
          whileHover={{ 
            y: -12,
            scale: 1.02,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          className="relative h-full rounded-3xl overflow-hidden card-container"
          style={getAnimationStyle(card)}
        >
          {/* Animated Border for Advanced Cards */}
          {card.hasAnimatedBorder && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-3xl p-[3px] z-0"
              style={{
                background: `conic-gradient(from 0deg, var(--color-${card.accentColor}-500), var(--color-${card.accentColor}-300), var(--color-${card.accentColor}-500))`
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gray-900/90 backdrop-blur-xl" />
            </motion.div>
          )}

          {/* Main Card Content */}
          <div className={`relative h-full rounded-3xl ${card.borderColor} border-2 bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl overflow-hidden`}>
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
            
            {/* Animated Shimmer Effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
            />
            
            {/* Floating Orbs */}
            {card.hasFloatingOrbs && (
              <>
                <motion.div
                  animate={{ 
                    y: [0, -30, 0],
                    x: [0, 20, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-6 right-10 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl"
                />
                <motion.div
                  animate={{ 
                    y: [0, 30, 0],
                    x: [0, -20, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5 
                  }}
                  className="absolute bottom-10 left-6 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl"
                />
              </>
            )}

            {/* Particles for Advanced Cards */}
            {card.hasParticles && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      x: [0, Math.random() * 120 - 60],
                      y: [0, Math.random() * 120 - 60],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{ 
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className={`absolute w-2 h-2 rounded-full bg-${card.accentColor}-400/60`}
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 20}%`,
                    }}
                  />
                ))}
              </>
            )}

            {/* Interactive Elements */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleLike(card.id)}
                className={`p-2 rounded-full backdrop-blur-sm ${likedCards[card.id] ? 'bg-red-500/20' : 'bg-white/5'} hover:bg-white/10 transition-colors`}
              >
                <Heart 
                  size={18} 
                  className={likedCards[card.id] ? 'text-red-400 fill-red-400' : 'text-gray-400'} 
                />
              </motion.button>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-8 h-full flex flex-col">
              {/* Header with Icon and Stats */}
              <div className="flex items-start justify-between mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 rounded-2xl ${card.iconColor} bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                >
                  <Icon size={32} />
                </motion.div>
                
                {/* Stats */}
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-white">{card.rating}</span>
                  </div>
                  <div className="text-xs text-gray-400">{card.users} users</div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                {card.title}
              </h3>
              <p className="text-gray-300 mb-6 flex-grow">{card.description}</p>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Performance</span>
                  <span>{card.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${card.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className={`h-full bg-gradient-to-r from-${card.accentColor}-500 to-${card.accentColor}-300`}
                  />
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {card.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center text-gray-300 group/feature"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="mr-3"
                    >
                      <Sparkles size={14} className={`text-${card.accentColor}-400`} />
                    </motion.div>
                    <span className="group-hover/feature:text-white transition-colors">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {card.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-${card.accentColor}-500/10 text-${card.accentColor}-300`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price and Actions */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-white">{card.price}</div>
                    <div className="text-xs text-gray-400">per month</div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Interactions: {interactions}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCardAction(card.action, card.id)}
                    className={`flex-1 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-${card.accentColor}-600 to-${card.accentColor}-400 hover:shadow-lg hover:shadow-${card.accentColor}-500/30 transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <span>Get Started</span>
                    <ChevronRight size={18} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 rounded-xl font-semibold text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300"
                  >
                    Demo
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Category Badge with Interactions */}
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 ${card.category === 'basic' ? 'bg-blue-500/20 text-blue-300' : card.category === 'medium' ? 'bg-purple-500/20 text-purple-300' : 'bg-fuchsia-500/20 text-fuchsia-300'}`}>
              {card.category.toUpperCase()}
              {cardInteractions[card.id] > 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <MainLayout>
      <div className="min-h-screen mt-10 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Stats */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm mb-6"
            >
              <Sparkle size={16} className="text-cyan-400" />
              <span className="text-sm text-gray-300">Premium Card System v2.0</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Card Designs</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
            >
              Explore our curated collection of premium animated cards with unique interactions
            </motion.p>

            {/* Stats Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{cards.length}</div>
                <div className="text-sm text-gray-400">Total Cards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{Object.keys(likedCards).filter(id => likedCards[id]).length}</div>
                <div className="text-sm text-gray-400">Favorites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{viewCount}</div>
                <div className="text-sm text-gray-400">Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {Object.values(cardInteractions).reduce((a, b) => a + b, 0)}
                </div>
                <div className="text-sm text-gray-400">Interactions</div>
              </div>
            </motion.div>
          </div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-3 rounded-xl font-medium flex items-center gap-2 transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? cat.id === 'basic' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : cat.id === 'medium' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      : cat.id === 'advanced' ? 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30'
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  <CatIcon size={16} />
                  <span>{cat.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    selectedCategory === cat.id ? 'bg-white/20' : 'bg-gray-700'
                  }`}>
                    {cat.count}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredCards.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Legend and Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-wrap justify-between items-center gap-6">
              <div className="flex flex-wrap gap-6">
                {['basic', 'medium', 'advanced'].map((category) => (
                  <div key={category} className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${category === 'basic' ? 'bg-blue-500' : category === 'medium' ? 'bg-purple-500' : 'bg-fuchsia-500'}`} />
                    <span className="text-gray-300 capitalize">{category} Tier</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-colors flex items-center gap-2"
                >
                  <RefreshCw size={16} />
                  Refresh
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAudioEnabled(!audioEnabled)}
                  className={`px-4 py-2 rounded-lg ${audioEnabled ? 'bg-green-500/20 text-green-300' : 'bg-gray-800/50 text-gray-300'} hover:bg-gray-700/50 transition-colors flex items-center gap-2`}
                >
                  <Volume2 size={16} />
                  Sound {audioEnabled ? 'On' : 'Off'}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-center text-gray-500 text-sm"
          >
            <p>✨ New designs added every 3 days! Each card features unique animations and interactions.</p>
            <p className="mt-2">Total views: {viewCount} • Last updated: Today</p>
          </motion.div>
        </div>
      </div>

      {/* Add CSS Animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes neuralPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
        }
        
        @keyframes quantumSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes blockchainMove {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(10px) scale(1.05); }
        }
        
        @keyframes neuralFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .card-container.active-action {
          animation: pulse 0.3s ease-in-out;
        }
        
        :root {
          --color-blue-500: #3b82f6;
          --color-purple-500: #8b5cf6;
          --color-green-500: #10b981;
          --color-orange-500: #f97316;
          --color-violet-500: #8b5cf6;
          --color-cyan-500: #06b6d4;
          --color-fuchsia-500: #d946ef;
          --color-amber-500: #f59e0b;
          --color-rose-500: #f43f5e;
          --color-sky-500: #0ea5e9;
          
          --color-blue-300: #93c5fd;
          --color-purple-300: #c4b5fd;
          --color-green-300: #6ee7b7;
          --color-orange-300: #fdba74;
          --color-violet-300: #c4b5fd;
          --color-cyan-300: #67e8f9;
          --color-fuchsia-300: #f0abfc;
          --color-amber-300: #fcd34d;
          --color-rose-300: #fda4af;
          --color-sky-300: #7dd3fc;
        }
      `}</style>
    </MainLayout>
  );
};

export default UiSamples;