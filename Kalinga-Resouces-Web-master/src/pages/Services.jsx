import React from 'react';
import { Mountain, Truck, Building, Wrench, Shield, Leaf, Users, Settings } from 'lucide-react';

const Services = () => {
  const miningServices = [
    {
      icon: Mountain,
      title: 'Coal & Iron Mining',
      description: 'Comprehensive extraction operations with advanced safety protocols and environmental compliance'
    },
    {
      icon: Building,
      title: 'Infrastructure Development',
      description: 'Site preparation, road construction, and facility development for mining operations'
    },
    {
      icon: Settings,
      title: 'Crusher Operations',
      description: 'Efficient crushing and processing of extracted materials to required specifications'
    },
    {
      icon: Truck,
      title: 'Tailing & OB Removal',
      description: 'Safe and systematic removal of overburden and tailing materials'
    },
    {
      icon: Wrench,
      title: 'Coal Cutting & Drilling',
      description: 'Precision cutting and drilling operations using modern equipment and techniques'
    },
    {
      icon: Users,
      title: 'Face & Wagon Loading',
      description: 'Expert loading operations ensuring maximum efficiency and minimal spillage'
    }
  ];

  const logisticsServices = [
    {
      icon: Truck,
      title: 'Transport & Dumpers',
      description: 'Fleet of specialized vehicles for efficient material transportation'
    },
    {
      icon: Mountain,
      title: 'Material Handling',
      description: 'Expert handling of iron ore, coal, bauxite, and other bulk materials'
    },
    {
      icon: Settings,
      title: 'Wagon Loading',
      description: 'Professional railway wagon loading services with precise weight management'
    },
    {
      icon: Shield,
      title: 'Mining Logistics',
      description: 'End-to-end logistics solutions for mining operations and supply chain management'
    }
  ];

  const infrastructureServices = [
    {
      icon: Building,
      title: 'Civil Maintenance',
      description: 'Comprehensive maintenance and repair services for industrial and commercial facilities'
    },
    {
      icon: Building,
      title: 'Apartment Construction',
      description: 'Quality residential construction projects with modern amenities and design'
    },
    {
      icon: Wrench,
      title: 'Supply of Spares',
      description: 'Reliable supply of spare parts and components for industrial equipment'
    },
    {
      icon: Leaf,
      title: 'Environment Monitoring',
      description: 'Environmental impact assessment and monitoring services for sustainable operations'
    }
  ];

  const additionalServices = [
    'Skilled Manpower Supply',
    'Plantation Services',
    'Equipment Maintenance',
    '24/7 Operations Support',
    'Safety Training & Compliance',
    'Quality Assurance Programs'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive solutions across mining operations, logistics, and infrastructure development
            </p>
          </div>
        </div>
      </section>

      {/* Mining Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Mining Operations</h2>
            <p className="text-xl text-gray-600">Complete mining solutions with advanced technology and safety standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miningServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <service.icon className="h-12 w-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Logistics Solutions</h2>
            <p className="text-xl text-gray-600">Efficient transportation and material handling services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <service.icon className="h-10 w-10 text-yellow-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-900 text-white p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Specialized Material Handling</h3>
                <p className="text-blue-100 mb-6">
                  Our logistics team specializes in the safe and efficient handling of various bulk materials
                  including iron ore, coal, and bauxite. We ensure proper handling protocols to maintain
                  material quality and minimize losses during transportation.
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li>• Advanced loading and unloading equipment</li>
                  <li>• Trained personnel for specialized materials</li>
                  <li>• Real-time tracking and monitoring</li>
                  <li>• Environmental compliance protocols</li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg"
                  alt="Logistics operations"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Infrastructure Development</h2>
            <p className="text-xl text-gray-600">Building robust infrastructure for sustainable growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <service.icon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Supporting services to ensure complete project success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-yellow-600 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Quality Assurance */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Service Commitment</h2>
            <p className="text-xl text-blue-100">Quality standards that set us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-blue-100">Uncompromising commitment to safety in all operations</p>
            </div>
            <div className="text-center">
              <Settings className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-blue-100">ISO-compliant processes and continuous quality monitoring</p>
            </div>
            <div className="text-center">
              <Leaf className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Environmental Care</h3>
              <p className="text-blue-100">Sustainable practices and environmental protection</p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-blue-100">Skilled professionals with extensive industry experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and discover how our comprehensive
            services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-800 text-blue-800 font-semibold rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-200"
            >
              View More 
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;