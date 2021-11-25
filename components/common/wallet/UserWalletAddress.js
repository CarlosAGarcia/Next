import React from 'react'
import { useStore } from '../../../store/store'

export default function UserWalletAddress() {
    const contractAddress = useStore(state => state.contractAddress)
    const userWalletAddress = useStore(state => state.userWalletAddress)

    return (
        <div>
            {`CONTRACT IS:  ${contractAddress}`}
            {`ADDRESS IS:  ${userWalletAddress}`}

        </div>
    )
}
