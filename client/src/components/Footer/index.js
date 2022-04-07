import React from 'react';

function Footer() {
    
    // automates the year being added in Footer for copyright
    function fullYear() {
        const yearFormat = new Date();
        return yearFormat.getFullYear();
    };

    return (
        <>
            {/* <div className="row">
                <div className="main-footer2">
                    <h6 className="banner-text">
                        Technical Union | Industrial Exports | Pumps | Motors | Valves |
                        Filters | Flowmeters | Servo Valves | Servo Motors | Manifolds |
                        Accumulators | Oil Analysis | General Industrial Supplies..
                    </h6>
                </div>
            </div> */}
            <div className="row">
                <footer className="main-footer">
                <p className="copyright">
                    © {fullYear()} Copyright Technical Union <br />&nbsp;&nbsp; | Developed by
                    Edgar Lindo & <b>
                        <a 
                            href='https://zichkoding.github.io' 
                            target="_blank"
                            rel='noreferrer'
                        >
                            ZichKoding
                        </a></b> |
                </p>
                </footer>
            </div>
        </>
    );
};

export default Footer;