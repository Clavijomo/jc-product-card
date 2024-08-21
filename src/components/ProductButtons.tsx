import React from 'react'
import { CSSProperties, useCallback, useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

interface Props {
    className?: string
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(() => (
        !!maxCount && counter === maxCount
    ), [maxCount, counter])
    
    return (
        <div
            style={style}
            className={`${styles.buttonsContainer} ${className}`}>
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}>
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
                onClick={() => increaseBy(+1)}>
                +
            </button>
        </div>
    );
}