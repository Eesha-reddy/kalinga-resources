import React from 'react';
import { Heart, Users, GraduationCap, Leaf, Home, Award } from 'lucide-react';

const CSR = () => {
  const initiatives = [
    {
      icon: Heart,
      title: 'Healthcare Support',
      description: 'Providing essential healthcare services and medical assistance to economically disadvantaged communities',
      image: 'https://media.pri.org/s3fs-public/styles/open_graph/public/india_health_2012_10_25.jpg?itok=VOfmlmBi',
      activities: [
        'Free medical camps in rural areas',
        'Medicine distribution programs',
        'Health awareness campaigns',
        'Support for medical emergencies'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Education Support',
      description: 'Supporting educational institutions and providing learning resources to underprivileged children',
      image: 'https://www.worldbank.org/content/dam/Worldbank/Feature%20Story/sar/india/india-education-brief.jpg',
      activities: [
        'Distribution of books and stationery',
        'School uniform programs',
        'Mid-day meal support',
        'Educational infrastructure development'
      ]
    },
    {
      icon: Users,
      title: 'Special Care Programs',
      description: 'Dedicated support for physically challenged, elderly, and abandoned individuals in our community',
      image: 'https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/289000/289653/image/5fc9c10e24a25.jpeg',
      activities: [
        'Disability support services',
        'Old age care assistance',
        'Rehabilitation programs',
        'Community integration initiatives'
      ]
    },
    {
      icon: Home,
      title: 'Rural Development',
      description: 'Konark-related rural support activities focusing on community infrastructure and livelihood enhancement',
      image: 'https://csrbox.org/news/1635485860Cover.jpg',
      activities: [
        'Infrastructure development in villages',
        'Skill development programs',
        'Agricultural support initiatives',
        'Water conservation projects'
      ]
    }
  ];

  const impactStats = [
    { number: '50+', label: 'Families Supported' },
    { number: '100+', label: 'Children Educated' },
    { number: '5+', label: 'Villages Reached' },
    { number: '20+', label: 'Healthcare Camps' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Corporate Social Responsibility</h1>
            <p className="text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto">
              Our commitment to community development and social upliftment extends beyond business success
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our CSR Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Kalinga Resources, we believe that corporate success must be balanced with social responsibility.
              Our CSR initiatives focus on creating meaningful impact in healthcare, education, and community development,
              ensuring that our growth contributes to the welfare of society at large.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Award className="h-16 w-16 text-blue-800 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Making a Difference</h3>
                <p className="text-gray-700 text-lg">
                  Through our comprehensive CSR programs, we actively contribute to the upliftment of marginalized
                  communities, focusing on sustainable development and long-term positive impact.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://www.chevinfleet.com/wp-content/uploads/2021/07/shutterstock_164430080-scaled.jpg"
                  alt="Community support"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-300">Measurable outcomes of our community initiatives</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our CSR Initiatives</h2>
            <p className="text-xl text-gray-600">Comprehensive programs addressing key social challenges</p>
          </div>

          <div className="space-y-16">
            {initiatives.map((initiative, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <initiative.icon className="h-12 w-12 text-blue-800 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">{initiative.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{initiative.description}</p>
                  <ul className="space-y-3">
                    {initiative.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start">
                        <Heart className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Focus Areas */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Focus Areas</h2>
            <p className="text-xl text-gray-600">Key sectors where we concentrate our CSR efforts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Welfare</h3>
              <p className="text-gray-600">
                Focusing on the upliftment of physically challenged and backward communities through
                targeted support programs and inclusive development initiatives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <GraduationCap className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education & Skills</h3>
              <p className="text-gray-600">
                Promoting education and skill development to empower individuals and communities
                with knowledge and capabilities for sustainable livelihoods.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Leaf className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Environment & Sustainability</h3>
              <p className="text-gray-600">
                Implementing plantation drives and environmental conservation programs to ensure
                sustainable development and ecological balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Community Voices</h2>
            <p className="text-xl text-gray-600">Stories of impact from our CSR initiatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The healthcare camp organized by Kalinga Resources provided much-needed medical assistance
                  to our village. Their commitment to community welfare is truly commendable."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Ramesh Kumar</p>
                <p className="text-gray-600 text-sm">Village Head, Konark</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Thanks to their education support program, my children now have access to quality books
                  and learning materials. This has made a significant difference in their academic performance."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Sunita Devi</p>
                <p className="text-gray-600 text-sm">Parent, Bhubaneswar</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The skill development program helped me gain new capabilities and find better employment
                  opportunities. Kalinga Resources truly cares about community development."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Prakash Nayak</p>
                <p className="text-gray-600 text-sm">Program Beneficiary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with us in creating positive social impact. Together, we can build stronger,
            more sustainable communities for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
            >
              Partner with Us
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSR;