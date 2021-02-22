import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch Man';

    test('Debe de mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Cualquier cosa 1',
                url: 'https://localhost/cualquier/cosa_1.jpg'
            },
            {
                id: 'DEF',
                title: 'Cualquier cosa 2',
                url: 'https://localhost/cualquier/cosa_2.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
    });

});