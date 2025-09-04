'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HandDrawnTree from './components/HandDrawnTree';
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
            <div className="flex items-center space-x-3">
              <HandDrawnTree size={40} />
              <span className="text-xl font-semibold font-crimson" style={{ color: '#656d4f' }}>
                Rooted In Relationship
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="hover:opacity-70 transition" style={{ color: '#656d4f' }}>About</Link>
              <Link href="/case-study" className="hover:opacity-70 transition" style={{ color: '#656d4f' }}>Case Study</Link>
              <a href="#parents" className="hover:opacity-70 transition" style={{ color: '#656d4f' }}>For Parents</a>
              <a href="#teachers" className="hover:opacity-70 transition" style={{ color: '#656d4f' }}>For Teachers</a>
              <Link href="/resources" className="hover:opacity-70 transition" style={{ color: '#656d4f' }}>Resources</Link>
              <a href="#contact" className="hover:opacity-70 transition" style={{ color: '#656d4f' }}>Contact</a>
            </div>
            
            <button className="md:hidden p-2">
              <div className="space-y-1">
                <div className="w-6 h-0.5" style={{ backgroundColor: '#656d4f' }}></div>
                <div className="w-6 h-0.5" style={{ backgroundColor: '#656d4f' }}></div>
                <div className="w-6 h-0.5" style={{ backgroundColor: '#656d4f' }}></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-crimson" style={{ color: '#656d4f' }}>
                When children struggle with behavior, 
                <span className="block" style={{ color: '#9b9b84' }}>there's always a reason.</span>
                <span style={{ color: '#b97d83' }}>Let's find it together.</span>
              </h1>
              
              <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#656d4f' }}>
                Evidence-based behavior strategies rooted in relationship, not punishment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/resources">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white px-8 py-4 rounded-full text-lg font-medium transition-colors organic-shadow flex items-center space-x-2"
                    style={{ backgroundColor: '#656d4f' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9b9b84'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#656d4f'}
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Get Free Resources</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                
                <Link href="/consultation">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white px-8 py-4 rounded-full text-lg font-medium transition-colors organic-shadow flex items-center space-x-2"
                    style={{ color: '#656d4f', borderWidth: '2px', borderStyle: 'solid', borderColor: '#656d4f' }}
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
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(155, 155, 132, 0.1)' }}></div>
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
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-6" style={{ backgroundColor: 'rgba(155, 155, 132, 0.1)' }}>
              <HandHeart className="w-6 h-6" style={{ color: '#656d4f' }} />
              <span className="font-medium" style={{ color: '#656d4f' }}>Our Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-crimson" style={{ color: '#656d4f' }}>
              Children do well if they can
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#9b9b84' }}>
              If they're not doing well, something is getting in the way. Our approach focuses on 
              understanding the root causes of challenging behavior and building the skills children need to thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" style={{ color: '#b97d83' }} />,
                title: "Relationship-First",
                description: "Building trust and connection before addressing behaviors"
              },
              {
                icon: <Star className="w-8 h-8" style={{ color: '#e1d0bc' }} />,
                title: "Evidence-Based",
                description: "Strategies rooted in research and proven to be effective"
              },
              {
                icon: <Users className="w-8 h-8" style={{ color: '#9b9b84' }} />,
                title: "Collaborative",
                description: "Working together with families and educators as partners"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(251, 237, 219, 0.8)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(101, 109, 79, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(251, 237, 219, 0.5)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full shadow-md mb-4" style={{ backgroundColor: '#fbeddb', boxShadow: '0 4px 20px rgba(101, 109, 79, 0.08)' }}>
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-crimson" style={{ color: '#656d4f' }}>
                  {principle.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#9b9b84' }}>
                  {principle.description}
                </p>
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
                  <HomeIcon className="w-6 h-6" style={{ color: '#b97d83' }} />
                </div>
                <h2 className="text-2xl font-bold font-crimson" style={{ color: '#656d4f' }}>For Parents</h2>
              </div>
              
              <p className="mb-6 leading-relaxed" style={{ color: '#9b9b84' }}>
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
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#b97d83' }}></div>
                    </div>
                    <span style={{ color: '#656d4f' }}>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/resources">
                <button className="text-white px-6 py-3 rounded-full transition-colors font-medium flex items-center space-x-2" style={{ backgroundColor: '#b97d83' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9b9b84'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#b97d83'}>
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
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 155, 132, 0.2)' }}>
                  <GraduationCap className="w-6 h-6" style={{ color: '#9b9b84' }} />
                </div>
                <h2 className="text-2xl font-bold font-crimson" style={{ color: '#656d4f' }}>For Teachers</h2>
              </div>
              
              <p className="mb-6 leading-relaxed" style={{ color: '#9b9b84' }}>
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
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: 'rgba(155, 155, 132, 0.2)' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#9b9b84' }}></div>
                    </div>
                    <span style={{ color: '#656d4f' }}>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/resources">
                <button className="text-white px-6 py-3 rounded-full transition-colors font-medium flex items-center space-x-2" style={{ backgroundColor: '#9b9b84' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#656d4f'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9b9b84'}>
                  <span>Educator Resources</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Hidden for now */}
      {/* <section className="py-20 text-white" style={{ backgroundColor: '#656d4f' }} id="resources">
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
                  style={{ color: '#656d4f', backgroundColor: '#fbeddb', borderColor: '#9b9b84' }}
                  onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px rgba(201, 168, 141, 0.5)'}
                  onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white px-6 py-3 rounded-full transition-colors font-medium flex-shrink-0"
                  style={{ backgroundColor: '#b97d83' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9b9b84'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#b97d83'}
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
              <BookOpen className="w-6 h-6" style={{ color: '#b97d83' }} />
              <span className="font-medium" style={{ color: '#656d4f' }}>Get Support</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-crimson" style={{ color: '#656d4f' }}>
              Need Resources Now?
            </h2>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#9b9b84' }}>
              Every challenge is unique. Tell me what you're facing and I'll create personalized resources 
              based on evidence and built with care.
            </p>
            
            {/* Quick Form */}
            <div className="max-w-lg mx-auto">
              <form className="space-y-6">
                <div className="text-left">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#656d4f' }}>
                    I am a...
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Parent', 'Teacher', 'Caregiver', 'Other'].map((role) => (
                      <label key={role} className="relative">
                        <input
                          type="radio"
                          name="quickRole"
                          value={role}
                          className="sr-only"
                        />
                        <div className="p-3 rounded-lg border-2 text-center cursor-pointer transition hover:border-opacity-50"
                          style={{ 
                            borderColor: 'rgba(155, 155, 132, 0.3)',
                            color: '#656d4f'
                          }}>
                          {role}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="text-left">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#656d4f' }}>
                    My biggest challenge right now is...
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief description of what you're facing..."
                    className="w-full p-4 rounded-lg border-2 focus:outline-none transition placeholder-opacity-60"
                    style={{ 
                      borderColor: '#e1d0bc',
                      backgroundColor: '#fbeddb',
                      color: '#656d4f'
                    }}
                  />
                </div>
                
                <div className="text-left">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#656d4f' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full p-4 rounded-lg border-2 focus:outline-none transition placeholder-opacity-60"
                    style={{ 
                      borderColor: '#e1d0bc',
                      backgroundColor: '#fbeddb',
                      color: '#656d4f'
                    }}
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full text-white font-medium transition organic-shadow"
                    style={{ backgroundColor: '#656d4f' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9b9b84'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#656d4f'}
                  >
                    Get My Custom Resources
                  </motion.button>
                  
                  <Link href="/resources">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full font-medium transition"
                      style={{ 
                        color: '#656d4f',
                        border: '2px solid #656d4f'
                      }}
                    >
                      Full Form →
                    </motion.button>
                  </Link>
                </div>
              </form>
            </div>
            
            <p className="mt-8 text-sm" style={{ color: '#9b9b84' }}>
              I build resources based on real needs from real families and educators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#9b9b84' }} id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <HandDrawnTree size={40} />
                <span className="text-xl font-semibold font-crimson" style={{ color: '#fbeddb' }}>Rooted In Relationship</span>
              </div>
              <p className="leading-relaxed" style={{ color: '#e1d0bc' }}>
                Supporting children, families, and educators with compassionate, evidence-based approaches to behavior support.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 font-crimson" style={{ color: '#fbeddb' }}>Quick Links</h3>
              <ul className="space-y-2" style={{ color: '#e1d0bc' }}>
                <li><a href="#about" className="transition" style={{ color: '#e1d0bc' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fbeddb'} onMouseLeave={(e) => e.currentTarget.style.color = '#e1d0bc'}>About</a></li>
                <li><a href="#parents" className="transition" style={{ color: '#e1d0bc' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fbeddb'} onMouseLeave={(e) => e.currentTarget.style.color = '#e1d0bc'}>For Parents</a></li>
                <li><a href="#teachers" className="transition" style={{ color: '#e1d0bc' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fbeddb'} onMouseLeave={(e) => e.currentTarget.style.color = '#e1d0bc'}>For Teachers</a></li>
                <li><a href="#resources" className="transition" style={{ color: '#e1d0bc' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fbeddb'} onMouseLeave={(e) => e.currentTarget.style.color = '#e1d0bc'}>Resources</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4 font-crimson" style={{ color: '#fbeddb' }}>Get in Touch</h3>
              <div className="space-y-2" style={{ color: '#e1d0bc' }}>
                <p>Ready to start your journey?</p>
                <Link href="/consultation">
                  <button className="text-white px-6 py-2 rounded-full transition-colors" style={{ backgroundColor: '#656d4f' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b97d83'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#656d4f'}>
                    Request Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid rgba(225, 208, 188, 0.2)', color: '#e1d0bc' }}>
            <p>&copy; 2024 Rooted In Relationship. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}