import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Show = ({ id }) => {
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axios.get(`https://podcast-api.netlify.app/id/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show:', error);
      }
    };

    fetchShow();
  }, [id]);

  if (!show) return <div>Loading...</div>;

  return (
    <div>
      <h1>{show.title}</h1>
      <p>{show.description}</p>
      {/* Render seasons and episodes */}
    </div>
  );
};

export default Show;
