import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataContextProvider } from "./hooks/useDataContext";

function App() {
  return (
    <DataContextProvider>
      <Home />
    </DataContextProvider>
  );
}

export default App;
