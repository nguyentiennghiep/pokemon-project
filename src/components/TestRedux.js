import React from "react";
import {connect} from 'react-redux';

class TestRedux extends React.Component{
    render(){
        // console.log();
        return <div>
            <h1>{this.props.test.test}</h1>
        </div>
    }
}

const mapStateToProps = (state) => {
    
    return {
        test: state.test
    }
}

export default connect(mapStateToProps)(TestRedux);