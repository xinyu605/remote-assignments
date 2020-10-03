import React from 'react';
import PropTypes from 'prop-types';

const MobileMenu = props =>
    <div id="mobileMenu" className="clearfix">
        <span className="material-icons" id="closeButton">
            <a href="#">close</a>
        </span>
        <ul>
            <li><a href="#">item 1</a></li>
            <li><a href="#">item 2</a></li>
            <li><a href="#">item 3</a></li>
            <li><a href="#">item 4</a></li>
        </ul>
    </div>;

export default MobileMenu;