'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import HandDrawnTree from './components/HandDrawnTree';
import { useSpamGuard, submitForm } from './components/useSpamGuard';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Mail, 
  ArrowRight, 
  Star,
  GraduationCap,
  Home as HomeIcon,
  Leaf,
  HandHeart
} from 'lucide-react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // "Need Resources Now?" quick form
  const [quickForm, setQuickForm] = useState({ role: '', challenge: '', email: '' });
  const [quickSending, setQuickSending] = useState(false);
  const [quickSent, setQuickSent] = useState(false);
  const [quickError, setQuickError] = useState('');
  const { honeypot, spamFields } = useSpamGuard();

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuickSending(true);
    setQuickError('');
    try {
      await submitForm('quick-request', { ...quickForm, ...spamFields() });
      setQuickSent(true);
    } catch {
      setQuickError('Sorry, that didn’t go through. Please try again in a moment.');
    } finally {
      setQuickSending(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen organic-bg">
      
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50" style={{ backgroundColor: 'rgba(251, 237, 219, 0.95)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div aria-hidden="true"></div>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="hover:opacity-70 transition" style={{ color: '#4a6b2a' }}>About</Link>
              <Link href="/case-study" className="hover:opacity-70 transition" style={{ color: '#4a6b2a' }}>Case Study</Link>
              <a href="#parents" className="hover:opacity-70 transition" style={{ color: '#4a6b2a' }}>For Parents</a>
              <a href="#teachers" className="hover:opacity-70 transition" style={{ color: '#4a6b2a' }}>For Teachers</a>
              <Link href="/library" className="hover:opacity-70 transition" style={{ color: '#4a6b2a' }}>Resource Library</Link>
              <a href="#contact" className="hover:opacity-70 transition" style={{ color: '#4a6b2a' }}>Contact</a>
            </div>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 transition-all" style={{ 
                  backgroundColor: '#4a6b2a',
                  transform: mobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
                }}></div>
                <div className="w-6 h-0.5 transition-all" style={{ 
                  backgroundColor: '#4a6b2a',
                  opacity: mobileMenuOpen ? 0 : 1
                }}></div>
                <div className="w-6 h-0.5 transition-all" style={{ 
                  backgroundColor: '#4a6b2a',
                  transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
                }}></div>
              </div>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{ backgroundColor: 'rgba(251, 237, 219, 0.98)' }}>
                <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/20 transition" style={{ color: '#4a6b2a' }} onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link href="/case-study" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/20 transition" style={{ color: '#4a6b2a' }} onClick={() => setMobileMenuOpen(false)}>Case Study</Link>
                <a href="#parents" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/20 transition" style={{ color: '#4a6b2a' }} onClick={() => setMobileMenuOpen(false)}>For Parents</a>
                <a href="#teachers" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/20 transition" style={{ color: '#4a6b2a' }} onClick={() => setMobileMenuOpen(false)}>For Teachers</a>
                <Link href="/library" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/20 transition" style={{ color: '#4a6b2a' }} onClick={() => setMobileMenuOpen(false)}>Resource Library</Link>
                <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/20 transition" style={{ color: '#4a6b2a' }} onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xs sm:max-w-sm lg:max-w-none mx-auto"
            >
              <Image
                src="/logo-full.png"
                alt="Rooted In Relationship – Behavior-Based Early Childhood Consulting"
                width={1000}
                height={899}
                sizes="(min-width: 1024px) 560px, 384px"
                className="w-full h-auto"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight font-crimson" style={{ color: '#4a6b2a' }}>
                When children struggle with behavior,
                <span className="block" style={{ color: '#7a9152' }}>there's always a reason.</span>
                <span style={{ color: '#9c6a42' }}>Let's find it together.</span>
              </h1>

              <p className="text-xl sm:text-2xl mb-10 leading-relaxed" style={{ color: '#4a6b2a' }}>
                Evidence-based behavior strategies rooted in relationship, not punishment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link href="/library">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white px-8 py-4 rounded-full text-lg font-medium transition-colors organic-shadow flex items-center space-x-2 whitespace-nowrap"
                    style={{ backgroundColor: '#4a6b2a' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a9152'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4a6b2a'}
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Access Resource Library</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                
                <Link href="/consultation">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white px-8 py-4 rounded-full text-lg font-medium transition-colors organic-shadow flex items-center space-x-2 whitespace-nowrap"
                    style={{ color: '#4a6b2a', borderWidth: '2px', borderStyle: 'solid', borderColor: '#4a6b2a' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fbeddb'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  >
                    <Heart className="w-5 h-5" />
                    <span>Request Consultation</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(122, 145, 82, 0.1)' }}></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(201, 168, 141, 0.1)' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(225, 208, 188, 0.05)' }}></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 organic-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-6" style={{ backgroundColor: 'rgba(122, 145, 82, 0.1)' }}>
              <HandHeart className="w-6 h-6" style={{ color: '#4a6b2a' }} />
              <span className="font-medium" style={{ color: '#4a6b2a' }}>Our Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-crimson" style={{ color: '#4a6b2a' }}>
              “Children succeed when they have what they need.”
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-6" style={{ color: '#7a9152' }}>
              We all do well when we have the skills needed to manage life’s expectations. At Rooted In Relationship,
              we operate on the principles of Collaborative Problem Solving, and the statement, coined by Dr. Ross Greene,
              that “Children (and adults) do well if they can.” We believe every child (and adult) wants to succeed.
              When success feels out of reach, it’s not a matter of will or effort—it’s a matter of skill and support.
            </p>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#7a9152' }}>
              Our work centers on curiosity, compassion, and relationship: uncovering what’s standing in the way,
              understanding the “why” behind behavior, and nurturing the emotional and practical tools that help
              children—and the adults who guide them—grow, connect, and thrive together.
            </p>

            {/* Tara's longer philosophy: left-aligned, since seven centered paragraphs are hard to read */}
            <div className="flex justify-center my-10" aria-hidden="true">
              <HandDrawnTree size={36} />
            </div>
            <div className="max-w-3xl mx-auto text-left space-y-6 text-lg leading-relaxed" style={{ color: '#7a9152' }}>
              <p>
                All children want to do well and want to meet the expectations of their adults—and when they’re
                struggling, it’s not because they’re choosing to “misbehave,” but because something is getting in the way
                and they do not have the skills needed to meet some expectations yet. Just like a tree needs strong roots,
                healthy soil, water, and sun to grow, children need safe, loving relationships to feel secure and thrive.
              </p>
              <p>
                A child’s brain grows from bottom up, starting with safety and connection. When those roots are
                strong—through nurturing, meaningful, consistent support and calm guidance—children are better able to
                handle challenges, manage their emotions, and learn new things. When they act out or shut down, it’s a
                sign that they’re overwhelmed or missing something they need, not that they’re being “bad” or
                “non-compliant.”
              </p>
              <p>
                As an educator of young children (and their adults), I lead with curiosity and compassion. Instead of
                asking, “why are they acting like this?” I ask, “what is the need they have that is not being met?”{' '}
                <strong className="font-semibold" style={{ color: '#4a6b2a' }}>
                  All behavior is communication, and an indication of an unmet need.
                </strong>{' '}
                We first focus on meeting the need, then on teaching the skills needed for the child to get that need met
                in more adaptive (or positive) ways.
              </p>
              <p>
                I believe relationships are the foundation for growth and that by staying connected—even (and
                especially) during the hard moments—we can help children feel safe, understood, and capable of learning
                new skills. The same is true for all of us, adults included!
              </p>
              <p>
                <strong className="font-semibold" style={{ color: '#4a6b2a' }}>
                  We are grounded in connection, not control.
                </strong>{' '}
                Children aren’t looking to take control from us, they just want to find some of their own. This is
                developmentally appropriate, normal, typical, expected…and very very challenging for us as adults. While
                what adults are often looking for is, “how do I get my child to stop____ (hitting, screaming, biting,
                etc.)?,” the answer is always found with curiosity and investigation to identify the function that
                behavior serves, and the need the person is trying to meet, then identifying the skills to teach and how
                to teach them so that (in time) the child has different skills to meet that need.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" style={{ color: '#9c6a42' }} />,
                title: "Relationship-First",
                description: "Building trust and connection before addressing behaviors",
                href: "/approach/relationship-first"
              },
              {
                icon: <Star className="w-8 h-8" style={{ color: '#c9a88d' }} />,
                title: "Evidence-Based",
                description: "Strategies rooted in research and proven to be effective",
                href: "/approach/evidence-based"
              },
              {
                icon: <Users className="w-8 h-8" style={{ color: '#7a9152' }} />,
                title: "Collaborative",
                description: "Working together with families and educators as partners",
                href: "/approach/collaborative"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl"
              >
                <Link
                  href={principle.href}
                  className="group block h-full text-center p-6 rounded-xl transition-all duration-300 bg-[rgba(251,237,219,0.5)] hover:bg-[rgba(251,237,219,0.8)] hover:shadow-[0_8px_25px_rgba(74,107,42,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a6b2a]"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full shadow-md mb-4" style={{ backgroundColor: '#fbeddb', boxShadow: '0 4px 20px rgba(74, 107, 42, 0.08)' }}>
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-crimson" style={{ color: '#4a6b2a' }}>
                    {principle.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#7a9152' }}>
                    {principle.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 font-medium" style={{ color: '#9c6a42' }}>
                    Learn more
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Parents & Teachers Sections */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, rgba(225, 208, 188, 0.3) 0%, rgba(201, 168, 141, 0.2) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* For Parents */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 organic-card organic-shadow hover:shadow-2xl transition-shadow duration-300"
              id="parents"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201, 168, 141, 0.2)' }}>
                  <HomeIcon className="w-6 h-6" style={{ color: '#9c6a42' }} />
                </div>
                <h2 className="text-2xl font-bold font-crimson" style={{ color: '#4a6b2a' }}>For Parents</h2>
              </div>
              
              <p className="mb-6 leading-relaxed" style={{ color: '#7a9152' }}>
                Parenting a child with challenging behaviors can feel overwhelming. You're not alone, 
                and there's hope. Learn practical, compassionate strategies that work.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Understanding your child's behavior",
                  "Building emotional regulation skills",
                  "Creating supportive home environments",
                  "Connecting with your child through difficult moments"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: 'rgba(201, 168, 141, 0.2)' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#9c6a42' }}></div>
                    </div>
                    <span style={{ color: '#4a6b2a' }}>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/library">
                <button className="text-white px-6 py-3 rounded-full transition-colors font-medium flex items-center space-x-2" style={{ backgroundColor: '#9c6a42' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a9152'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9c6a42'}>
                  <span>Parent Resources</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>

            {/* For Teachers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 organic-card organic-shadow hover:shadow-2xl transition-shadow duration-300"
              id="teachers"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(122, 145, 82, 0.2)' }}>
                  <GraduationCap className="w-6 h-6" style={{ color: '#7a9152' }} />
                </div>
                <h2 className="text-2xl font-bold font-crimson" style={{ color: '#4a6b2a' }}>For Teachers</h2>
              </div>
              
              <p className="mb-6 leading-relaxed" style={{ color: '#7a9152' }}>
                Supporting children with challenging behaviors in the classroom requires specific skills 
                and strategies. Get the tools you need to create inclusive, supportive learning environments.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Classroom behavior support strategies",
                  "Creating inclusive learning environments",
                  "Collaborating with families effectively",
                  "Professional development workshops"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: 'rgba(122, 145, 82, 0.2)' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#7a9152' }}></div>
                    </div>
                    <span style={{ color: '#4a6b2a' }}>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/library">
                <button className="text-white px-6 py-3 rounded-full transition-colors font-medium flex items-center space-x-2" style={{ backgroundColor: '#7a9152' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a6b2a'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7a9152'}>
                  <span>Educator Resources</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Hidden for now */}
      {/* <section className="py-20 text-white" style={{ backgroundColor: '#4a6b2a' }} id="resources">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-6" style={{ backgroundColor: 'rgba(251, 237, 219, 0.2)' }}>
              <Mail className="w-6 h-6" style={{ color: '#fbeddb' }} />
              <span className="font-medium" style={{ color: '#fbeddb' }}>Stay Connected</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-crimson">
              Get helpful resources delivered to your inbox
            </h2>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#e1d0bc' }}>
              Practical tips, research insights, and encouragement for supporting children with challenging behaviors.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-full placeholder-stone-500 focus:outline-none focus:ring-2"
                  style={{ color: '#4a6b2a', backgroundColor: '#fbeddb', borderColor: '#7a9152' }}
                  onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px rgba(201, 168, 141, 0.5)'}
                  onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white px-6 py-3 rounded-full transition-colors font-medium flex-shrink-0"
                  style={{ backgroundColor: '#9c6a42' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a9152'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9c6a42'}
                >
                  Subscribe
                </motion.button>
              </div>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4"
                  style={{ color: '#e1d0bc' }}
                >
                  Thank you! You're subscribed to our newsletter.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section> */}

      {/* Quick Request Resources Section */}
      <section className="py-20 organic-card" id="quick-resources">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-6" style={{ backgroundColor: 'rgba(201, 168, 141, 0.1)' }}>
              <BookOpen className="w-6 h-6" style={{ color: '#9c6a42' }} />
              <span className="font-medium" style={{ color: '#4a6b2a' }}>Get Support</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-crimson" style={{ color: '#4a6b2a' }}>
              Need Resources Now?
            </h2>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#7a9152' }}>
              Every challenge is unique. Tell me what you're facing and I'll create personalized resources 
              based on evidence and built with care.
            </p>
            
            {/* Quick Form */}
            <div className="max-w-lg mx-auto">
              {quickSent ? (
                <div className="p-6 rounded-lg text-center" role="status" style={{ backgroundColor: 'rgba(122, 145, 82, 0.1)', color: '#4a6b2a' }}>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <HandDrawnTree size={24} />
                    <span className="font-semibold font-crimson">Thank you!</span>
                  </div>
                  <p>I&apos;ll review what you&apos;re facing and be in touch by email.</p>
                </div>
              ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-6">
                {honeypot}
                <fieldset className="text-left">
                  <legend className="block text-sm font-medium mb-2" style={{ color: '#4a6b2a' }}>
                    I am a...
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    {['Parent', 'Teacher', 'Caregiver', 'Other'].map((role) => (
                      <label key={role} className="relative">
                        <input
                          type="radio"
                          name="quickRole"
                          value={role}
                          checked={quickForm.role === role}
                          onChange={() => setQuickForm(f => ({ ...f, role }))}
                          className="sr-only peer"
                        />
                        <div
                          className="p-3 rounded-lg border-2 text-center cursor-pointer transition peer-focus-visible:ring-2 peer-focus-visible:ring-[#7a9152]"
                          style={
                            quickForm.role === role
                              ? { borderColor: '#4a6b2a', backgroundColor: 'rgba(122, 145, 82, 0.15)', color: '#4a6b2a', fontWeight: 600 }
                              : { borderColor: 'rgba(122, 145, 82, 0.3)', color: '#4a6b2a' }
                          }
                        >
                          {role}
                        </div>
                      </label>
                    ))}
                  </div>
                </fieldset>
                
                <div className="text-left">
                  <label htmlFor="quick-challenge" className="block text-sm font-medium mb-2" style={{ color: '#4a6b2a' }}>
                    My biggest challenge right now is...
                  </label>
                  <textarea
                    id="quick-challenge"
                    name="challenge"
                    value={quickForm.challenge}
                    onChange={(e) => setQuickForm(f => ({ ...f, challenge: e.target.value }))}
                    rows={3}
                    placeholder="Brief description of what you're facing..."
                    className="w-full p-4 rounded-lg border-2 focus:outline-none transition placeholder-opacity-60"
                    style={{ 
                      borderColor: '#e1d0bc',
                      backgroundColor: '#fbeddb',
                      color: '#4a6b2a'
                    }}
                  />
                </div>
                
                <div className="text-left">
                  <label htmlFor="quick-email" className="block text-sm font-medium mb-2" style={{ color: '#4a6b2a' }}>
                    Email
                  </label>
                  <input
                    id="quick-email"
                    type="email"
                    name="email"
                    required
                    value={quickForm.email}
                    onChange={(e) => setQuickForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full p-4 rounded-lg border-2 focus:outline-none transition placeholder-opacity-60"
                    style={{ 
                      borderColor: '#e1d0bc',
                      backgroundColor: '#fbeddb',
                      color: '#4a6b2a'
                    }}
                  />
                </div>
                
                {quickError && (
                  <p className="text-sm text-center p-3 rounded-lg" role="alert" style={{ backgroundColor: 'rgba(156, 106, 66, 0.12)', color: '#7a4a28' }}>
                    {quickError}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    type="submit"
                    disabled={quickSending}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full text-white font-medium transition organic-shadow disabled:opacity-70 disabled:cursor-wait"
                    style={{ backgroundColor: '#4a6b2a' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a9152'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4a6b2a'}
                  >
                    {quickSending ? 'Sending…' : 'Get My Custom Resources'}
                  </motion.button>
                  
                  <Link href="/custom-support">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full font-medium transition"
                      style={{ 
                        color: '#4a6b2a',
                        border: '2px solid #4a6b2a'
                      }}
                    >
                      Full Form →
                    </motion.button>
                  </Link>
                </div>
              </form>
              )}
            </div>

            <p className="mt-8 text-sm" style={{ color: '#7a9152' }}>
              I build resources based on real needs from real families and educators.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}