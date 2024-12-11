import React from "react";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Product from "../components/Product";
// import fetch from "../hooks/fetch";

export default function Home() {
    // Usamos nuestro Hook
    const [setPokemon, searchData] = useFetch();

    const [allPokemon, setAllPokemon] = useState([]);

    const [cart, setCart] = useState([]);

    // Para recoger todos los pokemons y crear sus botones
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
            .then((res) => res.json())
            .then((res) => {
                let pokemons = [];

                res.results.map((r) => {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${r.name}`)
                        .then((data) => data.json())
                        .then((data) => {
                            pokemons.push({
                                name: data.name,
                                image: data.sprites.other.home.front_default,
                            })
                        })
                        .catch(e => console.log(e));
                })

                setAllPokemon(pokemons.sort());
            });
    }, []);

    // Está predeterminado Pikachu.
    useEffect(() => {
        setPokemon("pikachu");
    }, []);

    // Devolvemos la primera letra del nombre en mayuscula
    const toUpper = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    return (
        <div className="main">
            <h2 id="title-main">Catalogo de Productos</h2>
            <div className="container-productos">
                {allPokemon
                    ? allPokemon.map((pokemon) => {
                        console.log(pokemon)
                        return (
                            <Product 
                                src = {pokemon.image}
                                up = {toUpper}
                                name = {pokemon.name}
                                addToCart = {handleAddToCart}
                            />
                        )
                    })
                    : ""}
            </div>
        </div>
    );
}