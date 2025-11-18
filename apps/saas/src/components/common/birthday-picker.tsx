import { DatePicker, Typography } from "@solarverse/ui";

interface BirthdayPickerProps {
  value?: Date;
  onChange: (date: Date) => void;
}

const BirthdayPicker: React.FC<BirthdayPickerProps> = ({ value, onChange }) => {
  const defaultClassName =
    "rounded-full shadow-sm py-2 w-full max-w-[80px] flex flex-col items-center justify-center text-center px-4 tracking-[1.5%] bg-[#F5F5F5]";

  return (
    <DatePicker setDate={onChange} date={value}>
      <div className="flex gap-2">
        <Typography.body1 className={defaultClassName}>
          {value ? value.getDate() : "Day"}
        </Typography.body1>
        <Typography.body1 className={defaultClassName}>
          {value
            ? value.toLocaleString("default", { month: "short" })
            : "Month"}
        </Typography.body1>
        <Typography.body1 className={defaultClassName}>
          {value ? value.getFullYear() : "Year"}
        </Typography.body1>
      </div>
    </DatePicker>
  );
};

export default BirthdayPicker;
