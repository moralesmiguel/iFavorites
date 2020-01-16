import React, { Component } from 'react'
import "./App.css";
import SearchForm from "./Components/SearchForm";
import { BrowserRouter, Route} from "react-router-dom";
import Favourites from './Components/Favourites';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
      <div className="App">
        <h1>iTunes Search</h1>
        <Route
          path="/"
          exact={true}
          render={props => (
            <React.Fragment>
              <SearchForm />
            </React.Fragment>
          )}
        />
        <Route path="/fav" component={Favourites}/>
      </div>
    </BrowserRouter>
      </div>
    )
  }
}

export default App
