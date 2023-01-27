import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { ChangeEvent, useState } from "react";
import { myStyle } from "../styles";

const EmailForm = () => {
  const initialState = {
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  };
  const [form, setForm] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={myStyle.formDiv}>
      <Box>
        <Typography sx={myStyle.formText}>Full Name</Typography>
        <TextField
          label="Full Name"
          variant="outlined"
          name="Name"
          sx={myStyle.formInputs}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Typography sx={myStyle.formText}>Email Adress</Typography>
        <TextField
          label="Enter your email"
          variant="outlined"
          name="Email"
          sx={myStyle.formInputs}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Typography sx={myStyle.formText}>Subject</Typography>
        <TextField
          label="Enter your subject"
          variant="outlined"
          name="Subject"
          sx={myStyle.formInputs}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Typography sx={myStyle.formText}>Message</Typography>
        <TextField
          label="Type your message"
          variant="outlined"
          name="Message"
          sx={myStyle.formInputsLastForm}
          onChange={handleChange}
          multiline
          rows={6}
        />
      </Box>
      <Button
        sx={{ width: "120px" }}
        variant="contained"
        onClick={() => {
          console.log(form);
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default EmailForm;
