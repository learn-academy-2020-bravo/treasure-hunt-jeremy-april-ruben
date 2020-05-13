import React, { Component } from 'react'


class Counter extends Component {




    render() {
        return (
            <>
                <p> Number of clicks: {this.props.counter}</p>
            </>
        )
    }

}

export default Counter