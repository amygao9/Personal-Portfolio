import React from "react";
import "./footer.style.css";
import { MdEmail } from "react-icons/md";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const FooterPage = () => {
  return (
    <div class="body">
      <footer class="footer footer-info">
      <strong>&nbsp; Contact Me</strong>
          <div >
          
          <a  href = {'mailto:amyy.gao@mail.utoronto.ca'} > <MdEmail class = "material-icons md-dark" /> </a>
          <a  href = {'https://www.linkedin.com/in/agao/'} > <AiFillLinkedin class = "material-icons md-dark"/> </a>
          <a  href = {'https://github.com/amygaoo'} > <AiFillGithub class = "material-icons md-dark"/> </a> 
            
          </div>
      <div style = {{fontSize: '15px', color:"grey"}}>Made By Amy Gao &copy; 2021</div>
    </footer>
    

    </div>
  );
}

export default FooterPage;