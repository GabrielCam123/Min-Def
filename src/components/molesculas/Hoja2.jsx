import React from 'react'
import ImpactoI from '../componentes/compImpactoI'
import ImpactoS from '../componentes/compImpactoS'
import ImpactoE from '../componentes/compImpactoE'
import Header from '../header'
function Hoja2() {
  return (
        <div>
            <Header/>
            <div>
              <ImpactoI/>
              <ImpactoS/>
              <ImpactoE/>
            </div>
            <h4 style={{margin:("40px")}}>Sello del Gobierno Autonomo Municipal</h4>
        </div>
      )
}

export default Hoja2