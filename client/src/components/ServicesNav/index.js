import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ServicesNav() {
    const [pathName, setPathName] = useState();

    useEffect(() => {
        const url = window.location.pathname;
        setPathName(url);
    });

    return (
        <>
            <div className="col-md-3 ">
                <h2 className="nav2title">SERVICES</h2>
                <ul className="nav2">
                    <li>
                        <h5 className="link1" href="">Oil Analysis</h5>
                    </li>

                    <dl>
                        <dt>
                            <Link to="/Services" className={pathName === "/Services" ? "link2 active2" : "link2"}> Laboratory testing  </Link> 
                        </dt>
                    </dl>

                    <li >
                        <h5 className="link1" href="#">Preventive Maintenance</h5>
                        <dl>
                            <dt>
                                <Link to="/Services/PreventiveMaintenancePrograms" className={pathName === "/Services/PreventiveMaintenancePrograms" ? "link2 active2" : "link2"}> Programs  </Link> 
                            </dt>
                        </dl>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ServicesNav;