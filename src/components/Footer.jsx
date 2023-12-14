import React from "react";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { logo } from '../assets';
const Footer = () => {
  return (
    <footer className="mx-auto grid max-w-screen-xl gap-6 px-4 py-8 text-gray-300 lg:grid-cols-3">
      <div>
      <img src={logo} alt='Logo' style={{display:"block", margin:"0 auto", width:"150PX", height:"auto"}} /> 
        <p className="pb-4" style={{textAlign:"center"}}>
        Empower Your Construction Success: Manage, Analyze, Optimize
        </p>

        <div className="flex">
          <form method="GET" className="pr-1 duration-300 hover:scale-110">
            <button formAction="https://www.facebook.com">
              <FaFacebookSquare size={36} />
            </button>
          </form>
          <form method="GET" className="pr-1 duration-300 hover:scale-110">
            <button formAction="https://www.instagram.com">
              <FaInstagramSquare size={36} />
            </button>
          </form>
          <form method="GET" className="pr-1 duration-300 hover:scale-110">
            <button formAction="https://www.twitter.com">
              <FaTwitterSquare size={36} />
            </button>
          </form>
          <form method="GET" className="pr-1 duration-300 hover:scale-110">
            <button formAction="https://www.github.com">
              <FaGithubSquare size={36} />
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-around lg:col-span-2 lg:mt-20">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="footer-page-link">Analytics</li>
            <li className="footer-page-link">Marketing</li>
            <li className="footer-page-link">Pricing</li>
            <li className="footer-page-link">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="footer-page-link">Pricing</li>
            <li className="footer-page-link">Documentation</li>
            <li className="footer-page-link">Guides</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="footer-page-link">About</li>
            <li className="footer-page-link">Blog</li>
            <li className="footer-page-link">Press</li>
            <li className="footer-page-link">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="footer-page-link">Claim</li>
            <li className="footer-page-link">Policy</li>
            <li className="footer-page-link">Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
