import React from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
           <h1>A propos</h1>
           <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi ducimus eveniet, expedita incidunt itaque iusto, laboriosam modi molestias nihil nulla perferendis placeat possimus quas quisquam quod quos suscipit tenetur!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam, aperiam asperiores cumque dolorem ducimus enim est exercitationem fugit minus nostrum placeat, possimus quasi quidem reprehenderit ullam vero voluptates voluptatum.</p>
        </div>
    );
};

export default About;
