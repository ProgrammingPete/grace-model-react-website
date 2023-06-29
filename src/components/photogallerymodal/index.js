import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';


/**
 * Not being used yet... 
 * @param {*} params 
 * @returns 
 */
export const  Photogallerymodal = (params) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Close Modal</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};