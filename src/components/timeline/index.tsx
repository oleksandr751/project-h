import { Paper, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { TPositionType } from "../../types";
import { ITimelineData } from "../../interfaces";
import { ReactNode } from "react";

interface ITimelineProps {
  data: ITimelineData[];
  position?: TPositionType;
  icon: ReactNode;
}
const TimelineComponent: React.FC<ITimelineProps> = ({
  data,
  position,
  icon,
}) => {
  return (
    <Timeline position={position} sx={{ width: "100%", padding: 0 }}>
      {data.map((timelineItem, idx) => (
        <TimelineItem key={idx}>
          <TimelineSeparator>
            <TimelineDot
              sx={{ backgroundColor: timelineItem.backgroundColor ?? "grey" }}
            >
              {icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              sx={{
                padding: "6px 16px",
                background: timelineItem.backgroundColor,
              }}
            >
              <Typography variant="h6">{timelineItem.name}</Typography>
              <Typography>{timelineItem.description}</Typography>
              <Typography variant="caption">
                {`${timelineItem.ruler}, ${timelineItem.dateStart}-${timelineItem.dateEnd}`}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineComponent;
