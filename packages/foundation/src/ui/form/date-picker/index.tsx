"use client";

import * as React from "react";

import { Popover, PopoverContent, PopoverTrigger } from "../../overlay/popover";
import { Calendar } from "../calender";

export function DatePicker({
  children,
  date,
  setDate,
}: {
  children: React.ReactNode;
  date?: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}) {
  return (
    <Popover>
      <PopoverTrigger className="w-full p-0 m-0 text-start">
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0  bg-white flex ">
        <Calendar
          // disabled={{ after: new Date("2015-01-01") }}
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md"
          captionLayout="dropdown"
          onMonthChange={(date) => {
            setDate(new Date(date.toISOString()));
          }}
          required
        />
      </PopoverContent>
    </Popover>
  );
}
