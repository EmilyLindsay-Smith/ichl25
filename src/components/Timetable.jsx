import React from "react";
import {data} from './data';
import { useNavigate } from 'react-router-dom';

function Filterme(day,room, time){
    const navigate = useNavigate();
    const toAbstracts=(num)=>{navigate('/abstracts',{state:{value:num}})}
    const toWorkshops=()=>{navigate('/workshops')}

    let filtered = data.filter(datum=>datum.day===day).filter(datum => datum.room === room && datum.time === time)
    let title = filtered.map(item =>item.title)
    let id = filtered.map(item => item.id)
    let authors = filtered.map(item=>item.author).join('').split(',').join(', ').replace(/, ([^,]*)$/, ' and $1')
    return <td><button className="btn button-abstract"  onClick={id!==0 ?()=>{toAbstracts(id)}:()=>{toWorkshops()}}> <em>{title}</em></button><br/><em>{authors}</em></td>
  }

function FilterMePoster(day){
    const navigate = useNavigate();
    const toAbstracts=(num)=>{navigate('/abstracts',{state:{value:num}})}
    let filtered = data.filter(datum=>datum.day === day && datum.type === 'poster')
    return filtered.map(item => <li id={item.id}>{item.author.join(', ').replace(/, ([^,]*)$/, ' and $1')}<br/><button className="btn button-abstract"  onClick={()=>{toAbstracts(item.id)}}> <em>{item.title}</em></button></li>)
}  
function Plenary(id){
    const navigate = useNavigate();
    const toAbstracts=(num)=>{navigate('/abstracts',{state:{value:num}})}
    let filtered = data.filter(datum => datum.id === id)
    return filtered.map(item=>  <td class="text-center"><button className="btn button-abstract"  onClick={()=>{toAbstracts(item.id)}}> <em>{item.title}</em></button><br/><em>{item.author}</em></td>)
}
function Timetable(day){
    if (day === 'structure'){
        return(
            <table class="table table-striped table-hover table-bordered">
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
                <tr><th scope="row">8.00</th><td>Registration</td><td></td><td></td><td></td><td></td></tr>
                <tr><th scope="row">9.00</th><td>Welcome</td><td>Plenary<br/>Kathryn Allan</td><td>Plenary<br/>John Charles Smith</td><td>Plenary<br/>Joseph Salmons</td><td>Plenary<br/>Frans Plank</td></tr>
                <tr><th scope="row">10.00</th><td>Plenary</td><td>Talks(2)</td><td>Talks(2)</td><td>Talks(2)</td><td>Talks(2)</td> </tr>
                <tr><th scope="row">11.00</th><td colspan="4">Tea/Coffee</td> </tr>
                <tr><th scope="row">11.30</th><td>Talks(3)</td><td>Talks(3)</td><td>Talks(3)</td><td>Talks(3)</td><td>Talks(3)</td> </tr>
                <tr><th scope="row">13.00</th><td colspan="2">Lunch</td><td rowspan="6">Free afternoon<br/> (sandwich/packed lunch available)<br/> Excursions </td><td colspan="2">Lunch</td></tr>
                <tr><th scope="row">13.45</th><td>Talks(3)</td><td>Workshops(3)</td><td>Talks(3)</td><td>Talks(3)</td> </tr>
                <tr><th scope="row">15.15</th><td>Tea/Coffee and Posters</td><td>Tea/Coffee</td><td>Tea/Coffee</td><td>Tea/Coffee and Posters</td> </tr>
                <tr><th scope="row">15.45</th><td>Poster Session</td><td rowspan="2">Workshops(4)</td><td>Business Meeting</td><td>Poster session</td> </tr>
                <tr><th scope="row">16.50</th><td>Plenary<br/>B.Elan Dresher</td><td>Plenary<br/>Claire Bowern</td><td>Plenary<br/>Alice Harris</td> </tr>
                <tr><th scope="row">18.00</th><td><em>Welcome Reception</em></td><td></td><td><em>Conference Dinner</em></td></tr>
            </tbody>
            </table>
        )
    }else if (day === 'monday'){
      return( 
        <div>
        <table class="table table-striped table-hover table-bordered">
            <tbody>
                <tr><th>8.00-9.30</th><td colspan="7">Registration</td></tr>
                <tr><th>9.30-10.00</th><td colspan="7">Welcome</td></tr>
                <tr><th>10.00-11.00</th><td colspan="7">{Plenary(1001)}</td></tr>
                <tr><th>11.00-11.30</th><td colspan="7">Tea and Coffee</td></tr>
                <tr><th></th><th>L1(360)</th><th>L2(210)</th><th>L3(110)</th><th>L6(40)</th><th>C1(24)</th><th>C4(24)</th><th>C6(24)</th></tr>
                <tr><th></th><th>Language Contact</th><th>Syntax</th><th>Phonology</th><th>Romance</th><th>Germanic Semantics & Pragmatics</th><th>Morphology</th><th>Corpus Studies & Translation</th></tr>
                <tr><th>11.30-12.00</th><td>{Filterme(day,'L1','1130')}</td><td>{Filterme(day,'L2','1130')}</td><td>{Filterme(day,'L3','1130')}</td><td>{Filterme(day,'L6','1130')}</td><td>{Filterme(day,'C1','1130')}</td><td>{Filterme(day,'C4','1130')}</td><td>{Filterme(day,'C6','1130')}</td></tr>
                <tr><th>12.00-12.30</th><td>{Filterme(day,'L1','1200')}</td><td>{Filterme(day,'L2','1200')}</td><td>{Filterme(day,'L3','1200')}</td><td>{Filterme(day,'L6','1200')}</td><td>{Filterme(day,'C1','1200')}</td><td>{Filterme(day,'C4','1200')}</td><td>{Filterme(day,'C6','1200')}</td></tr>
                <tr><th>12.30-13.00</th><td>{Filterme(day,'L1','1230')}</td><td>{Filterme(day,'L2','1230')}</td><td>{Filterme(day,'L3','1230')}</td><td>{Filterme(day,'L6','1230')}</td><td>{Filterme(day,'C1','1230')}</td><td>{Filterme(day,'C4','1230')}</td><td>{Filterme(day,'C6','1230')}</td></tr>
                <tr><th>13.00-13.45</th><td colspan="7">Lunch</td></tr>
                <tr><th></th><th>Germanic</th><th>Parametric Comparison</th><th>Phonology</th><th>Bantu&Cushitic</th><th>Greek</th><th>Phonology:Vowels</th><th>(Ir)regularity</th></tr>
                <tr><th>13.45-14.15</th><td>{Filterme(day,'L1','1345')}</td><td>{Filterme(day,'L2','1345')}</td><td>{Filterme(day,'L3','1345')}</td><td>{Filterme(day,'L6','1345')}</td><td>{Filterme(day,'C1','1345')}</td><td>{Filterme(day,'C4','1345')}</td><td>{Filterme(day,'C6','1345')}</td></tr>
                <tr><th>14.15-14.45</th><td>{Filterme(day,'L1','1415')}</td><td>{Filterme(day,'L2','1415')}</td><td>{Filterme(day,'L3','1415')}</td><td>{Filterme(day,'L6','1415')}</td><td>{Filterme(day,'C1','1415')}</td><td>{Filterme(day,'C4','1415')}</td><td>{Filterme(day,'C6','1415')}</td></tr>
                <tr><th>14.45-15.15</th><td>{Filterme(day,'L1','1445')}</td><td>{Filterme(day,'L2','1445')}</td><td>{Filterme(day,'L3','1445')}</td><td>{Filterme(day,'L6','1445')}</td><td>{Filterme(day,'C1','1445')}</td><td>{Filterme(day,'C4','1445')}</td><td>{Filterme(day,'C6','1445')}</td></tr>
                <tr><th>15.15-15.45</th><td colspan="7">Tea, Coffee & Posters</td></tr>
                <tr><th>15.45-16.45</th><td colspan="7"><a href="#posters">Posters</a></td></tr>
                <tr><th>16.50-17.50</th><td colspan="7">{Plenary(1002)}</td></tr>
                <tr><th>18.00</th><td colspan="7">Welcome Reception</td></tr>
            </tbody>
        </table> 
        <h5 id="posters">Poster Session</h5>
        <ul>
            {FilterMePoster('monday')}
        </ul>
        </div>
        )
    }else if(day ==='tuesday'){
    return(
        <table class="table table-striped table-hover table-bordered">
        <tbody>
            <tr><th>9.00-10.00</th><td colspan="8">{Plenary(1003)}</td></tr>
            <tr><th></th><th>L1(360)</th><th>L2(210)</th><th>L3(110)</th><th>L6(40)</th><th>C1(24)</th><th>C4(24)</th><th>C6(24)</th><th>Trinity College</th></tr>
            <tr><th></th><th>English Semantics</th><th>Icelandic Syntax</th><th>Sociolinguistic Typology</th><th>Negation</th><th>Bantu</th><th>Hungarian</th><th>Celtic</th></tr>
            <tr><th>10.00-10.30</th><td>{Filterme(day,'L1','1000')}</td><td>{Filterme(day,'L2','1000')}</td><td>{Filterme(day,'L3','1000')}</td><td>{Filterme(day,'L6','1000')}</td><td>{Filterme(day,'C1','1000')}</td><td>{Filterme(day,'C4','1000')}</td><td>{Filterme(day,'C6','1000')}</td></tr>
            <tr><th>10.30-11.00</th><td>{Filterme(day,'L1','1030')}</td><td>{Filterme(day,'L2','1030')}</td><td>{Filterme(day,'L3','1030')}</td><td>{Filterme(day,'L6','1030')}</td><td>{Filterme(day,'C1','1030')}</td><td>{Filterme(day,'C4','1030')}</td><td>{Filterme(day,'C6','1030')}</td></tr>
            <tr><th>11.00-11.30</th><td colspan="8">Tea and Coffee</td></tr>
            <tr><th></th><th>Scandinavian Semantics</th><th>Germanic Syntax</th><th>Modelling</th><th>Actuation</th><th>Contact</th><th>Austronesian</th><th>Tonal Phenomena</th></tr>
            <tr><th>11.30-12.00</th><td>{Filterme(day,'L1','1130')}</td><td>{Filterme(day,'L2','1130')}</td><td>{Filterme(day,'L3','1130')}</td><td>{Filterme(day,'L6','1130')}</td><td>{Filterme(day,'C1','1130')}</td><td>{Filterme(day,'C4','1130')}</td><td>{Filterme(day,'C6','1130')}</td></tr>
            <tr><th>12.00-12.30</th><td>{Filterme(day,'L1','1200')}</td><td>{Filterme(day,'L2','1200')}</td><td>{Filterme(day,'L3','1200')}</td><td>{Filterme(day,'L6','1200')}</td><td>{Filterme(day,'C1','1200')}</td><td>{Filterme(day,'C4','1200')}</td><td>{Filterme(day,'C6','1200')}</td></tr>
            <tr><th>12.30-13.00</th><td>{Filterme(day,'L1','1230')}</td><td>{Filterme(day,'L2','1230')}</td><td>{Filterme(day,'L3','1230')}</td><td>{Filterme(day,'L6','1230')}</td><td>{Filterme(day,'C1','1230')}</td><td>{Filterme(day,'C4','1230')}</td><td>{Filterme(day,'C6','1230')}</td></tr>
            <tr><th>13.00-13.45</th><td colspan="8">Lunch</td></tr>
            <tr><th></th><th colspan="8">Workshops</th></tr>
            <tr><th></th><th>The Typology of Contact-Induced Changes in Morphosyntax</th><th>On contact-induced non-change</th><th>Ancient languages and Algorithms: Demystifying new methods in historical linguistics</th><th>Acting on actuation: Why here, why now?</th><th>Consequences of the OV-to-VO change on different levels of clause structure</th><th>Historical Linguistics at school: An ever-pressing need?</th><th>Cliticisation in the evolution of bound morphology</th><th>Recent advances in computational historical linguistics: New methods and results</th></tr>
            <tr><th>13.45-14.15</th><td>{Filterme(day,'L1','1345')}</td><td>{Filterme(day,'L2','1345')}</td><td>{Filterme(day,'L3','1345')}</td><td>{Filterme(day,'L6','1345')}</td><td>{Filterme(day,'C1','1345')}</td><td>{Filterme(day,'C4','1345')}</td><td>{Filterme(day,'C6','1345')}</td><td>{Filterme(day,'TC','1345')}</td></tr>
            <tr><th>14.15-14.45</th><td>{Filterme(day,'L1','1415')}</td><td>{Filterme(day,'L2','1415')}</td><td>{Filterme(day,'L3','1415')}</td><td>{Filterme(day,'L6','1415')}</td><td>{Filterme(day,'C1','1415')}</td><td>{Filterme(day,'C4','1415')}</td><td>{Filterme(day,'C6','1415')}</td><td>{Filterme(day,'TC','1415')}</td></tr>
            <tr><th>14.45-15.15</th><td>{Filterme(day,'L1','1445')}</td><td>{Filterme(day,'L2','1445')}</td><td>{Filterme(day,'L3','1445')}</td><td>{Filterme(day,'L6','1445')}</td><td>{Filterme(day,'C1','1445')}</td><td>{Filterme(day,'C4','1445')}</td><td>{Filterme(day,'C6','1445')}</td><td>{Filterme(day,'TC','1445')}</td></tr>
            <tr><th>15.15-15.45</th><td colspan="8">Tea, Coffee & Posters</td></tr>
            <tr><th>15.45-16.15</th><td>{Filterme(day,'L1','1545')}</td><td>{Filterme(day,'L2','1545')}</td><td>{Filterme(day,'L3','1545')}</td><td>{Filterme(day,'L6','1545')}</td><td>{Filterme(day,'C1','1545')}</td><td>{Filterme(day,'C4','1545')}</td><td>{Filterme(day,'C6','1545')}</td><td>{Filterme(day,'TC','1545')}</td></tr>
            <tr><th>16.15-16.45</th><td>{Filterme(day,'L1','1615')}</td><td>{Filterme(day,'L2','1615')}</td><td>{Filterme(day,'L3','1615')}</td><td>{Filterme(day,'L6','1615')}</td><td>{Filterme(day,'C1','1615')}</td><td>{Filterme(day,'C4','1615')}</td><td>{Filterme(day,'C6','1615')}</td><td>{Filterme(day,'TC','1615')}</td></tr>
            <tr><th>16.45-17.15</th><td>{Filterme(day,'L1','1645')}</td><td>{Filterme(day,'L2','1645')}</td><td>{Filterme(day,'L3','1645')}</td><td>{Filterme(day,'L6','1645')}</td><td>{Filterme(day,'C1','1645')}</td><td>{Filterme(day,'C4','1645')}</td><td>{Filterme(day,'C6','1645')}</td><td>{Filterme(day,'TC','1645')}</td></tr>
            <tr><th>17.15-17.45</th><td>{Filterme(day,'L1','1715')}</td><td>{Filterme(day,'L2','1715')}</td><td>{Filterme(day,'L3','1715')}</td><td>{Filterme(day,'L6','1615')}</td><td>{Filterme(day,'C1','1715')}</td><td>{Filterme(day,'C4','1715')}</td><td>{Filterme(day,'C6','1715')}</td><td>{Filterme(day,'TC','1715')}</td></tr>
        </tbody>
    </table>  
    )
    }else if(day==="wednesday"){
    return(
        <table class="table table-striped  table-hover table-bordered">
        <tbody>
            <tr><th>9.00-10.00</th><td colspan="7">{Plenary(1004)}</td></tr>
            <tr><th></th><th>L1(360)</th><th>L2(210)</th><th>L3(110)</th><th>L6(40)</th><th>C1(24)</th><th>C4(24)</th><th>C6(24)</th></tr>
            <tr><th></th><th>Contact</th><th>Syntax</th><th>Aramaic Morphosyntax</th><th>Simulations</th><th>Basque Phonology</th><th>Albanian & Armenian</th><th>Languages of the Americas</th></tr>
            <tr><th>10.00-10.30</th><td>{Filterme(day,'L1','1000')}</td><td>{Filterme(day,'L2','1000')}</td><td>{Filterme(day,'L3','1000')}</td><td>{Filterme(day,'L6','1000')}</td><td>{Filterme(day,'C1','1000')}</td><td>{Filterme(day,'C4','1000')}</td><td>{Filterme(day,'C6','1000')}</td></tr>
            <tr><th>10.30-11.00</th><td>{Filterme(day,'L1','1030')}</td><td>{Filterme(day,'L2','1030')}</td><td>{Filterme(day,'L3','1030')}</td><td>{Filterme(day,'L6','1030')}</td><td>{Filterme(day,'C1','1030')}</td><td>{Filterme(day,'C4','1030')}</td><td>{Filterme(day,'C6','1030')}</td></tr>
            <tr><th>11.00-11.30</th><td colspan="7">Tea and Coffee</td></tr>
            <tr><th></th><th>Contact</th><th>Middle English Morphosyntax</th><th>Phylogenetics</th><th>Semantics</th><th>Basque Morphosyntax</th><th>Ancient IE languages</th><th>Phonology</th></tr>
            <tr><th>11.30-12.00</th><td>{Filterme(day,'L1','1130')}</td><td>{Filterme(day,'L2','1130')}</td><td>{Filterme(day,'L3','1130')}</td><td>{Filterme(day,'L6','1130')}</td><td>{Filterme(day,'C1','1130')}</td><td>{Filterme(day,'C4','1130')}</td><td>{Filterme(day,'C6','1130')}</td></tr>
            <tr><th>12.00-12.30</th><td>{Filterme(day,'L1','1200')}</td><td>{Filterme(day,'L2','1200')}</td><td>{Filterme(day,'L3','1200')}</td><td>{Filterme(day,'L6','1200')}</td><td>{Filterme(day,'C1','1200')}</td><td>{Filterme(day,'C4','1200')}</td><td>{Filterme(day,'C6','1200')}</td></tr>
            <tr><th>12.30-13.00</th><td>{Filterme(day,'L1','1230')}</td><td>{Filterme(day,'L2','1230')}</td><td>{Filterme(day,'L3','1230')}</td><td>{Filterme(day,'L6','1230')}</td><td>{Filterme(day,'C1','1230')}</td><td>{Filterme(day,'C4','1230')}</td><td>{Filterme(day,'C6','1230')}</td></tr>
            <tr><th>13.00-13.45</th><td colspan="7">Lunch</td></tr>
            <tr><th></th><td colspan="7">Excursions</td></tr>
        </tbody>
        </table>
    )
    }else if(day==="thursday"){
    return(
        <table class="table table-striped  table-hover table-bordered">
        <tbody>
            <tr><th>9.00-10.00</th><td colspan="7">{Plenary(1005)}</td></tr>
            <tr><th></th><th>L1(360)</th><th>L2(210)</th><th>L3(110)</th><th>L6(40)</th><th>C1(24)</th><th>C4(24)</th><th>C6(24)</th></tr>
            <tr><th></th><th>Contact</th><th>Indo-Iranian Morphosyntax</th><th>Slavonic</th><th>Languages of Western Africa</th><th>Danish</th><th>Reconstruction & Cognacy</th><th>Subjects</th></tr>
            <tr><th>10.00-10.30</th><td>{Filterme(day,'L1','1000')}</td><td>{Filterme(day,'L2','1000')}</td><td>{Filterme(day,'L3','1000')}</td><td>{Filterme(day,'L6','1000')}</td><td>{Filterme(day,'C1','1000')}</td><td>{Filterme(day,'C4','1000')}</td><td>{Filterme(day,'C6','1000')}</td></tr>
            <tr><th>10.30-11.00</th><td>{Filterme(day,'L1','1030')}</td><td>{Filterme(day,'L2','1030')}</td><td>{Filterme(day,'L3','1030')}</td><td>{Filterme(day,'L6','1030')}</td><td>{Filterme(day,'C1','1030')}</td><td>{Filterme(day,'C4','1030')}</td><td>{Filterme(day,'C6','1030')}</td></tr>
            <tr><th>11.00-11.30</th><td colspan="7">Tea and Coffee</td></tr>
            <tr><th></th><th>Contact</th><th>Germanic Morphosyntax</th><th>Phylogenetics</th><th>Word Order</th><th>Analogy</th><th>Early Modern English</th><th>Early German Phonology</th></tr>
            <tr><th>11.30-12.00</th><td>{Filterme(day,'L1','1130')}</td><td>{Filterme(day,'L2','1130')}</td><td>{Filterme(day,'L3','1130')}</td><td>{Filterme(day,'L6','1130')}</td><td>{Filterme(day,'C1','1130')}</td><td>{Filterme(day,'C4','1130')}</td><td>{Filterme(day,'C6','1130')}</td></tr>
            <tr><th>12.00-12.30</th><td>{Filterme(day,'L1','1200')}</td><td>{Filterme(day,'L2','1200')}</td><td>{Filterme(day,'L3','1200')}</td><td>{Filterme(day,'L6','1200')}</td><td>{Filterme(day,'C1','1200')}</td><td>{Filterme(day,'C4','1200')}</td><td>{Filterme(day,'C6','1200')}</td></tr>
            <tr><th>12.30-13.00</th><td>{Filterme(day,'L1','1230')}</td><td>{Filterme(day,'L2','1230')}</td><td>{Filterme(day,'L3','1230')}</td><td>{Filterme(day,'L6','1230')}</td><td>{Filterme(day,'C1','1230')}</td><td>{Filterme(day,'C4','1230')}</td><td>{Filterme(day,'C6','1230')}</td></tr>
            <tr><th>13.00-13.45</th><td colspan="7">Lunch</td></tr>
            <tr><th></th><th>Contact</th><th>Middle English morphosyntax</th><th>Phonology</th><th>Phylogenetics</th><th>Analogy</th><th>Basque Morphosyntax</th><th>Languages of China</th></tr>
            <tr><th>13.45-14.15</th><td>{Filterme(day,'L1','1345')}</td><td>{Filterme(day,'L2','1345')}</td><td>{Filterme(day,'L3','1345')}</td><td>{Filterme(day,'L6','1345')}</td><td>{Filterme(day,'C1','1345')}</td><td>{Filterme(day,'C4','1345')}</td><td>{Filterme(day,'C6','1345')}</td></tr>
            <tr><th>14.15-14.45</th><td>{Filterme(day,'L1','1415')}</td><td>{Filterme(day,'L2','1415')}</td><td>{Filterme(day,'L3','1415')}</td><td>{Filterme(day,'L6','1415')}</td><td>{Filterme(day,'C1','1415')}</td><td>{Filterme(day,'C4','1415')}</td><td>{Filterme(day,'C6','1415')}</td></tr>
            <tr><th>14.45-15.15</th><td>{Filterme(day,'L1','1445')}</td><td>{Filterme(day,'L2','1445')}</td><td>{Filterme(day,'L3','1445')}</td><td>{Filterme(day,'L6','1445')}</td><td>{Filterme(day,'C1','1445')}</td><td>{Filterme(day,'C4','1445')}</td><td>{Filterme(day,'C6','1445')}</td></tr>
            <tr><th>15.15-15.45</th><td colspan="7">Tea & Coffee</td></tr>
            <tr><th>15.45-16.45</th><td colspan="7">Business Meeting (L1)</td></tr>
            <tr><th>16.50-17.50</th><td colspan="7">{Plenary(1006)}</td></tr>
            <tr><th></th><td colspan="7">Closing Reception</td></tr>
            </tbody>
        </table>  
        )
    }else if(day==="friday"){
    return(
        <div>
        <table class="table table-striped table-hover table-bordered">
        <tbody>
            <tr><th>9.00-10.00</th><td colspan="7">{Plenary(1007)}</td></tr>
            <tr><th></th><th>L1(360)</th><th>L2(210)</th><th>L3(110)</th><th>L6(40)</th><th>C1(24)</th><th>C4(24)</th><th>C6(24)</th></tr>
            <tr><th></th><th>Contact in Romance</th><th>Syntax</th><th>Loanwords in English</th><th>Morphology</th><th>Modern English & corpora</th><th>Slavonic</th><th>Word Order</th></tr>
            <tr><th>10.00-10.30</th><td>{Filterme(day,'L1','1000')}</td><td>{Filterme(day,'L2','1000')}</td><td>{Filterme(day,'L3','1000')}</td><td>{Filterme(day,'L6','1000')}</td><td>{Filterme(day,'C1','1000')}</td><td>{Filterme(day,'C4','1000')}</td><td>{Filterme(day,'C6','1000')}</td></tr>
            <tr><th>10.30-11.00</th><td>{Filterme(day,'L1','1030')}</td><td>{Filterme(day,'L2','1030')}</td><td>{Filterme(day,'L3','1030')}</td><td>{Filterme(day,'L6','1030')}</td><td>{Filterme(day,'C1','1030')}</td><td>{Filterme(day,'C4','1030')}</td><td>{Filterme(day,'C6','1030')}</td></tr>
            <tr><th>11.00-11.30</th><td colspan="7">Tea and Coffee</td></tr>
            <tr><th></th><th> Language Contact</th><th>Syntax</th><th>Romance Morphosyntax</th><th>Grammaticalisation</th><th>English Phonology</th><th>Modelling/Phon</th><th>Indo-Iranian & Greek</th></tr>
            <tr><th>11.30-12.00</th><td>{Filterme(day,'L1','1130')}</td><td>{Filterme(day,'L2','1130')}</td><td>{Filterme(day,'L3','1130')}</td><td>{Filterme(day,'L6','1130')}</td><td>{Filterme(day,'C1','1130')}</td><td>{Filterme(day,'C4','1130')}</td><td>{Filterme(day,'C6','1130')}</td></tr>
            <tr><th>12.00-12.30</th><td>{Filterme(day,'L1','1200')}</td><td>{Filterme(day,'L2','1200')}</td><td>{Filterme(day,'L3','1200')}</td><td>{Filterme(day,'L6','1200')}</td><td>{Filterme(day,'C1','1200')}</td><td>{Filterme(day,'C4','1200')}</td><td>{Filterme(day,'C6','1200')}</td></tr>
            <tr><th>12.30-13.00</th><td>{Filterme(day,'L1','1230')}</td><td>{Filterme(day,'L2','1230')}</td><td>{Filterme(day,'L3','1230')}</td><td>{Filterme(day,'L6','1230')}</td><td>{Filterme(day,'C1','1230')}</td><td>{Filterme(day,'C4','1230')}</td><td>{Filterme(day,'C6','1230')}</td></tr>
            <tr><th>13.00-13.45</th><td colspan="7">Lunch</td></tr>
            <tr><th></th><th>Romance</th><th>Syntax</th><th>Germanic Semantics</th><th>Romance Plus</th><th>Semitic/Morphology</th><th>Syntax & Semantics of Ancient Languages</th><th>Germanic</th></tr>
            <tr><th>13.45-14.15</th><td>{Filterme(day,'L1','1345')}</td><td>{Filterme(day,'L2','1345')}</td><td>{Filterme(day,'L3','1345')}</td><td>{Filterme(day,'L6','1345')}</td><td>{Filterme(day,'C1','1345')}</td><td>{Filterme(day,'C4','1345')}</td><td>{Filterme(day,'C6','1345')}</td></tr>
            <tr><th>14.15-14.45</th><td>{Filterme(day,'L1','1415')}</td><td>{Filterme(day,'L2','1415')}</td><td>{Filterme(day,'L3','1415')}</td><td>{Filterme(day,'L6','1415')}</td><td>{Filterme(day,'C1','1415')}</td><td>{Filterme(day,'C4','1415')}</td><td>{Filterme(day,'C6','1415')}</td></tr>
            <tr><th>14.45-15.15</th><td>{Filterme(day,'L1','1445')}</td><td>{Filterme(day,'L2','1445')}</td><td>{Filterme(day,'L3','1445')}</td><td>{Filterme(day,'L6','1445')}</td><td>{Filterme(day,'C1','1445')}</td><td>{Filterme(day,'C4','1445')}</td><td>{Filterme(day,'C6','1445')}</td></tr>
            <tr><th>15.15-15.45</th><td colspan="7">Tea, Coffee & Posters</td></tr>
            <tr><th>15.45-16.45</th><td colspan="7"><a href="#postersfri">Posters</a> </td></tr>
            <tr><th>16.50-17.50</th><td colspan="7">{Plenary(1008)}</td></tr>
            <tr><th></th><td colspan="7">Closing Reception</td></tr>
            </tbody>
        </table>
        <h5 id="postersfri">Poster Session</h5>
        <ul>
            {FilterMePoster('friday')}
        </ul>    
        </div>
        )    
    }
}

export default Timetable;
