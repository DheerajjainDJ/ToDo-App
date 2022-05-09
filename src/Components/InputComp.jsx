import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  Toolbar,
  Grid,
  Container,
  TextField,
  IconButton,
  Tooltip,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CloseIcon from "@mui/icons-material/Close";
import { addTodo, editTodo } from "../redux/ToDoActions";
import SnackbarComp from "./SnackbarComp";
import Todos from "./Todos";

const InputComp = ({ status, setStatus, filteredTodos }) => {
  const initialState = {
    text: "",
    completed: false,
    id: "",
  };
  const [inputData, setInputData] = useState(initialState);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const dispatch = useDispatch();

  const addButtonHandler = () => {
    if (inputData.id) {
      dispatch(editTodo(inputData));
      return setEditOpen(true);
    }
    const todo = { ...inputData, id: uuid() };
    console.log(todo);
    dispatch(addTodo(todo));
    setOpen(true);
  };

  const textCloseHandler = () => {
    setInputData(initialState);
  };

  return (
    <div>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={11} sm={9} md={8} lg={9}>
          <Toolbar>
            <FormControl fullWidth >
              <TextField
                variant="outlined"
                label="Enter Todo"
                value={inputData.text}
                InputProps={{
                  endAdornment: inputData.text && (
                    <InputAdornment position="end">
                      <Tooltip title="Clear Text" arrow>
                        <IconButton onClick={textCloseHandler}>
                          <CloseIcon sx={{ color: "black" }} />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) =>
                  setInputData({ ...inputData, text: e.target.value })
                }
              />
            </FormControl>

            <Tooltip title="Add ToDo" arrow>
              <span>
                <IconButton
                  onClick={addButtonHandler}
                  disabled={!inputData.text}
                >
                  <AddBoxIcon sx={{ fontSize: "4rem", color: "black" }} />
                </IconButton>
              </span>
            </Tooltip>
          </Toolbar>
          <Container
            maxWidth="xs"
            sx={{
              marginTop: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FormControl sx={{ width: "11rem" }}>
              <InputLabel sx={{ margin: "-10px", fontSize: "1.5rem" }}>
                Status
              </InputLabel>
              <Select
                value={status}
                sx={{ fontWeight: 700, fontSize: "1.1rem" }}
                variant="outlined"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem
                  value="All"
                  sx={{ fontWeight: 500, fontSize: "1.1rem" }}
                >
                  All
                </MenuItem>
                <MenuItem
                  value="Completed"
                  sx={{ fontWeight: 500, fontSize: "1.1rem" }}
                >
                  Completed
                </MenuItem>
                <MenuItem
                  value="Uncompleted"
                  sx={{ fontWeight: 500, fontSize: "1.1rem" }}
                >
                  Uncompleted
                </MenuItem>
              </Select>
            </FormControl>
          </Container>
        </Grid>
      </Grid>
      <Todos
        setInputData={setInputData}
        filteredTodos={filteredTodos}
        setDeleteOpen={setDeleteOpen}
      />
      <SnackbarComp
        open={open}
        setOpen={setOpen}
        deleteOpen={deleteOpen}
        setDeleteOpen={setDeleteOpen}
        editOpen={editOpen}
        setEditOpen={setEditOpen}
      />
    </div>
  );
};

export default InputComp;
