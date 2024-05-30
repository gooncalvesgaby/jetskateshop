import styled, { keyframes } from "styled-components"

export const MainStyle = styled.main`
display: flex;
`
export const StyledSection = styled.section`
display: flex;
`

export const StyledSection2 = styled.section`
display: flex;
overflow: hidden;
`

export const Div = styled.div`
// min-width: 100%;
background-color: black;
height: 5rem;
display: flex;
justify-content: start;
align-items: center;
width: 100vw;
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

@keyframes H2{
    0%{margin-Left: 0%}
    100%{margin-Left: 65%}
}
`





