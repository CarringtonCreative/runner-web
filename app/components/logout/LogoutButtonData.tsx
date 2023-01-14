import LogoutIcon from "../../../public/logout.png";

export const logoutButtonData = {
  alt: "Dashboard",
  label: "Logout",
  image: LogoutIcon,
  imageWidth: 20,
  imageHeight: 20,
  onClick: () => {
    console.log("Logout button clicked");
  },
};
