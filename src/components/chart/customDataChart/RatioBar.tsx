import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { EIconName2 } from "../../../enum";
import { Typography } from "@mui/material";
import {
  GiTank,
  GiJetFighter,
  GiBattleship,
  GiAntiAircraftGun,
} from "react-icons/gi";
import { IoIosMan } from "react-icons/io";
import { IRatioBarData } from "../../../interfaces";
interface IRatioBar {
  data: IRatioBarData;
}
const iconStyle = {
  normal: { margin: "10px" },
  reversed: {
    margin: "10px",
    transform: "scaleX(-1)",
  },
};
const ICON_VARIANT: Record<EIconName2, JSX.Element> = {
  [EIconName2.Aircraft]: <GiJetFighter style={iconStyle.normal} />,
  [EIconName2.Artillery]: <GiAntiAircraftGun style={iconStyle.normal} />,
  [EIconName2.Ships]: <GiBattleship style={iconStyle.normal} />,
  [EIconName2.Tanks]: <GiTank style={iconStyle.normal} />,
  [EIconName2.Troops]: <IoIosMan style={iconStyle.normal} />,
};
const ICON_VARIANT_REVERSED: Record<EIconName2, JSX.Element> = {
  [EIconName2.Aircraft]: <GiJetFighter style={iconStyle.reversed} />,
  [EIconName2.Artillery]: <GiAntiAircraftGun style={iconStyle.reversed} />,
  [EIconName2.Ships]: <GiBattleship style={iconStyle.reversed} />,
  [EIconName2.Tanks]: <GiTank style={iconStyle.reversed} />,
  [EIconName2.Troops]: <IoIosMan style={iconStyle.reversed} />,
};
const RatioBar: React.FC<IRatioBar> = ({ data }) => {
  const [widthA, setWidthA] = useState("");
  const [widthB, setWidthB] = useState("");
  const { colors, type, values } = data;
  const countPercentage = (a: number, b: number) => {
    const result = (a * 100) / (a + b);
    setWidthA(`${result}%`);
    setWidthB(`${100 - result}%`);
  };
  useEffect(() => {
    countPercentage(values.a, values.b);
    return () => {};
  }, [values.a, values.b]);

  return (
    <Box sx={{ margin: "16px 0 16px 0" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {ICON_VARIANT[type]}
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Box
            sx={{
              width: widthB,
              backgroundColor: colors.colorB,
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>{values.b}</Typography>
          </Box>
          <Box
            sx={{
              width: widthA,
              backgroundColor: colors.colorA,
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>{values.a}</Typography>
          </Box>
        </Box>
        {ICON_VARIANT_REVERSED[type]}
      </Box>
    </Box>
  );
};

export default RatioBar;
