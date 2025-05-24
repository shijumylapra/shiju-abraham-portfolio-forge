
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "shijumylapra@gmail.com",
      link: "mailto:shijumylapra@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (587) 123-4567",
      link: "tel:+15871234567"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Edmonton, Alberta, Canada",
      link: "https://maps.google.com/?q=Edmonton,Alberta,Canada"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/shijuabraham",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/shijuabraham",
      color: "bg-gray-800 hover:bg-gray-900"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your project or have questions about my services? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors duration-300 group"
                  >
                    <div className="bg-blue-100 group-hover:bg-blue-200 rounded-full p-3 transition-colors duration-300">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Availability</h2>
              <p className="text-blue-100 mb-4">
                I'm currently available for new projects and collaborations.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Response Time:</strong> Within 24 hours</p>
                <p><strong>Time Zone:</strong> Mountain Time (MT)</p>
                <p><strong>Preferred Contact:</strong> Email or LinkedIn</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Build Something Great Together</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you need a new web application, test automation framework, or technical consultation, 
            I'm here to help bring your ideas to life with clean, efficient, and scalable solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">I typically respond to inquiries within 24 hours</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600 text-sm">Initial project discussion is always complimentary</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Engagement</h3>
              <p className="text-gray-600 text-sm">From short-term projects to long-term partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
