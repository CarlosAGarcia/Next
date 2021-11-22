import React, { useEffect, useState } from 'react'
import SelectAddress from './wallet/SelectAddress'
import UserWalletAddress from './wallet/UserWalletAddress'
import { useStore } from '../../store/store'

export default function WalletLogin() {
    const userWalletAddress = useStore(state => state.userWalletAddress)
    const [ showConnectBtn, setShowConnectBtn] = useState(userWalletAddress ? false : true)

    // Either renders the user wallet or the button to connect
    // mount unmount
    useEffect(() => {
        setShowConnectBtn(userWalletAddress ? false : true)
    }, [ userWalletAddress ])

    if (showConnectBtn) return <SelectAddress/>
    else return (
        <UserWalletAddress/>
    )
}
