import React from 'react';
import {useLocation} from 'react-router-dom';
import {data} from './data';


function Abstracts(){
    const location = useLocation();
   // const [num, setNum] = useState(2)
    
    function num() {
        let val = location.state.value;
        if (val) {
            return val;
        } else {
            return 2;
        }
    }
    const number = num()
    console.log(number)

    function capitalise(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    
    function testme(idval){ 
        return data.filter( datum => datum.id === idval)
         .map(
          item =><p><strong>{capitalise(item.type)}</strong>:{item.title}<br/>
              <strong>Authors</strong>: {item.author.join().split(',').join(', ').replace(/, ([^,]*)$/, ' and $1')}<br/>
             <strong>Time</strong>: {capitalise(item.day)} {item.time}<br/>
              <strong>Room</strong>: {item.room}</p> )
                }
    
              const talkdata = testme(number)
              console.log(talkdata)
   // componentDidMount() {if (val){console.log('yes');setNum(val);}}

    return(
        <div className="container container-pad max-view">
            <h2>Abstracts</h2>
            {talkdata}
       <object data={require('./presentation-abstracts/ICHL25_paper_' + number.toString()+'.pdf')} type="application/pdf" width="100%" height="80%">
           <p><em>Your browser doesn't support PDF embedding </em></p>
           <a href={require('./presentation-abstracts/ICHL25_paper_' + number.toString()+'.pdf')}>Download a copy of this abstract here </a>
       </object>      
        </div>
        )
    }

export default Abstracts;