import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from './common/Logo';
import Case from './common/Case';
import Contact from './common/Contact';
import Resume from './common/Resume';

import './bootstrap.css';
import './header.css';

import Popover from './Popover';

const Header = ({ siteTitle }) => (
  <header style={{ background: `#fff`, marginBottom: `1.45rem` }}>
    <div className="container py-5 headerStyle" >
      <Link to={'/'}>
        <div style={{ width: '2.1rem' }}>
          <Logo />
        </div>
      </Link>
      <div className="Links">
        <Link to={'/CaseStudy'} className="d-flex linkWrapperCase">
          <div style={{ width: '1.3rem' }}>
            <Case />
          </div>
          <p className="Link">Case Studies</p>
        </Link>
        <a href="/Resume.pdf" download className="d-flex linkWrapperDownload">
          <div style={{ width: '1.6rem' }}>
            <Resume />
          </div>
          <p className="Link">Download Resume</p>
        </a>
        <Link to={'/Contact'} className="d-flex linkWrapperContact">
          <div style={{ width: '1.2rem', marginTop: '3px' }}>
            <Contact />
          </div>
          <p className="Link">Contact me</p>
        </Link>
      </div>
      <Popover />
    </div>
  </header>
)

const styles = ({
  headerStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '4rem',
    paddingRight: '4rem',
  },
  Links: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '60%',
    alignItems: 'center'
  },
  Link: {
    fontSize: '0.8rem',
    marginLeft: '0.55rem',
    marginBottom: 0,
    marginTop: '2px'

  }
})

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Shubham Modi`,
}

export default Header
