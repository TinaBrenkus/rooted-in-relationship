'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HandDrawnTree from '../components/HandDrawnTree';
import { 
  ArrowLeft,
  User,
  Calendar,
  MessageSquare,
  BookOpen,
  Mail,
  FileText
} from 'lucide-react';

export default function CustomSupportPage() {
  const [formData, setFormData] = useState({
    role: '',
    childAge: '',
    challenge: '',
    resourceType: '',
    email: '',
    situation: ''
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
              <span className="text-xl font-semibold font-crimson" style={{ color: '#656d4f' }}>
                Rooted In Relationship
              </span>
            </Link>
            
            <Link 
              href="/"
              className="flex items-center space-x-2 transition hover:opacity-70 text-sm sm:text-base" 
              style={{ color: '#656d4f' }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
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
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-6" style={{ backgroundColor: 'rgba(155, 155, 132, 0.1)' }}>
              <BookOpen className="w-6 h-6" style={{ color: '#656d4f' }} />
              <span className="font-medium" style={{ color: '#656d4f' }}>Custom Support</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-crimson" style={{ color: '#656d4f' }}>
              Need Something Specific?
            </h1>
            
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#9b9b84' }}>
              Can't find what you need in the resource library? I create custom tools and strategies 
              based on your unique situation and challenges.
            </p>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
              <p className="text-center" style={{ color: '#656d4f' }}>
                <strong>Already checked the library?</strong> 
                <Link href="/library" className="underline hover:opacity-70 ml-1" style={{ color: '#b97d83' }}>
                  Browse free resources first →
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="organic-card p-8 rounded-2xl organic-shadow"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Role Selection */}
              <div>
                <label className="flex items-center space-x-2 text-lg font-medium mb-4 font-crimson" style={{ color: '#656d4f' }}>
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
                        borderColor: '#9b9b84',
                        backgroundColor: formData.role === role ? '#9b9b84' : 'transparent',
                        color: formData.role === role ? 'white' : '#656d4f'
                      }}>
                        {role}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Child's Age */}
              <div>
                <label className="flex items-center space-x-2 text-lg font-medium mb-4 font-crimson" style={{ color: '#656d4f' }}>
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
                    color: '#656d4f'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#9b9b84'}
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
                <label className="flex items-center space-x-2 text-lg font-medium mb-4 font-crimson" style={{ color: '#656d4f' }}>
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
                    color: '#656d4f'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#9b9b84'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e1d0bc'}
                />
              </div>

              {/* Resource Type */}
              <div>
                <label className="flex items-center space-x-2 text-lg font-medium mb-4 font-crimson" style={{ color: '#656d4f' }}>
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
                        borderColor: '#b97d83',
                        backgroundColor: formData.resourceType === resource ? '#b97d83' : 'transparent',
                        color: formData.resourceType === resource ? 'white' : '#656d4f'
                      }}>
                        {resource}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center space-x-2 text-lg font-medium mb-4 font-crimson" style={{ color: '#656d4f' }}>
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
                    color: '#656d4f'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#9b9b84'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e1d0bc'}
                />
              </div>

              {/* Optional Situation */}
              <div>
                <label className="text-lg font-medium mb-4 font-crimson block" style={{ color: '#656d4f' }}>
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
                    color: '#656d4f'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#9b9b84'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e1d0bc'}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full text-lg font-medium text-white transition organic-shadow"
                  style={{ backgroundColor: '#656d4f' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9b9b84'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#656d4f'}
                >
                  Get My Custom Support
                </motion.button>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center p-6 rounded-lg"
                  style={{ backgroundColor: 'rgba(155, 155, 132, 0.1)', color: '#656d4f' }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <HandDrawnTree size={24} />
                    <span className="font-semibold font-crimson">Thank you!</span>
                  </div>
                  <p>I'll review your request and create a personalized tool or strategy for your situation. You'll hear from me within 2-3 business days.</p>
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
            <p className="text-lg" style={{ color: '#9b9b84' }}>
              All resources are created with love, based on evidence, and designed to strengthen relationships.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}