import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

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

export default BeastForm;