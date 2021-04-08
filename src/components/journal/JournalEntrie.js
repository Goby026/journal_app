import React from 'react'

export const JournalEntrie = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/02/06/07/02/laptop-5987093_960_720.jpg)'
                }}
            >

            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    tuitle
                </p>
                <p className="journal__entry-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus minus veniam labore autem officia aliquam?
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
