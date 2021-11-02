import React from 'react';
import TypeLabel from './TypeLabel'

class Pokemon extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    renderTypes(types){
        if (types.length === 2) {
            return (
                <div className="extra">
                    <TypeLabel typeInfo={types[0]} />
                    <TypeLabel typeInfo={types[1]}/>
                </div>
            )
        }else{
            return (
                <div className="extra">
                    <TypeLabel typeInfo={types[0]}/>
                </div>
            )
        }
    }

    render() {
        const { pokemon } = this.props;
        if (Object.keys(pokemon).length !== 0) {
            return <div className="card">
                <div className="image">
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt="img" />
                </div>
                <div className="content">
                    <div className="header">{pokemon.name}</div>
                    {/* <div className="description">
                </div> */}
                </div>
                {this.renderTypes(pokemon.types)}
            </div>
        } else {
            return <div>Loading</div>
        }
    }
}

export default Pokemon;