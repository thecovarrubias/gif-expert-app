import React, { useState } from 'react';
import { HeadProvider, Title, Link, Meta } from 'react-head';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <HeadProvider>
            <Title>GIF Expert App</Title>
            <Meta name="description" content="Una pequeña aplicación hecha en React con Hooks para buscar y mostrar GIFs animados." />
            <Meta name="author" content="Jose Covarrubias" />
            <Link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖼️</text></svg>" />

            <main className="jumbotron rounded-0">
                <div className="container text-center">
                    <h1 className="display-4">GIF Expert App</h1>
                    <p className="lead">Una pequeña aplicación hecha en React con Hooks para buscar y mostrar GIFs animados.</p>
                    <hr className="my-4 bg-white" />
                    <AddCategory setCategories={ setCategories } />
                </div>
            </main>

            {
                categories.map(category => {
                    return (
                        <GifGrid key={ category } category={ category } />
                    )
                })
            }

        </HeadProvider>
    )
};

export default GifExpertApp;