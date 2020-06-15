import React from 'react';

function Skills(props){
    return(
        <>
        {/* <!-- SKILLS --> */}
        <section id="main" className="wrapper style2">
            <div className="title">Technical Skills</div>
            <div className="container">

            {/* <!-- Features --> */}
            <section id="features">
                <div className="feature-list">
                    <div className="row">
                        <div className="col-6 col-12-medium">
                            <section>
                                <h3 className="fab fa-html5">HTML5</h3>
                                <p></p>
                            </section>
                        </div>
                        <div className="col-6 col-12-medium">
                            <section>
                                <h3 className="fab solid fa-css3-alt">CSS</h3>
                                <p></p>
                            </section>
                        </div>
                        <div className="col-6 col-12-medium">
                            <section>
                                <h3 className="fab fa-js">JavaScript</h3>
                                <p></p>
                            </section>
                        </div>
                        <div className="col-6 col-12-medium">
                            <section>
                                <h3 className="fab fa-bootstrap">BOOTSTRAP and BULMA</h3>
                                <p></p>
                            </section>
                        </div>
                        <div className="col-6 col-12-medium">
                            <section>
                                <h3 className="fab fa-node">NODE.JS</h3>
                                <p></p>
                            </section>
                        </div>
                        <div className="col-6 col-12-medium">
                            <section>
                                <h3 className="fab fa-npm">npm</h3>
                                <p></p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            </section>
        </>
    )
}
export default Skills;