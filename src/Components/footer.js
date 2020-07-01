import React from 'react';

function Footer(props){
    return(
        <>
        {/* <!-- Footer --> */}
        <section id="footer" className="wrapper">
            <div className="title">Contact</div>
            <div className="container">
                <header className="style1">
                    <h2>Would you like to chat?</h2>
                </header>
        {/* <!-- Contact --> */}
        <section className="feature-list small">
        <div className="row">

            {/* <!-- LOCATION --> */}
            <div className="col-4 col-12-small" >                   
                <h3 className="icons">Location</h3>
                {/* <i class="lni lni-home lni-32"></i> */}
                <p id="location">
                    Baltimore, Maryland
                </p>
            </div>

            {/* <!-- SOCIAL MEDIA IS INSERTED HERE --> */}
            <div className="col-4 col-12-small" >
                <h3 className="icons">Social</h3>
                    <p id="social">
                    <a href="http://www.linkedin.com/in/victoriasaleem">
                        <i className="lni lni-linkedin-original lni-32"></i>
                    </a>
                    {/* <br />
                    <br /> */}
                    <a href="https://github.com/vsaleem">
                        <i className="lni lni-github-original lni-32" id="github"></i>
                    </a>
                    </p>
            </div>
                                    
            {/* <!-- EMAIL --> */}
            <div className="col-4 col-12-small" >
                <h3 className="icons">Email
                    {/* <i class="lni lni-envelope lni-32"></i> */}
                </h3>
                    <p id="email">
                        <a href="mailto:vic.saleem@gmail.com">vic.saleem@gmail.com</a>
                    </p>
            </div>
        </div>
        </section>
            </div>
                
                {/* <!-- COPYRIGHT --> */}
                <div id="copyright">

                    <ul className="actions" id="home">
                        <li><a href="#" className="button style3 large">Back to Top</a></li>
                    </ul>
                    <br/>
                    <br/>
                    <ul>
                        <li>&copy; 2020 Victoria Saleem</li>
                    </ul>
                </div>
        </section>
        </>
    );
}

export default Footer;