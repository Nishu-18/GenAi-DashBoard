import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Alert, CircularProgress } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const QueryResults = () => {
  const { result, loading, error } = useSelector((state) => state.queries);

  if (loading) return <CircularProgress color="primary" />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!result) return 

  let chartData = [];
  let xLabel = "Category"; // Default label
  let yLabel = "Value";

  if (result.result.revenue !== undefined) {
    chartData = [
      { name: "Revenue", value: result.result.revenue },
      { name: "Customers", value: result.result.customers },
    ];
    xLabel = "Metric";
    yLabel = "Amount ($)";
  } else if (result.result.topProduct !== undefined) {
    chartData = [
      { name: result.result.topProduct, value: result.result.unitsSold },
    ];
    xLabel = "Product";
    yLabel = "Units Sold";
  } else if (result.result.totalExpenses !== undefined) {
    chartData = [
      { name: result.result.department, value: result.result.totalExpenses },
    ];
    xLabel = "Department";
    yLabel = "Expenses ($)";
  }

  return (
    <Card className="p-4 w-full max-w-lg shadow-lg">
      <CardContent>
        {/* <Typography variant="h6">Query Results</Typography> */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
          <XAxis dataKey="name" label={{ value: xLabel, position: "insideBottom", offset: -5 }} />
          <YAxis label={{ value: yLabel, angle: -90, position: "insideLeft" }} domain={[0, "dataMax + 50"]} />
            <Tooltip />
            <Bar dataKey="value" fill="#1976D2" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default QueryResults;
