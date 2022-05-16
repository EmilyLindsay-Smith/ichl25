import React from 'react';

function Abstracts(){

    return(
        <div class="container container-pad max-view">
            Abstracts
        <object data={require('./presentation-abstracts/ICHL25_paper_2.pdf')} type="application/pdf" width="100%" height="150%">
            <p>Alternative text - include a link <a href={require('./presentation-abstracts/ICHL25_paper_2.pdf')}>to the PDF!</a></p>
        </object>        
        </div>
        )
    }

export default Abstracts;