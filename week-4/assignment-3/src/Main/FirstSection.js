import React from 'react';
import PropTypes from 'prop-types';

const FirstSection = props =>
    <section className="full-width" id="about">
        <h2>Section Title</h2>
        <div className="container">
            <div className="col-2 box">
                <p>Content Box 1</p>
            </div>
            <div className="col-2 box">
                <p>Content Box 2</p>
            </div>
            <div className="col-2 box">
                <p>Content Box 3</p>
            </div>
            <div className="col-2 box">
                <p>Content Box 4</p>
            </div>
        </div>
        <div className="content-btn" id="callOutButton">
            <a href="#callOutSection" className="btn">Call to Action</a>
        </div>
    </section>;

export default FirstSection;