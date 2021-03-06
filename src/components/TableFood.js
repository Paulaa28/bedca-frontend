import React from 'react'
 
export default function TableFood({ food }) {
    return (
        <div className='tablefood'>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        food && food.length > 0 && food.map((foodElement) => (
                            <tr>
                                <td>{foodElement.es_description}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}