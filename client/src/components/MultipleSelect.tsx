import { FormControl, InputLabel, Select, OutlinedInput, MenuItem } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const sensor_types = [
  'EO',
  'IR',
  'SAR',
  'GMTI',
  'FMV'
];

export function MultipleSelect({ handleChange } : { handleChange: Dispatch<SetStateAction<string[]>> }) {
  const [sensorName, setSensorName] = React.useState<string[]>([]);


  return (
    <div>
      <FormControl sx={{ display: "flex"}}>
        <InputLabel>Sensor</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={sensorName}
          onChange={(e) => {
            const {
              target: { value },
            } = e;
            setSensorName(
              // On autofill we get a stringified value.
              typeof value === 'string' ? value.split(',') : value);
            handleChange(typeof value === 'string' ? value.split(',') : value)
          }}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {sensor_types.map((sensor) => (
            <MenuItem
              key={sensor}
              value={sensor}
            >
              {sensor}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
