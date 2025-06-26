// src/app/page.js
'use client';

import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('home');
  const [graphLoading, setGraphLoading] = useState(true);

  // Fix scrolling container
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-10 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex p-4 gap-2">
          <button 
            onClick={() => setActiveTab('home')} 
            className={`px-4 py-2 rounded-md transition-all ${
              activeTab === 'home' 
                ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white font-medium shadow-lg shadow-purple-500/10' 
                : 'hover:bg-gray-800 text-gray-400'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveTab('projects')} 
            className={`px-4 py-2 rounded-md transition-all ${
              activeTab === 'projects' 
                ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white font-medium shadow-lg shadow-purple-500/10' 
                : 'hover:bg-gray-800 text-gray-400'
            }`}
          >
            Projects
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-16 max-w-6xl mx-auto px-4 h-full">
        {/* Home Tab */}
        {activeTab === 'home' && (
          <div className="space-y-16">
            {/* Header */}
            <section className="animate-fadeIn">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-500">
                  Soham 
                </span>
                <span className="block text-xl text-gray-400 mt-2 font-mono">
                  aka <span className="text-purple-300">@Charter</span> 
                </span>
              </h1>
              <p className="text-xl text-gray-300 mt-4 font-mono">
                &gt; Turning caffeine, curiosity & code into scalable impact
              </p>
            </section>

            {/* About */}
            <section className="animate-fadeIn delay-100">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-purple-400">#</span> About
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                   I’m a data-driven developer focused on building analytical tools across tech and finance.
                    I write code for real-world decision-making.
                    <br/> currently expanding my skills in data science, modeling, and scalable systems.

                </p>
                
              </div>
            </section>


            {/* Skills */}

              <section className="animate-fadeIn delay-250 mt-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-purple-400">#</span> Tech Stack
                </h2>
                
                <div className="flex flex-wrap gap-3">
                  {/* Python */}
                  <a href="https://www.python.org/" target="_blank" className="tech-icon">
                    <img 
                      src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge" 
                      alt="Python" 
                      className="h-7 rounded-sm"
                    />  
                  </a>
                  
                  {/* Pandas */}
                  <a href="https://pandas.pydata.org/" target="_blank" className="tech-icon">
                    <img 
                      src="https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white&style=for-the-badge" 
                      alt="Pandas" 
                      className="h-7 rounded-sm"
                    />
                  </a>
                  
                  {/* Scikit-learn */}
                  <a href="https://scikit-learn.org/" target="_blank" className="tech-icon">
                    <img 
                      src="https://img.shields.io/badge/scikit_learn-F7931E?logo=scikit-learn&logoColor=white&style=for-the-badge" 
                      alt="Scikit-learn" 
                      className="h-7 rounded-sm"
                    />
                  </a>
                  
                  {/* Add more badges - just copy the pattern above */}
                  <a href="#" target="_blank" className="tech-icon">
                    <img 
                      src="https://img.shields.io/badge/Numpy-F08080?logo=Numpy&logoColor=white&style=for-the-badge" 
                      alt="Numpy" 
                      className="h-7 rounded-sm"
                    />
                  </a>

                  <a href="https://plotly.com/" target="_blank" className="tech-icon">
                    <img 
                      src="https://img.shields.io/badge/plotly-f093fb?logo=plotly&logoColor=white&style=for-the-badge" 
                      alt="Plotly" 
                      className="h-7 rounded-sm"
                    />
                  </a>


                </div>
              </section>

            {/* GitHub Activity */}
            <section className="animate-fadeIn delay-200">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-purple-400">#</span> Logs
              </h2>
              <div className="mb-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                <img 
                  src={`https://ghchart.rshah.org/9d4edd/N0teveryth1ng`}
                  alt="GitHub Contributions"
                  className="w-full h-auto rounded"
                  onLoad={() => setGraphLoading(false)}
                />
              </div>
            </section>

            {/* Contact - Darkened Cards */}
            <section className="animate-fadeIn delay-300">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-purple-400">#</span> Contact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { 
                    name: 'Email', 
                    value: 'vasudevankrishna245@gmail.com',
                    url: 'mailto:vasudevankrishna245@gmail.com',
                    icon: '✉️',
                    bg: 'bg-gray-900'
                  },
                  { 
                    name: 'GitHub', 
                    value: 'N0teveryth1ng',
                    url: 'https://github.com/N0teveryth1ng',
                    icon: '⌨️',
                    bg: 'bg-gray-900'
                  },
                  { 
                    name: 'Twitter/X', 
                    value: '@Charter_x1',
                    url: 'https://x.com/Charter_x1',
                    icon: '𝕏',
                    bg: 'bg-gray-900'
                  },
                  { 
                    name: 'LinkedIn', 
                    value: 'sohamdas2071',
                    url: 'https://www.linkedin.com/in/sohamdas2071/',
                    icon: '👔',
                    bg: 'bg-gray-900'
                  }
                ].map((item) => (
                  <div 
                    key={item.name}
                    className={`${item.bg} p-4 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <h3 className="font-medium text-purple-300">{item.name}</h3>
                        <p className="text-sm text-gray-400">{item.value}</p>
                      </div>
                      <a 
                        href={item.url}
                        target="_blank"
                        className="ml-auto text-purple-400 hover:text-purple-300 transition-colors"
                        aria-label={item.name}
                      >
                        →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}







        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-bold mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-500">
                Projects
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Quant-72",
                  desc: " Hybrid Technical trading strategy",
                  tags: ["Python", "ML", "2025"],
                  link: "https://github.com/N0teveryth1ng/Quant72"
                },
                {
                  title: "Citi Lab",
                  desc: "Experimental finance visualization tool",
                  tags: ["React", "D3.js", "Private"],
                  link: "#"
                },
                {
                  title: "ECOM-1N",
                  desc: "Ecom analysis",
                  tags: ["Python", "Jupyter", "ML"],
                  link: "https://github.com/N0teveryth1ng/ECOM-1N"
                },
                {
                  title: "Dark Matter UI",
                  desc: "Component library for dark UIs",
                  tags: ["TypeScript", "Storybook", "OSS"],
                  link: "#"
                }
              ].map((project, i) => (
                <div 
                  key={i}
                  className="bg-gray-900/80 border border-gray-800 rounded-xl p-5 hover:border-purple-500 transition-all group"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-purple-200 group-hover:text-purple-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs bg-gray-800 text-purple-300 px-3 py-1 rounded-full border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm"
                  >
                    explore <span className="ml-1">↗</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer - Darkened */}
      <footer className="fixed bottom-0 w-full bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 py-3">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          Made with Caffeine • 2025 • Charter
        </div>
      </footer>
    </div>
  );
}