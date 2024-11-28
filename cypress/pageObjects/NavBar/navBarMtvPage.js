import ColorData from "../Color/colorDataPage"

const colorData                             = new ColorData();

export default class NavBar {

    navBar                                  = '.f1msngze';
    tituloMtv                               = '.f4w69sf';
    flechaAtras                             = '.fy5zjp2';
    tituloFontSize                          = '18px';
    tituloFontWeight                        = '400'; // valor 400 = normal
    tituloFontStyle                         = 'normal';
    tituloColor                             = colorData.getGrey0();
    tituloColorMobile                       = colorData.getWhite();

    // Textos de los títulos de las pantallas
    tituloTextoMtv                          = 'Movistar TV';
    tituloMiPlanMtvActual                   = 'Mi plan Movistar TV actual';
    tituloSeleccionLinea                    = 'Movistar TV';
    tituloCambioPlan                        = 'Cambio de plan';
    tituloComboPlus                         = 'Disney+ y Star+';
    tituloAdministrarMtv                    = 'Administrar mi Movistar TV';
    //Getters
    getNavBar                   (){ return cy.get(this.navBar)         };
    getTituloMtv                (){ return cy.get(this.tituloMtv)      };
    getFlechaAtras              (){ return cy.get(this.flechaAtras)    };
    getTituloFontSize           (){ return this.tituloFontSize         };
    getTituloFontStyle          (){ return this.tituloFontStyle        };
    getTituloFontWeight         (){ return this.tituloFontWeight       };
    getTituloColor(width)  
                        {  
                            if(width < 768){
                                return this.tituloColorMobile;
                            }else {
                                return this.tituloColor;
                            }                                              
                        };

// Geters Textos de los títulos de las pantallas
    
    getTituloTextoMtv           (){ return this.tituloTextoMtv          };
    getTituloMiPlanMtvActual    (){ return this.tituloMiPlanMtvActual   };
    getTituloSeleccionLinea     (){ return this.tituloSeleccionLinea    };
    getTituloCambioPlan         (){ return this.tituloCambioPlan        };
    getTituloComboPlus          (){ return this.tituloComboPlus         };
    getTituloAdministrarMtv     (){ return this.tituloAdministrarMtv    };
}
