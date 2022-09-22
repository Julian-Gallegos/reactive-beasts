import React from 'react';
import Main from './components/Main';

// card imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'

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
  render() {
    return(
      <>
        {data.map((beast) => {
          return <Main 
                    src={beast.image_url} 
                    alt={beast.keyword} 
                    description={beast.description} 
                    title={beast.title} 
                    horns={beast.horns} 
                    key={beast._id}
                    id={beast._id}
                    setShowModalTrue={this.setShowModalTrue}
                  />
        })}
        <SelectedBeast showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} selectedBeast={this.state.selectedBeast} />
      </>
    );
  }
}

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.setShowModalFalse}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.keyword}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>
              <Image src={this.props.selectedBeast.image_url} fluid={true} className="w-100"></Image>
              <div>{this.props.selectedBeast.description}</div>
            </span>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default App;
