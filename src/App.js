import logo from "./logo.svg";
import "./App.css";
import { RedocStandalone } from "redoc";
const swaggerJson = require("./swagger.json");

function App() {
  return (
    <RedocStandalone
      spec={swaggerJson}
      options={{
        nativeScrollbars: true,
        theme: { colors: { primary: { main: "#dd5522" } } },
      }}
    />
  );
}

export default App;
