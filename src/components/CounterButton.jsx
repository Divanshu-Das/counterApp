import React from 'react';
import styles from './CounterButton.module.css';

const CounterButton = (props) => {
    return(
        <>
        <button className={styles.ButtonStyle} 
        onClick={() => props.incrementMethod(props.value)}>
            +{props.value}
        </button>
        <button className={styles.ButtonStyle}
         onClick={() => props.decrementMethod(props.value)}>
            -{props.value}
        </button>
        </>
    )
}

export default CounterButton;
