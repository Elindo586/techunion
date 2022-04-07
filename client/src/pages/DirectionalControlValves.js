import React from "react";
import { Helmet } from "react-helmet";
import ProductNav from "../components/ProductNav";

function DirectionalControlValves() {
    return (
        <>
            <Helmet>
                <title> TU - Technical Union | Hydraulic Directional Control Valves </title>

                <meta name="description" content=" Find our catalog for directional control valves for hydraulics " />
                <meta name="keywords" content=" directional control valves" />
                <meta name="author" content="Edgar Lindo" />

                <meta property="og:title" content=" Technical Union | Directional Control Valves" />
                <meta property="og:description" content="Find Directional Control Valves from TU Technical Union" />
                <meta property="og:image" content="./Images/oppictures/directional-control-valves.png" />
                <meta property="og:url" content="http://www.tu.biz/Products/DirectionalControlValves" />
            </Helmet>

            <div className="row">
                <div className="col-md-9">
                    <h6 className="product-title-text"> Directional Control Valves</h6> <br /> 
                    <img src={require("../assets/images/directional-control-valves.png")} className="product-pic" alt="directional-control-valves" /> <br />
                    <a href={require("../assets/pdf files/directional-control-valves.pdf")} className="btn btn-info">Download PDF</a> <br /> <br />
                        
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th colSpan="4" className="product-title-table-text"> Directional Control Valves </th>
                            </tr>
                
                            <tr className="inside-table-text">
                                <td>Size</td>
                                <td colSpan="2">Pressure (psi)</td>
                                <td> GPM </td>
                            </tr>
                        </thead>            

                        <tbody>
                            <tr className="inside-table-text">
                                <td></td>
                                <td><strong>P-A-B</strong></td>
                                <td><strong>Tank</strong></td>
                                <td></td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>NG6 / D03</td>
                                <td>4,567</td>
                                <td>2,300</td>
                                <td>21</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>NG10 / D05</td>
                                <td>4,567</td>
                                <td>2,300</td>
                                <td>32</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ProductNav />
            </div>
        </>
    );
};

export default DirectionalControlValves;