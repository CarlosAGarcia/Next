import Web3 from "web3";

export const isENS = (addr) => {
    return (addr && addr.toString().slice(-4) === '.eth') ? true : false
}

// formats an address (can be manual input) and returns whether if valid or not
export const getAddressFromENS = async (ensName) => {
    try {
        const stringAddr = ensName.toString()

        const web32 = new Web3(
            new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/8be74eed589644faa145a52175374810")
          );

        let addr = null   
        await web32.eth.ens.getAddress(stringAddr)
            .then(function (address) {
                console.log('GOT ADDR FROM ENS', { ENS: ensName, address });
                addr = address   
            })
            .catch((error) => {
                return { error }
            })
        
        return addr
    } catch (error) {
        return { error }
    }
}