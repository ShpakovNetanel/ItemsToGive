import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ItemDisplayerTitle from "../../components/ItemDisplayerTitle/ItemDisplayerTitle";
import TextField from "../../components/TextField/TextField";
import TitledComponent from "../../components/TitledComponent/TitledComponent";
import { Item } from "../../Data/items";
import { Namespaces } from "../../i18n/i18n.constants";
import itemDetailsSchema, {
  ItemDetailsSchema,
} from "../../RHFSchemas/ItemDetailsSchema";
import "./ItemDetails.scss";

type ItemDetailsProps = {
  isEditable?: boolean;
  item?: Item;
};

const ItemDetails = ({ isEditable, item }: ItemDetailsProps) => {
  const translations = {
    tAction: useTranslation(Namespaces.action).t,
    tTitle: useTranslation(Namespaces.title).t,
    tField: useTranslation(Namespaces.field).t,
    tPlaceholder: useTranslation(Namespaces.placeholder).t,
  };

  const { control, handleSubmit } = useForm<ItemDetailsSchema>({
    resolver: zodResolver(itemDetailsSchema),
    defaultValues: {
      itemDescription: "",
      itemImage: "",
      itemLocation: "",
      itemName: "",
    },
  });

  const onSaveButton = handleSubmit(() => {});

  return (
    <>
      <ItemDisplayerTitle
        title={
          isEditable ? item?.name ?? "" : translations.tTitle("publishNewItem")
        }
      />
      <Box className="item-details">
        <TitledComponent
          title={translations.tField("itemName")}
          required={true}
        >
          <TextField
            control={control}
            name={"itemName"}
            sx={{ width: "90vw" }}
            placeholder={translations.tPlaceholder("enterShortName")}
          />
        </TitledComponent>
        <TitledComponent
          title={translations.tField("itemDescription")}
          required={true}
        >
          <TextField
            control={control}
            name={"itemDescription"}
            sx={{ width: "90vw", lineHeight: "20vh" }}
            multiline={true}
          />
        </TitledComponent>
        <TitledComponent
          title={translations.tField("itemLocation")}
          required={true}
        >
          <TextField
            control={control}
            name={"itemDescription"}
            sx={{ width: "90vw", lineHeight: "20vh" }}
            multiline={true}
          />
        </TitledComponent>
        <Button className="item-details__save-button" onClick={onSaveButton}>
          {translations.tAction("publishItem")}
        </Button>
      </Box>
    </>
  );
};

export default ItemDetails;
