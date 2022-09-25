import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ScienceIcon from "@mui/icons-material/Science";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import PublicIcon from "@mui/icons-material/Public";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

interface ITagComponent {
  tagName: string;
}

const TagComponent: React.FC<ITagComponent> = ({ tagName }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        sx={{ backgroundColor: "#138DD0", color: "white" }}
        icon={
          tagName === "Music" || tagName === "Composer" ? (
            <MusicNoteIcon style={{ color: "white" }} />
          ) : tagName === "Science" || tagName === "Physics" ? (
            <ScienceIcon style={{ color: "white" }} />
          ) : tagName === "Writer" || tagName === "Poet" ? (
            <HistoryEduIcon style={{ color: "white" }} />
          ) : tagName === "Politics" ? (
            <PublicIcon style={{ color: "white" }} />
          ) : tagName === "Military" ? (
            <MilitaryTechIcon style={{ color: "white" }} />
          ) : (
            <PublicIcon style={{ color: "white" }} />
          )
        }
        label={tagName}
        size="small"
      />
      {/* <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" /> */}
    </Stack>
  );
};

export default TagComponent;
