import { Link } from "react-router-dom";
import React, { Component } from 'react';
import PSLlogo from "../media/PSL_logo.png";
import video1 from "../videi/HarveyvTanner.mp4"
import video2 from"../videi/Harvey_v_stemple.mp4"
import video3 from"../videi/Harvey destroys trevor.mp4"
import video4 from"../videi/Harvey Puts Stephen On The Stand.mp4"
import video5 from"../videi/Cahill v PSL.mp4"
import video6 from"../videi/Harvey v malik.mp4"
import Footer from "../Footer";

export  class Lawsuits extends Component{ render()
    { return(
        <center>
        <div className="Lawsuits">
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
            <h2 id="bl">Cases</h2>
        <h3 id="bl">Track lawsuits and articles about them</h3>
                <br/><br/><br/>
            <div class="flex-container">
              <div class="flex-item">

              <video src={video1} width="560" height="315" controls id="vid"/>

                  <h3>Emerson Petroleum v Kenny Verdasco</h3>
                  <p id="caseovi">The Emerson Petroleum v Kenny Verdasco case was a difficult lawsuit
                     in which our client was suing Emerson Petroleum for exposure to radiation
                     from the unsecure battery plant. Even though Emerson tried to cover up the truth by
                     making it seem to be kennys fault, Our great attorneys Harvey Specter and Mike Ross made
                     sure the truth would be uncovered and the ones at fault are punished.
                    </p>
              </div>
              <div class="flex-item">

              <video src={video2} width="560" height="315" controls  id="vid"/>

                  <h3>Janus Tech v AYZ technologies</h3>
                  <p id="caseovi">
                    Janus Tech v AYZ technologies was a difficult lawsuit in which Eliott Stemple,
                     an attorney who went in the same class as Harvey Specter,
                      intentionally sued AYZ for patent infringement so he could face off with Harvey again.
                      Not only had Harvey Specter and Mike Ross won but also were the first ones who made
                       a Fortune 500 company admit wrongdoing (they wanted to get AYZ processor gluing technology)
                  </p>
              </div>
              <div class="flex-item">

              <video src={video3} width="560" height="315" controls  id="vid"/>

                  <h3>United States vs Mike Ross</h3>
                  <p id="caseovi">Just as he was on his way to his new office Mike Ross gets arrested for conspiracy to commit fraud
                     by U.S. Attorney's Office, Mike has to fight the charges on its merits and find who made
                      the allegations while fighting in the court with Harvey Specter. After a five months long trial 
                      the verdict comes as Not Guilty because the U.S. Assistant District Attorney Anita Gibbs didn't make
                       her case and Mike gets exonorated.  </p>
              </div>
              <div class="flex-item">
                    
              <video src={video4} width="560" height="315" controls  id="vid"/>

                  <h3>Ava Hessington murder trial</h3>
                  <p id="caseovi">
                    As Jessica Pearson merges with Edward Darby
                     head of Darby International Person Specter for short time became Pearson Darby Specter.
                      But immediately after merging Darby wants Harvey to defend his friend Ava Hessington
                       against bribery charges. For personal reasons Ava plead guilty to the charges not
                        knowing that they are going to be used against her for a murder trial. Even though
                         trial was long and they had many difficulties Harvey and Mike proved that Ava
                          didn't order to kill people, but another senior partner from Darby International.
                  </p>
              </div>
              <div class="flex-item">

              <video src={video5} width="560" height="315" controls  id="vid"/>

                  <h3>SEC v Pearson, Specter, Litt</h3>
                  <p id="caseovi">
                    After Mike Ross left to be an investment banker and came back to Pearson Specter
                     he and Harvey get accoused of collusion by SEC, but after a long back and forth
                      trial battle an attorney from SEC Sean Cahill responsible for handling the lawsuit
                       against Pearson Specter is shown the truth by Harvey, Mike and Louis.
                        They showed him that his boss, head of SEC Eric Woodall was colluding with Charles Forstman,
                         a known buisness criminal. Sean dropped the charges against Pearson Specter Litt
                         and with help of Harvey and Mike they got Eric Woodall behind bars with Charles Forstman.
                  </p>
              </div>
              <div class="flex-item">

              <video src={video6} width="560" height="315" controls  id="vid"/>

                  <h3>Harvey Specter V Andrew Malik</h3>
                  <p id="caseovi">
                    Two years after Mike Ross's trial Harvey Specter and Sean Cahill get accoused
                     of working together to sue William Sutter of insider information trading while
                      Harvey Specter was defending him. After Malik played dirty trics they had to find
                       a way to beat him. After many endless nights searching for evidence they found out
                        that Sutter had actually died and the Lawsuit was a conspiracy between Andrew Malik and
                         Charles Forstman who wanted to falsely accouse Harvey just to get revenge on him
                          for not working with him but against him.
                  </p>
                  <br/><br/><br/>
              </div>
                  </div>
        </div>
        </center>
    );
}
}
export default Lawsuits;