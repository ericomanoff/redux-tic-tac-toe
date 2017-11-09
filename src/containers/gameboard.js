import React from 'react'
import Box from '../components/box'
import { connect } from 'react-redux'
import { selectBox } from '../actions/index'


const GameBoard = () => {
        return(
            <div className="game-board">
                <Box />
                <Box />
                <Box />

                <Box />
                <Box />
                <Box />

                <Box />
                <Box />
                <Box />
            </div>
        )

}

export default GameBoard