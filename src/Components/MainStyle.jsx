import styled, { keyframes } from "styled-components"

export const StyleMain = styled.main`
display: flex;
`

export const Div = styled.div`
min-width: 100%;
background-color: black;
height: 5rem;
display: flex;
justify-content: start;
align-items: center;
`

export const H2 = styled.h2`
letter-spacing: 2rem;
font-family: sans-serif;
animation-name: cores, H2;
animation-duration: 1s, 3s;
animation-delay: 1s, 2s;
animation-iteration-count: infinite, infinite;

@keyframes cores{
    from{color: #6d6b6beb}
    to{color: #fff}
}
`



