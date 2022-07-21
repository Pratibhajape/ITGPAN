import Lottie from "lottie-react";
import  jisu from "../animation/jisu.json";

const Section = () => {
    return(<>
     <div class="container">
  <div class="row">
    <div class="col">
  
    <Lottie animationData={jisu} loop={true} />
    </div>
    <div class="col v-center">
   <div class="col">
    <p class="fs-2">Industrial Traning Weekly Test<br/></p>
    <p class="fs-3">Instruction</p>
    <ul>
    <li><p className="h6">30 marks</p></li>
    <li><p className="h6">MCQ Type<br/></p></li>
    <li><p className="h6">Limited Time<br/></p><br/></li>
    </ul>
    <button type="button" class="btn btn-primary ">Open Web-Dev Test</button><br/>
    <br/>
    <button type="button" class="btn btn-primary">Open App-Dev Test</button>
  
   </div>
    
     </div>
  </div>
</div>
    
    </>)

}


export default Section;