import React, { useState } from 'react'
import SubmitContractAddressBtn from './SubmitContractAddressBtn'

export default function TextOrigin() {
    const [address, setAddress] = useState('')

    return (
        <div className='TextOrigin'>
            <input className="inputWalletManual" type='string' value={address} onChange={(e) => setAddress(e?.target?.value)}/>
            <SubmitContractAddressBtn address={address}/>
        </div>
    )
}
