import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import snickersFunSize from '@salesforce/resourceUrl/snickersfunsize';
import kindBar from '@salesforce/resourceUrl/kindbar';

export default class IntelligentRecommendation extends LightningElement {

    // ─── Card 1 configurable properties ───────────────────────────────────
    @api card1Title   = 'Snickers Fun Size Multipack';
    @api card1ImageUrl = '';
    @api card1Text    = 'Product sales in decline for Snickers Fun Size Multipack at Kroger Midwest. Ensure Halloween promotion is displayed correctly and secondary signage is in place.';

    // ─── Card 2 configurable properties ───────────────────────────────────
    @api card2Title   = 'Kind Dark Chocolate Almond Coconut';
    @api card2ImageUrl = '';
    @api card2Text    = 'Unit velocity trending +9% YA for Kind Dark Chocolate Almond Coconut. Recommend secondary display in the Snacking aisle to capitalize on incremental demand.';

    // ─── Dismiss state ────────────────────────────────────────────────────
    @track dismissedIds = new Set();

    // Fall back to imported static resource if no URL has been configured
    get _card1Image() { return this.card1ImageUrl || snickersFunSize; }
    get _card2Image() { return this.card2ImageUrl || kindBar; }

    get visibleCards() {
        const all = [
            {
                id:             1,
                productShort:   this.card1Title,
                imageUrl:       this._card1Image,
                recommendation: this.card1Text,
                learnMoreMsg:   `Opening ${this.card1Title} recommendation details.`
            },
            {
                id:             2,
                productShort:   this.card2Title,
                imageUrl:       this._card2Image,
                recommendation: this.card2Text,
                learnMoreMsg:   `Opening ${this.card2Title} recommendation details.`
            }
        ];
        return all
            .filter(c => !this.dismissedIds.has(c.id))
            .map(c => ({ ...c, wrapClass: 'ir-card' }));
    }

    get hasCards() {
        return this.visibleCards.length > 0;
    }

    handleLearnMore(event) {
        const id   = Number(event.currentTarget.dataset.id);
        const card = this.visibleCards.find(c => c.id === id);
        this.dispatchEvent(new ShowToastEvent({
            title:   'Opening Recommendation',
            message: card.learnMoreMsg,
            variant: 'info'
        }));
    }

    handleDismiss(event) {
        const id   = Number(event.currentTarget.dataset.id);
        const next = new Set(this.dismissedIds);
        next.add(id);
        this.dismissedIds = next;
    }

    handleRestore() {
        this.dismissedIds = new Set();
    }
}
