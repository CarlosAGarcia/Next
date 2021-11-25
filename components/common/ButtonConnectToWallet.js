import React from 'react'
import { ConnectToWallet } from '../../util/connectToWallet'
import { useStore } from '../../store/store'
import StyledButtonConnectToWallet from './styles/StyledButtonConnectToWallet.style'

// Button container to click so we can connect to wallet
// Will not be visible if user connected
export default function ButtonConnectToWallet() {
    const setProvider = useStore(state => state.setProvider)
    const setWalletNull = useStore(state => state.setWalletNull)

    // change this to run on mount and change component to only render when popup should be up
    const connectToWallet = async () => {
        // info: { chainId: number }
        const onSuccess = (provider) => {
            setProvider(provider)
        }

        // error: { code: number; message: string }
        const onDisconnect = (error) => {
            if (error) onErr(error)
            setWalletNull()
        }

        // accounts: string[]
        const onAccountsChanged = (accounts) => {
            console.log('onAccountsChanged pt 2', accounts)
        }

        // chainId: number
        const onChainChanged = (chainId) => {
            console.log('onChainChanged', chainId)
        }

        const onErr = (error) => {
            console.log('onErr', error)
        }

        ConnectToWallet({ onSuccess, onDisconnect, onAccountsChanged, onChainChanged, onErr })
    }

    return (
        <StyledButtonConnectToWallet>
            <div className='ConnectBtnContainer'>
                <button className='connectBtn' onClick={connectToWallet}>CONNECT</button>
            </div>
        </StyledButtonConnectToWallet>
    )
}
