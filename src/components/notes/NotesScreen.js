import React from 'react'
import { NotesAppbar } from './NotesAppbar'

export const NotesScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppbar />
            <div className="notes__content">
                <form >
                    <label htmlFor="">Title</label>
                    <input type="text" className="notes__title-input" autoComplete="off" />
                    <textarea placeholder="What happend today" className="notes__textArea">

                    </textarea>
                </form>
            </div>
            <div className="notes__image">
                <img src="https://images.freeimages.com/images/large-previews/448/abstract-bokeh-photos-blue-1149226.jpg" alt="imagen" />
            </div>
        </div>
    )
}
