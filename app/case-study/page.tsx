'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HandDrawnTree from '../components/HandDrawnTree';
import { 
  ArrowLeft,
  Search,
  Target,
  TrendingUp,
  Calendar,
  Clock,
  MessageSquare,
  Heart,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Users,
  FileText,
  Quote
} from 'lucide-react';

export default function CaseStudyPage() {
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
              <FileText className="w-6 h-6" style={{ color: '#656d4f' }} />
              <span className="font-medium" style={{ color: '#656d4f' }}>Case Study</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-crimson leading-tight" style={{ color: '#656d4f' }}>
              From Meltdowns to Cooperation: 
              <span className="block mt-2" style={{ color: '#9b9b84' }}>
                How 4-Year-Old Sarah Learned New Ways to Communicate
              </span>
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9b9b84' }}>
              A real story of transformation using relationship-based strategies and collaborative problem-solving
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
              <div className="p-4 rounded-lg organic-card">
                <p className="text-2xl font-bold font-crimson" style={{ color: '#656d4f' }}>4 weeks</p>
                <p className="text-sm" style={{ color: '#9b9b84' }}>to see change</p>
              </div>
              <div className="p-4 rounded-lg organic-card">
                <p className="text-2xl font-bold font-crimson" style={{ color: '#656d4f' }}>80%</p>
                <p className="text-sm" style={{ color: '#9b9b84' }}>fewer meltdowns</p>
              </div>
              <div className="p-4 rounded-lg organic-card">
                <p className="text-2xl font-bold font-crimson" style={{ color: '#656d4f' }}>3 tools</p>
                <p className="text-sm" style={{ color: '#9b9b84' }}>implemented</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="organic-card p-8 rounded-2xl organic-shadow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201, 168, 141, 0.2)' }}>
                <Heart className="w-6 h-6" style={{ color: '#b97d83' }} />
              </div>
              <h2 className="text-2xl font-bold font-crimson" style={{ color: '#656d4f' }}>
                The Challenge
              </h2>
            </div>
            
            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#9b9b84' }}>
              Sarah, a bright and creative 4-year-old, was experiencing daily meltdowns that were affecting 
              her entire family. Every transition—from playtime to meals, from home to preschool, 
              from bath to bed—ended in tears, screaming, and sometimes aggression.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                <h3 className="font-semibold mb-3" style={{ color: '#656d4f' }}>What Mom Shared:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>"Getting dressed takes an hour every morning"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>"She hits her little brother when frustrated"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>"Leaving the park always ends in a meltdown"</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                <h3 className="font-semibold mb-3" style={{ color: '#656d4f' }}>What Teacher Noticed:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Difficulty moving between activities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Became upset when plans changed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Needed lots of warnings before transitions</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Investigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="organic-card p-8 rounded-2xl organic-shadow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 155, 132, 0.2)' }}>
                <Search className="w-6 h-6" style={{ color: '#9b9b84' }} />
              </div>
              <h2 className="text-2xl font-bold font-crimson" style={{ color: '#656d4f' }}>
                The Investigation: What Was Getting in the Way?
              </h2>
            </div>
            
            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#9b9b84' }}>
              Instead of focusing on the behavior, we looked deeper to understand what skills Sarah was missing 
              and what was making transitions so difficult for her.
            </p>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <Lightbulb className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#b97d83' }} />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#656d4f' }}>Discovery 1: Time Blindness</h3>
                  <p style={{ color: '#9b9b84' }}>
                    Sarah couldn't "feel" time passing. Five minutes and fifty minutes felt the same to her, 
                    making transitions feel sudden and unexpected.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <Lightbulb className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#b97d83' }} />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#656d4f' }}>Discovery 2: Difficulty with Flexibility</h3>
                  <p style={{ color: '#9b9b84' }}>
                    Once Sarah had a plan in her mind, shifting to something else felt overwhelming. 
                    Her brain needed more time to adjust to changes.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <Lightbulb className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#b97d83' }} />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#656d4f' }}>Discovery 3: Big Feelings, Few Words</h3>
                  <p style={{ color: '#9b9b84' }}>
                    Sarah experienced emotions intensely but didn't have the words to express her disappointment, 
                    frustration, or need for control.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
              <p className="italic text-center" style={{ color: '#656d4f' }}>
                "Once we understood what was hard for Sarah, we could teach the skills she was missing."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Strategy */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="organic-card p-8 rounded-2xl organic-shadow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 155, 132, 0.2)' }}>
                <Target className="w-6 h-6" style={{ color: '#9b9b84' }} />
              </div>
              <h2 className="text-2xl font-bold font-crimson" style={{ color: '#656d4f' }}>
                The Strategy: Building Skills Together
              </h2>
            </div>
            
            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#9b9b84' }}>
              We created a plan that focused on teaching Sarah new skills while supporting her through transitions. 
              Every strategy was practiced when she was calm, not during meltdowns.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(201, 168, 141, 0.2)' }}>
                  <span className="text-2xl font-bold" style={{ color: '#b97d83' }}>1</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#656d4f' }}>Visual Schedule</h3>
                <p className="text-sm" style={{ color: '#9b9b84' }}>
                  Created a picture schedule showing the day's activities, giving Sarah predictability and control
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(201, 168, 141, 0.2)' }}>
                  <span className="text-2xl font-bold" style={{ color: '#b97d83' }}>2</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#656d4f' }}>Transition Warnings</h3>
                <p className="text-sm" style={{ color: '#9b9b84' }}>
                  Used a timer and "first/then" language: "First we finish playing, then we have snack"
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(201, 168, 141, 0.2)' }}>
                  <span className="text-2xl font-bold" style={{ color: '#b97d83' }}>3</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#656d4f' }}>Feeling Words</h3>
                <p className="text-sm" style={{ color: '#9b9b84' }}>
                  Taught emotion vocabulary and practiced saying "I'm disappointed" instead of melting down
                </p>
              </motion.div>
            </div>
            
            {/* Implementation Steps */}
            <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
              <h3 className="font-semibold mb-4" style={{ color: '#656d4f' }}>Week-by-Week Implementation:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" style={{ color: '#9b9b84' }} />
                  <span style={{ color: '#656d4f' }}><strong>Week 1:</strong> Introduced visual schedule, practiced during calm moments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" style={{ color: '#9b9b84' }} />
                  <span style={{ color: '#656d4f' }}><strong>Week 2:</strong> Added timer warnings, celebrated small successes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" style={{ color: '#9b9b84' }} />
                  <span style={{ color: '#656d4f' }}><strong>Week 3:</strong> Taught feeling words through books and role-play</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" style={{ color: '#9b9b84' }} />
                  <span style={{ color: '#656d4f' }}><strong>Week 4:</strong> Combined all strategies, adjusted based on what worked</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="organic-card p-8 rounded-2xl organic-shadow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 155, 132, 0.2)' }}>
                <TrendingUp className="w-6 h-6" style={{ color: '#9b9b84' }} />
              </div>
              <h2 className="text-2xl font-bold font-crimson" style={{ color: '#656d4f' }}>
                The Results: Real Change in 4 Weeks
              </h2>
            </div>
            
            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#9b9b84' }}>
              By focusing on skill-building rather than punishment, Sarah's family saw dramatic improvements 
              that have lasted.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                <h3 className="font-semibold mb-4 flex items-center space-x-2" style={{ color: '#656d4f' }}>
                  <CheckCircle className="w-5 h-5" style={{ color: '#9b9b84' }} />
                  <span>Immediate Changes (Week 1-2)</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Sarah started checking her schedule independently</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Meltdowns decreased from 5-6 daily to 2-3</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Morning routine improved dramatically</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                <h3 className="font-semibold mb-4 flex items-center space-x-2" style={{ color: '#656d4f' }}>
                  <CheckCircle className="w-5 h-5" style={{ color: '#9b9b84' }} />
                  <span>Long-term Success (Week 3-4)</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>80% reduction in daily meltdowns</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Sarah could express feelings with words</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#b97d83' }}></div>
                    <span style={{ color: '#656d4f' }}>Family outings became enjoyable again</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(155, 155, 132, 0.1)' }}>
              <Quote className="w-8 h-8 mx-auto mb-4" style={{ color: '#b97d83' }} />
              <p className="text-lg italic mb-4" style={{ color: '#656d4f' }}>
                "I have my daughter back. She's still strong-willed and spirited, but now she has tools 
                to handle her big feelings. Our whole family is happier."
              </p>
              <p className="font-semibold" style={{ color: '#9b9b84' }}>— Sarah's Mom</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Used */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="organic-card p-8 rounded-2xl organic-shadow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 155, 132, 0.2)' }}>
                <FileText className="w-6 h-6" style={{ color: '#9b9b84' }} />
              </div>
              <h2 className="text-2xl font-bold font-crimson" style={{ color: '#656d4f' }}>
                Tools That Made the Difference
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                <Calendar className="w-12 h-12 mx-auto mb-4" style={{ color: '#b97d83' }} />
                <h3 className="font-semibold mb-2" style={{ color: '#656d4f' }}>Visual Schedule</h3>
                <p className="text-sm" style={{ color: '#9b9b84' }}>
                  Picture cards showing daily activities in order, allowing Sarah to see what comes next
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                <MessageSquare className="w-12 h-12 mx-auto mb-4" style={{ color: '#b97d83' }} />
                <h3 className="font-semibold mb-2" style={{ color: '#656d4f' }}>Communication Scripts</h3>
                <p className="text-sm" style={{ color: '#9b9b84' }}>
                  Simple phrases for parents and teachers to use consistently during transitions
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(251, 237, 219, 0.5)' }}>
                <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: '#b97d83' }} />
                <h3 className="font-semibold mb-2" style={{ color: '#656d4f' }}>Calming Strategies</h3>
                <p className="text-sm" style={{ color: '#9b9b84' }}>
                  Deep breathing, counting, and a special calm-down space with sensory tools
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-2xl"
            style={{ background: 'linear-gradient(135deg, rgba(225, 208, 188, 0.3) 0%, rgba(201, 168, 141, 0.2) 100%)' }}
          >
            <HandDrawnTree size={60} className="mx-auto mb-6 opacity-50" />
            
            <h2 className="text-3xl font-bold mb-6 font-crimson" style={{ color: '#656d4f' }}>
              Every Child's Story is Different
            </h2>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#9b9b84' }}>
              Sarah's success came from understanding her unique needs and building a plan specifically for her. 
              Your child deserves the same individualized approach.
            </p>
            
            <Link href="/resources">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full text-white text-lg font-medium transition organic-shadow inline-flex items-center space-x-2"
                style={{ backgroundColor: '#656d4f' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9b9b84'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#656d4f'}
              >
                <span>Request Your Own Behavior Support Plan</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <p className="mt-6 text-sm" style={{ color: '#9b9b84' }}>
              Free consultation • Evidence-based strategies • Ongoing support
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}