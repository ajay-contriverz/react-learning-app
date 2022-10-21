import './App.css';
import ExpensiveItem from "./components/ExpensiveItem"

function App() {
  const expenses = [
    {
      title: "Car insurance",
      date: new Date(2021, 2, 6),
      cost: 125,
    },
    {
      title: "Health insurance",
      date: new Date(2021, 2, 1),
      cost: 120,
    },
    {
      title: "Bike insurance",
      date: new Date(2021, 2, 4),
      cost: 180,
    },
    {
      title: "Fuel",
      date: new Date(2021, 2, 3),
      cost: 105,
    } 
  ]
  return (
    <>
      <div className="mainContent">
      {expenses.map((item,index)=>{
        return <ExpensiveItem 
          key={index}
          title={item.title}
          date={item.date}
          cost={item.cost}
        />
      })}
      </div>
    </>
  );
}

export default App;
