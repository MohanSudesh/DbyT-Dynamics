import React from "react";

export function Contact() {
  return (
    <div id="contact" className="st">
      <footer id="footer">
        <section>
          <h2>Contact Us</h2>
          <dl className="alt">
            <dt>Address:</dt>
            <dd> IITM, Chennai</dd>
            <dt>Phone:</dt>
            <dd>+91-7358-324-216</dd>
            <dt>Fax:</dt>
            <dd>+91-7358-324-216 </dd>
            <dt>Email:</dt>
            <dd>
              <a href="#"> DbyT@gmail.com</a>
            </dd>
          </dl>

          <ul className="icons">
            <li>
              <a href="#" className="icon brands fa-twitter alt">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-facebook-f alt">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-instagram alt">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-github alt">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-dribbble alt">
                <span className="label">Dribbble</span>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>From the Blog</h2>
          <h5> Blog Post Title</h5>
          <h5>Posted by Admin on 00.00.0000</h5>

          <p className="aa">
            <br></br>
            Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean
            elit intesque sed facilispede estibulum.
          </p>
        </section>
      </footer>
    </div>
  );
}
