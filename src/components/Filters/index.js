import React, { Component } from 'react' 

// filter components
import DatePicker from './DatePicker'
import SelectFilter from './Select'


export default function Filters () {
    return (
        <div style={{margin: '20px'}}>
            <SelectFilter/>
            <DatePicker/>
        </div>
    )
}