import { Link } from "react-router-dom";
import PSLlogo from "../media/PSL_logo.png"
import React, { Component } from 'react';
import { useState, useRef, useEffect } from "react";

function Clients()
    {         
          // Inicijaliziraj stanje iz localStorage-a ili postavi na početno stanje
  const [lawyer, setLawyer] = useState({
    plaintiff: "",
    plaintiffLawyer: "",
    defendant: "",
    defendantLawyer: "",
    case: "",
    verdict: "",
  });

  const [tableData, setTableData] = useState(() => {
    const savedData = localStorage.getItem("tableData");
    return savedData ? JSON.parse(savedData) : [];
  });

  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem("state");
    return savedState
      ? JSON.parse(savedState)
      : {
          plaintiff: "",
          plaintiffLawyer: "",
          defendant: "",
          defendantLawyer: "",
          case: "",
          verdict: "",
        };
  });

  const brojac = useRef(0);
  const [brojac2, setBrojac] = useState(0);

  useEffect(() => {
    brojac.current = brojac.current + 1;
    setBrojac((brojac2) => brojac2 + 1);
  }, [state]);

  useEffect(() => {
    brojac.current = 0;
    setBrojac(0);
  }, []);

  // Spremi stanje u localStorage kad se 'state' ili 'tableData' promijeni
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
    localStorage.setItem("tableData", JSON.stringify(tableData));
  }, [state, tableData]);

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    setState(lawyer);
    setTableData([...tableData, lawyer]);
    setLawyer({
      plaintiff: "",
      plaintiffLawyer: "",
      defendant: "",
      defendantLawyer: "",
      case: "",
      verdict: "",
    });
  }
        return(
        
        <div className="Clients">
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
        <div>
            <center>
            <h2 id="bl"> Become a Client</h2> 
            <h3 id="bl"> Contact us or visit us!</h3>
            </center>
          <form id="BCaCL">
            <fieldset id="fst">
                <center>
            <label for="Name" id="txt">Full Name</label> <br/>
            <input type="text" id="name"placeholder = "Ivan"></input>
            <br/>
            <br/>

            <label for="Surename" id="txt">Surename</label>  <br/>
            <input type="text" id="Surename" placeholder="Vuckovic"></input>
            <br/>
            <br/>

            <label for="age" id="txt">Age</label>  <br/>
            <input type="number" id="age" placeholder="17"></input>
            <br/>
            <br/>

            <label for="lmatt" id="txt">Tell us your legal needs</label> <br/>
            <input type="text" placeholder="litigation,acquisitions, etc." ></input>
            <br/>
            <br/>

            <label for="Lawyer" id="txt">Pick which lawyer you want to contact</label> <br/>
            <select name="Lawyer" id="Odvj">
              <option value="Harvey">Harvey Specter</option>
              <option value="Jessica">Jessica Pearson</option>
              <option value="Louis">Louis Litt</option>
              <option value="Mike">Mike Ross</option>
              <option value="Alex">Alex Williams</option>
              <option value="Rachel">Rachel Zane</option>
              <option value="Dana">Dana Scott</option>
              <option value="Katrina">Katrina Bennett</option>
              <option value="Zoe">Zoe Lawford</option>
            </select>
            <br/>
            <br/>

            <label for="moreabout" id="txt">Tell us more about your legal problem</label>  <br/>
            <textarea name="abtprob" id="abtproblem" cols="30" rows="10" ></textarea>
            <br/>
            <br/>

            <label for="Email" id="txt">Email</label> <br/>
            <input type="email" name="" id="" placeholder="AMcKernon@example.com"></input>
            <br/>
            <br/>

            <input type="reset" value="Reset" id="btn"></input>
            <input type="submit" value="Submit" id="btn"></input>
            </center>
            </fieldset>

            </form>
            </div>
            <div id="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.54161965616!2d-73.97046533034172!3d40.75836301405797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e35f67839f%3A0xfd40f11ca667bff8!2s601%20Lexington%20Avenue%2C%20153%20E%2053rd%20St%2C%20New%20York%2C%20NY%2010022%2C%20Sjedinjene%20Ameri%C4%8Dke%20Dr%C5%BEave!5e0!3m2!1shr!2shr!4v1685956304439!5m2!1shr!2shr"
           width="650" height="515" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" id="mapa"></iframe></div>
            <div>
        <p id="contactus">
            We are situated at 601 Lexington Avenue in New York,
             You can call us on the numbers featured down or by filling out the form and setting
              up an appointment. 
        </p>
        </div>
        {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}

        <div className="unos">
        <fieldset id="dst">
      <form onSubmit={handleSubmit}>
        <h2>Enter case records</h2>
        <div className="formcont">
        <br></br>
        <label>Plaintiff name</label>
        <br></br>
        <input
          required
          type="text"
          value={lawyer.plaintiff}
          onChange={(e) => setLawyer({ ...lawyer, plaintiff: e.target.value })}
        />
        <br></br>
        <br></br>
        <label>Plaintiff's lawyer</label>
        <br></br>
        <input
          required
          type="text"
          value={lawyer.plaintiffLawyer}
          onChange={(e) =>
            setLawyer({ ...lawyer, plaintiffLawyer: e.target.value })
          }
        />
        <br></br>
        <br></br>
        <label>Defendant</label>
        <br></br>
        <input
          required
          type="text"
          value={lawyer.defendant}
          onChange={(e) => setLawyer({ ...lawyer, defendant: e.target.value })}
        />
        <br></br>
        <br></br>
        <label>Defendant's lawyer</label>
        <br></br>
        <input
          required
          type="text"
          value={lawyer.defendantLawyer}
          onChange={(e) =>
            setLawyer({ ...lawyer, defendantLawyer: e.target.value })
          }
        />
        <br></br>
        <br></br>
        <label>Case information</label>
        <br></br>
        <input
          required
          type="text"
          value={lawyer.case}
          onChange={(e) => setLawyer({ ...lawyer, case: e.target.value })}
        />
        <br></br>
        <br></br>
        <label>Verdict</label>
        <br></br>
        <input
          required
          ref={inputRef}
          type="text"
          value={lawyer.verdict}
          onChange={(e) => setLawyer({ ...lawyer, verdict: e.target.value })}
        />
        <br></br>
        <br></br>
        <input type="submit" />
        </div>
      </form>
      <p>
        Plaintiff: {state.plaintiff}
        <br></br>
        Lawyer: {state.plaintiffLawyer}
        <br></br>
        Defendant: {state.defendant}
        <br></br>
        Lawyer: {state.defendantLawyer}
        <br></br>
        Case: {state.case}
        <br></br>
        Verdict: {state.verdict}
        <br></br>
        Number of entries: {brojac.current}
      </p>
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Plaintiff</th>
            <th>Plaintiff's lawyer</th>
            <th>Defendant</th>
            <th>Defendant's lawyer</th>
            <th>Case</th>
            <th>Verdict</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.plaintiff}</td>
              <td>{row.plaintiffLawyer}</td>
              <td>{row.defendant}</td>
              <td>{row.defendantLawyer}</td>
              <td>{row.case}</td>
              <td>{row.verdict}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      </fieldset>
    </div>
        </div>
    );
    };

export default Clients;