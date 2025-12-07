import { UserPlus, ShieldCheck, Mail, CheckCircle2, XCircle, Search } from 'lucide-react';

const users = [
  { ime: 'Amar Kovač', email: 'amar@farm.ba', uloga: 'administrator', status: 'aktivan', kreiran: '12.03.2024' },
  { ime: 'Sara Milić', email: 'sara@farm.ba', uloga: 'veterinar', status: 'aktivan', kreiran: '08.05.2024' },
  { ime: 'Iva Petrović', email: 'iva@farm.ba', uloga: 'menadžer', status: 'aktivan', kreiran: '20.06.2024' },
  { ime: 'Faruk Hadžić', email: 'faruk@farm.ba', uloga: 'radnik', status: 'pauziran', kreiran: '11.09.2024' },
];

const permissions: Record<string, string[]> = {
  administrator: ['Svi podaci', 'Upravljanje korisnicima', 'Postavke sistema', 'Brisanje zapisa'],
  menadžer: ['Pregled podataka', 'Upravljanje zadacima', 'Generisanje izvještaja'],
  veterinar: ['Zdravstveni zapisi', 'Dodavanje tretmana', 'Pregled upozorenja'],
  radnik: ['Pregled zadataka', 'Ažuriranje statusa', 'Osnovni unos'],
};

export function KorisniciUloge() {
  return (
    <div className="p-6 md:p-8 space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Korisnici i uloge</h1>
          <p className="text-gray-600 mt-1">Dodjela prava, statusi i audit trag</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 hover:bg-gray-50">
            <ShieldCheck className="w-4 h-4" /> Role matrix
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 px-4 py-2 text-white shadow-md hover:from-green-700 hover:to-blue-700">
            <UserPlus className="w-4 h-4" /> Novi korisnik
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-green-600" /> 3 aktivna
            <XCircle className="w-4 h-4 text-amber-500" /> 1 pauziran
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Pretraži korisnike" />
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-600">
              <tr>
                <th className="px-4 py-3 font-medium">Ime</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Uloga</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Kreiran</th>
                <th className="px-4 py-3 font-medium text-right">Akcije</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((u) => (
                <tr key={u.email} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">{u.ime}</td>
                  <td className="px-4 py-3 text-gray-700 inline-flex items-center gap-2"><Mail className="w-4 h-4 text-gray-400" /> {u.email}</td>
                  <td className="px-4 py-3 text-gray-900 capitalize">{u.uloga}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${u.status === 'aktivan' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{u.kreiran}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex gap-2">
                      <button className="rounded-lg border border-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-50">Uredi</button>
                      <button className="rounded-lg border border-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-50">Privilegije</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Uloge i dozvole</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(permissions).map(([role, perms]) => (
            <div key={role} className="rounded-lg border border-gray-200 p-4">
              <p className="font-semibold text-gray-900 capitalize">{role}</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                {perms.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
