import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

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

  export default SelectedBeast;