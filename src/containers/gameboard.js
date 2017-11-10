import React from 'react'
import Box from "../components/box"
import select_square from '../reducers/select_square'
import {connect} from 'react-redux'


const GameBoard = ({board}) => {
        return(
        <div className="game-board">
            {board.map(square => {
                    return <Box key={square.id} id={square.id}/>
            })}
        </div>
        )
},


mapStateToProps = (state)=>{
        return{
                board: select_square(state)
        }
}

let ConnectedGameBoard = connect(mapStateToProps)(GameBoard)

export default ConnectedGameBoard