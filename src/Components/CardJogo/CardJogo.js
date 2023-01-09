import React from "react";
import { priceFormmater } from "../../utils/priceFormatter";
import { Button, CardContainer, Image, P, GameName } from "./style";


export default function CardJogo(props) {
    const { games, addToCart } = props
    return (
        <CardContainer>
            <Image src={games.image} alt={games.name}/>
            <GameName>{games.name}</GameName>
            <P>{priceFormmater.format(games.price)}</P>
            <Button onClick={() => addToCart(games)}>COMPRAR</Button>
        </CardContainer>
    )
}

