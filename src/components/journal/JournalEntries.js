import React from 'react'
import { JournalEntrie } from './JournalEntrie';

export const JournalEntries = () => {

    const entries = [1,2,3,4,5,6];

    return (
        <div className="journal__entries">
            {
                entries.map( (value)=>{
                    return <JournalEntrie key={value}/>
                } )
            }
        </div>
    )
}
