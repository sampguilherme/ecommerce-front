import React from "react"
import {Header} from "../../Components/Header/Header"

import { useState } from "react"
import { DivPrincipal, GamesContainer, Input, Select, InputNome, DivFlex, ButtonI, DivInput } from "./style"
import CardJogo from "../../Components/CardJogo/CardJogo.js"
import searchIcon from "../../Assets/search.svg"

import { Button } from "@chakra-ui/react"

import {
    Menu,
    MenuButton,
    MenuList,
  } from '@chakra-ui/react'


export const Home = (props) => {

    const {addToCart, games} = props

    const [search, setSearch] = useState("")
    const [alphabeticalOrder, setAlphabeticalOrder] = useState("")
    const [minValue, setMinValue] = useState("")
    const [maxValue, setMaxValue] = useState("")
    const [orderByValue, setOrderByValue] = useState("")
    
     

    const renderGames = games.filter((game) => {
        return game.name.toLowerCase().includes(search.toLowerCase())
    })
    .filter((game) => {
            return game.price >= minValue
    })
    .filter((game) => {
        if(maxValue >= 1){
            return game.price <= maxValue 
        } else if (maxValue < 1) {
            return game.price >= minValue
        }
    })
    .sort((a, z) => {
        if(alphabeticalOrder === "A-Z"){
            if(a.name < z.name){
                return -1
            } else {
                return 1
            }
        } else if(alphabeticalOrder === "Z-A"){
            if(a.name < z.name){
                return 1
            } else {
                return -1
            }
        }
    })
    .sort((smallValue, biggerValue) => {
        if(orderByValue === "crescente"){
            if(smallValue.price < biggerValue.price){
                return -1
            } else {
                return 1
            }
        } else if(orderByValue === "decrescente"){
            if(smallValue.price < biggerValue.price){
                return 1
            } else {
                return -1
            }
        }
    })
    .map((game) => {
        return <CardJogo
        addToCart={addToCart}
        games={game}
        key={game.id}
        />
    })


    return (
        <>
        <Header/>
        
        <DivPrincipal>
           
            <DivFlex>
                <DivInput>
                <Menu 
                    closeOnSelect={false}
                    
                >
                        <MenuButton 
                            as={Button} 
                            rightIcon={""}
                            height={"4vh"}
                            borderRadius={"8px"}
                        >
                            Filtros
                        </MenuButton>
                        <MenuList 
                            display={"flex"}
                            flexDirection={"column"}
                        >
                                <Select value={alphabeticalOrder} onChange={(e) => setAlphabeticalOrder(e.target.value)}>
                                    <option value="">Ordem alfabética</option>
                                    <option value="A-Z">A-Z</option>
                                    <option value="Z-A">Z-A</option>
                                </Select>
                            
                                <Select value={orderByValue} onChange={(e) => setOrderByValue(e.target.value)} closeOnSelect={false}>
                                    <option value="">Ordenar por valor</option>
                                    <option value="crescente">Crescente</option>
                                    <option value="decrescente">Decrescente</option>
                                </Select>
                            
                                <Input
                                placeholder="Valor minimo"
                                value={minValue} type="Number"
                                onChange={(e) => setMinValue(e.target.value)}
                                />
                                <Input
                                placeholder="Valor maximo"
                                value={maxValue} type="Number"
                                onChange={(e) => setMaxValue(e.target.value)}
                                />
                        </MenuList>
                    </Menu>
                    <InputNome 
                            placeholder="Nome do Jogo" 
                            value={search}
                            type="text" 
                            onChange={(e) => setSearch(e.target.value)}/>
                            <ButtonI>
                                <img src={searchIcon} alt="Search icon"/>
                            </ButtonI>
                </DivInput>
                <GamesContainer>
                    {renderGames}
                </GamesContainer>
            </DivFlex>
        </DivPrincipal>
        </>
    )
}

