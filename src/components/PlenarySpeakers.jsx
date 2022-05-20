import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlenarySpeakers(){
    const navigate = useNavigate();
    const toAbstracts=(num)=>{navigate('/abstracts',{state:{value:num}})}

    return(
        <div class="container container-pad">
            <h1> Plenary Speakers </h1>
        <section>
        <h4>Kathryn Allan (University College London)</h4>
        <p><button className="btn button-abstract" onClick={()=>{toAbstracts(1003)}}> <em>'Degrees of Lexicalization' in the history of English: antonymy and assymetry</em></button> <br/>
            Tuesday 9am
        </p>
        <p>Kathryn Allan is an Associate Professor in the History of English at University College, London. 
            Previously she was a lecturer at the University of Salford and has also taught at universities including Oxford and (through Erasmus) Zurich. 
            Her main research interests are in historical and cognitive semantics and lexicology.
             She is particularly interested in the intra- and extra-linguistic factors in semantic change, and in tracing polysemy in relation to social-cultural change. 
             Her monograph <em>Metaphor and Metonymy: A Diachronic Approach </em>, which uses data from the <em>Historical Thesaurus of English</em>, explores the motivation for metaphor and metonymy in the semantic field intelligence. 
             She is also the co-author of <em>English Historical Semantics</em> (with Christian Kay), and has co-edited volumes on <em>Historical Cognitive Linguistics</em> and <em>Current Methods in Historical Semantics </em> for Mouton. 
             She is a member of the Keywords Project.
        </p>
        <ul>
            <li><a href="https://www.ucl.ac.uk/english/people/kathryn-allan" target="_blank" rel="noreferrer">https://www.ucl.ac.uk/english/people/kathryn-allan</a></li>
        </ul>
        </section>

        <section>
            <h4>Claire Bowern (Yale University)</h4>
            <p><button className="btn button-abstract" onClick={()=>{toAbstracts(1006)}}><em>How Mechanisms of Sound Change Predict Stability</em></button> <br/>
            Thursday 4.50pm
            </p>
            <p>
            Claire Bowern is Professor in Linguistics at Yale University.
            She works on language change and language documentation in Australian languages, combining fieldwork with research on archival materials in all areas of language.
            While her work touches many areas, the overarching question is how to characterise the nature of language change, and includes traditional comparative method reconstruction, work that quantifies the results of comparative method reconstructions, and phylogenetics.
            She is currently the editor of the journal <em>Diachronica</em>.
            </p>
            <ul>
                <li><a href="https://campuspress.yale.edu/clairebowern/" target="_blank" rel="noreferrer">https://campuspress.yale.edu/clairebowern/</a></li>
                <li><a href="https://ling.yale.edu/people/claire-bowern" target="_blank" rel="noreferrer">https://ling.yale.edu/people/claire-bowern</a></li>
            </ul>
        </section>

        <section>
            <h4>B. Elan Dresher (University of Toronto)</h4>
            <p><button className="btn button-abstract" onClick={()=>{toAbstracts(1002)}}><em>Diachronic Phonology with Contrastive Hierarchy Theory</em></button> <br/>
            Monday 4.50pm
            </p>
            <p>
            Elan Dresher is a Professor Emeritus of Linguistics at the University of Toronto. 
            His research interests lie in diachronic linguistics, theoretical phonology and learnability, and particularly West Germanic and Biblical Hebrew phonology and prosody,
             and the history of phonology. He is the author of <em>Old English and the Theory of Phonology</em> and <em>The Contrastive Hierarchy in Phonology</em>, and is a co-editor 
             (with Harry van der Hulst) of the soon-to-appear <em>Oxford History of Phonology</em>.
            </p>
            <ul>
                <li><a href="https://www.linguistics.utoronto.ca/people/directories/all-faculty/b-elan-dresher" target="_blank" rel="noreferrer">https://www.linguistics.utoronto.ca/people/directories/all-faculty/b-elan-dresher</a></li>
            </ul>
        </section>

        <section>
            <h4>Alice Harris (University of Massachusetts, Amherst)</h4>
            <p><button className="btn button-abstract" onClick={()=>{toAbstracts(1008)}}><em>The Origins of Clitic Placement in Aluan and Udi</em></button> <br/>
            Friday 4.50pm
            </p>
            <p>
            Alice Harris is Professor Emerita in Linguistics at the University of Massachusetts, Amherst.
            Earlier, she held positions at Vanderbilt University and at the State University of New York, Stony Brook.
            Her research interests include historical linguistics, morphology, the languages of the Caucasus and psycholinguistics of understudied languages. 
            Harris’s book <em>Historical Syntax in Cross-Linguistic Perspective</em> (with Lyle Campbell) won the Leonard Bloomfield Book Award from the Linguistic Society of America in 1998. 
            She was President of the Linguistic Society of America in 2016, and has been a Corresponding Fellow of the British Academy since 2020.
            </p>
            <ul>
                <li><a href="https://www.umass.edu/linguistics/member/alice-harris" target="_blank" rel="noreferrer">https://www.umass.edu/linguistics/member/alice-harris</a></li>
            </ul>
        </section>

        <section>
            <h4>Paul Kiparsky (Stanford University)</h4>
            <p><button className="btn button-abstract" onClick={()=>{toAbstracts(1001)}}><em>Title tbd</em></button> <br/>
            Monday 10am
            </p>
            <p>
            Paul Kiparsky is the Robert M. and Anne T. Bass Professor in the School of Humanities and Sciences, Stanford University. 
            His research interests lie in phonology, morphology, historical linguistics, metrics and the Sanskrit grammatical tradition. 
            He is particularly interested in the relation between word structure and sentence structure, and the principles governing language change. 
            In addition to ground-breaking work on phonological and morphological change, as well as the relationship between phonology and morphology more broadly, 
            he has also made fundamental contributions to the generative theory of poetic meter and morphosyntax. 
            He has been a Corresponding Fellow of the British Academy since 2013 and a Member of the American Academy of Arts and Sciences since 2020.
            </p>
            <ul>
                <li><a href="https://web.stanford.edu/~kiparsky/" target="_blank" rel="noreferrer">https://web.stanford.edu/~kiparsky/</a></li>
            </ul>
        </section>

        <section>
            <h4>Frans Plank (University of Konstanz; Somerville College, University of Oxford)</h4>
            <p><button className="btn button-abstract" onClick={()=>{toAbstracts(1007)}}><em>Patterns of suppletion in inflectional paradigms:<br/>What do you mean, "universals of language" and there aren't any?</em></button> <br/>
            Friday 9am
            </p>
            <p>
                Frans Plank is Professor Emeritus of Linguistics and English Language at the University of Konstanz, and a Senior Research Fellow in Linguistics at Somerville College, Oxford. 
                His research interests include morphology (inflection and word formation), syntax, prosody and lexicon; typology and historical linguistics; Germanic; 
                and the history of linguistics (17th century & after). 
                His work on ergativity, double case, grammatical relations, paradigms, universals or linguistic rarities, drawing from his extensive expertise in Germanic linguistics, 
                has been a mainstay in the field of historical linguistics and typology.
                 He was the founder and editor of Linguistic Typology for more than two decades.
            </p>
            <ul>
                <li><a href="https://www.some.ox.ac.uk/our-people/frans-plank/" target="_blank" rel="noreferrer">https://www.some.ox.ac.uk/our-people/frans-plank/</a></li>
            </ul>
        </section>

        <section>
            <h4>Joe Salmons (University of Wisconsin, Madison)</h4>
            <p><button className="btn button-abstract" onClick={()=>{toAbstracts(1005)}}><em>Trees, waves and the classification of the Algonquian languages</em></button> <br/>
            Thursday 9am
            </p>
            <p>
            Joe Salmons is the Lester W.J. Seifert Professor of Language Sciences. 
            His research focuses on language change and linguistic theory, especially as it bears on sound systems, often drawing data from Germanic languages, 
            including American English and heritage languages. 
            He is associate editor of <em>Diachronica</em> and directs the Center for the Study of Upper Midwestern Cultures. 
            He is the author of <em>A History of German: What the past reveals about today’s language</em> (Oxford, second edition 2018) and co-editor, with Patrick Honeybone, of the <em>Oxford Handbook of Historical Phonology</em> (Oxford, 2015). 
            His most recent publication is <em>Sound Change</em> (Edinburgh, 2021).
            </p>
            <ul>
                <li><a href="https://langsci.wisc.edu/staff/joe-salmons/" target="_blank" rel="noreferrer">https://langsci.wisc.edu/staff/joe-salmons/</a></li>
                <li><a href="http://joseph-salmons.net/" target="_blank" rel="noreferrer">http://joseph-salmons.net/</a></li>
            </ul>
        </section>

        <section>
            <h4>John Charles Smith (University of Oxford, St Catherine's College)</h4>
            <p><button className="btn button-abstract" onClick={()=>{toAbstracts(1004)}}><em>Periphrasis, Paradigms, and Grammaticalization </em></button> <br/>
            Wednesday 9am
            </p>
            <p>
            John Charles Smith is a Fellow (now Emeritus) of St Catherine’s College, Oxford, and Deputy Director Emeritus of the University of Oxford Research Centre for Romance Linguistics. 
            Before returning to Oxford, where he was an undergraduate and graduate student, he held posts at the universities of Surrey, Bath, and Manchester, 
            and has also held visiting appointments in Limoges, Paris, Berlin, Melbourne, and Philadelphia. 
            He has published on a range of linguistic topics, with particular reference to the historical morphosyntax of Romance, although he has also worked on other language families, 
            including Germanic and Austronesian. In 2007, he was created <em>Chevalier dans l’ordre des Palmes académiques</em> by the French government for services to the French language and French culture. 
            He is Secretary of the International Society for Historical Linguistics.
            </p>
        </section>

        </div>
    );
}

export default PlenarySpeakers;