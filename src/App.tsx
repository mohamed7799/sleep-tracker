import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />}></Route>
    </Routes>
  );
};

export default App;
