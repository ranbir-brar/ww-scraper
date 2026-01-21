import Select from "react-select";

const options = [
  { value: "deadline", label: "Deadline (Soonest)" },
  { value: "salary", label: "Salary (Highest)" },
  { value: "competition", label: "Competition (Lowest)" },
  { value: "alphabetical", label: "Alphabetical (A-Z)" },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "var(--bg-surface)",
    borderColor: state.isFocused ? "var(--color-primary)" : "var(--border-dim)",
    borderRadius: "12px",
    padding: "4px 8px",
    minWidth: "200px",
    boxShadow: state.isFocused ? "0 0 0 1px var(--color-primary)" : "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "var(--color-primary)",
    },
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "var(--bg-surface)",
    border: "1px solid var(--border-dim)",
    borderRadius: "12px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
    overflow: "hidden",
    zIndex: 100,
  }),
  menuList: (base) => ({
    ...base,
    padding: "8px",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "var(--color-primary)"
      : state.isFocused
      ? "var(--bg-surface-hover)"
      : "transparent",
    color: state.isSelected ? "var(--text-inverse)" : "var(--text-main)",
    borderRadius: "8px",
    padding: "10px 14px",
    cursor: "pointer",
    transition: "all 0.15s ease",
    "&:active": {
      backgroundColor: "var(--color-primary)",
      color: "var(--text-inverse)",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--text-main)",
    fontWeight: 500,
  }),
  placeholder: (base) => ({
    ...base,
    color: "var(--text-muted)",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? "var(--color-primary)" : "var(--text-muted)",
    transition: "all 0.3s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0)",
    "&:hover": {
      color: "var(--color-primary)",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

export default function SortDropdown({ value, onChange }) {
  const selectedOption = options.find((opt) => opt.value === value) || null;

  return (
    <Select
      value={selectedOption}
      onChange={(selected) => onChange(selected?.value || "deadline")}
      options={options}
      styles={customStyles}
      isSearchable={false}
      menuPlacement="auto"
    />
  );
}
