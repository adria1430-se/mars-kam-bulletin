import { LightningElement } from 'lwc';

export default class IntelligentAlerts extends LightningElement {

    // ─── Modal visibility flags ───────────────────────────────────────────
    showBackorderModal = false;
    showIfrModal       = false;
    showDistModal      = false;
    showCommitModal    = false;

    // ─── Backorder modal data ─────────────────────────────────────────────
    backorderReasons = [
        { label: 'Supply Constraint — DC Capacity',  value: 'Supply Constraint — DC Capacity'  },
        { label: 'Demand Surge — Unexpected',        value: 'Demand Surge — Unexpected'        },
        { label: 'Transportation Delay',             value: 'Transportation Delay'             },
        { label: 'Raw Material Shortage',            value: 'Raw Material Shortage'            }
    ];

    // ─── IFR modal data ───────────────────────────────────────────────────
    approverOptions = [
        { label: 'Regional VP — Midwest (J. Torres)',    value: 'j.torres'    },
        { label: 'Regional VP — Southeast (P. Okafor)',  value: 'p.okafor'    },
        { label: 'National Accounts Director (R. Chan)', value: 'r.chan'       }
    ];

    // ─── Distribution report data ─────────────────────────────────────────
    divisionRows = [
        { id: 1, division: 'Kroger Central',     acv: '94.2%', gap: '\u2014',    gapClass: 'col-right gap-neutral', status: 'On Target', statusClass: 'col-right status-ok'      },
        { id: 2, division: 'Kroger Delta',       acv: '71.4%', gap: '-22.8%', gapClass: 'col-right gap-alert',   status: 'Gap',       statusClass: 'col-right status-gap'     },
        { id: 3, division: 'Kroger Mid-Atlantic',acv: '88.6%', gap: '-5.6%',  gapClass: 'col-right gap-alert',   status: 'Watch',     statusClass: 'col-right status-watch'   },
        { id: 4, division: 'Kroger Midwest',     acv: '96.1%', gap: '\u2014',    gapClass: 'col-right gap-neutral', status: 'On Target', statusClass: 'col-right status-ok'      },
        { id: 5, division: 'Kroger Mountain',    acv: '65.3%', gap: '-28.9%', gapClass: 'col-right gap-alert',   status: 'Gap',       statusClass: 'col-right status-gap'     },
        { id: 6, division: 'Kroger Southwest',   acv: '91.0%', gap: '\u2014',    gapClass: 'col-right gap-neutral', status: 'On Target', statusClass: 'col-right status-ok'      }
    ];

    // ─── Commit tracker data ──────────────────────────────────────────────
    commitItems = [
        { id: 1, name: "M&M's Peanut Halloween Peg Bag",    season: 'Halloween', volume: '18,000 cs', status: 'Pending', statusClass: 'col-right status-pending' },
        { id: 2, name: 'Snickers Fun Size Halloween Mix',   season: 'Halloween', volume: '22,500 cs', status: 'Pending', statusClass: 'col-right status-pending' },
        { id: 3, name: 'Twix Halloween Mini Assortment',    season: 'Halloween', volume: '14,000 cs', status: 'Pending', statusClass: 'col-right status-pending' },
        { id: 4, name: "M&M's Holiday Pouch Assortment",   season: 'Holiday',   volume: '30,000 cs', status: 'Pending', statusClass: 'col-right status-pending' }
    ];

    // ─── Modal handlers ───────────────────────────────────────────────────
    openBackorderModal()  { this.showBackorderModal = true;  }
    closeBackorderModal() { this.showBackorderModal = false; }

    openIfrModal()        { this.showIfrModal = true;        }
    closeIfrModal()       { this.showIfrModal = false;       }

    openDistModal()       { this.showDistModal = true;       }
    closeDistModal()      { this.showDistModal = false;      }

    openCommitModal()     { this.showCommitModal = true;     }
    closeCommitModal()    { this.showCommitModal = false;    }
}
