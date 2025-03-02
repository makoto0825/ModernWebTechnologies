import { useState } from 'react';

import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://localhost:8000/data');
  //     const data = await response.json();

  //     setMessage(JSON.stringify(data));
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const loginForm = async (e) => {
    e.preventDefault();
    const submission = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch('https://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: submission,
      });
      const data = await response.json();
      setMessage(JSON.stringify(data));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  //webForm for file upload
  const fileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch('https://localhost:8000/fileform', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setMessage(JSON.stringify(data));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        {message}
        <button onClick={() => setMessage('Hello Vite!')}>Click me!</button>
        <form onSubmit={loginForm}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setEmail(e);
            }}
            required
          />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => {
              setPassword(e);
            }}
            required
          />
        </form>
        <form onSubmit={fileUpload}>
          <input
            type='file'
            onChange={(e) => {
              setFile(e.target.value);
            }}
            required
          />
          <button type='submit'>Upload</button>
        </form>
      </div>
    </>
  );
}

export default App;
