import { Box } from "@mui/system";
import { cardStyles } from "./styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IArticleData } from "../../interfaces";
import TagComponent from "../tag";
interface IArticleCard {
  articleData: IArticleData;
}
const ArticleCard: React.FC<IArticleCard> = ({ articleData }) => {
  return (
    <Box sx={cardStyles.cardDiv}>
      <Box>
        <img
          src={articleData.imageSrc}
          alt="Something wrong"
          style={{
            width: "400px",
            height: "170px",
            borderRadius: "10px 10px 0px 0px",
          }}
        />
      </Box>
      <Box sx={cardStyles.nameDiv}>{articleData.name}</Box>
      <Box sx={cardStyles.descriptionDiv}>{articleData.description}</Box>
      <Box sx={cardStyles.tagsDiv}>
        {articleData?.tags?.map((tag) => (
          <TagComponent tagName={tag} />
          // <Box sx={cardStyles.partTagDiv}>{tags}</Box>
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
            {articleData.upvotes}
          </Box>
        </Box>
        <Box sx={cardStyles.authorDiv}>{articleData.author}</Box>
      </Box>
    </Box>
  );
};

export default ArticleCard;
