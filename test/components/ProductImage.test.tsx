import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/Products';

describe('ProductImage', () => {
    test('Debe mostrar el componente correctamente con la imagen personalizada', () => {
        const wrapper = renderer.create(
            <ProductImage img={product2.img} className='custom-image' />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Mostrar el componente con la imagen del producto', () => {
        const wrapperImage = renderer.create(
            <ProductCard product={product2}>
                {() => (
                    <ProductImage />
                )}
            </ProductCard>
        );

        expect(wrapperImage.toJSON()).toMatchSnapshot();
    })
});