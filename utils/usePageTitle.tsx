import { usePathname } from "next/navigation";

const usePageTitle = () => {
  const pathname = usePathname();

  let pageTitle = "Herouville Futsal"; // Default title

  if (pathname.startsWith("/actualites")) {
    pageTitle = "Actualités";
  } else if (pathname.startsWith("/boutique")) {
    pageTitle = "Boutique";
  } else if (pathname.startsWith("/calendrier")) {
    pageTitle = "Calendrier";
  } else if (pathname.startsWith("/equipe")) {
    pageTitle = "Équipe";
  } else if (pathname.startsWith("/commandes")) {
    pageTitle = "Commandes";
  } else if (pathname.startsWith("/panier")) {
    pageTitle = "Panier";
  } else if (pathname.startsWith("/reglages")) {
    pageTitle = "Réglages";
  }

  return pageTitle;
};

export default usePageTitle;
