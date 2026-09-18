'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import HandDrawnTree from '../components/HandDrawnTree';
import { 
  ArrowLeft,
  BookOpen,
  Heart,
  Star,
  GraduationCap,
  Sparkles,
  Quote,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
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

      {/* Mission Statement */}
      <section className="pt-12 pb-4 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-6" style={{ backgroundColor: 'rgba(122, 145, 82, 0.1)' }}>
            <Heart className="w-6 h-6" style={{ color: '#4a6b2a' }} />
            <span className="font-medium" style={{ color: '#4a6b2a' }}>Mission Statement</span>
          </div>
          <p className="text-2xl sm:text-3xl leading-relaxed font-crimson" style={{ color: '#4a6b2a' }}>
            Guiding growth through compassion, collaboration, and connection.
          </p>
        </motion.div>
      </section>

      {/* Hero Section with Photo */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-12 items-start"
          >
            {/* Photo */}
            <div className="relative w-full max-w-[18rem] mx-auto lg:mt-4">
              <div
                className="relative aspect-[4/5] rounded-2xl organic-shadow overflow-hidden"
                style={{ backgroundColor: '#e1d0bc' }}
              >
                <Image
                  src="/tara-neu.jpg"
                  alt="Tara Neu"
                  fill
                  sizes="288px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 -z-10">
                <HandDrawnTree size={120} className="opacity-20" />
              </div>
            </div>

            {/* Introduction */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-crimson" style={{ color: '#4a6b2a' }}>
                  Hi, I'm Tara
                </h1>
                <div className="flex items-center space-x-2 mb-6">
                  <GraduationCap className="w-5 h-5" style={{ color: '#7a9152' }} />
                  <p className="text-lg font-medium" style={{ color: '#7a9152' }}>
                    Early Childhood Special Education Specialist
                  </p>
                </div>
                <div className="space-y-5 mb-6 text-lg leading-relaxed" style={{ color: '#4a6b2a' }}>
                  <p>
                    I have worked with children, families, and educators for the past 13 years, specifically
                    supporting young children with challenging and unsafe behaviors in the home, daycare, and
                    classroom settings. I have a Master’s degree in Special Education and am licensed from birth
                    through age 21, but my passion is with preschool aged children, 3-5.
                  </p>
                  <p>
                    Prior to entering early childhood special education, I worked for 10 years with adults with
                    disabilities and unsafe behavior. It is my life’s purpose to understand the function of
                    behavior, build relationships, and help people get curious about “behavior” and to build new skills.
                  </p>
                  <p>
                    My approach is child &amp; family centered, coming alongside you to help figure out the best
                    strategies and supports to help your child (and the adults) learn to regulate and build new
                    skills. All communication and interaction is relational, and my approach is that everything
                    builds on a healthy and trusting relationship, both with children and amongst the adults
                    supporting them.
                  </p>
                </div>
                <div className="flex items-center space-x-3 mb-8">
                  <Sparkles className="w-6 h-6" style={{ color: '#9c6a42' }} />
                  <p className="text-lg italic" style={{ color: '#7a9152' }}>
                    “Rooted, steady, and always growing.”
                  </p>
                </div>
                <Link href="/consultation">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full text-white font-medium transition organic-shadow"
                    style={{ backgroundColor: '#4a6b2a' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a9152'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4a6b2a'}
                  >
                    Schedule a Consultation
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials & Experience */}
      <section className="py-16 organic-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 font-crimson text-center" style={{ color: '#4a6b2a' }}>
              Education & Experience
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Credentials */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="w-6 h-6" style={{ color: '#7a9152' }} />
                  <h3 className="text-xl font-semibold font-crimson" style={{ color: '#4a6b2a' }}>
                    Credentials
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#9c6a42' }}></div>
                    <span style={{ color: '#4a6b2a' }}>Master’s degree in Special Education</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#9c6a42' }}></div>
                    <span style={{ color: '#4a6b2a' }}>Certified in Crisis Intervention, Positive Behavior Supports, Collaborative Problem-Solving, Trauma Informed Practices, Adult Learner Strategies, Motivational Interviewing, and Growth Mindset</span>
                  </li>
                </ul>
              </div>

              {/* Experience */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="w-6 h-6" style={{ color: '#7a9152' }} />
                  <h3 className="text-xl font-semibold font-crimson" style={{ color: '#4a6b2a' }}>
                    Experience
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    '12+ years experience in Early Childhood Special Education',
                    'Family and caregiver coaching and planning',
                    'Educator coaching and professional development',
                    'Crisis Intervention Training and coaching',
                    'Developing Comprehensive Functional Behavior Assessments and Behavior Support Plans',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#9c6a42' }}></div>
                      <span style={{ color: '#4a6b2a' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-16 organic-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-8" style={{ backgroundColor: 'rgba(201, 168, 141, 0.1)' }}>
              <Sparkles className="w-6 h-6" style={{ color: '#9c6a42' }} />
              <span className="font-medium" style={{ color: '#4a6b2a' }}>The Personal Side</span>
            </div>

            <p className="text-lg mb-6 leading-relaxed max-w-3xl mx-auto" style={{ color: '#7a9152' }}>
              A recipient of the Crystal Apple Award in 2026, Tara was described by her colleagues and supervisor:
            </p>

            <div className="p-6 sm:p-8 rounded-xl mb-10 max-w-3xl mx-auto text-left" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
              <Quote className="w-8 h-8 mb-4" style={{ color: '#9c6a42' }} />
              <p className="text-lg italic leading-relaxed" style={{ color: '#4a6b2a' }}>
                “Tara doesn’t just go above and beyond—she transforms every space she enters. She digs in with
                compassion and clarity, supporting the team while deeply understanding each child’s needs. She
                builds materials, models strategies, coaches educators, and tends to their wellness, all while
                seeing every child as a puzzle worth solving. Tara takes the time to understand the child no one
                else has been able to reach, and she does it with grounded skill, steady care, and unwavering
                commitment.”
              </p>
            </div>

            <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#7a9152' }}>
              When I’m not supporting families and educators, you can most often find me in nature, camping,
              practicing mindfulness, and reading (some for leisure, and always some on the new research-based
              practices in my field). These practices help me stay grounded and bring my best self to this
              important work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 font-crimson" style={{ color: '#4a6b2a' }}>
              Let's Work Together
            </h2>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#7a9152' }}>
              Whether you’re a parent or caregiver seeking support, or an educator looking for
              new strategies or resources, I’m here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full text-white font-medium transition organic-shadow flex items-center justify-center space-x-2"
                  style={{ backgroundColor: '#4a6b2a' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a9152'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4a6b2a'}
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link href="/resources">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full font-medium transition organic-shadow flex items-center justify-center space-x-2"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: '#4a6b2a',
                    border: '2px solid #4a6b2a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fbeddb'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Request Resources</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}