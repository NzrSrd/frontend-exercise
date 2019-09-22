import React, { Component } from 'react';
import NavigationBar from "./NavigationBar";
import SearchField from "./SearchField";


class App extends Component {
  render() {
    return(
        <div>
          <NavigationBar/>
          <SearchField/>
        </div>
    )
  }
}

export default App;
