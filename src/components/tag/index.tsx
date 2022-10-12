import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ScienceIcon from "@mui/icons-material/Science";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { EIconName } from "../../enum";

const ICON_VARIANT: Record<EIconName, JSX.Element> = {
  [EIconName.Composer]: <MusicNoteIcon style={{ color: "white" }} />,
  [EIconName.Music]: <MusicNoteIcon style={{ color: "white" }} />,
  [EIconName.Military]: <MilitaryTechIcon style={{ color: "white" }} />,
  [EIconName.Physics]: <ScienceIcon style={{ color: "white" }} />,
  [EIconName.Poet]: <HistoryEduIcon style={{ color: "white" }} />,
  [EIconName.Politics]: <MusicNoteIcon style={{ color: "white" }} />,
  [EIconName.Writer]: <HistoryEduIcon style={{ color: "white" }} />,
  [EIconName.Science]: <ScienceIcon style={{ color: "white" }} />,
};

interface ITagComponent {
  tagName: EIconName;
}

const TagComponent: React.FC<ITagComponent> = ({ tagName }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        sx={{ backgroundColor: "#138DD0", color: "white" }}
        icon={ICON_VARIANT[tagName]}
        label={tagName}
        size="small"
      />
      {/* <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" /> */}
    </Stack>
  );
};

export default TagComponent;
