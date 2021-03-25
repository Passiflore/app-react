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

.form {
    display:grid; //test du bouton "recherche"
}

export default Search