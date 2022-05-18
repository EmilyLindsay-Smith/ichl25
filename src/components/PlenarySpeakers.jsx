import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlenarySpeakers(){
    const navigate = useNavigate();
    const toAbstracts=(num)=>{navigate('/abstracts',{state:{value:num}})}

    return(
        <div class="container container-pad">
            <h1> Plenary Speakers </h1>
        <h4><a href="https://www.ucl.ac.uk/english/people/kathryn-allan" target="_blank" rel="noreferrer">Kathryn Allan (University College London) </a></h4>
        <p>Kathryn Allan is an Associate Professor in the History of English at University College, London. 
            Previously she was a lecturer at the University of Salford and has also taught at universities including Oxford and (through Erasmus) Zurich. 
            Her main research interests are in historical and cognitive semantics and lexicology.
             She is particularly interested in the intra- and extra-linguistic factors in semantic change, and in tracing polysemy in relation to social-cultural change. 
             Her monograph <em>Metaphor and Metonymy: A Diachronic Approach </em>, which uses data from the <em>Historical Thesaurus of English</em>, explores the motivation for metaphor and metonymy in the semantic field intelligence. 
             She is also the co-author of <em>English Historical Semantics</em> (with Christian Kay), and has co-edited volumes on <em>Historical Cognitive Linguistics</em> and <em>Current Methods in Historical Semantics </em> for Mouton. 
             She is a member of the Keywords Project.
        </p>
        <div><button className="btn button-abstract" onClick={()=>{toAbstracts(15)}}> Abstract</button> </div>
        </div>
    );
}

export default PlenarySpeakers;