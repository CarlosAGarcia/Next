
import create from 'zustand'


// STORED CONSTANTS
// const TIME_ALIVE_IN_RENDERS = 1000


// STORED VALUES
const userWallet = null
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

// combo of state vars + their accessors
export const useStore = create(set => ({
    userWallet,
    userWalletAddress,
    setProvider: (provider) => setProvider(provider, set),
    setWalletNull: () => setWalletNull(set)
}))
