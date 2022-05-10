import React from "react";
import {data} from './data';

function capitalise(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

function testme(name){ 
    return data.filter(
      datum => datum.author.includes(name)).map(
      item =><p>{capitalise(item.type)}: 
          <a href={item.link} target="_blank" rel="noreferrer noopener"> {item.title}</a><br/>
          Authors: {item.author.join().split(',').join(', ')}<br/>
          {capitalise(item.day)}: {item.time}<br/>
          Room: {item.room}</p> )
          }

function People() {
    const people = data.map(datum => datum.author)
    const peoplelist = people.flat()
                             .sort(function(a,b){
                                 var aName = a.split(" ");
                                 var bName = b.split(" ");
                                 var aLastName = aName[aName.length -1];
                                 var bLastName = bName[bName.length -1];
                                 if (aLastName < bLastName){return -1
                                }else if(aLastName > bLastName){return 1
                                }else{return 0}
                             })
                             .map(person =>
                                <details>
                                <summary>{person}</summary>
                                <div class="detailcontent">{testme(person)}</div>
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