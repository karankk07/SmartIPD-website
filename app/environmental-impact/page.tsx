'use client'

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from './page.module.css';

// Dynamically import Three.js components to avoid SSR issues
const Earth3D = dynamic(() => import('./components/Earth3D'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-r from-green-200 to-teal-200 rounded-full animate-pulse"></div>
});

export default function EnvironmentalImpact() {
  const scrollRef = useRef(null);
  const targetRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <main ref={scrollRef} className="bg-[#f6f9fc]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-b from-[#0f172a]/90 to-transparent backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="text-2xl font-bold text-white hover:text-green-400 transition-colors">
              Smart IPD
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#solution" className="text-gray-300 hover:text-white transition-colors">Solution</Link>
            <Link href="/#features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
            <Link href="/environmental-impact" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">Case Study</Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </nav>
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-300/20">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="/#solution" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMobileMenu}>Solution</Link>
              <Link href="/#features" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMobileMenu}>Features</Link>
              <Link href="/environmental-impact" className="text-white font-medium" onClick={toggleMobileMenu}>Case Study</Link>
              <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMobileMenu}>Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with 3D Earth */}
      <section ref={targetRef} className={styles.hero}>
        <motion.div className={styles.earthContainer} style={{ opacity, scale }}>
          <Earth3D />
        </motion.div>
        
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTitle}
          >
            <span className={styles.gradientText}>Making Healthcare Greener</span>
            <span className={styles.subtitle}>A 120-Bed Hospital Case Study</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroDescription}
          >
            Discover how Smart IPD helped a Mother and Child Care Hospital eliminate 
            3 tons of paper annually while improving patient care.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.heroCta}
          >
            <a href="#impact" className={styles.primaryButton}>
              See the Impact
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1,
            delay: 1, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className={styles.section}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className={styles.sectionTitle}>The Hospital's Challenge</h2>
            <p className={styles.sectionDescription}>
              A 120-bed Mother and Child Care Hospital was looking to reduce their environmental footprint 
              while improving patient care efficiency. Their paper-based systems created significant environmental 
              waste and operational inefficiencies.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Before Smart IPD</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-red-100 text-red-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">3 tons of paper annually</h4>
                    <p className="text-gray-600">Equivalent to cutting down 75 trees every year just for one hospital</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-red-100 text-red-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">7-hour discharge delays</h4>
                    <p className="text-gray-600">Patients ready at 10 AM wouldn't leave until 5 PM due to paperwork</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-red-100 text-red-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Limited research access</h4>
                    <p className="text-gray-600">Residents couldn't easily access previous case records for research</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">After Smart IPD</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Zero paper consumption</h4>
                    <p className="text-gray-600">Completely eliminated the need for paper in clinical workflows</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Rapid discharges</h4>
                    <p className="text-gray-600">Parallel processing reduced discharge time from 7 hours to under 1 hour</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Instant research access</h4>
                    <p className="text-gray-600">Residents can now access any historical patient data with a few clicks</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section id="impact" className={`${styles.section} ${styles.impactSection}`}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className={styles.sectionTitle}>Environmental Impact</h2>
            <p className={styles.sectionDescription}>
              By eliminating paper from their workflow, the hospital achieved remarkable environmental benefits 
              that contribute to a healthier planet.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={statsVariants}
          >
            <motion.div variants={statItemVariants} className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className={styles.statValue}>75</div>
              <div className={styles.statLabel}>Trees Saved</div>
              <div className={styles.statDescription}>Annually</div>
            </motion.div>
            
            <motion.div variants={statItemVariants} className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className={styles.statValue}>750</div>
              <div className={styles.statLabel}>People's Oxygen</div>
              <div className={styles.statDescription}>Preserved per year</div>
            </motion.div>
            
            <motion.div variants={statItemVariants} className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className={styles.statValue}>2.1M</div>
              <div className={styles.statLabel}>Liters of Water</div>
              <div className={styles.statDescription}>Saved from contamination</div>
            </motion.div>
            
            <motion.div variants={statItemVariants} className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className={styles.statValue}>8,750</div>
              <div className={styles.statLabel}>kg of CO₂</div>
              <div className={styles.statDescription}>Emissions eliminated</div>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.visualCard}>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">The Power of Paperless</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
                  <div className={styles.visualTree}>
                    <div className={styles.treeLeaves}></div>
                    <div className={styles.treeTrunk}></div>
                    <div className={styles.treeLabel}>1 tree</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-500">=</div>
                  <div className="flex flex-wrap justify-center gap-2 max-w-xs">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className={styles.personIcon}></div>
                    ))}
                    <div className={styles.peopleLabel}>10 people's oxygen</div>
                  </div>
                </div>
                <p className="text-center text-gray-600">
                  Saving 75 trees annually provides enough oxygen for 750 people each year.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className={styles.infoCard}>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Paper Production Impact</h4>
                <p className="text-gray-600">
                  Manufacturing one ton of paper consumes 19,000 gallons of water, requiring 10-20 liters for a single A4 sheet. 
                  Additionally, it produces chemical waste that threatens waterways and ecosystems.
                </p>
              </div>
              
              <div className={styles.infoCard}>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Climate Benefits</h4>
                <p className="text-gray-600">
                  The 8,750 kg of CO₂ no longer produced is equivalent to taking nearly 2 passenger vehicles off the road for an entire year, 
                  making a significant contribution to climate change mitigation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Impact Section */}
      <section className={styles.section}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className={styles.sectionTitle}>Clinical Efficiency</h2>
            <p className={styles.sectionDescription}>
              Going paperless didn't just help the environment—it transformed how the hospital operates, 
              improving experiences for both patients and staff.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={styles.benefitCard}
            >
              <div className={styles.benefitIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Saving Clinical Time</h3>
              <p className="text-gray-600 mb-4">
                Medical staff no longer waste time physically carrying files between departments or waiting for paperwork to be processed.
              </p>
              <div className={styles.benefitStat}>
                <div className={styles.benefitValue}>30%</div>
                <div className={styles.benefitUnit}>time saved</div>
              </div>
              <p className="text-gray-500 text-sm italic">More time for patient care</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.benefitCard}
            >
              <div className={styles.benefitIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Faster Discharges</h3>
              <p className="text-gray-600 mb-4">
                Patients previously waited hours after being medically cleared to leave. Now, parallel processing enables rapid discharge.
              </p>
              <div className={styles.benefitStat}>
                <div className={styles.benefitValue}>7</div>
                <div className={styles.benefitUnit}>hours faster</div>
              </div>
              <p className="text-gray-500 text-sm italic">From 10am to 5pm → 10am to 11am</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={styles.benefitCard}
            >
              <div className={styles.benefitIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Research Access</h3>
              <p className="text-gray-600 mb-4">
                Medical residents now have immediate access to patient records for research and education, rather than digging through paper archives.
              </p>
              <div className={styles.benefitStat}>
                <div className={`${styles.benefitValue} text-lg`}>Instant</div>
                <div className={styles.benefitUnit}>digital access</div>
              </div>
              <p className="text-gray-500 text-sm italic">Accelerating medical research</p>
            </motion.div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <div className={styles.testimonialContent}>
              <svg className="h-10 w-10 text-green-500 mb-4 mx-auto" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                Smart IPD has transformed our hospital operations. We're not just saving trees—we're saving time, improving patient satisfaction, and enabling our staff to focus on what matters: providing exceptional care.
              </blockquote>
              <div className="text-gray-600">
                <span className="font-semibold">Dr. Ananya Sharma</span>, Medical Director
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-white opacity-90 mb-8 md:mb-12">
              Join the growing number of healthcare facilities that are reducing their environmental footprint 
              while improving operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#contact">
                <div className="px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors inline-block">
                  Contact Us Today
                </div>
              </Link>
              <Link href="/#solution">
                <div className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors inline-block">
                  Learn More
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">© 2025 Smart IPD. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Making healthcare more efficient and environmentally friendly.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 