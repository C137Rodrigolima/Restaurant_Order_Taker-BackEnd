import { prisma } from "../src/database.js";

async function main() {
  await prisma.option.createMany({
    data: [
      {
      image: "https://superramos.com/wp-content/uploads/2018/07/frango_parmegiana-600x400.jpg",
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
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
});