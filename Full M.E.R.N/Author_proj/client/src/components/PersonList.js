
import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    // delete functions
    const { removeFromDom } = props;
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
    }
    return (
        <div>

          
            {props.people.map((person, idx) => {
                return <p key={idx}>
                    <table>
                    <tr>
                        <th>Author</th>
                        
                        <th>Action available</th>
                    </tr>
                   
                    <th>    <Link to={"/product/" + person._id}>
                        {person.firstName}
                    </Link> </th>
                   

                    <td>
                        <button onClick={(e) => { deletePerson(person._id) }}>
                            Delete
                    </button> 
                    
                        <Link to={"author/" + person._id + "/edit"}>
                            <button>  Edit </button>
                        </Link> </td>
                        </table>
                </p>
                
            })}
        </div>



    )
}