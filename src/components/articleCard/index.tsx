import { Box } from "@mui/system";
import { cardStyles } from "./styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IArticleData } from "../../interfaces";
import TagComponent from "../tag";
import { Typography } from "@mui/material";
interface IArticleCard {
  articleData: IArticleData;
}
const ArticleCard: React.FC<IArticleCard> = ({ articleData }) => {
  return (
    <Box sx={cardStyles.cardDiv}>
      <Box sx={{ width: "100%" }}>
        <img
          src={articleData.imageSrc}
          alt="Something wrong"
          style={{
            width: "100%",
            height: "170px",
            borderRadius: "10px 10px 0px 0px",
          }}
        />
      </Box>
      <Typography sx={cardStyles.nameDiv}>{articleData.name}</Typography>
      <Typography sx={cardStyles.descriptionDiv}>
        {articleData.description}
      </Typography>
      <Box sx={cardStyles.tagsDiv}>
        {articleData?.tags?.map((tag) => (
          <TagComponent
            tagName={tag}
            key={tag + Math.floor(Math.random() * 10000)}
          />
        ))}
      </Box>
      <Box sx={cardStyles.bottomCardDiv}>
        <Box>
          <ArrowUpwardIcon
            sx={{
              color: "green",
              fontSize: "30px",
              position: "relative",
              top: "18px",
            }}
          />
          <Typography
            sx={{
              position: "relative ",
              left: "20px",
              bottom: "28px",
              fontSize: "14px",
              color: "green",
            }}
          >
            {articleData.upvotes}
          </Typography>
        </Box>
        <Typography
          sx={cardStyles.authorDiv}
          variant="subtitle1"
        >{`by ${articleData.author}`}</Typography>
      </Box>
    </Box>
  );
};

export default ArticleCard;
