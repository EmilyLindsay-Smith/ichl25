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

  // **To Include The Session Chairs in the People section uncomment this line:  **
  let filtereddata = data
 // ** To NOT include the Session Chairs in the People section uncomment this line: **
  // let filtereddata = data.filter(datum=>datum.id !== 0)
    
  const searcher = query.toLowerCase()
  
  filtereddata = filtereddata.filter(datum => datum.title.toLowerCase().match(new RegExp(searcher, "i")) 
                                              || datum.author.join().toLowerCase().includes(searcher) 
                                              )
                                                  
  function capitalise(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

function Testme(name){ 

    return filtereddata.filter(
      datum => datum.author.includes(name)).map(
      item =><p key={item.id}><strong>{capitalise(item.type==='session'?'Session Title': item.type)}</strong>: {item.type==='session'? item.title : <><NavLink className= "btn button-abstract text-left" to={'/abstracts/' + item.id}><em>{item.title}</em></NavLink></> }<br/>
       {//   <NavLink className= "btn button-abstract text-left" to={'/abstracts/' + item.id}><em>{item.title}</em></NavLink><br/>
}
          <strong>{item.type==='session'?'Chair':item.author.length > 1 ? 'Authors':'Author'}</strong>: {item.author.join().split(',').join(', ').replace(/, ([^,]*)$/, ' and $1')}<br/>
          <strong>Time</strong>: {capitalise(item.day)} {item.type==='session' & item.session==='a'?'1000-1100': item.type==='session' &item.session==='b'?'1130-1300': item.type==='session' & item.session==="c"?'1345-1515':item.time}<br/>
        <strong>{item.type!='poster'?'Room':'Location'}</strong>: {item.type!='poster'? item.room : 'Mezzanine walls' }<br/> 
          <strong>{item.id === 0 ? '' : 'Paper ID: '}</strong>{item.id === 0 ? '' : item.id}</p>
          )
          }

    let peoplelistorig = filtereddata.map(datum => datum.author)
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

            <div data-spy="scroll" data-target="#myScroll">
              <div className="container">
              <nav className="nav sticky-top bg-light nav-spy" id="myScroll">
            <a className="nav-link nav-spy" href="#A">A</a><br/>
            <a className="nav-link nav-spy" href="#B">B</a><br/>
            <a className="nav-link nav-spy" href="#C">C</a><br/>
            <a className="nav-link nav-spy" href="#D">D</a><br/>
            <a className="nav-link nav-spy" href="#E">E</a><br/>
            <a className="nav-link nav-spy" href="#F">F</a><br/>
            <a className="nav-link nav-spy" href="#G">G</a><br/>
            <a className="nav-link nav-spy" href="#H">H</a><br/>
            <a className="nav-link nav-spy" href="#I">I</a><br/>
            <a className="nav-link nav-spy" href="#J">J</a><br/>
            <a className="nav-link nav-spy" href="#K">K</a><br/>
            <a className="nav-link nav-spy" href="#L">L</a><br/>
            <a className="nav-link nav-spy" href="#M">M</a><br/>
            <a className="nav-link nav-spy" href="#N">N</a><br/>
            <a className="nav-link nav-spy" href="#O">O</a><br/>
            <a className="nav-link nav-spy" href="#P">P</a><br/>
            <a className="nav-link nav-spy" href="#Q">Q</a><br/>
            <a className="nav-link nav-spy" href="#R">R</a><br/>
            <a className="nav-link nav-spy" href="#S">S</a><br/>
            <a className="nav-link nav-spy" href="#T">T</a><br/>
            <a className="nav-link nav-spy" href="#U">U</a><br/>
            <a className="nav-link nav-spy" href="#V">V</a><br/>
            <a className="nav-link nav-spy" href="#W">W</a><br/>
            <a className="nav-link nav-spy" href="#X">X</a><br/>
            <a className="nav-link nav-spy" href="#Y">Y</a><br/>
            <a className="nav-link nav-spy" href="#Z">Z</a><br/>
              </nav>
              <div className="scrollspy-content">
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
              </div>
              </div>
              </div>
    );
}

export default People;