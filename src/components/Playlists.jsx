import React from 'react';
import { useLocation } from 'react-router-dom';

const Playlists = () => {
  const location = useLocation();
  const data  = location.state?.data || [];

  console.log(data);
  return (
    <div>
      <h1>/Playlist Page</h1>
      {data.map((d)=> (
        <h3 className='text-white'>{d.title}</h3>
      ))}
    </div>
  );
};

export default Playlists; 
