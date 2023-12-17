import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import apiService from "../services/apiService";
import Form from "./Form";
import { Container, TableHead } from "@mui/material";
import ConfirmationDialog from "./ConfirmationDialog";
import { useLoader } from "../common/LoaderContext";
import { toast } from "react-toastify";

const FormList = () => {
  const [formList, setFormList] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedFormData, setSelectedFormData] = useState(null);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const { showLoader, hideLoader } = useLoader();

  const handleFormOpen = (formData) => {
    setSelectedFormData(formData);
    setIsFormOpen(true);
  };
  const handleFormClose = () => {
    setSelectedFormData(null);
    setIsFormOpen(false);
    fetchData();
  };

  const fetchData = async () => {
    try {
      showLoader();
      const data = await apiService.get("/form-data");
      setFormList(data);
      hideLoader();
    } catch (error) {
      hideLoader();
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Error fetching data.');
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleDelete = async (id) => {
    // Open the confirmation dialog
    setConfirmationOpen(true);
    setItemToDelete(id);
  };
  const handleConfirmDelete = async () => {
    try {
      showLoader();
      if (itemToDelete !== null) {
        // Delete
        const response = await apiService.delete(`/form-data/${itemToDelete}`);
        if (response.message) {
          toast.success(response.message);
        }
        // Fetch updated data
        fetchData();
      }
      hideLoader();
      setConfirmationOpen(false);
    } catch (error) {
      hideLoader();
      setConfirmationOpen(false);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Error deleting data.');
      }
    }
  };
  const handleCancelDelete = () => {
    setItemToDelete(null);
    // Close the confirmation dialog without performing the delete operation
    setConfirmationOpen(false);
  };

  return (
    <div>
      <Container maxWidth="lg" sx={{my:3}}>
        <Button variant="contained" sx={{mb:3}} onClick={() => handleFormOpen(null)}>
          Add Form
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
          </TableHead>
            <TableBody>
              {formList &&
                formList.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.message}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                      <Button onClick={() => handleFormOpen(item)}>Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Form
        open={isFormOpen}
        handleClose={handleFormClose}
        formData={selectedFormData}
      />
      <ConfirmationDialog
        open={isConfirmationOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default FormList;
