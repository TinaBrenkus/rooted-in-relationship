'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HandDrawnTree from '../components/HandDrawnTree';
import { 
  ArrowLeft,
  BookOpen,
  Download,
  FileText,
  Users,
  GraduationCap,
  Mail,
  Lock,
  CheckCircle,
  Clock,
  Heart,
  Calendar
} from 'lucide-react';

export default function ResourceLibraryPage() {
  const [email, setEmail] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email submission
    setTimeout(() => {
      setHasAccess(true);
      setIsSubmitting(false);
      // In production, this would save email to database
      localStorage.setItem('libraryAccess', 'true');
      localStorage.setItem('libraryEmail', email);
    }, 1000);
  };

  // Check if user already has access
  useState(() => {
    const access = localStorage.getItem('libraryAccess');
    if (access === 'true') {
      setHasAccess(true);
    }
  });

  const parentResources = [
    {
      title: "Daily Visual Schedule Template",
      description: "Help your child anticipate transitions with this customizable schedule",
      type: "PDF Template",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      title: "Calm Down Strategy Cards",
      description: "10 printable cards with calming strategies for emotional moments",
      type: "Printable Cards",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Morning Routine Checklist",
      description: "Visual checklist to build independence in daily routines",
      type: "PDF Worksheet",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Transition Timer Scripts",
      description: "What to say when preparing your child for transitions",
      type: "Script Guide",
      icon: <Clock className="w-5 h-5" />
    }
  ];

  const teacherResources = [
    {
      title: "Behavior Observation Form",
      description: "Track patterns and triggers in challenging behaviors",
      type: "Data Collection",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "ABC Data Collection Sheet",
      description: "Antecedent-Behavior-Consequence tracking form",
      type: "Assessment Tool",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Classroom Calm Corner Kit",
      description: "Everything you need to create a regulation space",
      type: "Setup Guide",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Parent Communication Templates",
      description: "Scripts for discussing challenging behaviors with families",
      type: "Email Templates",
      icon: <Mail className="w-5 h-5" />
    },
    {
      title: "Visual Support Cards - Classroom",
      description: "First/Then boards, choice cards, and waiting visuals",
      type: "Printable Pack",
      icon: <Calendar className="w-5 h-5" />
    }
  ];

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
              className="flex items-center space-x-2 transition hover:opacity-70" 
              style={{ color: '#656d4f' }}
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
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-6" style={{ backgroundColor: 'rgba(155, 155, 132, 0.1)' }}>
              <BookOpen className="w-6 h-6" style={{ color: '#656d4f' }} />
              <span className="font-medium" style={{ color: '#656d4f' }}>Free Resources</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-crimson" style={{ color: '#656d4f' }}>
              Resource Library
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#9b9b84' }}>
              Evidence-based tools, worksheets, and guides to support children with challenging behaviors. 
              Created by an ECSE specialist, used by parents and teachers everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {!hasAccess ? (
        // Email Gate
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="organic-card p-12 rounded-2xl organic-shadow text-center"
            >
              <Lock className="w-16 h-16 mx-auto mb-6" style={{ color: '#b97d83' }} />
              
              <h2 className="text-3xl font-bold mb-4 font-crimson" style={{ color: '#656d4f' }}>
                Get Instant Access to the Library
              </h2>
              
              <p className="text-lg mb-8" style={{ color: '#9b9b84' }}>
                Join thousands of parents and teachers who use these resources to support their children. 
                Enter your email to unlock immediate access to all materials.
              </p>
              
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-6 py-4 rounded-full focus:outline-none transition text-lg"
                    style={{ 
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: '#e1d0bc',
                      backgroundColor: '#fbeddb',
                      color: '#656d4f'
                    }}
                  />
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full text-white font-medium transition organic-shadow text-lg"
                    style={{ 
                      backgroundColor: isSubmitting ? '#9b9b84' : '#656d4f',
                      minWidth: '180px'
                    }}
                  >
                    {isSubmitting ? 'Unlocking...' : 'Get Access'}
                  </motion.button>
                </div>
              </form>
              
              <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                <p className="text-sm mb-4" style={{ color: '#656d4f' }}>
                  <strong>What you'll get instant access to:</strong>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm" style={{ color: '#9b9b84' }}>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" style={{ color: '#b97d83' }} />
                    <span>Visual schedules & routines</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" style={{ color: '#b97d83' }} />
                    <span>Behavior tracking forms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" style={{ color: '#b97d83' }} />
                    <span>Calm down strategies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" style={{ color: '#b97d83' }} />
                    <span>Communication scripts</span>
                  </div>
                </div>
                <p className="text-xs mt-4" style={{ color: '#9b9b84' }}>
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        // Resource Library Content
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-6 text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full" 
                 style={{ backgroundColor: 'rgba(155, 155, 132, 0.1)', color: '#656d4f' }}>
              <CheckCircle className="w-5 h-5" />
              <span>You have full access to the library!</span>
            </div>
          </motion.div>

          {/* Parent Resources */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: 'rgba(201, 168, 141, 0.2)' }}>
                    <Users className="w-6 h-6" style={{ color: '#b97d83' }} />
                  </div>
                  <h2 className="text-3xl font-bold font-crimson" style={{ color: '#656d4f' }}>
                    For Parents
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {parentResources.map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="organic-card p-6 rounded-xl organic-shadow hover:shadow-lg transition-shadow cursor-pointer group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                               style={{ backgroundColor: 'rgba(251, 237, 219, 0.8)' }}>
                            {resource.icon}
                          </div>
                          <span className="text-sm font-medium px-3 py-1 rounded-full" 
                                style={{ backgroundColor: 'rgba(155, 155, 132, 0.1)', color: '#9b9b84' }}>
                            {resource.type}
                          </span>
                        </div>
                        <Download className="w-5 h-5 opacity-50 group-hover:opacity-100 transition" 
                                  style={{ color: '#656d4f' }} />
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 font-crimson" style={{ color: '#656d4f' }}>
                        {resource.title}
                      </h3>
                      
                      <p className="text-sm" style={{ color: '#9b9b84' }}>
                        {resource.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Teacher Resources */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: 'rgba(155, 155, 132, 0.2)' }}>
                    <GraduationCap className="w-6 h-6" style={{ color: '#9b9b84' }} />
                  </div>
                  <h2 className="text-3xl font-bold font-crimson" style={{ color: '#656d4f' }}>
                    For Teachers
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teacherResources.map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="organic-card p-6 rounded-xl organic-shadow hover:shadow-lg transition-shadow cursor-pointer group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                             style={{ backgroundColor: 'rgba(251, 237, 219, 0.8)' }}>
                          {resource.icon}
                        </div>
                        <Download className="w-5 h-5 opacity-50 group-hover:opacity-100 transition" 
                                  style={{ color: '#656d4f' }} />
                      </div>
                      
                      <span className="text-xs font-medium px-2 py-1 rounded-full" 
                            style={{ backgroundColor: 'rgba(155, 155, 132, 0.1)', color: '#9b9b84' }}>
                        {resource.type}
                      </span>
                      
                      <h3 className="text-lg font-semibold mt-3 mb-2 font-crimson" style={{ color: '#656d4f' }}>
                        {resource.title}
                      </h3>
                      
                      <p className="text-sm" style={{ color: '#9b9b84' }}>
                        {resource.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Growing Library Notice */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center p-8 rounded-2xl"
                style={{ backgroundColor: 'rgba(225, 208, 188, 0.2)' }}
              >
                <BookOpen className="w-12 h-12 mx-auto mb-4" style={{ color: '#b97d83' }} />
                <h3 className="text-2xl font-bold mb-4 font-crimson" style={{ color: '#656d4f' }}>
                  This Library is Growing!
                </h3>
                <p className="text-lg mb-6" style={{ color: '#9b9b84' }}>
                  New resources are added every week based on what families and educators need most.
                </p>
                <Link href="/custom-support">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full font-medium transition"
                    style={{ 
                      backgroundColor: 'transparent',
                      color: '#656d4f',
                      border: '2px solid #656d4f'
                    }}
                  >
                    Need Something Specific? Get Custom Support →
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}