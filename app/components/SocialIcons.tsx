"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex space-x-3 mt-4">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors"
        style={{ color: '#9ca3af' }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
      >
        <FaGithub className="text-base" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors"
        style={{ color: '#9ca3af' }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
      >
        <FaLinkedin className="text-base" />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors"
        style={{ color: '#9ca3af' }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
      >
        <FaTwitter className="text-base" />
      </a>
    </div>
  );
}

