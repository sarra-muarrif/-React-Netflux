import React from 'react'

const MovieGrid = props => {
    return (
        <section className={`section movies slider has-arrows ${props.gridType}`}>  <div className='container'>
            <h3 className='section-title'>{props.title}</h3>
            <ul className='moviesGrid'>
                {props.children}
            </ul>
        </div>
        </section>
    )

}


export default MovieGrid