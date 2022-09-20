import React from 'react';
import Beast from './components/Beast'

// card imports
import 'bootstrap/dist/css/bootstrap.min.css';

// import data.json
import data from "./assets/data.json"

class App extends React.Component {
  render() {
    return(
      <>
        {data.map((beast) => {
          return <Beast src={beast.image_url} description={beast.description} key={beast._id} />
        })}
      </>
    );
  }
}

export default App;
