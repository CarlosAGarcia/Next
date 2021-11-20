import React from 'react'
import { useStore } from '../../../store/store'

export default function UserWalletAddress() {
    const userWalletAddress = useStore(state => state.userWalletAddress)

    return (
        <div>
            {`ADDRESS IS:  ${userWalletAddress}`}
        </div>
    )
}
