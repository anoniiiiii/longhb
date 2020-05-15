import React from "react";
import "./App.less";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CVPage from "../pages/cv";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cv">
            <CVPage></CVPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
