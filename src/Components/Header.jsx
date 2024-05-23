import React from "react"
import * as S from "./HeaderStyle.jsx"
import Skate from "../assets/skate.jpg"

function Header() {
    return(
        <S.StyleHeader>
            <S.Img src={Skate} alt="imagem de um skate" />
            <S.H1>WELCOME TO JETSKATESHOP</S.H1>
        </S.StyleHeader>

    )
}

export default Header