import React, {useState, Fragment} from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const MenuItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);    

    function handleDropdown(e) {        
        e.preventDefault();
        setIsOpen(!isOpen);        
    }
    return (
        <li className={`nav-item ${item.child_items ? 'dropdown' : ''}  ${isOpen ? 'show' : '' }`} key={item.wordpress_id}>            
            {item.child_items ? (
            <a href="/" className="dropdown-toggle" onClick={handleDropdown}>
                {item.title}
            </a>
            ) :
            <Link to={item.url}>
            {item.title}
            </Link>
            }
            {item.child_items ? (
            <>
                <div className={`dropdown-menu ${isOpen ? 'show' : '' }`}>
                {item.child_items.map((child, index) => (
                    <Fragment key={index}>
                    <Link to={child.url} className="dropdown-item" >
                        {child.title}
                    </Link>
                    <div className="dropdown-divider"></div>
                    </Fragment>
                ))}
                </div>
            </>
            ) : null}
        </li>
    )   
};

MenuItem.propTypes = {
    menu: PropTypes.object,
};

export default MenuItem;