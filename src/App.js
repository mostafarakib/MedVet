import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactDetails from "./components/Header/ContactDetails";
import NavigationBar from "./components/Header/NavigationBar";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import AllServices from "./components/Services/AllServices";
import About from "./components/About/About";
import Login from "./components/UserMangement/Login";
import Register from "./components/UserMangement/Register";
import SelectedService from "./components/Services/SelectedService";
import AllDoctors from "./components/Doctors/AllDoctors";
import SelectedBlog from "./components/Blogs/SelectedBlog";
import AllBlogs from "./components/Blogs/AllBlogs";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <ContactDetails></ContactDetails>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/register/*" element={<Register />} />
            <Route path="/about/*" element={<About />} />
            <Route
              path="/services/*"
              element={
                <PrivateRoute redirectTo="/login">
                  <AllServices />
                </PrivateRoute>
              }
            />
            <Route
              path="/services/:serviceId"
              element={
                <PrivateRoute redirectTo="/login">
                  <SelectedService />
                </PrivateRoute>
              }
            />
            <Route path="/doctors/*" element={<AllDoctors />} />
            <Route
              path="/blogs/*"
              element={
                <PrivateRoute redirectTo="/login">
                  <AllBlogs />
                </PrivateRoute>
              }
            />
            <Route
              path="/blogs/:blogId"
              element={
                <PrivateRoute redirectTo="/login">
                  <SelectedBlog />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
