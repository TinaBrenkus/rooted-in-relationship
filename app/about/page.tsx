'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HandDrawnTree from '../components/HandDrawnTree';
import { 
  ArrowLeft,
  Heart,
  BookOpen,
  Users,
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

      {/* Hero Section with Photo */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Photo Placeholder */}
            <div className="relative">
              <div 
                className="aspect-[4/5] rounded-2xl organic-shadow overflow-hidden"
                style={{ backgroundColor: '#e1d0bc' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full mx-auto mb-4" style={{ backgroundColor: '#9b9b84' }}></div>
                    <p style={{ color: '#656d4f' }}>Professional Photo</p>
                  </div>
                </div>
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
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-crimson" style={{ color: '#656d4f' }}>
                  Hi, I'm Tara
                </h1>
                <div className="flex items-center space-x-2 mb-6">
                  <GraduationCap className="w-5 h-5" style={{ color: '#9b9b84' }} />
                  <p className="text-lg font-medium" style={{ color: '#9b9b84' }}>
                    Early Childhood Special Education Specialist
                  </p>
                </div>
                <p className="text-xl mb-6 leading-relaxed" style={{ color: '#656d4f' }}>
                  I'm an ECSE Specialist at Willamette ESD, dedicated to supporting children, 
                  families, and educators through collaborative problem-solving and 
                  relationship-based approaches.
                </p>
                <div className="flex items-center space-x-3 mb-8">
                  <Sparkles className="w-6 h-6" style={{ color: '#b97d83' }} />
                  <p className="text-lg italic" style={{ color: '#9b9b84' }}>
                    "A ray of sunshine with evidence-based strategies"
                  </p>
                </div>
                <Link href="/consultation">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full text-white font-medium transition organic-shadow"
                    style={{ backgroundColor: '#656d4f' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9b9b84'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#656d4f'}
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
            <h2 className="text-3xl font-bold mb-8 font-crimson text-center" style={{ color: '#656d4f' }}>
              Education & Experience
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Credentials */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="w-6 h-6" style={{ color: '#9b9b84' }} />
                  <h3 className="text-xl font-semibold font-crimson" style={{ color: '#656d4f' }}>
                    Credentials
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>M.Ed. in Early Childhood Special Education</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Licensed Early Intervention/Early Childhood Special Education Teacher</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Certified in Collaborative Problem Solving</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Trauma-Informed Care Training</span>
                  </li>
                </ul>
              </div>

              {/* Experience */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="w-6 h-6" style={{ color: '#9b9b84' }} />
                  <h3 className="text-xl font-semibold font-crimson" style={{ color: '#656d4f' }}>
                    Experience
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>10+ years in Early Childhood Special Education</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Current ECSE Specialist at Willamette ESD</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Supporting 15+ school districts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Family coaching and educator professional development</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-8" style={{ backgroundColor: 'rgba(155, 155, 132, 0.1)' }}>
              <Heart className="w-6 h-6" style={{ color: '#656d4f' }} />
              <span className="font-medium" style={{ color: '#656d4f' }}>My Philosophy</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-8 font-crimson" style={{ color: '#656d4f' }}>
              "Children do well if they can"
            </h2>
            
            <div className="prose prose-lg mx-auto text-left" style={{ color: '#9b9b84' }}>
              <p className="mb-6 leading-relaxed">
                This powerful truth, taught by Dr. Ross Greene, forms the foundation of my practice. 
                When children struggle with behavior, it's not because they won't do better—it's 
                because something is getting in the way.
              </p>
              
              <p className="mb-6 leading-relaxed">
                My approach combines the collaborative problem-solving methods of Dr. Ross Greene 
                with the neurodevelopmental insights of Dr. Bruce Perry. Together, these frameworks 
                help us understand behavior through the lens of brain development, trauma, and 
                lagging skills—not defiance or manipulation.
              </p>
              
              <p className="mb-8 leading-relaxed">
                I believe in relationship-based interventions that prioritize connection over 
                correction. By building trust and understanding the unique needs of each child, 
                we can create environments where all children thrive.
              </p>
            </div>

            {/* Influential Quotes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl organic-card"
              >
                <Quote className="w-8 h-8 mb-4" style={{ color: '#b97d83' }} />
                <p className="italic mb-4" style={{ color: '#656d4f' }}>
                  "Kids do well if they can. If they can't, we need to figure out why, 
                  so we can help."
                </p>
                <p className="font-semibold" style={{ color: '#9b9b84' }}>— Dr. Ross Greene</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl organic-card"
              >
                <Quote className="w-8 h-8 mb-4" style={{ color: '#b97d83' }} />
                <p className="italic mb-4" style={{ color: '#656d4f' }}>
                  "Relationships are the agents of change and the most powerful therapy 
                  is human love."
                </p>
                <p className="font-semibold" style={{ color: '#9b9b84' }}>— Dr. Bruce Perry</p>
              </motion.div>
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
              <Sparkles className="w-6 h-6" style={{ color: '#b97d83' }} />
              <span className="font-medium" style={{ color: '#656d4f' }}>The Personal Side</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 font-crimson" style={{ color: '#656d4f' }}>
              Bringing Sunshine to Challenging Moments
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: '#9b9b84' }}>
              Colleagues often describe me as a "ray of sunshine"—and while I bring warmth and 
              positivity to my work, I'm equally committed to evidence-based practices that 
              create real, lasting change. I believe we can be both compassionate and scientific, 
              both nurturing and strategic.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: '#9b9b84' }}>
              When I'm not supporting families and educators, you'll find me in nature, 
              practicing mindfulness, or reading the latest research on child development. 
              These practices help me stay grounded and bring my best self to this important work.
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
            <h2 className="text-3xl font-bold mb-6 font-crimson" style={{ color: '#656d4f' }}>
              Let's Work Together
            </h2>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#9b9b84' }}>
              Whether you're a parent seeking support, an educator looking for strategies, 
              or a school district needing consultation, I'm here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full text-white font-medium transition organic-shadow flex items-center justify-center space-x-2"
                  style={{ backgroundColor: '#656d4f' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9b9b84'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#656d4f'}
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
                    color: '#656d4f',
                    border: '2px solid #656d4f'
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