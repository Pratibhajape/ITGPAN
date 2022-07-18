
import Lottie from "lottie-react";
import  anim from "../animation/anim.json"
const Header = () => {
    return(<>
    <div class="container">
  <div class="row">
    <div class="col">
  <Lottie animationData={anim} loop={true} />
    </div>
    <div class="col v-center">
  
    <p class="fs-1">Industrial traning by CWIPEDIA</p>
    
    <p class="fs-6">Enpowering Diploma Student community by delevering valuable resources and traning</p>
     
     <button type="button" className="btn btn-primary m-2" >#explore</button>
  
     <button type="button" className="btn btn-primary m-2">Register here</button>
    </div>
    
  </div>
</div>
    
    </>)
}
export default Header;   