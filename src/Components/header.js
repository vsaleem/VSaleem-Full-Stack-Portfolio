import React from 'react';

function Header(props){
    return(
        <>
        {/* <!-- Header --> */}
        <section id="header" className="wrapper">
            {/* <!-- Logo --> */}
            <div id="logo">
                <h1>Victoria Saleem</h1>
                <p>I like Node JS and React. <br /> Welcome to my playground.
                </p>
            </div>
        </section>
        </>
    )
}

export default Header;