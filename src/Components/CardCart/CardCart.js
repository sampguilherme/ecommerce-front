import React, { useContext, useEffect, useState } from "react";
import { priceFormmater } from "../../utils/priceFormatter";
import { Button, useConst } from "@chakra-ui/react";
import { CardContainer, Image, P, DivInfo, H2, DivName, DivPrice, DivQuant, ButtonAdd, ButtonRemove } from "./style";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function CardCart(props){
    
    const { games } = props
    const [gamesQuantity, setGamesQuantity] = useState(games.quantity)
    
    const context = useContext(GlobalContext)
    const {
            cart,
            calculateTotal
    } = context
    
    const addQuantity = () => {
        games.quantity = games.quantity + 1
        setGamesQuantity(games.quantity)
    }

    const removeQuantity = () => {
        if(games.quantity > 1){
            games.quantity = games.quantity - 1
            setGamesQuantity(games.quantity)
        }
    }


    return (
        <CardContainer>
            <Image src={games.image} alt={games.name}/>
            <DivInfo>
                <DivName>
                    <H2>{games.name}</H2>
                </DivName>
                <DivQuant>
                    <P>Quant: <ButtonRemove
                                onClick={() => { 
                                    removeQuantity()
                                    calculateTotal()
                                }}
                                >-</ButtonRemove>

                                {games.quantity}
                                
                                <ButtonAdd className="add"
                                    onClick={() => {
                                    addQuantity()
                                    calculateTotal()
                                    }}
                                
                                >+</ButtonAdd>
                        </P>
                    
                </DivQuant>
                <DivPrice>
                    <P>{priceFormmater.format(games.price * gamesQuantity)}</P>
                </DivPrice>
            </DivInfo>
        </CardContainer>
    )
}