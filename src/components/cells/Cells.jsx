import React, {useState, useEffect} from 'react';

const Cells = (props) => {
    const [letter, setLetter] = useState('');
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    return (
        <div 
            style={{ 
                backgroundColor: props.color, 
                width: '50px', 
                height: '50px', 
                textAlign: 'center', 
                verticalAlign: 'middle'}}>
            {letter || value}
        </div>
    )
}

export default Cells;
