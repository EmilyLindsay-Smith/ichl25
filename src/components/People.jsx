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
          <button className="btn button-abstract text-left" onClick={item.id!==0 ?()=>{toAbstracts(item.id)}:()=>{toWorkshops()}}>
               {item.title}
               </button><br/>
          <strong>Authors</strong>: {item.author.join().split(',').join(', ').replace(/, ([^,]*)$/, ' and $1')}<br/>
          <strong>Time</strong>: {capitalise(item.day)} {item.time}<br/>
          <strong>Room</strong>: {item.room}</p> )
          }

function People() {
    const people = data.map(datum => datum.author)
    const peoplelistorig = people.flat()
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

            function peopleByLetter(letter){
               function lastLetter(name){
                    var splitName = name.split(" ")
                    var lastName = splitName[splitName.length -1]
                    return lastName[0]
                }

                const people = peoplelistorig.filter(person => lastLetter(person) === letter)
                    .map(person =>
                          <details key={person}>
                            <summary>{person}</summary>
                            <div className="detailcontent">{Testme(person)}</div>
                            </details>
                        )
                
                const peoplehtml = []
                if (people.length !== 0){peoplehtml.push(<h4 id={letter}>{letter}</h4>)}
                peoplehtml.push(people)
                return peoplehtml
                }
    
    return (
        <div className="people">
            <div className="container container-pad">
                <h1 id="site-top">People</h1>
                <p> Click on a name to see which talks/posters they will present and where.</p>
              <section>

                {peopleByLetter('A')}
                </section>
              <section>
                {peopleByLetter('B')}
                </section> 
                  <section>
                {peopleByLetter('C')}
                </section>
                <section>
                {peopleByLetter('D')}
                </section>
                <section>
                {peopleByLetter('E')}
                </section>
                <section>
                {peopleByLetter('F')}
                </section>
                <section>
                {peopleByLetter('G')}
                </section>
                <section>
                {peopleByLetter('H')}
                </section>
                <section>
                {peopleByLetter('I')}
                </section>
                <section>
                {peopleByLetter('J')}
                </section>
                <section>
                {peopleByLetter('K')}
                </section>
                <section>
                {peopleByLetter('L')}
                </section>
                <section>
                {peopleByLetter('M')}
                </section>
                <section>
                {peopleByLetter('N')}
                </section>
                <section>
                {peopleByLetter('O')}
                </section>
                <section>
                {peopleByLetter('P')}
                </section>
                <section>
                {peopleByLetter('Q')}
                </section>
                <section>
                {peopleByLetter('R')}
                </section>
                <section>
                {peopleByLetter('S')}
                </section>
                <section>
                {peopleByLetter('T')}
                </section>
                <section>
                {peopleByLetter('U')}
                </section>
                <section>
                {peopleByLetter('V')}
                </section>
                <section>
                {peopleByLetter('W')}
                </section>
                <section>
                {peopleByLetter('X')}
                </section>
                <section>
                {peopleByLetter('Y')}
                </section>
                <section>
                {peopleByLetter('Z')}
                </section>
            </div>   
         </div>
    );
}

export default People;