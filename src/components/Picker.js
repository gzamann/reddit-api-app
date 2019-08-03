import React from 'react'


export default class Picker extends React.Component{
    render(){
        const { value, onChange, options } = this.props
        return(
            <span>
                <h2>{value}</h2>
                <select value={value} onChange={e=> onChange(e.target.value)}>
                    {options.map(option=>(
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </span>
        )
    }
}