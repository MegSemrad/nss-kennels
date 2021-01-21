/*
    - This component is a child of the Kennel component
*/

import React from "react"
import "./Animal.css"

// AnimalCard is a reusable component that can be called multiple times 
export const AnimalCard = () => (
    <section className="animal">
        <h3 className="animal__name">Doodles</h3>
        <div className="animal__breed">Breed: Poodle</div>
    </section>
)