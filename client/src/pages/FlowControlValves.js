import React from "react";
import { Helmet } from "react-helmet";
import ProductNav from "../components/ProductNav";

function FlowControlValves() {
    return (
        <>
            <Helmet>
                <title> TU - Technical Union | Flow Control Valves | Needle Valves </title>

                <meta name="description" content=" Catalog for Flow control valves and needle valves. " />
                <meta name="keywords" content=" flow control valves, needle valves " />
                <meta name="author" content="Edgar Lindo" />

                <meta property="og:title" content=" Technical Union | Flow Control Valves" />
                <meta property="og:description" content="Find Flow Control Valves from TU Technical Union" />
                <meta property="og:image" content="./Images/oppictures/flow-control-valves.png" />
                <meta property="og:url" content="http://www.tu.biz/Products/FlowControlValves" />

            </Helmet>

            <div className="row">
                <div className="col-md-9">
                    <h6 className="product-title-text"> Needle Valves </h6> <br /> 
                    <img src ={require("../assets/images/flow-control-valves.jpg")} className= "product-pic" alt="Needle valve" /> <br />
                    <a href={require("../assets/pdf files/flow-control-valves.pdf")} className="btn btn-info">Download PDF</a> <br /> <br />
                        
                    <table className= "table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th colSpan="5" className="product-title-table-text"> Flow Control Valves </th>
                            </tr>
                
                            <tr className="inside-table-text">
                                <td>Type</td>
                                <td colSpan="2">Connection</td>
                                <td>Rated GPM</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="inside-table-text">
                                <td></td>
                                <td><strong>SAE</strong></td>
                                <td><strong>NPT</strong></td>
                                <td><strong>SAE</strong></td>
                                <td><strong>NPT</strong></td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>Flow Control <br /> without <br /> check valve</td>
                                <td>1/4", 1-1/2"</td>
                                <td>1/4", 1-1/4"</td>
                                <td>5-100</td>
                                <td>5-70</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>Flow Control <br /> with <br /> check valve</td>
                                <td>1/4", 1-1/2"</td>
                                <td>1/4", 1-1/4"</td>
                                <td>5-100</td>
                                <td>5-70</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                </div>
                <ProductNav />
            </div>      
        </>
    );
};

export default FlowControlValves;