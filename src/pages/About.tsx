
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
            and a drive for continuous learning in software development.
          </p>
        </div>

        {/* Personal Bio */}
        <section className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6"> </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 text-gray-600 leading-relaxed">
              <p>
               After taking a several year hiatus from the tech industry, I am enthusiastic about re-entering the field and contributing my skills, 
               experience, and renewed passion for software development.
              </p>
              <p>
               Throughout my career, I have acquired hands-on experience in building, maintaining, and optimizing both desktop and web applications using C#.NET. 
               I have successfully designed and implemented database schemas and queries with SQL Server, ensuring efficient data retrieval and optimal performance.
               Additionally, I have consistently kept up to date with the latest technology trends and best practices in the industry, 
               including advancements in cloud computing, microservices architecture, and Agile methodologies.
                This knowledge enables me to deliver solutions that are both modern and scalable. 
                A key strength of mine is my ability to identify and analyze problems in application software and propose effective alternatives for resolution. 
                In my previous role I frequently collaborated with cross-functional teams to troubleshoot issues and deliver solutions that enhanced system 
                performance and improved user experience.
              </p>
              <p>
               As a recent graduate of the QA Automation Test Engineer program, I have developed a solid understanding of automation, 
               software development, testing, quality assurance technologies, as well as Agile and Scrum methodologies to ensure timely project delivery. 
               Currently, I am working in a role as a Login Clerk, and I will be starting my Bachelor of Computer Applications (BCA) online program 
               in the upcoming academic year. This decision reflects my strong commitment to continuous learning and my aspiration to build a meaningful 
               career in the technology and insurance sector.
              </p>
              <p>
              I have worked on several hands-on projects, including the design and development of scripts to enhance process efficiencies. Additionally,
               I gained practical experience with programming languages such as Java and C#, as well as tools like Selenium, TestNG, Jenkins, 
               AWS, MySQL, JUnit 5, Cucumber, and Gherkin. I possess a strong understanding of Object-Oriented Programming (OOP) principles.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><strong>Location:</strong> Edmonton, Canada</li>
                <li><strong>Experience:</strong> 2+ Years</li>
                <li><strong>Specialization:</strong> Software Development & Testing</li>
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
              <h3 className="text-xl font-semibold text-gray-900">Automation Test Engineer Masters Program</h3>
              <p className="text-blue-600 font-medium">Simplilearn Online Bootcamps</p>
              <p className="text-gray-600">2024 - 2025</p>
              <p className="text-gray-600 mt-2">
                Automation course of complete knowledge of software testing technologies 
                such as Selenium Web Driver, TestNG, Maven, AutoIT, Selenium Grid, Appium, and Docker to help you build a robust testing framework
             
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Software Developer Program</h3>
              <p className="text-blue-600 font-medium">Southern Alberta Institute of Technology</p>
              <p className="text-gray-600">Jul 2019 - Dec 2019</p>
              <p className="text-gray-600 mt-2">
                Computer programming, database management, and software development methodologies.
              </p>
            </div>
             <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Diploma in Information Technology</h3>
              <p className="text-blue-600 font-medium">NIIT</p>
              <p className="text-gray-600">Mar 2002 - Apr 2003</p>
              <p className="text-gray-600 mt-2">
                Computer programming, database management, and software development methodologies.
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
              <h3 className="text-xl font-semibold text-gray-900">Software Developer</h3>
              <p className="text-blue-600 font-medium">Kettaneh Ltd, KSA</p>
              <p className="text-gray-600">Mar 2007 - Apr 2009</p>
              <ul className="text-gray-600 mt-3 space-y-2">
                <li>•Participated in all phases of the Software Development Life Cycle (SDLC), including requirements gathering, system analysis, coding, testing, and deployment
          </li>
                <li>•Developed data-driven applications using ADO.NET and optimized stored procedures, triggers, and views in SQL Server
                  </li>
                <li>•Assisted senior developers in designing, testing, and deploying database structures, including tables, views, and indexes     </li>
                <li>•Implemented data presentation using DataGrid controls in both WinForms and WPF applications</li>
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
              <h3 className="font-semibold text-gray-900 mb-2">Certified Oracle SQL Developer</h3>
              <p className="text-gray-600 text-sm">2023</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Cybersecurity Fundamentals</h3>
              <p className="text-gray-600 text-sm">2023</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Google Data Analytics Professional Program</h3>
              <p className="text-gray-600 text-sm">2022</p>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
