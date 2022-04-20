import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import { Helmet } from "react-helmet";

function Cylinders() {
  const [isActive, setIsActive] = useState([]);
  const [isCylinders, setIsCylinders] = useState([]);
  const [savedCylinders, setSavedCylinders] = useState([]);

  let cylindersList = [];
  // store Cylinders items
  let itemsPerPage = [];
  // store count as an array
  let activepages = [];

  // pagination elements stored
  let paginatedElements = [];
  // activeCylindersElements stored
  let activeCylinders = [];

  let pages;

  let itemStart = 0;
  let itemEnd = 24;

  useEffect(async () => {
    await getCylinders();
    // console.log(cylindersList);
    setSavedCylinders(cylindersList);
    console.log(savedCylinders);

    // // get pages

    for (let i = 1; i <= pages; i++) {
      activepages.push(i);
    }

    // get 25 items
    renderItems();

    // create paginated elements
    getPagination();
  }, []);

  // fetch data from server
  const getCylinders = async () => {
    await fetch("/api/cylinders")
      .then((response) => {
        if (!response.ok) {
          return response.statusText();
        }
        return response.json();
      })
      .then((invDataArr) => {
        cylindersList = invDataArr;
      })
      .catch((error) => console.log(error));
  };

  // return pagination elements
  const getPagination = () => {
    // get pages
    if (activeCylinders.length > 0) {
      pages = Math.ceil(activeCylinders.length / 25);
    } else {
      pages = Math.ceil(cylindersList.length / 25);
    }

    for (let i = 1; i <= pages; i++) {
      paginatedElements.push(
        <Pagination.Item key={i} id={i} onClick={getActiveItems}>
          {i}
        </Pagination.Item>
      );
    }
    setIsActive(paginatedElements);
  };

  // return 25 items according to
  const getActiveItems = () => {
    // capture url
    let pageId = document.activeElement.id;

    if (itemStart === 0) {
      itemEnd = pageId * 25 - 1;
      itemStart = pageId * 25 - 25;
    }

    renderItems();

    itemStart = 0;
    itemEnd = 24;
  };

  const renderItems = () => {
    itemsPerPage = [];
    if (itemsPerPage === isCylinders) {
      setIsCylinders([]);
    }

    // get 25 items
    if (activeCylinders.length > 0) {
      for (let i = itemStart; i <= itemEnd; i++) {
        if (activeCylinders[i]) {
          itemsPerPage.push(activeCylinders[i]);
        } else {
          break;
        }
      }
      setIsCylinders(itemsPerPage);
    } else {
      console.log(cylindersList.length);
      for (let i = itemStart; i <= itemEnd; i++) {
        if (cylindersList[i]) {
          itemsPerPage.push(
            <tr key={`tr${i}`}>
              <td key={`ref${i}`}>{cylindersList[i].cylinder}</td>
              <td key={`desc${i}`}>{cylindersList[i].style}</td>
              <td key={`repl${i}`}>{cylindersList[i].replacement}</td>
            </tr>
          );
        } else {
          break;
        }
      }
      setIsCylinders(itemsPerPage);
    }
  };

  const searchItems = () => {
    let searching = document.activeElement.value;

    searching = searching.toString(searching);
    searching = searching.toLowerCase();
    searching = searching.trim(" ");

    itemsPerPage = [];
    cylindersList = savedCylinders;
    if (searching.length === 0) {
      console.log("nope");
      cylindersList = savedCylinders;
      renderItems();
      getPagination();
    } else {
      for (let i = 0; i <= savedCylinders.length; i++) {
        if (savedCylinders[i]) {
          // searching Reference number
          let refSearch = savedCylinders[i].cylinder;
          refSearch = refSearch.toString(refSearch);
          refSearch = refSearch.toLowerCase(refSearch);

          // searching Reference number
          let descSearch = savedCylinders[i].style;
          descSearch = descSearch.toString(descSearch);
          descSearch = descSearch.toLowerCase(descSearch);

          // searching Reference number
          let replSearch = savedCylinders[i].replacement;
          replSearch = replSearch.toString(replSearch);
          replSearch = replSearch.toLowerCase(replSearch);

          if (
            refSearch.match(searching) ||
            descSearch.match(searching) ||
            replSearch.match(searching)
          ) {
            activeCylinders.push(
              <tr key={`tr${i}`}>
                <td key={`ref${i}`}>{savedCylinders[i].cylinder}</td>
                <td key={`desc${i}`}>{savedCylinders[i].style}</td>
                <td key={`repl${i}`}>{savedCylinders[i].replacement}</td>
              </tr>
            );
          }
        }
      }
      renderItems();
      getPagination();
    }
  };

  return (
    <>
      <Helmet>
        <meta name="Description" content="  " />
        <meta name="keywords" content=" " />
        <meta name="author" content="Edgar Lindo" />

        <meta property="og:title" content=" TU - Technical Union | Cylinders" />
        <meta property="og:Description" content=" from  TU -Technical Union" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
      </Helmet>

      <div className="col-md-12">
        {/* style="margin-top: 50px; margin-bottom: 20px" ADD CSS TO ELEMENT BELOW */}
        <p className="invy-text">
          Here is a quick overview of standard cylinders coming from our
          inventory. If you have any requirements on these cylinders you can
          always <Link to="/ContactUs"> contact us </Link> for a quote request.
        </p>
      </div>
      <div className="col-md-12">
        <input
          type="text"
          id="myInput"
          // onKeyUp="myFunction()"
          onKeyUp={searchItems}
          placeholder="Search for Part Number.."
          title="Type in a name"
        />
        <br />
        <br />

        <table
          className="my-talbe-sort table table-hover table-striped table-bordered"
          id="myTable"
        >
          <thead>
            <tr>
              <th>Reference Number</th>
              <th>Style</th>
              <th>Alternative replacement for:</th>
            </tr>
          </thead>

          <tbody>{isCylinders}</tbody>
        </table>

        <Pagination>{isActive}</Pagination>
      </div>
    </>
  );
}

export default Cylinders;
