
import Navigation from '@/components/Navigation';
import { Code, Smartphone, Cog, Database, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like ASP.NET, React, and responsive design principles.",
      features: [
        "Responsive design for all devices",
        "Modern UI/UX principles",
        "Performance optimization",
        "SEO-friendly development",
        "Cross-browser compatibility"
      ],
      technologies: ["ASP.NET", "React", "JavaScript", "HTML5/CSS3", "Bootstrap"]
    },
    {
      icon: Cog,
      title: "Test Automation",
      description: "Comprehensive test automation solutions to ensure software quality and reduce manual testing efforts.",
      features: [
        "End-to-end test automation",
        "API testing frameworks",
        "Performance testing",
        "Cross-browser testing",
        "CI/CD integration"
      ],
      technologies: ["Selenium", "Java", "TestNG", "Cucumber", "Jenkins"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Database design, optimization, and management services for efficient data storage and retrieval.",
      features: [
        "Database design and modeling",
        "Performance optimization",
        "Data migration services",
        "Query optimization",
        "Backup and recovery strategies"
      ],
      technologies: ["SQL Server", "MySQL", "PostgreSQL", "Oracle", "MongoDB"]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack development services using industry-standard frameworks and best practices.",
      features: [
        "Custom software solutions",
        "API development and integration",
        "Code review and optimization",
        "Legacy system modernization",
        "Technical consultation"
      ],
      technologies: ["C#", "Java", "Python", "JavaScript", "RESTful APIs"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive QA services to ensure your software meets the highest quality standards.",
      features: [
        "Manual testing services",
        "Test strategy development",
        "Bug tracking and reporting",
        "User acceptance testing",
        "Quality process improvement"
      ],
      technologies: ["Test Planning", "Bug Tracking", "User Testing", "QA Processes"]
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Modern, mobile-first web design that provides optimal user experience across all devices.",
      features: [
        "Mobile-first approach",
        "Progressive web applications",
        "Performance optimization",
        "Accessibility compliance",
        "User experience design"
      ],
      technologies: ["CSS3", "JavaScript", "Bootstrap", "Progressive Web Apps"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and technical specifications to create a comprehensive project plan."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Creating detailed technical architecture and design documents that serve as the blueprint for development."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development process with continuous testing to ensure quality and functionality at every stage."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment to production environment with ongoing support and maintenance services."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional software development and quality assurance services tailored to your business needs. 
            From web development to test automation, I deliver comprehensive solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-blue-100 rounded-full p-4 w-fit mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure project success from initial consultation to final delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a solution that drives your business forward. 
            Contact me today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full">
              <a href="/contact">Get Free Consultation</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full">
              <a href="/portfolio">View My Work</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
