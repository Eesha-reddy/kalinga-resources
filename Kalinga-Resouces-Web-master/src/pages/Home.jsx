import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Truck, Building, Heart, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Mining Operations',
      description: 'Comprehensive coal & iron mining with advanced infrastructure development',
      icon: Building,
      image: 'https://crmining.com/wp-content/uploads/2022/02/Mining-Conveyor-Systems.jpg'
    },
    {
      title: 'Logistics Solutions',
      description: 'Efficient transport and handling of iron ore, coal, bauxite and more',
      icon: Truck,
      image: 'https://img.freepik.com/premium-photo/coal-quarry-mining-work-excavator-dump-trucks-industry-mine_124507-36005.jpg?w=2000'
    },
    {
      title: 'Infrastructure Development',
      description: 'Civil maintenance and apartment construction services',
      icon: Building,
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100+', label: 'Skilled Workforce' },
    { number: '24/7', label: 'Operations Support' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/162624/mining-excavator-coal-mining-machinery-162624.jpeg)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Leading Mining & Infrastructure Solutions
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Kalinga Resources delivers excellence in mining operations, logistics, and infrastructure development
              with a commitment to sustainable growth and community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Partner with Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across mining, logistics, and infrastructure development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-800 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-600 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                About Kalinga Resources
              </h2>
              <p className="text-blue-100 text-lg mb-6">
                Under the leadership of Mrs. Anjumalini Mishra, we have established ourselves as a
                trusted partner in mining operations and infrastructure development. Our commitment
                to excellence extends beyond business to meaningful community impact through our CSR initiatives.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                  <span>MSME Registered & Certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                  <span>Experienced Leadership Team</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                  <span>Comprehensive Service Portfolio</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/photos/mining-dump-trucks-loaded-in-a-coal-mine-picture-id1140210776?k=6&m=1140210776&s=612x612&w=0&h=Hp66QME-luruLI2mZlv9uE4M8f8Wro8VM4ny3Dj-XJQ="
                alt="Construction work"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CSR Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Corporate Social Responsibility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to community development and social upliftment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare Support</h3>
              <p className="text-gray-600">Providing healthcare services for economically disadvantaged communities</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Education Support</h3>
              <p className="text-gray-600">Supporting schools with books, uniforms, and food for underprivileged children</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Special Care</h3>
              <p className="text-gray-600">Dedicated support for disabled, elderly, and abandoned individuals</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/csr"
              className="inline-flex items-center px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Our CSR Initiatives
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;