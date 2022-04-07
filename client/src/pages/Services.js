import React from "react";
import { Helmet } from "react-helmet";

import ServicesNav from "../components/ServicesNav";

function Services() {
    return (
        <>
            <Helmet>
                <title> TU - Technical Union | Services </title>

                <meta name="description" content=" Technical Union services includes oil analysis, preventive maintenance programs, purchasing department, etc.  " />
                <meta name="keywords" content=" industrial services, purchasing, oil, analysis" />
                <meta name="author" content="Edgar Lindo" />

                <meta property="og:title" content=" Technical Union | Tribology Services" />
                <meta property="og:description" content="We provide tribology fluid analysis." />
                <meta property="og:image" content="./Images/oppictures/tribology.png" />
                <meta property="og:url" content="http://www.tu.biz/Services" />

            </Helmet>

            <div className="row"> 
                <div className= "col-md-9">
                    <div className="row">
                        <div className="col-md-12">
        
                            <img src={require("../assets/images/oil-analysis2.png")} className="oil-analysis2" />
                            <p className ="oil-analysis-text">
                                As a pro-active maintenance practice, oil analysis is crucial to detect problems within your machinery before a problem becomes bigger and more expensive issue to deal in your plant. <br /> <br />

                                By knowing and monitoring the type of contamination and / or actual working conditions of your fluids, it is possible to pin point the source of possible problems and take proper actions to correct an unwanted situation before it becomes a costly production issue. <br /> <br />

                                We provide a full range of oil analysis services to monitor your fluids working conditions. 
                            </p>
                            <br /> <br />
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col-md-6"> 
                            <p>
        
                                Analytical Ferrography <br />
                                Boiling Point<br />
                                Chip Analysis<br />
                                Cloud Point<br />
                                Color, Odor, Clarity, Precipitate, Foam (Coolant)<br />
                                Color, Odor, Clarity, Precipitate, Foam (Oil & Fuel)<br />
                                Conductivity of Coolant<br />
                                Coolant<br />
                                Copper Corrosion <br />
                                Crackle Test <br />
                                Density (Fuel or Coolant) <br />
                                Diesel exhaust fluid <br />
                                Direct Reading <br />
                                Distillation (Fuel) <br />
                                Distillation (Oil) <br />
                                Dropping Point of Lubricating Grease <br />
                                Fire Point Open Cup <br />
                                Flash Point Open Cup <br />
                                Flash Point Pensky-Martens Closed Cup <br />
                                Fourier Transform Infrared Analysis <br />
                                Fourier Transform Infrared Analysis <br />
                                Freezing Point <br />
                                Fuel Cetane Index <br />
                                Fuel Dilution <br />
                                Gas Chromatography Analysis (Biofuel) <br />
                                Gas Chromatography Analysis (Fuel) <br />
                                Gas Chromatography Analysis (Glycol) <br />
                                Glycol Percentage (Coolant) <br />
                                Glycol Test (Oil) <br />
                                Gravimetric Analysis <br />
                                Grease
                            </p>
                        </div>
                        <div className="col-md-6"> 
                            <p>
                                ICP Spectrometric Analysis <br />
                                ICP Spectrometric Analysis (Coolant) <br />
                                ICP Spectrometric Analysis (Fuel)<br />
                                ICP Spectrometric Analysis (Grease) <br />
                                ICP Spectrometric Analysis (Turboprops) <br />
                                Ion Chromatography <br />
                                Karl Fischer Water Test <br /> <br /> <br />
                                Particle Counting <br />
                                Particle Counting (Fuel) <br />
                                Particle Quantifier Index <br />
                                Patch Test <br />
                                Pentane Insoluble <br />
                                pH Measurement <br />
                                Pour Point <br />
                                Quantitative Spectrophotometric Analysis <br />
                                RULER® <br />
                                Seta Flash Point Closed-Cup <br />
                                Sulphated Ash <br />
                                Total Acid Number <br />
                                Total Base Number <br />
                                Total Dissolved Solids <br />
                                Varnish <br />
                                Viscosity 100° C <br />
                                Viscosity 40° C <br />
                                Viscosity Index <br />
                                Water and Sediments <br />
                            </p>
                        </div>
                    </div>
                </div>
                <ServicesNav />
            </div>
        </>
    );
};

export default Services;