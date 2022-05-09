import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import InputComp from "./Components/InputComp";

function App() {
  const [status, setStatus] = useState("All");
  const [remainingTask, setRemainingTask] = useState();
  const [filteredTodos, setFilteredTodos] = useState([]);
  const state = useSelector((state) => state);

  useEffect(() => {
    let allremainingTasks = state.filter((todo) => todo.completed === false);
    setRemainingTask(allremainingTasks.length);

    switch (status) {
      case "Completed":
        setFilteredTodos(state.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setFilteredTodos(state.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(state);
        break;
    }
  }, [state, status]);
  return (
    <Container>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 600,
          marginTop: "30px",
          fontFamily: "Josefin Sans,sans-serif",
        }}
      >
        ToDo App
      </Typography>
      <Typography align="center" variant="h5" gutterBottom>
        Total Task Remaining = {remainingTask}
      </Typography>
      <InputComp
        status={status}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
    </Container>
  );
}

export default App;
