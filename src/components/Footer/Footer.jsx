import React from "react";
import "./Footer.css";
import footer from "../../assets/footer.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";

import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import belowfooterlogo from "../../assets/belowfooterlogo.svg";

import svit from '../../assets/svitlogo.png'


function Footer() {
  return (

    <section id="footer">
      <div className="f">
        <div className="footer">
          <div className=" left">
            <img src={footer} />
          </div>
          <div className="right">
            {/* <h1>
              <b> contact us </b>{" "}
            </h1> */}
            <div className="finfo">
              {/* <a href="#" className="flinks">
                {" "}
                <IoLocationSharp className="ficons" />
                Sardar Vallabhai Patel institute of Technology{" "}
              </a>
              <a href="#" className="flinks">
                {" "}
                <IoMdMail className="ficons" />
                PRAKARSH.ORG
              </a>
              <a href="#" className="flinks">
                {" "}
                <AiFillPhone className="ficons" /> 0123456789{" "}
              </a> */}

              <div className="icon mx-auto d-flex align-items-center justify-content-center p-2">
                <a href="https://instagram.com/svitprakarsh?igshid=OGQ2MjdiOTE=">
                  <BsInstagram />
                </a>
                <a href="https://www.youtube.com/@prakarsh6253/videos">
                  <AiOutlineYoutube />
                </a>
                <a href="https://www.linkedin.com/in/placement-cell-svit-vasad-2a8062204/">
                  <AiFillLinkedin />
                </a>
                <a href="https://www.facebook.com/SVIT.Vasad.Official">
                  <AiFillFacebook />
                </a>
              </div>
            </div>
          </div>
          {/* <hr /> */}
        </div>
        <div className="belowhr">
          <div>
            <img src={belowfooterlogo} />
          </div>
        </div>
          
    </div>
</section>
  );
}

export default Footer;
