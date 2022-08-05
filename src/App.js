import './App.css';
import Spadri from "./component/sneakers.jsx";

function App() {
  const sneakers = [
    {
      id: Math.random(),
      model:"NIKE - air force",
      price: "120$",
    },
    {
      id: Math.random(),
      model:"ADIDAS - yeezy",
      price:"369$",
    },
    {
      id: Math.random(),
      model:"ADIDAS - run swift",
      price:"120$",
    },
    {
      id: Math.random(),
      model:"NIKE x Louis Vuitton",
      price:"820$",
    },
  
  ];

const str ="props";

const handlePrice = (name, price)=> {
 alert(`This ${name}'s price is ${price}`)
};

 return (
  <div className="App">
 <Spadri spadriet={Spadri}  chaine={str} handlePrice={handlePrice}/>
 </div>
);

}

export default App;
  