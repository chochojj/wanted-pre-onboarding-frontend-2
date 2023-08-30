import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
