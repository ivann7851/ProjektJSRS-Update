import { Link } from "react-router-dom";
import PSLlogo from "../media/PSL_logo.png"

function PSL() {
    return(
        <div>
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
            <center>
            <h2 id="bl">Pearson, Specter, Litt</h2>
          <h3 id="bl">About the firm</h3>
          <br/>
          
          <p id="about_PSL">   
          Welcome to Pearson, Specter, Litt, a premier law firm renowned for its exceptional legal services
           and unwavering commitment to client success. With a distinguished history of representing
            high-profile clients and navigating complex legal challenges, our firm has established itself
             as a trusted and formidable force in the legal industry.
             <br/><br/>
          At Pearson, Specter, Litt, we pride ourselves on our team of accomplished attorneys who possess
           unrivaled expertise across various practice areas.
            Led by our esteemed partners, Harvey Specter, Louis Litt, and Jessica Pearson, our firm combines
             decades of experience, legal acumen, and strategic brilliance to provide unparalleled
              representation to our clients.
              <br/><br/>
          Our dynamic and versatile team offers a wide range of legal services,
            including corporate law, litigation, intellectual property, mergers and acquisitions,
              employment law, and more. Whether you are a multinational corporation,
                an individual seeking legal advice, or an emerging startup,
                  we have the knowledge and resources to navigate the complexities of your legal matters
                    and achieve the best possible outcome.
                    <br/><br/>
          Beyond our legal expertise, we are deeply committed to giving back to the community and advocating
           for positive change. Through pro bono initiatives, charitable contributions,
            and involvement in social justice causes, we strive to make a lasting impact and promote equal
             access to justice.
            <br/><br/>
          Explore our website to learn more about our practice areas, our distinguished team of attorneys,
           and the notable cases we have successfully handled. When you choose Pearson, Specter, Litt,
            you choose excellence, integrity, and a relentless pursuit of justice.
              Contact us today to schedule a consultation and experience the exceptional 
              legal representation you deserve.
          </p>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </center>
        </div>
    );
}

export default PSL;