import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create email content
    const emailSubject = `Contact Form: ${formData.service || 'General Inquiry'} - ${formData.name}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service: ${formData.service}

Message:
${formData.message}
    `;
    
    // Open email client
    window.location.href = `mailto:kalingaresources.mining@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleWhatsAppContact = () => {
    const message = `Hi, I'm interested in ${formData.service || 'your services'}. My details:
Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Message: ${formData.message}`;
    
    window.open(`https://wa.me/919937737375?text=${encodeURIComponent(message)}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['99377 37375', '72056 33540'],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'kalingaresources.mining@gmail.com',
        'sabyasachimishra717@gmail.com',
        'sabyasachi.mishra1@jindalsteel.com'
      ],
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'Plot No. 717, Near Aurobindo School,',
        'Patia, Bhubaneswar, Odisha'
      ],
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ],
      color: 'text-purple-600'
    }
  ];

  const services = [
    'Mining Operations',
    'Logistics Solutions',
    'Infrastructure Development',
    'CSR Partnership',
    'General Inquiry'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team to discuss your project requirements and partnership opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to connect with our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <info.icon className={`h-12 w-12 ${info.color} mb-4`} />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
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
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your project requirements or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center mb-4"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </button>
                
                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Contact via WhatsApp
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      Plot No. 717, Near Aurobindo School,<br />
                      Patia, Bhubaneswar, Odisha
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Interactive map integration available
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-blue-900 text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-yellow-500 mr-3" />
                    <div>
                      <p className="font-semibold">Primary: 99377 37375</p>
                      <p className="text-blue-100 text-sm">Secondary: 72056 33540</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-semibold">kalingaresources.mining@gmail.com</p>
                      <p className="text-blue-100 text-sm">Primary business email</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Company Information</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-900">Managing Director:</span>
                    <p className="text-gray-600">Mrs. Anjumalini Mishra</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">MSME Registration:</span>
                    <p className="text-gray-600">UDYAM-OD-19-0012979</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Specialization:</span>
                    <p className="text-gray-600">Mining, Logistics & Infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our services and processes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What services do you provide?</h3>
              <p className="text-gray-600">
                We offer comprehensive mining operations, logistics solutions, and infrastructure development services. 
                This includes coal & iron mining, transportation, civil construction, and CSR initiatives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What is your service area?</h3>
              <p className="text-gray-600">
                We primarily serve clients across Odisha and Eastern India, with our headquarters in 
                Bhubaneswar. We can extend our services to other regions based on project requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How do I request a project quote?</h3>
              <p className="text-gray-600">
                Simply fill out our contact form above with your project details, or call us directly. 
                Our team will assess your requirements and provide a detailed proposal within 48-72 hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you handle environmental compliance?</h3>
              <p className="text-gray-600">
                Yes, we ensure full environmental compliance in all our operations. We have dedicated 
                environmental monitoring systems and follow all regulatory requirements strictly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;