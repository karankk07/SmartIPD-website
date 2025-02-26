'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// Import the images from the assets folder
import patientRecordsImg from './assets/patient-records.webp'
import complianceImg from './assets/compliance.jpg'
import risingCostImg from './assets/rising-cost.jpg'
import doctorWritingImg from './assets/doctor-writing.jpg'
import operationalExcellenceImg from './assets/operational-excellence.jpg'
import environmentalExcellenceImg from './assets/environmental-excellence.webp'
import heroImage from './assets/hero-image.png'

export default function Home() {
  const [floatingElements, setFloatingElements] = useState<Array<{x: number, y: number}>>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize floating elements only on the client side
    const elements = Array(5).fill(null).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setFloatingElements(elements);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-sm z-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-teal-600">Smart Paperless IPD</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#solution" className="text-gray-700 hover:text-teal-600 transition-colors">Solution</Link>
              <Link href="#features" className="text-gray-700 hover:text-teal-600 transition-colors">Features</Link>
              <Link href="#impact" className="text-gray-700 hover:text-teal-600 transition-colors">Impact</Link>
              <Link href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</Link>
            </div>
            <div className="md:hidden">
              {/* Mobile menu button */}
              <button className="text-gray-700" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link href="#solution" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={toggleMobileMenu}>Solution</Link>
                <Link href="#features" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={toggleMobileMenu}>Features</Link>
                <Link href="#impact" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={toggleMobileMenu}>Impact</Link>
                <Link href="#about" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={toggleMobileMenu}>About</Link>
                <Link href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={toggleMobileMenu}>Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 pt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="z-10 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                <span className="text-teal-600">Smart Paperless IPD</span>
                <br />
                for Smarter Hospitals
              </h1>
              
              <p className="mt-6 text-xl text-gray-600 mb-8">
                Seamlessly digitizing hospitals while preserving current workflows. Digitize your data without typing!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#contact"
                  className="px-8 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors duration-200"
                >
                  Request Demo
                </Link>
                <Link 
                  href="#features"
                  className="px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-full font-medium hover:bg-teal-50 transition-colors duration-200"
                >
                  Explore Features
                </Link>
              </div>
            </div>
            
            <div className="relative md:order-last">
              <div className="relative z-10">
                <Image 
                  src={heroImage}
                  alt="Doctor using Smart Paperless IPD"
                  className="w-full h-auto rounded-lg shadow-xl"
                  priority
                />
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute top-1/4 -right-16 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                      <div className="w-8 h-8 rounded-full bg-green-400"></div>
                      <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                    </div>
                  </div>
                  <p className="font-bold text-xl">80</p>
                  <p className="text-sm text-gray-600">Live Patients</p>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 -left-16 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="text-center">
                  <p className="font-bold text-xl text-blue-600">+12</p>
                  <p className="text-sm">Patients Discharged</p>
                  <div className="flex items-center justify-center mt-1">
                    <p className="text-xs">1st Jan, 2025</p>
                    <span className="ml-2 text-green-500 text-xs">8% ↑</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingElements.map((element, i) => (
            <div
              key={i}
              className="absolute w-64 h-64 bg-teal-500/10 rounded-full animate-float"
              style={{
                left: `${element.x}px`,
                top: `${element.y}px`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${10 + i * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Problems You Face Everyday Section */}
      <section id="problems" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Problems You Face Everyday
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Inefficient Operations */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-64 relative">
                <Image 
                  src={patientRecordsImg}
                  alt="Person handling patient records"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Inefficient Operations
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Time Lost is Care Lost
                </p>
                <p className="text-gray-700 mb-4">
                  Up to <strong>20 minutes per patient</strong> lost to paperwork
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Less time for care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Delayed treatments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Frustrated staff</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 - Rising Operational Costs */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-64 relative">
                <Image 
                  src={risingCostImg}
                  alt="Rising costs illustration"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Rising Operational Costs
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Paper Costs More Than You Think
                </p>
                <p className="text-gray-700 mb-4">
                  A typical <strong>100-bed hospital wastes ₹20+ lakhs yearly</strong> on paper operations.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Storage space costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>File maintenance expenses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Lost & damaged records</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 - Compliance & Quality Risks */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-64 relative">
                <Image 
                  src={complianceImg}
                  alt="Healthcare professionals discussing compliance"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Compliance & Quality Risks
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Stay Compliant, Stay Confident
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>NABH & JCI compliance</strong> at risk with paper records.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Missing forms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Failed audits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reputation damage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Listen to their problems.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Nurse */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-blue-100">
                  {/* Use a placeholder div instead of Image for now */}
                  <div className="w-full h-full bg-blue-200 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">KN</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Kruthika</h3>
                  <p className="text-sm text-gray-500">Head Nurse, 12 yrs of experience</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                I spend nearly 3 hours every shift just writing and maintaining patient files properly. That's time I could be spending with my patients who need care.
              </p>
            </div>

            {/* Card 2 - Doctor */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-green-100">
                  <div className="w-full h-full bg-green-200 flex items-center justify-center">
                    <span className="text-green-600 font-bold">MK</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dr. Manoj K</h3>
                  <p className="text-sm text-gray-500">Sr. Physician</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Sometimes I need to make critical decisions, but the patient's records are someplace else. There are always problems like missed / wrong medication, not having reports at the right time. These Effect patient care.
              </p>
            </div>

            {/* Card 3 - Medical Records Officer */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-purple-100">
                  <div className="w-full h-full bg-purple-200 flex items-center justify-center">
                    <span className="text-purple-600 font-bold">PS</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Priya Sharma</h3>
                  <p className="text-sm text-gray-500">Medical Records Officer</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Managing thousands of files, ensuring nothing gets lost, and retrieving old records quickly is becoming impossible. Last month alone, we spent over ₹40,000 just on new files and storage.
              </p>
            </div>

            {/* Card 4 - Hospital Administrator */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-yellow-100">
                  <div className="w-full h-full bg-yellow-200 flex items-center justify-center">
                    <span className="text-yellow-600 font-bold">VS</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Vivek Singh</h3>
                  <p className="text-sm text-gray-500">Hospital Administrator</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                With stricter NABH guidelines, maintaining compliance with paper records is a constant struggle. We faced issues in our last audit due to missing documentation.
              </p>
            </div>

            {/* Card 5 - Billing Coordinator */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-red-100">
                  <div className="w-full h-full bg-red-200 flex items-center justify-center">
                    <span className="text-red-600 font-bold">MS</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Md. Sohail</h3>
                  <p className="text-sm text-gray-500">Billing Coordinator</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Collecting all paper files and calculating final bills takes us 45 minutes per patient. Families get frustrated waiting, and we often find missing charge sheets.
              </p>
            </div>

            {/* Card 6 - Quality Assurance Manager */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-indigo-100">
                  <div className="w-full h-full bg-indigo-200 flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">DR</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dheeraj R</h3>
                  <p className="text-sm text-gray-500">Quality Assurance Manager</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Missing forms, torn pages - these issues come up in every audit. It's affecting our hospital's quality scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Smart Solution Section */}
      <section id="solution" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Our Smart Solution
          </h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 mb-2">
              Make your IPD paperless without compromising in the comfort of writing.
            </p>
            <p className="text-xl text-gray-600">
              Efficient Workflow, Better Care, Less Cost.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto aspect-video relative">
            <iframe 
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/U2SVCCENLjE?si=bIPeuqzH5apFowzc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">KEY FEATURES</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why choose Paperless IPD?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Natural Writing */}
            <div className="bg-white rounded-xl p-8 relative">
              <div className="text-8xl font-bold text-gray-100 absolute top-4 left-4">01</div>
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Natural Writing</h3>
                <p className="text-gray-600">
                  Write with stylus just like pen on paper - no typing needed.
                </p>
              </div>
            </div>

            {/* Feature 2 - Smart Alerts */}
            <div className="bg-white rounded-xl p-8 relative">
              <div className="text-8xl font-bold text-gray-100 absolute top-4 left-4">02</div>
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Alerts</h3>
                <p className="text-gray-600">
                  Automatic reminders for medications, tasks, and critical updates
                </p>
              </div>
            </div>

            {/* Feature 3 - Instant Access */}
            <div className="bg-white rounded-xl p-8 relative">
              <div className="text-8xl font-bold text-gray-100 absolute top-4 left-4">03</div>
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Instant Access</h3>
                <p className="text-gray-600">
                  Find any patient file in seconds, from anywhere in the hospital
                </p>
              </div>
            </div>

            {/* Feature 4 - Offline Mode */}
            <div className="bg-white rounded-xl p-8 relative">
              <div className="text-8xl font-bold text-gray-100 absolute top-4 left-4">04</div>
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Offline Mode</h3>
                <p className="text-gray-600">
                  Continue working seamlessly even without internet connection
                </p>
              </div>
            </div>

            {/* Feature 5 - One-Click Reports */}
            <div className="bg-white rounded-xl p-8 relative">
              <div className="text-8xl font-bold text-gray-100 absolute top-4 left-4">05</div>
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">One-Click Reports</h3>
                <p className="text-gray-600">
                  Generate NABH/JCI compliance reports instantly, always audit-ready
                </p>
              </div>
            </div>

            {/* Feature 6 - Real-time Sync */}
            <div className="bg-white rounded-xl p-8 relative">
              <div className="text-8xl font-bold text-gray-100 absolute top-4 left-4">06</div>
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-time Sync</h3>
                <p className="text-gray-600">
                  All updates instantly visible across departments, no more running for files
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact We Create Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Impact We Create
          </h2>

          {/* Clinical Efficiency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image 
                src={doctorWritingImg} 
                alt="Doctor using digital tablet" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Clinical Efficiency
              </h3>
              <p className="text-lg text-gray-600">
                Medical staff save 3 hours per shift on paperwork. More time for what matters most - patient care and attention.
              </p>
            </div>
          </div>

          {/* Operational Excellence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2 rounded-xl overflow-hidden shadow-md">
              <Image 
                src={operationalExcellenceImg} 
                alt="Operational excellence visualization" 
                className="w-full h-auto"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Operational Excellence
              </h3>
              <p className="text-lg text-gray-600">
                Transform chaos into clarity with instant file access, automated audit trails, and real-time analytics for smarter hospital management.
              </p>
            </div>
          </div>

          {/* Environmental Excellence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image 
                src={environmentalExcellenceImg} 
                alt="Doctor holding globe representing environmental impact" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Environmental Excellence
              </h3>
              <p className="text-lg text-gray-600">
                Save hundreds of trees every year by eliminating paper waste. Your hospital's contribution to a greener planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10">
            About US
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We are a team of engineers and doctors dreaming to revolutionize Indian Healthcare.
              Having seen the inefficiencies and chaos in the most critical aspects of the hospital, we want
              to help hospitals care their patients better. "Equip our hospitals and clinicians with the best the
              technology can offer, so that they can give their best to care those in need" is our motto.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Contact
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <form 
              action="https://formspree.io/f/mpwqgeae" 
              method="POST"
              className="space-y-8"
            >
              {/* Hidden Subject Field */}
              <input type="hidden" name="_subject" value="New contact from Paperless IPD Website" />
              
              {/* Honeypot field to prevent spam */}
              <input type="text" name="_gotcha" className="hidden" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Dr. Vishal Kulkarni"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="9999999999"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="_replyto"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              {/* Redirect after submission */}
              <input type="hidden" name="_next" value="/thank-you" />
              
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
} 