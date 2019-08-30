import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"


import '../casestudies.css'
import Fade from 'react-reveal/Fade';

// importing images
import SohailWork from '../../common/casestudy/Sohail/SohailWork';
import EducrateWork from '../../common/casestudy/Educrate/EducrateWork';


import NbaHeader from '../../common/casestudy/Nba/NbaHeader';
import NbaHome from '../../common/casestudy/Nba/NbaHome';
import NbaMatch from '../../common/casestudy/Nba/NbaMatch';
import NbaPlayer from '../../common/casestudy/Nba/NbaPlayer';
import NbaArticleScreen from '../../common/casestudy/Nba/NbaArticleScreen';
import NbaHomeScreen from '../../common/casestudy/Nba/NbaHomeScreen';
import NbaIndividualScore from '../../common/casestudy/Nba/NbaIndividualScore';
import NbaMatchScreen from '../../common/casestudy/Nba/NbaMatchScreen';
import NbaNewsScreen from '../../common/casestudy/Nba/NbaNewsScreen';
import NbaVideoScreen from '../../common/casestudy/Nba/NbaVideoScreen';


// importing tech stack
import Kitten from '../../common/Kitten';
import Reactjs from '../../common/Reactjs';
import Firebase from '../../common/Firebase';
import Redux from '../../common/Redux';

const index = props => {
    return (
        <div>
            <div
                className="container boxcontainer"
                style={{ marginBottom: '7rem' }}>
                <div className="casestudy-Landing">
                    <div className="header-image" >
                        <Fade><NbaHeader /></Fade>
                    </div>
                    <Fade>
                        <div className="description">
                            <div class="details">
                                <h1>Nba App</h1>
                                <p>Personal demo mobile app showing Nba players, matches, highlights, latest news and videos.</p>
                            </div>
                            <div class="details-right">
                                <h1><span>Demo App</span></h1>
                                <p>Role: <span> Frontend and Backend development(Hybrid Mobile App iOS/ Android)</span></p>
                            </div>
                        </div>
                    </Fade>
                    <Fade>
                        <a href="https://github.com/ShubhamModi004/Nba_App">
                            <div className="casestudy-visit">
                                <a href="https://github.com/ShubhamModi004/Nba_App"><h3>View on github</h3></a>
                            </div>
                        </a>
                    </Fade>
                </div>
            </div>
            <div className="casestudy-problem">
                <div className="container boxcontainer">
                    <Fade><h1>What was required</h1></Fade>
                    <Fade>
                        <p>
                            Design and development of the Frontend/Backend of a mobile app for Nba matches, highlights, player stats, news, articles, individual record etc.
                            App should follow same design language on both iOS and Android.
                        </p>
                    </Fade>
                    <Fade><h1>My Solution</h1></Fade>
                    <Fade>
                        <p>
                            I made use React Native a javascript library to develop the app that can run the same piece of code on both android and iOS with minimum change
                            in code. React Native library makes use of states, since the project required a lot of state management i used redux to manage the state across
                            different screens. Backend for the app is Firebase that provides REST APIs for the content on the screen. Login and Signup Page was implemented
                            using Firebase wiht Password-Based Accounts using Javascript.
                            I also made use of Kitten UI framework for easier frontend development.
                        </p>
                    </Fade>
                    <Fade><h1>What was used to do this</h1></Fade>
                    <div className="row py-5" >
                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack">
                                    <Reactjs />
                                </div>
                            </Fade>
                        </div>
                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack">
                                    <Redux />
                                </div>
                            </Fade>
                        </div>
                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack" style={{ width: '3.5rem' }}>
                                    <Firebase />
                                </div>
                            </Fade>
                        </div>
                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack">
                                    <Kitten />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container boxcontainer" style={{ marginBottom: '7rem' }}>
                <div className="my-5">
                    <div className="row">
                        <div className="col mobile_mock" >
                            <Fade><NbaHome /></Fade>
                            <div className="casetudy-homepage" style={{ justifyContent: "space-between", textAlign: 'justify' }}>
                                <div>
                                    <Fade>
                                        <h4>Home</h4>
                                        <p>Screen showing latest match update, latest  news, top 3 players of the week and match highlights</p>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className="col mobile_mock" >
                            <Fade><NbaMatch /></Fade>
                            <div className="casetudy-homepage" style={{ justifyContent: "space-between", textAlign: 'justify' }}>
                                <div>
                                    <Fade>
                                        <h4>Match Stats</h4>
                                        <p>Screen showing latest match update, stats, score, points, team rankings and team history</p>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className="col mobile_mock" >
                            <Fade><NbaPlayer /></Fade>
                            <div className="casetudy-homepage" style={{ justifyContent: "space-between", textAlign: 'justify' }}>
                                <div>
                                    <Fade>
                                        <h4>Top Player</h4>
                                        <p>Screen showing details of the top player of the week and his stats.</p>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <div className="row">
                        <div className="col-md-6 case-study-image" >
                            <Fade><NbaHomeScreen /></Fade>
                        </div>
                        <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
                            <div className="casestudy-ss-description">
                                <Fade cascade>
                                    <h4>Nba App | Home Screen</h4>
                                    <p>Screen showing latest match update, latest  news,<br /> top 3 players of the week and match highlights</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <div className="row reverse">
                        <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
                            <div className="casestudy-ss-description">
                                <Fade cascade>
                                    <h4>Nba App | News Screen</h4>
                                    <p>Screen showing the latest news<br /> comments and likes on it.</p>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6 case-study-image" >
                            <Fade><NbaNewsScreen /></Fade>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="row">
                        <div className="col-md-6 case-study-image" >
                            <Fade><NbaMatchScreen /></Fade>
                        </div>
                        <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
                            <div className="casestudy-ss-description">
                                <Fade cascade>
                                    <h4>Nba App | Match Screen</h4>
                                    <p>Screen showing latest match updates, score cards,<br />match stats and points</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="row reverse">
                        <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
                            <div className="casestudy-ss-description">
                                <Fade cascade>
                                    <h4>Nba App | Player Screen</h4>
                                    <p>Screen showing details of the top player of the week and his stats.</p>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6 case-study-image" >
                            <Fade><NbaIndividualScore /></Fade>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="row">
                        <div className="col-md-6 case-study-image" >
                            <Fade><NbaVideoScreen /></Fade>
                        </div>
                        <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
                            <div className="casestudy-ss-description">
                                <Fade cascade>
                                    <h4>Nba App | Highlights Screen</h4>
                                    <p>Screen with highlights of the recent the match and match stats</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="casestudy-problem">
                <div className="container boxcontainer">
                    <h1>Conclusion</h1>
                    <p>App was successfully designed , developed and tested on both Android and iOS</p>
                    <a href="https://github.com/ShubhamModi004/Nba_App">
                        <div className="casestudy-visit" style={{ background: 'rgba(255,255,255, 0.14)' }}>
                            <a href="https://github.com/ShubhamModi004/Nba_App"><h3 style={{ color: '#fff' }}>View on github</h3></a>
                        </div>
                    </a>
                </div>
            </div>
            <div className="container boxcontainer" style={{ marginBottom: '7rem' }}>
                <div className="home-work">
                    <h1 className="text-center">Other projects done by me</h1>
                    <div className="home-work-section">
                        <div className="row" style={{ paddingTop: '3rem' }}>
                            <div className="col-md-6">
                                <div className="work_image">
                                    <Link to={'/casestudy/Sohail'}><SohailWork /></Link>
                                </div>
                                <div className="py-3">
                                    <Fade cascade bottom>
                                        <div>
                                            <h1 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Sohail Mohammad | Personal Portfolio</h1>
                                            <p style={{ marginBottom: '0rem', fontWeight: '100' }}>UI/UX designer from Bangalore. Specialized in User Interface & User Experience Design</p>
                                        </div>
                                        <div className="read_case">
                                            <Link to={'/casestudy/Sohail'}>
                                                <div class="concept concept-five">
                                                    <h1 class="word"><span class="char">R</span><span class="char">E</span><span class="char">A</span><span class="char">D</span><span class="char" style={{ paddingLeft: '5px' }}></span><span class="char">C</span><span class="char">A</span><span class="char">S</span><span class="char">E</span></h1>
                                                </div>
                                            </Link>
                                            <div className="read_line" />
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                            <div className="col-md-6" >
                                <div className="work_image">
                                    <Link to={'/casestudy/Educrate'}><EducrateWork /></Link>
                                </div>
                                <div className="py-3">
                                    <Fade cascade bottom>
                                        <div>
                                            <h1 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Educrate India | Website development</h1>
                                            <p style={{ marginBottom: '0rem', fontWeight: '100' }}>Smart classroom projectors.</p>
                                        </div>
                                        <div className="read_case">
                                            <Link to={'/casestudy/Educrate'}>
                                                <div class="concept concept-five">
                                                    <h1 class="word"><span class="char">R</span><span class="char">E</span><span class="char">A</span><span class="char">D</span><span class="char" style={{ paddingLeft: '5px' }}></span><span class="char">C</span><span class="char">A</span><span class="char">S</span><span class="char">E</span></h1>
                                                </div>
                                            </Link>
                                            <div className="read_line" />
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default index

