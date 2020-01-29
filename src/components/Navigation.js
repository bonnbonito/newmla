
import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem.js'

const Navigation = ({ menu }) => 
    (
        <ul className="nav nav-justified">
            {menu.items.map((item, index) => (
                <MenuItem item={item} key={index}/>
            ))}
        </ul>
    );

Navigation.propTypes = {
    menu: PropTypes.object,
};

export default Navigation;