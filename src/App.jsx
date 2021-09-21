import React, { useState, useEffect } from 'react';
import Search from "./components/ui/Search";
import Pagination from "./components/ui/Pagination";
import './App.css';
import CharacterGrid from './components/chars/CharacterGrid';
import Header from './components/ui/Header';
import axios from "axios";


const App =()=> {
   const [items, setitems] = useState([]);
   const [loading, setloading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(8);
   const [query, setQuery] = useState('');


   useEffect(() => {
      const fetchItems = async ()=> {
        setloading(true);
       const result =  await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

        setitems(result.data);
        setloading(false);
      
      }
      fetchItems()
   },[query]);

   const paginate = (pageNumber)=> setCurrentPage(pageNumber);

   const indexOfLastPage = currentPage * postsPerPage;
   const indexOfFirstPage = indexOfLastPage - postsPerPage;
   const currentsPosts = items.slice(indexOfFirstPage,indexOfLastPage);

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid items={currentsPosts} loading={loading} />
      <Pagination totalItems={items.length} postsPerPage={postsPerPage} paginate={paginate}/>
    </div>
  );
}

export default App;
