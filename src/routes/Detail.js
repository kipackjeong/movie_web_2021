import React from "react";
import Movie from "../components/Movie";
import "./Detail.css"
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state !== undefined) {
      const { id, year, title, summary, poster, genres } = location.state;
      return (
        <div className="movie_detail">
          <Movie
            id={id}
            year={year}
            title={title}
            summary={summary}
            poster={poster}
            genres={genres}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
