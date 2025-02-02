import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./utilities/BrowserRoutes";

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
