import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function ContactUs() {
    return (
        <>
            <Helmet>
                <meta name="description" content=" Feel free to contact Technical Union " />
                <meta name="keywords" content=" Contact, page " />
                <meta name="author" content="Edgar Lindo" />

                <meta property="og:title" content=" Technical Union" />
                <meta property="og:description" content="Contact TU Technical Union" />
                <meta property="og:image" content="http://www.tu.biz/Images/oppictures/Tubiz contact.png" />
                <meta property="og:url" content="http://www.tu.biz/ContactUs" />
            </Helmet>

            <div className="row">
                <div className="col-md-12">
                    <p className="contactus">
                        <strong>CONTACT US</strong>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="ratio ratio-21x9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376620.65888018865!2d-83.65734297763709!3d42.48413467775062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ae2f8c7e3c7f%3A0x1978ab227e003bbc!2sFarmington%20Hills%2C%20MI!5e0!3m2!1sen!2sus!4v1640206161066!5m2!1sen!2sus"
                            allowfullscreen=""
                            loading="lazy"
                            className="contact-iframe"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 bg-light">
                    <h4 className="get-in-touch">Get in touch with us.</h4>
                    <form
                        action="https://formsubmit.co/info@tu.biz"
                        method="post"
                        enctype="multipart/form-data"
                    >
                        <input
                            type="hidden"
                            name="_next"
                            // value="http://www.tu.biz/thankyou.html"
                        />

                        <label for="firstname" className="form-label">* Name: </label>
                        <input
                            className="form-control"
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder=" Your Name"
                            required=""
                        />
                        <br />

                        <label for="company" className="form-label"> Company: </label>
                        <input
                            className="form-control"
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Your company"
                        />
                        <br />

                        <label for="email" className="form-label"> * E-mail: </label>
                        <input
                            className="form-control"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your E-mail"
                            required=""
                        />
                        <br />

                        <label for="country" className="form-label"> * Country: </label>
                        <input
                            className="form-control"
                            type="text"
                            id="country"
                            name="country"
                            placeholder="Your Country"
                            required=""
                        />
                        <br />

                        <label for="notes"> * Your Message: </label>

                        <textarea
                            className="form-control"
                            type="text"
                            id="notes"
                            name="notes"
                            placeholder="Include any additional information"
                            rows="5"
                            required=""
                        >
                        </textarea>
                        <br />

                        <input className="contact-your-message-input" type="text" name="_honey" />
                        <br />
                        <Link to="/ThankYou">
                            <input
                                type="submit"
                                name="submit"
                                value="Submit"
                                className="btn btn-primary"
                            />
                        </Link>
                    </form>
                </div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-3">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-telephone-fill"
                            viewBox="0 0 16 16"
                            >
                            <path
                                fill-rule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                            />
                            </svg>
                        </div>
                
                        <div className="col-9">
                            <p>
                                <strong>PHONE:</strong> <br />
                                +1-586-221-3095
                            </p>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="currentColor"
                                className="bi bi-envelope-fill"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                                />
                            </svg>
                        </div>
                    
                        <div className="col-9">
                            <strong>EMAIL:</strong> <br />
                            info@tu.biz
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="currentColor"
                                className="bi bi-compass-fill"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"
                                />
                            </svg>
                        </div>
                    
                        <div className="col-9">
                            <strong>ADDRESS:</strong> <br />
                            Technical Union <br />
                            Farmington Hills, MI 48334 <br />
                            USA <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;