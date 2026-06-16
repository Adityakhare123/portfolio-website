import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white object-cover"
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-4">John Doe</h1>
        <p className="text-xl md:text-2xl mb-8">Full Stack Developer | Web Enthusiast</p>
        <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
          I create beautiful and functional web experiences. Let's build something amazing together!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
