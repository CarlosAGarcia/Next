import React, { useState } from 'react'
import { useStore } from '../../store/store'
import StyledStepThree from './styles/StyledStepThree.style'
import axios from 'axios'

export default function StepThree() {
    const contractAddress = useStore(state => state.contractAddress) // 0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb
    const userWalletAddress = useStore(state => state.userWalletAddress) // 0xE3E6917802EBFEEcb844349CBb007151efE98B6a
    const [ verification, setVerification ] = useState(null)

    const verifyAddress = async () => {
        console.log('START')
        let hasToken = false

        const url = `https://api.opensea.io/api/v1/collections?asset_owner=${userWalletAddress}&offset=0&limit=300`
        await axios.get(url)
            .then(res => {
                console.log({res})
                if (res?.data) {
                    res.data.find((collection) => {
                console.log({collection})

                        if (collection?.primary_asset_contracts) {

                            return collection.primary_asset_contracts.find(pac => {
                                console.log({pac})
                                console.log({stat: pac.address === contractAddress })
                                if (pac.address === contractAddress) hasToken = true
                            })
                        }
                    })
                }

            })
            .catch(err => console.error(err));
            setVerification(hasToken)
        console.log('END')
    }

    return (
        <StyledStepThree>
            <div className='confirmContainer'>
                <div className='textHeader'>Verify</div>
                <div className='infoContainer'>
                    <div className='textHeader paddingLeft address'>Token: {contractAddress}</div>
                    <div className='textHeader address'>Wallet: {userWalletAddress}</div>
                </div>
                <div className='submitBtnContainer'>
                    <button className='submitBtn' onClick={verifyAddress}>GO!</button>
                </div>
            </div>
            <div className='verificationStatusContainer'>
                {verification ? 'YES' : 'NO' }
            </div>
        </StyledStepThree>
    )
}
