import React from 'react';
import PropTypes from 'prop-types';
import Welcome from './Welcome';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

const Main = props =>
    <main>
        <Welcome />
            <FirstSection />
            {/* click call to action 按鍵後出現的內容 begin */}  
            <SecondSection />       
            {/* click call to action 按鍵後出現的內容 end */}  
    </main>;


export default Main;