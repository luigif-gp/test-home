import { ChangeEvent, FC } from 'react';

interface CheckBoxInputProps {
  value: boolean;
  onChange: (arg: boolean) => void;
}

export const CheckBoxInput: FC<CheckBoxInputProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center mr-4">
      <input
        checked={value}
        id="teal-checkbox"
        type="checkbox"
        onChange={(e: ChangeEvent<{ checked: boolean }>) => onChange(e.target.checked)}
        className="w-4 h-4 text-teal-600 rounded  focus:ring-teal-500 dark:focus:ring-teal-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
      />
      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">2 Repository Mode</label>
    </div>
  );
};
