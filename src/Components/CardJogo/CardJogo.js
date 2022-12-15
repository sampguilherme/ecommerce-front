import React from "react";
import { Button, CardContainer, Image, P } from "./style";


export default function CardJogo(props) {
    const { games, addToCart } = props
    return (
        <CardContainer>
            <Image src={games.image} alt={games.name}/>
            <P>{games.name}</P>
            <P>R$ {games.price}</P>
            <Button onClick={() => addToCart(games)}>Comprar</Button>
        </CardContainer>
    )
}

