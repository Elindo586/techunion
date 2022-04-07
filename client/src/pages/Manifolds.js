import React from "react";
import { Helmet } from "react-helmet";
import ProductNav from "../components/ProductNav";

function Manifolds() {
    return (
        <>
            <Helmet>
                <title> TU - Technical Union | Hydraulic Manifolds </title>

                <meta name="description" content=" Find our hydraulic manifold catalog " />
                <meta name="keywords" content="hydraulic, manifolds,  " />
                <meta name="author" content="Edgar Lindo" />

                <meta name="facebook-domain-verification" content="fzctnjbrtlybvytmamk8glkng9af7p" />

                <meta property="og:title" content=" Technical Union | Hydraulic Manifolds" />
                <meta property="og:description" content="Find Hydraulic Manifolds from Technical Union" />
                <meta property="og:image" content="./Images/oppictures/manifolds.png" />
                <meta property="og:url" content="http://www.tu.biz/Products/Manifolds" />

            </Helmet>

            <div className="row">
                <div className="col-md-9">
                    <h6 className="product-title-text"> Hydraulic Manifolds </h6> <br /> 
                    <img src ={require("../assets/images/hydraulic-manifolds.png")} className="product-pic" alt="hydraulic-manifolds" /> <br />
                    
                    <div className="centering-btn">
                        <a href={require("../assets/pdf files/d03-manifold.pdf")} className="btn btn-info pdf-btns">D03 PDF</a>
                        <a href={require("../assets/pdf files/d05-manifold.pdf")} className="btn btn-info pdf-btns">D05 PDF</a>
                        <a href={require("../assets/pdf files/d07-manifold.pdf")} className="btn btn-info pdf-btns">D07 PDF</a> 
                        <a href={require("../assets/pdf files/d08-manifold.pdf")} className="btn btn-info pdf-btns">D08 PDF</a> 
                    </div>
                    <br /> <br />
                        
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th colSpan="4" className="product-title-table-text"> Hydraulic Manifolds </th>
                            </tr>
            
                            <tr className="inside-table-text">
                                <td>Size</td>
                                <td>PSI</td>
                                <td>Material</td>
                                <td> Stations</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="inside-table-text">
                                <td>D03</td>
                                <td>3,000</td>
                                <td>Aluminum</td>
                                <td>1-16</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>D03</td>
                                <td>5,000</td>
                                <td>Ductile Iron</td>
                                <td>1-16</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>D05</td>
                                <td>3,000</td>
                                <td>Aluminum</td>
                                <td>1-21</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>D05</td>
                                <td>5,000</td>
                                <td>Ductile Iron</td>
                                <td>1-21</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>D07</td>
                                <td>3,000</td>
                                <td>Aluminum</td>
                                <td>1-8</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>D07</td>
                                <td>5,000</td>
                                <td>Ductile Iron</td>
                                <td>1-8</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>D08</td>
                                <td>3,000</td>
                                <td>Aluminum</td>
                                <td>1-7</td>
                            </tr>

                            <tr className="inside-table-text">
                                <td>D08</td>
                                <td>5,000</td>
                                <td>Ductile Iron</td>
                                <td>1-7</td>
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

export default Manifolds;