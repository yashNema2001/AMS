import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Menu, Calendar, Bell, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const data = [
  { name: "Mon", Attended: 4, Missed: 1 },
  { name: "Tue", Attended: 5, Missed: 0 },
  { name: "Wed", Attended: 3, Missed: 2 },
  { name: "Thu", Attended: 4, Missed: 1 },
  { name: "Fri", Attended: 5, Missed: 0 },
];

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`w-64 bg-white p-4 shadow-lg ${
          sidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <h2 className="text-xl font-bold">Student Dashboard</h2>
        <ul className="mt-4 space-y-4">
          <li className="flex items-center space-x-2 text-gray-700">
            <Calendar /> <span>Attendance</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700">
            <BookOpen /> <span>Courses</span>
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

        {/* Stats */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Total Classes</h3>
              <p className="text-2xl">30</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Classes Attended</h3>
              <p className="text-2xl">28</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">Attendance %</h3>
              <p className="text-2xl">93%</p>
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
              <Bar dataKey="Attended" fill="#4CAF50" />
              <Bar dataKey="Missed" fill="#F44336" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
