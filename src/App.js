import './App.css';
import HelloWorld from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {


  const name = 'Thiago'
  const newName = name.toUpperCase()
  function sum(a,b){
    return a + b
  }
  const url = "https://img.freepik.com/vetores-gratis/fundo-de-luxo-de-ouro_52683-43998.jpg?t=st=1693584048~exp=1693584648~hmac=e77cb60c186397f1da9878c9f16f4db876f52c2f9ad3c1216c07712153873327"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <HelloWorld />
      <Frase/>
      <Frase/>
      <SayMyName nome="Thiago"/>
      <Pessoa nome="Alan" idade="28" profissao="programador" foto="https://www.researchgate.net/profile/Irina-Gladkova/publication/253864235/figure/fig3/AS:668627082690571@1536424527359/The-image-shown-here-is-a-300-300-pixel-cropped-section-of-SEVIRI-Band-3-digital-counts_Q320.jpg"/>
    </div>
  );
}

export default App;
