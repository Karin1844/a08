import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField } from "@mui/material";

export default function Booking() {
  return (
    <main className ="w-[100%] flex flex-col items-center space-y-9 my-25">
        <TextField
          variant="standard"
          name="Name-Lastname"
          label="Name-Lastname"
          className="w-[15%]"
        />
        <TextField
          variant="standard"
          name="Contract-Number"
          label="Contact-Number"
          className="w-[15%]"
        />
        <Select variant="standard" id="venue" className="w-[15%]">
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
        <DateReserve />
        <button name="Book Venue" className="block rounded-mg bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">Book Venue</button>
    </main>
  );
}
