import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { cardStyles } from "./styles";
import { articleData } from "../../../../data/articleCardsData";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ArticleCard = () => {
  return (
    <Box sx={cardStyles.mainDiv}>
      <Box>
        <Typography sx={{ fontSize: "48px" }}>Best rated articles</Typography>
      </Box>
      <Box sx={cardStyles.contentDiv}>
        {articleData?.slice(0, 2).map((item) => (
          <Box sx={cardStyles.cardDiv}>
            <Box>
              <img
                src={item.imageSrc}
                alt="Something wrong"
                style={{
                  width: "400px",
                  height: "170px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              />
            </Box>
            <Box sx={cardStyles.nameDiv}>{item.name}</Box>
            <Box sx={cardStyles.descriptionDiv}>{item.description}</Box>
            <Box sx={cardStyles.tagsDiv}>
              {item?.tags?.map((tags) => (
                <Box sx={cardStyles.partTagDiv}>{tags}</Box>
              ))}
            </Box>
            <Box sx={cardStyles.bottomCardDiv}>
              <Box>
                <ArrowUpwardIcon
                  sx={{
                    color: "green",
                    fontSize: "50px",
                    position: "relative",
                    top: "18px",
                  }}
                />
                <Box
                  sx={{
                    position: "relative ",
                    left: "30px",
                    bottom: "45px",
                    color: "green",
                  }}
                >
                  {item.upvotes}
                </Box>
              </Box>
              <Box sx={cardStyles.authorDiv}>{item.author}</Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ArticleCard;
