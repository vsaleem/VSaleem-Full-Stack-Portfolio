import React from 'react';

function Footer(props) {
    return (
        <>
            {/* <!-- Footer --> */}{/* <!-- Contact --> */}

            <section id="footer" className="wrapper">
                <div className="title">Contact</div>
                <div className="container">
                    <header className="style1">
                        <h2>Would you like to chat?</h2>
                    </header>
                    <section className="feature-list small">
                        {/* <!-- CONTACT INFO IS INSERTED HERE --> */}
                        <div className="row col-12" >
                            <p id="logo">
                                <a href="http://www.linkedin.com/in/victoriasaleem">
                                    <i className="lni lni-linkedin-original lni-32"></i>
                                </a>
                                {/* <h2 id="logo">LinkedIn</h2> */}
                                <a href="https://github.com/vsaleem">
                                    <i className="lni lni-github-original lni-32" id="github"></i>
                                </a>
                                {/* <h2 id="logo">GitHub</h2> */}
                                <a href="mailto:vic.saleem@gmail.com">
                                    <i className="lni lni-envelope lni-32"></i>
                                </a>
                                {/* <h2 id="logo">Email</h2> */}
                            </p>
                        </div>

                    </section>
                </div>

                {/* <!-- COPYRIGHT --> */}
                <div id="copyright">

                    <ul className="actions" id="home">
                        <li><a href="#" className="button style3 large">Back to Top</a></li>
                    </ul>
                    <br />
                    <br />
                    <ul>
                        <li>&copy; 2020 Victoria Saleem</li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Footer;