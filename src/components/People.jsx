import React, {useState} from "react";
import {data as originalData} from './data';
import { NavLink} from "react-router-dom";

function People() {
    const data = originalData
    const [query, setQuery] = useState('')
    
    const HandleChange = (event) => {
      let newQuery = event.target.value
      setQuery(newQuery)
     // event.preventDefault()
    }

  let filtereddata = data.filter(datum=>datum.id !== 0)
  const searcher = query.toLowerCase()
  filtereddata = filtereddata.filter(datum => datum.title.toLowerCase().match(new RegExp(searcher, "i")) || datum.author.join().toLowerCase().includes(searcher))

  function capitalise(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

function Testme(name){ 

    return filtereddata.filter(
      datum => datum.author.includes(name)).map(
      item =><p key={item.id}><strong>{capitalise(item.type)}</strong>:
          <NavLink className= "btn button-abstract text-left" to={'/abstracts/' + item.id}><em>{item.title}</em></NavLink><br/>
          <strong>Authors</strong>: {item.author.join().split(',').join(', ').replace(/, ([^,]*)$/, ' and $1')}<br/>
          <strong>Time</strong>: {capitalise(item.day)} {item.time}<br/>
          <strong>Room</strong>: {item.room}</p> )
          }

    const peoplelistorig = filtereddata.map(datum => datum.author)
                              .flat()
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
                if (people.length !== 0){peoplehtml.push(<h4 id={letter} key={letter}>{letter}</h4>)}
                peoplehtml.push(people)
                return peoplehtml
                }
              
    return (
        <div className="people">
            <div className="container container-pad">
                <h1 id="site-top">People</h1>
                <p> Click on a name to see which talks/posters they will present and where.<br/>
                You can also use our search bar to filter by author or title - just start typing!</p>
                <input type="search" placeholder="Search me" onChange={HandleChange}></input>
                          
                {peopleByLetter('A')}
                {peopleByLetter('B')}
                {peopleByLetter('C')}
                {peopleByLetter('D')}
                {peopleByLetter('E')}
                {peopleByLetter('F')}
                {peopleByLetter('G')}
                {peopleByLetter('H')}
                {peopleByLetter('I')}
                {peopleByLetter('J')}
                {peopleByLetter('K')}
                {peopleByLetter('L')}
                {peopleByLetter('M')}
                {peopleByLetter('N')}
                {peopleByLetter('O')}
                {peopleByLetter('P')}
                {peopleByLetter('Q')}
                {peopleByLetter('R')}
                {peopleByLetter('S')}
                {peopleByLetter('T')}
                {peopleByLetter('U')}
                {peopleByLetter('V')}
                {peopleByLetter('W')}
                {peopleByLetter('X')}
                {peopleByLetter('Y')}
                {peopleByLetter('Z')}
                
            </div>   
         </div>
    );
}

export default People;