import { AddBox, HomeRounded, LocalShipping } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { DisplayedItems } from "../../../enums";
import { useTranslation } from "react-i18next";
import { Namespaces } from "../../../i18n/i18n.constants";
import "./ItemsPageFooter.scss";

type ItemsPageFooterProps = {
  displayedItems: DisplayedItems;
  setDispalyedItems: React.Dispatch<React.SetStateAction<DisplayedItems>>;
};

const ItemsPageFooter = ({
  displayedItems,
  setDispalyedItems,
}: ItemsPageFooterProps) => {
  const { t } = useTranslation(Namespaces.footer);

  return (
    <>
      <BottomNavigation
        className="footer"
        value={displayedItems}
        onChange={(_, newValue) => {
          setDispalyedItems(newValue);
        }}
      >
        <BottomNavigationAction
          className="footer__button"
          label={t("shippingRequest")}
          icon={<LocalShipping />}
        />
        <BottomNavigationAction
          className="footer__button"
          label={t("myItems")}
          icon={<AddBox />}
        />
        <BottomNavigationAction
          className="footer__button"
          label={t("home")}
          icon={<HomeRounded />}
        />
      </BottomNavigation>
    </>
  );
};

export default ItemsPageFooter;
