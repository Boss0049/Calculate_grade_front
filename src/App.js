import React from "react";
import PrivateRoutes from "./containers/private/PrivateRoutes";
import { useState } from "react";
import LocalStorage from "./services/LocalStorage";
import "./App.css";

function App() {
  const [role, setRole] = useState(LocalStorage.getRole());
  return (
    <div style={{ height: "100vh" }}>
      <PrivateRoutes role={role} setRole={setRole} />
    </div>
  );
}

export default App;
