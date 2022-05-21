import React from 'react';
import {useLocation} from 'react-router-dom';
import {data} from './data';


function Abstracts(){
    const location = useLocation();
   // const [num, setNum] = useState(2)

   function Num() {
       let val = location.state.value
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
              <strong>Room</strong>: {item.room}</p> )
                }
    const talkdata = testme(parseInt(number))
        
    console.log(talkdata)
   // componentDidMount() {if (val){console.log('yes');setNum(val);}}

    if (parseInt(number) !== 0){
    return(
        <div className="container container-pad max-view">
            <h1 id="site-top">Abstracts</h1>
            {talkdata}
            <a href={require('./presentation-abstracts/ICHL25_paper_' + number.toString()+'.pdf')}>Download a copy of this abstract here </a>
       <iframe src={require('./presentation-abstracts/ICHL25_paper_' + number.toString()+'.pdf')} title="Abstract" width="100%" height="500" allowfullscreen>
           <p><em>Your browser doesn't support PDF embedding </em></p>
       </iframe>      
        </div>
        )}
        else if (parseInt(number) ===0){
            return(
                <div className="container container-pad max-view">
                <h2>Abstracts</h2>
                <p><em>There is no available abstract</em></p> 
                </div>
            )
        }
    }

export default Abstracts;