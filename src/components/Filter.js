import React from 'react'

class Filter extends React.Component {
    render() {
        return (
            <section className='section filter'>
                <div className='container'>
                    <form >
                        <label className='movieTypeLabel'>{this.props.filterName}</label>
                        <select className='movieTypeSelect'>
                            <option value=''>{this.props.filterType} </option>
                            <option value='Action'>الأكشن</option>
                            <option value='Thriller'>الغموض</option>
                            <option value='Comedy'>كومدي</option>
                            <option value='Drama'>دراما</option>
                        </select>
                    </form>
                </div>
            </section>

        )
    }
}

export default Filter