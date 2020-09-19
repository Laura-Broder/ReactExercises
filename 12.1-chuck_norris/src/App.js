import React from "react";
import chuckApi from "./api/chuckApi";
import CategoriesBtns from "./components/CategoriesBtns";
import CustomButton from "./components/CustomButton";
import SearchBar from "./components/SearchBar";
import "./App.css";

class App extends React.Component {
  state = {
    categoriesList: [],
    joke: "",
    term: "",
  };
  handleClick = async (category) => {
    let response;
    if (category === "random") {
      response = await chuckApi.get("random");
    } else {
      response = await chuckApi.get(`/random?category=${category}`);
    }
    this.setState({ joke: response.data.value });
  };

  getJokesCategories = async () => {
    const response = await chuckApi.get("/categories");
    this.setState({ categoriesList: response.data });
  };
  onSearchSubmit = async (term) => {
    const response = await chuckApi.get(`/search?query=${term}`);
    const resultsLength = response.data.result.length;
    const randomJokeIndex = Math.floor(Math.random() * resultsLength);
    this.setState({ joke: response.data.result[randomJokeIndex].value });
  };

  componentDidMount = () => {
    this.getJokesCategories();
    this.handleClick("random");
  };

  render() {
    return (
      <div className="mainContainer center">
        <header>
          <h1 className="orange">Best Chuck Norris Jokes Ever</h1>
          <a href="www.linkedin.com/in/laura-broder-01257662" className="left">
            made By Laura Broder
          </a>
        </header>
        <div>
          <h2 className="joke">{this.state.joke}</h2>
        </div>
        <CustomButton
          type="button"
          value="random"
          content="Get a Random Joke"
          onClick={this.handleClick}
        />
        <CategoriesBtns
          categoriesList={this.state.categoriesList}
          onClick={this.handleClick}
        />
        <SearchBar onSubmit={this.onSearchSubmit} />

        <footer>
          <a className="flex" href="https://api.chucknorris.io/">
            Jokes from{" "}
            <img
              src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
              style={{ height: "50px" }}
              alt="Chuck Norris logo"
            />{" "}
            "https://api.chucknorris.io"
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
