import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const PrometheusCAC = () => {
  const data = [
    { platform: 'Facebook Ads', cac: 21.5, prometheus: 4 },
    { platform: 'Instagram Ads', cac: 24, prometheus: 4 },
    { platform: 'Google Ads', cac: 27.5, prometheus: 4 },
    { platform: 'TikTok Ads', cac: 15, prometheus: 4 },
    { platform: 'LinkedIn Ads', cac: 32.5, prometheus: 4 },
    { platform: 'Branchendurchschnitt', cac: 22, prometheus: 4 },
  ];

  const savingsData = [
    { month: 10, traditional: 220, prometheus: 40, savings: 180 },
    { month: 25, traditional: 550, prometheus: 100, savings: 450 },
    { month: 50, traditional: 1100, prometheus: 200, savings: 900 },
    { month: 100, traditional: 2200, prometheus: 400, savings: 1800 },
    { month: 200, traditional: 4400, prometheus: 800, savings: 3600 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Prometheus Kundenakquisitionskosten-Analyse</h1>
      
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Vergleich: CAC über verschiedene Kanäle vs. Prometheus Royalty-Modell</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="platform" angle={-45} textAnchor="end" height={80} />
              <YAxis>
                <Label value="Kosten pro Kunde ($)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
              </YAxis>
              <Tooltip formatter={(value) => `$${value}`} />
              <Legend />
              <Bar dataKey="cac" name="Traditioneller CAC" fill="#fb8c00" />
              <Bar dataKey="prometheus" name="Prometheus Royalty-Kosten" fill="#38b2ac" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-600 mt-2 italic">Quelle: Durchschnittliche Kundenakquisitionskosten in der Fitness-Branche 2024</p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Kumulative CAC-Einsparung bei steigender Kundenzahl</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={savingsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month">
                <Label value="Anzahl der Kunden" position="bottom" offset={20} />
              </XAxis>
              <YAxis>
                <Label value="Kosten ($)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
              </YAxis>
              <Tooltip formatter={(value) => `$${value}`} />
              <Legend />
              <Bar dataKey="traditional" name="Traditionelle Akquisekosten" fill="#e53e3e" />
              <Bar dataKey="prometheus" name="Prometheus Royalty-Kosten" fill="#38b2ac" />
              <Bar dataKey="savings" name="Einsparungen" fill="#805ad5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-bold text-blue-800 mb-2">CAC-Einsparung</h3>
          <p className="text-3xl font-bold text-blue-600">82%</p>
          <p className="text-sm text-blue-800 mt-1">Durchschnittliche Einsparung pro Kunde</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-bold text-green-800 mb-2">Passives Einkommen</h3>
          <p className="text-3xl font-bold text-green-600">4 $</p>
          <p className="text-sm text-green-800 mt-1">Pro vermitteltem Kunde für Coaches & Influencer</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="font-bold text-purple-800 mb-2">Jährliche Einsparung</h3>
          <p className="text-3xl font-bold text-purple-600">$3.600</p>
          <p className="text-sm text-purple-800 mt-1">Pro 200 gewonnene Kunden</p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mt-8 border border-gray-200">
        <h3 className="font-bold text-gray-800 mb-2">Wirtschaftlichkeit für Prometheus</h3>
        <p className="text-gray-700">
          Durch das Royalty-Modell mit 4$ pro Kunde reduziert Prometheus seine Kundenakquisitionskosten um 82% verglichen mit traditionellen Marketingkanälen. Dieses Modell gilt nicht nur für Coaches, sondern auch für Influencer, die wir gleichzeitig für Promotions gewinnen. Diese mehrgleisige Strategie ermöglicht schnelleres Wachstum und bessere Unit Economics bereits in der frühen Phase. Das Modell schafft eine Win-Win-Situation, bei der sowohl Coaches als auch Influencer von passivem Einkommen profitieren, während Prometheus die Kundenakquise effizienter gestaltet.
        </p>
      </div>
    </div>
  );
};

export default PrometheusCAC;