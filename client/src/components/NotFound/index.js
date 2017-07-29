import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

//
// const NotFound = ({ location }) => (
//     <div>
//         <h3>No match for <code>{location.pathname}</code></h3>
//     </div>
// );

class NotFound extends Component{
    render(){
        const {className} = this.props;

        return(
            <div className={classnames('NotFound', 'main', className)}>
                <h1>404. No match for <code>{this.props.location.pathname}</code></h1>
            </div>
        )
    }
}

export default NotFound;