import React , { forwardRef, useRef, useImperativeHandle } from 'react'

export const ChildB = forwardRef((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            callParentAlert(){
                alert("from parent ....")
            }
        }),
    )
   
    return (
        <div>
            <h3>child BBBBBBBBBBBBBBBBBBBB</h3>
        </div>
    )
})
