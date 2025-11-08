"use client";

import { FaLinkedin, FaXTwitter, FaThreads } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <div className="flex space-x-3 mt-4">
      <a
        href="https://www.linkedin.com/in/jesse-schmidt/"
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
        href="https://x.com/js_neuropsych"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors"
        style={{ color: '#9ca3af' }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
      >
        <FaXTwitter className="text-base" />
      </a>
      <a
        href="https://www.threads.com/@jesse.schmidt"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors"
        style={{ color: '#9ca3af' }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
      >
        <FaThreads className="text-base" />
      </a>
    </div>
  );
}

