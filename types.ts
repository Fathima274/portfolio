import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Skill {
  name: string;
  category: 'hard' | 'soft';
}

export interface EducationItem {
  degree: string;
  period: string;
  institution: string;
}

export interface Tool {
  name: string;
  icon: React.ReactNode;
}