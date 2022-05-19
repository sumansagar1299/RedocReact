import "./App.css";
import { RedocStandalone } from "redoc";
import { Helmet } from "react-helmet";
const swaggerJson = require("./swagger.json");

function App() {
  return (
    <>
      <Helmet>
        <title>Bitpack-API</title>
      </Helmet>
      <RedocStandalone
        spec={swaggerJson}
        options={{
          nativeScrollbars: true,
          theme: { colors: { primary: { main: "#dd5522" } } },
        }}
      />
    </>
  );
}

export default App;
