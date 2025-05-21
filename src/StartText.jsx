import Typewriter from "typewriter-effect";
import "./StartText.css";

function StartText() {
  return (
    <>
      <div className="initial_text">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Ay Yo! First of all,<br>")
              .typeString("Happy 18th Birthday to you!! <br>")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(500)
              .changeDelay(50)
              .typeString(" I have a little something special for you Eiei   <br>")
              .typeString("It's a one-of-a-kind gift that exists nowhere else in the world. <br>")
              .typeString("Don’t forget to click play on the music above before you scroll down. Enjoy!")
              .callFunction(() => {
                // changeOpacity("birthImg");
              })
              .start();
          }}
        />
      </div>
      {/* <div id="birthImg">
        <img src={} alt="" />
      </div> */}
    </>
  );
}

// function changeOpacity(id) {
//   if(id != null && document.getElementById(id) != null){
//     document.getElementById(id).setAttribute("id","showBirthImg")
//   }
// }

export default StartText;