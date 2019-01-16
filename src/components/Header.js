import React from 'react';

// Header Component
const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
    </div>
);

// Set default props for Header
Header.defaultProps = {
    title: 'Some title here'
};

export default Header;