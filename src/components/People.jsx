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

                return peoplelistorig.filter(person => lastLetter(person) == letter)
                    .map(person =>
                            <details>
                            <summary>{person}</summary>
                            <div class="detailcontent">{Testme(person)}</div>
                            </details>
                        )
                }
    
    return (
        <div className="people">
            <div className="container container-pad">
                <h1> People </h1>
                <p> Click on a name to see which talks/posters they will present and where.</p>
                <section>
                <h4 id="A">A</h4>
                {peopleByLetter('A')}
                </section>
              <section>
                <h4 id="B">B</h4>
                {peopleByLetter('B')}
                </section> 
                  <section>
                <h4 id="C">C</h4>
                {peopleByLetter('C')}
                </section>
                <section>
                <h4 id="D">D</h4>
                {peopleByLetter('D')}
                </section>
                <section>
                <h4 id="E">E</h4>
                {peopleByLetter('E')}
                </section>
                <section>
                <h4 id="F">F</h4>
                {peopleByLetter('F')}
                </section>
                <section>
                <h4 id="G">G</h4>
                {peopleByLetter('G')}
                </section>
                <section>
                <h4 id="H">H</h4>
                {peopleByLetter('H')}
                </section>
                <section>
                <h4 id="I">I</h4>
                {peopleByLetter('I')}
                </section>
                <section>
                <h4 id="J">J</h4>
                {peopleByLetter('J')}
                </section>
                <section>
                <h4 id="K">K</h4>
                {peopleByLetter('K')}
                </section>
                <section>
                <h4 id="L">L</h4>
                {peopleByLetter('L')}
                </section>
                <section>
                <h4 id="M">M</h4>
                {peopleByLetter('M')}
                </section>
                <section>
                <h4 id="N">N</h4>
                {peopleByLetter('N')}
                </section>
                <section>
                <h4 id="O">O</h4>
                {peopleByLetter('O')}
                </section>
                <section>
                <h4 id="P">P</h4>
                {peopleByLetter('P')}
                </section>
                <section>
                <h4 id="Q">Q</h4>
                {peopleByLetter('Q')}
                </section>
                <section>
                <h4 id="R">R</h4>
                {peopleByLetter('R')}
                </section>
                <section>
                <h4 id="S">S</h4>
                {peopleByLetter('S')}
                </section>
                <section>
                <h4 id="T">T</h4>
                {peopleByLetter('T')}
                </section>
                <section>
                <h4 id="U">U</h4>
                {peopleByLetter('U')}
                </section>
                <section>
                <h4 id="V">V</h4>
                {peopleByLetter('V')}
                </section>
                <section>
                <h4 id="W">W</h4>
                {peopleByLetter('W')}
                </section>
                <section>
                <h4 id="X">X</h4>
                {peopleByLetter('X')}
                </section>
                <section>
                <h4 id="Y">Y</h4>
                {peopleByLetter('Y')}
                </section>
                <section>
                <h4 id="Z">Z</h4>
                {peopleByLetter('Z')}
                </section>
            </div>   
         </div>
    );
}

export default People;