import { useDispatch } from "react-redux";
import { removeTodo, checkTodo } from "../redux/ToDoActions";
import {
  Grid,
  Typography,
  List,
  Slide,
  Stack,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Tooltip,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    overflow: "auto",
    height: "220px",
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
  },
  listitem: {
    opacity: 0.4,
    textDecoration: "line-through",
  },
}));

const Todos = ({ setInputData, filteredTodos, setDeleteOpen }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const editHandler = (todo) => {
    setInputData(todo);
  };

  const deleteHandler = (id) => {
    dispatch(removeTodo(id));
    setDeleteOpen(true);
  };
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      marginTop="50px"
    >
      <Grid item xs={11} sm={9} md={7} lg={7}>
        {filteredTodos && (
          <List className={classes.list}>
            {filteredTodos &&
              filteredTodos.map((todo) => (
                <Box key={todo.id} sx={{ border: "1px solid black" }}>
                  <Slide direction="down" in mountOnEnter unmountOnExit>
                    <ListItem button>
                      <ListItemText
                        className={
                          todo.completed === true ? classes.listitem : ""
                        }
                        primary={
                          <Typography variant="h6">{todo.text}</Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Stack
                          direction="row"
                          spacing={0}
                          divider={<Divider orientation="vertical" flexItem />}
                        >
                          <Tooltip title="Complete" arrow>
                            <IconButton
                              onClick={() => dispatch(checkTodo(todo.id))}
                            >
                              <CheckCircleRoundedIcon sx={{ color: "green" }} />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Edit" arrow>
                            <IconButton onClick={() => editHandler(todo)}>
                              <EditIcon sx={{ color: "black" }} />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete" arrow>
                            <IconButton onClick={() => deleteHandler(todo.id)}>
                              <DeleteIcon sx={{ color: "#b22222" }} />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </Slide>
                  <Divider />
                </Box>
              ))}
          </List>
        )}
      </Grid>
    </Grid>
  );
};

export default Todos;
