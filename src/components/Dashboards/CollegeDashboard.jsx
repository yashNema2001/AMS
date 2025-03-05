import { Bell, Calendar, Eye, Menu, PlusCircle, Users } from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";

const data = [
  { name: "Mon", Present: 80, Absent: 20 },
  { name: "Tue", Present: 85, Absent: 15 },
  { name: "Wed", Present: 75, Absent: 25 },
  { name: "Thu", Present: 90, Absent: 10 },
  { name: "Fri", Present: 70, Absent: 30 },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`w-64 bg-white p-4 shadow-lg ${
          sidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <h2 className="text-xl font-bold">College Admin</h2>
        <ul className="mt-4 space-y-4">
          <li className="flex items-center space-x-2 text-gray-700">
            <Users /> <span>Students</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <Calendar /> <span>Attendance</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <Bell /> <span>Notifications</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
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

        {/* Action Buttons */}
        <div className="p-4 flex space-x-4">
          <Button variant="default" className="flex items-center space-x-2">
            <PlusCircle /> <span>Add Student</span>
          </Button>
          <Button variant="default" className="flex items-center space-x-2">
            <PlusCircle /> <span>Add Faculty</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Eye /> <span>View Students</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Eye /> <span>View Faculty</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Total Students</h3>
              <p className="text-2xl">1200</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Present Today</h3>
              <p className="text-2xl">950</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Absent Today</h3>
              <p className="text-2xl">250</p>
            </CardContent>
          </Card>
        </div>

        {/* Attendance Chart */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">Weekly Attendance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Present" fill="#4CAF50" />
              <Bar dataKey="Absent" fill="#F44336" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
