import { ItemStatus } from "../enums";
import avatar from "../images/avatar.png";

export type Item = {
  name: string;
  image: string;
  location: string;
  description: string;
  timePublished: string;
  publisherMail: string;
  itemStatus: ItemStatus;
};

export const items: Item[] = [
  {
    name: "couch",
    image: avatar,
    location: "TLV",
    description: "ספה ממש נוחה וחומה",
    timePublished: "13:00:00T11/12/2024",
    publisherMail: "a@gmail.com",
    itemStatus: ItemStatus.TO_DONATE,
  },
  {
    name: "sofa",
    image: avatar,
    location: "Holon",
    description: "ספה ממש נוחה וחומה",
    timePublished: "13:00:00T11/12/2024",
    publisherMail: "a@gmail.com",
    itemStatus: ItemStatus.TO_DONATE,
  },
  {
    name: "chair",
    image: avatar,
    location: "Rishon Letzion",
    description: "ספה ממש נוחה וחומה",
    timePublished: "13:00:00T11/12/2024",
    publisherMail: "a@gmail.com",
    itemStatus: ItemStatus.TO_SHIP,
  },
  {
    name: "bottle",
    image: avatar,
    location: "Holon",
    description: "ספה ממש נוחה וחומה",
    timePublished: "13:00:00T11/12/2024",
    publisherMail: "a@gmail.com",
    itemStatus: ItemStatus.TO_SHIP,
  },
  {
    name: "cup",
    image: avatar,
    location: "TLV",
    description: "ספה ממש נוחה וחומה",
    timePublished: "13:00:00T11/12/2024",
    publisherMail: "a@gmail.com",
    itemStatus: ItemStatus.TO_DONATE,
  },
  {
    name: "desk",
    image: avatar,
    location: "TLV",
    description: "ספה ממש נוחה וחומה",
    timePublished: "13:00:00T11/12/2024",
    publisherMail: "b@gmail.com",
    itemStatus: ItemStatus.TO_DONATE,
  },
  {
    name: "table",
    image: avatar,
    location: "TLV",
    description: "ספה ממש נוחה וחומה",
    timePublished: "13:00:00T11/12/2024",
    publisherMail: "b@gmail.com",
    itemStatus: ItemStatus.TO_DONATE,
  },
  {
    name: "tv",
    image: avatar,
    location: "TLV",
    description: "ספה ממש נוחה וחומה",
    timePublished: "13:00:00T11/12/2024",
    publisherMail: "c@gmail.com",
    itemStatus: ItemStatus.TO_DONATE,
  },
];
