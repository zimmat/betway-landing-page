
import React, { Component, Fragment } from 'react';

import { Header, Header2} from './Navigation'

class Template extends Component {

    render () {
        let { children } = this.props
        return (
            <Fragment>
                <section className="topNav">
                    <Header/>
                    <Header2/>
                </section>

                <div className="site-wrapper">
                    { children }
                </div>
            </Fragment>
        )
    }
}

export default Template