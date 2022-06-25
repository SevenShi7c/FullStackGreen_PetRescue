import './App.css';
import ListPet from './pages/listPet/ListPet';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ListPet/>
      <Footer/>
    </div>
  );
}

export default App;
