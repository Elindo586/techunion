import React from "react";
import { Helmet } from "react-helmet";

function Homepage() {

    return (
        <>
            <Helmet>
                <meta name="description" content="Single source for industrial supplies. Hydraulics, Pneumatics, Electrical, Mechanical." id="meta-desc" />
                <meta name="keywords" content="pumps, motors, valves, servo motors, servo valves, filters, accumulators, heat exchangers, industrial supplies." id="meta-keywords" />
                <meta name="author" content="Edgar Lindo" />

                <meta name="facebook-domain-verification" content="fzctnjbrtlybvytmamk8glkng9af7p" />

                <meta property="og:title" content=" Technical Union" id="meta-og-title" />
                <meta property="og:description" content="Industrial Supplies | Exports from USA" id="meta-og-desc" />
                <meta name="image" property="og:image" content="./Images/oppictures/Tubiz contact.png" id="meta-og-image" />
                <meta property="og:url" content="http://www.tu.biz" id="meta-og-url" />

            </Helmet>


            <div className="row">
                <div className="col-md-6">
                    <p className="maintext">
                    <strong> TU – TECHNICAL UNION</strong> is your single source for
                    engineered and standard hydraulic components to meet your hydraulic
                    machine’s technical requirements. Whenever you are working on a new
                    project or an existing system, you need proven technical solutions to
                    give you a competitive edge for improved machine design, better
                    production time, and optimal machine maintenance to maximize your
                    company’s capital investment.
                    </p>
                    <p className="maintext">
                    <strong>TU – TECHNICAL UNION</strong> offers cost-effective technical
                    solutions that you can trust to help you increase efficient
                    productivity, compact system design, and usage control of spare
                    components for your hydraulic machinery.
                    </p>
                    <h4 className="listtittle"><strong>Our Advantages</strong></h4>
                    <ul>
                    <li>Engineer systems.</li>
                    <li>Hydraulic retrofits.</li>
                    <li>Hydraulic machines upgrades.</li>
                    <li>Hydraulic components remanufacture.</li>
                    <li>Alternative new hydraulic components.</li>
                    <li>Standard replacement components.</li>
                    <li>Preventive maintenance programs.</li>
                    <li>Technical Experience.</li>
                    <li>Superior quality.</li>
                    <li>Fast responds.</li>
                    <li>Large inventory.</li>
                    <li>Quick delivery.</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <img
                        src={require("../assets/images/maintenance-1.png")}
                        className="img-fluid"
                        id="maintenance1"
                        alt="maintenance one pic"
                    />
                    <img
                        src={require("../assets/images/oil-analysis2.png")}
                        className="img-fluid"
                        id="oilanalysis2"
                        alt="oil analysis two pic"
                    />
                </div>
            </div>
        </>
    );

};

export default Homepage;