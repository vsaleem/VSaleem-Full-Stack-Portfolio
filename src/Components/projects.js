import React from 'react';
import GoodReadMe from '../images/CLI - Readme - App - Screen Shot.png';
import NoteTaker from "../images/NOTE TAKER - SCRN SHOT.png";
import BurgerApp from '../images/healthy-turkey-burger.jpg';
import HotRestaurant from '../images/Hot-Restaurant-Screen-Shot.png'

function Projects(props){
    return (
        <>
        {/* <!-- Highlights --> */}
        <section id="highlights" className="wrapper style3">
            <div className="title">Portfolio</div>
            <div className="container">
                <div className="row aln-center">

            {/* <!-- README PROJECT --> */}
            <div className="col-4 col-12-medium">
                <section className="highlight">
                    <a href="https://github.com/vsaleem/Wk9-HW-Good-READme" className="image featured"><img src={GoodReadMe} alt="Good-Readme-CLI-ScreenShot"/></a>
                    <h3><a href="https://github.com/vsaleem/Wk9-HW-Good-READme">GOOD README GENERATOR</a></h3>
                    <p>This project uses a command-line application that dynamically generates a README.md file by using information prompted by the user and from the user’s GitHub account. This application is invoked with the following command: “node index”.</p>
                    <ul className="actions">
                        <li><a href="https://github.com/vsaleem/Wk9-HW-Good-READme" className="button style1">Learn More</a></li>
                    </ul>
                </section>
            </div>

            {/* <!-- NOTETAKER PROJECT --> */}
            <div className="col-4 col-12-medium">
                <section className="highlight">
                    <a href="https://note-undertaker-app.herokuapp.com/" className="image featured"><img src={NoteTaker} alt="Note Taker App Screen-Shot"/></a>
                    <h3><a href="https://note-undertaker-app.herokuapp.com/">NOTE TAKER APP</a></h3>
                    <p>Created an app that can write, save, and delete notes. Perfect for your "everyday" perfectionist! This app uses Express middle/backend and saves and retrieves note data from a JSON file. This app is deployed using Heroku.</p>
                    <ul className="actions">
                        <li><a href="https://github.com/vsaleem/HW_Week11_Express_Note_Taker" className="button style1">Learn More</a></li>
                    </ul>
                </section>
            </div>

            {/* <!-- BURGERS PROJECT --> */}
            <div className="col-4 col-12-medium">
                <section className="highlight">
                    <a href="https://github.com/vsaleem/Eat-DaBurger" className="image featured"><img src={BurgerApp} alt="Eat-DaBurger Screen-Shot"/></a>
                    <h3><a href="https://github.com/vsaleem/Eat-DaBurger">EAT-DA-BURGER APP</a></h3>
                    <p>This application demonstrates a full stack application using Handlebars, MySQL, Node, Express, and custom ORM. This app allows users to input the names of the burgers they want to consume and then they get to devour the burger by clicking the 'EAT' button.</p>
                    <ul className="actions">
                        <li><a href="https://github.com/vsaleem/Eat-DaBurger" className="button style1">Learn More</a></li>
                    </ul>
                </section>
            </div>


            {/* <!-- HOT RESTAURANT PROJECT --> */}
            <div className="col-4 col-12-medium">
                <section className="highlight">
                    <a href="https://github.com/vsaleem/hotRestaurant" className="image featured"><img src={HotRestaurant} alt="Hot-Restaurant Screen-Shot"/></a>
                    <h3><a href="https://github.com/vsaleem/hotRestaurant">HOT RESTAURANT APP</a></h3>
                    <p>Basic app demonstrating Node and Express with jQuery. Overall purpose is to help schedule reservation requests. Restaurant has just 5 tables available. First five requests get a reservation, every request after that is sent to the waiting list.</p>
                    <ul className="actions">
                        <li><a href="https://github.com/vsaleem/hotRestaurant" className="button style1">Learn More</a></li>
                    </ul>
                </section>
            </div>

        </div>
        </div>
        </section>
        </>
    )
}
export default Projects;