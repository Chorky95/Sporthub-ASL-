import React from 'react';
import { Link } from 'react-router-dom';

function Home({ data }) {
  return (
    <div className='container'>
      {data.map((video) => (
        <div className='video' key={video.id}>
          <h3 className='video__title'>{video.description}</h3>
          <Link
            style={{ textDecoration: 'none' }}
            to={{
              pathname: '/video',
              state: {
                id: video.id,
                description: video.description,
                author: video.author.name,
                release: video.createdBefore,
                views: video.views,
                video: video.video,
                athlete: video.athlete,
              },
            }}
          >
            <img
              className='video__poster'
              src={`${video.video.poster}`}
              alt={`${video.description}`}
            />
          </Link>
          <p>{`Uploaded by: ${video.author.name}, ${video.createdBefore}`}</p>
          <p>{`Views: ${video.views}`}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
