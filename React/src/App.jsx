import CompPadre from "./Components/CompPadre"
import CompHijo from "./Components/CompHijo"

function App() {

  return (
    <>
      <CompPadre/>
      <CompHijo info = "Hpta" numero = "1"/>
      <CompHijo info = "Perro" numero = "2"/>
      <CompHijo info = "Zozorra" numero = "3"/>
    </>
  )
}

export default App
