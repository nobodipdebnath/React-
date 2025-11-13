import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <Link to='/phones'>Phones</Link>
            <Link style={{marginLeft: '20px'}} to='/phone'>Phone</Link>
        </div>
    );
};

export default Header;