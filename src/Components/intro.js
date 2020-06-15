import React from 'react';

function AboutMe(props){
    return (
        <>
        {/* <!-- Intro --> */}
        <section id="intro" className="wrapper style1">
        <div className="title">About Me</div>
            <div className="container">
                <p className="style1">
                    So in case you were wondering what I'm all about ...
                </p>
                <p className="style1">
                    Native of a small town located in Mansfield, Louisiana, I lived and worked in the NW Louisiana area for over 10 years before moving to <strong>Baltimore, Maryland</strong> to pursue a career in <strong>Web Development.</strong>
                <br/>
                <br/>
                    In my previous experience, I studied the effects of trauma in children in foster care for over 3 years. This role brought me closer to my true passion: building front-end and back-end web applications that connect resources to children and families.
                <br/>
                <br/>
                In the next phase of my career, I will use Web Development as a reliable key to solve communication issues and improve accessibility with the clients' needs in mind.
                </p>    
            </div>
        </section>
        </>
    )
}
export default AboutMe;