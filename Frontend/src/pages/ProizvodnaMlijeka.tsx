import { TrendingUp, Droplet, Milk, Gauge } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

const weekly = [
  { label: '11.11', litri: 2860 },
  { label: '18.11', litri: 2940 },
  { label: '25.11', litri: 3015 },
  { label: '02.12', litri: 3090 },
  { label: '07.12', litri: 3185 },
];

const sessions = [
  { session: 'Jutro', avg: 14.2 },
  { session: 'Podne', avg: 10.8 },
  { session: 'Večer', avg: 11.4 },
];

const cowTable = [
  { id: 'BOS-001', ime: 'Slavica', prosjek: 32.5, kvalitet: '97', trend: '+6%' },
  { id: 'BOS-002', ime: 'Milica', prosjek: 29.8, kvalitet: '95', trend: '+3%' },
  { id: 'BOS-003', ime: 'Ruža', prosjek: 30.8, kvalitet: '96', trend: '+4%' },
  { id: 'C004', ime: 'Rosie', prosjek: 30.8, kvalitet: '97', trend: '+5%' },
  { id: 'C005', ime: 'Clover', prosjek: 26.1, kvalitet: '93', trend: '−2%' },
];

export function ProizvodnaMlijeka() {
  const kpi = [
    { icon: Milk, label: 'Ukupno (30d)', value: '93.6k L', badge: '+8.5% vs prethodni period', tone: 'text-green-600 bg-green-50 border-green-100' },
    { icon: Droplet, label: 'Prosjek po grlu', value: '31.8 L', badge: 'Target 30 L', tone: 'text-blue-600 bg-blue-50 border-blue-100' },
    { icon: Gauge, label: 'Kvalitet mlijeka', value: '96.8 /100', badge: 'Stabilno', tone: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
    { icon: TrendingUp, label: 'Trend sedmica', value: '+8.5%', badge: 'Posljednjih 5 sedmica', tone: 'text-purple-600 bg-purple-50 border-purple-100' },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Proizvodnja mlijeka</h1>
        <p className="text-gray-600 mt-1">Evidencija, trendovi i raspodjela po sesijama</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpi.map(({ icon: Icon, label, value, badge, tone }) => (
          <div key={label} className={`rounded-xl border ${tone} p-4 shadow-sm`}> 
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white/80 flex items-center justify-center border border-current/20">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{label}</p>
                <p className="text-2xl font-semibold text-gray-900">{value}</p>
                <p className="text-xs mt-1">{badge}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sedmični trend</h3>
              <p className="text-sm text-gray-600">Litara po sedmici (posljednjih 5)</p>
            </div>
            <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">+8.5%</span>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={weekly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="label" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8 }} />
              <Line type="monotone" dataKey="litri" stroke="#10b981" strokeWidth={3} dot={{ r: 5, fill: '#10b981' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sesije po danu</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={sessions}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="session" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8 }} />
              <Bar dataKey="avg" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-3 text-sm text-gray-600">Večernja muža je +5% u odnosu na prošli mjesec; jutarnja nosi 45% volumena.</p>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Top krave (posljednjih 30 dana)</h3>
            <p className="text-sm text-gray-600">Prosječni litri po grlu i ocjena kvaliteta</p>
          </div>
          <span className="text-sm text-gray-500">Sortirano po prosjeku</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-600">
              <tr>
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Ime</th>
                <th className="px-6 py-3 font-medium text-right">Prosjek (L)</th>
                <th className="px-6 py-3 font-medium text-right">Kvalitet</th>
                <th className="px-6 py-3 font-medium text-right">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cowTable.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">{row.id}</td>
                  <td className="px-6 py-3 text-gray-900">{row.ime}</td>
                  <td className="px-6 py-3 text-right text-gray-900">{row.prosjek.toFixed(1)}</td>
                  <td className="px-6 py-3 text-right text-green-600">{row.kvalitet}</td>
                  <td className="px-6 py-3 text-right text-gray-900">{row.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
