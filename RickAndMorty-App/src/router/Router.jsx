import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../components/home/Home"   
import { Character } from "../components/characters/Character"
import { Contact } from "../components/contact/Contact"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/characters" element = {<Character/>}/>
                <Route path="/contact" element = {<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}