import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

export default function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          id,
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
      style={{ textDecoration: "none" }}
    >
      <div className="movie" id={id}>
        <img className="movie_poster" src={poster} alt={title} title={title} />
        <div className="movie_data">
          <h2 className="movie_data_title">{title}</h2>
          <h3 className="movie_data_year">{year}</h3>
          <p className="movie_data_summary">
            {summary.length >= 250
              ? summary.substring(0, 250) + "..."
              : summary}
          </p>
          <ul className="movie_data_genres">
            {genres.map((genre, idx) => (
              <li key={idx} className="movie_data_genres_genre">
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
