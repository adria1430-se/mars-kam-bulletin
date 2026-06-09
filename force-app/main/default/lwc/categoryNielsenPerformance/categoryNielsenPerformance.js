import { LightningElement } from 'lwc';

export default class CategoryNielsenPerformance extends LightningElement {

    kpiTiles = [
        { id: 1, value: '$4.2M',  label: '4-Wk $ Sales',     delta: '+6.1% YoY' },
        { id: 2, value: '8.3%',   label: '4-Wk Unit Share',  delta: '+0.4 pts'   },
        { id: 3, value: '$14.7',  label: '12-Wk Velocity',   delta: '+3.2% YoY' },
        { id: 4, value: '87.4%',  label: '52-Wk % ACV',      delta: '+1.1 pts'   }
    ];

    tableRows = [
        { id: 1, metric: '$ Sales (000s)',      wk4: '$4,213',  wk12: '$12,840',  wk52: '$51,620' },
        { id: 2, metric: '$ Sales % Chg YoY',  wk4: '+6.1%',   wk12: '+4.8%',    wk52: '+3.2%'   },
        { id: 3, metric: 'Unit Share %',        wk4: '8.3%',    wk12: '8.1%',     wk52: '7.9%'    },
        { id: 4, metric: 'Unit Share Chg',      wk4: '+0.4',    wk12: '+0.3',     wk52: '+0.2'    },
        { id: 5, metric: '$/TDP Velocity',      wk4: '$14.7',   wk12: '$14.2',    wk52: '$13.8'   },
        { id: 6, metric: '% ACV Dist.',         wk4: '87.4%',   wk12: '86.9%',    wk52: '85.8%'   }
    ];
}
