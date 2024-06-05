import Lawyers from "./Lawyers";
import Prip2 from "./prop2";

export default function Prijenos() {
    let propi = {
      harvey:"60th floor left",
      jessica:"60th floor right",
      louis:"58th floor next to conference room C",
      Dana:"57th floor",
      Mike:"59th right",
      Rachel:"58th floor",
      Alex:"57th floor",
      Zoe:"57th floor",
      Katrina:"56th floor"
    };
    return(
        <div>
          <center>
          <Lawyers></Lawyers>
          <br></br>
          <br></br>
          <br></br>
          <Prip2 pro={propi}></Prip2>
          <br></br>
          <br></br>
          <br></br>
          </center>
        </div>
    );
}