import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <section className="container">
            <h2 className="animate__animated animate__fadeIn lead mb-4">{ category.toUpperCase() }</h2>
            { loading && (
                <div className="spinner-grow text-secondary animate__animated animate__flash" role="status">
                    <span className="sr-only">Cargando...</span>
                </div>)
            }

            <div className="card-columns mb-5">
                {
                    images.map((img) => (
                        <GifGridItem 
                            key={ img.id } 
                            { ...img }
                        />
                    ))
                }
            </div>
        </section>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;