import React, { useState } from 'react';
import ConfirmDialog from '../components/CloseAccount/ConfirmDialog'

const CloseAccount = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const handleDeleteAccount = () => {
        // Agregar la lógica para borrar la cuenta aquí
        // Puedes usar axios u otra librería para hacer la solicitud DELETE
        closeDialog();
    };

    return (
        <>
            <button onClick={openDialog}>Delete Account</button>
            <ConfirmDialog
                isOpen={isDialogOpen}
                onClose={closeDialog}
                onConfirm={handleDeleteAccount}
            />
        </>
    );
};

export default CloseAccount;
