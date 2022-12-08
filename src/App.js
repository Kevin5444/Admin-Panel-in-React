import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
