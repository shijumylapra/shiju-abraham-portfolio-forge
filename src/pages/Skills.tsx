
import Navigation from '@/components/Navigation';
import { Code, Database, Cloud, Cog, Globe, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C#", level: 60 },
        { name: "Java", level: 60 },
        { name: "JavaScript", level: 60 },
        { name: "Python", level: 25 },
        { name: "SQL", level: 60 },
        { name: "HTML/CSS", level: 60 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      skills: [
        { name: "React", level: 10 },
        { name: "Bootstrap", level: 40 },
        { name: "jQuery", level: 40 },
        { name: "TypeScript", level: 10 }
      ]
    },
         
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "SQL Server", level: 70 },
        { name: "MySQL", level: 60 },
        { name: "Database Design", level: 40 }
      ]
    },
    {
      title: "Automation & Testing",
      icon: Cog,
      skills: [
        { name: "Selenium WebDriver", level: 85 },
        { name: "TestNG", level: 80 },
        { name: "Cucumber", level: 75 },
        { name: "Jenkins", level: 80 },
        { name: "Maven", level: 75 },
        { name: "JUnit", level: 80 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 40 },
        { name: "Azure", level: 25 },
        { name: "Docker", level: 15 },
        { name: "Git/GitHub", level: 85 },
        { name: "CI/CD", level: 40 },
        { name: "Agile/Scrum", level: 50 }
      ]
    }
  ];

  const methodologies = [
    "Agile Development",
    "Test-Driven Development (TDD)",
    "Behavior-Driven Development (BDD)",
    "Continuous Integration/Deployment",
    "Version Control (Git)",
    "Code Review Practices",
    "Software Design Patterns",
    "API Development & Testing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & <span className="text-blue-600">Expertise</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and methodologies 
            I use to build robust software solutions and automation frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 rounded-full p-3">
                  <category.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Software Methodologies */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Software Methodologies & Practices
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodologies.map((methodology, index) => (
              <div 
                key={index}
                className="bg-blue-50 rounded-2xl p-4 text-center hover:bg-blue-100 transition-colors duration-300"
              >
                <span className="text-gray-700 font-medium">{methodology}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white animate-fade-in">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Core Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Full-Stack Development</h3>
                <p className="text-blue-100">
                  End-to-end development using modern frameworks and best practices
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Test Automation</h3>
                <p className="text-blue-100">
                  Comprehensive automation frameworks for reliable software testing
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
                <p className="text-blue-100">
                  Ensuring software quality through systematic testing and validation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
