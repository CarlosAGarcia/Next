import styled from "styled-components";

const StyledMain = styled.div`
    .mainPage {
        background-color: #161616;
        min-height: 100vh;
        color: #eaeaea;
        .demoText {
            font-size: 1.5rem;
            font-weight: bold;
        }
        .triContainer {
            padding-top: 1rem;
            display: grid;
            grid-template-columns: 25% 25% 50%;
            color: #eaeaea;
            div {
                border: 1px solid red;
            }
            .left {

            }
            .mid {
                padding-top: 2rem;
            }
            .right {
                padding-top: 4rem;

            }
        }
    }
`

export default StyledMain
