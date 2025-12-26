const ICONS = {
  narrow: (
    <svg
      className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 12H5m14 0-4 4m4-4-4-4"
      />
    </svg>
  ),
  bed: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-bed-double-icon lucide-bed-double"
    >
      <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
      <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path d="M12 4v6" />
      <path d="M2 18h20" />
    </svg>
  ),
  previous: (
    <svg
      width="8"
      height="10"
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.81055 9.82812L7.01758 8.62109L3.39648 5L7.01758 1.37891L5.81055 0.171875L0.982422 5L5.81055 9.82812Z"
        fill="#3D3D3D"
      />
    </svg>
  ),
  next: (
    <svg
      width="8"
      height="10"
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.18945 0.171875L0.982422 1.37891L4.60352 5L0.982422 8.62109L2.18945 9.82812L7.01758 5L2.18945 0.171875Z"
        fill="#3D3D3D"
      />
    </svg>
  ),
};

type IconProps = {
  name: keyof typeof ICONS;
};

const Icon = ({ name }: IconProps) => {
  return ICONS[name] || null;
};

export default Icon;
