import './App.css';
import HelloWorld from './components/HelloWord';

function App() {


  const name = 'Thiago'
  const newName = name.toUpperCase()
  function sum(a,b){
    return a + b
  }
  const url = "https://img.freepik.com/vetores-gratis/fundo-de-luxo-de-ouro_52683-43998.jpg?t=st=1693584048~exp=1693584648~hmac=e77cb60c186397f1da9878c9f16f4db876f52c2f9ad3c1216c07712153873327"

  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>Hello, {newName}</p>
      <p>soma: {sum(1,3)}</p>
      <img src={url} alt="imagem"/>
      <HelloWorld />
    </div>
  );
}

export default App;
