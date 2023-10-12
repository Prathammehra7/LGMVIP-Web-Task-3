import React from 'react'
import './App.css'
import DisplayCard from './DisplayCard'

const Display = (props) => {
    return (
        <div className='display'>
            <h1>
                Output
            </h1>
            {
                props.data.map((data, index) => {
                    return (
                        <DisplayCard key={index} name={data.name}
                            email={data.email} phone={data.phone}
                            address={data.address} degreeProgram={data.degreeProgram} />
                    )
                })
            }

        </div>
    )
}

export default Display