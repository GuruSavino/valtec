import { React, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import AOS from "aos";
import { Modal, Button } from "react-bootstrap";
// import projectImage from "../../../assets/ENI OCTP ORF1.jpg";
// import projectImage2 from "../../../assets/ENI OCTP ORF2.jpeg";
// import projectImage3 from "../../../assets/ENI OCTP ORF3.jpeg";
import { Carousel } from "react-bootstrap";

function ProjectCard({
  title,
  description,
  imgSrc,
  modalProjectName,
  modalContent,
  carouselImages = [],
}) {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      offset: 50,
    });
  });
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="shadow-sm h-100" data-aos="fade-up" onClick={handleShow}>
        <Card.Img variant="top" src={imgSrc} data-aos="fade-up" />
        <Card.Body>
          <Card.Title
            className="defheadFont"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {title}
          </Card.Title>
          <Card.Text
            className="defbodyFont"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {description}
          </Card.Text>
        </Card.Body>
      </Card>

      {/* modal */}
      <>
        <Modal
          show={showModal}
          onHide={handleClose}
          dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex w-100">
              <Carousel>
                {carouselImages.length > 0 ? (
                  carouselImages.map((image, idx) => (
                    <Carousel.Item key={idx} interval={1000}>
                      <img
                        src={image}
                        alt={`Carousel Image ${idx + 1}`}
                        className="d-block w-100"
                      />
                    </Carousel.Item>
                  ))
                ) : (
                  <p>No images available for this project.</p>
                )}
                {/* <Carousel.Item>
              <img src={projectImage} alt="projectImage1" className=""/>
              </Carousel.Item> */}
                {/* <Carousel.Item>
              <img src={projectImage2} alt="projectImage2"/>
              </Carousel.Item>
              <Carousel.Item>
              <img src={projectImage3} alt="projectImage3"/>
              </Carousel.Item> */}
              </Carousel>
            </div>
            <div>
              <h2>{modalProjectName}</h2>
              <p>{modalContent}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}

export default ProjectCard;
