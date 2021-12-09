

import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { get } from 'lodash'
import axios from 'axios';
import { useStore } from '../../store/store'

const CancelToken = axios.CancelToken;
let source

const AutoCompleteDemo = () => {
    const setContractAddressManual = useStore(state => state.setContractAddressManual)

    const [allTokens, setAllTokens] = useState([]);
    const [selectedToken, setSelectedToken] = useState(null);
    const [filteredTokens, setfilteredTokens] = useState(null);

    const cancelRequestIfNeeded = () => {
        if (source) source.cancel('Operation canceled by the user.')
    }
    const searchForTokens = async (searchValue) => {
        console.log('SEARCH TOKEN ->', { searchValue })
        cancelRequestIfNeeded()

        source = CancelToken.source();
        await axios.post('http://localhost:3000/api/searchCollection/search', { searchValue }, { cancelToken: source.token })
            .then((res) => {
                const tokens = get(res, 'data.tokens', [])
                console.log('res GOT FINAL', { tokens })
                setAllTokens(tokens)
            })
    }

    useEffect(async () => {
        await searchForTokens('')
        return () => {
            cancelRequestIfNeeded()
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchToken = async (event) => {
        await setTimeout(async () => {
            let _filteredTokens;
            const searchValue = event.query.trim()

            if (!searchValue.length) {
                _filteredTokens = [...allTokens];
            }
            else {
                await searchForTokens(searchValue)
                _filteredTokens = allTokens.filter((token) => {
                    return token.name.toLowerCase().includes(searchValue.toLowerCase());
                });
            }

            setfilteredTokens(_filteredTokens);
        }, 250);
    }

    const itemTemplate = (item) => {
        console.log('itemTemplate', { item })

        const src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'
        const onErr = (e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'

        return (
            <div className="token-item">
                <img alt={item.name} src={src} onError={onErr} className={`token token-${item.name.toLowerCase()}`} />
                <div className="tokenInfo">
                    <div>{item.name}</div>
                </div>
            </div>
        );
    }

    const onSelect = (e) => {
        setSelectedToken(e.value)

        const address = get(e, 'value.address', null)
        if (address) {
            setContractAddressManual(address)
        } else {
            // deal with error - format with no address
        }
    }
    return (
        <div className="card">
            <h5>Dropdown, Templating and Force Selection</h5>
            <AutoComplete value={selectedToken} suggestions={filteredTokens} completeMethod={searchToken} field="name" dropdown forceSelection itemTemplate={itemTemplate} onChange={onSelect} />
        </div>
    )
}

export default AutoCompleteDemo