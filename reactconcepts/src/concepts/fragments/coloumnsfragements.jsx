import React from 'react'

function ColoumnsFragments() {

    // we use fragments here so that we do no add an extra div between tbody tag in 
    //tabelfragments file and the tr tag in this file, which would ruin the tabel tag
    // strucuture 

    return (
        <React.Fragment>
            <tr>
            <td>Shravan</td>
            <td>65000</td>
            <td>25</td>
            </tr>
        </React.Fragment>
    )
}

export default ColoumnsFragments