import { AddBox, HomeRounded, LocalShipping } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Item } from "../../../Data/items";
import { ItemCategoery } from "../../../enums";
import { Namespaces } from "../../../i18n/i18n.constants";
import { Routes } from "../../../router";
import "./ItemsPageFooter.scss";

type ItemsPageFooterProps = {
  selectedCategory: ItemCategoery;
  setSelectedCategory: React.Dispatch<React.SetStateAction<ItemCategoery>>;
};

const ItemsPageFooter = ({
  selectedCategory: displayedItemsClause,
  setSelectedCategory: setDisplayedItemsClause,
}: ItemsPageFooterProps) => {
  const { t } = useTranslation(Namespaces.itemsPage);

  const navigate = useNavigate();

  const onNewPostClick = () => {
    navigate(Routes.ITEM_MODIFICATION, {
      state: { item: {} as Item, isNew: true },
    });
  };

  return (
    <>
      <BottomNavigation
        className="footer"
        value={displayedItemsClause}
        onChange={(_, newValue) => {
          setDisplayedItemsClause(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          className="footer__button"
          label={t("waitingForShipping")}
          value={ItemCategoery.TO_SHIP_ITEMS}
          icon={<LocalShipping />}
        />
        <BottomNavigationAction
          className="footer__button"
          label={t("myItems")}
          value={ItemCategoery.MY_ITEMS}
          icon={<AddBox />}
        />
        <BottomNavigationAction
          className="footer__button"
          label={t("newPost")}
          onClick={onNewPostClick}
          value={ItemCategoery.NEW_POST}
          icon={<HomeRounded />}
        />
        <BottomNavigationAction
          className="footer__button"
          label={t("forGiving")}
          value={ItemCategoery.HOME}
          icon={<HomeRounded />}
        />
      </BottomNavigation>
    </>
  );
};

export default ItemsPageFooter;
