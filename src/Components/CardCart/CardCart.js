import React from "react";
import { priceFormmater } from "../../utils/priceFormatter";
import { CardContainer, Image, P, DivInfo, H2, DivName, DivPrice, DivQuant } from "./style";

export default function CardCart(props){
    
    const { games } = props
 
    return (
        <CardContainer>
            <Image src={games.image} alt={games.name}/>
            <DivInfo>
                <DivName>
                    <H2>{games.name}</H2>
                </DivName>
                <DivQuant>
                    <P>Quant: {games.quantity}</P>
                </DivQuant>
                <DivPrice>
                    <P>{priceFormmater.format(games.price * games.quantity)}</P>
                </DivPrice>
            </DivInfo>
        </CardContainer>
    )
}