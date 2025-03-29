
import { Container, Typography } from "@mui/material";

import QueryResults from "./Componets/QueryResults";
import QueryHistory from "./Componets/QueryHistory";
import QueryInput from "./Componets/QueryInput";

const App = () => {
  return (
    <div className=" grid grid-cols-4">
       <Container className=" flex flex-col col-span-4  items-center space-y-6 py-10 md:col-span-3">
      <Typography className="text-center" variant="h4" fontWeight="bold">
        Gen AI Analytics Dashboard
      </Typography>
      <div>
        <div>
          
        </div>

      </div>
      <QueryInput />
      <QueryResults />
      
    </Container>
    <Container className="col-span-4 items-center space-y-6 py-10   md:col-span-1  ">
    <QueryHistory />

    </Container>
    
    </div>
   
  );
};

export default App;
