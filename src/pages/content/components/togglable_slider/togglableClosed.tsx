import { Box } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useContext } from "react";
import { IconButton } from "@mui/material";
import { myStyle } from "../../styles";
import { MainContext } from "../../../../context";

interface ITogglableClosed {
  setCheck: any;
}
export const TogglableClosed: React.FC<ITogglableClosed> = ({ setCheck }) => {
  const { selectedItem } = useContext(MainContext);
  return (
    <Box sx={myStyle.contentDiv}>
      <Box sx={myStyle.leftChildDivToggle as React.CSSProperties}>
        <img
          src={selectedItem?.imageSrc}
          alt={selectedItem?.name}
          width="88px"
          height="55px"
        ></img>
      </Box>
      <Box sx={myStyle.toggleIcon}>
        <IconButton>
          <ChevronRightIcon
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
