import "./App.css";

import Auth from "./components/Auth";
import {AuthProvider}  from "./contexts/AuthContext"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <div className="App ">
      <Router>
        <AuthProvider>

        <Routes>
          <Route path="/login" element={<Auth route="login" />} />
          <Route path="/signup" element={<Auth route="signup" />} />
        </Routes>
      </AuthProvider>
      </Router>

      {/* <Auth /> */}
    </div>
  );
}

export default App;
