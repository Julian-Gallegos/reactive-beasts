import React from 'react';

// card imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    // When a component is stateful, it MUST have a constructor method
    constructor(props) {
        super(props); // Refers to the parent class constructor, in this case App.js
        this.state = { // Cannot use this.state until we super(props), type it every time!
            description: this.props.description,
            src: this.props.src,
            title: this.props.title,
            alt: this.props.alt,
            horns: this.props.horns // I don't think I have to put all these props in state since they're not updated, but w/e
        }
    }

    // Event Handler
    handleClick = () => {
        // This method is available to ALL React components, and is callable by extending React.Component
        if(this.state.description !== "It's a beast!") {
            this.setState({ description: this.state.description+'❤️'});
        } else {
            this.setState({ description: 'Thanks for liking me! ❤️' });
        }
    }

  render() {
    return(
      <>
        <Card style={{ width: '18rem' }} className="mx-auto my-5">
          <Card.Img variant="top" src={this.state.src} alt={this.state.alt} />
          <Card.Body>
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Text className="fst-italic">{this.state.description} This type of beast has {this.state.horns} horn(s)</Card.Text>
            <Button variant="primary" onClick={this.handleClick}>Like the Beast!</Button>
          </Card.Body>
        </Card> 
      </>
    );
  }
}
export default HornedBeast