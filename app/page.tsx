'use client';

import { useState } from 'react';
import InteractiveCipherTool from '../components/InteractiveCipherTool';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  const grades = [
    { level: 'Elementary (K-5)', students: '500,000+', icon: '🎈' },
    { level: 'Middle School (6-8)', students: '300,000+', icon: '🚀' },
    { level: 'High School (9-12)', students: '200,000+', icon: '🎓' },
  ];

  const features = [
    { 
      title: 'Standards-Aligned Curriculum',
      description: 'Meets Common Core, NGSS, and state standards for mathematics and computer science',
      icon: '📊'
    },
    { 
      title: 'Real-Time Progress Tracking',
      description: 'Monitor individual and class progress with detailed analytics dashboard',
      icon: '📈'
    },
    { 
      title: 'Interactive Lessons',
      description: 'Engaging, hands-on activities that make abstract concepts tangible',
      icon: '🎮'
    },
    { 
      title: 'Teacher Resources',
      description: 'Complete lesson plans, worksheets, and assessment tools',
      icon: '📚'
    },
    { 
      title: 'Safe & COPPA Compliant',
      description: 'Student privacy protected, FERPA & COPPA compliant',
      icon: '🔒'
    },
    { 
      title: 'Professional Development',
      description: 'Free training and certification for educators',
      icon: '🏆'
    },
  ];

  const curriculum = [
    {
      grade: 'K-2',
      title: 'Introduction to Patterns',
      topics: ['Pattern Recognition', 'Simple Substitutions', 'Secret Messages', 'Visual Codes'],
      standards: 'CCSS.MATH.CONTENT.K.MD.B.3'
    },
    {
      grade: '3-5',
      title: 'Basic Cryptography',
      topics: ['Caesar Cipher', 'Number Patterns', 'Frequency Analysis', 'Historical Codes'],
      standards: 'CCSS.MATH.CONTENT.3.OA.D.8'
    },
    {
      grade: '6-8',
      title: 'Mathematical Foundations',
      topics: ['Modular Arithmetic', 'Algebraic Ciphers', 'Probability', 'Computer Science Basics'],
      standards: 'CCSS.MATH.CONTENT.6.EE.A.2'
    },
    {
      grade: '9-12',
      title: 'Advanced Cryptography',
      topics: ['Public Key Encryption', 'Hash Functions', 'Cybersecurity', 'Career Pathways'],
      standards: 'CSTA 3A-AP-17'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🎓</div>
            <div>
              <div className="text-2xl font-bold text-blue-900">
                CipherEDU
              </div>
              <div className="text-xs text-gray-600">Cryptography Education Platform</div>
            </div>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#overview" className="text-gray-700 hover:text-blue-600 transition font-medium">Overview</a>
            <a href="#curriculum" className="text-gray-700 hover:text-blue-600 transition font-medium">Curriculum</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition font-medium">Pricing</a>
            <a href="#resources" className="text-gray-700 hover:text-blue-600 transition font-medium">Resources</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Contact Sales</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="animate-pulse">🟢</span>
              Trusted by 2,500+ Schools Nationwide
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Bring Cryptography to Your
              <span className="block text-blue-600">K-12 Classroom</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Engage students with hands-on cryptography lessons that build critical thinking, 
              mathematical reasoning, and computer science skills while meeting curriculum standards.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
                Schedule Free Demo
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition text-lg font-semibold">
                Download Sample Curriculum
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600">1M+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600">2,500+</div>
              <div className="text-gray-600">Partner Schools</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600">Teacher Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600">4.9★</div>
              <div className="text-gray-600">EdTech Rating</div>
            </div>
          </div>

          {/* Grade Levels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {grades.map((grade) => (
              <div key={grade.level} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">{grade.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{grade.level}</h3>
                <p className="text-gray-600 mb-4">Age-appropriate content serving</p>
                <p className="text-2xl font-bold text-blue-600">{grade.students}</p>
                <p className="text-gray-600">students nationwide</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Why Schools Choose CipherEDU
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Complete cryptography education solution designed for K-12 classrooms
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Standards-Aligned Curriculum
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive lesson plans aligned with Common Core, NGSS, and CSTA standards
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((level) => (
              <div key={level.grade} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Grades {level.grade}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-3">{level.title}</h3>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Topics Covered:</h4>
                  <ul className="space-y-2">
                    {level.topics.map((topic) => (
                      <li key={topic} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Standards:</span> {level.standards}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sample Lesson */}
          <div className="mt-16 bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Interactive Demo Lesson</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Grade 3-5 Sample
                </span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Caesar Cipher Adventure</h4>
              <p className="text-gray-600 mb-4">
                Students become secret agents helping Julius Caesar send encrypted messages to his generals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <div className="text-2xl mb-2">📝</div>
                  <div className="font-semibold text-gray-900">Encode</div>
                  <div className="text-sm text-gray-600">Write secret messages</div>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <div className="text-2xl mb-2">🔍</div>
                  <div className="font-semibold text-gray-900">Decode</div>
                  <div className="text-sm text-gray-600">Crack the code</div>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="font-semibold text-gray-900">Challenge</div>
                  <div className="text-sm text-gray-600">Compete with classmates</div>
                </div>
              </div>
              <button 
                onClick={() => setActiveTab('demo')}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Try Demo Lesson
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Affordable pricing for every school budget. Volume discounts available.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* School License */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">School License</h3>
              <p className="text-gray-600 mb-6">Perfect for individual schools</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$2,999</span>
                <span className="text-gray-600">/year</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 500 students
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited teachers
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  All grade levels
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Progress tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Teacher training
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Get Started
              </button>
            </div>

            {/* District License */}
            <div className="bg-blue-600 text-white p-8 rounded-xl shadow-xl transform scale-105">
              <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">District License</h3>
              <p className="text-blue-100 mb-6">Best value for districts</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9,999</span>
                <span className="text-blue-100">/year</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">✓</span>
                  Up to 5,000 students
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">✓</span>
                  All schools in district
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">✓</span>
                  Admin dashboard
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">✓</span>
                  Custom training sessions
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">✓</span>
                  Data export tools
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
                Contact Sales
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large implementations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited students
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Multiple districts
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  API access
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  SSO integration
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedicated success manager
                </li>
              </ul>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition font-semibold">
                Contact Us
              </button>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-12 text-center bg-green-50 p-6 rounded-xl">
            <p className="text-lg font-semibold text-green-800">
              💚 30-Day Money Back Guarantee • No Setup Fees • Cancel Anytime
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      {activeTab === 'demo' && (
        <section className="py-20 px-6 bg-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Interactive Learning Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience hands-on cryptography with our visual learning tools designed for K-12 students
              </p>
            </div>
            
            <InteractiveCipherTool />
            
            <div className="text-center mt-12">
              <button
                onClick={() => setActiveTab('overview')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition text-lg font-semibold"
              >
                ← Back to Overview
              </button>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'overview' && (
        <>
      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Trusted by Educators Nationwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;CipherEDU transformed how I teach problem-solving. My students are more engaged and 
                excited about math than ever before!&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-600">5th Grade Teacher, Lincoln Elementary</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;The curriculum alignment saves me hours of prep time. It&apos;s perfectly integrated 
                with our existing math and CS standards.&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-600">Middle School Math Dept., Riverside MS</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;Best investment our district made. Test scores in logical reasoning improved 23% 
                after implementing CipherEDU.&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900">Dr. Patricia Williams</p>
                <p className="text-sm text-gray-600">Curriculum Director, Austin ISD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 2,500+ schools already using CipherEDU to teach critical thinking through cryptography
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold">
              📅 Schedule Demo
            </button>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-400 transition text-lg font-semibold">
              📚 Download Curriculum Guide
            </button>
          </div>
          <p className="text-blue-100 mt-6">
            Questions? Call 1-800-CIPHER-EDU or email sales@cipheredu.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🎓</div>
                <div className="text-2xl font-bold text-white">CipherEDU</div>
              </div>
              <p className="text-gray-400 mb-4">Empowering K-12 students with cryptography education</p>
              <div className="flex gap-2">
                <img src="/api/placeholder/80/40" alt="COPPA Compliant" className="h-10" />
                <img src="/api/placeholder/80/40" alt="FERPA Compliant" className="h-10" />
                <img src="/api/placeholder/80/40" alt="EdTech Certified" className="h-10" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Product</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Curriculum</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">Teacher Portal</a></li>
                <li><a href="#" className="hover:text-white">Sample Lessons</a></li>
                <li><a href="#" className="hover:text-white">Research</a></li>
                <li><a href="#" className="hover:text-white">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Support</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Sales</a></li>
                <li><a href="#" className="hover:text-white">Training</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-gray-500 pt-8 border-t border-gray-800">
            <p>&copy; 2024 CipherEDU. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
        </>
      )}
    </main>
  );
}