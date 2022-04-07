import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Thanks() {
    return (
        <>
            <Helmet>
                <title> TU- Technical Union | Thank you</title>
                
                <meta name="description" content="Thank you page" />
                <meta name="keywords" content="thank you" />
                <meta name="author" content="Edgar Lindo" />
            </Helmet>

            <div class="row">
                <div class="col-md-12">
                    <h6 class="thank-you-text"> Thank you! </h6>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>

                <div class="col-md-12">
                    <h6 class="thank-you-text-2">
                        We will be in contact. <Link to="/"> Go back to main page. </Link>
                    </h6>
                </div>
            </div>
        </>
    );
};

export default Thanks;