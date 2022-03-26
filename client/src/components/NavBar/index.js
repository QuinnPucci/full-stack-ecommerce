import React from "react";

function navBar() {
  const navLists = [
    {
      navLong: "aboutNav",
      navShort: "about",
      mLValue: 80,
    },
    {
      navLong: "portfolioNav",
      navShort: "portfolio",
      mLValue: 79,
    },
    {
      navLong: "resumeNav",
      navShort: "resume",
      mLValue: 78,
    },
    {
      navLong: "contactNav",
      navShort: "contact",
      mLValue: 77,
    },
  ];

  function showComponent(e) {
    let navId = e.target.id;
    let navNormal = e.target.innerText;
    let navName = navNormal.toLowerCase();

    for (let i = 0; i < navLists.length; ++i) {
      document.getElementById(navLists[i].navLong).classList.add("inactive");
      let className = document.getElementById(navLists[i].navLong).className;
      if (className.includes("active")) {
        document.getElementById(navLists[i].navLong).classList.remove("active");
        document
          .getElementById(navLists[i].navShort)
          .setAttribute(
            "style",
            "margin-left: " + navLists[i].mLValue + "%; max-height: 75vh;"
          );
      } else if (className === "") {
        console.log("hello");
      }
    }
    let nav = document.querySelector("#" + navId);
    let page = document.querySelector("#" + navName);
    page.setAttribute("style", "margin-left: 0%;");
    nav.classList.remove("inactive");
    nav.classList.add("active");
  }

  return (
    <header>
      <ul>
        <li>
          <span id="aboutNav" onClick={showComponent} className="active">
            About
          </span>
        </li>
        <li>
          <span id="portfolioNav" onClick={showComponent}>
            My Portfolio
          </span>
        </li>
        <li>
          <span id="ProductNav" onClick={showComponent}>
            Product
          </span>
        </li>
        <li>
          <span id="contactNav" onClick={showComponent}>
            Contact Us
          </span>
        </li>
      </ul>
    </header>
  );
}

export default Nav;