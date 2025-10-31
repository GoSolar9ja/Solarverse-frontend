export default function ArrowDownIcon(props: React.ComponentProps<"svg">) {
    const { stroke = "#141B34" } = props;
    return (
<svg
  width="15"
  height="8"
  viewBox="0 0 15 8"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M1.41014 1L6.70303 6.29289C7.03637 6.62623 7.20303 6.79289 7.41014 6.79289C7.61725 6.79289 7.78391 6.62623 8.11725 6.29289L13.4101 1"
    stroke={stroke}
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
 );
}
