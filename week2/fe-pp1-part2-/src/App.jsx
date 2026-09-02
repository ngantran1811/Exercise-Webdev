import "./App.css";
import CreditCard from "./CreditCard";
import myImg from "./assets/images/visa.png";
import myImg2 from "./assets/images/master.png";
import BoxColor from "./BoxColor";
import Greetings from "./Greetings";

function App() {
  return (
    <div className="App">
      <img className="my-img-class" src={myImg} alt="This is an image"/>
      <CreditCard
        type="Visa"
        number="0123456789018875"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />

      <img className="my-img-class" src={myImg2} alt="This is an image"/>
    <CreditCard
      type="Master Card"
      number="0123456789010993"
      expirationMonth={3}
      expirationYear={2021}
      bank="N26"
      owner="Maxence Bouret"
      bgColor="#eeeeee"
      color="#222222"
    />

    <img className="my-img-class" src={myImg} alt="This is an image"/>
    <CreditCard
      type="Visa"
      number="0123456789016982"
      expirationMonth={12}
      expirationYear={2019}
      bank="Name of the Bank"
      owner="Firstname Lastname"
      bgColor="#ddbb55"
      color="white" 
    />
    <h1>Colors</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">John</Greetings>
      <Greetings lang="es">Maria</Greetings>
      <Greetings lang="fi">Mika</Greetings>
    
    </div>
  );
}

export default App;

