import { Card } from "./components/card";
import styles from './components/card.module.css';

function App() {
  const cardsData = [
    {
      title: "Titulo 1",
      description: "descripcion...",
      assignedTo: "ususrio1",
      startDate: "15/05/2010",
      endDate: "16/09/2024",
    },

    {
      title: "Titulo 2",
      description: "descripcion...",
      assignedTo: "usuario2",
      startDate: "15/04/2004",
      endDate: "16/09/2024",
    },

    {
      title: "Titulo 3",
      description: "descripcion...",
      assignedTo: "usuario3",
      startDate: "19/05/2006",
      endDate: "16/09/2024",
    },
  ];

  
  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <Card key={index}>
          <h3>{card.title}</h3>
          <p>{card.description}</p> 
          <p>
            {card.assignedTo}
          </p>
          <p>{card.startDate} to {card.endDate}</p>
        </Card>
      ))}
    </div>
  )
}

export default App
