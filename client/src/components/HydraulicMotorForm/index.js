import React from "react";
import { Link } from "react-router-dom";

function HydraulicMotorForm() {
    return (
        <>
            <div className="col-md-12 bg-light">
                <p>
                <strong> Not sure what hydraulic motor to select?</strong> Send us your technical requirements and we will work with you to select the proper hydraulic motor for your application. 
                </p>
        
                <h4 className = "hydraulicMotor1Configurator">
                    Hydraulic Motor Quote Configurator
                </h4>
                    
                <form 
                action ="https://formsubmit.co/info@tu.biz"
                method="post"
                encType="multipart/form-data"
                >
                    <h6> 
                        <u> 
                            Hydraulic Motor info: 
                        </u>
                    </h6>
                    
                    {/* style="display:inline-block" ADD TO CSS FOR ELEMENT BELOW */}
                    <label className="motor-form-labels form-label-style" htmlFor="torque">* Torque (in/lbs): </label>
                    <input type="number" id="torque" className="input-fields" name="gpmPump1" placeholder = "Torque required" required /><br />
                    
                    {/* style="display:inline-block" ADD TO CSS FOR ELEMENT BELOW */}
                    <label className="motor-form-labels form-label-style" htmlFor="pressure"> * Pressure (psi):</label>
                    <input type="number" id="pressure" className="input-fields" name="pressure" placeholder = "Max Cont. pressure" required /> <br />
                    
                    <label className="motor-form-labels" htmlFor="rpm">* RPM: </label>
                    <input type="number" id="rpm" className="input-fields" name="rpm" placeholder = "Max Cont. RPM" required /><br /> <br />
                                
                    <label className="motor-labels-final" htmlFor="firstname" >* First Name: </label> 
                    <input type="text" id="firstname" className="input-fields" name="firstname" placeholder=" First Name" required /> <br />
                    
                    <label className="motor-labels-final" htmlFor="lastname">* Last Name: </label>
                    <input type="text" id="lastname" className="input-fields" name="firstname" placeholder = "Last Name" required /> <br />
                    
                    <label  className="motor-labels-final"htmlFor="company" >* Company: </label>
                    <input type="text" id="company" className="input-fields" name="company" placeholder = "Your company" /> <br />
                    
                    <label className="motor-labels-final" htmlFor="email"> * E-mail: </label>
                    <input type="email" id="email" className="input-fields" name="email" placeholder = "Your E-mail" required /> <br />
                    
                    <label className="form-display-block" htmlFor="notes"> Notes: </label>
                    <textarea className="form-textarea" type="text" id="notes" name="notes" placeholder="Include any additional information" /> <br />
                    
                    <input className="form-display-none" type="text" name="_honey" />
        
                    <Link to="/ThankYou">
                        <input type="submit" name= "submit" value="Submit" />
                    </Link>
                </form>
            </div>
        </>
    );
};

export default HydraulicMotorForm;