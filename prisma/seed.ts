import { prisma } from "../src/database.js";
import { errorHandlerMiddleware } from "../src/middlewares/errorHandlerMiddleware.js";

async function main() {
  await prisma.option.createMany({
    data: [
      {
      image: "https://www.supermercadosmundial.com.br/content/816x480/etTNPZq1yhpN9WL9.png",
      name: "frango à parmegiana",
      price: "23.99"
      },
      {
        image: "https://s2.glbimg.com/GToJPVardYjpzSeMfNdhCRqp6NU=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/F/5/hm5zNWRiAawYNSghKZbw/capa-materia-gshow-2022-02-16t145245.399.png",
        name: "lasanha de carne moída",
        price: "24.99"
      },
      {
        image: "https://t2.rg.ltmcdn.com/pt/posts/2/5/2/contra_file_no_forno_com_batatas_10252_600_square.jpg",
        name: "contra filé no forno com batatas",
        price: "34.99"
      },
      {
        image: "https://img.itdg.com.br/tdg/images/recipes/000/312/313/354327/354327_original.jpg?mode=crop&width=710&height=400",
        name: "cuscuz nordestino com carne seca",
        price: "54.99"
      },
    ],
    skipDuplicates: true,
  });

  await prisma.adm.create({
    data: {
      email: "adm@email.com",
      password: "$2b$12$k3L6St70XlLfoDI5HCN4E.mvJjMyyxczbc1LAkYTQkkWtMVW5lC56",
      name: "adm",
    }
  })
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
});