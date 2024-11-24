// src/context/SearchContext.js
import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <SearchContext.Provider value={{ searchTerm, handleSearchChange }}>
            {children}
        </SearchContext.Provider>
    );
};
