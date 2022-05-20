import Navbar from "./components/Navbar";
import Card from "./components/Card"
import react from "react"
import "./css/style.css"
import data from "./data.js"

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        item = {item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <div className="main--section">
        {cards}
      </div>
    </div>
  );
}



export default App;
