import React from 'react';
import HornedBeast from './components/HornedBeast'

// card imports
import 'bootstrap/dist/css/bootstrap.min.css';

// import data.json
import data from "./assets/data.json"

class App extends React.Component {
  render() {
    return(
      <>
        {data.map((beast) => {
          return <HornedBeast src={beast.image_url} alt={beast.keyword} description={beast.description} title={beast.title} horns={beast.horns} key={beast._id} />
        })}
      </>
    );
  }
}

export default App;
