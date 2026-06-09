import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class KamKrogerHub extends NavigationMixin(LightningElement) {

    events = [
        { id: 1, badge: '14 days',   label: 'Confectionery Category Review'       },
        { id: 2, badge: '32 days',   label: 'Holiday 2027 Final Order Lock-in'    },
        { id: 3, badge: '6 months',  label: '2027 JBP Renewal'                    }
    ];

    contact = {
        name:     'Mike Albright',
        title:    'Kroger Main Confectionery Buyer',
        email:    'malbright@kroger.com',
        location: 'Cincinnati, OH',
        note:     "Remind Mike about his son's baseball championship last weekend before pitching the front-end expansion."
    };

    handleLogCall() {
        this[NavigationMixin.Navigate]({
            type: 'standard__quickAction',
            attributes: { apiName: 'Global.LogACall' }
        });
    }

    handleSendEmail() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: `mailto:${this.contact.email}` }
        });
    }

    handleScheduleMeeting() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Event',
                actionName: 'new'
            }
        });
    }
}
