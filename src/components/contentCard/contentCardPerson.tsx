import { CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { IGreatPeople } from "../../interfaces/index";
import EditIcon from "@mui/icons-material/Edit";
import TagComponent from "../tag";
import { MainContext } from "../../context/index";
import { useContext } from "react";
interface IContentCardCountry {
  data?: IGreatPeople;
}
const ContentCardPerson: React.FC<IContentCardCountry> = ({ data }) => {
  const { isAuthenticated, setEditAttempt, setGreatPerson } =
    useContext(MainContext);
  return (
    <CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          textAlign: "end",
        }}
      >
        <Box
          sx={{
            background: `url(${data?.imageSrc}) no-repeat`,
            backgroundSize: "100%",
            width: "98px",
            height: "121px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            height: "130px",
            textAlign: "center",
          }}
        >
          <Typography gutterBottom variant="body1" component="div">
            {data?.name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            {data?.occupation}
          </Typography>
          <Typography variant="caption">{`${data?.dateStart}-${data?.dateEnd}`}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {data?.tags.map((tag, idx) => (
              <Box sx={{ marginLeft: "7px" }} key={idx}>
                <TagComponent tagName={tag} />
              </Box>
            ))}
          </Box>
        </Box>
        {isAuthenticated && (
          <IconButton
            onClick={() => {
              setGreatPerson(data);
              setEditAttempt(true);
            }}
          >
            <EditIcon />
          </IconButton>
        )}
      </Box>
    </CardContent>
  );
};

export default ContentCardPerson;
