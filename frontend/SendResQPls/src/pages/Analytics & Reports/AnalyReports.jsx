import { useState } from "react";
import "./AnalyReports.css";
import Reports from "../../components/Reports/Reports";
import IncidentReport from "../../components/Reports/IncidentReport";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const forecastData = [
  { month: "Jan", total: 8, resolved: 8, predicted: 18, type: "Fire" },
  { month: "Feb", total: 10, resolved: 10, predicted: 15, type: "Medical" },
  { month: "Mar", total: 20, resolved: 17, predicted: 31, type: "Fire" },
  { month: "Apr", total: 8, resolved: 7, predicted: 18, type: "Fire" },
  { month: "May", total: 7, resolved: 7, predicted: 15, type: "Accident" },
  { month: "Jun", total: 15, resolved: 14, predicted: 23, type: "Flood" },
  { month: "Jul", total: 18, resolved: 16, predicted: 22, type: "Typhoon" },
  { month: "Aug", total: 21, resolved: 19, predicted: 35, type: "Flood" },
  { month: "Sep", total: 19, resolved: 18, predicted: 30, type: "Typhoon" },
  { month: "Oct", total: 16, resolved: 15, predicted: 24, type: "Landslide" },
  { month: "Nov", total: 10, resolved: 10, predicted: 10, type: "Typhoon" },
  { month: "Dec", total: 9, resolved: 9, predicted: 4, type: "Fire" },
];

const requestData = [
  { month: "Jan", value: 7 },
  { month: "Feb", value: 10 },
  { month: "Mar", value: 21 },
  { month: "Apr", value: 8 },
  { month: "May", value: 6 },
  { month: "Jun", value: 14 },
  { month: "Jul", value: 18 },
  { month: "Aug", value: 22 },
  { month: "Sep", value: 20 },
  { month: "Oct", value: 16 },
  { month: "Nov", value: 11 },
  { month: "Dec", value: 9 },
];

const responseTimeData = [
  { month: "Jan", value: 10 },
  { month: "Feb", value: 12 },
  { month: "Mar", value: 13 },
  { month: "Apr", value: 18 },
  { month: "May", value: 16 },
  { month: "Jun", value: 15 },
  { month: "Jul", value: 14 },
  { month: "Aug", value: 17 },
  { month: "Sep", value: 13 },
  { month: "Oct", value: 12 },
  { month: "Nov", value: 14 },
  { month: "Dec", value: 11 },
];

const incidentTypes = [
  { name: "Flood", value: 59, color: "#3b82f6" },
  { name: "Fire", value: 25, color: "#ef4444" },
  { name: "Medical", value: 24, color: "#f59e0b" },
  { name: "Typhoon", value: 17, color: "#10b981" },
  { name: "Accident", value: 16, color: "#f97316" },
  { name: "Landslide", value: 15, color: "#8b5cf6" },
  { name: "Earthquake", value: 5, color: "#6366f1" },
];

const getForecastDescription = (type, predicted) => {
  const riskLevel =
    predicted >= 30 ? "High" : predicted >= 20 ? "Moderate" : "Low";

  const descriptions = {
    Fire: {
      High: `High fire-risk forecast with about ${predicted} expected incidents. Prepare fire response teams.`,
      Moderate: `Moderate fire-risk forecast with about ${predicted} expected incidents. Keep response teams ready.`,
      Low: `Lower fire-risk forecast with about ${predicted} expected incidents. Maintain regular fire preparedness.`,
    },
    Flood: {
      High: `High flood-risk forecast with about ${predicted} expected incidents. Prepare rescue resources.`,
      Moderate: `Moderate flood-risk forecast with about ${predicted} expected incidents. Monitor rainfall and waterways.`,
      Low: `Lower flood-risk forecast with about ${predicted} expected incidents. Continue flood monitoring.`,
    },
    Typhoon: {
      High: `High typhoon-related forecast with about ${predicted} expected incidents. Activate preparedness measures.`,
      Moderate: `Moderate typhoon-related forecast with about ${predicted} expected incidents. Keep teams on standby.`,
      Low: `Lower typhoon-related forecast with about ${predicted} expected incidents. Monitor weather advisories.`,
    },
    Medical: {
      High: `High medical-response forecast with about ${predicted} expected cases. Prepare personnel and supplies.`,
      Moderate: `Moderate medical-response forecast with about ${predicted} expected cases. Maintain team availability.`,
      Low: `Lower medical-response forecast with about ${predicted} expected cases. Continue normal readiness.`,
    },
    Accident: {
      High: `High accident forecast with about ${predicted} expected cases. Strengthen rescue readiness.`,
      Moderate: `Moderate accident forecast with about ${predicted} expected cases. Prepare traffic response teams.`,
      Low: `Lower accident forecast with about ${predicted} expected cases. Maintain road safety monitoring.`,
    },
    Landslide: {
      High: `High landslide-risk forecast with about ${predicted} expected incidents. Monitor high-risk areas.`,
      Moderate: `Moderate landslide-risk forecast with about ${predicted} expected incidents. Monitor soil conditions.`,
      Low: `Lower landslide-risk forecast with about ${predicted} expected incidents. Continue slope monitoring.`,
    },
  };

  return (
    descriptions[type]?.[riskLevel] ||
    `${riskLevel} incident forecast with about ${predicted} expected cases.`
  );
};

const renderPieLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  name,
  value,
  fill,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 28;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={fill}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize="13"
      fontWeight="500"
    >
      {`${name}: ${value}`}
    </text>
  );
};

export default function AnalyReports() {
  const [activeTab, setActiveTab] = useState("Analytics");

  const totalIncidents = forecastData.reduce(
    (sum, month) => sum + month.total,
    0
  );

  const totalResolved = forecastData.reduce(
    (sum, month) => sum + month.resolved,
    0
  );

  const resolutionRate =
    totalIncidents === 0 ? 0 : (totalResolved / totalIncidents) * 100;

  const getResolutionRate = (months) => {
    const incidents = months.reduce((sum, item) => sum + item.total, 0);
    const resolved = months.reduce((sum, item) => sum + item.resolved, 0);

    return incidents === 0 ? 0 : (resolved / incidents) * 100;
  };

  const resolutionChange =
    getResolutionRate(forecastData.slice(-6)) -
    getResolutionRate(forecastData.slice(0, 6));

  const latestResponseTime = responseTimeData.at(-1).value;
  const previousResponseTime = responseTimeData.at(-2).value;
  const responseTimeChange = latestResponseTime - previousResponseTime;

  const mostCommonIncident = incidentTypes.reduce((highest, item) =>
    item.value > highest.value ? item : highest
  );

  const sortedIncidentTypes = [...incidentTypes].sort(
    (first, second) => second.value - first.value
  );

  const summaryCards = [
    {
      title: "Total Incidents (12mo)",
      value: totalIncidents,
      subtitle: `~${Math.round(totalIncidents / 12)} per month`,
      color: "default",
    },
    {
      title: "Resolution Rate",
      value: `${resolutionRate.toFixed(1)}%`,
      subtitle:
        resolutionChange >= 0
          ? `↗ +${resolutionChange.toFixed(1)}% improvement`
          : `↘ ${Math.abs(resolutionChange).toFixed(1)}% decrease`,
      color: resolutionChange >= 0 ? "green" : "red",
    },
    {
      title: "Avg Response Time",
      value: `${latestResponseTime.toFixed(1)}m`,
      subtitle:
        responseTimeChange <= 0
          ? `↘ ${Math.abs(responseTimeChange).toFixed(1)}m faster`
          : `↗ +${responseTimeChange.toFixed(1)}m slower`,
      color: responseTimeChange <= 0 ? "blue" : "red",
    },
    {
      title: "Most Common",
      value: mostCommonIncident.name,
      subtitle: `${mostCommonIncident.value} incidents (${Math.round(
        (mostCommonIncident.value / totalIncidents) * 100
      )}%)`,
      color: "red",
    },
  ];

  return (
    <div className="analytics-page">
      <div className="analytics-heading">
        <div className="analytics-title-group">
          <h1>Analytics &amp; Incident Reports</h1>
          <p>Performance metrics, trends, and incident documentation</p>
        </div>

        <div className="analytics-tabs">
          {["Analytics", "Reports", "Incident Report"].map((tab) => (
            <button
              key={tab}
              type="button"
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "Analytics" && (
      <>
        <section className="analytics-summary">
          {summaryCards.map((card) => (
            <div className="summary-card" key={card.title}>
              <p>{card.title}</p>

              <h2 className={card.color}>
                {card.value}
              </h2>

              <span className={`summary-subtitle ${card.color}`}>
                {card.subtitle}
              </span>
            </div>
          ))}
        </section> 

      <section className="analytics-grid">
        <div className="analytics-card">
          <h3>Incident Forecast (12 Months)</h3>

          <ResponsiveContainer width="100%" height={340}>
            <AreaChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Area
                type="monotone"
                dataKey="total"
                name="Total"
                stroke="#3b82f6"
                fill="#bfdbfe"
                fillOpacity={0.65}
              />

              <Area
                type="monotone"
                dataKey="predicted"
                name="Predicted Forecast"
                stroke="#8b5cf6"
                fill="transparent"
                strokeDasharray="6 4"
              />

              <Area
                type="monotone"
                dataKey="resolved"
                name="Resolved"
                stroke="#10b981"
                fill="#d1fae5"
                fillOpacity={0.55}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="analytics-card">
          <h3>Requests Per Day/Week</h3>

          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={requestData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="analytics-card forecast-details-card">
        <div className="section-header">
          <h3>Monthly Incident Forecast Details</h3>
        </div>

        <div className="forecast-details-grid">
          {forecastData.map((item) => (
            <div className="forecast-detail-item" key={item.month}>
              <div className="forecast-detail-top">
                <h4>{item.month}</h4>
                <span>{item.type}</span>
              </div>

              <p>{getForecastDescription(item.type, item.predicted)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="analytics-grid analytics-grid-bottom">
        <div className="analytics-card incident-distribution-card">
          <h3>Incident Type Distribution</h3>

          <ResponsiveContainer width="100%" height={340}>
            <PieChart>
              <Pie
                data={incidentTypes}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="57%"
                innerRadius={56}
                outerRadius={91}
                paddingAngle={1}
                label={renderPieLabel}
                labelLine={false}
              >
                {incidentTypes.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="analytics-card response-trend-card">
          <h3>Avg Response Time Trend</h3>

          <ResponsiveContainer width="100%" height={340}>
            <LineChart
              data={responseTimeData}
              margin={{ top: 35, right: 14, left: -12, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10 }}
                interval={0}
              />
              <YAxis
                domain={[0, 20]}
                ticks={[0, 5, 10, 15, 20]}
                tick={{ fontSize: 11 }}
              />
              <Tooltip
                formatter={(value) => [`${value} min`, "Avg (min)"]}
              />

              <Line
                type="monotone"
                dataKey="value"
                name="Avg (min)"
                stroke="#3b82f6"
                strokeWidth={2.5}
                dot={{
                  r: 3.5,
                  fill: "#ffffff",
                  stroke: "#3b82f6",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 5,
                  fill: "#ffffff",
                  stroke: "#3b82f6",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="analytics-card disaster-frequency-card">
          <h3>Disaster Frequency</h3>

          <div className="frequency-list">
            {sortedIncidentTypes.map((item) => (
              <div className="frequency-row" key={item.name}>
                <div className="frequency-top">
                  <span className="frequency-label">
                    <span
                      className="frequency-dot"
                      style={{ background: item.color }}
                    />
                    {item.name}
                  </span>

                  <strong>{item.value}</strong>
                </div>

                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${
                        (item.value / mostCommonIncident.value) * 100
                      }%`,
                      background: item.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
    )}

          {activeTab === "Reports" && (
        <Reports />
      )}

      {activeTab === "Incident Report" && <IncidentReport />}
    </div>
  );
}