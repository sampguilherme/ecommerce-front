import React, { useContext } from "react"
import {Header} from "../../Components/Header/Header"
import { DivPrincipal, GamesContainer, Input, Select, InputNome, DivFlex, ButtonI, DivInput, Section, SectionFiltros, PNotFound } from "./style"
import { BiFilterAlt} from "react-icons/bi";
import { Button } from "@chakra-ui/react"
import { IoSearchOutline } from "react-icons/io5";

import {
    Menu,
    MenuButton,
    MenuList,
  } from '@chakra-ui/react'
import { GlobalContext } from "../../contexts/GlobalContext"


export const Home = () => {

    const context = useContext(GlobalContext)
    const {
            renderGames,
            search,
            setSearch,
            alphabeticalOrder,
            setAlphabeticalOrder,
            orderByValue,
            setOrderByValue,
            minValue,
            setMinValue,
            maxValue,
            setMaxValue,
            searchButton,
            games
          } = context

    console.log(search.length)

    return (
        <>
        <Header/>
        
        <DivPrincipal>
           
            <DivFlex>
                <DivInput>
                <Section>
                    <InputNome 
                            placeholder="Nome do Jogo" 
                            value={search}
                            type="text" 
                            onChange={(e) => setSearch(e.target.value)}/>
                            <ButtonI onClick={() => searchButton()}>
                                <IoSearchOutline color="white" fontSize={"26px"}/>
                            </ButtonI>
                </Section>
                <SectionFiltros>
                <Menu 
                    closeOnSelect={false}
                    
                >
                        <MenuButton 
                            as={Button} 
                            rightIcon={<BiFilterAlt/>}
                            height={"40px"}
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
                    </SectionFiltros>
                </DivInput>
                <GamesContainer>
                    {renderGames.length < 1 ? 
                        <PNotFound>Nenhum jogo encontrado...
                        </PNotFound>
                        :
                        renderGames
                    }
                </GamesContainer>
            </DivFlex>
        </DivPrincipal>
        </>
    )
}

