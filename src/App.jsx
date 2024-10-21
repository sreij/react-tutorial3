import { useState } from "react";

export default function App() {
    const [bright, setBright]=useState("darken");
    const [full, fullImage] = useState("image/pic1.jpg");
    /*
    const images = [
        "images/pic1.jpg",
        "images/pic2.jpg",
        "images/pic3.jpg",
        "images/pic4.jpg",
        "images/pic5.jpg"
    ]
    const alts = {
        pic1: "Closeup of a human eye",
        pic2: "Rock that looks like a wave",
        pic3: "Purple and white pansies",
        pic4: "Section of wall from a pharoah's tomb",
        pic5: "Large moth on a leaf"
    }
    */
    const images=[
        <img key="pic1" src="images/pic1.jpg" alt="Closeup of a human eye" onClick={() => fullImage("pic1")} />,
        <img key="pic2" src="images/pic2.jpg" alt="Rock that looks like a wave" onClick={() => fullImage("pic2")} />,
        <img key="pic3" src="images/pic3.jpg" alt="Purple and white pansies" onClick={() => fullImage("pic3")} />,
        <img key="pic4" src="images/pic4.jpg" alt="Section of wall from a pharoah's tomb" onClick={() => fullImage("pic4")} />,
        <img key="pic5" src="images/pic5.jpg" alt="Large moth on a leaf" onClick={() => fullImage("pic5")} />
    ];
    function brightness(){
        if(bright === "darken"){
            setBright("lighten");

        }else{
            setBright("darken");
        }
    }

    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
            className="displayed-img"
            src="images/pic1.jpg"
            alt="Closeup of a human eye"
          />
          <div className="overlay"></div>
          <button className="dark" onClick={brightness}>{bright}</button>
        </div>
        <div className="thumb-bar">
            {images}
        </div>
      </>
    );
  }