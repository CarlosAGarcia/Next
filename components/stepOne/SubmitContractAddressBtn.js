import React from 'react'
import { useStore } from '../../store/store'

export default function SubmitContractAddressBtn(props) {
    const { address } = props
    const setContractAddressManual = useStore(state => state.setContractAddressManual)
    
    const setAddressState = () => {
        console.log(address)
        setContractAddressManual(address)
    }

    return (
        <div className="btnContainer">
        <button className='submitBtn' onClick={setAddressState}>SUBMIT</button>
    </div>
    )
}
