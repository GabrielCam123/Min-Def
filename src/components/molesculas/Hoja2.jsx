import React from 'react'
import ImpactoI from '../componentes/compImpactoI'
import ImpactoS from '../componentes/compImpactoS'
import ImpactoE from '../componentes/compImpactoE'
import Header from '../header'
function Hoja2() {
  return (
        <div style={{backgroundColor:'white'}}>
            <Header/>
            <div>
              <ImpactoI/>
              <ImpactoS/>
              <ImpactoE/>
            </div>
            <footer style={{fontSize:"20px",fontWeight:"600",textAlign:'right',margin:"20px"}}>Sello del Gobierno Autonomo Municipal</footer>
        </div>
      )
}

export default Hoja2