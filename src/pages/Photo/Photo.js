import { useState, useEffect } from 'react';

const Photo = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
      });
  }, []);

  return (
    <div>
      {photos.map(photo => (
        <img src={photo.url} key={photo.id} alt={photo.title} />
      ))}
    </div>
  );
};

export default Photo;
