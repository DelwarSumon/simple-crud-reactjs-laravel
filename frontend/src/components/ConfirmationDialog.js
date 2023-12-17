// ConfirmationDialog.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const ConfirmationDialog = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Are you sure you want to delete?</DialogTitle>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                Cancel
                </Button>
                <Button onClick={onConfirm} color="primary">
                Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;
