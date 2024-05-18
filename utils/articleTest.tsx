// types.ts
export interface Article {
    id: number;
    imageUrl: string;
    titre: string;
    titre2: string;
    titre3: string;
    date: string;
    entete: string;
    content: string;
    content2: string;
  }
  
  export const articles: Article[] = [
    {
      id: 1,
      imageUrl: "/@/public/actu1.png",
      titre: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      titre2: "Lorem ipsum dolor sit amet",
      titre3: "Tincidunt ornare massa eget",
      date: "Publié le: 12 avril 2023",
      entete: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada.",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi inventore adipisci magni at corrupti recusandae blanditiis. Reiciendis, hic. Quis, dolore vel. Recusandae beatae quisquam cupiditate, fugiat voluptatem dolore, dolorum exercitationem nemo quasi totam libero sequi magni deleniti? Recusandae sequi quisquam repellat itaque facere minima incidunt illum ea, ad alias pariatur voluptate magni doloribus quos dolores omnis illo sunt repudiandae voluptatem quasi, dolorem aliquid voluptas optio? Qui consectetur iure earum soluta quibusdam odio, vero iste aliquid cum, deserunt, maiores accusantium incidunt quaerat. Vel id illo delectus aperiam commodi.",
      content2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi inventore adipisci magni at corrupti recusandae blanditiis. Reiciendis, hic. Quis, dolore vel. Recusandae beatae quisquam cupiditate, fugiat voluptatem dolore, dolorum exercitationem nemo quasi totam libero sequi magni deleniti? Recusandae sequi quisquam repellat itaque facere minima incidunt illum ea, ad alias pariatur voluptate magni doloribus quos dolores omnis illo sunt repudiandae voluptatem quasi, dolorem aliquid voluptas optio? Qui consectetur iure earum soluta quibusdam odio, vero iste aliquid cum, deserunt, maiores accusantium incidunt quaerat. Vel id illo delectus aperiam commodi.",
    },
    // Ajoutez d'autres articles si nécessaire
  ];
  