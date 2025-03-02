import express from 'express';
import cors from 'cors';
const app = express();
const port = 8000;

// CORS設定
app.use(cors());

// profile
const profile = {
  name: 'Makoto Tsuga',
  title: 'Front-End Developer',
  contact: {
    phone: '437-349-2633',
    location: 'Toronto, Canada',
    email: 'makototsuga@gmail.com',
    linkedin: 'https://www.linkedin.com/in/tsuga-makoto-a19464252',
    github: 'https://github.com/makoto0825',
  },
  about: [
    'Over 6 years of experience as a software engineer and front-end engineer in the IT industry.',
    'Involved in the development of core business systems for large enterprises at an IT company in Japan.',
    'Currently engaged in website development as a front-end engineer during my freelance period.',
    'Acquired the skill set necessary for developing applications incorporating AI technologies through research in artificial intelligence at the graduate level.',
    'Well-equipped to contribute to your company leveraging these diverse experiences.',
  ],
  experience: [
    {
      title: 'Frontend Developer',
      company: 'Freelancer',
      duration: 'April 2024– Present',
      location: 'Toronto, Canada (Remote)',
      description:
        'Entire web development process, from client requirements definition, design creation, implementation, to deployment, was carried out independently.',
      technologies: ['TypeScript', 'React', 'Next.js', 'Figma', 'Tailwind'],
    },
    {
      title: 'Software Developer',
      company: 'NTT DATA ENGINEERING SYSTEMS Corporation',
      duration: 'April 2016– September 2021',
      location: 'Tokyo, Japan',
      description:
        'Participation in a project with over 50 team members, contributing to the development of accounting and production management systems.',
      technologies: ['JavaScript', 'HTML/CSS', 'Java', 'Oracle SQL', 'Redmine'],
    },
  ],
  education: [
    {
      school: 'Humber College',
      degree: 'Diploma of Computer Programming',
      gpa: '89.8/100',
      award:
        'Term Grade Point Average of 80 or greater for the Winter 2024 term',
      duration: 'January 2024– Present',
      location: 'Toronto, Canada',
    },
    {
      school: 'Asia Pacific University of Technology and Innovation',
      degree: 'Master of Science in Artificial Intelligence',
      gpa: '3.57/4',
      award: 'Master of Science in Artificial Intelligence with Merit',
      duration: 'June 2022– December 2023',
      location: 'Kuala Lumpur, Malaysia',
    },
  ],
  technicalSkills: {
    languages: [
      'TypeScript',
      'JavaScript',
      'HTML/CSS',
      'Java',
      'Python',
      'R',
      'PL/SQL',
      'VBA',
    ],
    frameworks: ['React (library)', 'Next.js', 'TensorFlow'],
    otherSkills: ['Github', 'Oracle SQL', 'Figma', 'Microsoft Office Skills'],
    qualifications: [
      'Oracle Certified Java Programmer Silver SE 8',
      'ORACLE MASTER Bronze Oracle Database 12c',
    ],
    languagesSpoken: ['Japanese (native level)'],
  },
};

app.get('/getOverview', (req, res) => {
  res.json(profile.about);
});

app.get('/getEx', (req, res) => {
  res.json(profile.experience);
});

app.get('/getEdu', (req, res) => {
  res.json(profile.education);
});

app.get('/getSkill', (req, res) => {
  res.json(profile.technicalSkills);
});

app.get('/getContact', (req, res) => {
  res.json(profile.contact);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
