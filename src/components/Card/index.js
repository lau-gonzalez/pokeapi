import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import "./Card.styles.css";
import { getTrainers } from "../../utils";

const Card = ({ data }) => {
  const { name, id, sprites, types, height, weight, abilities } = data;
  const [show, setShow] = useState(false);

  const image = sprites.front_default;

  const getTypes = () => {
    const label = types.reduce((label, item) => {
      return `${label}${item.type.name}/`;
    }, "");

    return label.slice(0, -1);
  };

  const label = getTypes();
  const toggleShow = () => setShow(!show);

  const trainers = getTrainers(id);

  return (
    <>
      <div className="card">
        <div className="number">
          <h5>#{id}</h5>
        </div>

        <Image className="rounded-circle picture" src={image} alt={name} />
        <h4>{name}</h4>
        <div className="mb-1">
          <span>
            Height:
            {height}0 cm.
          </span>
          <span>Weight:{weight} kg.</span>
        </div>
        <div>
          <span>Type:{label}</span>
        </div>
        <Button variant="dark" onClick={toggleShow} className="mt-3">
          View Details
        </Button>
      </div>

      <Modal
        show={show}
        onHide={toggleShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Image className="rounded-circle picture" src={image} alt={name} />
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <div className="mb-1">
            <span>Height: {height}0 cm.</span>
            <span>Weight: {weight} kg.</span>
          </div>
          <div>
            <span>Type: {label}</span>
          </div>
          <div>
            <span>
              <u>Abilities:</u>
            </span>
            {abilities.map((item) => (
              <span key={`${name}${item.ability.name}`}>
                {" "}
                {item.ability.name}
              </span>
            ))}
          </div>
          <div>
            <span>
              <u>Trainers:</u>
            </span>
            {trainers.map((trainer) => (
              <span key={`${name}${trainer.name}`}>{trainer.name}</span>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Card;
