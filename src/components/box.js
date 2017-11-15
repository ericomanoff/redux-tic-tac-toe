import React from 'react'


const Box = ({ onClick, team, id}) => {
    return(
        <button onClick={onClick} className={team}> {team} </button>
    )
}


export default Box