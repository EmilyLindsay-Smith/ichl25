import React from "react";
import {data} from './data';

function capitalise(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

function testme(name){ 
    return data.filter(
      datum => datum.author.includes(name)).map(
      item =><p>{capitalise(item.type)}: 
          <a href="https://www.google.com" target="_blank" rel="noreferrer noopener"> {item.title}</a><br/>
          Authors: {item.author.join().split(',').join(', ')}<br/>
          {capitalise(item.day)}: {item.time}<br/>
          Room: {item.room}</p> )
          }

function People() {
    const people = data.map(datum => datum.author)
    const peoplelist = people.flat()
                             .sort()
                             .map(person =>
                                <details>
                                <summary>{person}</summary>
                                {testme(person)}
                                </details>
                                )

                                

    return (
        <div className="people">
            <div class="container container-pad">
                <h1> People </h1>
                <p> Click on a name to see which talks/posters they will present and where.</p>
                {peoplelist}
            </div>   
         </div>
    );
}

export default People;