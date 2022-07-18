import Lottie from "lottie-react";
import  rk from "../animation/rk.json";
import ReactTypingEffect from 'react-typing-effect';
const Section = () => {
    return(<>
     <div class="container">
  <div class="row">
    <div class="col">
  
    <Lottie animationData={rk} loop={true} />
    </div>
    <div class="col v-center">
  
    <p class="fs-2">#super-fast</p>
    
    <p class="fs-5">Learn by doing in very quick way as you think</p>
    <ReactTypingEffect
        text={["Hello.", "Cwipedian!"]}
      />
        
     </div>
  </div>
</div>
    
    </>)

}


export default Section;