import React from 'react'
import WalletLogin from '../common/WalletLogin'
import StyledBannerNav from './styles/StyledBannerNav.js'

export default function BannerNavigation() {
    return (
        <StyledBannerNav>
            <div>
                <WalletLogin/>
            </div>
        </StyledBannerNav>
    )
}
