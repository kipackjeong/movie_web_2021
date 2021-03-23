import React, { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
import "../components/Movie.css";

const URL = "https://yts-proxy.now.sh/list_movies.json&sort_by=rating";
class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount = async () => {
    await this.getMovies();
    this.setState({ isLoading: false });
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(URL);
    this.setState({ movies: movies });
  };
  renderMovies = () => {
    const { movies } = this.state;
    return movies.map((movie) => (
      <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        poster={movie.medium_cover_image}
        summary={movie.summary}
        genres={movie.genres}
      />
    ));
  };
  render() {
    const { isLoading } = this.state;
    return (
      <section className="container">
        <div>
          <span>{isLoading ? "Loading...." : ""}</span>
        </div>
        <div className="movies">{this.renderMovies()}</div>
      </section>
    );
  }
}

export default Home;