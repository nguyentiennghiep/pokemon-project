import React from "react";
import Pokemon from "./Pokemon";
import { connect } from "react-redux";
import { fetchPokemons } from "../actions";
class App extends React.Component {
    componentDidMount() {
        this.props.fetchPokemons();

    }

    renderPokemons() {
        console.log(this.props.pokemons)
    }

    render() {
        this.renderPokemons();
        return (
            <div className="ui link cards">
                <Pokemon pokemon={this.props.pokemons}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemons: () => { dispatch(fetchPokemons()) }
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);