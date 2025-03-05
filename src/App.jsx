import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home/HomePage";
import CollegeLogin from "./components/forms/CollegeLogin";
import CollegeRegistration from "./components/forms/CollegeRegistration";
import FacultyLogin from "./components/forms/FacultyLogin";
import StudentLogin from "./components/forms/StudentLogin";
import CollegeDashboard from "./components/Dashboards/CollegeDashboard";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<CollegeRegistration />} />
        <Route path="/collegeLogin" element={<CollegeLogin />} />
        <Route path="/FacultyLogin" element={<FacultyLogin />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/register" element={<CollegeDashboard />} />
      </Routes>
    </Router>
  );
}
