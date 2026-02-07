import { ChevronDown, FileText } from "lucide-react";

type inputFieldWithGuideProps = {
  icon?: React.ReactNode;
  title: string;
  required?: boolean;
  maxLength?: number;
  min?: number;
  max?: number;
  guideText?: string;
  type?: string;
  value?: string;
  option?: options[];
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  error?: string;
};

type options = {
  id: number;
  value: string;
};

export default function InputFieldWithGuide({
  icon,
  title,
  required,
  maxLength,
  min,
  max,
  guideText,
  type,
  value,
  option,
  onChange,
  error,
}: inputFieldWithGuideProps) {
  return (
    <div className="flex flex-col gap-2 h-full">
      <label className="text-md font-bold text-black flex items-center gap-2">
        {icon ? icon : <FileText className="w-4 h-4 text-blue-900" />}
        {title} {required && <span className="text-red-600">*</span>}
      </label>
      <span className="text-sm text-gray-500">{guideText}</span>
      <div className="mt-auto">
        {fieldType({
          type,
          title,
          value,
          option,
          maxLength,
          min,
          max,
          onChange,
        })}
      </div>
      {type === "textarea" || type === "text" ? (
        <p className="text-sm text-gray-500">
          {value ? value.length : 0} / {maxLength ?? 200} characters
        </p>
      ) : (
        <p className="h-5"></p>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

function fieldType({
  type,
  title,
  value,
  option,
  maxLength,
  min,
  max,
  onChange,
}: inputFieldWithGuideProps) {
  switch (type) {
    case "text":
    case "number":
    case "email":
    case "date":
    case "time":
      return (
        <input
          type={type}
          placeholder={"Enter " + title}
          maxLength={maxLength}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jci-primary"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
        />
      );
    case "textarea":
      return (
        <textarea
          placeholder={"Enter " + title}
          maxLength={maxLength}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jci-primary"
          value={value}
          onChange={onChange}
          rows={4}
        />
      );
    case "checkbox":
      return (
        <input
          type="checkbox"
          className="w-5 h-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jci-primary"
          checked={value === "true"}
          onChange={(e) =>
            onChange &&
            onChange({
              ...e,
              target: {
                ...e.target,
                value: e.target.checked ? "true" : "false",
              },
            } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
          }
        />
      );
    case "radio":
      return (
        <input
          type="radio"
          className="w-5 h-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jci-primary"
          checked={value === "true"}
          onChange={(e) =>
            onChange &&
            onChange({
              ...e,
              target: {
                ...e.target,
                value: e.target.checked ? "true" : "false",
              },
            } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
          }
        />
      );
    case "dropdown":
      return (
        <div className="relative">
          <select
            className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jci-primary appearance-none"
            value={value}
            onChange={onChange}
          >
            <option value="" disabled>
              Select {title}
            </option>
            {option &&
              option.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.value}
                </option>
              ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      );
    default:
      return "Unknown";
  }
}
