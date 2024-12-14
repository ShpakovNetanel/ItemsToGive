import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { clone } from "remeda";
import { useItems } from "../../api/itemService";
import { loggedUser } from "../../atom/atom";
import { Item } from "../../Data/items";
import { ItemCategoery, ItemClause, ItemStatus } from "../../enums";
import useGeolocationCity from "../../hooks/useGeolocationCity";
import ItemPageContent from "./ItemPageContent/ItemsPageContent";
import "./ItemsPage.scss";
import ItemsPageFooter from "./ItemsPageFooter/ItemsPageFooter";
import ItemsPageHeader from "./ItemsPageHeader/ItemsPageHeader";

const ItemsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ItemCategoery>(
    ItemCategoery.MY_ITEMS
  );
  const [selectedClause, setSelectedClause] = useState<ItemClause>(
    ItemClause.MY_ITEMS
  );
  const [displayedItems, setDisplayedItems] = useState<Item[]>([]);

  const { data: items, isSuccess: isItemsSuccess } = useItems();

  const currentUser = useRecoilValue(loggedUser);
  const { city } = useGeolocationCity("7b3d6d829386469b9d3a48119a890692");

  useEffect(() => {
    if (isItemsSuccess) setDisplayedItems(items);
  }, [items, isItemsSuccess]);

  useEffect(() => {
    let filteredItems = clone(items);

    if (selectedClause === ItemClause.NEAR_ME) {
      filteredItems = filteredItems?.filter(
        (filteredItem) => filteredItem.location === city
      );
    }

    if (selectedCategory === ItemCategoery.MY_ITEMS) {
      filteredItems = filteredItems?.filter(
        (filteredItem) =>
          filteredItem.publisherMail === currentUser.email &&
          filteredItem.itemStatus === ItemStatus.MY_ITEM
      );
    } else if (selectedCategory === ItemCategoery.HOME) {
      filteredItems = filteredItems?.filter(
        (filteredItem) => filteredItem.itemStatus === ItemStatus.TO_DONATE
      );
    } else {
      filteredItems = filteredItems?.filter(
        (filteredItem) => filteredItem.itemStatus === ItemStatus.TO_SHIP
      );
    }

    setDisplayedItems(filteredItems ?? []);
  }, [selectedClause, selectedCategory, items, currentUser, city]);

  useEffect(() => {
    if (selectedCategory === ItemCategoery.MY_ITEMS)
      setSelectedClause(ItemClause.MY_ITEMS);
    else setSelectedClause(ItemClause.ALL_ITEMS);
  }, [selectedCategory]);

  return (
    <Box className="items">
      <ItemsPageHeader
        selectedClause={selectedClause}
        setSelectedClause={setSelectedClause}
        selectedCategory={selectedCategory}
      />
      <ItemPageContent
        items={displayedItems}
        selectedCategory={selectedCategory}
      />
      <ItemsPageFooter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </Box>
  );
};

export default ItemsPage;
