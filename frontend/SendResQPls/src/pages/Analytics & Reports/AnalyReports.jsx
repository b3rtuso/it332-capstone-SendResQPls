import { useEffect, useState } from "react";
import "./AnalyReports.css";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";


const summaryCards = [
  {
    title: "Total Incidents (12mo)",
    value: "161",
    subtitle: "~13 per month",
    color: "default",
  },
  {
    title: "Resolution Rate",
    value: "90.7%",
    subtitle: "+5% improvement",
    color: "green",
  },
  {
    title: "Avg Response Time",
    value: "13.8m",
    subtitle: "-3min faster",
    color: "blue",
  },
  {
    title: "Most Common",
    value: "Flood",
    subtitle: "59 incidents (37%)",
    color: "red",
  },
];


const forecastData = [
  { month:"Jan", total:8, resolved:8, predicted:18 },
  { month:"Feb", total:10, resolved:10, predicted:15 },
  { month:"Mar", total:20, resolved:17, predicted:31 },
  { month:"Apr", total:8, resolved:7, predicted:18 },
  { month:"May", total:7, resolved:7, predicted:15 },
  { month:"Jun", total:15, resolved:14, predicted:23 },
  { month:"Jul", total:18, resolved:16, predicted:22 },
  { month:"Aug", total:21, resolved:19, predicted:35 },
  { month:"Sep", total:19, resolved:18, predicted:30 },
  { month:"Oct", total:16, resolved:15, predicted:24 },
  { month:"Nov", total:10, resolved:10, predicted:10 },
  { month:"Dec", total:9, resolved:9, predicted:4 },
];


const requestData = [
  {month:"Jan", value:7},
  {month:"Feb", value:10},
  {month:"Mar", value:21},
  {month:"Apr", value:8},
  {month:"May", value:6},
  {month:"Jun", value:14},
  {month:"Jul", value:18},
  {month:"Aug", value:22},
  {month:"Sep", value:20},
  {month:"Oct", value:16},
  {month:"Nov", value:11},
  {month:"Dec", value:9},
];


export default function AnalyReports(){

  const [currentDateTime,setCurrentDateTime] = useState(new Date());


  useEffect(()=>{

    const timer=setInterval(()=>{
      setCurrentDateTime(new Date());
    },1000);


    return ()=>clearInterval(timer);

  },[]);



  const formattedDate =
    currentDateTime.toLocaleDateString("en-US",{
      weekday:"long",
      month:"long",
      day:"numeric",
      year:"numeric",
    });


  const formattedTime =
    currentDateTime.toLocaleTimeString("en-US",{
      hour:"numeric",
      minute:"2-digit",
      second:"2-digit",
      hour12:true,
    });



  return (
    <div className="analytics-page">
            {/* HEADER */}
      <div className="analytics-heading">

        <div className="analytics-title">

          <h1>
            Analytics & Incident Reports
          </h1>


          <p>
            {formattedDate}
            <span>
              {formattedTime}
            </span>
          </p>


          <small>
            Performance metrics, trends, and incident documentation
          </small>

        </div>



        <div className="analytics-tabs">

          <button className="active">
            Analytics
          </button>


          <button>
            Reports
          </button>


          <button>
            Incident Report
          </button>

        </div>

      </div>



      {/* SUMMARY CARDS */}

      <section className="analytics-summary">

        {
          summaryCards.map((card)=>(

            <div 
              className="summary-card"
              key={card.title}
            >

              <p>
                {card.title}
              </p>


              <h2 className={card.color}>
                {card.value}
              </h2>


              <span>
                {card.subtitle}
              </span>


            </div>

          ))
        }

      </section>





      {/* TOP CHARTS */}

      <section className="analytics-grid">


        {/* INCIDENT FORECAST */}

        <div className="analytics-card">

          <h3>
            Incident Forecast (12 Months)
          </h3>


          <ResponsiveContainer 
            width="100%" 
            height={340}
          >

            <AreaChart data={forecastData}>


              <CartesianGrid 
                strokeDasharray="3 3"
              />


              <XAxis 
                dataKey="month"
              />


              <YAxis />


              <Tooltip />


              <Area
                dataKey="predicted"
                stroke="#7c5cff"
                fill="#ede9fe"
                strokeDasharray="6 4"
              />


              <Area
                dataKey="total"
                stroke="#2563eb"
                fill="#bfdbfe"
              />


              <Area
                dataKey="resolved"
                stroke="#22c55e"
                fill="#dcfce7"
              />


            </AreaChart>


          </ResponsiveContainer>


        </div>





        {/* REQUESTS */}

        <div className="analytics-card">


          <h3>
            Requests Per Day/Week
          </h3>



          <ResponsiveContainer
            width="100%"
            height={340}
          >

            <BarChart data={requestData}>


              <CartesianGrid 
                strokeDasharray="3 3"
              />


              <XAxis 
                dataKey="month"
              />


              <YAxis />


              <Tooltip />



              <Bar
                dataKey="value"
                fill="#3b82f6"
                radius={[5,5,0,0]}
              />


            </BarChart>


          </ResponsiveContainer>


        </div>


      </section>
            {/* BOTTOM CHARTS */}

      <section className="analytics-grid analytics-grid-bottom">


        {/* INCIDENT DISTRIBUTION */}

        <div className="analytics-card">

          <h3>
            Incident Type Distribution
          </h3>


          <ResponsiveContainer
            width="100%"
            height={330}
          >

            <PieChart>


              <Pie
                data={[
                  {name:"Flood", value:59},
                  {name:"Fire", value:38},
                  {name:"Medical", value:29},
                  {name:"Vehicular", value:22},
                  {name:"Rescue", value:13},
                ]}
                dataKey="value"
                innerRadius={65}
                outerRadius={100}
                paddingAngle={3}
              >

                <Cell fill="#2563eb"/>
                <Cell fill="#ef4444"/>
                <Cell fill="#f59e0b"/>
                <Cell fill="#10b981"/>
                <Cell fill="#8b5cf6"/>

              </Pie>


              <Legend
                verticalAlign="bottom"
                height={40}
              />


              <Tooltip />


            </PieChart>


          </ResponsiveContainer>


        </div>





        {/* RESPONSE TIME */}


        <div className="analytics-card">


          <h3>
            Average Response Time Trend
          </h3>



          <ResponsiveContainer
            width="100%"
            height={330}
          >


            <LineChart
              data={[
                {month:"Jan",value:16},
                {month:"Feb",value:15},
                {month:"Mar",value:18},
                {month:"Apr",value:14},
                {month:"May",value:13},
                {month:"Jun",value:15},
                {month:"Jul",value:12},
                {month:"Aug",value:11},
                {month:"Sep",value:13},
                {month:"Oct",value:12},
                {month:"Nov",value:11},
                {month:"Dec",value:10},
              ]}
            >


              <CartesianGrid
                strokeDasharray="3 3"
              />


              <XAxis
                dataKey="month"
              />


              <YAxis
                unit="m"
              />


              <Tooltip />



              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{r:4}}
              />


            </LineChart>


          </ResponsiveContainer>


        </div>



      </section>






      {/* DISASTER FREQUENCY */}

      <section className="analytics-card">


        <div className="section-header">

          <div>

            <h3>
              Disaster Frequency Analysis
            </h3>


            <p>
              Incident occurrence by disaster type
            </p>


          </div>


        </div>




        <div className="frequency-list">


          {
            [
              {
                name:"Flood",
                total:59,
                color:"#2563eb"
              },
              {
                name:"Fire",
                total:38,
                color:"#ef4444"
              },
              {
                name:"Medical",
                total:29,
                color:"#f59e0b"
              },
              {
                name:"Vehicular",
                total:22,
                color:"#10b981"
              },
              {
                name:"Rescue",
                total:13,
                color:"#8b5cf6"
              }

            ].map((item)=>(


              <div
                className="frequency-row"
                key={item.name}
              >


                <div className="frequency-top">

                  <span>
                    {item.name}
                  </span>


                  <strong>
                    {item.total}
                  </strong>


                </div>



                <div className="progress">


                  <div
                    className="progress-fill"
                    style={{
                      width:`${item.total}%`,
                      background:item.color
                    }}
                  />

                </div>


              </div>


            ))

          }


        </div>


      </section>







      {/* MONTHLY FORECAST */}


      <section className="analytics-card">


        <div className="section-header">


          <div>

            <h3>
              Monthly Incident Forecast
            </h3>


            <p>
              Prediction summary
            </p>


          </div>


        </div>




        <div className="forecast-grid">


          {
            forecastData.map((month)=>(


              <div
                className="forecast-item"
                key={month.month}
              >


                <h4>
                  {month.month}
                </h4>


                <p>
                  Total: {month.total}
                </p>


                <p>
                  Resolved: {month.resolved}
                </p>


                <strong>
                  Prediction: {month.predicted}
                </strong>


              </div>


            ))
          }


        </div>


      </section>



    </div>
  );
}