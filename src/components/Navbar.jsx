import React from 'react'
import {connect} from 'react-redux'

function Navbar(props) {
    return (
        <div style={{backgroundColor:'green', color:'white'}}>
            <h1>Navbar of Item: {props.counter}</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    counter: state.counter.value
  })

export default connect(mapStateToProps)(Navbar)
