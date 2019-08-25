import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import '../casestudies.css'

// importing images

import SohailHeader from '../../common/casestudy/Sohail/SohailHeader';
import SohailLogo from '../../common/casestudy/Sohail/SohailLogo';

const index = props => {
    return (
        <div>
            <div
                className="container boxcontainer"
                style={{ marginBottom: '7rem' }}>
                <div className="casestudy-Landing">
                    <div className="header-image" >
                        <SohailHeader />
                    </div>
                    <div className="description">
                        <div className="">
                            <h1>Sohail Minimalist</h1>
                            <p>UI/UX designer from Bangalore.Specialized in User Interface & User Experience Design</p>
                        </div>
                        <div className="text-right">
                            <h1>Client: <span>Sohail Mohammad</span></h1>
                            <p>Role: <span> Frontend and Backend development(Website)</span></p>
                        </div>
                    </div>
                    <div className="casestudy-visit">
                        <a href="https://sohailminimalist.com"><h3>Visit the Website</h3></a>
                        <div className="case-study-logo">
                            <a href="https://sohailminimalist.com"><SohailLogo /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="casestudy-problem">
                <div className="container boxcontainer">
                    <h1>What was required</h1>
                    <p>
                        Development of a minimalist designed personal portfolio, to write blogs and share work experiences.
                        design language to be followed precisely based on the ui and ux designed, with minimal load times between pages
                        and animations.
                    </p>
                    <h1>Problem Statement - Target Audience - My Solution</h1>
                    <p>
                        Deadline was strict as the site had to be done in a weeks time for my client's interview.
                        Site had be developed with perfection in mind managing the design language without outlawing the development rules.<br />
                        Target audience were tech companies and businesses looking for branding and aesthetic design language.<br />
                        I used to Gatsby Js a react library for development of the website, made use of service workers to reduce the load times to achieve smooth transitions and animations.
                        For styling the site I opted for writing css code from scratch and with minimal use of css framework to achieve perfection in design language.
                        For easy management of blogs and work experiences made use of Contentful a content infrastructure.
                    </p>
                    <h1>What was used to do this</h1>
                    <p>
                        Deadline was strict as the site had to be done in a weeks time for my client's interview.
                        Site had be developed with perfection in mind managing the design language without outlawing the development rules.<br />
                        Target audience were tech companies and businesses looking for branding and aesthetic design language.<br />
                        I used to Gatsby Js a react library for development of the website, made use of service workers to reduce the load times to achieve smooth transitions and animations.
                        For styling the site I opted for writing css code from scratch and with minimal use of css framework to achieve perfection in design language.
                        For easy management of blogs and work experiences made use of Contentful a content infrastructure.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default index

