import logo from './image/Garyssteaks food truck catering logo cheesesteaks and hoagies.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Garyssteaks NYC <a href="https://garyssteaks.com/book-food-truck/">Food Truck Catering</a> - Cheesesteaks & Hoagies</h1>
        <div><a href="https://garyssteaks.com/"><figure><img src={logo} /></figure></a></div>
      </header>
      
    </div>
  );
}

export default App;
