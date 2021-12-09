import styled from "styled-components";
import { TEXT, SEARCH } from '../StepOne'
import { CONNECT } from '../../stepTwo/StepTwo'

const StyledStepOne = styled.div`
    height: 100%;

    .originSelector {
        display: flex;
        .originType {
            width: 50%;
            .typeText {
            }
        }
    }
    .contentContainer {
        height: 100%;
        .content {
            display: flex;
            position: relative;
            height: 100%;
            .placeholder {
                width: 100%;
            }
            .TextOrigin, .SearchOrigin, .ConnectOrigin {
                position: absolute;
                height: 100%;
                background-color: #161616;
                width: 100%;
                align-items: center;
                justify-content: center;
                .showAddr {
                    display: flex;
                }
                .hideAddr {
                    display: none;
                }
            }
            .TextOrigin {
                /* display: flex; */
                clip-path: ${props => props.originType === TEXT ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)'};
                transition: .5s;
                .inputWalletManual {
                    background-color: transparent;
                    border: none;
                    color: white;
                    border-bottom: 1px solid grey;
                }
                .btnContainer{
                    display: flex;
                    justify-content: flex-end;
                    color: white;
                }
            }
            .SearchOrigin {
                display: flex;
                clip-path: ${props => props.originType === SEARCH ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)'};
                transition: .5s;
            }
            .ConnectOrigin {
                display: flex;
                clip-path: ${props => props.originType === CONNECT ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)'};
                transition: .5s;
            }
        }
    }
`

export default StyledStepOne
