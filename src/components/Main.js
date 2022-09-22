import React from 'react';

// card imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Main extends React.Component {
    // When a component is stateful, it MUST have a constructor method
    constructor(props) {
        super(props); // Refers to the parent class constructor, in this case App.js
        this.state = { // Cannot use this.state until we super(props), type it every time!
            description: this.props.description,
            src: this.props.src,
            title: this.props.title,
            alt: this.props.alt,
            horns: this.props.horns, // I don't think I have to put all these props in state since they're not updated, but w/e
            hearts: '',
        }
    }

    // Event Handler
    handleClick = () => {
        // This method is available to ALL React components, and is callable by extending React.Component
        this.setState({ hearts: this.state.hearts+'❤️'});
    }

  render() {
    return(
      <>
        <Card style={{ width: '18rem' }} className="mx-auto my-5">
          <Card.Img variant="top" src={this.state.src} alt={this.state.alt} onClick={()=> this.props.setShowModalTrue(this.props.id)} />
          <Card.Body>
            <Card.Title>{this.state.title}</Card.Title>
            {/* I liked Julian Barker's like threshold idea, so I am using it now too, but all credit goes to him for the idea! */}
            <Card.Text className="fst-italic">{this.state.description} {(this.state.hearts.length > 10 ? '❤️x'+this.state.hearts.length/2+'!' : this.state.hearts)}</Card.Text>
            <Button variant="primary" onClick={this.handleClick}>Like the Beast!</Button>
          </Card.Body>
        </Card> 
      </>
    );
  }
}
export default Main