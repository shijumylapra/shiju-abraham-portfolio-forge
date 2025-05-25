
import Navigation from '@/components/Navigation';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "Travel Booking Website",
      description: "A comprehensive travel booking platform with user authentication, booking management, and payment integration. Features responsive design and real-time availability checking.",
      technologies: ["C#", "ASP.NET", "SQL Server", "Bootstrap", "JavaScript"],
      features: [
        "User registration and authentication",
        "Real-time booking availability",
        "Payment gateway integration",
        "Admin dashboard for management",
        "Responsive design for all devices"
      ],
      category: "Web Application"
    },
    {
      title: "Selenium-Java Test Automation Framework",
      description: "Robust test automation framework built with Selenium WebDriver and Java, featuring data-driven testing, parallel execution, and comprehensive reporting.",
      technologies: ["Selenium", "Java", "Jenkins", "Cucumber", "TestNG", "Maven"],
      features: [
        "Page Object Model implementation",
        "Data-driven testing with Excel/CSV",
        "Parallel test execution",
        "CI/CD integration with Jenkins",
        "Detailed HTML reporting",
        "Cross-browser testing support"
      ],
      category: "Test Automation"
    },
    {
      title: "Airline Reservation System",
      description: "Full-stack airline reservation system with flight search, booking, and management capabilities. Includes both customer and admin interfaces.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL Server"],
      features: [
        "Flight search and filtering",
        "Seat selection and booking",
        "Customer profile management",
        "Flight schedule management",
        "Booking history and reports"
      ],
      category: "Web Application"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my software development projects, automation frameworks, and technical solutions 
            that demonstrate my expertise in modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="h-6 w-6 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      
                    </Button>
                    <Button variant="outline" className="border-gray-300 hover:border-blue-600 hover:text-blue-600">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>

                {/* Features List */}
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">More Projects Coming Soon</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm constantly working on new projects and improving existing ones. 
            Check back regularly or connect with me to see my latest work.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
            <a href="https://github.com/shijumylapra" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
