import { Bell, ShieldCheck, Palette, Globe2 } from 'lucide-react';

export function Postavke() {
  return (
    <div className="p-6 md:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Postavke</h1>
        <p className="text-gray-600 mt-1">Sistemske preferencije, obavijesti i sigurnost</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Obavijesti</h3>
              <p className="text-sm text-gray-600">Kontroliši način i kanale obavještavanja</p>
            </div>
          </div>
          <label className="flex items-center justify-between rounded-lg border border-gray-200 p-3 text-sm text-gray-700">
            Email notifikacije
            <input type="checkbox" defaultChecked className="h-4 w-4" />
          </label>
          <label className="flex items-center justify-between rounded-lg border border-gray-200 p-3 text-sm text-gray-700">
            SMS za kritična upozorenja
            <input type="checkbox" defaultChecked className="h-4 w-4" />
          </label>
          <label className="flex items-center justify-between rounded-lg border border-gray-200 p-3 text-sm text-gray-700">
            Push (mobilni)
            <input type="checkbox" className="h-4 w-4" />
          </label>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <Palette className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Tema i izgled</h3>
              <p className="text-sm text-gray-600">Biraj između svijetle i tamne teme</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 hover:bg-gray-50">Svijetla</button>
            <button className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 hover:bg-gray-50">Tamna</button>
            <button className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 hover:bg-gray-50">Auto</button>
          </div>
          <div className="text-sm text-gray-600">Akcentne boje: zeleno/plavo (default)</div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-purple-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sigurnost</h3>
              <p className="text-sm text-gray-600">2FA, sesije i revizija</p>
            </div>
          </div>
          <label className="flex items-center justify-between rounded-lg border border-gray-200 p-3 text-sm text-gray-700">
            Obavezna 2FA za administratore
            <input type="checkbox" defaultChecked className="h-4 w-4" />
          </label>
          <label className="flex items-center justify-between rounded-lg border border-gray-200 p-3 text-sm text-gray-700">
            Automatsko odjavljivanje (30 min)
            <input type="checkbox" defaultChecked className="h-4 w-4" />
          </label>
          <label className="flex items-center justify-between rounded-lg border border-gray-200 p-3 text-sm text-gray-700">
            Lock export podataka
            <input type="checkbox" className="h-4 w-4" />
          </label>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <Globe2 className="w-5 h-5 text-amber-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Lokalizacija</h3>
              <p className="text-sm text-gray-600">Jezik, valuta i format datuma</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center justify-between">
              <span>Jezik</span>
              <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option>Bosanski (BA)</option>
                <option>Engleski (EN)</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span>Valuta</span>
              <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option>BAM</option>
                <option>EUR</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span>Format datuma</span>
              <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option>DD.MM.YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
