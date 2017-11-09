import React from 'react'


const Box = ({ onClick, selected, id }) => (
    <button
        className="button"
        onClick={onClick}
        style={{
            backgroundColor: selected ? 'grey' : 'blue'
        }}
    >
        {id}
    </button>
)


export default Box