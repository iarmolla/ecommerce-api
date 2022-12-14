import React from "react";
import Modal from "react-bootstrap/Modal";
import '../styles/modaImage.css'

function ModalImage({ ...props }) {
    return (
        <div>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="modal-body-image">
                    <i className="bi bi-x-lg task-icon-close" onClick={props.onHide}></i>
                    <div className="modal-images">
                        <img src={props.image} alt="modal" className={`${props.names} modal-image`} />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ModalImage;