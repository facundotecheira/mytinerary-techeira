import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Galery from "./Array";



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


function Card() {
  
  
  

  return (
    <>
      <h1 className = 'h1Galery'>Popular MYtineraries</h1>
      <div className="divGalery">
        <Carousel breakPoints={breakPoints}  enableAutoPlay = 'true'  autoPlaySpeed = '10000' >
          {Galery.map(item =><Item>
        
            <div className= "galery">

              <img className= "imgGalery" alt = {item.title} src = {`./assets/${item.ruta}`}/>
              
              <div className = "titleGalery">

                <h2>
                  {item.title}
                </h2>

              </div>
  
        
            </div>
            
            </Item>)} 
        </Carousel>
      </div> 
      
    </>
  );
}

export default Card;
