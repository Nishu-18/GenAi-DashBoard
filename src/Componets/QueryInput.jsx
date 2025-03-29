import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery, setQueryResult, setQueryError } from "../features/querySlice";
import { TextField, Button, Autocomplete, CircularProgress } from "@mui/material";

const predefinedQueries = [
  "Show last month's sales",
  "How many customers bought product X?",
  
  "Department with most expense",
];

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleQuerySubmit = () => {
    if (!query.trim()) return;
    
    dispatch(submitQuery());
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
  
      // Mock responses for different queries
      let response;
      if (query.toLowerCase().includes("sales")) {
        response = { revenue: 50000, customers: 1200 };
      } else if (query.toLowerCase().includes("product")) {
        response = { topProduct: "Product A", unitsSold: 3000 };
      } else if (query.toLowerCase().includes("expense")) {
        response = { totalExpenses: 20000, department: "Marketing" };
      } else {
        dispatch(setQueryError("Invalid query! Try again."));
        return;
      }
  
      dispatch(setQueryResult({ query, result: response }));
    }, 1500);

    
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
      <Autocomplete
        freeSolo
        options={predefinedQueries}
        onInputChange={(event, newValue) => setQuery(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Ask a business question" variant="outlined" fullWidth />
        )}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleQuerySubmit}
        sx={{ marginTop: 2 }}
        disabled={loading}
      >
        Submit Query
     
      </Button>
    </div>
  );
};

export default QueryInput;
