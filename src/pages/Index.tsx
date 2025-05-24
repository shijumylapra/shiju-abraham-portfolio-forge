
import { ArrowRight, Code, Database, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-blue-600 font-medium tracking-wide uppercase text-sm">
                Shiju Abraham - Software Developer
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="block text-blue-600">Software Solutions</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Experienced software developer specializing in C#.NET, Java, and SQL with a passion for 
              automation testing and quality assurance in modern DevOps environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                <Link to="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3 rounded-full border-gray-300 hover:border-blue-600 hover:text-blue-600">
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
            
            {/* Skills Preview */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Specialized in</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                  <Code className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">C#.NET</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                  <Cpu className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Test Automation</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                  <Database className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">SQL Server</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <img 
                src="/lovable-uploads/055f888b-d46f-4c76-8034-3ea4a56876e1.png" 
                alt="Shiju Abraham - Professional Software Developer"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 bg-yellow-400 rounded-full p-4 shadow-lg animate-pulse">
              <Code className="h-6 w-6 text-gray-900" />
            </div>
            <div className="absolute top-1/2 -right-8 bg-green-500 rounded-full p-3 shadow-lg animate-pulse delay-300">
              <Database className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
