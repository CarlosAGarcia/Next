import React from 'react'
import { useStore } from '../../store/store'
import { isENS, getAddressFromENS } from '../../util/addresses'

export default function SubmitContractAddressBtn(props) {
    const { address } = props
    const setWalletAddressManual = useStore(state => state.setWalletAddressManual)
    
    const setAddressState = async () => {
        console.log('SETTING ADDR', {address})

        if (isENS(address)) {
            const addr = await getAddressFromENS(address)
            setWalletAddressManual(addr)
        } else {
            setWalletAddressManual(addr)
        }
    }

    return (
        <div className="btnContainer">
        <button className='submitBtn' onClick={setAddressState}>SUBMIT</button>
    </div>
    )
}
