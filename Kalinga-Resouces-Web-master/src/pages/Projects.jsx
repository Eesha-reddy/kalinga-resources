import React, { useState } from 'react';
import { Calendar, MapPin, Award, CheckCircle, Building, Mountain, Truck, Users, Settings, DollarSign, Handshake, Phone, Mail, Send } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('machinery');
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  const machineryCategories = [
    {
      icon: Mountain,
      title: 'Mining Equipment',
      count: '50+',
      description: 'Excavators, bulldozers, drilling machines available for rent',
      image: 'https://thumbs.dreamstime.com/b/extraction-minerals-heavy-duty-dump-trucks-ore-transportation-mining-transport-equipment-autodumpers-179903782.jpg',
      examples: ['CAT Excavators', 'Komatsu Bulldozers', 'JCB Backhoes', 'Drilling Machines', 'Rock Breakers']
    },
    {
      icon: Truck,
      title: 'Transport Vehicles',
      count: '30+',
      description: 'Dumpers, tippers, and specialized transport vehicles',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg',
      examples: ['Tata Tippers', 'Ashok Leyland Trucks', 'Mahindra Pickups', 'Dumper Trucks', 'Trailer Trucks']
    },
    {
      icon: Building,
      title: 'Construction Equipment',
      count: '25+',
      description: 'Cranes, concrete mixers, and construction machinery',
      image: 'https://www.monaco-tribune.com/wp-content/uploads/2019/05/Digitally-mapping-Monaco-to-improve-the-quality-of-life.jpg',
      examples: ['Tower Cranes', 'Mobile Cranes', 'Concrete Mixers', 'Road Rollers', 'Compactors']
    },
    {
      icon: Settings,
      title: 'Specialized Tools',
      count: '40+',
      description: 'Generators, compressors, and specialized equipment',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
      examples: ['Generators', 'Air Compressors', 'Welding Machines', 'Water Pumps', 'Power Tools']
    }
  ];

  const investmentOpportunities = [
    {
      title: 'Mining Equipment Expansion',
      minInvestment: '₹5 Lakhs',
      expectedReturns: '18-22% annually',
      duration: '3-5 years',
      description: 'Invest in new mining equipment to expand our rental fleet and serve more clients across Odisha.',
      benefits: ['Guaranteed equipment utilization', 'Insurance coverage included', 'Professional maintenance'],
      riskLevel: 'Medium'
    },
    {
      title: 'CSR Community Development',
      minInvestment: '₹1 Lakhs',
      expectedReturns: 'Social Impact + Tax Benefits',
      duration: 'Ongoing',
      description: 'Partner with us in our CSR initiatives for healthcare, education, and rural development programs.',
      benefits: ['80G tax deductions', 'CSR compliance support', 'Impact reporting'],
      riskLevel: 'Low'
    },
    {
      title: 'Infrastructure Projects',
      minInvestment: '₹5 lakhs',
      expectedReturns: '12-15% annually',
      duration: '2-4 years',
      description: 'Joint venture opportunities in residential and commercial construction projects.',
      benefits: ['Shared project ownership', 'Professional project management', 'Market expertise'],
      riskLevel: 'Medium-High'
    }
  ];

  const handleInquiryChange = (e) => {
    setInquiryForm({
      ...inquiryForm,
      [e.target.name]: e.target.value
    });
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    // Create email content
    const emailSubject = `Inquiry: ${inquiryForm.inquiryType} - ${inquiryForm.name}`;
    const emailBody = `
Name: ${inquiryForm.name}
Email: ${inquiryForm.email}
Phone: ${inquiryForm.phone}
Company: ${inquiryForm.company}
Inquiry Type: ${inquiryForm.inquiryType}

Message:
${inquiryForm.message}
    `;
    
    // Open email client
    window.location.href = `mailto:kalingaresources.mining@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Reset form
    setInquiryForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      inquiryType: '',
      message: ''
    });
  };

  const handleWhatsAppContact = () => {
    const message = `Hi, I'm interested in ${inquiryForm.inquiryType}. My details:
Name: ${inquiryForm.name}
Company: ${inquiryForm.company}
Message: ${inquiryForm.message}`;
    
    window.open(`https://wa.me/919937737375?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCSRWhatsApp = () => {
    const message = `Hi, I'm interested in joining your CSR programs. Please provide more details about partnership opportunities and how I can contribute to community development initiatives.`;
    window.open(`https://wa.me/919937737375?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePartnershipWhatsApp = () => {
    const message = `Hi, I'm interested in exploring business partnership opportunities with Kalinga Resources. Please share details about joint ventures and collaboration possibilities.`;
    window.open(`https://wa.me/919937737375?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleInvestmentWhatsApp = (opportunityTitle) => {
    const message = `Hi, I'm interested in the "${opportunityTitle}" investment opportunity. Please provide detailed information about investment terms, returns, and next steps.`;
    window.open(`https://wa.me/919937737375?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleListMachineryWhatsApp = () => {
    const message = `Hi, I have unused machinery that I'd like to list on your rental platform. Please provide details about the listing process and terms.`;
    window.open(`https://wa.me/919937737375?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Machinery Rental & Investment Hub</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
              Connect with equipment owners, rent machinery, invest in projects, and partner with us for sustainable growth
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('machinery')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'machinery'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Settings className="h-5 w-5 inline mr-2" />
              Machinery Rental
            </button>
            <button
              onClick={() => setActiveTab('investment')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'investment'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <DollarSign className="h-5 w-5 inline mr-2" />
              Investment Opportunities
            </button>
            <button
              onClick={() => setActiveTab('partnership')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'partnership'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Handshake className="h-5 w-5 inline mr-2" />
              Partnership Programs
            </button>
          </div>
        </div>
      </section>

      {/* Machinery Rental Section */}
      {activeTab === 'machinery' && (
        <>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Available Machinery</h2>
                <p className="text-xl text-gray-600">Rent quality equipment from verified owners across Odisha</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {machineryCategories.map((category, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <category.icon className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-800 mb-2">{category.count}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  </div>
                ))}
              </div>

              {/* Featured Machinery Listings */}
              <div className="space-y-12">
                {machineryCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <category.icon className="h-8 w-8 text-blue-800 mr-3" />
                          <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-6">{category.description}</p>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Equipment We're Looking For:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {category.examples.map((example, exampleIndex) => (
                              <div key={exampleIndex} className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {example}
                              </div>
                            ))}
                          </div>
                        </div>
                        <button 
                          onClick={handleListMachineryWhatsApp}
                          className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          List Your {category.title}
                        </button>
                      </div>
                      <div className="relative">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="rounded-lg shadow-xl w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900 bg-opacity-20 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* List Your Machinery */}
          <section className="py-20 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Have Unused Machinery?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                List your idle equipment on our platform and earn rental income. We handle everything from 
                customer inquiries to maintenance coordination.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Settings className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">List Equipment</h3>
                  <p className="text-blue-100 text-sm">Easy online listing process</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Get Customers</h3>
                  <p className="text-blue-100 text-sm">We connect you with verified renters</p>
                </div>
                <div className="text-center">
                  <DollarSign className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Earn Income</h3>
                  <p className="text-blue-100 text-sm">Regular rental payments</p>
                </div>
              </div>
              <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Contact Us to List
              </button>
            </div>
          </section>
        </>
      )}

      {/* Investment Opportunities Section */}
      {activeTab === 'investment' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Investment Opportunities</h2>
              <p className="text-xl text-gray-600">Partner with us for profitable and socially responsible investments</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {investmentOpportunities.map((opportunity, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      opportunity.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                      opportunity.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {opportunity.riskLevel} Risk
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-6">{opportunity.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Min. Investment:</span>
                      <span className="font-semibold text-blue-800">{opportunity.minInvestment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected Returns:</span>
                      <span className="font-semibold text-green-600">{opportunity.expectedReturns}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{opportunity.duration}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {opportunity.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    <span onClick={() => handleInvestmentWhatsApp(opportunity.title)}>Learn More</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Investment Process */}
            <div className="mt-20 bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Investment Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                  <h4 className="font-semibold mb-2">Initial Discussion</h4>
                  <p className="text-gray-600 text-sm">Contact us to discuss investment opportunities</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                  <h4 className="font-semibold mb-2">Due Diligence</h4>
                  <p className="text-gray-600 text-sm">Review project details and financial projections</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                  <h4 className="font-semibold mb-2">Agreement</h4>
                  <p className="text-gray-600 text-sm">Sign partnership agreement and investment terms</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                  <h4 className="font-semibold mb-2">Monitoring</h4>
                  <p className="text-gray-600 text-sm">Regular updates and return distributions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Partnership Programs Section */}
      {activeTab === 'partnership' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Partnership Programs</h2>
              <p className="text-xl text-gray-600">Join hands with us for mutual growth and community development</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <Handshake className="h-12 w-12 text-blue-800 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Partnership</h3>
                <p className="text-gray-700 mb-6">
                  Partner with us in mining operations, logistics, or infrastructure projects. Share resources, 
                  expertise, and profits in joint ventures.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Joint project execution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Shared resources and expertise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Risk mitigation through collaboration</span>
                  </li>
                </ul>
                <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  <span onClick={handlePartnershipWhatsApp}>Explore Partnership</span>
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <Users className="h-12 w-12 text-green-800 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CSR Partnership</h3>
                <p className="text-gray-700 mb-6">
                  Join our CSR initiatives and make a meaningful impact on communities while fulfilling 
                  your corporate social responsibility goals.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Healthcare and education programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Rural development initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Environmental conservation projects</span>
                  </li>
                </ul>
                <button className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  <span onClick={handleCSRWhatsApp}>Join CSR Programs</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact & Inquiry Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Contact us for machinery rental, investment opportunities, or partnerships</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Inquiry</h3>
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={inquiryForm.name}
                      onChange={handleInquiryChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={inquiryForm.email}
                      onChange={handleInquiryChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={inquiryForm.phone}
                      onChange={handleInquiryChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={inquiryForm.company}
                      onChange={handleInquiryChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={inquiryForm.inquiryType}
                    onChange={handleInquiryChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="Machinery Rental">Machinery Rental</option>
                    <option value="List My Equipment">List My Equipment</option>
                    <option value="Investment Opportunity">Investment Opportunity</option>
                    <option value="Business Partnership">Business Partnership</option>
                    <option value="CSR Partnership">CSR Partnership</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={inquiryForm.message}
                    onChange={handleInquiryChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your requirements in detail..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-800 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppContact}
                    className="flex-1 bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    WhatsApp
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold">Primary: 99377 37375</p>
                      <p className="text-gray-600 text-sm">Secondary: 72056 33540</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-semibold">kalingaresources.mining@gmail.com</p>
                      <p className="text-gray-600 text-sm">Primary business email</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-semibold">Plot No. 717, Near Aurobindo School</p>
                      <p className="text-gray-600 text-sm">Patia, Bhubaneswar, Odisha</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Details Section */}
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bank Details for Payments</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-gray-600 text-sm">Account Name</p>
                      <p className="font-semibold">KALINGA RESOURCES</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-gray-600 text-sm">Account Number</p>
                      <p className="font-semibold">262102000000109</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-gray-600 text-sm">IFSC Code</p>
                      <p className="font-semibold">IOBA0001060</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Why Choose Our Platform?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100">Verified equipment and owners</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100">Transparent pricing and terms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100">Professional support and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100">Secure investment opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;