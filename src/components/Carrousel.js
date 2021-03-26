import React from 'react';

const Carrousel = () => {
  return (
    <div>
      <body>
        <input type="radio" name="position" checked />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <main id="carousel">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          </main>
      </body>
      
    </div>
  );
};

export default Carrousel;