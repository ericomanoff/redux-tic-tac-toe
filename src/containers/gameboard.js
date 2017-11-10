import React from 'react'
import Box from "../components/box"
import select_square from "../reducers/select_square"
import {select_square_action} from "../actions/index"
import connect from 'react-redux'


const GameBoard = ({boxes, onBoxClick}) => (
    <div className="game-board">
        {boxes.map( box => (
            <Box {...box} onClick={onBoxClick}/>
        ))}
    </div>
)

const mapStateToProps = () => {
    return {
        boxes: select_square
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBoxClick: id => {
            dispatch(select_square_action(id))
        }
    }
}

const ReduxedGameBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard)

export default ReduxedGameBoard