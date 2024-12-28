import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const AddMovie = ({ onAddMovie,show, handleClose }) => {
  const [title, setTitle] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && urlImg && rating) {
      onAddMovie({ title, urlImg, description, rating });
      setTitle("");
      setUrlImg("");
      setDescription("");
      setRating("");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add new movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Image </Form.Label>
              <Form.Control
                     type="text"
                     placeholder="Image URL"
                     value={urlImg}
                     onChange={(e) => setUrlImg(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Description </Form.Label>
              <Form.Control
                         type="text"
                         placeholder="Description"
                         value={description}
                         onChange={(e) => setDescription(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Rating </Form.Label>
              <Form.Control
         type="number"
         placeholder="Rating"
         value={rating}
         onChange={(e) => setRating(e.target.value)}
                autoFocus
              />
            </Form.Group>
 
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} >
       Add Movie
          </Button>
        </Modal.Footer>
      </Modal>

  );

};

export default AddMovie;



