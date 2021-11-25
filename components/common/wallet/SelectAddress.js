import React from 'react'
import ButtonConnectToWallet from '../ButtonConnectToWallet'
import StyledSelectAddress from './styles/StyledSelectAddress.style'

export default function SelectAddress() {

    return (
        <StyledSelectAddress>
            <div className='walletaddressContainer'>
                <ButtonConnectToWallet/>
            </div>
        </StyledSelectAddress>
    )
}
