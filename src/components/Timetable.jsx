import React from "react";
import {data} from './data';

function SessionChairInfo(day,room,session){
    let filtered = data.filter(datum=>datum.type==="session")
                        .filter(datum=>datum.day===day)
                        .filter(datum=>datum.session===session)
                        .filter(datum=>datum.room===room)
    let title = filtered.map(datum=>datum.title)
    let chair = filtered.map(datum=>datum.author).join('').split(',').join(', ').replace(/, ([^,]*)$/, ' and $1')
    if(title != ""){
        return <th><strong>{title}</strong><br/><span style={{fontWeight: "normal", alignItems: 'flex-start'}}><em>chaired by {chair}</em></span></th>
    }else{return <th>NO SESSION</th>}
}

function SessionChair(day,session){
    return <tr><th></th> {SessionChairInfo(day, 'L1', session)}
                        {SessionChairInfo(day, 'L2', session)}
                        {SessionChairInfo(day, 'L3', session)}
                        {SessionChairInfo(day, 'L6', session)}
                        {SessionChairInfo(day, 'C1', session)}
                        {SessionChairInfo(day, 'C4', session)}
                        {SessionChairInfo(day, 'C6', session)}
             </tr>
}

function Filterme(day,room, time){
    let filtered = data.filter(datum=>datum.day===day).filter(datum=>datum.type==="talk").filter(datum => datum.room === room && datum.time === time)
    let title = filtered.map(item =>item.title)
    let id = filtered.map(item => item.id)
    let authors = filtered.map(item=>item.author).join('').split(',').join(', ').replace(/, ([^,]*)$/, ' and $1')
    let address = '/abstracts/' + id
    if (id != 0){
    return <td><a href={address} target="_blank" rel= "noreferrer noopener" ><em>{title}</em></a><br/>{authors}</td>
    }else{
        return <td><em>{title}</em><br/>{authors}</td>   
    }
}
function FiltermePoster(day){
    return data.filter(datum=>datum.day===day)
                .filter(datum=>datum.type === 'poster')
                .map(item=> <tr><td>{item.author.join(', ').replace(/, ([^,]*)$/, ' and $1')}</td><td><a href={'/abstracts/' + item.id} target="_blank" rel= "noreferrer noopener" ><em>{item.title}</em></a></td></tr>)    
    }
 
function Plenary(paper_id){
    let filtered = data.filter(datum=>datum.id === paper_id)
    let title = filtered.map(item =>item.title)
    let id = filtered.map(item => item.id)
    let authors = filtered.map(item=>item.author).join('').split(',').join(', ').replace(/, ([^,]*)$/, ' and $1')
    let address = '/abstracts/' + id
    let chair = filtered.map(item => item.chair)
   // return <tr><td colSpan="7">{authors}<br/><a href={address} target="_blank" rel= "noreferrer noopener" ><em>{title}</em></a></td></tr>
   return <span>{authors}<br/><a href={address} target="_blank" rel= "noreferrer noopener" ><em>{title}</em></a><br/>chaired by {chair}</span>
}
function Timetable(day){
    if (day === 'structure'){
        return (
            <div>
            <table className="table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">Monday Aug 1</th>
                    <th scope="col">Tuesday Aug 2</th>
                    <th scope="col">Wednesday Aug 3</th>
                    <th scope="col">Thursday Aug 4</th>
                    <th scope="col">Friday Aug 5</th></tr>
            </thead>
            <tbody>
                <tr><th scope="row">8.30</th><td rowSpan="2">Registration</td><td></td><td></td><td></td><td></td></tr>
                <tr><th scope="row">9.00</th><td rowSpan="2">Plenary<br/><a href={'abstracts/1003'} target="_blank" rel= "noreferrer noopener" >Kathryn Allan</a></td><td rowSpan="2">Plenary<br/><a href={'abstracts/1004'} target="_blank" rel= "noreferrer noopener" >John Charles Smith</a></td><td rowSpan="2">Plenary<br/><a href={'abstracts/1005'} target="_blank" rel= "noreferrer noopener" >Joseph Salmons</a></td><td rowSpan="2">Plenary<br/><a href={'abstracts/1007'} target="_blank" rel= "noreferrer noopener" >Frans Plank</a></td></tr>
                <tr><th scope="row">9.30</th><td>Welcome</td></tr>
                <tr><th scope="row">10.00</th><td>Plenary<br/><a href={'abstracts/1001'} target="_blank" rel= "noreferrer noopener" >Paul Kiparsky</a></td><td>Talks(2)</td><td>Talks(2)</td><td>Talks(2)</td><td>Talks(2)</td></tr>
                <tr><th scope="row">11.00</th><td colSpan="4">Tea/Coffee</td></tr>
                <tr><th scope="row">11.30</th><td>Talks(3)</td><td>Talks(3)</td><td>Talks(3)</td><td>Talks(3)</td><td>Talks(3)</td></tr>
                <tr><th scope="row">13.00</th><td colSpan="2">Lunch</td><td rowSpan="6">Free afternoon<br/> (sandwich/packed lunch available)<br/> Excursions </td><td colSpan="2">Lunch</td></tr>
                <tr><th scope="row">13.45</th><td>Talks(3)</td><td>Workshops(3)</td><td>Talks(3)</td><td>Talks(3)</td></tr>
                <tr><th scope="row">15.15</th><td>Tea/Coffee and Posters</td><td>Tea/Coffee</td><td>Tea/Coffee</td><td>Tea/Coffee and Posters</td></tr>
                <tr><th scope="row">15.45</th><td>Poster Session</td><td rowSpan="2">Workshops(4)</td><td>Business Meeting</td><td>Poster session</td></tr>
                <tr><th scope="row">16.50</th><td>Plenary<br/><a href={'abstracts/1002'} target="_blank" rel= "noreferrer noopener" >B.Elan Dresher</a></td><td>Plenary<br/><a href={'abstracts/1006'} target="_blank" rel= "noreferrer noopener" >Claire Bowern</a></td><td>Plenary<br/><a href={'abstracts/1008'} target="_blank" rel= "noreferrer noopener" >Alice Harris</a></td></tr>
                <tr><th scope="row">18.00</th><td><em>Welcome Reception<br/>The Mathematical Institute</em></td><td></td><td></td><td><em>Concluding Remarks & Closing Reception<br/>The Mathematical Institute</em></td></tr>
                <tr><th scope="row">20.00</th><td></td><td></td><td></td><td><em>Conference Dinner<br/><a href="/info#catz">St Catherine's College</a></em></td><td></td></tr>
            </tbody>
            </table>
            <p className="centerMe"> Our Welcome Reception is generously sponsored by Mouton DeGruyter and the Faculty of Linguistics, Philology and Phonetics</p>
            <p className="centerMe"> Our Closing Reception is generously sponsored by The Philological Society and the Faculty of Linguistics, Philology and Phonetics</p>
            <p>For the conference dinner at St Catherine's College, dinner will begin at 8pm. Drinks are not included in the dinner price, but can be purchased from the college bar (right next to Hall) from 6p.m. to 1a.m.</p>
            </div>
        )
    }else if (day === 'monday'){
      return( 
        <div>
        <table className="table table-striped table-hover table-bordered">
            <tbody>
                <tr><th>8.30-9.30</th><td colSpan="7">Registration</td></tr>
                <tr><th>9.30-10.00</th><td colSpan="7" >Welcome <br/> with Professor Dame Louise Richardson AAAS AcSS FRSE RIIA, Vice Chancellor of the University of Oxford</td></tr>
                <tr><th>10.00-11.00</th><td colSpan="7">{Plenary(1001)}</td></tr>
                <tr><th>11.00-11.30</th><td colSpan="7">Tea and Coffee</td></tr>
                <tr><th>Room</th><th>L1</th><th>L2</th><th>L3</th><th>L6</th><th>C1</th><th>C4</th><th>C6</th></tr>
                {SessionChair(day, 'b')}
                <tr><th>11.30-12.00</th><td>{Filterme(day,'L1','1130')}</td><td>{Filterme(day,'L2','1130')}</td><td>{Filterme(day,'L3','1130')}</td><td>{Filterme(day,'L6','1130')}</td><td>{Filterme(day,'C1','1130')}</td><td>{Filterme(day,'C4','1130')}</td><td>{Filterme(day,'C6','1130')}</td></tr>
                <tr><th>12.00-12.30</th><td>{Filterme(day,'L1','1200')}</td><td>{Filterme(day,'L2','1200')}</td><td>{Filterme(day,'L3','1200')}</td><td>{Filterme(day,'L6','1200')}</td><td>{Filterme(day,'C1','1200')}</td><td>{Filterme(day,'C4','1200')}</td><td>{Filterme(day,'C6','1200')}</td></tr>
                <tr><th>12.30-13.00</th><td>{Filterme(day,'L1','1230')}</td><td>{Filterme(day,'L2','1230')}</td><td>{Filterme(day,'L3','1230')}</td><td>{Filterme(day,'L6','1230')}</td><td>{Filterme(day,'C1','1230')}</td><td>{Filterme(day,'C4','1230')}</td><td>{Filterme(day,'C6','1230')}</td></tr>
                <tr><th>13.00-13.45</th><td colSpan="7">Lunch</td></tr>
                {SessionChair(day, 'c')}
                {//                <tr><th></th><th>Germanic</th><th>Parametric Comparison</th><th>Phonology</th><th>Syntax</th><th>Greek</th><th>Phonology:Vowels</th><th>(Ir)regularity</th></tr>
                }
                <tr><th>13.45-14.15</th><td>{Filterme(day,'L1','1345')}</td><td>{Filterme(day,'L2','1345')}</td><td>{Filterme(day,'L3','1345')}</td><td>{Filterme(day,'L6','1345')}</td><td>{Filterme(day,'C1','1345')}</td><td>{Filterme(day,'C4','1345')}</td><td>{Filterme(day,'C6','1345')}</td></tr>
                <tr><th>14.15-14.45</th><td>{Filterme(day,'L1','1415')}</td><td>{Filterme(day,'L2','1415')}</td><td>{Filterme(day,'L3','1415')}</td><td>{Filterme(day,'L6','1415')}</td><td>{Filterme(day,'C1','1415')}</td><td>{Filterme(day,'C4','1415')}</td><td>{Filterme(day,'C6','1415')}</td></tr>
                <tr><th>14.45-15.15</th><td>{Filterme(day,'L1','1445')}</td><td>{Filterme(day,'L2','1445')}</td><td>{Filterme(day,'L3','1445')}</td><td>{Filterme(day,'L6','1445')}</td><td>{Filterme(day,'C1','1445')}</td><td>{Filterme(day,'C4','1445')}</td><td>{Filterme(day,'C6','1445')}</td></tr>
                <tr><th>15.15-15.45</th><td colSpan="7">Tea, Coffee & Posters</td></tr>
                <tr><th>15.45-16.45</th><td colSpan="7"><a href="#posters">Posters</a></td></tr>
                <tr><th>16.50-17.50</th><td colSpan="7">{Plenary(1002)}</td></tr>
                <tr><th>18.00</th><td colSpan="7">Welcome Reception<br/>The Mathematical Institute <br/><em>Generously sponsored by Mouton DeGruyter and the Faculty of Linguistics, Philology and Phonetics</em></td></tr>
            </tbody>
        </table> 
        <br/>
        <h5 id="posters">Poster Session</h5>
        <table className="table table-striped table-hover table-bordered col-width tablenum">
            <tbody>
            {FiltermePoster('monday')}
            </tbody>
        </table>
        </div>
        )
    }else if(day ==='tuesday'){
    return(
        <div>
        <table className="table table-striped table-hover table-bordered tc-line">
        <tbody>
            <tr><th>9.00-10.00</th><td colSpan="7">{Plenary(1003)}</td></tr>
            <tr><th>Room</th><th>L1</th><th>L2</th><th>L3</th><th>L6</th><th>C1</th><th>C4</th><th>C6</th></tr>
            {SessionChair(day, 'a')}
          {// <tr><th></th><th>English Semantics</th><th>Icelandic Syntax</th><th>Sociolinguistic Typology</th><th>Comparative Reconstruction</th><th>Bantu</th><th>Hungarian</th><th>Celtic</th></tr>
    }
           <tr><th>10.00-10.30</th><td>{Filterme(day,'L1','1000')}</td><td>{Filterme(day,'L2','1000')}</td><td>{Filterme(day,'L3','1000')}</td><td>{Filterme(day,'L6','1000')}</td><td>{Filterme(day,'C1','1000')}</td><td>{Filterme(day,'C4','1000')}</td><td>{Filterme(day,'C6','1000')}</td></tr>
            <tr><th>10.30-11.00</th><td>{Filterme(day,'L1','1030')}</td><td>{Filterme(day,'L2','1030')}</td><td>{Filterme(day,'L3','1030')}</td><td>{Filterme(day,'L6','1030')}</td><td>{Filterme(day,'C1','1030')}</td><td>{Filterme(day,'C4','1030')}</td><td>{Filterme(day,'C6','1030')}</td></tr>
            <tr><th>11.00-11.30</th><td colSpan="7">Tea and Coffee</td></tr>
            <tr><th>Room</th><th>L1</th><th>L2</th><th>L3</th><th>L6</th><th>C1</th><th>C4</th><th>C6</th></tr>
            {SessionChair(day, 'b')}
            {//<tr><th></th><th>Scandinavian Semantics</th><th>Germanic Syntax</th><th>Modelling</th><th>Actuation</th><th>Contact</th><th>Austronesian</th><th>Tonal Phenomena</th></tr>
            }
            <tr><th>11.30-12.00</th><td>{Filterme(day,'L1','1130')}</td><td>{Filterme(day,'L2','1130')}</td><td>{Filterme(day,'L3','1130')}</td><td>{Filterme(day,'L6','1130')}</td><td>{Filterme(day,'C1','1130')}</td><td>{Filterme(day,'C4','1130')}</td><td>{Filterme(day,'C6','1130')}</td></tr>
            <tr><th>12.00-12.30</th><td>{Filterme(day,'L1','1200')}</td><td>{Filterme(day,'L2','1200')}</td><td>{Filterme(day,'L3','1200')}</td><td>{Filterme(day,'L6','1200')}</td><td>{Filterme(day,'C1','1200')}</td><td>{Filterme(day,'C4','1200')}</td><td>{Filterme(day,'C6','1200')}</td></tr>
            <tr><th>12.30-13.00</th><td>{Filterme(day,'L1','1230')}</td><td>{Filterme(day,'L2','1230')}</td><td>{Filterme(day,'L3','1230')}</td><td>{Filterme(day,'L6','1230')}</td><td>{Filterme(day,'C1','1230')}</td><td>{Filterme(day,'C4','1230')}</td><td>{Filterme(day,'C6','1230')}</td></tr>
            <tr><th>13.00-13.45</th><td colSpan="8">Lunch</td></tr>
            <tr><th></th><th colSpan="7">Workshops</th></tr>
            <tr><th>Room</th><th>L1</th><th>L2</th><th>L3</th><th>L6</th><th>C1</th><th>C4</th><th>C6</th><th><a href="/info#trinitycollege">Trinity College</a></th></tr>
            <tr><th></th><th>The Typology of Contact-Induced Changes in Morphosyntax</th><th>On contact-induced non-change</th><th>Ancient languages and Algorithms: Demystifying new methods in historical linguistics</th><th>Acting on actuation: Why here, why now?</th><th>Consequences of the OV-to-VO change on different levels of clause structure</th><th>Historical Linguistics at school: An ever-pressing need?</th><th>Cliticisation in the evolution of bound morphology</th><th>Recent advances in computational historical linguistics: New methods and results</th></tr>
            <tr><th>13.45-14.15</th><td>{Filterme(day,'L1','1345')}</td><td>{Filterme(day,'L2','1345')}</td><td>{Filterme(day,'L3','1345')}</td><td>{Filterme(day,'L6','1345')}</td><td>{Filterme(day,'C1','1345')}</td><td>{Filterme(day,'C4','1345')}</td><td>{Filterme(day,'C6','1345')}</td><td>{Filterme(day,'TC','1345')}</td></tr>
            <tr><th>14.15-14.45</th><td>{Filterme(day,'L1','1415')}</td><td>{Filterme(day,'L2','1415')}</td><td>{Filterme(day,'L3','1415')}</td><td>{Filterme(day,'L6','1415')}</td><td>{Filterme(day,'C1','1415')}</td><td>{Filterme(day,'C4','1415')}</td><td>{Filterme(day,'C6','1415')}</td><td>{Filterme(day,'TC','1415')}</td></tr>
            <tr><th>14.45-15.15</th><td>{Filterme(day,'L1','1445')}</td><td>{Filterme(day,'L2','1445')}</td><td>{Filterme(day,'L3','1445')}</td><td>{Filterme(day,'L6','1445')}</td><td>{Filterme(day,'C1','1445')}</td><td>{Filterme(day,'C4','1445')}</td><td>{Filterme(day,'C6','1445')}</td><td>{Filterme(day,'TC','1445')}</td></tr>
            <tr><th>15.15-15.45</th><td colSpan="8">Tea & Coffee</td></tr>
            <tr><th>15.45-16.15</th><td>{Filterme(day,'L1','1545')}</td><td>{Filterme(day,'L2','1545')}</td><td>{Filterme(day,'L3','1545')}</td><td>{Filterme(day,'L6','1545')}</td><td>{Filterme(day,'C1','1545')}</td><td>{Filterme(day,'C4','1545')}</td><td>{Filterme(day,'C6','1545')}</td><td>{Filterme(day,'TC','1545')}</td></tr>
            <tr><th>16.15-16.45</th><td>{Filterme(day,'L1','1615')}</td><td>{Filterme(day,'L2','1615')}</td><td>{Filterme(day,'L3','1615')}</td><td>{Filterme(day,'L6','1615')}</td><td>{Filterme(day,'C1','1615')}</td><td>{Filterme(day,'C4','1615')}</td><td>{Filterme(day,'C6','1615')}</td><td>{Filterme(day,'TC','1615')}</td></tr>
            <tr><th>16.45-17.15</th><td>{Filterme(day,'L1','1645')}</td><td>{Filterme(day,'L2','1645')}</td><td>{Filterme(day,'L3','1645')}</td><td>{Filterme(day,'L6','1645')}</td><td>{Filterme(day,'C1','1645')}</td><td>{Filterme(day,'C4','1645')}</td><td>{Filterme(day,'C6','1645')}</td><td>{Filterme(day,'TC','1645')}</td></tr>
            <tr><th>17.15-17.45</th><td>{Filterme(day,'L1','1715')}</td><td>{Filterme(day,'L2','1715')}</td><td>{Filterme(day,'L3','1715')}</td><td>{Filterme(day,'L6','1715')}</td><td>{Filterme(day,'C1','1715')}</td><td>{Filterme(day,'C4','1715')}</td><td>{Filterme(day,'C6','1715')}</td><td>{Filterme(day,'TC','1715')}</td></tr>
        </tbody>
    </table>
    <p className="centerMe">Note that the <em>Recent advances in computational historical linguistics: New methods and results</em> workshop in <a href="/info#trinitycollege">Trinity College</a> is in a different building from the rest of the conference. </p>
    </div> 
    )
    }else if(day==="wednesday"){
    return(
        <table className="table table-striped  table-hover table-bordered">
        <tbody>
            <tr><th>9.00-10.00</th><td colSpan="7">{Plenary(1004)}</td></tr>
            <tr><th>Room</th><th>L1</th><th>L2</th><th>L3</th><th>L6</th><th>C1</th><th>C4</th><th>C6</th></tr>
            {SessionChair(day, 'a')}
            {//<tr><th></th><th>Contact</th><th>Syntax</th><th>Aramaic Morphosyntax</th><th>Simulations</th><th>Basque Phonology</th><th>Albanian & Armenian</th><th>Languages of the Americas</th></tr>
            }
            <tr><th>10.00-10.30</th><td>{Filterme(day,'L1','1000')}</td><td>{Filterme(day,'L2','1000')}</td><td>{Filterme(day,'L3','1000')}</td><td>{Filterme(day,'L6','1000')}</td><td>{Filterme(day,'C1','1000')}</td><td>{Filterme(day,'C4','1000')}</td><td>{Filterme(day,'C6','1000')}</td></tr>
            <tr><th>10.30-11.00</th><td>{Filterme(day,'L1','1030')}</td><td>{Filterme(day,'L2','1030')}</td><td>{Filterme(day,'L3','1030')}</td><td>{Filterme(day,'L6','1030')}</td><td>{Filterme(day,'C1','1030')}</td><td>{Filterme(day,'C4','1030')}</td><td>{Filterme(day,'C6','1030')}</td></tr>
            <tr><th>11.00-11.30</th><td colSpan="7">Tea and Coffee</td></tr>
            {SessionChair(day, 'b')}
            {//  <tr><th></th><th>Contact</th><th>Middle English Morphosyntax</th><th>Phylogenetics</th><th>Corpus Linguistics</th><th>Basque Morphosyntax</th><th>Ancient IE languages</th><th>Phonology</th></tr>
             }
            <tr><th>11.30-12.00</th><td>{Filterme(day,'L1','1130')}</td><td>{Filterme(day,'L2','1130')}</td><td>{Filterme(day,'L3','1130')}</td><td>{Filterme(day,'L6','1130')}</td><td>{Filterme(day,'C1','1130')}</td><td>{Filterme(day,'C4','1130')}</td><td>{Filterme(day,'C6','1130')}</td></tr>
            <tr><th>12.00-12.30</th><td>{Filterme(day,'L1','1200')}</td><td>{Filterme(day,'L2','1200')}</td><td>{Filterme(day,'L3','1200')}</td><td>{Filterme(day,'L6','1200')}</td><td>{Filterme(day,'C1','1200')}</td><td>{Filterme(day,'C4','1200')}</td><td>{Filterme(day,'C6','1200')}</td></tr>
            <tr><th>12.30-13.00</th><td>{Filterme(day,'L1','1230')}</td><td>{Filterme(day,'L2','1230')}</td><td>{Filterme(day,'L3','1230')}</td><td>{Filterme(day,'L6','1230')}</td><td>{Filterme(day,'C1','1230')}</td><td>{Filterme(day,'C4','1230')}</td><td>{Filterme(day,'C6','1230')}</td></tr>
            <tr><th>13.00-13.45</th><td colSpan="7">Lunch</td></tr>
            <tr><th></th><td colSpan="7">Excursions</td></tr>
        </tbody>
        </table>
    )
    }else if(day==="thursday"){
    return(
        <div>
        <table className="table table-striped  table-hover table-bordered">
        <tbody>
            <tr><th>9.00-10.00</th><td colSpan="7">{Plenary(1005)}</td></tr>
            <tr><th>Room</th><th>L1</th><th>L2</th><th>L3</th><th>L6</th><th>C1</th><th>C4</th><th>C6</th></tr>
            {SessionChair(day, 'a')}
            {//<tr><th></th><th>Contact</th><th>Greek & Sanskrit Morphosyntax</th><th>Slavonic</th><th>Languages of Western Africa</th><th>Danish</th><th>Reconstruction & Cognacy</th><th>Subjects</th></tr>
    }
            <tr><th>10.00-10.30</th><td>{Filterme(day,'L1','1000')}</td><td>{Filterme(day,'L2','1000')}</td><td>{Filterme(day,'L3','1000')}</td><td>{Filterme(day,'L6','1000')}</td><td>{Filterme(day,'C1','1000')}</td><td>{Filterme(day,'C4','1000')}</td><td>{Filterme(day,'C6','1000')}</td></tr>
            <tr><th>10.30-11.00</th><td>{Filterme(day,'L1','1030')}</td><td>{Filterme(day,'L2','1030')}</td><td>{Filterme(day,'L3','1030')}</td><td>{Filterme(day,'L6','1030')}</td><td>{Filterme(day,'C1','1030')}</td><td>{Filterme(day,'C4','1030')}</td><td>{Filterme(day,'C6','1030')}</td></tr>
            <tr><th>11.00-11.30</th><td colSpan="7">Tea and Coffee</td></tr>
            {SessionChair(day, 'b')}
            {//<tr><th></th><th>Contact</th><th>Germanic Morphosyntax</th><th>Phylogenetics</th><th>Word Order</th><th>Analogy</th><th>Early Modern English</th><th>Early German Phonology</th></tr>
            }
            <tr><th>11.30-12.00</th><td>{Filterme(day,'L1','1130')}</td><td>{Filterme(day,'L2','1130')}</td><td>{Filterme(day,'L3','1130')}</td><td>{Filterme(day,'L6','1130')}</td><td>{Filterme(day,'C1','1130')}</td><td>{Filterme(day,'C4','1130')}</td><td>{Filterme(day,'C6','1130')}</td></tr>
            <tr><th>12.00-12.30</th><td>{Filterme(day,'L1','1200')}</td><td>{Filterme(day,'L2','1200')}</td><td>{Filterme(day,'L3','1200')}</td><td>{Filterme(day,'L6','1200')}</td><td>{Filterme(day,'C1','1200')}</td><td>{Filterme(day,'C4','1200')}</td><td>{Filterme(day,'C6','1200')}</td></tr>
            <tr><th>12.30-13.00</th><td>{Filterme(day,'L1','1230')}</td><td>{Filterme(day,'L2','1230')}</td><td>{Filterme(day,'L3','1230')}</td><td>{Filterme(day,'L6','1230')}</td><td>{Filterme(day,'C1','1230')}</td><td>{Filterme(day,'C4','1230')}</td><td>{Filterme(day,'C6','1230')}</td></tr>
            <tr><th>13.00-13.45</th><td colSpan="7">Lunch</td></tr>
            {SessionChair(day, 'c')}
            {//<tr><th></th><th>Contact</th><th>Middle English morphosyntax</th><th>Phonology</th><th>Phylogenetics</th><th>Analogy</th><th>Morphological Marking</th><th>Languages of China</th></tr>
            }
            <tr><th>13.45-14.15</th><td>{Filterme(day,'L1','1345')}</td><td>{Filterme(day,'L2','1345')}</td><td>{Filterme(day,'L3','1345')}</td><td>{Filterme(day,'L6','1345')}</td><td>{Filterme(day,'C1','1345')}</td><td>{Filterme(day,'C4','1345')}</td><td>{Filterme(day,'C6','1345')}</td></tr>
            <tr><th>14.15-14.45</th><td>{Filterme(day,'L1','1415')}</td><td>{Filterme(day,'L2','1415')}</td><td>{Filterme(day,'L3','1415')}</td><td>{Filterme(day,'L6','1415')}</td><td>{Filterme(day,'C1','1415')}</td><td>{Filterme(day,'C4','1415')}</td><td>{Filterme(day,'C6','1415')}</td></tr>
            <tr><th>14.45-15.15</th><td>{Filterme(day,'L1','1445')}</td><td>{Filterme(day,'L2','1445')}</td><td>{Filterme(day,'L3','1445')}</td><td>{Filterme(day,'L6','1445')}</td><td>{Filterme(day,'C1','1445')}</td><td>{Filterme(day,'C4','1445')}</td><td>{Filterme(day,'C6','1445')}</td></tr>
            <tr><th>15.15-15.45</th><td colSpan="7">Tea & Coffee</td></tr>
            <tr><th>15.45-16.45</th><td colSpan="7">Business Meeting (L1)</td></tr>
            <tr><th>16.50-17.50</th><td colSpan="7">{Plenary(1006)}</td></tr>
            <tr><th>20.00</th><td colSpan="7">Dinner at <a href="/info#catz">St Catherine's College</a></td></tr>
            </tbody>
        </table>
        <h5>The Conference Dinner</h5>
        <p>The dinner is held in the <a href="https://ichl.ling-phil.ox.ac.uk/info#catz" target="_blank">Hall of St Catherine's College, Manor Road, OX1 3UJ</a>. It will begin at 2000 sharp. We'd be grateful if you could arrive by 1945 as it will take some time to seat all 269 attendees. <br/> 
            If you have booked the conference dinner, this will be marked on the back of your conference badge that you collect at registration. If you have not booked, unfortunately we cannot take any further bookings. <br/>
            Drinks are not included in the dinner ticket. Beer, spirits and wine by the glass and by the bottle will be available for purchase from the bar (adjacent to the Hall) from 1830 until 0100, and may be taken into the Hall. <br/>
            We'd be grateful if people with special dietary requirements could collect a card from the front of the Hall before/at the start of dinner and display this at their place, so that the serving staff know what to serve you. </p>
        
        </div>  
        )
    }else if(day==="friday"){
    return(
        <div>
        <table className="table table-striped table-hover table-bordered">
        <tbody>
            <tr><th>9.00-10.00</th><td colSpan="7">{Plenary(1007)}</td></tr>
            <tr><th>Room</th><th>L1</th><th>L2</th><th>L3</th><th>L6</th><th>C1</th><th>C4</th><th>C6</th></tr>
            {SessionChair(day, 'a')}
            {//<tr><th></th><th>Contact in Romance</th><th>Syntax</th><th>Loanwords in English</th><th>Morphology</th><th>Modern English & corpora</th><th>Slavonic</th><th>Word Order</th></tr>
    }
            <tr><th>10.00-10.30</th><td>{Filterme(day,'L1','1000')}</td><td>{Filterme(day,'L2','1000')}</td><td>{Filterme(day,'L3','1000')}</td><td>{Filterme(day,'L6','1000')}</td><td>{Filterme(day,'C1','1000')}</td><td>{Filterme(day,'C4','1000')}</td><td>{Filterme(day,'C6','1000')}</td></tr>
            <tr><th>10.30-11.00</th><td>{Filterme(day,'L1','1030')}</td><td>{Filterme(day,'L2','1030')}</td><td>{Filterme(day,'L3','1030')}</td><td>{Filterme(day,'L6','1030')}</td><td>{Filterme(day,'C1','1030')}</td><td>{Filterme(day,'C4','1030')}</td><td>{Filterme(day,'C6','1030')}</td></tr>
            <tr><th>11.00-11.30</th><td colSpan="7">Tea and Coffee</td></tr>
            {SessionChair(day, 'b')}
            {//<tr><th></th><th> Language Contact</th><th>Syntax</th><th>Romance Morphosyntax</th><th>Grammaticalization</th><th>English</th><th>Modelling</th><th>Indo-Iranian</th></tr>
            }
            <tr><th>11.30-12.00</th><td>{Filterme(day,'L1','1130')}</td><td>{Filterme(day,'L2','1130')}</td><td>{Filterme(day,'L3','1130')}</td><td>{Filterme(day,'L6','1130')}</td><td>{Filterme(day,'C1','1130')}</td><td>{Filterme(day,'C4','1130')}</td><td>{Filterme(day,'C6','1130')}</td></tr>
            <tr><th>12.00-12.30</th><td>{Filterme(day,'L1','1200')}</td><td>{Filterme(day,'L2','1200')}</td><td>{Filterme(day,'L3','1200')}</td><td>{Filterme(day,'L6','1200')}</td><td>{Filterme(day,'C1','1200')}</td><td>{Filterme(day,'C4','1200')}</td><td>{Filterme(day,'C6','1200')}</td></tr>
            <tr><th>12.30-13.00</th><td>{Filterme(day,'L1','1230')}</td><td>{Filterme(day,'L2','1230')}</td><td>{Filterme(day,'L3','1230')}</td><td>{Filterme(day,'L6','1230')}</td><td>{Filterme(day,'C1','1230')}</td><td>{Filterme(day,'C4','1230')}</td><td>{Filterme(day,'C6','1230')}</td></tr>
            <tr><th>13.00-13.45</th><td colSpan="7">Lunch</td></tr>
            {SessionChair(day, 'c')}
            {//<tr><th></th><th>Romance</th><th>Syntax</th><th>Papuan and Austronesian Languages</th><th>Romance in Contact</th><th>Morphosyntax</th><th>Syntax & Semantics of Ancient Languages</th><th>Germanic</th></tr>
    }
            <tr><th>13.45-14.15</th><td>{Filterme(day,'L1','1345')}</td><td>{Filterme(day,'L2','1345')}</td><td>{Filterme(day,'L3','1345')}</td><td>{Filterme(day,'L6','1345')}</td><td>{Filterme(day,'C1','1345')}</td><td>{Filterme(day,'C4','1345')}</td><td>{Filterme(day,'C6','1345')}</td></tr>
            <tr><th>14.15-14.45</th><td>{Filterme(day,'L1','1415')}</td><td>{Filterme(day,'L2','1415')}</td><td>{Filterme(day,'L3','1415')}</td><td>{Filterme(day,'L6','1415')}</td><td>{Filterme(day,'C1','1415')}</td><td>{Filterme(day,'C4','1415')}</td><td>{Filterme(day,'C6','1415')}</td></tr>
            <tr><th>14.45-15.15</th><td>{Filterme(day,'L1','1445')}</td><td>{Filterme(day,'L2','1445')}</td><td>{Filterme(day,'L3','1445')}</td><td>{Filterme(day,'L6','1445')}</td><td>{Filterme(day,'C1','1445')}</td><td>{Filterme(day,'C4','1445')}</td><td>{Filterme(day,'C6','1445')}</td></tr>
            <tr><th>15.15-15.45</th><td colSpan="7">Tea, Coffee & Posters</td></tr>
            <tr><th>15.45-16.45</th><td colSpan="7"><a href="#postersfri">Posters</a> </td></tr>
            <tr><th>16.50-17.50</th><td colSpan="7">{Plenary(1008)}</td></tr>
            <tr><th>18.00</th><td colSpan="7">Concluding Remarks & Closing Reception<br/><em>The Mathematical Institute</em><br/>Generously sponsored by the Philological Society and the Faculty of Linguistics, Philology and Phonetics</td></tr>
          {/*  <tr><th></th><td colSpan="7">Closing Reception</td></tr> */}
            </tbody>
        </table>
        <h5 id="postersfri">Poster Session</h5>
        <table className="table table-striped table-hover table-bordered col-width tablenum">
            <tbody>
            {FiltermePoster('friday')}
            </tbody>
        </table>  
        </div>
        )    
    }
}

export default Timetable;
