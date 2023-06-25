import "./Iphone.scss";
import Nav from "../navigation/Nav";
import Heading from "../heading/Heading";
import News from "../News/News";
import Training from "../Training/Training";

function Iphone() {
  return (
    <>
      <div class="container">


        <div class="phone">
          <div class="toggleButton Button"></div>
          <div class="volumeButtonUp Button"></div>
          <div class="volumeButtonDown Button"></div>
          <div class="powerButton Button"></div>

          <div class="glares">
            <div class="horizontalGlare">
              <div class="glare1"></div>
            </div>

            <div class="verticalGlare">
              <div class="glare2"></div>
            </div>
          </div>

          <div class="screen">
            <div class="signal">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>

            <div class="strip">
              <div class="circleHolder">
                <div class="circle1"></div>
                <div class="circle2"></div>
              </div>

              <div class="stripItems">
                <div class="camera"></div>
                <div class="camera second"></div>

                <div class="speaker"></div>
                <div class="prox ir"></div>
                <div class="prox"></div>
              </div>
            </div>
            <Heading/>
            
            <Training />

            <Nav/>
            <div class="batteryBar">
              <div class="batter">
                <div class="e"></div>
              </div>
              100%
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default Iphone;
