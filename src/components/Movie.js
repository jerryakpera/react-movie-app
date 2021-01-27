import React from 'react';

// Config
import _config from '../config';

const Movie = ({ data }) => {
  const setVoteClass = (voteAverage) => {
    return voteAverage >= 8 ? 'green' : voteAverage >= 6 ? 'orange' : 'red';
  };

  return (
    <div className="movie">
      <img
        className="movieImg"
        src={
          data.poster_path
            ? `${_config.imagesAPI}${data.poster_path}`
            : _config.defaultImage
        }
        alt={data.title}
      />
      <div className="movie-info">
        <h3>{data.title}</h3>
        <span className={setVoteClass(data.vote_average)}>
          {data.vote_average}
        </span>
      </div>

      <div className="movie-overview">
        <h2>Overview</h2>
        <p>{data.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
