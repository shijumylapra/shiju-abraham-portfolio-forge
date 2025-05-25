
import Navigation from '@/components/Navigation';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate software developer with a strong foundation in multiple programming languages 
            and a drive for continuous learning in automation testing.
          </p>
        </div>

        {/* Personal Bio */}
        <section className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 text-gray-600 leading-relaxed">
              <p>
                I am an experienced software developer with a strong background in C#.NET, Java, and SQL. 
                My journey in technology began with a passion for problem-solving and has evolved into 
                expertise across multiple programming languages and frameworks.
              </p>
              <p>
                Throughout my career, I have developed a deep understanding of software development 
                lifecycle, from requirements analysis to deployment. My experience includes working 
                with enterprise-level applications, database design, and web development using modern 
                technologies.
              </p>
              <p>
                Currently, I am transitioning into automation testing and quality assurance roles, 
                driven by my belief that robust testing is crucial for delivering high-quality software. 
                I am particularly interested in DevOps environments and continuous integration practices 
                that enhance software reliability and deployment efficiency.
              </p>
              <p>
                My goal is to leverage my development experience to create comprehensive test automation 
                frameworks that ensure software quality while reducing manual testing overhead. I believe 
                in the power of automation to transform how we approach software quality assurance.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><strong>Location:</strong> Edmonton, Canada</li>
                <li><strong>Experience:</strong> 2+ Years</li>
                <li><strong>Specialization:</strong> Software Development & Testing</li>
                <li><strong>Focus:</strong> Automation & Quality Assurance</li>
                <li><strong>Languages:</strong> C#, Java, SQL, JavaScript</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Master of Computer Applications (MCA)</h3>
              <p className="text-blue-600 font-medium">University of Kerala</p>
              <p className="text-gray-600">2015 - 2018</p>
              <p className="text-gray-600 mt-2">
                Comprehensive study of computer science fundamentals, software engineering principles, 
                and advanced programming concepts.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-blue-600 font-medium">University of Kerala</p>
              <p className="text-gray-600">2012 - 2015</p>
              <p className="text-gray-600 mt-2">
                Foundation in computer programming, database management, and software development methodologies.
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Senior Software Developer</h3>
              <p className="text-blue-600 font-medium">Tech Solutions Inc.</p>
              <p className="text-gray-600">2020 - Present</p>
              <ul className="text-gray-600 mt-3 space-y-2">
                <li>• Led development of enterprise web applications using C#.NET and SQL Server</li>
                <li>• Implemented automated testing frameworks using Selenium and Java</li>
                <li>• Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                <li>• Mentored junior developers in best practices and code review processes</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Software Developer</h3>
              <p className="text-blue-600 font-medium">Digital Innovations Ltd.</p>
              <p className="text-gray-600">2018 - 2020</p>
              <ul className="text-gray-600 mt-3 space-y-2">
                <li>• Developed and maintained web applications using ASP.NET and JavaScript</li>
                <li>• Designed and optimized database schemas and queries for improved performance</li>
                <li>• Participated in agile development processes and sprint planning</li>
                <li>• Contributed to code reviews and quality assurance processes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Certifications & Achievements</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">AWS Cloud Practitioner</h3>
              <p className="text-gray-600 text-sm">Amazon Web Services • 2023</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Selenium WebDriver Certification</h3>
              <p className="text-gray-600 text-sm">Testing Excellence • 2022</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Agile Testing Fundamentals</h3>
              <p className="text-gray-600 text-sm">Agile Alliance • 2022</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Microsoft .NET Developer</h3>
              <p className="text-gray-600 text-sm">Microsoft • 2021</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
