import React, { FC, useState, useRef } from 'react';

const EventsExample:FC = () => {

    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] =useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log ('DRAG')
    }

    const dragWithPrventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    }

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder='Управляемый'/>
            <input type="text"  ref={inputRef} placeholder='Неуправляемый'/>
            <button onClick={clickHandler}> Console value </button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'teal'}}></div>
            <div 
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPrventHandler}
                style={{width: 200, height: 200, background: isDrag? 'green' : 'teal', marginTop: 15}}></div>

        </div>
    );
};

export default EventsExample;