import React, { useState } from 'react'
import SubmitWalletAddressBtn from './SubmitWalletAddressBtn'

export default function TextOrigin() {
    const [address, setAddress] = useState('')

    return (
        <div className='TextOrigin'>
            <input className="inputWalletManual" type='string' value={address} onChange={(e) => setAddress(e?.target?.value)}/>
            <SubmitWalletAddressBtn address={address}/>
        </div>
    )
}
