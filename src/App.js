import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import ContactUs from "./components/ContactUs";
import Table from "./components/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "20px",
    backgroundColor: "#f9f9f9",
  };

  const thStyle = {
    backgroundColor: "rgb(0 156 255)",
    color: "white",
    padding: "8px",
    textAlign: "center",
  };

  const tdStyle = {
    padding: "8px",
    textAlign: "center",
  };

  const tdStyleBlue = {
    backgroundColor: "rgb(0 156 255)",
    color: "white",
    padding: "8px",
    textAlign: "center",
  };

  const tdStyleRed = {
    backgroundColor: "red",
    color: "white",
    padding: "8px",
    textAlign: "center",
  };

  const tdStyleGreen = {
    backgroundColor: "green",
    color: "white",
    padding: "8px",
    textAlign: "center",
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          key={new Date()}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/contact-us">
              <ContactUs mode={mode} />
            </Route>
            <Route exact path="/table">
              <Table
                tableStyle={tableStyle}
                tdStyle={tdStyle}
                thStyle={thStyle}
                tdStyleBlue={tdStyleBlue}
                tdStyleRed={tdStyleRed}
                tdStyleGreen={tdStyleGreen}
              />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
