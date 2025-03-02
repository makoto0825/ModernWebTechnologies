import { useState } from 'react';

const App = () => {
  // what do we need to track//s
  //eslint-disable-next-line
  const [singleFile, setSingleFile] = useState(null);

  const [displayImage, setDisplayImage] = useState(null);
  const [message, setMessage] = useState('');
  const [dogImage, setDogImage] = useState(null);

  // Handlersmakoro

  // fetch functions -> fetch a random single image
  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);
      const blob = await response.blob(); // we made a blob - Binary Large Object
      const imageUrl = URL.createObjectURL(blob);
      setDisplayImage(imageUrl);
    } catch (error) {
      console.error('Error fetching single file:', error);
    }
  };

  const fetchDogImage = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await response.json();
      if (data && data.message) {
        setDogImage(data.message);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  // fetch functions -> save single
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage('Please select a file before uploading.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', singleFile);

      const response = await fetch(`http://localhost:8000/save/single`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Image upload failed');
      }
      setMessage('File uploaded successfully!');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const saveDogImage = async () => {
    console.log('dogImage:', dogImage);
    if (!dogImage) {
      setMessage('No dog image to save.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/post/dog-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl: dogImage }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save dog image');
      }

      setMessage('Dog image saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error saving dog image.');
    }
  };

  return (
    <div>
      <p>{message}</p>
      <h2>Lab3</h2>
      <button onClick={fetchSingleFile}>Fetch image</button>
      {displayImage && (
        <div>
          <h3>Fetch Single File from three images at random in server</h3>
          <img
            src={displayImage}
            alt='Display Image'
            style={{ width: '200px', marginTop: '10px' }}
          />
        </div>
      )}
      <h2>Fetch Random Dog Image from website</h2>
      <button onClick={fetchDogImage}>Fetch Dog Image</button>
      {dogImage && (
        <div>
          <h3>Dog Image</h3>
          <img
            src={dogImage}
            alt='Dog'
            style={{ width: '200px', marginTop: '10px' }}
          />
        </div>
      )}
      <form onSubmit={handleSubmitSingleFile}>
        <h2>Upload the dog image to server</h2>
        {/* <input type='file' onChange={handleSingleFileChange} /> */}
        <button type='button' onClick={saveDogImage}>
          Upload the dog image
        </button>
      </form>
    </div>
  );
};

export default App;
