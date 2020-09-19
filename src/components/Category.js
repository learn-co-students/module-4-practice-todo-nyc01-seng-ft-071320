import React from 'react'

function Category (props){
    console.log(props.current===props.cat)
    return <button className={props.current===props.cat ? "selected" : null } onClick={()=>{props.filter(props.cat)}}>{props.cat}</button>
}

export default Category