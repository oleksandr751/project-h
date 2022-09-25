import { CardContent, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { IGreatPeople } from "../../interfaces/index";
import TagComponent from "../tag";
interface IContentCardCountry {
  data?: IGreatPeople;
}
const ContentCardPerson: React.FC<IContentCardCountry> = ({ data }) => {
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
        {/* <img
          src={data?.imageSrc}
          alt={data?.name}
          width="98px"
          height="121px"
        ></img> */}
        <Box
          sx={{
            background: `url(${data?.imageSrc}) no-repeat`,
            backgroundSize: "100%",
            width: "98px",
            height: "121px",
          }}
        ></Box>
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
      </Box>
    </CardContent>
  );
};

export default ContentCardPerson;
