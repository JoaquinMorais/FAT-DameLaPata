import * as React from 'react';
import Modal from 'react-modal';
import { styled } from 'styled-components';
import Button from '@mui/material/Button';

const buttonStyle = {
    marginRight: '10px', // Separación entre botones
};

const modalStyle = {
    content: {
        maxWidth: '400px', // Ajusta el ancho máximo
        maxHeight: '200px', // Ajusta la altura máxima
        margin: 'auto',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        border: '4px solid #000', // Borde más grueso
    },
};

const ConfirmDialog = ({ isOpen, onClose, onConfirm }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={modalStyle}
        >
            <h2>Confirmación</h2>
            <p>¿Estás seguro de que deseas borrar tu cuenta?</p>
            <div style={{ marginTop: '20px' }}>
                <Button
                    onClick={onConfirm}
                    variant="outlined"
                    color="error"
                    style={buttonStyle}
                >
                    Sí, borrar cuenta
                </Button>
                <Button
                    onClick={onClose}
                    variant="contained"
                    color="success"
                >
                    Cancelar
                </Button>
            </div>
        </Modal>
    );
};

export default ConfirmDialog;
