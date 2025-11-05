// Shared constants for Rocque Advisory website
import type { Service, Value, ContactInfo, NavItem, Project } from './interfaces';

export const COMPANY_NAME = 'Rocque Advisory' as const;
export const TAGLINE = 'Building Bridges for Effective Development Assistance' as const;

export const SERVICES: readonly Service[] = [
  {
    icon: 'assessment',
    title: 'Assessments and Reviews',
    description: 'We undertake capacity assessments and reviews',
    fullDescription: 'We undertake capacity assessments and reviews to determine entities\' ability to deliver programs, and required improvements',
    image: '/assets/images/assessments-and-reviews/1.jpg',
    hoverImage: '/assets/images/assessments-and-reviews/2.jpg'
  },
  {
    icon: 'school',
    title: 'Capacity Building',
    description: 'We work alongside organisations to effect changes',
    fullDescription: 'We work alongside organisations to effect changes necessary to effectively deliver programmes',
    image: '/assets/images/capacity-building/1.jpg',
    hoverImage: '/assets/images/capacity-building/2.jpg'
  },
  {
    icon: 'computer',
    title: 'Digitisation',
    description: 'We develop and configure computerised systems',
    fullDescription: 'We develop and configure computerised financial processing and e-payment systems to support proper use of funds and reporting',
    image: '/assets/images/digitisation/1.jpg',
    hoverImage: '/assets/images/digitisation/2.jpg'
  },
  {
    icon: 'support_agent',
    title: 'Technical backstopping',
    description: 'Our people backstop internal staff',
    fullDescription: 'Our people backstop internal staff in budgeting, accounting, reporting and oversight',
    image: '/assets/images/technical-backstopping/1.jpg',
    hoverImage: '/assets/images/technical-backstopping/2.jpg'
  },
  {
    icon: 'handshake',
    title: 'Collaboration',
    description: 'We foster collaboration between end users',
    fullDescription: 'We foster collaboration between the end user and available digital solution for value impact',
    image: '/assets/images/collaboration/1.jpg',
    hoverImage: '/assets/images/collaboration/2.jpg'
  }
] as const;

export const VALUES: readonly Value[] = [
  {
    title: 'Empathy',
    description: 'We seek to understand why people feel and act the way they do. Understanding helps us to create the most productive relationships within cross-cultural geographies.'
  },
  {
    title: 'Competence',
    description: 'We work with a diverse pool of professionals which enables us to deploy those with the knowledge, skills and experience that best meets client needs.'
  },
  {
    title: 'Respect',
    description: 'We treat others the way we wish to be treated. We act with humility and respect because these values create a setting for our services to be well received.'
  },
  {
    title: 'Integrity',
    description: 'Honesty, consistency and transparency are essential for us. These values enable us to build and maintain trust relationships. We respect the legal and ethical requirements of our profession.'
  }
] as const;

export const CONTACT_INFO: ContactInfo = {
  email: 'info@rocqueadvisory.ch',
  phone: '+33 6 11 50 22 94',
  address: 'Chemin de Blandonnet, 8, 1214 Vernier, Switzerland',
  companyName: 'Rocque Advisory Sarl'
} as const;

export const PROJECTS: readonly Project[] = [
  {
    title: 'Alignment with IFMISs',
    image: '/assets/images/projects/Building Bridges, Unlocking Potential.jpeg',
    description: 'Integration of donor-funded programmes into national computerised financial management systems (IFMIS) in two African countries.',
    fullDescription: 'Integration of donor-funded programmes into national computerised financial management systems (IFMIS) in two African countries has delivered significant benefits:',
    highlights: [
      'Stronger local ownership: Sub-national levels now have greater responsibility and control over programme implementation.',
      'Higher fund absorption: Resources reach implementation sites more quickly, enabling more effective use of funds.',
      'Smarter reporting and targeting: Streamlined reporting through the national system makes it possible to direct resources to the areas of greatest need, including during disease outbreaks.'
    ]
  },
  {
    title: 'Digital Payments',
    image: '/assets/images/projects/Rocque Team Rolling Out Mobile Payments Platform In Lubumbashi, DRC.jpeg',
    description: 'Scaled up Mobile Money payments in five countries, reducing reliance on cash and minimizing fiduciary risk.',
    fullDescription: 'Rocque Advisory introduced and scaled up Mobile Money payments in five countries, reducing reliance on cash, minimizing fiduciary risk, and ensuring timely, accurate disbursements — particularly in areas without banking services. The Rocque Mobile Money Payments Platform, now deployed in three countries, has further strengthened controls, improved accuracy, and accelerated payment processing.'
  },
  {
    title: 'Capacity Building',
    image: '/assets/images/projects/Rocque Team Delivering Training for Local Council Officers.jpeg',
    description: 'Strengthened accountability and financial management through targeted training across 20+ countries.',
    fullDescription: 'Rocque Advisory strengthened accountability and financial management through targeted training:',
    highlights :[
      '•	Audit personnel in 20+ countries – improved audit quality and timeliness, increasing donor confidence and enabling audits to address programmatic as well as financial aspects',
      '•	Accountants in 4 countries – enhanced skills in planning and budgeting for immunisation, strengthened accountability for domestic and donor funds, and promoted timely, transparent financial management at all levels.'
    ]
  },
  {
    title: 'Driving Impact Across Eight African Countries',
    image: '/assets/images/projects/Rocque Team Leading a Mobile Payments Platform Workshop in Lilongwe_Malawi.jpeg',
    description: 'Our Upscaling Programme strengthens government systems and accelerates the flow of donor funds.',
    fullDescription: '',
    highlights: [
      'Strengthening financial management — helping government teams address system gaps and unlock timely donor disbursements.',
      'Building smarter budgets — developing clear, effective budgets within grant applications and workplans.',
      'Streamlining reporting — simplifying financial reports to meet donor requirements with accuracy and transparency.',
      'Ensuring accountability — carrying out regular reviews that boost confidence, transparency, and faster fund utilization.'
    ]
  },
  {
    title: 'Technical Support to the Ghana Ministry of Health and Ghana Health Service',
    image: '/assets/images/projects/Rocque Team Delivering Training for Local Council Officers.jpeg',
    description: 'Comprehensive financial management support ensuring grant conditions fulfillment and timely donor disbursements.',
    fullDescription: '',
    highlights: [
      'Financial management-related grant conditions have now been fulfilled.',
      'Budgets and work plans submitted to donor and disbursements to country resumed.',
      'Overdue financial reports submitted to donors and subsequent timely submission of financial reports and audited financial statements.',
      'Re-configuration of the financial system\'s chart of accounts to enable traceability of budgets and timely reporting of expenditures for all implementers at central and subnational levels.',
      'Set up oversight arrangements – procedures for supervision by Internal Audit and Finance teams at sub-national levels.',
      'Undertook a feasibility study for mobile money payments – piloting conducted for central-level payments. Mobile payments are now used at the central level.',
      'Supported development and roll-out of a financial procedures manual for donor programmes (extension to government regulations).'
    ]
  },
  {
    title: 'Technical Support to the Tanzania Vaccine & Immunisation Development Programme',
    image: '/assets/images/projects/Building Bridges, Unlocking Potential.jpeg',
    description: 'Built capacity and returned funding to government systems with computerised financial management across 31 regions.',
    fullDescription: '',
    highlights: [
      'Capacity was built and funding returned to government systems',
      'A computerised financial system EPICOR set leading to timely reporting with compliance to donor requirements.',
      'Donor funds and budgets configured in the Ministry of Local Government’s system leading to transfers to 31 regions, 194 districts and more than 3000 facilities with reporting.',
      'The finance team capacitated through monitoring and mentorship.',
      'Performing regular expenditure reviews at sub-national levels.',
      'Supporting budgeting – improved quality and turnaround of budgets to donor.'
    ],
  }
] as const;

export const NAVIGATION_ITEMS: readonly NavItem[] = [
  { href: '#services', label: 'Services', ariaLabel: 'Go to Services section' },
  { href: '#projects', label: 'Projects', ariaLabel: 'Go to Projects section' },
  { href: '#values', label: 'Values', ariaLabel: 'Go to Values section' },
  { href: '#contact', label: 'Contact', ariaLabel: 'Go to Contact section' }
] as const;

// Breakpoint constants for consistent responsive design
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 900,
  DESKTOP: 1200
} as const;

// Animation duration constants
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
} as const;