import React from "react";
import {data} from './data';

function filterme(day,room, time){
    let filtered = data.filter(datum=>datum.day===day).filter(datum => datum.room === room && datum.time === time)
    let title = filtered.map(item =>item.title)
    let link = filtered.map(item=>item.link)
    let authors = filtered.map(item=>item.author).join('').split(',').join(', ')
    return <td><a href={link} target="_blank" rel="noreferrer noopener">{title}</a><br/><em>{authors}</em></td>
  }

function Timetable(day){
    if (day === 'monday'){
      return( 
        <table class="table table-striped table-hover table-bordered">
            <tbody>
                <tr><th>8.00-9.30</th><td colspan="7">Registration</td></tr>
                <tr><th>9.30-10.00</th><td colspan="7">Welcome</td></tr>
                <tr><th>10.00-11.00</th><td colspan="7">Paul Kiparsky</td></tr>
                <tr><th>11.00-11.30</th><td colspan="7">Tea and Coffee</td></tr>
                <tr><th></th><th>L1(360)</th><th>L2(210)</th><th>L3(110)</th><th>L6(40)</th><th>C1(24)</th><th>C4(24)</th><th>C6(24)</th></tr>
                <tr><th></th><th>Language Contact</th><th>Syntax</th><th>Phonology</th><th>Romance</th><th>Germanic Semantics & Pragmatics</th><th>Morphology</th><th>Corpus Studies & Translation</th></tr>
                <tr><th>11.30-12.00</th><td>{filterme(day,'L1','1130')}</td><td>{filterme(day,'L2','1130')}</td><td>{filterme(day,'L3','1130')}</td><td>{filterme(day,'L6','1130')}</td><td>{filterme(day,'C1','1130')}</td><td>{filterme(day,'C4','1130')}</td><td>{filterme(day,'C6','1130')}</td></tr>
                <tr><th>12.00-12.30</th><td>{filterme(day,'L1','1200')}</td><td>{filterme(day,'L2','1200')}</td><td>{filterme(day,'L3','1200')}</td><td>{filterme(day,'L6','1200')}</td><td>{filterme(day,'C1','1200')}</td><td>{filterme(day,'C4','1200')}</td><td>{filterme(day,'C6','1200')}</td></tr>
                <tr><th>12.30-13.00</th><td>{filterme(day,'L1','1230')}</td><td>{filterme(day,'L2','1230')}</td><td>{filterme(day,'L3','1230')}</td><td>{filterme(day,'L6','1230')}</td><td>{filterme(day,'C1','1230')}</td><td>{filterme(day,'C4','1230')}</td><td>{filterme(day,'C6','1230')}</td></tr>
                <tr><th>13.00-13.45</th><td colspan="7">Lunch</td></tr>
                <tr><th></th><th>Germanic</th><th>Parametric Comparison</th><th>Phonology</th><th>Bantu&Cushitic</th><th>Greek</th><th>Phonology:Vowels</th><th>(Ir)regularity</th></tr>
                <tr><th>13.45-14.15</th><td>{filterme(day,'L1','1345')}</td><td>{filterme(day,'L2','1345')}</td><td>{filterme(day,'L3','1345')}</td><td>{filterme(day,'L6','1345')}</td><td>{filterme(day,'C1','1345')}</td><td>{filterme(day,'C4','1345')}</td><td>{filterme(day,'C6','1345')}</td></tr>
                <tr><th>14.15-14.45</th><td>{filterme(day,'L1','1415')}</td><td>{filterme(day,'L2','1415')}</td><td>{filterme(day,'L3','1415')}</td><td>{filterme(day,'L6','1415')}</td><td>{filterme(day,'C1','1415')}</td><td>{filterme(day,'C4','1415')}</td><td>{filterme(day,'C6','1415')}</td></tr>
                <tr><th>14.45-15.15</th><td>{filterme(day,'L1','1445')}</td><td>{filterme(day,'L2','1445')}</td><td>{filterme(day,'L3','1445')}</td><td>{filterme(day,'L6','1445')}</td><td>{filterme(day,'C1','1445')}</td><td>{filterme(day,'C4','1445')}</td><td>{filterme(day,'C6','1445')}</td></tr>
                <tr><th>15.15-15.45</th><td colspan="7">Tea, Coffee & Posters</td></tr>
                <tr><th>15.45-16.45</th><td colspan="7">Posters</td></tr>
                <tr><th>16.50-17.50</th><td colspan="7">B. Elan Dresher</td></tr>
                <tr><th>18.00</th><td colspan="7">Welcome Reception</td></tr>
            </tbody>
        </table>     
        )
    }else if(day ==='tuesday'){
    return(
        <table class="table table-striped table-hover table-bordered">
        <tbody>
            <tr><th>9.00-10.00</th><td colspan="8">Kathryn Allan</td></tr>
            <tr><th></th><th>L1(360)</th><th>L2(210)</th><th>L3(110)</th><th>L6(40)</th><th>C1(24)</th><th>C4(24)</th><th>C6(24)</th><th>Trinity College</th></tr>
            <tr><th></th><th>English Semantics</th><th>Icelandic Syntax</th><th>Sociolinguistic Typology</th><th>Negation</th><th>Bantu</th><th>Hungarian</th><th>Celtic</th></tr>
            <tr><th>10.00-10.30</th><td>{filterme(day,'L1','1000')}</td><td>{filterme(day,'L2','1000')}</td><td>{filterme(day,'L3','1000')}</td><td>{filterme(day,'L6','1000')}</td><td>{filterme(day,'C1','1000')}</td><td>{filterme(day,'C4','1000')}</td><td>{filterme(day,'C6','1000')}</td></tr>
            <tr><th>10.30-11.00</th><td>{filterme(day,'L1','1030')}</td><td>{filterme(day,'L2','1030')}</td><td>{filterme(day,'L3','1030')}</td><td>{filterme(day,'L6','1030')}</td><td>{filterme(day,'C1','1030')}</td><td>{filterme(day,'C4','1030')}</td><td>{filterme(day,'C6','1030')}</td></tr>
            <tr><th>11.00-11.30</th><td colspan="8">Tea and Coffee</td></tr>
            <tr><th></th><th>Scandinavian Semantics</th><th>Germanic Syntax</th><th>Modelling</th><th>Actuation</th><th>Contact</th><th>Austronesian</th><th>Tonal Phenomena</th></tr>
            <tr><th>11.30-12.00</th><td>{filterme(day,'L1','1130')}</td><td>{filterme(day,'L2','1130')}</td><td>{filterme(day,'L3','1130')}</td><td>{filterme(day,'L6','1130')}</td><td>{filterme(day,'C1','1130')}</td><td>{filterme(day,'C4','1130')}</td><td>{filterme(day,'C6','1130')}</td></tr>
            <tr><th>12.00-12.30</th><td>{filterme(day,'L1','1200')}</td><td>{filterme(day,'L2','1200')}</td><td>{filterme(day,'L3','1200')}</td><td>{filterme(day,'L6','1200')}</td><td>{filterme(day,'C1','1200')}</td><td>{filterme(day,'C4','1200')}</td><td>{filterme(day,'C6','1200')}</td></tr>
            <tr><th>12.30-13.00</th><td>{filterme(day,'L1','1230')}</td><td>{filterme(day,'L2','1230')}</td><td>{filterme(day,'L3','1230')}</td><td>{filterme(day,'L6','1230')}</td><td>{filterme(day,'C1','1230')}</td><td>{filterme(day,'C4','1230')}</td><td>{filterme(day,'C6','1230')}</td></tr>
            <tr><th>13.00-13.45</th><td colspan="8">Lunch</td></tr>
            <tr><th></th><th colspan="8">Workshops</th></tr>
            <tr><th></th><th>The Typology of Contact-Induced Changes in Morphosyntax</th><th>On contact-induced non-change</th><th>Ancient languages and Algorithms: Demystifying new methods in historical linguistics</th><th>Acting on actuation: Why here, why now?</th><th>Consequences of the OV-to-VO change on different levels of clause structure</th><th>Historical Linguistics at school: An ever-pressing need?</th><th>Cliticisation in the evolution of bound morphology</th><th>Recent advances in computational historical linguistics: New methods and results</th></tr>
            <tr><th>13.45-14.15</th><td>{filterme(day,'L1','1345')}</td><td>{filterme(day,'L2','1345')}</td><td>{filterme(day,'L3','1345')}</td><td>{filterme(day,'L6','1345')}</td><td>{filterme(day,'C1','1345')}</td><td>{filterme(day,'C4','1345')}</td><td>{filterme(day,'C6','1345')}</td><td>{filterme(day,'TC','1345')}</td></tr>
            <tr><th>14.15-14.45</th><td>{filterme(day,'L1','1415')}</td><td>{filterme(day,'L2','1415')}</td><td>{filterme(day,'L3','1415')}</td><td>{filterme(day,'L6','1415')}</td><td>{filterme(day,'C1','1415')}</td><td>{filterme(day,'C4','1415')}</td><td>{filterme(day,'C6','1415')}</td><td>{filterme(day,'TC','1415')}</td></tr>
            <tr><th>14.45-15.15</th><td>{filterme(day,'L1','1445')}</td><td>{filterme(day,'L2','1445')}</td><td>{filterme(day,'L3','1445')}</td><td>{filterme(day,'L6','1445')}</td><td>{filterme(day,'C1','1445')}</td><td>{filterme(day,'C4','1445')}</td><td>{filterme(day,'C6','1445')}</td><td>{filterme(day,'TC','1445')}</td></tr>
            <tr><th>15.15-15.45</th><td colspan="8">Tea, Coffee & Posters</td></tr>
            <tr><th>15.45-16.15</th><td>{filterme(day,'L1','1545')}</td><td>{filterme(day,'L2','1545')}</td><td>{filterme(day,'L3','1545')}</td><td>{filterme(day,'L6','1545')}</td><td>{filterme(day,'C1','1545')}</td><td>{filterme(day,'C4','1545')}</td><td>{filterme(day,'C6','1545')}</td><td>{filterme(day,'TC','1545')}</td></tr>
            <tr><th>16.15-16.45</th><td>{filterme(day,'L1','1615')}</td><td>{filterme(day,'L2','1615')}</td><td>{filterme(day,'L3','1615')}</td><td>{filterme(day,'L6','1615')}</td><td>{filterme(day,'C1','1615')}</td><td>{filterme(day,'C4','1615')}</td><td>{filterme(day,'C6','1615')}</td><td>{filterme(day,'TC','1615')}</td></tr>
            <tr><th>16.45-17.15</th><td>{filterme(day,'L1','1645')}</td><td>{filterme(day,'L2','1645')}</td><td>{filterme(day,'L3','1645')}</td><td>{filterme(day,'L6','1645')}</td><td>{filterme(day,'C1','1645')}</td><td>{filterme(day,'C4','1645')}</td><td>{filterme(day,'C6','1645')}</td><td>{filterme(day,'TC','1645')}</td></tr>
            <tr><th>17.15-17.45</th><td>{filterme(day,'L1','1715')}</td><td>{filterme(day,'L2','1715')}</td><td>{filterme(day,'L3','1715')}</td><td>{filterme(day,'L6','1615')}</td><td>{filterme(day,'C1','1715')}</td><td>{filterme(day,'C4','1715')}</td><td>{filterme(day,'C6','1715')}</td><td>{filterme(day,'TC','1715')}</td></tr>
        </tbody>
    </table>  
    )
    }else if(day==="wednesday"){
    return(
        <table class="table table-striped  table-hover table-bordered">
        <tbody>
            <tr><th>9.00-10.00</th><td colspan="7">John Charles Smith</td></tr>
            <tr><th></th><th>L1(360)</th><th>L2(210)</th><th>L3(110)</th><th>L6(40)</th><th>C1(24)</th><th>C4(24)</th><th>C6(24)</th></tr>
            <tr><th></th><th>Contact</th><th>Syntax</th><th>Aramaic Morphosyntax</th><th>Simulations</th><th>Basque Phonology</th><th>Albanian & Armenian</th><th>Languages of the Americas</th></tr>
            <tr><th>10.00-10.30</th><td>{filterme(day,'L1','1000')}</td><td>{filterme(day,'L2','1000')}</td><td>{filterme(day,'L3','1000')}</td><td>{filterme(day,'L6','1000')}</td><td>{filterme(day,'C1','1000')}</td><td>{filterme(day,'C4','1000')}</td><td>{filterme(day,'C6','1000')}</td></tr>
            <tr><th>10.30-11.00</th><td>{filterme(day,'L1','1030')}</td><td>{filterme(day,'L2','1030')}</td><td>{filterme(day,'L3','1030')}</td><td>{filterme(day,'L6','1030')}</td><td>{filterme(day,'C1','1030')}</td><td>{filterme(day,'C4','1030')}</td><td>{filterme(day,'C6','1030')}</td></tr>
            <tr><th>11.00-11.30</th><td colspan="7">Tea and Coffee</td></tr>
            <tr><th></th><th>Contact</th><th>Middle English Morphosyntax</th><th>Phylogenetics</th><th>Semantics</th><th>Basque Morphosyntax</th><th>Ancient IE languages</th><th>Phonology</th></tr>
            <tr><th>11.30-12.00</th><td>{filterme(day,'L1','1130')}</td><td>{filterme(day,'L2','1130')}</td><td>{filterme(day,'L3','1130')}</td><td>{filterme(day,'L6','1130')}</td><td>{filterme(day,'C1','1130')}</td><td>{filterme(day,'C4','1130')}</td><td>{filterme(day,'C6','1130')}</td></tr>
            <tr><th>12.00-12.30</th><td>{filterme(day,'L1','1200')}</td><td>{filterme(day,'L2','1200')}</td><td>{filterme(day,'L3','1200')}</td><td>{filterme(day,'L6','1200')}</td><td>{filterme(day,'C1','1200')}</td><td>{filterme(day,'C4','1200')}</td><td>{filterme(day,'C6','1200')}</td></tr>
            <tr><th>12.30-13.00</th><td>{filterme(day,'L1','1230')}</td><td>{filterme(day,'L2','1230')}</td><td>{filterme(day,'L3','1230')}</td><td>{filterme(day,'L6','1230')}</td><td>{filterme(day,'C1','1230')}</td><td>{filterme(day,'C4','1230')}</td><td>{filterme(day,'C6','1230')}</td></tr>
            <tr><th>13.00-13.45</th><td colspan="7">Lunch</td></tr>
            <tr><th></th><td colspan="7">Excursions</td></tr>
        </tbody>
        </table>
    )
    }else if(day==="thursday"){
    return(
        <table class="table table-striped  table-hover table-bordered">
        <tbody>
            <tr><th>9.00-10.00</th><td colspan="7">Joseph Salmons</td></tr>
            <tr><th></th><th>L1(360)</th><th>L2(210)</th><th>L3(110)</th><th>L6(40)</th><th>C1(24)</th><th>C4(24)</th><th>C6(24)</th></tr>
            <tr><th></th><th>Contact</th><th>Indo-Iranian Morphosyntax</th><th>Slavonic</th><th>Languages of Western Africa</th><th>Danish</th><th>Reconstruction & Cognacy</th><th>Subjects</th></tr>
            <tr><th>10.00-10.30</th><td>{filterme(day,'L1','1000')}</td><td>{filterme(day,'L2','1000')}</td><td>{filterme(day,'L3','1000')}</td><td>{filterme(day,'L6','1000')}</td><td>{filterme(day,'C1','1000')}</td><td>{filterme(day,'C4','1000')}</td><td>{filterme(day,'C6','1000')}</td></tr>
            <tr><th>10.30-11.00</th><td>{filterme(day,'L1','1030')}</td><td>{filterme(day,'L2','1030')}</td><td>{filterme(day,'L3','1030')}</td><td>{filterme(day,'L6','1030')}</td><td>{filterme(day,'C1','1030')}</td><td>{filterme(day,'C4','1030')}</td><td>{filterme(day,'C6','1030')}</td></tr>
            <tr><th>11.00-11.30</th><td colspan="7">Tea and Coffee</td></tr>
            <tr><th></th><th>Contact</th><th>Germanic Morphosyntax</th><th>Phylogenetics</th><th>Word Order</th><th>Analogy</th><th>Early Modern English</th><th>Early German Phonology</th></tr>
            <tr><th>11.30-12.00</th><td>{filterme(day,'L1','1130')}</td><td>{filterme(day,'L2','1130')}</td><td>{filterme(day,'L3','1130')}</td><td>{filterme(day,'L6','1130')}</td><td>{filterme(day,'C1','1130')}</td><td>{filterme(day,'C4','1130')}</td><td>{filterme(day,'C6','1130')}</td></tr>
            <tr><th>12.00-12.30</th><td>{filterme(day,'L1','1200')}</td><td>{filterme(day,'L2','1200')}</td><td>{filterme(day,'L3','1200')}</td><td>{filterme(day,'L6','1200')}</td><td>{filterme(day,'C1','1200')}</td><td>{filterme(day,'C4','1200')}</td><td>{filterme(day,'C6','1200')}</td></tr>
            <tr><th>12.30-13.00</th><td>{filterme(day,'L1','1230')}</td><td>{filterme(day,'L2','1230')}</td><td>{filterme(day,'L3','1230')}</td><td>{filterme(day,'L6','1230')}</td><td>{filterme(day,'C1','1230')}</td><td>{filterme(day,'C4','1230')}</td><td>{filterme(day,'C6','1230')}</td></tr>
            <tr><th>13.00-13.45</th><td colspan="7">Lunch</td></tr>
            <tr><th></th><th>Contact</th><th>Middle English morphosyntax</th><th>Phonology</th><th>Phylogenetics</th><th>Analogy</th><th>Basque Morphosyntax</th><th>Languages of China</th></tr>
            <tr><th>13.45-14.15</th><td>{filterme(day,'L1','1345')}</td><td>{filterme(day,'L2','1345')}</td><td>{filterme(day,'L3','1345')}</td><td>{filterme(day,'L6','1345')}</td><td>{filterme(day,'C1','1345')}</td><td>{filterme(day,'C4','1345')}</td><td>{filterme(day,'C6','1345')}</td></tr>
            <tr><th>14.15-14.45</th><td>{filterme(day,'L1','1415')}</td><td>{filterme(day,'L2','1415')}</td><td>{filterme(day,'L3','1415')}</td><td>{filterme(day,'L6','1415')}</td><td>{filterme(day,'C1','1415')}</td><td>{filterme(day,'C4','1415')}</td><td>{filterme(day,'C6','1415')}</td></tr>
            <tr><th>14.45-15.15</th><td>{filterme(day,'L1','1445')}</td><td>{filterme(day,'L2','1445')}</td><td>{filterme(day,'L3','1445')}</td><td>{filterme(day,'L6','1445')}</td><td>{filterme(day,'C1','1445')}</td><td>{filterme(day,'C4','1445')}</td><td>{filterme(day,'C6','1445')}</td></tr>
            <tr><th>15.15-15.45</th><td colspan="7">Tea & Coffee</td></tr>
            <tr><th>15.45-16.45</th><td colspan="7">Business Meeting (L1)</td></tr>
            <tr><th>16.50-17.50</th><td colspan="7">Claire Bowern</td></tr>
            <tr><th></th><td colspan="7">Closing Reception</td></tr>
            </tbody>
        </table>  
        )
    }else if(day==="friday"){
    return(
        <table class="table table-striped table-hover table-bordered">
        <tbody>
            <tr><th>9.00-10.00</th><td colspan="7">Frans Plank</td></tr>
            <tr><th></th><th>L1(360)</th><th>L2(210)</th><th>L3(110)</th><th>L6(40)</th><th>C1(24)</th><th>C4(24)</th><th>C6(24)</th></tr>
            <tr><th></th><th>Contact in Romance</th><th>Syntax</th><th>Loanwords in English</th><th>Morphology</th><th>Modern English & corpora</th><th>Slavonic</th><th>Word Order</th></tr>
            <tr><th>10.00-10.30</th><td>{filterme(day,'L1','1000')}</td><td>{filterme(day,'L2','1000')}</td><td>{filterme(day,'L3','1000')}</td><td>{filterme(day,'L6','1000')}</td><td>{filterme(day,'C1','1000')}</td><td>{filterme(day,'C4','1000')}</td><td>{filterme(day,'C6','1000')}</td></tr>
            <tr><th>10.30-11.00</th><td>{filterme(day,'L1','1030')}</td><td>{filterme(day,'L2','1030')}</td><td>{filterme(day,'L3','1030')}</td><td>{filterme(day,'L6','1030')}</td><td>{filterme(day,'C1','1030')}</td><td>{filterme(day,'C4','1030')}</td><td>{filterme(day,'C6','1030')}</td></tr>
            <tr><th>11.00-11.30</th><td colspan="7">Tea and Coffee</td></tr>
            <tr><th></th><th> Language Contact</th><th>Syntax</th><th>Romance Morphosyntax</th><th>Grammaticalisation</th><th>English Phonology</th><th>Modelling/Phon</th><th>Indo-Iranian & Greek</th></tr>
            <tr><th>11.30-12.00</th><td>{filterme(day,'L1','1130')}</td><td>{filterme(day,'L2','1130')}</td><td>{filterme(day,'L3','1130')}</td><td>{filterme(day,'L6','1130')}</td><td>{filterme(day,'C1','1130')}</td><td>{filterme(day,'C4','1130')}</td><td>{filterme(day,'C6','1130')}</td></tr>
            <tr><th>12.00-12.30</th><td>{filterme(day,'L1','1200')}</td><td>{filterme(day,'L2','1200')}</td><td>{filterme(day,'L3','1200')}</td><td>{filterme(day,'L6','1200')}</td><td>{filterme(day,'C1','1200')}</td><td>{filterme(day,'C4','1200')}</td><td>{filterme(day,'C6','1200')}</td></tr>
            <tr><th>12.30-13.00</th><td>{filterme(day,'L1','1230')}</td><td>{filterme(day,'L2','1230')}</td><td>{filterme(day,'L3','1230')}</td><td>{filterme(day,'L6','1230')}</td><td>{filterme(day,'C1','1230')}</td><td>{filterme(day,'C4','1230')}</td><td>{filterme(day,'C6','1230')}</td></tr>
            <tr><th>13.00-13.45</th><td colspan="7">Lunch</td></tr>
            <tr><th></th><th>Romance</th><th>Syntax</th><th>Germanic Semantics</th><th>Romance Plus</th><th>Semitic/Morphology</th><th>Syntax & Semantics of Ancient Languages</th><th>Germanic</th></tr>
            <tr><th>13.45-14.15</th><td>{filterme(day,'L1','1345')}</td><td>{filterme(day,'L2','1345')}</td><td>{filterme(day,'L3','1345')}</td><td>{filterme(day,'L6','1345')}</td><td>{filterme(day,'C1','1345')}</td><td>{filterme(day,'C4','1345')}</td><td>{filterme(day,'C6','1345')}</td></tr>
            <tr><th>14.15-14.45</th><td>{filterme(day,'L1','1415')}</td><td>{filterme(day,'L2','1415')}</td><td>{filterme(day,'L3','1415')}</td><td>{filterme(day,'L6','1415')}</td><td>{filterme(day,'C1','1415')}</td><td>{filterme(day,'C4','1415')}</td><td>{filterme(day,'C6','1415')}</td></tr>
            <tr><th>14.45-15.15</th><td>{filterme(day,'L1','1445')}</td><td>{filterme(day,'L2','1445')}</td><td>{filterme(day,'L3','1445')}</td><td>{filterme(day,'L6','1445')}</td><td>{filterme(day,'C1','1445')}</td><td>{filterme(day,'C4','1445')}</td><td>{filterme(day,'C6','1445')}</td></tr>
            <tr><th>15.15-15.45</th><td colspan="7">Tea, Coffee & Posters</td></tr>
            <tr><th>15.45-16.45</th><td colspan="7">Posters </td></tr>
            <tr><th>16.50-17.50</th><td colspan="7">Alice Harris</td></tr>
            <tr><th></th><td colspan="7">Closing Reception</td></tr>
            </tbody>
        </table>  
)    
}}

export default Timetable;
