import React, {Component} from 'react'
import Box from "./box"



class GameBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            turn: 'o'
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id){
        this.props.onSquareClick(id, this.state.turn)
        if(this.state.turn == 'o'){
            this.setState({turn: 'x'})
        }else{
            this.setState({turn: 'o'})
        }
    }

    render(){
        return(
            <div className="game-board">
                {this.props.board.map(square => {
                    return <Box onClick={() => this.handleClick(square.id)} key={square.id} team={square.team} id={square.id}/>
                })}
            </div>
        )
    }

}

export default GameBoard