import React, {PropTypes, Component } from 'react';
import classnames from 'classnames';

import  './style.css';

class Notebooks extends Component{
    render(){
        const {className, ...props} = this.props;
        return(
            <div className={classnames('Notebooks', 'main', className)} {...props}>
                <h1>
                    Notebooks
                </h1>
            </div>
        );
    }
}

export default About;