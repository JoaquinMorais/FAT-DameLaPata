import React, { useState } from 'react';
import ConfirmDialog from '../components/CloseAccount/ConfirmDialog';
import SuccessDialog from '../components/CloseAccount/SuccessDialog';

const CloseAccount = () => {
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [isAccountDeleted, setIsAccountDeleted] = useState(false);

    const openConfirmation = () => {
        setIsConfirmationOpen(true);
    };

    const closeConfirmation = () => {
        setIsConfirmationOpen(false);
    };

    const handleDeleteAccount = () => {
        // Agregar la lógica para borrar la cuenta aquí.
        // Puedes usar axios u otra librería para hacer la solicitud DELETE.
        // Cuando la cuenta se haya eliminado con éxito, cambia el estado isAccountDeleted a true.
        // Por ejemplo:
        // Realizar la eliminación de la cuenta...
        // Después de la eliminación, cambiar el estado isAccountDeleted a true.
        setIsAccountDeleted(true);
        closeConfirmation();
    };

    const closeSuccessDialog = () => {
        setIsAccountDeleted(false);
    };

    return (
        <>
            <button onClick={openConfirmation}>Delete Account</button>
            {isConfirmationOpen && !isAccountDeleted && (
                <ConfirmDialog
                    isOpen={isConfirmationOpen}
                    onClose={closeConfirmation}
                    onConfirm={handleDeleteAccount}
                />
            )}
            {isAccountDeleted && (
                <SuccessDialog
                    isOpen={isAccountDeleted}
                    onClose={closeSuccessDialog}
                />
            )}
        </>
    );
};

export default CloseAccount;
