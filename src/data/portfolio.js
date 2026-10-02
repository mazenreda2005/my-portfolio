// ---------------------------------------------------------------------------
// All content below is sourced from Mazen's CV. Edit this file to update the
// site — components read from here, so you rarely need to touch component
// code. Fields marked null are intentionally left blank; fill them in when
// you have real links.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Mazen Reda',
  fullName: 'Mazen Reda Nasr Mohamed',
  title: 'Computer Science Student | Cloud Security (AWS) | Cybersecurity',
  tagline:
    'Computer Science student building practical AWS Cloud Security skills — IAM, VPC networking, and logging and monitoring — on top of a penetration testing background.',
  location: 'Giza, Egypt',
  email: 'mazenreda116@gmail.com',
  emailSecondary: 'mazen.reda1@msa.edu.eg',
  phone: '+20 100 360 9942',
  github: 'https://github.com/mazenreda2005',
  githubHandle: 'mazenreda2005',
  linkedin: 'https://www.linkedin.com/in/mazen-reda-nasr-mohamed-b215172b1',
  cvFile: `${import.meta.env.BASE_URL}Mazen_Reda_CV.pdf`,
}

export const about = {
  summary: [
    "I'm a Computer Science student at MSA University in Egypt, graduating in 2027, focused on Cloud Security — especially AWS Cloud Security.",
    'Through hands-on AWS labs I have configured IAM users, roles, and least-privilege policies, built VPCs with public and private subnets, locked down Security Groups, applied S3 access control, and reviewed CloudTrail logs to monitor account activity.',
    'My security foundation comes from penetration testing training with NTI, EG-CERT, NTRA, and Instant Software Solutions, where I practiced network scanning, traffic analysis, and web vulnerability exploitation.',
    "I'm now building toward connecting cloud security with SIEM and incident response, and I'm looking for an entry-level Cloud Security role or internship.",
  ],
  focusAreas: ['AWS Cloud Security', 'IAM & Access Control', 'Cloud Networking', 'Logging & Monitoring', 'Penetration Testing'],
}

export const skills = [
  {
    category: 'Cloud Security (AWS)',
    items: ['IAM', 'Least Privilege', 'Access Control', 'EC2', 'S3 Access Control', 'VPC', 'CloudTrail', 'Logging & Monitoring', 'Misconfiguration Remediation', 'AWS CLI'],
  },
  {
    category: 'Cloud Networking',
    items: ['Public & Private Subnets', 'Route Tables', 'Internet Gateway', 'NAT Gateway', 'Security Groups'],
  },
  {
    category: 'Cybersecurity',
    items: ['Penetration Testing', 'Vulnerability Assessment', 'Network Scanning', 'Traffic Analysis', 'XSS', 'SQL Injection'],
  },
  {
    category: 'Security Tools',
    items: ['Nmap', 'Burp Suite', 'Wireshark', 'Kali Linux'],
  },
  {
    category: 'Networking',
    items: ['TCP/IP', 'OSI Model', 'Routing', 'Subnetting', 'Packet Analysis'],
  },
  {
    category: 'Programming & OS',
    items: ['Python (Basic)', 'C++', 'PHP', 'Linux', 'Windows'],
  },
  {
    category: 'Web Development',
    items: ['Laravel', 'MySQL', 'HTML', 'CSS'],
  },
]

export const certifications = [
  {
    name: 'Cybersecurity Academy (Undergraduate Level)',
    org: 'NTI — Ministry of Communications & IT, in partnership with EG-CERT and NTRA',
    date: '2025',
    duration: '60 technical hours + 12 freelance hours',
    description:
      'Undergraduate-level cybersecurity training covering technical fundamentals alongside a freelance-readiness track.',
    skills: ['Network Security', 'Security Fundamentals'],
  },
  {
    name: 'Cyber Security Diploma',
    org: 'Instant Software Solutions',
    date: 'Completed Jan 15, 2025',
    duration: '150 hours',
    description: 'Diploma covering offensive and defensive security techniques.',
    skills: ['Offensive Security', 'Defensive Security'],
  },
  {
    name: 'Full Stack Web Development using PHP',
    org: 'ITI — Information Technology Institute',
    date: 'Aug 5 – Sep 2, 2025',
    duration: '126 hours',
    description: 'Full-stack track covering PHP, Laravel, MySQL, and client-side development.',
    skills: ['PHP', 'Laravel', 'MySQL'],
  },
]

export const experience = [
  {
    role: 'Hands-on AWS Cloud Security Labs & Projects',
    org: 'AWS Academy / Vocareum lab environments',
    date: 'Ongoing',
    period: 'Hands-on labs',
    points: [
      'Configured IAM users, roles, and policies applying least-privilege principles.',
      'Built VPCs with public and private subnets, route tables, an Internet Gateway, and a NAT Gateway.',
      'Configured Security Group inbound and outbound rules to restrict EC2 exposure.',
      'Applied S3 access control settings to prevent unintended public access.',
      'Enabled and reviewed CloudTrail logs to monitor account activity and API calls.',
      'Identified common cloud misconfigurations and applied basic remediation.',
    ],
    tech: ['IAM', 'VPC', 'EC2', 'S3', 'CloudTrail', 'AWS CLI', 'Linux'],
  },
  {
    role: 'Penetration Tester Trainee',
    org: 'Instant Software Solutions',
    date: 'Dec 2024 – Jan 2025',
    period: '1 month',
    points: [
      'Completed hands-on penetration testing labs and attack-scenario exercises covering offensive and defensive techniques.',
      'Performed network scanning and traffic analysis using Nmap and Wireshark.',
      'Identified and exploited web vulnerabilities, including XSS and SQL injection, using Burp Suite in lab environments.',
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
    name: 'Network Sniffer & Packet Analyzer',
    description:
      'A Python packet capture tool built on raw AF_PACKET sockets with no external libraries, parsing Ethernet, IPv4/IPv6, TCP, UDP, and ICMP headers byte-by-byte.',
    contribution:
      'Added protocol detection (HTTP, HTTPS, DNS, SSH, RDP, MySQL), filtering by protocol, host, or port, traffic statistics, and JSONL export for offline analysis.',
    tech: ['Python', 'Raw Sockets', 'Linux', 'Networking'],
    github: 'https://github.com/mazenreda2005/RhombixTechnologies_Tasks',
    live: null,
  },
  {
    name: 'Football Field Booking Website',
    description: 'A booking system for reserving football fields with authentication and role-based access control.',
    contribution: 'Applied input validation and SQL injection prevention throughout the booking flow.',
    tech: ['PHP', 'Laravel', 'MySQL'],
    github: null,
    live: null,
  },
  {
    name: 'E-Commerce Website — Tech Store',
    description: 'An online store with product management.',
    contribution: 'Implemented input validation and secure data handling.',
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
]

// Shown in the "Focus" section. `tool` is the card title, `use` its description.
export const cyberPractice = [
  {
    tool: 'IAM & Access Control',
    use: 'IAM users, roles, and policies built around least privilege',
  },
  {
    tool: 'Cloud Networking',
    use: 'VPCs with public and private subnets, route tables, Internet and NAT Gateways, and Security Groups',
  },
  {
    tool: 'Logging & Monitoring',
    use: 'CloudTrail logs to track account activity and API calls',
  },
  {
    tool: 'Penetration Testing',
    use: 'Network scanning, traffic analysis, and web vulnerability testing with Nmap, Wireshark, and Burp Suite',
  },
]

export const careerGoals = {
  objective:
    'Seeking an entry-level Cloud Security role or internship to apply my AWS, IAM, cloud networking, and logging and monitoring skills.',
  interests: [
    'Cloud Security internships',
    'Junior Cloud Security Engineer roles',
    'SOC Analyst internships',
    'SIEM and incident response in the cloud',
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
