import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="flex justify-center space-x-6 p-4">
        {/* GitHub Icon */}
        <a 
          href="https://github.com/plon-Susk7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <Github size={24} />
        </a>
        {/* Twitter Icon */}
        <a 
          href="https://twitter.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <Twitter size={24} />
        </a>
        {/* LinkedIn Icon */}
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;