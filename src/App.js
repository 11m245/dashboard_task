import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faChartLine, faCoins, faDollar, faSignal } from '@fortawesome/free-solid-svg-icons'
import LinearProgress from '@mui/material/LinearProgress';
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
      type: "count"
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money"
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money"
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money"
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
      <LinearProgress color="secondary" variant="determinate" value={50} />
      <div className="summary-box-time-container">
        <p className="time">{data.time}</p>
        <p className="percent">
          <FontAwesomeIcon style={{ color: data.performance === "up" ? "green" : "red" }} icon={data.performance === "up" ? faCaretUp : faCaretDown} />
          {" "}{data.percent}%</p>
      </div>
    </div>
  );
}

export default App;
