import React from "react";

export default function Header() {
  return (
    <div>
      <nav id="f">
        <div class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <ul className="left">
          <li>
            <img src="images\color-fill-2.png" alt="DbyT Dynamics" />
          </li>
        </ul>
        <ul className="right">
          <li>
            <a href="#" className="icon brands fa-twitter alt" target="_blank">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/dbytdynamics/"
              className="icon brands fa-facebook alt"
              target="_blank"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="icon brands fa-instagram alt"
              target="_blank"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/dbyt-dynamics"
              target="_blank"
              className="icon brands fa-linkedin alt"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-youtube alt" target="_blank">
              <span className="label">Dribbble</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    // <div id="a" className="sudesh2">
    //   {/* <header id="header" className="alt"> */}
    //   {/* <h2>DbyT Dynamics</h2> */}
    //   <div className="image-wrapper">
    //     <img src="images\color-fill-2.png" alt="DbyT Dynamics" />
    //   </div>

    //   <ul className="icons icons1">
    //     <li>
    //       <a href="#" className="icon brands fa-twitter alt">
    //         <span className="label">Twitter</span>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#">
    //         <i className="fab fa-facebook-square"></i>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" className="icon brands fa-instagram alt">
    //         <span className="label">Instagram</span>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" className="icon brands fa-github alt">
    //         <span className="label">GitHub</span>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" className="icon brands fa-dribbble alt">
    //         <span className="label">Dribbble</span>
    //       </a>
    //     </li>
    //   </ul>
    //   {/* </header> */}
    // </div>
  );
}
