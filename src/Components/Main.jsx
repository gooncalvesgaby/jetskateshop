import React from "react";
import * as S from "./MainStyle.jsx"
import Camisetas from "../assets/camiseta.jpg"

function Main() {
    return(
        <S.StyleMain>
            <S.Div>
                <S.H2>LIQUIDAÇÃO</S.H2>
            </S.Div>
           <S.StyledSection>
                <img src= {Camisetas} alt="camiseta" />
           </S.StyledSection>
        </S.StyleMain>

    )
}

export default Main