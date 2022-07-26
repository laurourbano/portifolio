import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header/'
import Main from './Componentes/Main/'
import Footer from './Componentes/Footer/'
import Nav from './Componentes/Nav/'

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
    );
}

export default App;
