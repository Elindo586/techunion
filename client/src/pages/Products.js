import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import HydraulicPumpForm from "../components/HydraulicPumpForm";
import ProductNav from "../components/ProductNav";

function Products() {

    // let metaDesc = document.getElementById('meta-desc').content;
    // metaDesc = 'Find all of our industrial product supply.';

    // let metaKeywords = document.getElementById('meta-keywords').content;
    // metaKeywords = 'pumps, valves, motors, cylinder, filters,';

    // let metaOgTitle = document.getElementById('meta-og-title').content;
    // metaOgTitle = 'Technical Union | Hydraulic Piston Pumps';

    // let metaOgDesc = document.getElementById('meta-og-desc').content;
    // metaOgDesc = 'Hydraulic Piston Pumps';

    // let metaOgImage = document.getElementById('meta-og-image').content;
    // metaOgImage = '/Images/oppictures/piston-pumps.png';

    // let metaOgUrl = document.getElementById('meta-og-url').content;
    // metaOgUrl = 'http://www.tu.biz/Products'

    return (
        <>
            <Helmet>
                <title>TU - Technical Union | Products </title>

                <meta name="description" content=" Find all of our industrial product supply. " />
                <meta name="keywords" content="pumps, valves, motors, cylinder, filters,  " />
                <meta name="author" content="Edgar Lindo" />

                <meta property="og:title" content=" Technical Union | Hydraulic Piston Pumps" />
                <meta property="og:description" content="Hydraulic Piston Pumps" />
                <meta property="og:image" content="./Images/oppictures/piston-pumps.png" />
                <meta property="og:url" content="http://www.tu.biz/Products" />
            </Helmet>

            <div className="row">
                <div className=" col-md-9">
                    <div className="col-md-12">

                        <h6 className="piston-pump"> Variable Displacement piston pumps</h6> <br/> 
                        <img src={require("../assets/images/rexrothpump-1.png")} className= "rexrothpump" alt="piston-pump" /> <br/>
                        <a href={require("../assets/pdf files/a10v-pump-catalog.pdf")} className="btn btn-info">Download PDF</a> <br/> <br/>

                        <table className= "table table-hover table-striped table-bordered">
                            
                            <thead>
                                <tr>
                                    <th colSpan="4" className="a10-table-title">A10V series Pumps</th>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>Displacement</td>
                                    <td>Pressure</td>
                                    <td>Peak Pressure</td>
                                    <td> Speed</td>
                                </tr>
                            </thead>
                                
                            <tbody>
                                <tr className="inside-table-text">
                                    <td>cc / cu/in²</td>
                                    <td>PSI</td>
                                    <td>PSI</td>
                                    <td>RPM</td>
                                </tr>
                                <tr className="inside-table-text"> 
                                    <td>18 / 1.10</td>
                                    <td>4,000</td>
                                    <td>5,000</td>
                                    <td>3,300</td>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>28 / 1.17</td>
                                    <td>4,000</td>
                                    <td>5,000</td>
                                    <td>3,000</td>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>45 / 2.75</td>
                                    <td>4,000</td>
                                    <td>5,000</td>
                                    <td>2,600</td>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>71 / 4.33</td>
                                    <td>4,000</td>
                                    <td>5,000</td>
                                    <td>2,200</td>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>100 / 6.10</td>
                                    <td>4,000</td>
                                    <td>5,000</td>
                                    <td>2,000</td>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>140 / 8.54</td>
                                    <td>4,000</td>
                                    <td>5,000</td>
                                    <td>1,800</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className ="col-md-12">

                        <h6 className="fixed-piston-pump"> Fixed Displacement Radial Piston Pumps</h6> <br/> 
                        <img src={require("../assets/images/radial-piston-pump.png")} className= "fixed-piston-pump-pic" alt="fixed-piston-pump" /> <br/>
                        <a href={require("../assets/pdf files/radial-piston-pumps.pdf")} className="btn btn-info">Download PDF</a> <br/> <br/>

                        <table className= "table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan="14" className="a10-table-title">High Pressure Pumps</th>
                                </tr>
                            

                                <tr className="inside-table-text">
                                    <td>Series</td>
                                    <td>Pistons</td>
                                    <td>0 <br/> psi</td>
                                    <td>100 <br/> psi</td>
                                    <td>1,000 <br/> psi</td>
                                    <td>2,000 <br/> psi</td>
                                    <td>3,000 <br/> psi</td>
                                    <td>4,000 <br/> psi</td>
                                    <td>5,000 <br/> psi</td>
                                    <td>6,000 <br/> psi</td>
                                    <td>7,000 <br/> psi</td>
                                    <td>8,000 <br/> psi</td>
                                    <td>9,000 <br/> psi</td>
                                    <td>10,000 <br/> psi</td>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr className="inside-table-text">
                                    <td colSpan="14" className="pressure-piston-pump-rpm">GPM at 1,800 RPM</td>
                                
                                </tr>
                                <tr className="inside-table-text">
                                    <td>L20</td>
                                    <td>7</td>
                                    <td>1.4</td>
                                    <td></td>
                                    <td>1.35</td>
                                    <td>1.30</td>
                                    <td>1.25</td>
                                    <td>1.22*</td>
                                    <td>1.20*</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>H20</td>
                                    <td>7</td>
                                    <td>1.05</td>
                                    <td></td>
                                    <td>0.98</td>
                                    <td>0.92</td>
                                    <td>0.89</td>
                                    <td>0.86</td>
                                    <td>0.83</td>
                                    <td>0.79</td>
                                    <td>0.75*</td>
                                    <td>0.73*</td>
                                    <td>0.70* </td>
                                    <td>0.67*</td>
                                </tr>
                                <tr >
                                    <td colSpan="14" className="pressure-piston-pump-rpm">GPM at 1,800 RPM</td>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>L80</td>
                                    <td>7</td>
                                    <td>6.10</td>
                                    <td></td>
                                    <td>5.80</td>
                                    <td>5.60</td>
                                    <td>5.40*</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>M80</td>
                                    <td>7</td>
                                    <td>4</td>
                                    <td></td>
                                    <td>3.70</td>
                                    <td>3.50</td>
                                    <td>3.40</td>
                                    <td>3.20*</td>
                                    <td>3.10*</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>H80</td>
                                    <td>7</td>
                                    <td>2.50</td>
                                    <td></td>
                                    <td>2.30</td>
                                    <td>2.20</td>
                                    <td>2.10</td>
                                    <td>2.00</td>
                                    <td>1.90</td>
                                    <td>1.85</td>
                                    <td>1.80*</td>
                                    <td>1.75*</td>
                                    <td>1.70* </td>
                                    <td>1.65*</td>
                                </tr>
                                <tr>
                                    <td colSpan="14" className="pressure-piston-pump-rpm">GPM at 1,200 RPM</td>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>C4</td>
                                    <td>14</td>
                                    <td></td>
                                    <td>6.70</td>
                                    <td>6.50</td>
                                    <td>6.20</td>
                                    <td>6.90</td>
                                    <td>5.70*</td>
                                    <td>5.50*</td>
                                    <td>5.40*</td>
                                    <td></td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>C5</td>
                                    <td>14</td>
                                    <td></td>
                                    <td>8.20</td>
                                    <td>7.80</td>
                                    <td>7.50</td>
                                    <td>7.20</td>
                                    <td>6.90</td>
                                    <td>6.60</td>
                                    <td>6.20*</td>
                                    <td>6.00*</td>
                                    <td>5.60*</td>
                                    <td>5.30*</td>
                                    <td>5.00*</td>
                                </tr>
                                <tr className="inside-table-text">
                                    <td>C11</td>
                                    <td>14</td>
                                    <td></td>
                                    <td>12.80</td>
                                    <td>12.40</td>
                                    <td>12.00</td>
                                    <td>11.50</td>
                                    <td>11.00</td>
                                    <td>10.50</td>
                                    <td>10.10*</td>
                                    <td>9.70*</td>
                                    <td>9.30*</td>
                                    <td>8.90* </td>
                                    <td>8.50*</td>
                                </tr>
                                <tr >
                                    <td colSpan="14" >* intermittent</td>
                                </tr> 
                            </tbody>
                        </table>
                        <br/> <br/>
                    </div>
    
                    <HydraulicPumpForm />
                </div>
                <ProductNav />
            </div>
        </>
    );
};

export default Products;