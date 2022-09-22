// React and Component imports
import React from 'react';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import BeastForm from './components/BeastForm';

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import data.json
import data from "./assets/data.json"

// import styles.scss file
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: data[0],
      searchedBeasts: data,
    }
  }
  setShowModalTrue = (key) => {
    this.setState({ showModal: true });
    const chosenBeast = data.filter((beast) => {
      return beast._id === key;
    });
    this.setState({ selectedBeast: chosenBeast[0] });
  }
  setShowModalFalse = () => {
    this.setState({ showModal: false });
  }
  handleChange = (e) => {
    e.preventDefault();
    let formSelection = e.target.value;
    const matches = formSelection === 'All' ? data : data.filter(beast => beast.horns === Number(formSelection));
    this.setState({searchedBeasts: matches});
  }

  render() {
    return(
      <>
        <h1 className="text-center">Gallery of Beasts</h1>
        <BeastForm handleChange={this.handleChange} />
        <Row>
          {this.state.searchedBeasts.map((beast) => {
            return (
              <Col key={beast._id}>
                <Main
                  src={beast.image_url}
                  alt={beast.keyword}
                  description={beast.description}
                  title={beast.title}
                  horns={beast.horns}
                  id={beast._id}
                  setShowModalTrue={this.setShowModalTrue}
                />
              </Col>
            )
          })}
        </Row>
        <SelectedBeast showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} selectedBeast={this.state.selectedBeast} />
      </>
    );
  }
}





export default App;
