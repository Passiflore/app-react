import React from 'react'


function Search({ handleInput }){
    return (
       <section className="searchBox">
           <input type="text"
           placeholder="Chercher un film"
           className="searchInput"
           onChange={handleInput} />
       </section>
    )
}

export default Search