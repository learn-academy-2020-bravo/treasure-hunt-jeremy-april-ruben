import React, { Component } from 'react'


class Counter extends Component {




    render() {
        return (
            <>
                <p> Number of clicks left: <strong> {this.props.counter} </strong> </p>
            </>
        )
    }

}

export default Counter
