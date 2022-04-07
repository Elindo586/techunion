import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductNav() {
    const [pathName, setPathName] = useState();

    useEffect(() => {
        const url = window.location.pathname;
        setPathName(url);
    });



    return (
        <div className=" col-md-3">
            <h3 className="nav2title">PRODUCTS</h3>
            <ul className="nav2">
                <li>
                    <h5 className="link1" href="#">Pumps</h5>
                    <dl>
                        <dt>
                            {/* Might need to useState on which link is active */}
                            <Link to="/Products" className={pathName === "/Products" ? "link2 active2" : "link2"} > Piston Pumps  </Link> 
                        </dt>
                        <dt>
                            <Link to="/Products/VanePumps" className={pathName === "/Products/VanePumps" ? "link2 active2" : "link2"}  href="/Products/vanepumps.html" > Vane Pumps </Link> 
                        </dt>
                        <dt>
                            <Link to="/Products/GearPumps" className={pathName === "/Products/GearPumps" ? "link2 active2" : "link2"} > Gear Pumps </Link> 
                        </dt>
                    </dl>
                </li>
    
                <li >
                    <h5 className="link1" href="#">Motors</h5>
                    <dl>
                        <dt>
                            <Link to="/Products/GerolerMotors" className={pathName === "/Products/GerolerMotors" ? "link2 active2" : "link2"}> Geroler Motors  </Link> 
                        </dt>
                        <dt>
                            <Link to="/Products/VaneMotors" className={pathName === "/Products/VaneMotors" ? "link2 active2" : "link2"}> Vane Motors </Link> 
                        </dt>
                        
                    </dl>
                </li>
                <li >
                    <dl>
                        <h5 className="link1"  href="#">Flowmeters</h5>
                        <dt>
                            <Link to="/Products/FlowMeters" className={pathName === "/Products/FlowMeters" ? "link2 active2" : "link2"}> Flowmeters  </Link> 
                        </dt>
                    </dl>
                </li>
                <li >
                    <h5 className="link1" href="#">Valves</h5>
                    <dl>
                        <dt>
                            <Link to="/Products/DirectionalControlValves" className={pathName === "/Products/DirectionalControlValves" ? "link2 active2" : "link2"}> Directional Control  </Link> 
                        </dt>
                        <dt>
                            <Link to="/Products/FlowControlValves" className={pathName === "/Products/FlowControlValves" ? "link2 active2" : "link2"} > Flow Control </Link> 
                        </dt>
                    </dl>
                </li>
                <li>
                    <h5 className="link1"> Manifolds</h5>
                    <dl>
                        <dt>
                            <Link to="/Products/Manifolds" className={pathName === "/Products/Manifolds" ? "link2 active2" : "link2"}> Manifolds</Link>
                        </dt>
                    </dl>
                </li>
            </ul>
        </div>
    );
};

export default ProductNav;