import { useState } from "react";
import { DisplayedItems } from "../../enums";
import ItemsPageFooter from "./ItemsPageFooter/ItemsPageFooter";

const ItemsPage = () => {
  const [displayedItems, setDisplayedItems] = useState<DisplayedItems>(
    DisplayedItems.MY_ITEMS
  );

  return (
    <>
      <ItemsPageFooter
        displayedItems={displayedItems}
        setDispalyedItems={setDisplayedItems}
      />
    </>
  );
};

export default ItemsPage;
