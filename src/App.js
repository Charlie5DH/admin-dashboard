import "./App.css";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUserPage from "./components/pages/newUserPage/NewUserPage";
import Analytics from "./components/pages/analytics/Analytics";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUserPage />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
//afteruser can be anything
export default App;
