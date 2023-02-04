import { useState } from "react";
import jogos from "../jogos.json"
import CardJogo from "../Components/CardJogo/CardJogo"

export const GlobalState = () => {
    const [cart, setCart] = useState([])
    const [games, setGames] = useState(jogos.jogos)

    const [search, setSearch] = useState("")
    const [alphabeticalOrder, setAlphabeticalOrder] = useState("")
    const [minValue, setMinValue] = useState("")
    const [maxValue, setMaxValue] = useState("")
    const [orderByValue, setOrderByValue] = useState("")

    const [totalValue, setTotalValue] = useState("")

    const calculateTotal = () => {
        const total = cart.reduce(  
            (acc, product) => {
                return product.price * product.quantity + acc
            },
            0
        )
        setTotalValue(total)
    }
        

    const addToCart = (productToAdd) => {
      const newCart = [...cart]

      const productFound = newCart.find((productInCart) => productInCart.id === productToAdd.id)

      if(!productFound){
        const newProduct = {...productToAdd, quantity: 1}
        newCart.push(newProduct)
      } else {
        productFound.quantity++
      }

      setCart(newCart)
    }

    const searchButton = () => {
        games.filter((game) => {
            console.log(game.name.toLowerCase().includes(search.toLowerCase()))
        })
    }

    const renderGames = games.filter((game) => {
                return game
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
                games={game}
                key={game.id}
            />
    })

    const removeFromCart = (gameToRemove) => {
        const newCart = cart.filter(
            (gameInCart) => gameInCart.name !== gameToRemove.name
        )
        setCart(newCart)
    }

  return {
    cart,
    addToCart,
    games,
    setGames,
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
    totalValue,
    setTotalValue,
    calculateTotal,
    removeFromCart,
    searchButton
  }
}