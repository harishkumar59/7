import React, { useEffect, useState } from 'react';
import { Code2, Rocket, Cpu, Globe2, ChevronDown, ArrowRight } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold">7Shards</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#work" className="hover:text-purple-400 transition-colors">Work</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,0,255,0.1),transparent_70%)]" />
        <div className="container mx-auto px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Crafting Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              We transform ideas into exceptional digital experiences through innovative web solutions
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="group bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full flex items-center space-x-2 transition-all">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-gray-300 hover:text-white flex items-center space-x-2">
                <span>See Our Work</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe2 className="w-8 h-8 text-purple-500" />,
                title: "Web Development",
                description: "Custom websites and web applications built with cutting-edge technologies"
              },
              {
                icon: <Rocket className="w-8 h-8 text-purple-500" />,
                title: "Digital Strategy",
                description: "Strategic planning and consultation for your digital transformation"
              },
              {
                icon: <Cpu className="w-8 h-8 text-purple-500" />,
                title: "Tech Solutions",
                description: "Innovative technical solutions tailored to your business needs"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900/50 p-8 rounded-2xl hover:bg-gray-800/50 transition-colors">
                {service.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                title: "Enterprise Dashboard",
                category: "Web Application"
              },
              {
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
                title: "E-commerce Platform",
                category: "Digital Commerce"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-300">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;