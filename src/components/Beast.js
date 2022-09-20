import React from 'react';

// card imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Beast extends React.Component {
    // When a component is stateful, it MUST have a constructor method
    constructor(props) {
        super(props); // Refers to the parent class constructor, in this case App.js
        this.state = { // Cannot use this.state until we super(props), type it every time!
            description: this.props.description,
            src: this.props.src,
        }
    }

    // Event Handler
    handleClick = () => {
        // This method is available to ALL React components, and is callable by extending React.Component
        if(this.state.description !== "It's a beast!") {
            this.setState({ description: this.state.description+'❤️'});
        } else {
            this.setState({ description: 'this componenet rerendered! ❤️' });
        }
    }

  render() {
    return(
      <>
        <Card style={{ width: '18rem' }} className="mx-auto my-5">
          <Card.Img variant="top" src={this.state.src} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="fst-italic">{this.state.description}</Card.Text>
            {/* add the click event listener: 
                in the {} in onClick is a reference to the event listener method */}
            <Button variant="primary" onClick={this.handleClick}>Go somewhere</Button>
          </Card.Body>
        </Card> 
      </>
    );
  }
}
export default Beast