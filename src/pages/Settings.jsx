import SelectDropdown from '../components/ui/SelectDropdown';
import useAppContext from '../hooks/useAppContext';
import { TriangleAlert } from 'lucide-react';

const Settings = () => {
  const { appSettings, setAppSettings } = useAppContext();
  console.log(appSettings);

  function setCurrencyValue(value) {
    setAppSettings((prev) => ({ ...prev, currency: value }));
  }
  function setThemeValue(value) {
    setAppSettings((prev) => ({ ...prev, theme: value }));
  }

  return (
    <div className="flex min-h-screen w-full flex-col flex-nowrap gap-6 bg-[#faf8ff] p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-row flex-wrap items-center justify-between gap-4">
        {/* Text */}
        <div className="flex w-auto flex-col gap-0.5 md:gap-1">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Settings
          </h2>
          <p className="text-xs text-slate-600 md:text-sm">
            Manage your app preferences and data security
          </p>
        </div>
      </div>

      {/* Preferences */}
      <div className="w-full rounded-xl bg-white p-4">
        {/* title */}
        <div className="w-full border-b-2 border-zinc-300 py-2">
          <h4>Preferences</h4>
        </div>

        {/* main content */}
        <div className="flex w-full flex-col gap-4 py-4">
          <SelectDropdown
            label="Display Currency"
            categoryValue={appSettings.currency}
            categories={appSettings.availableCurrencies}
            setCategoryValue={setCurrencyValue}
          >
            Select a currency
          </SelectDropdown>

          <SelectDropdown
            label="Theme"
            categoryValue={appSettings.theme}
            categories={['light', 'dark']}
            setCategoryValue={setThemeValue}
            className="w-auto"
          >
            Select a currency
          </SelectDropdown>
        </div>
      </div>

      <div className="flex w-full flex-col flex-wrap gap-2 rounded-xl border border-[#ba1a1a] bg-[#ba1a1a]/20 p-4">
        {/* title */}
        <div className="flex gap-3">
          <TriangleAlert color="#ba1a1a" strokeWidth={1.5} />
          <h5 className="text-lg text-[#ba1a1a]">Danger Zone</h5>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div>
            <h6 className="text-lg">Delete Data</h6>
            <p className="text-sm text-slate-600">
              Permanently remove all your financial history, budgets, and
              personal information. This action cannot be undone.
            </p>
          </div>
          <button className="rounded-lg bg-[#ba1a1a] px-4 py-2 text-sm font-semibold whitespace-nowrap text-white">
            Wipe All Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
