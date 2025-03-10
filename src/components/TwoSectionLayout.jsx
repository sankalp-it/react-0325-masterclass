import React from 'react';
// import './TwoSectionLayoutFlexBox.css'; // Create this file for CSS
import './split.css'; // Create this file for CSS
import { Header } from './Header';

const TwoSectionLayout = ({ leftContent, rightContent }) => {
  return (
    // <div className="container">
    //   <div className="left-section">{leftContent}</div>
    //   <div className="right-section">{rightContent}</div>
    // </div>
    <div className="container">
        <Header />
        <div class="left-section left">
            <div class="centered">
                {leftContent}
            </div>
        </div>

        <div class="right-section right">
            <div class="centered">
                {rightContent}
            </div>
        </div>
    </div>
  );
};

export default TwoSectionLayout;