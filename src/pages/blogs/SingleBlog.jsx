import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import blogImg from "../../assets/blogs/Brunoui-how-to-build-ui.png";

import {
  FiCalendar,
  FiUser,
  FiBookOpen,
  FiArrowLeft,
  FiShare2,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiLink,
} from "react-icons/fi";
import MainLayout from "../../layouts/MainLayout";

// Sample blog data (same as above)
const blogImages = {
  blog1: blogImg, // SAP Rollouts
};


const sampleBlogs = [
  // {
  //   id: 1,
  //   title: "Enterprise Mobility: Extending Business Processes to Mobile",
  //   excerpt: "How mobile solutions are transforming enterprise workflows and field operations with real-time access to systems and data.",
  //   content: `
  //     <h2>Introduction</h2>
  //     <p>Enterprise mobility has become a critical pillar of digital transformation. Organizations are no longer limited to desktop-based systems—business processes are increasingly expected to be accessible anytime, anywhere. Enterprise mobility enables companies to extend core operational workflows to mobile devices, empowering employees, partners, and field teams with real-time access to systems and data.</p>
  //     <p>Rather than being just "mobile apps," enterprise mobility solutions are designed to optimize workflows, improve productivity, and enhance decision-making across the organization.</p>

  //     <h2>Why Enterprise Mobility Is No Longer Optional</h2>
  //     <p>Modern enterprises operate in fast-paced, distributed environments. Delays in approvals, reporting, or field execution can directly impact service quality and operational efficiency.</p>
  //     <p>Enterprise mobility helps organizations:</p>
  //     <ul>
  //       <li>Enable faster approvals and decision-making</li>
  //       <li>Improve responsiveness of field and operational teams</li>
  //       <li>Reduce dependency on manual paperwork</li>
  //       <li>Improve data accuracy through real-time capture</li>
  //       <li>Increase transparency across business functions</li>
  //     </ul>

  //     <h2>Key Business Processes That Benefit from Mobility</h2>
  //     <p>Enterprise mobility can be applied across multiple functions:</p>

  //     <h3>Operational Workflows</h3>
  //     <ul>
  //       <li>Field service management</li>
  //       <li>Maintenance and inspections</li>
  //       <li>Incident reporting and resolution</li>
  //     </ul>

  //     <h3>Workforce Enablement</h3>
  //     <ul>
  //       <li>Attendance, scheduling, and task management</li>
  //       <li>Role-based approvals and escalations</li>
  //       <li>Workforce communication and alerts</li>
  //     </ul>

  //     <h3>Compliance & Governance</h3>
  //     <ul>
  //       <li>Audit data capture</li>
  //       <li>EHS inspections and reporting</li>
  //       <li>Quality checks and validations</li>
  //     </ul>

  //     <h3>Management & Analytics</h3>
  //     <ul>
  //       <li>Mobile dashboards and KPIs</li>
  //       <li>Executive reporting and alerts</li>
  //     </ul>

  //     <h2>Critical Design Considerations</h2>
  //     <p>Building enterprise mobile applications requires more than UI design. Key considerations include:</p>
  //     <ul>
  //       <li><strong>Security & Access Control:</strong> Role-based access, encryption, and secure authentication</li>
  //       <li><strong>Integration:</strong> Seamless connectivity with ERP, CRM, and enterprise systems</li>
  //       <li><strong>Offline Support:</strong> Continuity in low-connectivity environments</li>
  //       <li><strong>Scalability:</strong> Ability to support growing users and data volumes</li>
  //       <li><strong>User Experience:</strong> Simple, intuitive design to drive adoption</li>
  //     </ul>

  //     <h2>Conclusion</h2>
  //     <p>Enterprise mobility transforms how work gets done. When designed around business processes and user needs, mobile solutions become powerful enablers of efficiency, agility, and growth.</p>
  //   `,
  //   image: blogImages.blog1,
  //   author: "John Anderson",
  //   tags: ["Enterprise Mobility", "Digital Transformation", "Mobile Development"],
  //   created_at: "2024-03-15",
  //   read_time: 5
  // },
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
        href="https://www.brunoui.in/"
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
        href="https://www.brunoui.in/color-picker"
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

];

// Helper function to strip HTML tags
const stripHtmlTags = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
};

// Function to calculate read time
const calculateReadTime = (content) => {
  if (!content) return 1;
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200);
};

// Recent Blogs Sidebar Component
const RecentBlogsSidebar = ({ currentBlogId }) => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Filter out current blog and get latest 3
    const filtered = sampleBlogs
      .filter((blog) => blog.id !== currentBlogId)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 3);
    setRecentBlogs(filtered);
  }, [currentBlogId]);

  const handleBlogClick = (blog) => {
    const slug = blog.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    navigate(`/blogs/${blog.id}/${slug}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
        Recent Articles
      </h3>

      <div className="space-y-6">
        {recentBlogs.map((blog) => (
          <motion.article
            key={blog.id}
            className="group cursor-pointer"
            onClick={() => handleBlogClick(blog)}
            whileHover={{ x: 5 }}
          >
            <div className="flex gap-4">
              {/* Image */}
              <div className="relative flex-shrink-0 w-20 h-full overflow-hidden rounded-xl">
                <img
                  src={blog.image || defaultBlogImg}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = defaultBlogImg;
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#f05c6c] transition-colors line-clamp-2">
                  {blog.title}
                </h4>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="mt-2 flex items-center text-xs text-gray-500">
                  <FiCalendar className="mr-1" size={10} />
                  {new Date(blog.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={() => navigate("/blog")}
          className="w-full text-center text-[#f05c6c] hover:text-[#f69135] font-semibold text-sm py-3 rounded-xl border border-gray-200 hover:border-[#f69135] transition-all duration-200"
        >
          View All Articles
        </button>
      </div>
    </div>
  );
};

// Social Share Component
const SocialShare = ({ title, url }) => {
  const shareText = `Check out this article: ${title}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(shareText);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  const socialLinks = [
    {
      icon: <FiFacebook />,
      label: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200",
    },
    {
      icon: <FiTwitter />,
      label: "Twitter",
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      color: "hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200",
    },
  ];

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h4 className="text-lg font-bold text-gray-900 mb-4">
        Share this article
      </h4>
      <div className="flex items-center gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 border border-gray-200 transition-all duration-200 ${social.color}`}
            aria-label={`Share on ${social.label}`}
          >
            {social.icon}
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 hover:text-gray-700 hover:border-gray-300 transition-all duration-200"
          aria-label="Copy link"
        >
          <FiLink />
        </button>
      </div>
    </div>
  );
};

// Single Blog Component
const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Find blog by ID from sample data
    const foundBlog = sampleBlogs.find(b => b.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      setBlog(null);
    }
    setLoading(false);
  }, [id]);

  // Handle HTML content styling
  const createMarkup = (content) => {
    if (!content) return { __html: "" };

    const styledContent = content
      .replace(/<h1/g, '<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4"')
      .replace(/<h2/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4"')
      .replace(/<h3/g, '<h3 class="text-xl font-bold text-gray-800 mt-6 mb-3"')
      .replace(/<h4/g, '<h4 class="text-lg font-bold text-gray-800 mt-6 mb-3"')
      .replace(/<p/g, '<p class="text-gray-700 leading-relaxed mb-4"')
      .replace(/<ul/g, '<ul class="list-disc pl-6 text-gray-700 mb-4"')
      .replace(/<ol/g, '<ol class="list-decimal pl-6 text-gray-700 mb-4"')
      .replace(/<li/g, '<li class="mb-2"')
      .replace(/<a/g, '<a class="text-[#f05c6c] hover:text-[#f69135] underline font-medium"')
      .replace(/<strong/g, '<strong class="font-bold text-gray-900"')
      .replace(/<em/g, '<em class="italic"');

    return { __html: styledContent };
  };

  if (loading) {
    return (
      <div className="min-h-screen py-16 bg-gradient-to-br from-white  to-[#f69135] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f05c6c] mx-auto"></div>
          <p className="mt-4 text-gray-700">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen py-16 bg-gradient-to-br from-white  to-[#f69135] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4" style={{ color: '#f05c6c' }}>📄</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Article Not Found
          </h3>
          <p className="text-gray-700 mb-4">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/blogs")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f05c6c] to-[#f69135] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const currentUrl = window.location.href;
  const metaTitle = blog.title;
  const metaDescription = blog.excerpt;
  const readTime = blog.read_time || calculateReadTime(blog.content);

  return (
    <>
      <MainLayout>
      

        <section className="min-h-screen py-6 ">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 right-20 w-64 h-64 rounded-full"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                background: 'radial-gradient(circle at center, #f05c6c/10 0%, transparent 70%)',
                opacity: 0.1
              }}
            />
          </div>

          <div className="container pt-12 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Back Button */}
            <motion.button
              onClick={() => navigate("/blog")}
              className="flex items-center cursor-pointer text-gray-100 hover:text-orange-500 font-medium mb-3 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ x: -5 }}
            >
              <FiArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
              Back to All Articles
            </motion.button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  {/* Featured Image */}
                  <div className="relative h-full md:h-full overflow-hidden">
                    <img
                      src={blog.image || defaultBlogImg}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = defaultBlogImg;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    {/* Tags Overlay */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {blog.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 md:p-8">
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                      <div className="flex items-center">
                        <FiCalendar className="mr-2 text-[#f05c6c]" />
                        <span>
                          {new Date(blog.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FiUser className="mr-2 text-[#f69135]" />
                        <span className="font-medium">
                          {blog.author || "Audree Team"}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FiBookOpen className="mr-2 text-gray-500" />
                        <span>{readTime} min read</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      {blog.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed border-l-4 border-[#f05c6c] pl-4 italic">
                      {blog.excerpt}
                    </p>

                    {/* Content */}
                    <div
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={createMarkup(blog.content)}
                    />

                    {/* Author Bio */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <div className="flex items-center bg-gradient-to-r from-[#f05c6c]/5 to-[#f69135]/5 rounded-2xl p-6">
                        <div className="mr-4">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#f05c6c] to-[#f69135] flex items-center justify-center text-white font-bold text-xl">
                            {blog.author?.charAt(0) || "A"}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">
                            {blog.author || "Audree Team"}
                          </h4>
                          <p className="text-gray-700 mt-2">
                            Expert insights on technology, business strategy, and digital transformation.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Social Share */}
                    <SocialShare title={blog.title} url={currentUrl} />
                  </div>
                </article>
              </motion.div>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 space-y-8">
                  <RecentBlogsSidebar currentBlogId={blog.id} />

                  {/* Newsletter Signup */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-6">
                    {/* Soft glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f05c6c]/10 to-[#f69135]/10 opacity-60" />

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                        Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f05c6c] to-[#f69135]">
                          BRUNOUI
                        </span>
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed mb-5">
                        Discover <strong className="text-white">stunning animated UI libraries</strong>,
                        beautifully crafted with React, Tailwind CSS, and Framer Motion.
                        Copy, paste, and ship faster.
                      </p>

                      <a
                        href="https://www.brunoui.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl
                 bg-gradient-to-r from-[#f05c6c] to-[#f69135]
                 text-white font-semibold
                 hover:shadow-xl hover:scale-[1.02]
                 transition-all duration-300"
                      >
                        Explore BRUNOUI
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>

                      <p className="mt-4 text-xs text-gray-400 text-center">
                        www.brunoui.in
                      </p>
                    </div>
                  </div>

                </div>
              </motion.aside>
            </div>
          </div>
        </section>

      </MainLayout>
    </>
  );
};

export default SingleBlog;