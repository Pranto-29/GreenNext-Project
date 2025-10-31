import React from 'react';

const MyLink = ({to, classname, children}) => {
    return (
        <div>
             <li>
          <NavLink to={to}>
             <Link to="/">Home</Link>
          </NavLink>
        </li> 
        </div>
    );
};

export default MyLink;