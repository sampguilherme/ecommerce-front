import React, { useContext, useEffect, useState } from "react";
import { priceFormmater } from "../../utils/priceFormatter";
import { CardContainer, Image, P, DivInfo, H2, DivName, DivPrice, DivQuant, ButtonAdd, ButtonRemove, DeleteButton } from "./style";
import { GlobalContext } from "../../contexts/GlobalContext";
import { BiTrash } from "react-icons/bi";

export default function CardCart(props){
    
    const { games } = props
    const [gamesQuantity, setGamesQuantity] = useState(games.quantity)
    
    const context = useContext(GlobalContext)
    const {
            cart,
            calculateTotal,
            removeFromCart
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

    useEffect(() => {
        calculateTotal()
    })

    return (
        <CardContainer>
            <Image src={games.image} alt={games.name}/>
            <DivInfo>
                <DivName>
                    <H2>{games.name}</H2>
                </DivName>
                <DivQuant>
                    <P>Quant: </P>
                    <P> <ButtonRemove
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
                    <DeleteButton onClick={() => {
                        removeFromCart(games)
                    }}><BiTrash/></DeleteButton>
                    <P>{priceFormmater.format(games.price * games.quantity)}</P>
                </DivPrice>
            </DivInfo>
        </CardContainer>
    )
}