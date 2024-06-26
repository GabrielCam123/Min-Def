import React from 'react'
import Header from '../header'
import ImpactoV from '../componentes/compImpactoV'
import ImpactoA from '../componentes/compImpactoA'
import ImpactoP from '../componentes/compImpactoP'
function Hoja3() {
  return (
    <div>
        <Header/>
        <div>
            <ImpactoV/>
            <ImpactoA/>
            <ImpactoP/>
        </div>
        <footer>Sello del Gobierno Autonomo Municipal</footer>
    </div>
  )
}

export default Hoja3