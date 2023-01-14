import PersonIcon from "../../../public/person.png";
import CompanyIcon from "../../../public/building.png";
import { GigCompanyProps } from "./GigCompany";
import { PointOfContactProps } from "./PointOfContact";

export const pointOfContact = {
  primary: true,
  title: "",
  alt: "Recruiters",
  icon: PersonIcon,
  iconWidth: 15,
  iconHeight: 15,
  contact: "Breanne Acio",
} as PointOfContactProps;

export const gigCompanyData = {
  primary: true,
  name: "Sēkr",
  url: "https://sekr.com",
  icon: CompanyIcon,
  iconWidth: 15,
  iconHeight: 15,
} as GigCompanyProps;

export const description =
  "You will be responsible for overseeing the development and lifecycle of a product. This includes setting the product strategy, defining the features and requirements, working with cross-functional teams to ensure the product is built to specification and delivered on time, and analyzing and reporting on product performance. Product managers may work in a variety of industries, including technology, healthcare, finance, and retail.";
