import { useSelector } from "react-redux";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const QueryHistory = () => {
  const history = useSelector((state) => state.queries.history);

  

  return (
    <Paper elevation={3} className="p-4 w-full max-w-md">
      <Typography variant="h6" gutterBottom fontWeight={500} fontSize={30}>Query History</Typography>
      <List>
        {history.length === 0 ? (
          <Typography color="textSecondary">No queries yet.</Typography>
        ) : (
          history.map((q, index) => (
            <ListItem key={index}>
              <ListItemText primary={q} />
            </ListItem>
          ))
        )}
      </List>
    </Paper>
  );
};

export default QueryHistory;
