import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcomePage";
import SignUpPage from "./pages/signUpPage";
import LogInPage from "./pages/logInPage";
import WelcomeBtns from "./pages/welcomebtns";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />}>
        <Route path="/" element={<WelcomeBtns />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="log-in" element={<LogInPage />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
