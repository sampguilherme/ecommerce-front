import React from "react";
import { CardContainer, Image, P } from "./style";

export default function CardCart(props){
    
    const { games } = props
 
    return (
        <CardContainer>
            <Image src={games.image} alt={games.name}/>
            <P>{games.name}</P>
            <P>R${games.price}</P>
        </CardContainer>
    )
}