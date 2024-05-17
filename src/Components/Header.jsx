import React from "react"
import * as S from "./Style.jsx"
import Skate from "../assets/skate.png"

function Header() {
    return(
        <S.Header>
            <img src={Skate} alt="imagem de um skate" />
        </S.Header>
    )
}

export default Header