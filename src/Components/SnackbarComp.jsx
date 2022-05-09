import React from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarComp = ({
  open,
  setOpen,
  deleteOpen,
  setDeleteOpen,
  editOpen,
  setEditOpen,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" onClose={handleClose}>
          New Todo Added!
        </Alert>
      </Snackbar>
      <Snackbar
        open={deleteOpen}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleDeleteClose}
      >
        <Alert severity="success" variant="filled" onClose={handleDeleteClose}>
          ToDo Removed
        </Alert>
      </Snackbar>
      <Snackbar
        open={editOpen}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleEditClose}
      >
        <Alert severity="success" variant="filled" onClose={handleEditClose}>
          ToDo Edited
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackbarComp;
