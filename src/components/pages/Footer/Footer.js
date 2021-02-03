import React from 'react';
import './Footer.css';
import {
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Footer() {
    return(
        <div className='Footer'>
              <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Product  </h2>
            <Link to='/sign-up'>Subscription Management</Link>
            <Link to='/'>Recurring Billing and Invoicing </Link>
            <Link to='/'>Recurring Payments</Link>
            <Link to='/'>Accounting and Taxes</Link>
            <Link to='/'>SaaS Reporting</Link>
            <Link to='/'>Enterprise Billing</Link>
            <Link to='/'>Integrations</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Help & Support</h2>
            <Link to='/Security'>Security</Link>
            <Link to='/FAQs'>FAQs</Link>
            <Link to='/Status'>Status</Link>
            <Link to='/ProductDocumentation'>Product Documentation</Link>
            <Link to='/APIDocumentation'>API Documentation</Link>
            <Link to='/SupportedPaymentGateways'>Supported Payment Gateways</Link>
            <Link to='/Sitemap'>Sitemap</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2> Resources</h2>
            <Link to='/Blog'>Blog</Link>
            <Link to='/ComparePaymentGateways'>Compare Payment Gateways</Link>
            <Link to='/TacklingPaymentFailures'>Tackling Payment Failures</Link>
            <Link to='/EnterpriseBillingGuide'>Enterprise Billing Guide</Link>
            <Link to='/Webinars'>Webinars</Link>
            <Link to='/Glossaries'>Glossaries</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Company</h2>
            <Link to='/customers'>Customers</Link>
            <Link to='/patners'>Partners</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/press'>Press</Link>
            <Link to='/terms'>Terms</Link>
            <Link to='/privacy'>Privacy</Link>
          </div>
        </div>
      </div>    
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
                <img src='https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg' alt='' />
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              class='social-icon-link Linkedin'
              
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>

        </div>

    )}
export default Footer;