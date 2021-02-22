import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola desde TEST 1';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('NO debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();

    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola desde TEST 2';

        // 1. Simular el inputChange.
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. Simular el submit.
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories se debe de haber llamado.
        expect(setCategories).toHaveBeenCalled();
        // Llamarlo por número de veces
        expect(setCategories).toHaveBeenCalledTimes(1);
        // Saber si recibe una función
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // 4. El valor del input debe de estar ''.
        expect(wrapper.find('p').text().trim()).toBe('');

    });



});