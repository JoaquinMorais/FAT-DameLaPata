import * as React from 'react';
import Modal from 'react-modal';
import { styled } from 'styled-components';
import Button from '@mui/material/Button';

const modalStyle = {
    content: {
        maxWidth: '340px', // Ajusta el ancho máximo
        maxHeight: '170px', // Ajusta la altura máxima
        margin: 'auto',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        border: '4px solid #000', // Borde más grueso
    },
};

const SuccessDialog = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={modalStyle}
        >
            <h2>Éxito</h2>
            <p>Tu cuenta ha sido borrada con éxito.</p>
            <div>
                <Button
                    onClick={onClose}
                    variant="contained"
                >
                    Cerrar
                </Button>
            </div>
        </Modal>
    );
};

export default SuccessDialog;
