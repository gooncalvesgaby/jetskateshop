import React from "react"
import * as S from "./Style.jsx"
import Skate from "../assets/skate.jpg"

function Header() {
    return(
        <S.Header>
            <S.Img src={Skate} alt="imagem de um skate" />
        </S.Header>
    )
}

export default Header