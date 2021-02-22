import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Ejemplo'
    const url = 'http://localhost/ejemplo.jpg';

    let wrapper = shallow(
        <GifGridItem 
            title={ title } 
            url={ url }
        />
    );

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de contener un párrafo con el título', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });

    test('Debe de contener los mismos props del img', () => {
        
        const img = wrapper.find('img');
        
        /* Obtener un prop y llamarlo - img.prop('src')
           Obtener todas las porps y llamar por referencia - img.props().src */

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe de contener la clase animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
        // expect(div.hasClass('animate__fadeIn')).toBe(true);

    });

});