import { useState, useEffect } from "react"
import { Card } from "./cards/Card"
import { Filter } from './filters/Filter'
import { Nav } from './nav/Nav'

export const Character = () => {
    const [characters, setCharacters] = useState([])
    const [initialCharactersList, setInitialCharacterList] = useState([])
    const [filters] = useState([
        {
            id: 'Alive',
            filterValue: 'Character Alive'
        },
        {
            id: 'Dead',
            filterValue: 'Character Dead',   
        },
        {
            id: 'Female',
            filterValue: 'Female',  
        },
        {
            id: 'Male',
            filterValue: 'Male',  
        },
        {
            id: 'unknown',
            filterValue: 'Origin Unknown',  
        }
    ])

    const [filtersApplied, setFiltersApplied] = useState([])

    const handleFilters = (e) => {
        let statusID = e.target.id
        let check = e.target.checked

        if (check === true) {
            setFiltersApplied([...filtersApplied, statusID])
            
            
        }else{
            let remainingFilters = filtersApplied.filter((el) => el !== statusID)
            setCharacters(initialCharactersList)
            setFiltersApplied(remainingFilters)
        }
    }

    const getCharacters = async() => {
        const data = await fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .catch(error => console.log("Error al obtener datos: " + error))
        return data;
    }

    useEffect(() => {
        const saveCharacters = async() => {
            const info = await getCharacters(); // Espera a que se obtengan los datos de la API
            const listOfCharacters = info.results // Guarda la informacion en una constante
            setCharacters(listOfCharacters) // Cambia el estado de personajes a los datos obtenidos y los guarda en la variable characters
            setInitialCharacterList(listOfCharacters) // Guarda la lista completa de los personajes para luego mostrarla cuando se desactiven los filtros
        }
        saveCharacters();
    }, [])              // Si ponemos el arreglo vacio, apenas se cargue la pagina, cargara el componente

    useEffect(() => {
        filtersApplied.forEach((statusID) => {
            if (statusID === "Alive" || statusID === "Dead") {
                let characterStatus = characters.filter((character) => (character.status === statusID))
                setCharacters(characterStatus)
            }
            if (statusID === "Female" || statusID === "Male") {
                let characterGender = characters.filter((character) => (character.gender === statusID))
                setCharacters(characterGender)
            }
            if (statusID === "unknown") {
                let characterOrigin = characters.filter((character) => (character.origin.name === statusID))
                setCharacters(characterOrigin)
            }
        })
    }, [filtersApplied])
    
  return (
    <div>
        <Nav itemMenu={"Characters"} /> 
        <section className="mt-3">
            <h2 className="ms-5" style={{color: "#344D67"}}>Filters</h2>
            <div className="filters d-flex flex-lg-row justify-content-lg-center align-items-center gap-lg-5">
                {filters.map((filterName) => {return <Filter key={filterName.id} filters={filterName} handleFilters={handleFilters} />})}
            </div>
        </section>
        <section className="d-flex flex-wrap justify-content-center gap-3 mt-5">
            {characters.length > 0? 
                characters.map((character) => {
                    return <Card key={character.id} allData={character} />
                }) :
                <p className="alert alert-warning" role="alert">
                <i className="bi bi-exclamation-octagon-fill me-2"></i>
                    Sorry! There are no characters with all those properties.
                </p>
            }
        </section>
    </div>

  )
}
