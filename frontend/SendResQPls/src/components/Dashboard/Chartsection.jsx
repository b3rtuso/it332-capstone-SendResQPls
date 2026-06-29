import React from "react";
import "./ChartSection.css";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import {
  FiShield,
  FiActivity,
  FiTruck,
  FiZap,
} from "react-icons/fi";

const data = [
  { day: "Mon", reports: 18 },
  { day: "Tue", reports: 25 },
  { day: "Wed", reports: 21 },
  { day: "Thu", reports: 30 },
  { day: "Fri", reports: 26 },
  { day: "Sat", reports: 40 },
  { day: "Sun", reports: 35 },
];

export default function ChartSection() {
  return (
    <section className="chart-layout">

      <div className="chart-card">

        <div className="section-title">
          <h2>Emergency Trends</h2>
          <span>Last 7 Days</span>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <XAxis dataKey="day" />
            <Tooltip />
            <Area
              dataKey="reports"
              stroke="#2563eb"
              fill="#93c5fd"
            />
          </AreaChart>
        </ResponsiveContainer>

      </div>

      <div className="department-card">

        <div className="section-title">
          <h2>Department Status</h2>
        </div>

        <div className="department-list">

          <div className="department-item">
            <div className="dept-icon blue">
              <FiShield />
            </div>

            <div>
              <h4>Fire Department</h4>
              <span>12 Active Units</span>
            </div>
          </div>

          <div className="department-item">
            <div className="dept-icon red">
              <FiActivity />
            </div>

            <div>
              <h4>Medical Team</h4>
              <span>8 Available</span>
            </div>
          </div>

          <div className="department-item">
            <div className="dept-icon green">
              <FiTruck />
            </div>

            <div>
              <h4>Rescue Team</h4>
              <span>15 On Duty</span>
            </div>
          </div>

          <div className="department-item">
            <div className="dept-icon orange">
              <FiZap />
            </div>

            <div>
              <h4>Utilities</h4>
              <span>Normal</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}