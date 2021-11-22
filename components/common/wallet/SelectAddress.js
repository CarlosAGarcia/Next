import React from 'react'
import ButtonConnectToWallet from '../ButtonConnectToWallet'
import StyledSelectAddress from './styles/StyledSelectAddress.style'
import { useStore } from '../../../store/store'

export default function SelectAddress() {
    // const userWalletAddress = useStore(state => state.userWalletAddress)
    // const setWalletAddressManual = useStore(state => state.setWalletAddressManual)

    return (
        <StyledSelectAddress>
            <div className='walletaddressContainer'>
                {/* <input className="inputWalletManual" type='string' value={userWalletAddress} disabled /> */}
                <ButtonConnectToWallet/>
            </div>
        </StyledSelectAddress>
    )
}
