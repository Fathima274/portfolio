import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-black text-center">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Alex Carter — All Rights Reserved.
      </p>
    </footer>
  );
};