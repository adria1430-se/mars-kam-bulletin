import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class KamDashboardHeader extends NavigationMixin(LightningElement) {

    get today() {
        return new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year:    'numeric',
            month:   'long',
            day:     'numeric'
        });
    }


    handleNewWin() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'new'
            }
        });
    }

    handleLogInteraction() {
        this[NavigationMixin.Navigate]({
            type: 'standard__quickAction',
            attributes: {
                apiName: 'Global.LogACall'
            }
        });
    }

    handlePortal() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.8451.com'
            }
        });
    }
}
