import './App.css';
import Spadri from "./component/sneakers";

function App() {
  const sneakers = [
    {
      id: Math.random(),
      brand:"NIKE - air force",
      price: "120$",
    },
    {
      id: Math.random(),
      brand:"ADIDAS - yeezy",
      price:"369$",
    },
    {
      id: Math.random(),
      brand:"ADIDAS - run swift",
      price:"120$",
    },
    {
      id: Math.random(),
      brand:"NIKE x Louis Vuitton",
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
  