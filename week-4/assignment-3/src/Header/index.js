import React from 'react';
import PropTypes from 'prop-types';
import PCMenu from './PCMenu';
import MobileMenu from './MobileMenu';

const Header = props =>
<header className="full-width">
            <div className="logo">
                <a href="#">Website Title</a>
            </div>
            <nav className="clearfix">
                <span className="material-icons" id="menuButton"><a href="#">dehaze</a></span>

                <PCMenu />
                {/* < 800px 出現，> 800px 隱藏的部分 begin */}
                <MobileMenu />
                {/* < 800px 出現，> 800px 隱藏的部分 end */} 

            </nav>
        </header>;

export default Header;