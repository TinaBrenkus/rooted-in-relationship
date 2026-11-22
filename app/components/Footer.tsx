import Link from 'next/link';
import HandDrawnTree from './HandDrawnTree';

const linkClass = 'transition text-[#e1d0bc] hover:text-[#fbeddb]';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#7a9152' }} id="contact">
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
            <ul className="space-y-2">
              <li><Link href="/#about" className={linkClass}>About</Link></li>
              <li><Link href="/#parents" className={linkClass}>For Parents</Link></li>
              <li><Link href="/#teachers" className={linkClass}>For Teachers</Link></li>
              <li><Link href="/library" className={linkClass}>Resource Library</Link></li>
              <li><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-crimson" style={{ color: '#fbeddb' }}>Get in Touch</h3>
            <div className="space-y-2" style={{ color: '#e1d0bc' }}>
              <p>Ready to start your journey?</p>
              <Link
                href="/consultation"
                className="inline-block text-white px-6 py-2 rounded-full transition-colors bg-[#4a6b2a] hover:bg-[#9c6a42]"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-sm leading-relaxed max-w-4xl mx-auto text-center" style={{ color: '#e1d0bc' }}>
          Rooted in Relationship provides educational coaching and consulting services. We do not provide
          medical, psychological, or therapeutic services. The information and services provided are for
          educational purposes only and are not a substitute for professional medical or mental health advice,
          diagnosis, or treatment. Always seek the advice of qualified healthcare providers with questions
          regarding your child&apos;s health or development.
        </p>

        <div className="mt-8 pt-8 text-center text-sm" style={{ borderTop: '1px solid rgba(225, 208, 188, 0.2)', color: '#e1d0bc' }}>
          <p>
            &copy; {new Date().getFullYear()} Rooted In Relationship. All rights reserved.
            {' · '}
            <Link href="/privacy" className={linkClass}>Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
