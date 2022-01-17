
import create from 'zustand'

// Initial Values for subdomain
const subdomain = null

// Functions to edit vals
const setSubdomain = (subdomain, set) => {
    set(state =>
        ({
            ...state,
            subdomain
        })
    )
}

// combo of state vars + their accessors
export const useStore = create(set => ({
    subdomain,
    setSubdomain: (subdomain) => setSubdomain(subdomain, set)
}))
