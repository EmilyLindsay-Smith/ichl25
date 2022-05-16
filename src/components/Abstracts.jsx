import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Organisers(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    return(
        <div class="container container-pad">
            Abstracts
            <div>
      <Document file="./presentation-abstracts/ICHL25_paper_4.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>


        </div>
        )
    }

export default Organisers