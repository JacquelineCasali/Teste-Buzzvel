// components/Footer.tsx
import { RxAccessibility } from "react-icons/rx";
import "./Footer.css";
import { FaArrowRight, FaEuroSign } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import Logo from "../../assets/images/Links.png";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={Logo} alt="logo" className="footer-logo" />

        <nav aria-label="Footer navigation" className="footer-nav">
          {[
            {
              title: "Product",
              links: ["Pricing", "Overview", "Browse", "Accessibility"],
            },
            {
              title: "Solutions",
              links: ["Brainstorming", "Ideation", "Wireframing", "Research"],
            },
            {
              title: "Resources",
              links: ["Help Center", "Blog", "Tutorials", "FAQs"],
            },
            {
              title: "Support",
              links: [
                "Contact Us",
                "Developers",
                "Documentation",
                "Integrations",
              ],
            },
            {
              title: "Company",
              links: ["About", "Press", "Events", "Request Demo"],
            },
          ].map((section) => (
            <div className="footer-columns" key={section.title}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li
                  className="li" key={link}>
                    <Link
                    className="a" to="#">
                      {link}
                      {link === "Request Demo" && (
                        <FaArrowRight
                          size={14}
                          color="#E2E8F0"
                          style={{ marginLeft: "6px" }}
                        />
                      )}
                      {link === "Accessibility" && (
                        <span className="beta">BETA</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <span>uteach © 2023. All rights reserved.</span>
        <div className="footer-controls">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Contact</span>
          <span>
            <CiGlobe size={24} /> EN
          </span>
          <span>
            <FaEuroSign size={24} /> EUR
          </span>
          <span>
            <RxAccessibility size={24} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div className="footer-columns">
//   <h4>Product</h4>
//   <ul>
//     <li>Pricing</li>
//     <li>Overview</li>
//     <li>Browse</li>
//     <li>
//       Accessibility <span className="beta">BETA</span>
//     </li>
//   </ul>
// </div>

// <div className="footer-columns">
//   <h4>Solutions</h4>
//   <ul>
//     <li>Brainstorming</li>
//     <li>Ideation</li>
//     <li>Wireframing</li>
//     <li>Research</li>
//   </ul>
// </div>

// <div className="footer-columns">
//   <h4>Resources</h4>
//   <ul>
//     <li>Help Center</li>
//     <li>Blog</li>
//     <li>Tutorials</li>
//     <li>FAQs</li>
//   </ul>
// </div>

// <div className="footer-columns">
//   <h4>Support</h4>
//   <ul>
//     <li>Contact Us</li>
//     <li>Developers</li>
//     <li>Documentation</li>
//     <li>Integrations</li>
//   </ul>
// </div>

// <div className="footer-columns">
//   <h4>Company</h4>
//   <ul>
//     <li>About</li>
//     <li>Press</li>
//     <li>Events</li>
//     <li >Request Demo

//       <FaArrowRight
//               color="#E2E8F0"
//               size={14}

//               />
//     </li>
//   </ul>
// </div>
