import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from "react";
import apiService from '../services/apiService';
import { toast } from 'react-toastify';

const Form = ({ open, handleClose, formData }) => {
    const [validationErrors, setValidationErrors] = useState({});
    const generateInitialState = () => ({
        name: '',
        email: '',
        message: '',
    });
    const [formValues, setFormValues] = useState(generateInitialState());
    useEffect(() => {
        setValidationErrors({});
        setFormValues({
            name: '',
            email: '',
            message: '',
            ...formData,
        });
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };
    
    const handleFormSave = async () => {
        try {
            if (formData && formData.id) {
                // Update
                const response = await apiService.put(`/form-data/${formData.id}`, formValues);
                if (response.message) {
                    toast.success(response.message);
                }
            } else {
                // Create
                const response = await apiService.post('/form-data', formValues);
                if (response.message) {
                    toast.success(response.message);
                }
            }
            // After saving, reset form values
            setFormValues(generateInitialState());
            handleClose();
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Handle validation errors from the server
                setValidationErrors(error.response.data.errors);
            }
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Error saving data.');
            }
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{formData ? 'Edit Form' : 'Add Form'}</DialogTitle>
                <DialogContent>
                    <TextField
                        name="name"
                        label="Name"
                        value={formValues.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        error={!!validationErrors.name}
                        helperText={validationErrors.name || ''}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        value={formValues.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        error={!!validationErrors.email}
                        helperText={validationErrors.email || ''}
                    />
                    <TextField
                        name="message"
                        label="Message"
                        value={formValues.message}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        multiline
                        rows={5}
                        required
                        error={!!validationErrors.message}
                        helperText={validationErrors.message || ''}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleFormSave}>Save</Button>
                </DialogActions>
            </Dialog>
    );
};

export default Form;
