import styled from "styled-components";

const StyledSelectAddress = styled.div`
    .walletaddressContainer {
        display: flex;
        padding: 1rem;
        .inputWalletManual {
            background-color: transparent;
            outline: none;
            border: none;
            border-bottom: 1px solid grey;
            margin-right: 1rem;
            color: white;
        }
        .ConnectBtnContainer {
            background-color: transparent;
            .connectBtn {
                background-color: transparent;
                border: 1px solid white;
                color: white;
                box-shadow: 2px 1px 2px gray;
                margin: 4px 10px 4px 10px;
                border-radius: 2px;
                &:hover {
                    opacity: .6;
                    cursor: pointer;
                }
                &:active {
                    box-shadow: 0 0 0 white;
                    margin: 6px 10px 2px 10px;
                }
            }
        }
    }
`

export default StyledSelectAddress
