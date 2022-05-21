import React from 'react';

function Registration(){
    return(
        <div class="container container-pad"><h1 id="site-top"> Registration and Fees </h1>
        
        <p><em>Note Early bird registration is no longer available</em></p>

        <table class="table">
            <tbody>
            <tr>
                <th scope="row">Standard </th>
                <td>£340</td>
            </tr>
            <tr>
                <th scope="row">Standard (without lunch) </th>
                <td>£294</td>
            </tr>
            <tr>
                <th scope="row">Student (with or without lunch)</th>
                <td>£180</td>
            </tr>

            <tr>
                <th scope="row">Conference Dinner only (partners) </th>
                <td>£38.50</td>
            </tr>
            </tbody>
        </table>
        
        <p>Booking closes on <strong>26th July 2022</strong></p>
        <a href="https://www.oxforduniversitystores.co.uk/conferences-and-events/linguistics-philology-phonetics/events/ichl-2022" rel="noreferrer noopener" target="_blank">Click here to book via the Oxford University Stores website</a>
        </div>
    );
}

export default Registration