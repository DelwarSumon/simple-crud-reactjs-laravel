import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from "react";
import apiService from '../services/apiService';

const Form = ({ open, handleClose, formData }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: '',
        ...formData, // Spread existing formData if not null
    });
    useEffect(() => {
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
            console.log('formValues:', formValues);
            if (formData.id) {
                // Update
                // setFormValues({ id: formData.id, ...formValues })
                const response = await apiService.put(`/form-data/${formData.id}`, formValues);
                console.log('Data saved successfully:', response);
            } else {
                // Create
                const response = await apiService.post('/form-data', formValues);
                console.log('Data saved successfully:', response);
            }
            // console.log('Data saved successfully:', response);
            handleClose();
        } catch (error) {
            console.error('Error creating data:', error);
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
                />
                <TextField
                name="email"
                label="Email"
                value={formValues.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                />
                <TextField
                name="message"
                label="Message"
                value={formValues.message}
                onChange={handleChange}
                fullWidth
                margin="normal"
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
