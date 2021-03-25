import React from 'react'


function Search({ handleInput, search }){
    return (
       <section className="searchBox">
           <input type="text"
           placeholder="Chercher un film"
           className="searchInput"
           onChange={handleInput}
           onKeyPress={search}/>
       </section>
    )
}

export default Search
