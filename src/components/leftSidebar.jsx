import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
  Switch,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function LeftSidebar({ onFilterChange }) {
  // --- Place Analysis State ---
  const [radius, setRadius] = useState(5);
  const [subCategories, setSubCategories] = useState([]);
  const [showPlaces, setShowPlaces] = useState(true);

  // --- Customer Analysis State ---
  const [dataType, setDataType] = useState("tradeArea");
  const [tradeAreaPercents, setTradeAreaPercents] = useState([]);
  const [showCustomerData, setShowCustomerData] = useState(true);

  // Dummy subcategory options
  const subCategoryOptions = ["Cafe", "Restaurant", "Market", "Bookstore"];

  // Trade area percent options
  const tradeAreaOptions = ["%30", "%50", "%70"];

  const handleSubCategoryChange = (event) => {
    const {
      target: { value },
    } = event;
    setSubCategories(typeof value === "string" ? value.split(",") : value);
  };

  const handleTradeAreaChange = (percent) => {
    setTradeAreaPercents((prev) =>
      prev.includes(percent)
        ? prev.filter((p) => p !== percent)
        : [...prev, percent]
    );
  };

  return (
    <div style={{ width: 300, padding: 8, overflowY: "auto" }}>
      {/* --- Accordion 1: Place Analysis --- */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Place Analysis</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Radius Filter */}
          <TextField
            label="Radius (km)"
            type="number"
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
            size="small"
          />

          {/* Sub Category Multi-select */}
          <FormControl size="small">
            <InputLabel>Sub Category</InputLabel>
            <Select
              multiple
              value={subCategories}
              onChange={handleSubCategoryChange}
            >
              {subCategoryOptions.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Hide/Show toggle */}
          <FormControlLabel
            control={
              <Switch
                checked={showPlaces}
                onChange={(e) => setShowPlaces(e.target.checked)}
              />
            }
            label={showPlaces ? "Show Places" : "Hide Places"}
          />

          {/* Show Nearby Places Button */}
          <Button variant="contained" onClick={() => console.log("Load places")}>
            Show Nearby Places
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* --- Accordion 2: Customer Analysis --- */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Customer Analysis</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Data Type Select */}
          <FormControl size="small">
            <InputLabel>Data Type</InputLabel>
            <Select
              value={dataType}
              onChange={(e) => setDataType(e.target.value)}
            >
              <MenuItem value="tradeArea">Trade Area</MenuItem>
              <MenuItem value="homeZipcodes">Home Zipcodes</MenuItem>
            </Select>
          </FormControl>

          {/* Trade Area Options - only visible if "tradeArea" selected */}
          {dataType === "tradeArea" && (
            <div>
              {tradeAreaOptions.map((percent) => (
                <FormControlLabel
                  key={percent}
                  control={
                    <Checkbox
                      checked={tradeAreaPercents.includes(percent)}
                      onChange={() => handleTradeAreaChange(percent)}
                    />
                  }
                  label={percent}
                />
              ))}
            </div>
          )}

          {/* Hide/Show toggle */}
          <FormControlLabel
            control={
              <Switch
                checked={showCustomerData}
                onChange={(e) => setShowCustomerData(e.target.checked)}
              />
            }
            label={showCustomerData ? "Show Data" : "Hide Data"}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
