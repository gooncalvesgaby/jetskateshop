import React from "react";
import * as S from "./MainStyle.jsx"
import Camisetas from "../assets/camiseta.jpg"

function Main() {
    return(
        <S.MainStyle>
            <S.StyledSection>
                <S.Div>
                    <S.H2>LIQUIDAÇÃO</S.H2>
                </S.Div>
                <S.DivDois>
                    <S.H3>CAMISETAS</S.H3>
                    <S.Img src={Camisetas} alt="imagem de uma camiseta" />
                    <S.Img src={Camisetas} alt="imagem de uma camiseta" />
                    <S.Img src={Camisetas} alt="imagem de uma camiseta" />
                    <S.Img src={Camisetas} alt="imagem de uma camiseta" />
                    <S.Img src={Camisetas} alt="imagem de uma camiseta" />
                    <S.Img src={Camisetas} alt="imagem de uma camiseta" />
                    <S.Img src={Camisetas} alt="imagem de uma camiseta" />
                    <S.Img src={Camisetas} alt="imagem de uma camiseta" />
                </S.DivDois>
            </S.StyledSection>
        </S.MainStyle>
    )
}

export default Main