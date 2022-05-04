import { Grid, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import Slider from "../Components/Slider";
import OperationButton from "../Components/OperationButton";
import LooksIcon from "@mui/icons-material/Looks";
import config from "../config";
import ColorSelectionTab from "../Components/ColorSelectionTab";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import { BrightnessRequest, LightingRequest } from "../types";
import LightingDeviceSwitches from "../Components/LightingDeviceSwitches";

const colorSelectPageStyle = {
  height: "100%",
  margin: "0px",
  minHeight: "100vh",
  backgroundColor: "#222222",
};

const gridContainerStyle = {
  marginTop: "0px",
  paddingBottom: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const gridItemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const titleStyle = {
  color: "white",
  fontSize: "40px",
  marginTop: "20px",
  fontFamily: "Ubuntu, -apple-system",
  fontWeight: "bold",
};

const leftIconStyle = {
  color: "white",
  fontSize: "medium",
  marginLeft: "15px",
};
const rightIconStyle = {
  color: "white",
  fontSize: "medium",
  marginRight: "15px",
};

const ColorSelectPage: FC = () => {
  const [sequenceDelay, setSequenceDelay] = useState<number>(50);
  const [bulbOneTarget, setBulbOneTarget] = useState<boolean>(false);
  const [bulbTwoTarget, setBulbTwoTarget] = useState<boolean>(false);
  const [ledStripTarget, setLedStripTarget] = useState<boolean>(false);

  const rainbowButtonOnClick = () => {
    const rainbowRequest: LightingRequest = {
      operation: "rainbow",
    };

    if (ledStripTarget) {
      fetch(config.LED_STRIP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rainbowRequest),
      }).catch((error) => {
        console.log("ERROR", error);
      });
    }

    if (bulbOneTarget) {
      fetch(config.BULB_1_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rainbowRequest),
      }).catch((error) => {
        console.log("ERROR", error);
      });
    }

    if (bulbTwoTarget) {
      fetch(config.BULB_2_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rainbowRequest),
      }).catch((error) => {
        console.log("ERROR", error);
      });
    }
  };

  const rainbowCycleButtonOnClick = () => {
    const rainbowCycleRequest: LightingRequest = {
      operation: "rainbow_cycle",
    };

    if (ledStripTarget) {
      fetch(config.LED_STRIP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rainbowCycleRequest),
      }).catch((error) => {
        console.log("ERROR", error);
      });
    }

    if (bulbOneTarget) {
      fetch(config.BULB_1_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rainbowCycleRequest),
      }).catch((error) => {
        console.log("ERROR", error);
      });
    }

    if (bulbTwoTarget) {
      fetch(config.BULB_2_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rainbowCycleRequest),
      }).catch((error) => {
        console.log("ERROR", error);
      });
    }
  };

  const onChangeBrightness = (value: number) => {
    const brightnessRequest: BrightnessRequest = {
      operation: "brightness",
      brightness: value,
    };

    if (ledStripTarget) {
      fetch(config.LED_STRIP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(brightnessRequest),
      }).catch((error) => {
        console.log("ERROR", error);
      });
    }

    if (bulbOneTarget) {
      fetch(config.BULB_1_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(brightnessRequest),
      }).catch((error) => {
        console.log("ERROR", error);
      });
    }

    if (bulbTwoTarget) {
      fetch(config.BULB_2_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(brightnessRequest),
      }).catch((error) => {
        console.log("ERROR", error);
      });
    }
  };

  return (
    <div style={colorSelectPageStyle}>
      <Grid container spacing={2} style={gridContainerStyle}>
        <Grid item xs={12} style={gridItemStyle}>
          <Typography style={titleStyle}>Led Control</Typography>
        </Grid>
        <Grid item xs={12} style={gridItemStyle}>
          <ColorSelectionTab
            ledStripTarget={ledStripTarget}
            bulbOneTarget={bulbOneTarget}
            bulbTwoTarget={bulbTwoTarget}
          />
        </Grid>
        <Grid item xs={12} style={gridItemStyle}>
          <LightingDeviceSwitches
            setBulbOneTarget={setBulbOneTarget}
            setBulbTwoTarget={setBulbTwoTarget}
            setLedStripTarget={setLedStripTarget}
          />
        </Grid>
        <Grid item xs={12} style={gridItemStyle}>
          <Slider
            min={0}
            max={100}
            step={10}
            defaultValue={100}
            onChange={onChangeBrightness}
            startIcon={<BrightnessLowIcon style={leftIconStyle} />}
            endIcon={<BrightnessHighIcon style={rightIconStyle} />}
          />
        </Grid>
        <Grid item xs={12} style={gridItemStyle}>
          <Slider
            min={10}
            max={100}
            step={5}
            defaultValue={sequenceDelay}
            onChange={setSequenceDelay}
            startIcon={<AccessTimeIcon style={leftIconStyle} />}
            endIcon={<MoreTimeIcon style={rightIconStyle} />}
          />
        </Grid>
        <Grid item xs={12} style={gridItemStyle}>
          <OperationButton
            operationName="Rainbow"
            icon={<LooksIcon />}
            onClick={rainbowButtonOnClick}
          />
        </Grid>
        <Grid item xs={12} style={gridItemStyle}>
          <OperationButton
            operationName="Rainbow Cycle"
            icon={<LooksIcon />}
            onClick={rainbowCycleButtonOnClick}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ColorSelectPage;
