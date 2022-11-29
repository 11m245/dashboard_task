import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faChartLine, faCoins, faDollar, faSignal } from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

function Dashboard() {

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <SummaryBoxList />
      <MonthlyProfits />
    </div>
  );
}


function SummaryBoxList() {
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "rgb(135, 96, 251)",
      performance: "up",
      type: "count",
      linePercent: 20
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money",
      linePercent: 50
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money",
      linePercent: 70
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money",
      linePercent: 40
    }
  ];


  return (
    <div className="summary-box-list">
      {dataList.map((dt) => <SummaryBox data={dt} />)}
    </div>
  );

}

function SummaryBox({ data }) {
  return (
    <div className='summary-box-container'>
      <div className="summary-box-spec">
        <p className="summary-box-text">{data.text}</p>
        <FontAwesomeIcon style={{ color: data.iconColor }} icon={data.icon} />
      </div>
      <h2 className="summary-box-number">{data.type === "money" ? "$" : null}{data.number}</h2>
      <CustomLinearProgress lineColor={data.iconColor} variant="determinate" value={data.linePercent} />
      <div className="summary-box-time-container">
        <p className="time">{data.time}</p>
        <p className="percent">
          <FontAwesomeIcon style={{ color: data.performance === "up" ? "green" : "red" }} icon={data.performance === "up" ? faCaretUp : faCaretDown} />
          {" "}{data.percent}%</p>
      </div>
    </div>
  );
}


const CustomLinearProgress = styled(LinearProgress)(({ theme, lineColor }) => ({
  height: 6,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "hsl(221deg 36% 91%)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: lineColor,
  },
}));


function MonthlyProfits() {

  const dataList = [{ time: "This Month", lineColor: "purple", percent: 75 },
  { time: "Last Month", lineColor: "green", percent: 50 }];

  return (
    <div className="monthly-profits-container">
      <h3>Monthly Profits</h3>
      <p className='profit-box-sub-text'>Excepteur sint occaecat cupidatat non proident</p>
      <h2 className="profit-box-number">$22,534</h2>
      {dataList.map(((dt) => <PercentProgress data={dt} />))}
    </div>
  );
}

function PercentProgress({ data }) {
  console.log(data);
  return (<div className='profit-box-container'>
    <div className="profit-box-time-container">
      <p>{data.time}</p>
      <p>{data.percent}%</p>
    </div>
    <CustomLinearProgress lineColor={data.lineColor} variant="determinate" value={data.percent} />
  </div>);
}

export default App;
