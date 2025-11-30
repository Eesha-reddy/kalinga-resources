import React from 'react';
import { Award, Users, Target, Eye, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering superior quality in all our operations and services'
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Maintaining the highest standards of ethical business practices and transparency'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Continuously adopting modern technologies and efficient methodologies'
    },
    {
      icon: Eye,
      title: 'Sustainability',
      description: 'Balancing business growth with environmental responsibility and community welfare'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Kalinga Resources established with a vision for excellence' },
    { year: '2018', title: 'MSME Registration', description: 'Officially registered under MSME with certification UDYAM-OD-19-0012979' },
    { year: '2020', title: 'Service Expansion', description: 'Expanded services to include comprehensive logistics solutions' },
    { year: '2022', title: 'CSR Initiatives', description: 'Launched dedicated community development programs' },
    { year: '2025', title: 'Industry Leadership', description: 'Recognized as a leading provider in mining and infrastructure' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Kalinga Resources</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Building the future through excellence in mining, logistics, and infrastructure development
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Kalinga Resources has emerged as a trusted leader in the mining and infrastructure sector,
                operating from our headquarters in Bhubaneswar, Odisha. Under the visionary leadership of
                Mrs. Anjumalini Mishra, we have built a reputation for excellence, integrity, and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive portfolio spans mining operations, logistics solutions, and infrastructure
                development, serving clients across multiple industries with dedication and expertise.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">MSME Certification</h3>
                <p className="text-blue-800">Registration No.: UDYAM-OD-19-0012979</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.PRJneTU63GkBITc6eU35lAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Construction and infrastructure"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <Users className="h-24 w-24 text-blue-800" />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Message from our Managing Director</h2>
                <blockquote className="text-lg text-gray-600 italic mb-4">
                  "At Kalinga Resources, we believe that true success comes from creating value not just for our clients,
                  but for the communities we serve. Our commitment extends beyond business excellence to include
                  meaningful social impact and environmental responsibility."
                </blockquote>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-900">Mrs. Anjumalini Mishra</p>
                  <p className="text-gray-600">Managing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-900 text-white p-8 rounded-2xl">
              <Target className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 text-lg">
                To provide exceptional mining, logistics, and infrastructure services while maintaining the highest
                standards of safety, quality, and environmental responsibility. We strive to create sustainable
                value for our stakeholders and contribute to community development.
              </p>
            </div>
            <div className="bg-yellow-500 text-gray-900 p-8 rounded-2xl">
              <Eye className="h-12 w-12 text-blue-900 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-800 text-lg">
                To be the most trusted and innovative provider of mining and infrastructure solutions in Eastern India,
                recognized for our commitment to excellence, sustainability, and positive community impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <value.icon className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-800 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-800 rounded-full absolute left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-xl text-blue-100">The advantages of choosing Kalinga Resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                <p className="text-blue-100">Years of successful project delivery across diverse sectors</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Skilled Workforce</h3>
                <p className="text-blue-100">Experienced professionals committed to quality and safety</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Modern Equipment</h3>
                <p className="text-blue-100">State-of-the-art machinery and technology for efficient operations</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Safety First</h3>
                <p className="text-blue-100">Uncompromising commitment to safety standards and protocols</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Timely Delivery</h3>
                <p className="text-blue-100">Consistent track record of meeting project deadlines</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Customer Focus</h3>
                <p className="text-blue-100">Dedicated to exceeding client expectations and building lasting relationships</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;