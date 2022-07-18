import { Parallax } from 'react-parallax';
import bg from "../assests/loc.png"
const Location = () =>{
return(<>
         <Parallax blur={10} bgImage={bg} strength={200}>
       <p className="c-txt display-6 d-flex justify-content-center " >Text goes here</p>
    </Parallax>

</>)

}
export default Location;