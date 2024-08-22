import React from 'react'
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components/';
import { product } from '../data/Products';

describe('ProductTitle', () => {
    test('Debe mostrar el componente correctamente con el título personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' className='custom-class' />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product}>
                {() => (
                    <ProductTitle />
                )}
            </ProductCard>            
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})