import { IconButton, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box } from "@mui/system";
import { myStyle } from "../../styles";
import { useContext } from "react";
import { MainContext } from "../../../../context";

interface ITogglableOpen {
  setCheck: any;
}

const TogglableOpen: React.FC<ITogglableOpen> = ({ setCheck }) => {
  const { greatPeople, selectedItem } = useContext(MainContext);
  return (
    <Box sx={myStyle.contentDiv}>
      <Box sx={myStyle.leftChildDiv as React.CSSProperties}>
        <img
          src={selectedItem?.imageSrc}
          alt={selectedItem?.name}
          width="300px"
          height="200px"
        ></img>
        <Box sx={myStyle.contentInfo}>
          <Typography variant="h6">{selectedItem?.name}</Typography>
          <Typography>{selectedItem?.description}</Typography>
        </Box>
      </Box>
      <Box sx={myStyle.toggleIcon}>
        <IconButton sx={{ height: "60px", width: "60px" }}>
          <ChevronLeftIcon
            sx={myStyle.toggleIcon}
            onClick={() => {
              setCheck((prevCheck: any) => !prevCheck);
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TogglableOpen;
