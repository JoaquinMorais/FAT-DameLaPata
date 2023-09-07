import * as React from 'react';
import Modal from 'react-modal';
import { styled } from 'styled-components';
import Button from '@mui/material/Button';

const ConfirmDialog = ({ isOpen, onClose, onConfirm }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{
                content: {
                    maxWidth: '400px', // Ajusta el ancho máximo
                    maxHeight: '200px', // Ajusta la altura máxima
                    margin: 'auto',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'center',
                },
            }}
        >
            <h2>Confirmación</h2>
            <p>¿Estás seguro de que deseas borrar tu cuenta?</p>
            <Button onClick={onConfirm} variant="contained" color="success">Sí, borrar cuenta</Button>
            <Button onClick={onClose} variant="outlined" color="error">Cancelar</Button>
        </Modal>
    );
};

export default ConfirmDialog;
