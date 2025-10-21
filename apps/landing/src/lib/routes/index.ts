export enum Routes {
  HOME = "/",
  ABOUT = `/about`,
  BLOG = "/blog",
  FOR_INSTALLER = "/installer",
  CONTACT = "/contact-us",
  FAQ = "/faq",
  PRIVACY_POLICY = "/privacy-policy",
  TERMS_CONDITIONS = "/terms-conditions",
}

export const navLinks = [
  {
    label: "Home",
    href: Routes.HOME,
  },
  {
    label: "About",
    href: Routes.ABOUT,
  },
  {
    label: "Blog",
    href: Routes.BLOG,
  },
  {
    label: "For Installer",
    href: Routes.FOR_INSTALLER,
  },
  {
    label: "Contact Us",
    href: Routes.CONTACT,
  },
  {
    label: "FAQ",
    href: Routes.FAQ,
  },
];
