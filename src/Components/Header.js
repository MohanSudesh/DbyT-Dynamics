import React from "react";

export default function Header() {
  return (
    <div>
      <nav id="f">
        <ul>
          <li className="left">
            <img src="images\color-fill-2.png" alt="DbyT Dynamics" />
          </li>
          <li className="right">
            <a href="#" className="icon brands fa-twitter alt">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li className="right1">
            <a
              href="https://www.facebook.com/dbytdynamics/"
              className="icon brands fa-facebook alt"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li className="right2">
            <a href="#" className="icon brands fa-instagram alt">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li className="right3">
            <a
              href="https://www.linkedin.com/company/dbyt-dynamics"
              className="icon brands fa-linkedin alt"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li className="right4">
            <a href="#" className="icon brands fa-youtube alt">
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
