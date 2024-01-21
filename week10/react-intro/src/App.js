import logo from "./logo.svg";
import "./App.css";

let companies = [
  { name: "Tesla", revenue: 140 },
  { name: "Microsoft", revenue: 300 },
  { name: "Google", revenue: 600 },
];

function App() {
  const showCompany = (name, revenue) => {
    return (
      <div id="Tesla" key={name}>
        {name} makes {revenue} every year
      </div>
    );
  };

  const getClassName = (temperature) => {
    if (temperature < 15) {
      return "freezing";
    } else if (temperature >= 15 && temperature < 30) {
      return "fair";
    } else {
      return "hell-scape";
    }
  };

  return (
    <div className="App">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {/* your code here */}
        {companies.map((company) => showCompany(company.name, company.revenue))}

        <div id="weatherBox" className={getClassName(10)}></div>
        <div id="weatherBox" className={getClassName(16)}></div>
        <div id="weatherBox" className={getClassName(40)}></div>
      </div>
    </div>
  );
}

export default App;
