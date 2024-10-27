import { useState } from "react";

export default function App() {
    const [bright, setBright]=useState("Darken");
    const [full, fullImage] = useState(0);

    const images = [
        {src: "images/pic1.jpg", alt: "Closeup of a human eye"},
        {src: "images/pic2.jpg", alt: "Rock that looks like a wave"},
        {src: "images/pic3.jpg", alt: "Purple and white pansies"},
        {src: "images/pic4.jpg", alt: "Section of wall from a pharoah's tomb"},
        {src: "images/pic5.jpg", alt: "Large moth on a leaf"}
    ];

    function brightness(){
        if(bright === "Darken"){
            setBright("Lighten");
        }else{
            setBright("Darken");
        }
    }

    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
            className="displayed-img"
            src={images[full].src}
            alt={images[full].alt}
          />
          <div className="overlay"></div>
          <button className="dark" onClick={brightness}>{bright}</button>
        </div>
        <div className="thumb-bar">
            {images.map((image,index)=>{
                return(
                    <img key={image} src={image.src} alt={image.alt} onClick={()=>fullImage(index)}/>
                );
            })}
        </div>
      </>
    );
  }