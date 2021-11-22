
import create from 'zustand'


// STORED CONSTANTS


// STORED VALUES
const provider = null
const userWalletAddress = null


// STORED functions / accessors
const setProvider = (provider, set) => {
    // const validWallet = provider?.selectedAddress // validation of wallet
    const userWalletAddress = provider?.selectedAddress

    if (userWalletAddress) { // success
        // formatting wallet here
        // const userWalletAddress = provider?.selectedAddress

        set(state =>
            ({
                ...state,
                provider,
                userWalletAddress
            })
        )        
    } else { // error
        // error handling of wallet login
    }
}
const setWalletNull = (set) => {
    set(state =>
        ({
            ...state,
            userWallet: null,
            userWalletAddress: null
        })
    ) 
}
const setWalletAddressManual = (address, set) => {
    set(state =>
        ({
            ...state,
            provider: null,
            userWalletAddress: address
        })
    )
}

// combo of state vars + their accessors
export const useStore = create(set => ({
    provider,
    // userWallet,
    userWalletAddress,
    setProvider: (provider) => setProvider(provider, set),
    setWalletAddressManual: (address) => setWalletAddressManual(address, set),
    setWalletNull: () => setWalletNull(set)
}))
