import React, { useEffect, useState } from "react";
import { FormControl, FormControlLabel, Paper, Typography } from "./style";
import {
  // Checkbox,
  // FormControl,
  // FormControlLabel,
  // FormGroup,
  RadioGroup,
  Radio,
  // Paper,
  // Typography,
} from "@mui/material";

export function Filter () {
  const [radioValue, setRadioValue] = useState();

  useEffect(() => {
    //alert(radioValue);
  }, [radioValue]);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <Paper
    elevation={5}
    // sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "24px", padding: "8px", position: "fixed", width: "12.5%" }}
  >
    <Typography
      component="span"
      // sx={{ background: "#E3F2FD", /*diplay: "inline-flex",*/ width: "100%", textAlign: "center", color: "#305FAC", borderRadius: "4px", marginBottom: "16px", height: "40px", lineHeight: "40px"}}
      // sx={{textAlign: "center"}}
    >
      Filtros
    </Typography>
    <form>
      <FormControl /*sx={{ marginLeft: "8px" }}*/>
        <RadioGroup
          onChange={handleChange}
        >
          <FormControlLabel
            // sx={{ margin: "5px 0px" }}
            control={<Radio name="all" />}
            value="all"
            label="Menor Valor Para o Maior"
          />

          <FormControlLabel
            // sx={{ margin: "5px 0px" }}
            control={<Radio name="paid" />}
            value="paid"
            label="Maior Valor Para o Menor"
          />

          <FormControlLabel
            // sx={{ margin: "5px 0px" }}
            control={<Radio name="unpaid" />}
            value="unpaid"
            label="Bem Avaliados"
          />

          {/* <FormControlLabel
            // sx={{ margin: "5px 0px" }}
            control={<Radio name="others" />}
            value="others"
            label="Outros Cursos"
          /> */}
        </RadioGroup>
      </FormControl>
    </form>
  </Paper>
  );
};
