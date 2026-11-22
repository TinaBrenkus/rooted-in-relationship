'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HandDrawnTree from '../components/HandDrawnTree';
import { useSpamGuard, submitForm } from '../components/useSpamGuard';
import { 
  ArrowLeft,
  User,
  Calendar,
  MessageSquare,
  BookOpen,
  Mail,
  FileText
} from 'lucide-react';

export default function RequestResourcesPage() {
  const [formData, setFormData] = useState({
    role: '',
    childAge: '',
    challenge: '',
    resourceType: '',
    email: '',
    situation: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { honeypot, spamFields } = useSpamGuard();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await submitForm('custom-support', { ...formData, source: 'Resources', ...spamFields() });
      setIsSubmitted(true);
      setFormData({ role: '', childAge: '', challenge: '', resourceType: '', email: '', situation: '' });
    } catch {
      setError('Sorry, your request didn’t go through. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Main Content */}
      <main className="pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-6" style={{ backgroundColor: 'rgba(122, 145, 82, 0.1)' }}>
              <BookOpen className="w-6 h-6" style={{ color: '#4a6b2a' }} />
              <span className="font-medium" style={{ color: '#4a6b2a' }}>Request Resources</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-crimson" style={{ color: '#4a6b2a' }}>
              What challenges are you facing?
            </h1>
            
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#7a9152' }}>
              I build resources based on real needs from real families and educators. 
              Tell me what would help you most, and I'll create something just for you.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="organic-card p-8 rounded-2xl organic-shadow"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {honeypot}
              
              {/* Role Selection */}
              <div>
                <label className="flex items-center space-x-2 text-lg font-medium mb-4 font-crimson" style={{ color: '#4a6b2a' }}>
                  <User className="w-5 h-5" />
                  <span>Your Role</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Parent', 'Teacher', 'Caregiver', 'Other'].map((role) => (
                    <label key={role} className="relative">
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={formData.role === role}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-3 rounded-lg border-2 text-center cursor-pointer transition ${
                        formData.role === role 
                          ? 'border-opacity-100 text-white' 
                          : 'border-opacity-30 hover:border-opacity-50'
                      }`}
                      style={{ 
                        borderColor: '#7a9152',
                        backgroundColor: formData.role === role ? '#7a9152' : 'transparent',
                        color: formData.role === role ? 'white' : '#4a6b2a'
                      }}>
                        {role}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Child's Age */}
              <div>
                <label className="flex items-center space-x-2 text-lg font-medium mb-4 font-crimson" style={{ color: '#4a6b2a' }}>
                  <Calendar className="w-5 h-5" />
                  <span>Child's Age</span>
                </label>
                <select
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-0 transition"
                  style={{ 
                    borderColor: '#e1d0bc',
                    backgroundColor: '#fbeddb',
                    color: '#4a6b2a'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#7a9152'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e1d0bc'}
                >
                  <option value="">Select age range</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-8">6-8 years</option>
                  <option value="9-12">9-12 years</option>
                  <option value="13+">13+ years</option>
                </select>
              </div>

              {/* Specific Challenge */}
              <div>
                <label className="flex items-center space-x-2 text-lg font-medium mb-4 font-crimson" style={{ color: '#4a6b2a' }}>
                  <MessageSquare className="w-5 h-5" />
                  <span>What specific challenge are you facing?</span>
                </label>
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Share what's happening and what you've tried so far..."
                  className="w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-0 transition placeholder-opacity-60"
                  style={{ 
                    borderColor: '#e1d0bc',
                    backgroundColor: '#fbeddb',
                    color: '#4a6b2a'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#7a9152'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e1d0bc'}
                />
              </div>

              {/* Resource Type */}
              <div>
                <label className="flex items-center space-x-2 text-lg font-medium mb-4 font-crimson" style={{ color: '#4a6b2a' }}>
                  <FileText className="w-5 h-5" />
                  <span>What type of resource would help most?</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Strategy guide',
                    'Scripts for difficult conversations',
                    'Data collection sheets',
                    'Visual supports',
                    'Routine templates',
                    'Parent handouts'
                  ].map((resource) => (
                    <label key={resource} className="relative">
                      <input
                        type="radio"
                        name="resourceType"
                        value={resource}
                        checked={formData.resourceType === resource}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                        formData.resourceType === resource 
                          ? 'border-opacity-100 text-white' 
                          : 'border-opacity-30 hover:border-opacity-50'
                      }`}
                      style={{ 
                        borderColor: '#9c6a42',
                        backgroundColor: formData.resourceType === resource ? '#9c6a42' : 'transparent',
                        color: formData.resourceType === resource ? 'white' : '#4a6b2a'
                      }}>
                        {resource}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center space-x-2 text-lg font-medium mb-4 font-crimson" style={{ color: '#4a6b2a' }}>
                  <Mail className="w-5 h-5" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-0 transition placeholder-opacity-60"
                  style={{ 
                    borderColor: '#e1d0bc',
                    backgroundColor: '#fbeddb',
                    color: '#4a6b2a'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#7a9152'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e1d0bc'}
                />
              </div>

              {/* Optional Situation */}
              <div>
                <label className="text-lg font-medium mb-4 font-crimson block" style={{ color: '#4a6b2a' }}>
                  Tell us more about your situation <span className="text-sm opacity-60">(optional)</span>
                </label>
                <textarea
                  name="situation"
                  value={formData.situation}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any additional context that might help me create the perfect resource for you..."
                  className="w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-0 transition placeholder-opacity-60"
                  style={{ 
                    borderColor: '#e1d0bc',
                    backgroundColor: '#fbeddb',
                    color: '#4a6b2a'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#7a9152'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e1d0bc'}
                />
              </div>

              {error && (
                <p className="text-center p-3 rounded-lg" role="alert" style={{ backgroundColor: 'rgba(156, 106, 66, 0.12)', color: '#7a4a28' }}>
                  {error}
                </p>
              )}

              {/* Submit Button */}
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full text-lg font-medium text-white transition organic-shadow disabled:opacity-70 disabled:cursor-wait"
                  style={{ backgroundColor: '#4a6b2a' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a9152'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4a6b2a'}
                >
                  {isSubmitting ? 'Sending…' : 'Request My Custom Resource'}
                </motion.button>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center p-6 rounded-lg"
                  style={{ backgroundColor: 'rgba(122, 145, 82, 0.1)', color: '#4a6b2a' }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <HandDrawnTree size={24} />
                    <span className="font-semibold font-crimson">Thank you!</span>
                  </div>
                  <p>I'll review your request and create a personalized resource for your situation. You'll hear from me within 2-3 business days.</p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg" style={{ color: '#7a9152' }}>
              All resources are created with love, based on evidence, and designed to strengthen relationships.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}