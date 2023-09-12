import React, { useState } from 'react';
import axios from 'axios';
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

    const handleDeleteAccount = async () => {
        try {
            // Hacer una solicitud POST al servidor Flask para cerrar la cuenta
            await axios.post(`/closeaccount/1`); 
            setIsAccountDeleted(true);
            closeConfirmation();
        } catch (error) {
            console.error(error);
        }
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
