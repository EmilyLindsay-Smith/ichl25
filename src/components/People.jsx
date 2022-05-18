import React from "react";
import {data} from './data';
import { useNavigate } from 'react-router-dom';

function capitalise(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

function Testme(name){ 
    const navigate = useNavigate();
    const toAbstracts=(num)=>{navigate('/abstracts',{state:{value:num}})}    
    const toWorkshops=()=>{navigate('/workshops')}

    return data.filter(
      datum => datum.author.includes(name)).map(
      item =><p><strong>{capitalise(item.type)}</strong>:
          <button className="btn button-abstract" onClick={item.id!==0 ?()=>{toAbstracts(item.id)}:()=>{toWorkshops()}}>
               {item.title}
               </button><br/>
          <strong>Authors</strong>: {item.author.join().split(',').join(', ').replace(/, ([^,]*)$/, ' and $1')}<br/>
          <strong>Time</strong>: {capitalise(item.day)} {item.time}<br/>
          <strong>Room</strong>: {item.room}</p> )
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
                             .filter((x, i, a) => a.indexOf(x) === i)
                             .filter(person => person !== '')
                             .map(person =>
                                <details>
                                <summary>{person}</summary>
                                <div class="detailcontent">{Testme(person)}</div>
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