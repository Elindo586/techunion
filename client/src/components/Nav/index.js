import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function TuBizNav() {
  const [isPath, setIsPath] = useState();


  useEffect(() => {
    title();
  }, [isPath]);

  const show = () =>{
    let drop = document.getElementById("navbarTogglerDemo02");

    if(drop.classList.value === 'navbar-collapse collapse') {
      drop.classList.value  = 'navbar-collapse collapse show';
    } else {
      drop.classList.value  = 'navbar-collapse collapse';
    }
  };

  const title = () => {
    let findTitle = window.location.pathname;
    setIsPath(findTitle);
    // document.title = `TU - Technical Union | ${findTitle}`;
    switch(findTitle) {
      case '/':
        document.title = 'TU - Technical Union | Home';
        break;
      case '/Products':
        document.title = 'TU - Technical Union | Products';
        break;
      case '/Services':
        document.title = 'TU - Technical Union | Services';
        break;
      case '/Inventory':
        document.title = 'TU - Technical Union | Inventory';
        break;
      case '/Formulas':
        document.title = 'TU - Technical Union | Formulas';
        break;
      case '/Interactive':
        document.title = 'TU - Technical Union | Interactive';
        break;
      case '/ContactUs':
        document.title = 'TU - Technical Union | Contact Us';
        break;
      default:
        console.log('This is not a part of this website.');
    }
  };
    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark" onClick={title}>

          <Link to="/" className="navbar-brand" onClick={title}> TECHNICAL UNION</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={show}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link" onClick={title}>| Home</Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="/Products/products.html">| Products</a> */}
                <Link to="/Products" className="nav-link" onClick={title}>| Products</Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="/Services/Services.html">| Services</a> */}
                <Link to="/Services" className="nav-link" onClick={title}>| Services</Link>
              </li>

              <li className="nav-item">
                <Link to="/Inventory" className="nav-link" href="/Inventory">| Inventory </Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="formulas.html">| Formulas</a> */}
                <Link to="/Formulas" className="nav-link" onClick={title}>| Formulas</Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="Interactive.html">| Interactive</a> */}
                <Link to="/Interactive" className="nav-link" onClick={title}>| Interactive</Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="contactus.html">| Contact Us</a> */}
                <Link to="/ContactUs" className="nav-link" onClick={title}>| Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
};

export default TuBizNav;