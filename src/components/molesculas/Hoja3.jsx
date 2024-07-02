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
        <footer style={{fontSize:"20px",fontWeight:"600",textAlign:'right',margin:"20px"}}>Sello del Gobierno Autonomo Municipal</footer>
    </div>
  )
}

export default Hoja3