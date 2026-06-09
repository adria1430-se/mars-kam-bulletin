# Mars KAM Command Center — Salesforce Demo

A Salesforce DX project containing Lightning Web Components (LWCs) that power a **Key Account Manager (KAM) Command Center** demo for Mars Snacking. All components are built for the Kroger account team and are designed to live on a single Lightning App Page.

---

## Components

| LWC | Description |
|-----|-------------|
| `kamDashboardHeader` | Global page header showing "KAM Command Center", the KAM's name, and the current date dynamically |
| `jointBusinessPlanKroger` | Multi-tab JBP tracker with Retailer Commitments (progress bars), Internal Workflows (R&D sample requests + launch milestones with modals), and $ Tracking |
| `categoryNielsenPerformance` | Category KPI tiles and a Nielsen Period Comparison table for the confectionery category |
| `kamKrogerHub` | Compact split card: left side shows a Kroger JBP countdown timeline; right side shows Key Contact Quick View with Log a Call, Send Email, and Schedule Meeting actions |
| `kamInstoreExecution` | In-Store Execution scorecard with KPI tiles (visits, compliance, tasks) and a Perfect Store Score by Banner progress chart — date updates dynamically to the current month |
| `intelligentAlerts` | Smart Action feed with clickable cards for: Submit Backorder (with modal form), Submit IFR (trade funds workflow), View Distribution Report (division table), and View Commit Tracker (seasonal items) |
| `intelligentRecommendation` | AI-style recommendation cards with real product images (configurable from Lightning App Builder — image URL and recommendation text are editable per card without code changes) |
| `kamRelationshipMap` | Interactive org chart of Kroger stakeholders (VP → Category Managers → Buyer Analysts) with click-to-expand contact details and KAM notes |

---

## Prerequisites

- [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli) installed (`sf` v2+)
- A Salesforce Developer or Demo org
- *(For `intelligentRecommendation` only)* Two static resources uploaded to the target org — see note below

---

## Deploy

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/mars-kam-bulletin.git
cd mars-kam-bulletin

# 2. Authenticate to your target org
sf org login web --alias my-demo-org

# 3. Deploy all metadata
sf project deploy start --source-dir force-app --target-org my-demo-org

# 4. Open the org
sf org open --target-org my-demo-org
```

After deploying, open **Lightning App Builder**, find the **KAM Sales Bulletin** App Page, and drag the components onto the canvas in your preferred layout.

---

## Static Resources (intelligentRecommendation only)

The `intelligentRecommendation` component references two product images stored as Salesforce Static Resources. Upload these to your target org before deploying, or the component will render with a grey placeholder:

| Static Resource Name | Product |
|----------------------|---------|
| `snickersfunsize` | Snickers Fun Size Multipack |
| `kindbar` | Kind Dark Chocolate Almond Coconut |

**Upload steps:**
1. In your org, go to **Setup → Static Resources → New**
2. Name the resource exactly as shown above (case-sensitive)
3. Upload the image file and set Cache Control to **Public**

Once uploaded, the component also supports overriding images and text directly from **Lightning App Builder** — no code changes needed.

---

## Supporting Metadata

| Metadata | Purpose |
|----------|---------|
| `KAM_Sales_Bulletin__c` custom object | The record type the App Page is anchored to |
| `KAM_Sales_Bulletin_App_Page` FlexiPage | The Lightning App Page container — activate it in App Builder after deploy |
| `KAM_Sales_Bulletin__c` custom tab | Adds the object to app navigation |

---

## Contact Records

Five Kroger stakeholder Contact records are included as demo data (linked to "The Kroger Company" account). These match the people shown in the `kamRelationshipMap` component. To insert them after deploying:

```bash
# Run each line individually or script as needed
sf data record create --sobject Contact --values "FirstName='Karen' LastName='Walsh' Title='VP, Procurement & Category Management' Email='kwalsh@kroger.com'" --target-org my-demo-org
sf data record create --sobject Contact --values "FirstName='Mike' LastName='Albright' Title='Confectionery Category Manager' Email='malbright@kroger.com'" --target-org my-demo-org
sf data record create --sobject Contact --values "FirstName='Rachel' LastName='Torres' Title='Snacking Category Manager' Email='rtorres@kroger.com'" --target-org my-demo-org
sf data record create --sobject Contact --values "FirstName='James' LastName='Park' Title='Confectionery Buyer Analyst' Email='jpark@kroger.com'" --target-org my-demo-org
sf data record create --sobject Contact --values "FirstName='Priya' LastName='Nair' Title='Snacking Buyer Analyst' Email='pnair@kroger.com'" --target-org my-demo-org
```

---

## Built With

- Salesforce Lightning Web Components (LWC)
- Salesforce Lightning Design System (SLDS)
- Salesforce CLI (sf v2)
- API version 61.0
