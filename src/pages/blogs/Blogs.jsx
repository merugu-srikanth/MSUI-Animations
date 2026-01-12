import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiUser, FiArrowRight, FiBookOpen, FiSearch, FiChevronDown, FiX } from "react-icons/fi";
import MainLayout from "../../layouts/MainLayout";
import blogImg from "../../assets/blogs/Brunoui-how-to-build-ui.png";

// Sample blog images - you can replace these with actual images
const blogImages = {
  blog1: blogImg,

};

// Fallback image if the above don't exist
const defaultBlogImg = blogImg;
// "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80";

// Sample blog data matching the content you provided
const sampleBlogs = [
  {
    id: 1,
    title: "How to Build Stunning Animated UI Components with React, Tailwind CSS & Framer Motion",
    excerpt:
      "Learn how to build stunning animated UI components using React, Tailwind CSS, and Framer Motion. Improve UX, ship faster, and scale your design system with BRUNOUI.",
    content: `
    <h2 class="text-2xl font-bold mt-8 mb-4">
      Introduction
    </h2>

    <p class="text-gray-300 leading-relaxed mb-4">
      Modern web applications are no longer judged only by functionality —
      <strong class="text-white">visual experience</strong> and
      <strong class="text-white">smooth animations</strong>
      now play a huge role in user engagement.
    </p>

    <p class="text-gray-300 leading-relaxed mb-4">
      If you’re building
      <strong class="text-white">SaaS products</strong>,
      <strong class="text-white">dashboards</strong>, or
      <strong class="text-white">startup websites</strong>,
      animated UI components can dramatically improve usability, clarity, and conversion rates.
    </p>

    <p class="text-gray-300 leading-relaxed">
      In this guide, you’ll learn how to build stunning animated UI components using
      <strong class="text-white">React</strong>,
      <strong class="text-white">Tailwind CSS</strong>, and
      <strong class="text-white">Framer Motion</strong>,
      and how platforms like
      <a
        href="https://www.brunoui.in/"
        target="_blank"
        class="text-orange-400 font-semibold hover:underline hover:text-orange-300 transition"
      >
        BRUNOUI
      </a>
      help you ship faster with production-ready components.
    </p>

    <h2 class="text-2xl font-bold mt-10 mb-4">
      Why Animated UI Components Matter
    </h2>

    <p class="text-gray-300 mb-4">
      Static interfaces feel outdated. Subtle animations help users:
    </p>

    <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
      <li>Understand interactions</li>
      <li>Notice important changes</li>
      <li>Feel delight and polish</li>
      <li>Trust your product more</li>
    </ul>

    <p class="text-gray-300">
      Well-designed animations improve UX without hurting performance, guide user attention naturally,
      and make complex interfaces feel simple — exactly what
      <strong class="text-white">modern UI libraries</strong> aim to achieve.
    </p>

    <h2 class="text-2xl font-bold mt-10 mb-4">
      Why React + Tailwind CSS Is a Perfect Match
    </h2>

    <h3 class="text-xl font-semibold mt-6 mb-2">
      ⚛️ React for Component Architecture
    </h3>

    <p class="text-gray-300 mb-4">
      <strong class="text-white">React</strong> allows you to build reusable UI components,
      manage state cleanly, and scale large interfaces with ease.
    </p>

    <h3 class="text-xl font-semibold mt-6 mb-2">
      🎨 Tailwind CSS for Speed & Consistency
    </h3>

    <p class="text-gray-300 mb-4">
      <strong class="text-white">Tailwind CSS</strong> makes styling fast and predictable with its
      utility-first approach, responsive defaults, and easy theming using CSS variables.
    </p>

    <p class="text-gray-300">
      On
      <a
        href="https://www.brunoui.in/components"
        target="_blank"
        class="text-orange-400 font-semibold hover:underline transition"
      >
        BRUNOUI Components
      </a>,
      every component is built using React and Tailwind CSS, making them easy to copy, paste, and customize.
    </p>

    <h2 class="text-2xl font-bold mt-10 mb-4">
      Adding Animations with Framer Motion
    </h2>

    <p class="text-gray-300 mb-4">
      <strong class="text-white">Framer Motion</strong> is the most popular animation library for React —
      and for good reason.
    </p>

    <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
      <li>Declarative animations</li>
      <li>Gesture-based interactions</li>
      <li>Smooth 60fps performance</li>
      <li>Perfect React integration</li>
    </ul>

    <p class="text-gray-300 mb-4">
      BRUNOUI components come pre-animated using Framer Motion, so you don’t need to write complex animation logic.
    </p>

    <p class="text-gray-300">
      👉 Explore live animations in
      <a
        href="https://www.brunoui.in/uisamples"
        target="_blank"
        class="text-orange-400 font-semibold hover:underline transition"
      >
        UI Samples
      </a>
    </p>

    <h2 class="text-2xl font-bold mt-10 mb-4">
      Building Themeable UI with a Color System
    </h2>

    <p class="text-gray-300 mb-4">
      A modern UI must support
      <strong class="text-white">dark mode</strong>,
      <strong class="text-white">brand customization</strong>,
      and
      <strong class="text-white">live previews</strong>.
    </p>

    <p class="text-gray-300">
      BRUNOUI uses CSS variables and a live
      <a
        href="https://www.brunoui.in/colorpicker"
        target="_blank"
        class="text-orange-400 font-semibold hover:underline transition"
      >
        Color Picker
      </a>
      so buttons, cards, dashboards, and charts update instantly.
    </p>

    <h2 class="text-2xl font-bold mt-10 mb-4">
      Conclusion
    </h2>

    <p class="text-gray-300 mb-4">
      Building beautiful, animated UI components doesn’t have to be hard.
    </p>

    <p class="text-gray-300">
      By combining
      <strong class="text-white">React</strong>,
      <strong class="text-white">Tailwind CSS</strong>,
      <strong class="text-white">Framer Motion</strong>,
      and
      <a
        href="https://www.brunoui.in/"
        target="_blank"
        class="text-orange-400 font-semibold hover:underline transition"
      >
        BRUNOUI
      </a>,
      you can ship modern, scalable interfaces faster than ever.
    </p>
  `,
    image: blogImages.blog1,
    author: "BRUNOUI Team",
    tags: [
      "React UI Components",
      "Tailwind CSS",
      "Framer Motion",
      "Animated UI",
      "Design System",
      "BRUNOUI"
    ],
    created_at: "2024-06-01",
    read_time: 7
  }
  ,

];

// Image URL helper function
const getImageUrl = (image) => {
  if (typeof image === 'string') {
    return image.startsWith('http') ? image : defaultBlogImg;
  }
  return image || defaultBlogImg;
};

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

// Calculate read time function
const calculateReadTime = (content) => {
  if (!content) return 1;
  const text = content.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200);
};

// Blog Card Component
const BlogCard = ({ post, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const slug = slugify(post.title);
    navigate(`/blog/${post.id}/${slug}`);
  };

  return (
    <motion.article
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={getImageUrl(post.image)}
          alt={post.title || "Blog Image"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = defaultBlogImg;
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-[#f05c6c] to-[#f69135] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            {post.tags && post.tags.length > 0 ? post.tags[0] : "Technology"}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <FiCalendar className="mr-2 text-[#f05c6c]" />
            <span>{new Date(post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center">
            <FiUser className="mr-2 text-[#f69135]" />
            <span className="font-medium">{post.author || "Audree Team"}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f05c6c] transition-colors duration-300 line-clamp-2 leading-tight">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-700 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#f05c6c]/10 to-[#f69135]/10 text-gray-700 border border-[#f05c6c]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-600">
            <FiBookOpen className="mr-2 text-[#f69135]" />
            <span>{post.read_time || calculateReadTime(post.content)} min read</span>
          </div>
          <motion.div
            className="flex items-center text-[#f05c6c] font-semibold hover:text-[#f69135] transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            Read Article
            <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

// Main Blog Component
const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categoryRef = useRef(null);
  const sortRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Extract unique categories for filter
  const categories = useMemo(() => {
    const allCategories = sampleBlogs.flatMap(post => post.tags || []);
    return ["All", ...new Set(allCategories)];
  }, []);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let result = sampleBlogs.filter(post => {
      const matchesSearch = post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "All" ||
        (post.tags && post.tags.includes(selectedCategory));
      return matchesSearch && matchesCategory;
    });

    // Sort posts
    if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortBy === "oldest") {
      result.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("newest");
    setIsCategoryOpen(false);
    setIsSortOpen(false);
  };

  return (
    <>

      {/* <Helmet>
        <title>Audree Insights Blog | Technology & Business Strategy</title>
        <meta name="description" content="Explore expert insights on enterprise technology, digital transformation, and business strategy from Brunoui" />
      </Helmet> */}
      <MainLayout>
        <section className="min-h-screen py-30 ">
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient Orbs */}
            <motion.div
              className="absolute -top-20 -left-20 w-96 h-96 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                background: 'radial-gradient(circle at center, #f05c6c/10 0%, transparent 70%)',
                opacity: 0.1
              }}
            />

            <motion.div
              className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full"
              animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                background: 'radial-gradient(circle at center, #f69135/10 0%, transparent 70%)',
                opacity: 0.1
              }}
            />

            {/* Floating Dots */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 2 === 0 ? '#f05c6c' : '#f69135',
                  opacity: 0.05
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.random() * 10 - 5, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#f05c6c] to-[#f69135] text-white text-sm font-semibold rounded-full mb-4 shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <FiBookOpen className="mr-2" />
                Technology Insights
              </motion.div>

              {/* Main Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className="text-gray-100">Brunoui </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f05c6c] via-[#f78235] to-[#f69135]">
                  Insights Blog
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-5 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Expert analysis, strategic insights, and practical guidance on enterprise technology,
                digital transformation, and business innovation.
              </motion.p>
            </div>

            {/* Search and Filters */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-12 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-1">
                  <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#f05c6c] focus:ring-2 focus:ring-[#f05c6c]/20 outline-none transition-all duration-300 bg-brand-dark "
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <FiX />
                    </button>
                  )}
                </div>

                {/* Desktop Filters */}
                <div className="hidden md:flex items-center gap-4">
                  {/* Category Filter */}
                  <div className="relative" ref={categoryRef}>
                    <motion.button
                      onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-brand-dark text-white hover:border-[#f05c6c] transition-all duration-300 min-w-[180px]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-gray-100 font-medium">
                        {selectedCategory === "All" ? "All Categories" : selectedCategory}
                      </span>
                      <motion.div
                        animate={{ rotate: isCategoryOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiChevronDown className="w-4 h-4 text-gray-600" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {isCategoryOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-full bg-brand-dark border border-gray-200 rounded-xl shadow-2xl z-50 py-2 max-h-96 overflow-y-auto"
                        >
                          {categories.map(category => (
                            <motion.button
                              key={category}
                              onClick={() => {
                                setSelectedCategory(category);
                                setIsCategoryOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${selectedCategory === category
                                ? "bg-gradient-to-r from-[#f05c6c]/10 to-[#f69135]/10 text-[#f05c6c] font-medium"
                                : "text-gray-700"
                                }`}
                              whileHover={{ x: 4 }}
                            >
                              {category}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Sort Filter */}
                  <div className="relative" ref={sortRef}>
                    <motion.button
                      onClick={() => setIsSortOpen(!isSortOpen)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-brand-dark text-white hover:border-[#f69135] transition-all duration-300 min-w-[160px]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-gray-100 font-medium">
                        {sortBy === "newest" ? "Newest First" : "Oldest First"}
                      </span>
                      <motion.div
                        animate={{ rotate: isSortOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiChevronDown className="w-4 h-4 text-gray-600" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {isSortOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-2xl z-50 py-2"
                        >
                          {["newest", "oldest"].map(option => (
                            <motion.button
                              key={option}
                              onClick={() => {
                                setSortBy(option);
                                setIsSortOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${sortBy === option
                                ? "bg-gradient-to-r from-[#f05c6c]/10 to-[#f69135]/10 text-[#f05c6c] font-medium"
                                : "text-gray-700"
                                }`}
                              whileHover={{ x: 4 }}
                            >
                              {option === "newest" ? "Newest First" : "Oldest First"}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Clear Filters Button */}
                  {(searchQuery !== "" || selectedCategory !== "All") && (
                    <motion.button
                      onClick={clearFilters}
                      className="text-gray-600 hover:text-gray-800 flex items-center px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Clear filters
                      <FiX className="ml-2" />
                    </motion.button>
                  )}
                </div>

                {/* Mobile Filter Toggle */}
                <button
                  className="md:hidden flex items-center justify-between w-full px-4 py-3 rounded-xl border border-gray-200 bg-white"
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                >
                  <span className="font-medium text-gray-800">Filters</span>
                  <FiChevronDown className={`transform transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Mobile Filters (Collapsible) */}
              <AnimatePresence>
                {isFiltersOpen && (
                  <motion.div
                    className="mt-4 grid grid-cols-1 gap-4 md:hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Category Select */}
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#f05c6c] focus:ring-2 focus:ring-[#f05c6c]/20 outline-none bg-white"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>

                    {/* Sort Select */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#f69135] focus:ring-2 focus:ring-[#f69135]/20 outline-none bg-white"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                    </select>

                    {/* Clear Filters Button */}
                    {(searchQuery !== "" || selectedCategory !== "All") && (
                      <motion.button
                        onClick={clearFilters}
                        className="text-gray-600 hover:text-gray-800 flex items-center justify-center py-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                        whileTap={{ scale: 0.95 }}
                      >
                        Clear all filters
                        <FiX className="ml-2" />
                      </motion.button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Blog Grid */}
            {filteredPosts.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-6xl mb-4" style={{ color: '#f05c6c' }}>🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No articles found</h3>
                <p className="text-gray-700 mb-6 max-w-md mx-auto">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <motion.button
                  onClick={clearFilters}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f05c6c] to-[#f69135] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear all filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </section></MainLayout>

    </>
  );
};

export default Blogs;