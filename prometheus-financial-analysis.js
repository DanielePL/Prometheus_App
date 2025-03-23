// Prometheus Finanzprognose für Seed Capital Investment
// Alle Zahlen in Euro

// 1. Investment Parameter
const seedInvestment = 60000;
const royaltyRates = {
  year1: 0.15, // 15% im ersten Jahr
  year2: 0.15, // 15% im zweiten Jahr
  year3And5: 0.03 // 3% in den Jahren 3-5
};

// 2. Umsatzprognose
// Basierend auf neuen Preismodellen:
// - App-Abonnements: 19,99 $ / Monat oder 199 $ / Jahr 
// - Coach-Software: 50-150 $ / Monat nach Gratisjahr
// - Coach-Royalty-Programm: 4 $ pro vermitteltem Abonnent
const revenueProjections = {
  year1: 90000, // Q3-Q4 2025: Initiale Nutzer mit 19,99 $ monatlich
  year2: 150000, // 2026: Wachstum + erste Coach-Abos nach Gratisjahr
  year3: 240000, // 2027: Beschleunigtes Wachstum durch Coach-Netzwerke
  year4: 300000, // 2028: Fortgesetzte Expansion
  year5: 360000  // 2029: Reifephase
};

// 3. Kostenstruktur (in % vom Umsatz)
const costStructure = {
  cogs: 0.15, // Cost of Goods Sold - hauptsächlich Server- und Cloudkosten
  marketing: 0.25, // Marketingausgaben inkl. Akquise
  development: 0.20, // Laufende Entwicklungskosten
  operations: 0.15, // Allgemeine Betriebskosten
  support: 0.10 // Kundenservice und Support
};

// 4. Wachstumsmetriken
const growthMetrics = {
  // Anzahl der aktiven Nutzer pro Jahr
  users: {
    year1: 25000,
    year2: 75000,
    year3: 200000,
    year4: 450000,
    year5: 750000
  },
  
  // Durchschnittlicher Umsatz pro Nutzer (ARPU)
  arpu: {
    year1: 3.6, // 90.000 € / 25.000 Nutzer
    year2: 2.0, // 150.000 € / 75.000 Nutzer
    year3: 1.2, // 240.000 € / 200.000 Nutzer
    year4: 0.67, // 300.000 € / 450.000 Nutzer
    year5: 0.48 // 360.000 € / 750.000 Nutzer
  },
  
  // Customer Acquisition Cost (CAC)
  cac: {
    year1: 4.5,
    year2: 3.75,
    year3: 3.0,
    year4: 2.5,
    year5: 2.0
  },
  
  // Kundenbindungsrate (%)
  retentionRate: {
    year1: 0.65,
    year2: 0.70,
    year3: 0.75,
    year4: 0.78,
    year5: 0.82
  }
};

// 5. ROI-Berechnung für den Investor
function calculateInvestorROI() {
  // Royalty-Zahlungen pro Jahr
  const royaltyPayments = {
    year1: revenueProjections.year1 * royaltyRates.year1,
    year2: revenueProjections.year2 * royaltyRates.year2,
    year3: revenueProjections.year3 * royaltyRates.year3And5,
    year4: revenueProjections.year4 * royaltyRates.year3And5,
    year5: revenueProjections.year5 * royaltyRates.year3And5
  };
  
  // Gesamtzahlungen an den Investor
  const totalRoyalties = royaltyPayments.year1 + royaltyPayments.year2 + 
                          royaltyPayments.year3 + royaltyPayments.year4 + 
                          royaltyPayments.year5;
  
  // Rendite einschließlich ursprünglichem Kapital
  const totalReturn = totalRoyalties + seedInvestment;
  
  // ROI-Berechnung
  const roi = (totalReturn / seedInvestment - 1) * 100;
  
  return {
    royaltyPayments,
    totalRoyalties,
    totalReturn,
    roi
  };
}

// 6. EBITDA-Prognose
function calculateEBITDA() {
  const ebitda = {};
  const years = [1, 2, 3, 4, 5];
  
  years.forEach(year => {
    const revenue = revenueProjections[`year${year}`];
    const totalCostsRate = costStructure.cogs + costStructure.marketing + 
                           costStructure.development + costStructure.operations + 
                           costStructure.support;
    
    // Im ersten Jahr höherer Marketingaufwand und Anlaufkosten
    const adjustedCostsRate = year === 1 ? totalCostsRate + 0.25 : totalCostsRate;
    
    ebitda[`year${year}`] = revenue * (1 - adjustedCostsRate);
  });
  
  return ebitda;
}

// 7. Cashflow-Analyse
function calculateCashflow() {
  const ebitda = calculateEBITDA();
  const royaltyResults = calculateInvestorROI();
  const cashflow = {};
  
  for (let year = 1; year <= 5; year++) {
    const ebitdaForYear = ebitda[`year${year}`];
    const royaltyForYear = royaltyResults.royaltyPayments[`year${year}`];
    
    // Vereinfachtes Cashflow-Modell (EBITDA minus Royalty-Zahlungen)
    cashflow[`year${year}`] = ebitdaForYear - royaltyForYear;
  }
  
  return cashflow;
}

// 8. Break-Even-Analyse
function calculateBreakEven() {
  const cashflow = calculateCashflow();
  let cumulativeCashflow = -seedInvestment; // Startwert ist das negative Investment
  let breakEvenYear = null;
  
  for (let year = 1; year <= 5; year++) {
    cumulativeCashflow += cashflow[`year${year}`];
    
    if (cumulativeCashflow >= 0 && breakEvenYear === null) {
      breakEvenYear = year;
      break;
    }
  }
  
  return {
    breakEvenYear,
    cumulativeCashflow
  };
}

// 9. Hauptfunktion zur Ausgabe aller Ergebnisse
function generateFinancialReport() {
  const roi = calculateInvestorROI();
  const ebitda = calculateEBITDA();
  const cashflow = calculateCashflow();
  const breakEven = calculateBreakEven();
  
  console.log("=== PROMETHEUS FINANZPROGNOSE ===");
  console.log("\n1. Investitionsübersicht:");
  console.log(`Seed-Investment: ${seedInvestment} €`);
  console.log(`Royalty-Raten: ${royaltyRates.year1 * 100}% (Jahr 1-2), ${royaltyRates.year3And5 * 100}% (Jahr 3-5)`);
  
  console.log("\n2. Umsatzprognose:");
  for (let year = 1; year <= 5; year++) {
    console.log(`Jahr ${year}: ${revenueProjections[`year${year}`].toLocaleString()} €`);
  }
  
  console.log("\n3. ROI für Investor:");
  console.log("Royalty-Zahlungen pro Jahr:");
  for (let year = 1; year <= 5; year++) {
    console.log(`Jahr ${year}: ${roi.royaltyPayments[`year${year}`].toLocaleString()} €`);
  }
  console.log(`Gesamt-Royalty: ${roi.totalRoyalties.toLocaleString()} €`);
  console.log(`Gesamtrendite (inkl. Kapital): ${roi.totalReturn.toLocaleString()} €`);
  console.log(`ROI: ${roi.roi.toFixed(2)}% über 5 Jahre`);
  
  console.log("\n4. EBITDA-Prognose:");
  for (let year = 1; year <= 5; year++) {
    console.log(`Jahr ${year}: ${ebitda[`year${year}`].toLocaleString()} €`);
  }
  
  console.log("\n5. Cashflow nach Royalty-Zahlungen:");
  for (let year = 1; year <= 5; year++) {
    console.log(`Jahr ${year}: ${cashflow[`year${year}`].toLocaleString()} €`);
  }
  
  console.log("\n6. Break-Even-Analyse:");
  if (breakEven.breakEvenYear) {
    console.log(`Break-Even wird im Jahr ${breakEven.breakEvenYear} erreicht.`);
  } else {
    console.log("Break-Even wird innerhalb der 5-Jahres-Prognose nicht erreicht.");
  }
  console.log(`Kumulativer Cashflow nach 5 Jahren: ${breakEven.cumulativeCashflow.toLocaleString()} €`);
  
  console.log("\n7. Wachstumsmetriken:");
  console.log("Aktive Nutzer:");
  for (let year = 1; year <= 5; year++) {
    console.log(`Jahr ${year}: ${growthMetrics.users[`year${year}`].toLocaleString()}`);
  }
  
  console.log("\nDurchschnittlicher Umsatz pro Nutzer (ARPU):");
  for (let year = 1; year <= 5; year++) {
    console.log(`Jahr ${year}: ${growthMetrics.arpu[`year${year}`].toFixed(2)} €`);
  }
  
  console.log("\nKundenakquisitionskosten (CAC):");
  for (let year = 1; year <= 5; year++) {
    console.log(`Jahr ${year}: ${growthMetrics.cac[`year${year}`].toFixed(2)} €`);
  }
  
  console.log("\nBindungsrate:");
  for (let year = 1; year <= 5; year++) {
    console.log(`Jahr ${year}: ${(growthMetrics.retentionRate[`year${year}`] * 100).toFixed(0)}%`);
  }
}

// Finanzreport generieren
generateFinancialReport();
