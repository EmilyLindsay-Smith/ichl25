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
                                <div>
                                <button type="button" class="collapsible">{person}</button>
                                <div class="details">{testme(person)}</div>
                                </div>
                                )

                                var coll = document.getElementsByClassName("collapsible");
                                var i;
                                
                                for (i = 0; i < coll.length; i++) {
                                  coll[i].addEventListener("click", function() {
                                    this.classList.toggle("active");
                                    var content = this.nextElementSibling;
                                    if (content.style.display === "block") {
                                      content.style.display = "none";
                                    } else {
                                      content.style.display = "block";
                                    }
                                  });
                                }
                                

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