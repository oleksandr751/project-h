import React from "react";
import { Box, Collapse, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
interface IAlertComponent {
  text: string;
  type: any;
  open: boolean;
  setOpen: (par: boolean) => void;
}
const AlertComponent: React.FC<IAlertComponent> = ({
  text,
  type,
  open,
  setOpen,
}) => {
  return (
    <Box>
      <Collapse in={open} orientation="vertical">
        <Alert
          severity={type}
          color={type === "error" ? "error" : "info"}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, width: "200px" }}
        >
          {text}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default AlertComponent;
