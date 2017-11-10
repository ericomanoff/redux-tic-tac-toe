import React from 'react'


const Box = ({onClick, id, selected}) => (
    <button  key={id} className="button" onClick={onClick}> {selected}</button>
)


export default Box