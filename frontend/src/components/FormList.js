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

const FormList = () => {
  const [formList, setFormList] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedFormData, setSelectedFormData] = useState(null);
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
      const data = await apiService.get("/form-data");
      setFormList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Delete
      const deleteResponse = await apiService.delete(`/form-data/${id}`);
      console.log("Data deleted successfully:", deleteResponse.data);

      // Fetch updated data
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={() => handleFormOpen(null)}>
        Add Form
      </Button>
      <TableContainer component={Paper}>
        <Table>
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
      <Form
        open={isFormOpen}
        handleClose={handleFormClose}
        formData={selectedFormData}
      />
    </div>
  );
};

export default FormList;
