import React from "react";
import { Helmet } from "react-helmet";

import HydraulicFlowMeterForm from "../components/HydraulicFlowMeterForm";
import ProductNav from "../components/ProductNav";

function FlowMeters() {
    return (
        <>
            <Helmet>
                <title> TU - Technical Union | Flowmeters </title>

                <meta name="description" content=" Find our catalog for flowmeters " />
                <meta name="keywords" content=" flowmeters , hydraulic" />
                <meta name="author" content="Edgar Lindo" />

                <meta property="og:title" content=" Technical Union | Flowmeters" />
                <meta property="og:description" content="Find flowmeters from Technical Union" />
                <meta property="og:image" content="./Images/oppictures/flowmeters.png" />
                <meta property="og:url" content="http://www.tu.biz/Products/FlowMeters" />
            </Helmet>

            <div className="row">
                <div className=" col-md-9">
                    <h6 className="product-title-text"> Flowmeters</h6> <br /> 
                    <img src ={require("../assets/images/flowmeter.png")} className= "product-pic" alt="flowmeter" />  <br />
                    <a href={require("../assets/pdf files/Simple-Flowmeter-Datasheet.pdf")} className="btn btn-info">Download PDF</a> <br /> <br />
                        
                    <table className= "table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th colSpan="4" className="product-title-table-text">Flowmeters </th>
                            </tr>
            
                            <tr className="inside-table-text">
                                <td>Size</td>
                                <td>PSI</td>
                                <td>Ports<br /> SAE / NPT</td>
                                <td> GPM </td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="inside-table-text">
                                <td>1</td>
                                <td>3,500 (aluminum or brass) <br /> 6,000 (Stainless Steel)</td>
                                <td>#6, #8, #10 <br /> 1/4", 3/8", 1/2"</td>
                                <td> 1-5 <br /> 1-10 <br /> 1-15</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>2</td>
                                <td>3,500 (aluminum or brass) <br /> 6,000 (Stainless Steel)</td>
                                <td>#12, #16<br /> 3/4", 1"</td>
                                <td> 1-10 <br /> 3-15 <br /> 7.5-20 <br /> 5-30</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>3</td>
                                <td>3,500 (aluminum or brass) <br /> 6,000 (Stainless Steel)</td>
                                <td>#20, #24, #32 <br /> 1-1/4", 1-1/2", 2"</td>
                                <td> 5-50 <br /> 5-75 <br /> 10-100</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />        
                    <HydraulicFlowMeterForm />
                </div>
                <ProductNav />
            </div>    
        </>
    );
};

export default FlowMeters;