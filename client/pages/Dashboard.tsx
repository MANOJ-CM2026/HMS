import { Users, Activity, Beaker, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { date: "Mon", patients: 45, tests: 12, revenue: 4200 },
  { date: "Tue", patients: 52, tests: 19, revenue: 5100 },
  { date: "Wed", patients: 48, tests: 15, revenue: 4800 },
  { date: "Thu", patients: 61, tests: 22, revenue: 6200 },
  { date: "Fri", patients: 55, tests: 18, revenue: 5800 },
  { date: "Sat", patients: 67, tests: 25, revenue: 6800 },
  { date: "Sun", patients: 72, tests: 28, revenue: 7200 },
];

const recentActivity = [
  {
    id: 1,
    action: "New Patient Admitted",
    patient: "John Doe",
    time: "2 hours ago",
    type: "admission",
  },
  {
    id: 2,
    action: "Lab Test Completed",
    patient: "Jane Smith",
    time: "4 hours ago",
    type: "lab",
  },
  {
    id: 3,
    action: "Prescription Issued",
    patient: "Robert Johnson",
    time: "6 hours ago",
    type: "prescription",
  },
  {
    id: 4,
    action: "New Patient Admitted",
    patient: "Emily Davis",
    time: "8 hours ago",
    type: "admission",
  },
  {
    id: 5,
    action: "Lab Test Completed",
    patient: "Michael Brown",
    time: "10 hours ago",
    type: "lab",
  },
];

const StatCard = ({
  icon: Icon,
  label,
  value,
  change,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
}) => (
  <Card className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-0">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-muted-foreground font-medium mb-2">
          {label}
        </p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <p className="text-xs text-success mt-2">{change}</p>
      </div>
      <div className="p-3 bg-primary/10 rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
    </div>
  </Card>
);

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your hospital operations.
        </p>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          label="Total Patients"
          value="1,234"
          change="↑ 12% from last month"
        />
        <StatCard
          icon={Activity}
          label="Today's Patients"
          value="48"
          change="↑ 8% today"
        />
        <StatCard
          icon={Beaker}
          label="Lab Tests Today"
          value="156"
          change="↑ 15% today"
        />
        <StatCard
          icon={TrendingUp}
          label="Revenue"
          value="₹45.2K"
          change="↑ 23% this week"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card className="p-6 bg-white rounded-xl shadow-sm border-0">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-foreground">
              Weekly Activity
            </h2>
            <p className="text-sm text-muted-foreground">
              Patient admissions trend this week
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="patients"
                stroke="#0088ff"
                strokeWidth={2}
                dot={{ fill: "#0088ff" }}
                name="Patients"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Bar Chart */}
        <Card className="p-6 bg-white rounded-xl shadow-sm border-0">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-foreground">
              Lab Tests vs Revenue
            </h2>
            <p className="text-sm text-muted-foreground">
              Weekly comparison metrics
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar
                dataKey="tests"
                fill="#00d084"
                name="Lab Tests"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="revenue"
                fill="#00b8d4"
                name="Revenue"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activity Table */}
      <Card className="p-6 bg-white rounded-xl shadow-sm border-0">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground">
            Recent Activity
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Latest hospital operations
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Action
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Patient Name
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Time
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((activity) => (
                <tr
                  key={activity.id}
                  className="border-b border-border hover:bg-secondary/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-foreground">
                      {activity.action}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-muted-foreground">
                      {activity.patient}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-muted-foreground">
                      {activity.time}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        activity.type === "admission"
                          ? "bg-primary/10 text-primary"
                          : activity.type === "lab"
                            ? "bg-accent/10 text-accent"
                            : "bg-success/10 text-success"
                      }`}
                    >
                      {activity.type.charAt(0).toUpperCase() +
                        activity.type.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            Showing 5 of 100 activities
          </p>
          <Button variant="outline">View All Activities</Button>
        </div>
      </Card>
    </div>
  );
}
