import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { dataPortfolio, meta } from "../../content_option";
import Slider  from '../../components/Slider/slider';

/*

For some reason I gotta put the modal in the same component. It should be refactored into its own component eventaully. Just gotta figure out state..... 

*/

export const Portfolio = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log("handleClose() called");
    setShow(false);
  }

  const handleShow = () => {
    console.log("handleShow() called");
    setShow(true);
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <div
            className="d-flex align-items-center justify-content-center po_items_ho"
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal show={show} onHide={handleClose} className="my-modal">
              <Modal.Header closeButton>
                <Modal.Title>Gallery</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Slider slides={dataPortfolio}/>
              </Modal.Body>
            </Modal>
          </div>
        <div className="mb-5 po_items_ho">

          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          {dataPortfolio.map((data, i) => {
            return (
              <div key={i} className="po_item" onClick={handleShow}>
                <img src={data.img} />
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
