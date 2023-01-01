import React from "react";

import nasa from "../nasa.jpg";
export default function Header() {
    return (
        <div className="main container">
            <div className="main-left">
                <h1 className="text-xxl">
                    Hello! I'm <span className="bold">Shohqadam Ergashev</span>
                </h1>
                <p>
                    Shohqadam Ergashev is professional Software Engyneer who
                    creates <span className="bold">awesome websites</span>
                </p>
            </div>
            <div className="main-center">
                <img src={nasa} alt="" />
            </div>
            <div className="main-right">
                <div className="right-elem">
                    <h1>11+</h1>
                    <p>Awward won</p>
                </div>
                <div className="right-elem">
                    <h1>5+</h1>
                    <p>Finished works</p>
                </div>
                <div className="right-elem">
                    <h1>5+</h1>
                    <p>Finished works</p>
                </div>
            </div>
        </div>
    );
}
