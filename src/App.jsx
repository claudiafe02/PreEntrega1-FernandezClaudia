import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBarComponent from './components/NavBarComponent'
import TitleComponent from './components/TitleComponent'

export default function App() {
 
  return (
    <>
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos a nuestra tienda"/>
    </>
  )
}

// export default App
