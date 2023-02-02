import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { priceFormmater } from "../../utils/priceFormatter";
import { Button, CardContainer, Image, P, GameName } from "./style";


export default function CardJogo(props) {

    const context = useContext(GlobalContext)
    const { addToCart } = context
    const { games } = props
    return (
        <CardContainer>
            <Image src={games.image} alt={games.name}/>
            <GameName>{games.name}</GameName>
            <P>{priceFormmater.format(games.price)}</P>
            <Button onClick={() => {
                    addToCart(games)
                }}>COMPRAR</Button>
        </CardContainer>
    )
}

