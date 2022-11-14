import React ,{useState} from 'react';
import './App.css';

function App() {

  const [image,setimage] = useState("./images/image-product-mobile.jpg")


  if(window.innerWidth===470){
    setimage("./images/image-product-mobile.jpg")
  }
  return (
   <>
   <div className="main">

    <div className="card">
    <img src={image} alt="" />
      <div className="container">
<div className="text">

  <span className='Title'>Perfume</span>
  <h1 className="heading"> Gabrielle Essence Eau De Parfume</h1>
  <span className="desc">A floral, solar and voluptuos interpretation composed by Oliver Polge,Perfumer-Creator for the House of CHANEL</span>
  <span className="rate">$149.99 <del>$169.99</del></span>

</div>
<a className="btn" href="/"><img src="./images/icon-cart.svg" alt="" /> Add To Cart</a>
      </div>
     
    </div>
   </div>
   </>
  );
}

export default App;
