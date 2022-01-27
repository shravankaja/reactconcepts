import React, { Fragment } from 'react'
import ColoumnsFragments from './coloumnsfragements'

function TabelFragments() {

    return(
        <>
       <tabel>
           <tbody>
               <tr>
                   <td>Name</td>
                   <td>Salary</td>
                   <td>age</td>
               </tr>
              <ColoumnsFragments />
             </tbody>
       </tabel>
        </>
    )
}

export default TabelFragments