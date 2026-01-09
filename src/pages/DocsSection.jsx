import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Code, Rocket, Sparkles, CheckCircle, XCircle, ArrowRight, Copy, Terminal, Cpu } from "lucide-react";
import MainLayout from "../layouts/MainLayout";

const DocsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    },
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseGlow = {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <MainLayout>
      <section className="relative py-10 md:py-40 bg-gradient-to-br from-black via-[#0a0a0a] to-gray-900 text-white overflow-hidden">

        {/* Dynamic Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-brand-primary/5" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Animated Glow Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-500/30 to-transparent blur-3xl rounded-full"
          animate={pulseGlow}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-brand-primary/20 via-transparent to-orange-400/10 blur-3xl rounded-full"
          animate={{
            ...pulseGlow,
            transition: { ...pulseGlow.transition, delay: 2 }
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-brand-500/15 to-transparent blur-3xl rounded-full"
          animate={floatAnimation}
        />

        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/4 left-10 text-orange-400/20"
          animate={floatAnimation}
        >
          <Terminal size={48} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-10 text-brand-primary/20"
          animate={{
            ...floatAnimation,
            transition: { ...floatAnimation.transition, delay: 1 }
          }}
        >
          <Cpu size={56} />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Title with Animated Gradient */}

           <motion.div
              className="  flex items-center justify-center mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-brand-primary to-orange-500 rounded-2xl blur-xl opacity-50" />
                <div className="relative px-6 py-3 bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-2xl">
                  <span className="text-sm font-semibold text-orange-300">WHY BRUNOUI?</span>
                </div>
              </div>
            </motion.div>
          <motion.div
            variants={item}
            className="text-center mb-12"
          >
           

      <motion.h2
  variants={item}
  className="
    text-3xl sm:text-4xl md:text-6xl lg:text-7xl
    font-bold
    mb-6
    leading-tight
    text-center md:text-left
    flex flex-col md:inline
  "
>
  {/* Free */}
  <span className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
    Free.
  </span>

  {/* No Install */}
  <span className="relative mx-0 md:mx-4 inline-flex items-center justify-center">
    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
      No Install.
    </span>

    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="
        absolute
        -top-2 -right-2
        md:-top-4 md:-right-4
        text-orange-500
      "
    >
      <Sparkles size={20} className="md:hidden" />
      <Sparkles size={32} className="hidden md:block" />
    </motion.div>
  </span>

  {/* Copy & Paste */}
  <span className="bg-gradient-to-r from-orange-400 to-brand-primary bg-clip-text text-transparent">
    Copy & Paste.
  </span>
</motion.h2>


            <motion.p
              variants={item}
              className="text-xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed"
            >
              All components are completely free to use, no copyright restrictions,
              no npm installs, and no dependencies. What you see is what you ship.
            </motion.p>
          </motion.div>

          {/* Feature Cards with Hover Effects */}
          <motion.div
            variants={container}
            className="grid md:grid-cols-3 gap-8 mt-20"
          >
            {[
              {
                icon: <Zap className="text-orange-400" size={28} />,
                title: "Zero Dependencies",
                desc: "No UI libraries. No lock-in. Just clean React + Tailwind.",
                gradient: "from-orange-500/20 to-orange-400/10"
              },
              {
                icon: <Rocket className="text-brand-primary" size={28} />,
                title: "Fully Animated",
                desc: "Framer Motion powered animations with smooth performance.",
                gradient: "from-brand-primary/20 to-blue-500/10"
              },
              {
                icon: <Shield className="text-green-400" size={28} />,
                title: "Production Ready",
                desc: "Clean code, scalable structure, easy to customize.",
                gradient: "from-green-500/20 to-emerald-400/10"
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${f.gradient} rounded-3xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />

                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full">
                  {/* Icon Container */}
                  <motion.div
                    className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5 mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {f.icon}
                  </motion.div>

                  <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-brand-primary group-hover:bg-clip-text transition-all">
                    {f.title}
                  </h4>

                  <p className="text-gray-300 leading-relaxed">
                    {f.desc}
                  </p>

                  {/* Animated Bottom Line */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Comparison Section */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.005 }}
            className="relative mt-32"
          >
            {/* Comparison Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 via-brand-primary/30 to-orange-500/30 rounded-3xl blur-xl opacity-50" />

            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-10 overflow-hidden">
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-40 h-40 border border-orange-500/20 rounded-full"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-60 h-60 border border-brand-primary/20 rounded-full"
              />

              <motion.h3
                variants={item}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                Why <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">No Install</span> Matters
              </motion.h3>

              <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-4xl mx-auto gap-10 md:gap-12">
                {/* Traditional Problems */}
                <motion.div
                  variants={item}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/20">
                      <XCircle className="text-red-400" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Traditional Problems</h4>
                  </div>

                  {[
                    "Heavy npm packages bloat your project",
                    "Breaking updates that require migration",
                    "Limited customization options",
                    "Large bundle sizes slow down apps",
                    "Vendor lock-in and dependency hell",
                    "Complex setup and configuration"
                  ].map((problem, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group"
                    >
                      <XCircle className="text-red-400 mt-1 flex-shrink-0" size={20} />
                      <p className="text-gray-300 group-hover:text-red-200 transition-colors">
                        {problem}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* BRUNOUI Solution */}
                <motion.div
                  variants={item}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/10 border border-green-500/20">
                      <CheckCircle className="text-green-400" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-white">BRUNOUI Solution</h4>
                  </div>

                  {[
                    "Lightweight & lightning fast performance",
                    "Future-proof with no breaking changes",
                    "Full control and easy customization",
                    "Minimal bundle size for faster loads",
                    "No vendor lock-in, complete freedom",
                    "Instant setup, just copy and paste"
                  ].map((solution, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                      <p className="text-gray-300 group-hover:text-green-200 transition-colors">
                        {solution}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom CTA */}
              <motion.div
                variants={item}
                className="text-center mt-16"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white font-semibold rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                  <span className="relative">Start Building with BRUNOUI</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-32"
          >
            {[
              { value: "100%", label: "Free Forever", icon: "🎯" },
              { value: "0kb", label: "Dependency Size", icon: "⚡" },
              { value: "Fully", label: "Customization", icon: "🎨" },
              { value: "0 sec", label: "Instant Setup", icon: "🚀" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -8 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-md border border-white/5 rounded-2xl"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-brand-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Call to Action */}
          <motion.div
            variants={item}
            className="text-center mt-32"
          >
            <motion.p
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 via-white to-brand-primary bg-[length:200%] bg-clip-text text-transparent mb-6"
              style={{ backgroundPositionX: "0%" }}
            >
              Built for developers who value speed, control, and beautiful UI.
            </motion.p>

            <motion.p
              variants={item}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Join thousands of developers who've shipped faster with BRUNOUI's
              no-install, copy-paste components.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Floating Code Particles */}
        <div className="absolute top-20 right-20 opacity-10">
          <Code size={32} />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10">
          <Copy size={28} />
        </div>
      </section>
    </MainLayout>
  );
};

export default DocsSection;