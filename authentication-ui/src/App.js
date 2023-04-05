import { useEffect, useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { checkLogin } from "./helper";


function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    checkLogin().then((res) => {
      setAuth(res);
    }).catch(err => console.log(err));
  }, []);

  // checkLogin().then(res => setAuth(res)).catch(err => console.log(err));

  const goTo = () => window.location.href = 'http://localhost:8083/tutorial/';

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route
          path="/"
          element={
            auth ? goTo() : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
