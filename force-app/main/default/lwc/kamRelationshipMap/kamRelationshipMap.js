import { LightningElement, track } from 'lwc';

const REL_CLASS = {
    Strong: 'rm-rel-badge rm-rel--strong',
    Active:  'rm-rel-badge rm-rel--active',
    New:     'rm-rel-badge rm-rel--new'
};

const AVATAR_CLASS = {
    exec:    'rm-avatar rm-avatar--exec rm-avatar--lg',
    mgr:     'rm-avatar rm-avatar--mgr rm-avatar--lg',
    analyst: 'rm-avatar rm-avatar--analyst rm-avatar--lg'
};

const buildNode = (data) => ({
    ...data,
    relClass:   REL_CLASS[data.relationship]  || REL_CLASS.Active,
    cardClass:  'rm-node',
    avatarClass: AVATAR_CLASS[data.level]
});

const PEOPLE = {
    vp: buildNode({
        id:           'vp',
        level:        'exec',
        initials:     'KW',
        name:         'Karen Walsh',
        title:        'VP, Procurement & Category Management',
        department:   'Kroger HQ — Procurement',
        email:        'kwalsh@kroger.com',
        location:     'Cincinnati, OH',
        relationship: 'Strong',
        lastContact:  'May 30, 2026',
        note:         'Key JBP sign-off authority. Responds well to category growth narratives backed by Nielsen data. Annual review in August.'
    }),
    confecCM: buildNode({
        id:           'confecCM',
        level:        'mgr',
        initials:     'MA',
        name:         'Mike Albright',
        title:        'Confectionery Category Manager',
        department:   'Kroger — Confectionery',
        email:        'malbright@kroger.com',
        location:     'Cincinnati, OH',
        relationship: 'Strong',
        lastContact:  'Jun 1, 2026',
        note:         "Remind Mike about his son's baseball championship before pitching the front-end expansion. Champions seasonal resets."
    }),
    snackCM: buildNode({
        id:           'snackCM',
        level:        'mgr',
        initials:     'RT',
        name:         'Rachel Torres',
        title:        'Snacking Category Manager',
        department:   'Kroger — Snacking',
        email:        'rtorres@kroger.com',
        location:     'Cincinnati, OH',
        relationship: 'Active',
        lastContact:  'May 14, 2026',
        note:         'Focused on % ACV growth for better-for-you snacking. Interested in Kind Bar velocity data. Schedule a call before Q3 planning.'
    }),
    confecBA: buildNode({
        id:           'confecBA',
        level:        'analyst',
        initials:     'JP',
        name:         'James Park',
        title:        'Confectionery Buyer Analyst',
        department:   'Kroger — Confectionery',
        email:        'jpark@kroger.com',
        location:     'Cincinnati, OH',
        relationship: 'Active',
        lastContact:  'May 22, 2026',
        note:         "Day-to-day contact for PO management and distribution data. Cc on all backorder comms. Mike's right hand for analytics."
    }),
    snackBA: buildNode({
        id:           'snackBA',
        level:        'analyst',
        initials:     'PN',
        name:         'Priya Nair',
        title:        'Snacking Buyer Analyst',
        department:   'Kroger — Snacking',
        email:        'pnair@kroger.com',
        location:     'Cincinnati, OH',
        relationship: 'New',
        lastContact:  'Apr 8, 2026',
        note:         "Recently promoted. Building the relationship — send an intro deck featuring M&M's Peanut distribution opportunity."
    })
};

export default class KamRelationshipMap extends LightningElement {

    nodes = { ...PEOPLE };

    @track selectedNode = null;

    handleSelect(event) {
        const id = event.currentTarget.dataset.id;
        // Toggle off if already selected
        if (this.selectedNode && this.selectedNode.id === id) {
            this.selectedNode = null;
            this._clearHighlight();
            return;
        }
        this.selectedNode = PEOPLE[id];
        this._setHighlight(id);
    }

    handleClose() {
        this.selectedNode = null;
        this._clearHighlight();
    }

    _setHighlight(activeId) {
        this.nodes = Object.fromEntries(
            Object.entries(PEOPLE).map(([key, node]) => [
                key,
                { ...node, cardClass: key === activeId ? 'rm-node rm-node--active' : 'rm-node rm-node--dim' }
            ])
        );
    }

    _clearHighlight() {
        this.nodes = Object.fromEntries(
            Object.entries(PEOPLE).map(([key, node]) => [key, { ...node, cardClass: 'rm-node' }])
        );
    }
}
