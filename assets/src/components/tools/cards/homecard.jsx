import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";



export default function homecard() {
  const list = [
    {
      title: "Orange",
      img: "https://media.istockphoto.com/id/1151162265/fr/photo/petit-gar%C3%A7on-essayant-le-skateboard.jpg?s=612x612&w=0&k=20&c=LVa7O8hrjtkaYL3jOFQbOx0x00w_US_CZ9ggmPaGp0A=",
    },
    {
      title: "Tangerine",
      img: "https://media.istockphoto.com/id/1209988354/fr/photo/jeune-homme-skateboard-%C3%A0-los-angeles.jpg?s=612x612&w=0&k=20&c=9FSIOyHzcGXUHZ20rd8U9qfQbuyicvB6EsUUD3OFxL4=",
    },
    {
      title: "Raspberry",
      img: "https://media.istockphoto.com/id/1424428506/fr/photo/jeune-fille-mill%C3%A9naire-sur-une-planche-%C3%A0-roulettes-dans-un-skatepark.jpg?s=612x612&w=0&k=20&c=H47sA8ujrT7WJZE8ywluzW3FaS62lVAvTGkkmTcTsbI=",
      
    },
    {
      title: "Lemon",
      img: "https://images.freeimages.com/images/large-previews/b66/skater-1437379.jpg?fmt=webp&w=350",
     
    },
    {
      title: "Avocado",
      img: "https://media.istockphoto.com/id/481568014/fr/photo/jeune-femme-skateur-polissage.jpg?s=612x612&w=0&k=20&c=y6S-TqU_ueHz0VvL9Mrm3Vss9FmoZbOQw1B7BgB_1Vs=",
      
    },
    {
      title: "Lemon 2",
      img: "https://images.freeimages.com/images/large-previews/2b7/skateboard-spring-air-1467676.jpg?fmt=webp&w=350",
      
    },
    {
      title: "Banana",
      img: "https://images.freeimages.com/images/large-previews/442/mart-2-1506475.jpg?fmt=webp&w=350",
     
    },
    {
      title: "Watermelon",
      img: "https://images.freeimages.com/images/large-previews/0bc/japa-1481276.jpg?fmt=webp&w=350",
     
    },
  ];

  return (
    <section className="flex flex-col justify-center py-10" >
    <div className="gap-2 grid grid-cols-5 items-center  sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width=""
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div></section>
  );
}
