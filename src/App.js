import "./App.css";
import { RedocStandalone } from "redoc";
const swaggerJson = require("./swagger.json");

function App() {
  return (
    <RedocStandalone
      spec={swaggerJson}
      // specUrl="https://petstore.swagger.io/v2/swagger.json"
      options={{
        nativeScrollbars: true,
        theme: { colors: { primary: { main: "#dd5522" } } },
      }}
    />
  );
}

export default App;
