import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product
    value?: number
    initialValues?: InitialValues
    onChange?: (args: onChangeArgs) => void;
}

export const useProductHook = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef<boolean>(false);

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }
        
        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {
        if (!isMounted.current) return;

        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset,
    }
}