import React from "react";
import PropTypes  from "prop-types";

//stateless functional component can be used because no state in header only data passed in and JSX returned
const Header = (props) => (
            <header className="top">
                <h1>Catch 
                <span className="ofThe"> 
                <span className="of">Of</span>
                <span className="the">The</span>
                </span> 
                Day</h1>
                <h3 className="tagline">
                <span>{props.tagline}</span>
                </h3>
            </header>
        )

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

//state functional component which uses this. and would handle more complex data flow than stateless
// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>Catch 
//                 <span className="ofThe"> 
//                 <span className="of">Of</span>
//                 <span className="the">The</span>
//                 </span> 
//                 Day</h1>
//                 <h3 className="tagline">
//                 <span>{this.props.tagline}</span>
//                 </h3>
//             </header>
//         )
//     }
// }

export default Header;

