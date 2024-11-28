/*
    En este documento se ingresaran las URL para que sean empleadas en los script de automatización.
*/
export default class Url {

    build() {return this}
    
    urlMtv() {
        // Inicio de la APP
            this.pantallaDashboard                      = 'consumptions';

        // Grilla de Planes
            this.pantallaGrillaPlanes                   = 'hard-bundle/grid-plans';

        // Packs
            this.pantallaPacks                          = 'hard-bundle/offer/packs';

        // TYP
            this.thankyoupage                           = 'hard-bundle/subscription-success';

        // Cambio de plan
            this.pantallaCambioDePlan                   = 'hard-bundle/change-plan'

        // Administar mi Movistar TV
            this.pantallaAdministrar                    = 'hard-bundle/manage-accounts'
        // Conocer Mi Plan Actual
            this.conocerMiPlanActual                    = 'hard-bundle/know-plan'

        // Activar disney y star+
            this.comboActivo                            = 'hard-bundle/manage-accounts/disney-handler?subscription=active'
            this.comboNoContratado                      = 'hard-bundle/manage-accounts/disney-handler?subscription=no-movistar-tv'

        return this;
    }
}