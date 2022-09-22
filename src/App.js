// React and Component imports
import React from 'react';
import Container from 'react-bootstrap/Container';
import Main from './components/Main';

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
        <Container>Gallery of Beasts</Container>
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

class BeastForm extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Form onChange={this.props.handleChange}>
            <Form.Select className="mb-3">
              <option>Filter beasts by selecting # of horns</option>
              <option>All</option>
              <option value={1}>One horn</option>
              <option value={2}>Two horns</option>
              <option value={3}>Three horns</option>
              <option value={100}>LOTS of horns</option>
            </Form.Select>
          </Form>
        </Container>
      </>
    )
  }
}

export default App;
