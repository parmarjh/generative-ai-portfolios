import React from 'react'
import {
  BookOpen,
  Code2,
  Sparkles
} from 'lucide-react'
import { Github, Linkedin, Youtube, HuggingFace, type IconProps } from '../components/Icons'

export interface SocialLink {
  id: string
  name: string
  url: string
  icon: React.FC<IconProps>
  ariaLabel: string
  handle: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/parmarjh',
    icon: Github,
    ariaLabel: 'Visit GitHub profile',
    handle: '@parmarjh'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jhparmar',
    icon: Linkedin,
    ariaLabel: 'Visit LinkedIn profile',
    handle: 'in/jhparmar'
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    url: 'https://huggingface.co/jhparmar',
    icon: HuggingFace,
    ariaLabel: 'Visit Hugging Face profile',
    handle: 'jhparmar'
  },
  {
    id: 'medium',
    name: 'Medium',
    url: 'https://jhparmar.medium.com',
    icon: BookOpen,
    ariaLabel: 'Read articles on Medium',
    handle: '@jhparmar'
  },
  {
    id: 'devto',
    name: 'Dev.to',
    url: 'https://dev.to/jhparmar',
    icon: Code2,
    ariaLabel: 'Read posts on Dev.to',
    handle: 'jhparmar'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCSLMS3odjPxesH02jnhWMnA',
    icon: Youtube,
    ariaLabel: 'Watch videos on YouTube',
    handle: 'AI & Data Insights'
  }
]
