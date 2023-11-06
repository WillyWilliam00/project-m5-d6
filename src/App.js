import MyNavBar from "./MyComponents/navBar"
import Jumbotron from "./MyComponents/Welcome"
import Footer from "./MyComponents/Footer"
import TableBook from "./MyComponents/TableBook"
import { useState } from "react";
import ThemeContext from "./Context/theme";
import './App.css';


function App() {
  const [name, setName] = useState("");
  const [dark, setDark] = useState(false)

  return (
    <>
      <ThemeContext.Provider value={{dark, setDark}}>

        <div style={dark ? {background: "#212529"} : {background: "white"}}>
          <MyNavBar name={name} setName={setName} />
          
          <Jumbotron />
          
          
          <TableBook name={name}/>
          
          
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
