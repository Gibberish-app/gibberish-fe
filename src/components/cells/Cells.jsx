import React, {useState, useEffect} from 'react';
import styles from '../../containers/style/Containers.css';

const Cells = (props) => {
    const [letter, setLetter] = useState('');
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    return (
        <div className={styles.cells}
            style={{ 
                backgroundColor: props.color, 
                width: '45px', 
                height: '40px',
                fontSize: props.fontSize}}>
            {letter || value}
        </div>
    )
}

export default Cells;
