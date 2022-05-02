import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import parse from 'html-react-parser';

const ScanModal = ({ show, handleClose, scan }) => (
    < Modal
        show={show}
        onHide={handleClose}
        backdrop={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="scan-modal"
    >
        <Modal.Header>
            <Modal.Title>
                {scan.title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {parse(scan.body)}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal >
);

export { ScanModal };