import Web3 from "web3";
import Web3Modal from "web3modal";

export const ConnectToWallet = async ({ onSuccess, onDisconnect, onAccountsChanged, onChainChanged, onErr }) => {
    try {
        const Torus = (await import('@toruslabs/torus-embed')).default
        const Authereum = (await import('authereum')).default
        
        // const WalletConnectProvider = (await import('@walletconnect/web3-provider')).default
        // const MewConnect = (await import('@myetherwallet/mewconnect-web-client')).default
        // const Fortmatic = (await import('fortmatic')).default
        const ethProvider = (await import('eth-provider')).default


        const authereum = {
            package: Authereum // required
        }
        const torus = {
            package: Torus // required

        }
        const frame = {
              package: ethProvider // required
        }
        // provider for WalletConnect
        // const walletconnect = {
        //     package: WalletConnectProvider, // required
        //     options: {
        //         infuraId: "INFURA_ID" // required
        //     }
        // }

        // const mewconnect = {
        //     package: MewConnect, // required
        //     options: {
        //       infuraId: "INFURA_ID" // required
        //     }
        // } 

        // const fortmatic = {
        //     package: Fortmatic, // required
        //     options: {
        //       key: "FORTMATIC_KEY" // required
        //     }
        // }


        /* See Provider Options Section */
        // wallets provided/supported
        const providerOptions = {
            authereum,
            torus,
            frame
            // walletconnect,
            // mewconnect,
            // fortmatic
        };
        console.log('providerOptions ->', { providerOptions })

        // Settings for modal
        const web3Modal = new Web3Modal({
            network: "mainnet", // optional
            cacheProvider: false, // optional - keeps preference of wallet provider - only shows this (annoying on metamask)
            providerOptions // required
        });

        const provider = await web3Modal.connect().catch(err => console.log('errrr', err))
        const web3 = new Web3(provider);
        const accs = await web3.eth.getAccounts(console.log)
        const add = provider.selectedAddress
        console.log('provider', { web3, provider, accs, add })
        
        // Subscribe to accounts change
        // accounts: string[]
        provider.on("accountsChanged", (accounts) => {
            console.log('provider.onaccountsChanged', accounts);
            if (accounts.length === 0) onDisconnect()
            else onAccountsChanged(accounts)
        });
        
        // Subscribe to chainId change
        // chainId: number
        provider.on("chainChanged", (chainId) => {
            console.log('provider.chainChanged', chainId);
            onChainChanged(chainId)
        });
        
        // Subscribe to provider connection
        // info: { chainId: number }
        provider.on('connect', (info) => {
            console.log('provider.connect', info);
            onSuccess(info)
        });
        
        // Subscribe to provider disconnection
        // error: { code: number; message: string }
        provider.on("disconnect", (error) => {
            console.log('provider.disconnect', error);
            onDisconnect(error)
        });

        if (provider) onSuccess(provider)
    } catch (error) {
        console.log('error connecting to wallet', error)
        if (onErr) onErr(error)
    }
}