import React, {ChangeEvent, useState} from 'react';

type EditableSpanType={
    value:string
    onChange:(newValue:string)=>void
}
export const EditableSpan =({value,onChange}:EditableSpanType)=>{

    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <input value={title} onChange={changeTitle}   onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{value}</span>
}
