import { useState } from "react";
import { Menu, Calendar, Bell, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FacultyDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const today = new Date();

  const studentsByDepartment = {
    "Computer Science": [
      { id: 1, name: "John Doe", status: null },
      { id: 2, name: "Jane Smith", status: null },
    ],
    "Mechanical Engineering": [
      { id: 3, name: "Michael Brown", status: null },
      { id: 4, name: "Emily White", status: null },
    ],
  };

  const markAttendance = (id, status) => {
    const updatedStudents =
      studentsByDepartment[selectedDepartment]?.map((student) =>
        student.id === id ? { ...student, status } : student
      ) || [];
    studentsByDepartment[selectedDepartment] = updatedStudents;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`w-64 bg-white p-4 shadow-lg ${
          sidebarOpen ? "block" : "hidden"
        } md:block fixed h-full`}
      >
        <h2 className="text-xl font-bold">Faculty Dashboard</h2>
        <ul className="mt-4 space-y-4">
          <li className="flex items-center space-x-2 text-gray-700">
            <Calendar /> <span>Attendance</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <Users /> <span>Student Reports</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Top Navigation */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md">
          <Button
            variant="outline"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu />
          </Button>
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-600" />
          </div>
        </div>

        {/* Date Selection */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">Today's Date</h3>
          <DatePicker
            selected={today}
            className="border p-2 rounded-md"
            disabled
          />
        </div>

        {/* Department Selection */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">Select Department</h3>
          <Select onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-full md:w-1/3">
              <SelectValue placeholder="Choose Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Mechanical Engineering">
                Mechanical Engineering
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Student List with Attendance Options */}
        {selectedDepartment && (
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              {selectedDepartment} Students
            </h3>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">Student Name</th>
                    <th className="p-2 text-center">Mark Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsByDepartment[selectedDepartment]?.map((student) => (
                    <tr key={student.id} className="border-b">
                      <td className="p-2">{student.name}</td>
                      <td className="p-2 text-center">
                        <Button
                          className="mr-2"
                          onClick={() => markAttendance(student.id, "Present")}
                        >
                          Present
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => markAttendance(student.id, "Absent")}
                        >
                          Absent
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
