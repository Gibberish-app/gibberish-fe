import React, {useState, useEffect} from 'react';
import styles from '../../containers/style/Containers.css';

const Cells = (props) => {
    const [value, setValue] = useState(0);

    // useEffect(() => {
    //     setValue(props.value)
    // }, [props.value])

    return (
        <div className={styles.cells}
            style={{ 
                backgroundColor: '#0A2239', 
                width: '45px', 
                height: '40px'}}>
            {/* {value} */}
        </div>
    )
}

export default Cells;
