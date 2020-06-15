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
            <div className="col-4 col-12-small">                   
                <h3 className="">Location</h3>
                <p>
                    Baltimore, Maryland
                </p>
            </div>

            {/* <!-- SOCIAL MEDIA IS INSERTED HERE --> */}
            <div className="col-4 col-12-small">
                <h3 className="">Social</h3>
                    <p>
                        <a href="http://www.linkedin.com/in/victoriasaleem">linkedin.com/in/victoriasaleem</a><br />
                        <a href="https://github.com/vsaleem">github.com/vsaleem</a>
                    </p>
            </div>
                                    
            {/* <!-- EMAIL --> */}
            <div className="col-4 col-12-small">
                <h3 className="">Email</h3>
                    <p>
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