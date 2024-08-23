import React from 'react'
import { createContext, CSSProperties } from 'react';
import { useProductHook } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    className?: string;
    style?: CSSProperties;
    value?: number
    initialValues?: InitialValues
    children: (args: ProductCardHandlers) => JSX.Element
    onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = (props: Props) => {
    const {
        product,
        className,
        initialValues,
        value,
        style,
        children,
        onChange,
    } = props;

    const { counter, maxCount, isMaxCountReached, reset, increaseBy } = useProductHook({
        onChange,
        product,
        value,
        initialValues
    });

    return (
        <Provider value={{ counter, product, maxCount, increaseBy }}>
            <div
                style={style}
                className={`${styles.productCard} ${className}`}>
                {children({
                    maxCount: initialValues?.maxCount,
                    product,
                    count: counter,
                    isMaxCountReached,
                    reset,
                    increaseBy,
                })}
            </div>
        </Provider>
    )
}