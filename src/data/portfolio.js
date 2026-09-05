// ---------------------------------------------------------------------------
// All content below is sourced from Mazen's CV. Edit this file to update the
// site — components read from here, so you rarely need to touch component
// code. Fields marked null are intentionally left blank because the CV did
// not provide that information; fill them in when you have real links.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Mazen Reda',
  fullName: 'Mazen Reda Nasr Mohamed',
  title: 'Cybersecurity Student & Penetration Tester',
  tagline:
    'Computer Science student focused on offensive security — learning to think like an attacker so I can help build systems that hold up.',
  location: 'Giza, Egypt',
  email: 'mazen.reda1@msa.edu.eg',
  emailSecondary: 'mazenreda116@gmail.com',
  phone: '+20 100 360 9942',
  github: 'https://github.com/mazenreda2005',
  githubHandle: 'mazenreda2005',
  // CV lists a LinkedIn profile but no URL text was extractable — add your
  // profile URL here to enable the button in the Contact and Footer sections.
  linkedin: null,
  cvFile: '/Mazen_Reda_CV.pdf',
}

export const about = {
  summary: [
    "I'm a Computer Science student at MSA University in Egypt, on track to graduate in 2027, with my focus set on cybersecurity — specifically penetration testing and vulnerability assessment.",
    "Over the past year I've put in over 300 hours of hands-on security training across programs run by NTI, EG-CERT, NTRA, and Instant Software Solutions — working through network scanning, traffic analysis, and web vulnerability exploitation rather than just theory.",
    "I've paired that with a full-stack web development track (PHP, Laravel, MySQL) through ITI, because understanding how applications are built makes it easier to understand how they break.",
    "Right now I'm looking for a cybersecurity internship where I can apply what I've learned to real systems, keep learning from people more experienced than me, and start building a track record in the field.",
  ],
  focusAreas: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment', 'Full-Stack Development'],
}

export const skills = [
  {
    category: 'Cybersecurity',
    items: ['Penetration Testing', 'Vulnerability Assessment', 'XSS', 'SQL Injection', 'Network Scanning'],
  },
  {
    category: 'Security Tools',
    items: ['Nmap', 'Burp Suite', 'Wireshark', 'Kali Linux'],
  },
  {
    category: 'Networking',
    items: ['TCP/IP', 'OSI Model', 'Network Fundamentals'],
  },
  {
    category: 'Programming',
    items: ['C++', 'PHP', 'Python (Basic)'],
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS', 'Laravel', 'MySQL'],
  },
  {
    category: 'Operating Systems',
    items: ['Windows', 'Linux (Kali Linux)'],
  },
]

export const certifications = [
  {
    name: 'Cybersecurity Academy (Undergraduate Level)',
    org: 'NTI — Ministry of Communications & IT, in partnership with EG-CERT and NTRA',
    date: '2025',
    duration: '60 technical hours + 12 freelance hours',
    description:
      'Undergraduate-level cybersecurity training covering technical fundamentals alongside a freelance-readiness track, delivered by the National Telecommunication Institute in partnership with EG-CERT and NTRA.',
    skills: ['Network Security', 'Security Fundamentals'],
  },
  {
    name: 'Full Stack Web Development using PHP',
    org: 'ITI — Information Technology Institute',
    date: 'Aug 5 – Sep 2, 2025',
    duration: '126 hours',
    description:
      'Intensive full-stack track covering PHP, Laravel, MySQL, and client-side development — building complete web applications from the database up.',
    skills: ['PHP', 'Laravel', 'MySQL', 'Client-Side Development'],
  },
  {
    name: 'Cyber Security Diploma',
    org: 'Instant Software Solutions',
    date: 'Completed Jan 15, 2025',
    duration: '150 hours',
    description:
      'Diploma covering offensive and defensive security techniques, forming the foundation for a hands-on penetration testing traineeship at the same organization.',
    skills: ['Offensive Security', 'Defensive Security'],
  },
]

export const experience = [
  {
    role: 'Penetration Tester Trainee',
    org: 'Instant Software Solutions',
    date: 'Dec 2024 – Jan 2025',
    period: '1 month',
    points: [
      'Completed a 150-hour Cyber Security Diploma covering both offensive and defensive techniques.',
      'Performed hands-on penetration testing labs and real-world attack scenario exercises.',
      'Practiced network scanning, traffic analysis, and web vulnerability exploitation.',
    ],
    tech: ['Nmap', 'Burp Suite', 'Wireshark', 'Kali Linux'],
  },
]

export const education = {
  university: 'October University for Modern Sciences & Arts (MSA)',
  faculty: 'Faculty of Computer Science',
  expected: '2027',
}

export const projects = [
  {
    name: 'Football Field Booking Website',
    description:
      'A full booking system for reserving football fields, built with user authentication and role-based access control.',
    contribution: 'Applied security practices including input sanitization and SQL injection prevention throughout the booking flow.',
    tech: ['PHP', 'Laravel', 'MySQL'],
    github: null,
    live: null,
  },
  {
    name: 'E-Commerce Website — Tech Store',
    description:
      'A complete online store with product management and a secure checkout flow.',
    contribution: 'Implemented input validation and secure handling to prevent common web vulnerabilities.',
    tech: ['PHP', 'Laravel', 'MySQL'],
    github: null,
    live: null,
  },
  {
    name: 'Blog Website',
    description: 'A blog platform built following the MVC architecture.',
    contribution: 'Implemented authentication, authorization, and validation following the MVC pattern.',
    tech: ['Laravel', 'MVC Architecture'],
    github: null,
    live: null,
  },
  {
    name: 'Hotel Booking System',
    description: 'A console-based hotel reservation system with structured data management.',
    contribution: 'Built input validation and structured data handling for reservation records.',
    tech: ['C++', 'Console Application'],
    github: null,
    live: null,
  },
]

export const cyberPractice = [
  {
    tool: 'Nmap',
    use: 'Network reconnaissance and host discovery',
  },
  {
    tool: 'Burp Suite',
    use: 'Web application vulnerability testing — XSS, SQL injection, and broken authentication',
  },
  {
    tool: 'Wireshark',
    use: 'Network traffic capture and protocol analysis',
  },
  {
    tool: 'Kali Linux',
    use: 'Practicing offensive techniques in controlled lab environments',
  },
]

export const careerGoals = {
  objective:
    'Seeking a cybersecurity internship to apply my knowledge in network security, vulnerability assessment, and penetration testing.',
  interests: [
    'Cybersecurity internships',
    'Junior penetration testing roles',
    'Software & web development opportunities',
    'Continuous, hands-on learning',
  ],
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
