import React from 'react'
import { useStore } from '../../store/store'

export default function SubmitContractAddressBtn(props) {
    const { address } = props
    const setWalletAddressManual = useStore(state => state.setWalletAddressManual)
    
    const setAddressState = () => {
        console.log(address)
        setWalletAddressManual(address)
    }

    return (
        <div className="btnContainer">
        <button className='submitBtn' onClick={setAddressState}>SUBMIT</button>
    </div>
    )
}
