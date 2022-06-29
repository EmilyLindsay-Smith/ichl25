import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import {data} from './data';

export default function Abstract(){
    let { postSlug } = useParams();
    
    useEffect(() => {}, [postSlug]);

    function Num() {
        let val = postSlug
         if (val){
             return val;
         } else {
             return 2;
         }
     }
     const number = Num()
     console.log(number)
 
     function capitalise(word){
         return word.charAt(0).toUpperCase() + word.slice(1);
       }
     
     function testme(idval){ 
         return data.filter( datum => datum.id === idval)
          .map(
           item =><p><strong>{capitalise(item.type)}</strong>: {item.title}<br/>
               <strong>Authors</strong>: {item.author.join().split(',').join(', ').replace(/, ([^,]*)$/, ' and $1')}<br/>
              <strong>Time</strong>: {capitalise(item.day)} {item.time}<br/>
               <strong>Room</strong>: {item.room === 'TC' ? <a href="/info#trinitycollege">'Trinity College'</a> : item.room}</p> )
                 }
     const talkdata = testme(parseInt(number))
     console.log(talkdata)

    function workshops(idval){
        let workshopNo = parseInt(idval) - 2000
        let workshopNoString = workshopNo.toString()
/*        let workshopFilesArray = data.filter(datum => datum.workshop === workshopNoString & datum.type === "talk" & datum.id !== 0).map(item => './presentation-abstracts/ICHL25_paper_' + item.id.toString() + '.pdf')
        console.log(workshopFilesArray)
*/
        return data.filter(datum => datum.workshop === workshopNoString & datum.type === "talk" & datum.id !== 0)
                   .map(item=>
                        <div>
                            <iframe src={require('./presentation-abstracts/ICHL25_paper_' + item.id.toString()+'.pdf')} title="Abstract" width="100%" height="500" allowfullscreen>
                            <p><em>Your browser doesn't support PDF embedding </em></p>
                            </iframe>
                        </div>
                        )
    
     }
    

    if (talkdata.length === 0){
                return(
                    <div className="container container-pad max-view">
                    <p><em>There is no presentation with this abstract number</em></p> 
                    </div>
                )
    }
    else if (parseInt(number) > 2000){
        const things = workshops(parseInt(number))
        console.log(things)
        return(
            <div className="container container-pad max-view">
                {talkdata}
                <p>Abstracts of all the talks in this workshop:</p>
                {things}
            </div>
        )

    }
    else if (parseInt(number) !== 0){
                    return(
                        <div className="container container-pad max-view">
                            {talkdata}
                            <a href={require('./presentation-abstracts/ICHL25_paper_' + number.toString()+'.pdf')}>Download a copy of this abstract </a>
                       <iframe src={require('./presentation-abstracts/ICHL25_paper_' + number.toString()+'.pdf')} title="Abstract" width="100%" height="500" allowfullscreen>
                           <p><em>Your browser doesn't support PDF embedding </em></p>
                       </iframe>      
                        </div>
                        )}
            else if (parseInt(number) ===0){
                return(
                    <div className="container container-pad max-view">
                    <p><em>There is no available abstract</em></p> 
                    </div>
                )
            }

}