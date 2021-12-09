import React, { useState, useEffect } from 'react'
import AutoComplete from '../common/Autocomplete'
import { useStore } from '../../store/store'

export default function SearchOrigin() {
    const contractAddress = useStore(state => state.contractAddress)

    useEffect(() => {
        

    }, [])
    console.log({ contractAddress })
    return (
        <div className='SearchOrigin'>
            <div>
                <div>SEARCH</div>
                <AutoComplete/>
            </div>
            <div className={`${contractAddress ? 'showAddr' : 'hideAddr'}`}>
                <div>{`ADDRESS: ${contractAddress}`}</div>
            </div>
        </div>
    )
}
