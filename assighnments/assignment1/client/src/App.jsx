import { useEffect, useState } from 'react';
import axios from 'axios';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'; // アイコンのインポート

function App() {
  const [about, setAbout] = useState(null);
  const [experience, setExperience] = useState(null);
  const [education, setEducation] = useState(null);
  const [skills, setSkills] = useState(null);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    // Fetch profile data from the server
    axios
      .get('http://localhost:8000/getOverview')
      .then((response) => setAbout(response.data))
      .catch((error) => console.error('Error fetching profile data:', error));
    axios
      .get('http://localhost:8000/getEx')
      .then((response) => setExperience(response.data))
      .catch((error) => console.error('Error fetching profile data:', error));

    axios
      .get('http://localhost:8000/getEdu')
      .then((response) => setEducation(response.data))
      .catch((error) => console.error('Error fetching profile data:', error));

    axios
      .get('http://localhost:8000/getSkill')
      .then((response) => setSkills(response.data))
      .catch((error) => console.error('Error fetching profile data:', error));

    axios
      .get('http://localhost:8000/getContact')
      .then((response) => setContact(response.data))
      .catch((error) => console.error('Error fetching profile data:', error));
  }, []);

  if (!about) {
    return <div className='p-6 text-center text-gray-500'>Loading...</div>;
  }

  return (
    <div className='bg-gray-400 min-h-screen p-6'>
      <h1 className='text-5xl font-semibold text-gray-900 text-center p-4'>
        Resume
      </h1>
      <div className='bg-white shadow-xl rounded-lg p-8 max-w-4xl mx-auto space-y-8'>
        <h1 className='text-4xl font-semibold text-gray-900'>Makoto Tsuga</h1>
        <h2 className='text-xl text-indigo-700'>Front-End Developer</h2>
        <div className='mt-4 text-gray-700'>
          <p>{about.join(' ')}</p>
        </div>

        {/* Experience Section */}
        <section className='mt-6 bg-indigo-200 p-4 rounded-lg'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`w-full text-left text-2xl font-semibold ${
                    open ? 'text-indigo-600' : 'text-gray-900'
                  } flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors`}
                >
                  <ChevronDownIcon
                    className={`h-5 w-5 transform ${
                      open ? 'rotate-180' : ''
                    } transition-transform duration-200`}
                  />
                  <span>Experience</span>
                </Disclosure.Button>
                <Disclosure.Panel className='mt-4 space-y-4'>
                  {experience.map((job, index) => (
                    <div
                      key={index}
                      className='border-l-4 border-indigo-600 pl-4 bg-gray-50 p-4 rounded-lg'
                    >
                      <h4 className='text-xl font-semibold text-gray-900'>
                        {job.title}
                      </h4>
                      <p className='text-gray-600'>{job.company}</p>
                      <p className='text-gray-500'>{job.duration}</p>
                      <p className='text-gray-500'>{job.location}</p>
                      <p className='text-gray-700'>{job.description}</p>
                      <p className='text-gray-700'>
                        Technologies: {job.technologies.join(', ')}
                      </p>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </section>

        {/* Education Section */}
        <section className='mt-6 bg-indigo-200 p-4 rounded-lg'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`w-full text-left text-2xl font-semibold ${
                    open ? 'text-indigo-600' : 'text-gray-900'
                  } flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors`}
                >
                  <ChevronDownIcon
                    className={`h-5 w-5 transform ${
                      open ? 'rotate-180' : ''
                    } transition-transform duration-200`}
                  />
                  <span>Education</span>
                </Disclosure.Button>
                <Disclosure.Panel className='mt-4 space-y-4'>
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className='border-l-4 border-indigo-600 pl-4 bg-gray-50 p-4 rounded-lg'
                    >
                      <h4 className='text-xl font-semibold text-gray-900'>
                        {edu.degree} - {edu.school}
                      </h4>
                      <p className='text-gray-500'>{edu.gpa}</p>
                      <p className='text-gray-500'>{edu.award}</p>
                      <p className='text-gray-500'>{edu.duration}</p>
                      <p className='text-gray-500'>{edu.location}</p>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </section>

        {/* Technical Skills Section */}
        <section className='mt-6 bg-indigo-200 p-4 rounded-lg'>
          <Disclosure>
            {({ open }) => (
              <div>
                <Disclosure.Button
                  className={`w-full text-left text-2xl font-semibold ${
                    open ? 'text-indigo-600' : 'text-gray-900'
                  } flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors`}
                >
                  <ChevronDownIcon
                    className={`h-5 w-5 transform ${
                      open ? 'rotate-180' : ''
                    } transition-transform duration-200`}
                  />
                  <span>Technical Skills</span>
                </Disclosure.Button>
                <Disclosure.Panel className='mt-4 space-y-4 bg-white p-4 rounded-lg border-l-4 border-indigo-600'>
                  <div className='space-y-2'>
                    <h4 className='font-semibold text-gray-900'>Languages</h4>
                    <p>{skills.languages.join(', ')}</p>
                  </div>
                  <div className='space-y-2'>
                    <h4 className='font-semibold text-gray-900'>Frameworks</h4>
                    <p>{skills.frameworks.join(', ')}</p>
                  </div>
                  <div className='space-y-2'>
                    <h4 className='font-semibold text-gray-900'>
                      Other Skills
                    </h4>
                    <p>{skills.otherSkills.join(', ')}</p>
                  </div>
                  <div className='space-y-2'>
                    <h4 className='font-semibold text-gray-900'>
                      Qualifications
                    </h4>
                    <p>{skills.qualifications.join(', ')}</p>
                  </div>
                  <div className='space-y-2'>
                    <h4 className='font-semibold text-gray-900'>
                      Languages Spoken
                    </h4>
                    <p>{skills.languagesSpoken.join(', ')}</p>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </section>

        {/* Contact Section */}
        <section className='mt-6 bg-indigo-200 p-4 rounded-lg'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`w-full text-left text-2xl font-semibold ${
                    open ? 'text-indigo-600' : 'text-gray-900'
                  } flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors`}
                >
                  <ChevronDownIcon
                    className={`h-5 w-5 transform ${
                      open ? 'rotate-180' : ''
                    } transition-transform duration-200`}
                  />
                  <span>Contact</span>
                </Disclosure.Button>
                <Disclosure.Panel className='mt-4 space-y-4 bg-white p-4 rounded-lg border-l-4 border-indigo-600'>
                  <p>Phone: {contact.phone}</p>
                  <p>
                    Email:{' '}
                    <a
                      href={`mailto:${contact.email}`}
                      className='text-indigo-600'
                    >
                      {contact.email}
                    </a>
                  </p>
                  <p>Location: {contact.location}</p>
                  <p>
                    LinkedIn:{' '}
                    <a
                      href={contact.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-indigo-600'
                    >
                      {contact.linkedin}
                    </a>
                  </p>
                  <p>
                    GitHub:{' '}
                    <a
                      href={contact.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-indigo-600'
                    >
                      {contact.github}
                    </a>
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </section>
      </div>
    </div>
  );
}

export default App;
