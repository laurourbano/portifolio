import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>React JS</h1>
        <p>Biblioteca JavaScript para criar SPAs</p>

        <a href='https://reactjs.org/' target="_blank" rel="noreferrer">Site Oficial</a>
      </header>

      <section>
        <div className="conteudo">
          <h2>Requisitos</h2>
          <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>
        </div>
        <div className="cards">
          <div className="Card">
            <h3>HTML</h3>
            <p>Aprender a estruturar os elementos da página com HTML</p>
          </div>
          <div className="Card">
            <h3>CSS</h3>
            <p>Aprender a estilizar os elementos da página com CSS</p>
          </div>
          <div className="Card">
            <h3>JavaScript</h3>
            <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
          </div>  
        </div>

      </section>

      <footer>
        <p>Curso de introdução de React JS</p>
      </footer>
    </div>
  );
}

export default App;
