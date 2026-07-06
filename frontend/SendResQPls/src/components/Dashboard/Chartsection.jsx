import React from "react";
import "./ChartSection.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { FiPhoneCall } from "react-icons/fi";

const data = [
  { month: "Jul", totalRequests: 18, completed: 16 },
  { month: "Aug", totalRequests: 22, completed: 19 },
  { month: "Sep", totalRequests: 20, completed: 18 },
  { month: "Oct", totalRequests: 16, completed: 15 },
  { month: "Nov", totalRequests: 11, completed: 10 },
  { month: "Dec", totalRequests: 9, completed: 9 },
];

const departments = [
  {
    name: "BFP",
    officer: "FI Renato Reyes",
    status: "available",
    color: "bfp",
  },
  {
    name: "PNP",
    officer: "PLTCOL Marco dela Cruz",
    status: "available",
    color: "pnp",
  },
  {
    name: "MHO",
    officer: "Dr. Maria Santos",
    status: "available",
    color: "mho",
  },
  {
    name: "MDRRMO",
    officer: "Engr. Ricardo Villanueva",
    status: "available",
    color: "mdrrmo",
  },
  {
    name: "MEO",
    officer: "Operations Team",
    status: "available",
    color: "meo",
  },
];

export default function ChartSection() {
  return (
    <section className="chart-layout">
      <div className="chart-card">
        <div className="section-title">
          <h2>Requests Over Time</h2>
        </div>

        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={data}
              margin={{ top: 12, right: 10, left: -12, bottom: 0 }}
              barGap={8}
            >
              <CartesianGrid
                stroke="#e8edf4"
                strokeDasharray="3 3"
                vertical={true}
              />

              <XAxis
                dataKey="month"
                axisLine={{ stroke: "#94a3b8" }}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />

              <YAxis
                domain={[0, 24]}
                ticks={[0, 6, 12, 18, 24]}
                axisLine={{ stroke: "#94a3b8" }}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />

              <Tooltip
                cursor={{ fill: "rgba(37, 99, 235, 0.05)" }}
                contentStyle={{
                  borderRadius: "10px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 8px 18px rgba(15, 23, 42, 0.08)",
                }}
              />

              <Legend
                verticalAlign="bottom"
                iconType="square"
                iconSize={12}
                wrapperStyle={{
                  paddingTop: "14px",
                  fontSize: "14px",
                }}
              />

              <Bar
                dataKey="totalRequests"
                name="Total Requests"
                fill="#0d5bd7"
                radius={[6, 6, 0, 0]}
                barSize={34}
              />

              <Bar
                dataKey="completed"
                name="Completed"
                fill="#08a99a"
                radius={[6, 6, 0, 0]}
                barSize={34}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="department-card">
        <div className="section-title">
          <h2>Department Status</h2>
        </div>

        <div className="department-list">
          {departments.map((department) => (
            <div className="department-item" key={department.name}>
              <div className="department-info">
                <h4 className={`department-name ${department.color}`}>
                  {department.name}
                </h4>
                <span>{department.officer}</span>
              </div>

              <div className="department-actions">
                <FiPhoneCall className="department-call-icon" />
                <span className="availability-badge">
                  {department.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}