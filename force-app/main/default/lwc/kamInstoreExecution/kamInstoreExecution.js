import { LightningElement } from 'lwc';

export default class KamInstoreExecution extends LightningElement {

    // Dynamic month + year label — always reflects the current date
    get currentMonthYear() {
        return new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }

    banners = [
        { id: 1, name: 'Kroger',              pct: 78, barStyle: 'width: 78%' },
        { id: 2, name: 'Kroger Marketplace',  pct: 82, barStyle: 'width: 82%' },
        { id: 3, name: 'Harris Teeter',       pct: 69, barStyle: 'width: 69%' },
        { id: 4, name: 'Fred Meyer',          pct: 74, barStyle: 'width: 74%' },
        { id: 5, name: "Smith's Food & Drug", pct: 80, barStyle: 'width: 80%' }
    ];
}
