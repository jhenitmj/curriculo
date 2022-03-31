import React, { useState } from "react";
import "./App.css";
import Pessoa from './componentes/Pessoa';
import Perfil from './imagem/perfil3.jpg';
import { BsFillStarFill, BsFillShareFill, BsBrightnessLowFill} from "react-icons/bs";

function App() {
  const  nome = 'João Inácio Neto'
  const [favorite, setFavorite] = useState(0);
  const [compartilhar, setCompartilhar] = useState(0);

  function aumentar(){
    setFavorite(favorite + 1)
    console.log (favorite)
  }

  function compartilhamento(){
    setCompartilhar(compartilhar + 1)
    console.log (compartilhar)
  }
  return (
 <div className='body'>
<div className="container-foto">
  <div className="perfil">
<img className="foto" src={Perfil}/>
  <div className="nome">{nome}</div>
  <a className="profissao">Full Stack Developer</a>
  </div>
</div>
<div className="container-inform">
  <div className="pais">Brasil</div>
  <div className="trabalho">Rocketseat</div>
  <div className= "git">birobiro</div>
  <div className="in">joao-inacio-neto</div>
  <div className="tw">birobirobiro</div>
  <div className="blog">https://birobiro.dev</div>
  <div className="email">bbirobiro.dev@gmail.com</div>
</div>
<div className="container-tec">
 
  <h1 className="tecnoh"> Tecnologias</h1>
  <div className="tecno">
  <div className="linguagem-tec"> Javascript</div>
  </div>
</div>
<div className="container-experiencias"> 
<h1 className="experienciash"> Experiências</h1>
<div className="experiencias">
<a className="curso-experiencias"> Rocketseat</a>
<a className="tempo"> 2019 - Atualmente</a>
<a className="info"> Community Experience</a>
</div>
</div>
<div className="nav">
  <div className="projeto">
    <div className="m-projeto">Meus projetos</div>
    <a className="veja-mais" href="#">Veja mais</a> 
   </div>
    <div className="grid-projeto1">
      <h1 className="projeto-grid1">mi-onix</h1>
      <a className="txt1"> Consulte os códigos de erro que aparecem no painel do veículo Onix</a>
      <div className="bottom">
      <button  onClick={aumentar}
      className={favorite !== 0? 'btnestrela-t': 'btnestrela'}><BsFillStarFill/></button>
      <button onClick={compartilhamento}
      className="btncompartilhar"><BsFillShareFill/></button>
      </div>
      <div className="linguagem-projeto"><BsBrightnessLowFill/>Javascript</div>
    </div>
    <div className="grid-projeto2">
      <h1 className="projeto-grid1">mi-onix</h1>
      <a className="txt1"> Consulte os códigos de erro que aparecem no painel do veículo Onix</a>
      <div className="bottom">
      <button onClick={aumentar}
      className={favorite !== 0? 'btnestrela-t': 'btnestrela'}><BsFillStarFill/></button>
      <button onClick={compartilhamento} 
      className="btncompartilhar"><BsFillShareFill/></button>
      </div>
      <div className="linguagem-projeto"><BsBrightnessLowFill/>Javascript</div>
    </div>


  <div className="content">
    <h2 className="recent-post">Recent posts</h2>
      </div>
<div className="post">
<img className="foto2" src={Perfil}/>
 <div className="conteudo">
  <h1 className="titulo-post">Erro adb devices no Genymotion e Android Studio (React Native)
</h1>
<a className="tempo-projeto">2 anos atrás</a>
<a className="context">Erro adb devices no Genymotion e Android Studio (React Native)</a>
</div>
</div>

</div>

 </div>
  );
}

export default App;
