import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const barStyle = (pct) => `width: ${pct}%`;

export default class JointBusinessPlanKroger extends LightningElement {

    // ─── Tab 1: Retailer Commitments ───────────────────────────────────────
    overallCompliance = 86;

    retailerCommitments = [
        { id: 1, label: 'SHELF SPACE %',         actual: '10.8%',         target: '12.0%',         pct: 90, barStyle: barStyle(90) },
        { id: 2, label: 'SECONDARY DISPLAYS',     actual: '38 units',      target: '45 units',      pct: 84, barStyle: barStyle(84) },
        { id: 3, label: 'NEW ITEM DISTRIBUTION',  actual: '1,620 stores',  target: '1,850 stores',  pct: 88, barStyle: barStyle(88) },
        { id: 4, label: 'PROMOTIONAL EVENTS',     actual: '6 events',      target: '8 events',      pct: 75, barStyle: barStyle(75) },
        { id: 5, label: 'TPR COMPLIANCE',          actual: '88.0%',         target: '95.0%',         pct: 93, barStyle: barStyle(93) }
    ];

    // ─── Tab 2: R&D Sample Requests ────────────────────────────────────────
    sampleRequests = [
        { id: 1, product: "M\u0026M's Peanut Halloween Peg Bag",     status: 'In Review', owner: 'R\u0026D \u2014 J. Park',    dueDate: 'Mar 15, 2026', statusClass: 'status-badge status-review'    },
        { id: 2, product: 'Snickers Peanut Butter Squared',           status: 'Approved',  owner: 'R\u0026D \u2014 J. Park',    dueDate: 'Feb 28, 2026', statusClass: 'status-badge status-approved'  },
        { id: 3, product: 'Twix Dark Chocolate (Limited)',            status: 'Submitted', owner: 'R\u0026D \u2014 T. Okonkwo', dueDate: 'Apr 10, 2026', statusClass: 'status-badge status-submitted' }
    ];

    // ─── Tab 2: New Item Launch Milestones ─────────────────────────────────
    milestones = [
        { id: 1, item: "M\u0026M's Peanut Halloween Peg Bag", milestone: 'Final Formulation',  date: 'Feb 14, 2026', status: 'Complete',    statusClass: 'status-badge status-complete'    },
        { id: 2, item: "M\u0026M's Peanut Halloween Peg Bag", milestone: 'Packaging Approval', date: 'Mar 1, 2026',  status: 'In Progress', statusClass: 'status-badge status-inprogress'  },
        { id: 3, item: "M\u0026M's Peanut Halloween Peg Bag", milestone: 'First Shipment',     date: 'May 15, 2026', status: 'Pending',     statusClass: 'status-badge status-pending'     },
        { id: 4, item: 'Snickers Peanut Butter Squared',      milestone: 'Shelf Date (Kroger)',date: 'Apr 7, 2026',  status: 'Confirmed',   statusClass: 'status-badge status-confirmed'   }
    ];

    // ─── Tab 3: $ Tracking ─────────────────────────────────────────────────
    trackingMetrics = [
        { id: 1, label: 'NET REVENUE',          actual: '$14.6M',    target: '$18.2M',    pct: 80, barStyle: barStyle(80) },
        { id: 2, label: 'VOLUME (CASES)',        actual: '1,720,000', target: '2,100,000', pct: 82, barStyle: barStyle(82) },
        { id: 3, label: 'TRADE INVESTMENT',     actual: '$3.2M',     target: '$3.6M',     pct: 88, barStyle: barStyle(88) },
        { id: 4, label: 'TRADE ROI ($/CASE)',   actual: '$2.31',     target: '$2.80',     pct: 83, barStyle: barStyle(83) },
        { id: 5, label: 'CATEGORY $ GROWTH',   actual: '4.8%',      target: '6.0%',      pct: 80, barStyle: barStyle(80) },
        { id: 6, label: 'DISTRIBUTION POINTS', actual: '318',       target: '340',       pct: 94, barStyle: barStyle(94) }
    ];

    // ─── Modal State ────────────────────────────────────────────────────────
    showSampleModal    = false;
    showMilestoneModal = false;

    sampleForm    = { productName: '', sampleQuantity: '', notes: '' };
    milestoneForm = { milestone: '', status: '', notes: '' };

    milestoneOptions = [
        { label: 'Final Formulation',  value: 'Final Formulation'  },
        { label: 'Packaging Approval', value: 'Packaging Approval' },
        { label: 'First Shipment',     value: 'First Shipment'     },
        { label: 'Shelf Date (Kroger)',value: 'Shelf Date (Kroger)'}
    ];

    statusOptions = [
        { label: 'Pending',     value: 'Pending'     },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Complete',    value: 'Complete'    },
        { label: 'Confirmed',   value: 'Confirmed'   },
        { label: 'At Risk',     value: 'At Risk'     }
    ];

    // ─── R&D Sample Request Modal ──────────────────────────────────────────
    openSampleModal() {
        this.sampleForm = { productName: '', sampleQuantity: '', notes: '' };
        this.showSampleModal = true;
    }

    closeSampleModal() {
        this.showSampleModal = false;
    }

    handleSampleChange(event) {
        const field = event.target.dataset.field;
        this.sampleForm = { ...this.sampleForm, [field]: event.target.value };
    }

    submitSampleRequest() {
        const productName = this.sampleForm.productName || 'new product';
        this.closeSampleModal();
        this.dispatchEvent(new ShowToastEvent({
            title:   'Sample Request Submitted',
            message: `Request for "${productName}" has been routed to R&D.`,
            variant: 'success'
        }));
    }

    // ─── Milestone Update Modal ────────────────────────────────────────────
    openMilestoneModal() {
        this.milestoneForm = { milestone: '', status: '', notes: '' };
        this.showMilestoneModal = true;
    }

    closeMilestoneModal() {
        this.showMilestoneModal = false;
    }

    handleMilestoneChange(event) {
        const field = event.target.dataset.field;
        this.milestoneForm = { ...this.milestoneForm, [field]: event.target.value };
    }

    submitMilestoneUpdate() {
        const milestone = this.milestoneForm.milestone || 'Milestone';
        const status    = this.milestoneForm.status    || 'new status';
        this.closeMilestoneModal();
        this.dispatchEvent(new ShowToastEvent({
            title:   'Milestone Updated',
            message: `"${milestone}" has been updated to ${status}.`,
            variant: 'success'
        }));
    }
}
