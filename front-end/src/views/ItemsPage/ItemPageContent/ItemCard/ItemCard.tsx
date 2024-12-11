import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Item } from "../../../../Data/items";
import "./ItemCard.scss";

type ItemCardProps = {
  item: Item;
};

const ItemCard = ({ item }: ItemCardProps) => {

  const onCardClick = () => {

  }

  return (
    <Card className="item-card" onClick={onCardClick}>
      <CardMedia
        className="item-card__image"
        component="img"
        image={item.image}
      />
      <CardContent className="item-card__content">
        <Typography className="item-card__content--description">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
