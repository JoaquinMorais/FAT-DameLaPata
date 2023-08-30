import React from 'react';
import Modal from 'react-modal';

const ConfirmDialog = ({ isOpen, onClose, onConfirm }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{
                content: {
                    width: '300px',
                    margin: 'auto',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'center',
                },
            }}
        >
            <h2>Confirmation</h2>
            <p>Are you sure you want to delete your account?</p>
            <button onClick={onConfirm}>Yes, delete account</button>
            <button onClick={onClose}>Cancel</button>
        </Modal>
    );
};

export default ConfirmDialog;
