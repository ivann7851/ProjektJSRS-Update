import { Link } from "react-router-dom";
import PSL from "./PSL";
import PSLlogo from "../media/PSL_logo.png"
import harvey from "../media/harvey.jpg"
import jessica from "../media/jessica.jpg"
import llitt from "../media/llitt.jpg"
import Dscottie from "../media/Dscottie.jpg"
import Mross from "../media/Mross.jpg"
import Rzane from "../media/Rzane.png"
import Awilliams from "../media/Awilliams.jpg"
import Zlawford from "../media/Zlawford.jpg"
import Kbennett from "../media/Kbennett.jpg"


function Lawyers() {
    return(
        <center>
        <div className="Lawyer">
            <nav>
            <table>
            <tr>
                <th><Link to="/" id="firmlogo"><img src={PSLlogo} id="firmlogo"></img></Link></th>
                <th><Link to='/Lawyers' className='hip'><h2>Lawyers</h2></Link></th>
                <th><Link to='/Lawsuits' className='hip'><h2>Lawsuits</h2></Link></th>
                <th><Link to='/BecomeaClient' className='hip'><h2>Become a Client</h2></Link></th>
            </tr>
        </table>
        </nav>

        <h2 id="bl">Our Lawyers</h2>
        <h3></h3>
        <div class="grid-container">
            <div class="grid-item">
              <img src={harvey} id="pic1"></img>
              <h3>
                Harvey Specter
              </h3>
              <h4>
                Name Partner
              </h4>
              <p id="abt_harv">Harvey Specter is a corporate attorney whose expertise is ending trials before
               they start. He is also a former Assistant District Attorney who worked for the New York
                County District Attorney's Office and has a case win rate of 100%.</p>
            </div>
            <div class="grid-item">
              <img src={jessica}  id="pic2"></img>
              <h3>
                Jessica Pearson
              </h3>
              <h4>
                Managing Partner
              </h4>
              <p id="abt_jess">
                Jessica Pearson is the managing partner of Pearson, Specter, Litt and an amazing corporate attorney.
                <br/> She also consistently navigates complex legal challenges, delivering unparalleled results and setting new standards for excellence in the field of law.
              </p>
            </div>
            <div class="grid-item">
              <img src={llitt}  id="pic3"></img>
              <h3>
                Louis Litt
              </h3>
              <h4>
                Name Partner
              </h4>
              <p id="abt_litt">
                Louis Litt is a corporate attorney and a financial wizard.
                 His financial expertise is a rare skill that is valuable to every embezzlement and money fraud related case.
                  He also excells at corporate law, mergers and acquisitions, and intellectual property.
              
              </p>
            </div>
            <div class="grid-item">
              <img src={Dscottie}  id="pic4"></img>
              <h3>
                Dana Scott
              </h3>
              <h4>
                Senior Partner
              </h4>
              <p id="abt_scottie">
                Dana Scott is a highly accomplished and tenacious attorney,
                with her unmatched intelligence, razor-sharp analytical skills,
                 and an unwavering commitment to excellence, Dana consistently delivers outstanding results
                  for our clients.        
              </p>
            </div>
            <div class="grid-item">
              <img src={Mross}  id="pic5"></img>
              <h3>
                Mike Ross
              </h3>
              <h4>
                Senior Partner
              </h4>
              <p id="abt_ross">
                Mike Ross, a brilliant legal mind, is an integral member of our team at Pearson, Specter, Litt.
                His unmatched intelligence and photographic memory allow him to excel in complex legal matters.
                 With a keen eye for detail and a genuine passion for justice, Mike consistently delivers exceptional results for our clients.

              
              </p>
            </div>
            <div class="grid-item">
              <img src={Rzane} id="pic6"></img>
              <h3>
                Rachel Zane
              </h3>
              <h4>
                Senior Associate
              </h4>
              <p id="abt_zane">
                Rachel Zane, a dedicated and accomplished attorney is a unique attorney whose paralegal expertise makes her outstanding in case research and analysis.
                With her commitment to excellence, Rachel consistently delivers exceptional legal services.
              </p>
            </div>
            <div class="grid-item">
              <img src={Awilliams} id="pic7"></img>
              <h3>
                Alex Williams
              </h3>
              <h4>
                Senior Partner
              </h4>
              <p id="abt_alex">
                Alex Williams is a seasoned and strategic lawyer;
                 With his extensive experience in complex litigation and corporate law, Alex provides comprehensive legal counsel to our clients,
                  ensuring their interests are protected and their objectives are achieved with utmost professionalism and efficiency.
              
              </p>
            </div>
            <div class="grid-item">
              <img src={Zlawford} id="pic8"></img>
              <h3>
                Zoe Lawford
              </h3>
              <h4>
                Senior Associate
              </h4>
              <p id="abt_zlaw">
                Zoe Lawford, a seasoned senior associate,
                 brings a wealth of legal expertise and a strong track record of success to our legal team at Pearson, Specter, Litt.
                  She also excells at jury picking and case settelment advising.
              </p>
            </div>
            <div class="grid-item">
              <img src={Kbennett} id="pic9"></img>
              <h3>
                Katrina Bennett
              </h3>
              <h4>
                Junior Partner
              </h4>
              <p id="abt_kbennett">
                Katrina Bennett is a highly driven and accomplished attorney,
                 her sharp intellect, strong work ethic and passion for achieving justice ensures our clients receive the highest level of representation and success.
              </p>
            </div>
        </div>
        </div>
        </center>
    );
}

export default Lawyers;