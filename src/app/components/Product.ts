import { Categorie } from "./Categorie"

export interface Product {
    id: number
    nom: string
    quantite: number
    dateCreation: Date
    dateModif: Date
    disponible:boolean
    categorie:Categorie
}