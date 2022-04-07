import React from "react";
import { Link } from "react-router-dom";

function HydraulicFlowMeterForm() {
    return (
        <>
            <div className="col-md-12 bg-light" >
                <p>
                    <strong> Not sure what hydraulic flowmeter to select?</strong> Send us your technical requirements and we will work with you to select the proper hydraulic flowmeter for your application. 
                </p>
        
                <h4 className = "flowmeter-configurator">
                    Flowmeter Quote Configurator
                </h4>
                    
                <form 
                    action ="https://formsubmit.co/info@tu.biz"
                    method="post"
                    encType="multipart/form-data"
                >
                    <h6> 
                        <u> 
                            Flowmeter info: 
                        </u>
                    </h6>
                    
                    <label className="flowmeter-form-labels form-label-style" htmlFor="torque"> GPM: </label>
                    <input type="number" id="torque" className="input-fields" placeholder="gpm" required /><br />
                    
                    <label className="flowmeter-form-labels form-label-style" htmlFor="pressure"> Pressure (psi):</label>
                    <input type="number" id="pressure" className="input-fields" name="pressure" placeholder = "Max Cont. pressure" required /> <br />
                    
                    <label className="flowmeter-form-labels" htmlFor="rpm">Type of fluid </label>
                    <input placeholder="Fluid used" required /><br /> <br />

                    <h6>
                        * Flow Direction Options
                    </h6>

                    <input type="radio" name="flow-direction" defaultChecked /> 
                    <label> Uni-directional </label> &nbsp;
                    
                    <input type="radio" name="flow-direction" />
                    <label> Bi-directional </label><br /> <br />


                    <h6>
                    * Flow Reading Options
                    </h6>
                    
                    <input type="radio" name="reading-direction" defaultChecked /> 
                    <label> Uni-directional</label> &nbsp;

                    <input type="radio" name="reading-direction" />
                    <label> Bi-directional </label><br /><br />


            
                    
                    
                    <label className="flowmeter-labels-final" htmlFor="firstname" >* First Name: </label> 
                    <input type="text" id="firstname" className="input-fields" name="firstname" placeholder = " First Name" required /> <br />
                    
                    <label className="flowmeter-labels-final" htmlFor="lastname">* Last Name: </label>
                    <input type="text" id="lastname" className="input-fields" name="firstname" placeholder = "Last Name" required /> <br />
                    
                    <label  className="flowmeter-labels-final" htmlFor="company">* Company: </label>
                    <input type="text" id="company" className="input-fields" name="company" placeholder = "Your company" /> <br />
                    
                    <label className="flowmeter-labels-final" htmlFor="email"> * E-mail: </label>
                    <input type="email" id="email" className="input-fields" name="email" placeholder = "Your E-mail" required /> <br />
                    
                    <label className="form-display-block" htmlFor="notes"> Notes: </label>
                    
                    <textarea className="form-textarea" type="text" id="notes" name="notes" placeholder = "Include any additional information" /> <br />
                    
                    <input className="form-display-none" type="text" name="_honey" />
                      
                    <Link to="/ThankYou">
                        <input type="submit" name= "submit" value="Submit" />
                    </Link>
                </form>
            </div>
        </>
    );
};

export default HydraulicFlowMeterForm;