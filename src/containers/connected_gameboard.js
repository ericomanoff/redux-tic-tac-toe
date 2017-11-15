import { connect } from 'react-redux'
import select_square from '../reducers/select_square'
import { select_square_action } from "../actions/index"
import GameBoard from '../components/gameboard'


const mapStateToProps = (state)=>{
    return{
        board: state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSquareClick: (id, team) => {
            dispatch(select_square_action(id, team))
        }
    }
}

let ConnectedGameBoard = connect(mapStateToProps, mapDispatchToProps)(GameBoard)

export default ConnectedGameBoard