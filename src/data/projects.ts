export type CaseStudySection = {
  id: string
  label: string
  heading: string
  body?: string
}

export type Project = {
  id: string
  number: string
  slug: string
  title: string
  displayTitle: string
  category: string
  year: string
  role: string
  description: string
  coverImage: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'kuh',
    number: '01',
    slug: 'kuh-e-clinic',
    title: 'KUH E-Clinic',
    displayTitle: 'KUH E-CLINIC',
    category: 'Healthcare / UX/UI Design',
    year: '2025',
    role: 'UX/UI Designer',
    description:
      'A digital healthcare management system designed to make patient care, scheduling, and clinical workflows clearer for both staff and patients.',
    coverImage: '/images/kuh-cover.jpg',
    featured: true,
  },
  {
    id: 'basma',
    number: '02',
    slug: 'basma',
    title: 'Basma',
    displayTitle: 'BASMA',
    category: 'Branding / UI/UX / Web Design',
    year: '2025',
    role: 'Brand & Product Designer',
    description:
      'A digital media agency identity built from a single fingerprint mark, extended into a full visual language, design system, and website.',
    coverImage: '/images/basma-cover.jpg',
    featured: true,
  },
  {
    id: 'wedeliver',
    number: '03',
    slug: 'wedeliver',
    title: 'WeDeliver',
    displayTitle: 'WEDELIVER',
    category: 'Product Design / UI/UX',
    year: '2024',
    role: 'UI/UX Designer',
    description:
      'A structured product design case study covering flow architecture, interface systems, and key delivery-app screens.',
    coverImage: '/images/wedeliver-cover.jpg',
    featured: true,
  },
  {
    id: 'project-04',
    number: '04',
    slug: 'project-04',
    title: 'Additional Project',
    displayTitle: 'PROJECT FOUR',
    category: 'UI/UX Design',
    year: '2024',
    role: 'UI/UX Designer',
    description: 'Placeholder project — replace with real title, category, and description in src/data/projects.ts.',
    coverImage: '/images/project-04-cover.jpg',
    featured: true,
  },
]

export type MoreWorkCategory = 'Web' | 'Mobile' | 'Dashboard' | 'E-commerce' | 'Landing Pages' | 'UI Explorations'

export type MoreWorkItem = {
  id: string
  title: string
  category: MoreWorkCategory
  year: string
  image: string
}

// Placeholder set — replace images/titles with real smaller projects.
export const moreWork: MoreWorkItem[] = [
  { id: 'mw-1', title: 'Fintech Dashboard Concept', category: 'Dashboard', year: '2024', image: '/images/projects/more-1.jpg' },
  { id: 'mw-2', title: 'Boutique Store Landing', category: 'Landing Pages', year: '2024', image: '/images/projects/more-2.jpg' },
  { id: 'mw-3', title: 'Travel App Exploration', category: 'Mobile', year: '2023', image: '/images/projects/more-3.jpg' },
  { id: 'mw-4', title: 'Marketplace UI Kit', category: 'E-commerce', year: '2023', image: '/images/projects/more-4.jpg' },
  { id: 'mw-5', title: 'Studio Website Redesign', category: 'Web', year: '2023', image: '/images/projects/more-5.jpg' },
  { id: 'mw-6', title: 'Card Component Study', category: 'UI Explorations', year: '2023', image: '/images/projects/more-6.jpg' },
]

export const moreWorkCategories: (MoreWorkCategory | 'All')[] = [
  'All', 'Web', 'Mobile', 'Dashboard', 'E-commerce', 'Landing Pages', 'UI Explorations',
]

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
