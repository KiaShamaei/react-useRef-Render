import React from 'react'

export const ChildA = (props, ref) => {
    const handleparent  = ()=>{
        console.log("call from parent")
    }
    console.log("this is from childA", props)
    return (
        <div>
            <p>this is child A {props.city} </p>
            <p>{props.city} ------------------</p>
            <button onClick={props.add}>callEvent</button>

        </div>
    )
}

export const ChildAMemo= React.memo(ChildA)
