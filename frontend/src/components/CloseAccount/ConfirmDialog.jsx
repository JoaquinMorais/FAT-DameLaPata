import React from 'react';
import Modal from 'react-modal';
import { styled } from 'styled-components';


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
            <h2>Confirmación</h2>
            <p>¿Estás seguro de que deseas borrar tu cuenta?</p>
            <button onClick={onConfirm}>Sí, borrar cuenta</button>
            <button onClick={onClose}>Cancelar</button>
        </Modal>
    );
};

export default ConfirmDialog;
