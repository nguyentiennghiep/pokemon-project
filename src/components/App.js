import React from "react";
import Pokemon from "./Pokemon";
import { connect } from "react-redux";
import { fetchPokemons,loadMorePokemons } from "../actions";
class App extends React.Component {
    componentDidMount() {
        this.props.fetchPokemons();
    }

    renderPokemons(pokemons) {
        return pokemons.map((pokemon,index) => {
           return <Pokemon pokemon={pokemon} key={index} />
        });
    }

    handleLoadMore = () =>{
        this.props.loadMorePokemons(this.props.list.current);
    }

    render() {
        let {pokemons} = this.props.list; 
        if (!this.props.list) return <div>Loading...</div>
        return (
            <div className="ui container segment">
                <div className="ui three item menu">
                    <a className="active item" href>Editorials</a>
                    <a className="item" href>Reviews</a>
                    <a className="item" href>Upcoming Events</a>
                </div>
                <div className="ui container">
                    <div className="ui six stackable cards ">
                        {this.renderPokemons(pokemons)}

                    </div>


                    {/* <h3 class="ui block header">
                        Footer
                    </h3> */}
                </div>
                <div className="ui centered grid"  style={{margin: '20px'}}>
                    <button className="ui button segment" onClick={this.handleLoadMore}>
                        Load More...
                    </button>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemons: () => { dispatch(fetchPokemons()) },
        loadMorePokemons:(current) =>{dispatch(loadMorePokemons(current))}
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.pokemons
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);