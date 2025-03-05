import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HeroAnimation from './HeroAnimation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const LandingPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-[#0f1629] text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroAnimation />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block mb-4"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-lg rounded-full px-4 py-1 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Live on Sepolia Network</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-6"
            variants={itemVariants}
          >
            Predict. Trade. Earn.
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Experience the future of prediction markets on our decentralized platform. Create markets, trade positions, and earn rewards in a transparent, trustless environment.
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Link
              to="/markets"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Launch App</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1]"></div>
                <div className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-700 origin-bottom-left transform rotate-45 translate-x-24 bg-purple-500 rounded-full opacity-30 group-hover:rotate-90"></div>
              </div>
            </Link>
            <Link
              to="/faucet"
              className="px-8 py-4 text-lg font-semibold rounded-xl border border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300 hover:scale-105 hover:border-violet-500/50"
            >
              Get Test Tokens
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our platform combines the power of blockchain technology with an intuitive user experience to bring you the future of prediction markets.</p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <FeatureCard
            title="Decentralized Markets"
            description="Create and participate in prediction markets without intermediaries. Smart contracts ensure transparency and fairness."
            icon="🔗"
            delay={0}
          />
          <FeatureCard
            title="Low Fees"
            description="Benefit from minimal trading fees and maximum returns on your successful predictions."
            icon="💎"
            delay={0.2}
          />
          <FeatureCard
            title="Instant Settlement"
            description="Get your rewards instantly as soon as the market resolves. No waiting periods or manual processing."
            icon="⚡"
            delay={0.4}
          />
        </motion.div>
      </motion.div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white/5">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Get started with prediction markets in just a few simple steps</p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <StepCard
            number="01"
            title="Connect Wallet"
            description="Connect your Web3 wallet to get started. New to crypto? We'll guide you through the process."
            delay={0}
          />
          <StepCard
            number="02"
            title="Choose Markets"
            description="Browse through available markets or create your own. Filter by category, volume, or end date."
            delay={0.2}
          />
          <StepCard
            number="03"
            title="Trade & Earn"
            description="Take positions on outcomes you believe in and earn rewards when you're right."
            delay={0.4}
          />
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">
            Ready to Start Predicting?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of traders already using our platform to trade on future outcomes
          </p>
          <Link
            to="/markets"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:opacity-90 transition-opacity duration-200"
          >
            Explore Markets
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ value, label }) => (
  <motion.div 
    className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-gray-400 mt-1">{label}</div>
  </motion.div>
);

const FeatureCard = ({ title, description, icon, delay }) => (
  <motion.div 
    className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-200"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
  >
    <motion.div 
      className="text-4xl mb-4"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, delay: delay + 0.2 }}
      viewport={{ once: true }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const StepCard = ({ number, title, description, delay }) => (
  <motion.div 
    className="relative p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-200"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
  >
    <motion.div 
      className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] flex items-center justify-center font-bold border border-white/20"
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, delay: delay + 0.2 }}
      viewport={{ once: true }}
    >
      {number}
    </motion.div>
    <h3 className="text-xl font-semibold mb-2 mt-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default LandingPage;
