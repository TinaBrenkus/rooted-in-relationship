'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HandDrawnTree from '../components/HandDrawnTree';
import { 
  ArrowLeft,
  Clock,
  Video,
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  User,
  MessageSquare,
  DollarSign,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bestTime: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen organic-bg">
      
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50" style={{ backgroundColor: 'rgba(251, 237, 219, 0.95)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <HandDrawnTree size={40} />
              <span className="text-xl font-semibold font-crimson" style={{ color: '#4a6b2a' }}>
                Rooted In Relationship
              </span>
            </Link>
            
            <Link 
              href="/"
              className="flex items-center space-x-2 transition hover:opacity-70" 
              style={{ color: '#4a6b2a' }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-6" style={{ backgroundColor: 'rgba(122, 145, 82, 0.1)' }}>
              <Video className="w-6 h-6" style={{ color: '#4a6b2a' }} />
              <span className="font-medium" style={{ color: '#4a6b2a' }}>Virtual Consultation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-crimson" style={{ color: '#4a6b2a' }}>
              Let's Work Together
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#7a9152' }}>
              Get personalized support and evidence-based strategies tailored to your unique situation. 
              Together, we'll create a path forward that works for your child and family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* What We Offer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="organic-card p-8 rounded-2xl organic-shadow"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6" style={{ color: '#7a9152' }} />
                <h2 className="text-2xl font-bold font-crimson" style={{ color: '#4a6b2a' }}>
                  60-Minute Sessions
                </h2>
              </div>
              
              <p className="mb-6" style={{ color: '#7a9152' }}>
                Each consultation is a full hour dedicated to understanding your challenges 
                and developing practical solutions.
              </p>
              
              <ul className="space-y-3">
                {[
                  'One-on-one virtual meeting via Zoom',
                  'Safe, confidential space to share concerns',
                  'Immediate strategies you can implement',
                  'Follow-up resources and action plan'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#9c6a42' }} />
                    <span style={{ color: '#4a6b2a' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What to Expect */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="organic-card p-8 rounded-2xl organic-shadow"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-6 h-6" style={{ color: '#7a9152' }} />
                <h2 className="text-2xl font-bold font-crimson" style={{ color: '#4a6b2a' }}>
                  What to Expect
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#4a6b2a' }}>Before We Meet:</h3>
                  <p style={{ color: '#7a9152' }}>
                    I'll review your intake form to understand your specific needs and prepare relevant resources.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#4a6b2a' }}>During Our Session:</h3>
                  <p style={{ color: '#7a9152' }}>
                    We'll dive deep into your challenges, explore what's working, and collaborate on solutions.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#4a6b2a' }}>After We Meet:</h3>
                  <p style={{ color: '#7a9152' }}>
                    You'll receive a summary of our discussion, action steps, and customized resources.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-2xl"
            style={{ background: 'linear-gradient(135deg, rgba(225, 208, 188, 0.3) 0%, rgba(201, 168, 141, 0.2) 100%)' }}
          >
            <DollarSign className="w-12 h-12 mx-auto mb-4" style={{ color: '#9c6a42' }} />
            <h2 className="text-3xl font-bold mb-4 font-crimson" style={{ color: '#4a6b2a' }}>
              Investment
            </h2>
            <p className="text-4xl font-bold mb-4" style={{ color: '#7a9152' }}>
              $150
            </p>
            <p className="text-lg" style={{ color: '#4a6b2a' }}>
              for a 60-minute virtual consultation
            </p>
            <p className="mt-4 text-sm" style={{ color: '#7a9152' }}>
              This includes the session, follow-up resources, and an action plan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 font-crimson" style={{ color: '#4a6b2a' }}>
              Schedule Your Consultation
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Contact Form */}
              <div className="organic-card p-8 rounded-2xl organic-shadow">
                <h3 className="text-xl font-semibold mb-6 font-crimson" style={{ color: '#4a6b2a' }}>
                  Tell Me About Your Needs
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium mb-2" style={{ color: '#4a6b2a' }}>
                      <User className="w-4 h-4" />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border-2 focus:outline-none transition"
                      style={{ 
                        borderColor: '#e1d0bc',
                        backgroundColor: '#fbeddb',
                        color: '#4a6b2a'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#7a9152'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e1d0bc'}
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium mb-2" style={{ color: '#4a6b2a' }}>
                      <Mail className="w-4 h-4" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border-2 focus:outline-none transition"
                      style={{ 
                        borderColor: '#e1d0bc',
                        backgroundColor: '#fbeddb',
                        color: '#4a6b2a'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#7a9152'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e1d0bc'}
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium mb-2" style={{ color: '#4a6b2a' }}>
                      <Phone className="w-4 h-4" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border-2 focus:outline-none transition"
                      style={{ 
                        borderColor: '#e1d0bc',
                        backgroundColor: '#fbeddb',
                        color: '#4a6b2a'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#7a9152'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e1d0bc'}
                    />
                  </div>
                  
                  {/* Best Time to Call */}
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium mb-2" style={{ color: '#4a6b2a' }}>
                      <Clock className="w-4 h-4" />
                      <span>Best Time to Call</span>
                    </label>
                    <select
                      name="bestTime"
                      value={formData.bestTime}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border-2 focus:outline-none transition"
                      style={{ 
                        borderColor: '#e1d0bc',
                        backgroundColor: '#fbeddb',
                        color: '#4a6b2a'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#7a9152'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e1d0bc'}
                    >
                      <option value="">Select a time</option>
                      <option value="weekday-evening">Mon-Thurs evening (4pm-9pm PST)</option>
                      <option value="weekend-morning">Weekend morning (9am-12pm PST)</option>
                      <option value="weekend-afternoon">Weekend afternoon (12pm-5pm PST)</option>
                      <option value="weekend-evening">Weekend evening (5pm-8pm PST)</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>
                  
                  {/* Description */}
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium mb-2" style={{ color: '#4a6b2a' }}>
                      <MessageSquare className="w-4 h-4" />
                      <span>What would you like help with?</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Share a brief description of your situation and what support you're looking for..."
                      className="w-full p-3 rounded-lg border-2 focus:outline-none transition placeholder-opacity-60"
                      style={{ 
                        borderColor: '#e1d0bc',
                        backgroundColor: '#fbeddb',
                        color: '#4a6b2a'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#7a9152'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e1d0bc'}
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-4 rounded-full text-white font-medium transition organic-shadow"
                    style={{ backgroundColor: '#4a6b2a' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a9152'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4a6b2a'}
                  >
                    Request Consultation
                  </motion.button>
                </form>
                
                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 p-4 rounded-lg text-center"
                    style={{ backgroundColor: 'rgba(122, 145, 82, 0.1)', color: '#4a6b2a' }}
                  >
                    <CheckCircle className="w-6 h-6 mx-auto mb-2" style={{ color: '#7a9152' }} />
                    <p className="font-semibold">Thank you for reaching out!</p>
                    <p className="text-sm mt-1">I'll contact you within 24 hours to schedule our consultation.</p>
                  </motion.div>
                )}
              </div>
              
              {/* Calendar Placeholder */}
              <div className="organic-card p-8 rounded-2xl organic-shadow">
                <h3 className="text-xl font-semibold mb-6 font-crimson" style={{ color: '#4a6b2a' }}>
                  Or Book Directly
                </h3>
                
                <div className="text-center py-12 px-6 rounded-lg" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                  <Calendar className="w-16 h-16 mx-auto mb-4" style={{ color: '#9c6a42' }} />
                  <p className="font-medium mb-2" style={{ color: '#4a6b2a' }}>
                    Online Calendar Coming Soon
                  </p>
                  <p className="text-sm" style={{ color: '#7a9152' }}>
                    Soon you'll be able to book directly into my calendar. 
                    For now, please use the form and I'll reach out personally.
                  </p>
                </div>
                
                <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(122, 145, 82, 0.1)' }}>
                  <h4 className="font-semibold mb-3" style={{ color: '#4a6b2a' }}>Available Times:</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#7a9152' }}>
                    <li>• Monday-Thursday: 4pm - 9pm PST</li>
                    <li>• Saturday &amp; Sunday: 9am - 8pm PST</li>
                  </ul>
                </div>
                
                <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(201, 168, 141, 0.1)' }}>
                  <p className="text-sm" style={{ color: '#4a6b2a' }}>
                    <strong>Note:</strong> If you need immediate support or are in crisis, 
                    please contact your local emergency services or crisis hotline.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <HandDrawnTree size={60} className="mx-auto mb-6 opacity-30" />
            <h2 className="text-2xl font-bold mb-4 font-crimson" style={{ color: '#4a6b2a' }}>
              You don't have to figure this out alone
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#7a9152' }}>
              With the right support and strategies, challenging behaviors can transform into 
              opportunities for connection and growth.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}