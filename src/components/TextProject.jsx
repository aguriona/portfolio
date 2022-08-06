import React from "react";
import ButtonBack from "../components/buttons/ButtonBack";
import ButtonProject from "./buttons/ButtonProject";
import SocialProjects from '../views/SocialProjects'

export default function TextProject() {
  return (
    <div>
      <ButtonBack />
      <h1 className="font-paragraph text-colortitle font-bold pl-4 pt-4 text-3xl">
        Eccomerce Pets Club
      </h1>
      <div className="font-title text-base text-colorparagraph pt-4 pl-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ullam deserunt earum error, sapiente, consequatur molestiae vitae ex
          expedita molestias temporibus sit laboriosam dolore voluptatem cumque
          beatae atque eius. Itaque! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ducimus hic repudiandae beatae, atque facere
          obcaecati, placeat dolore, ullam nesciunt corrupti ipsam dignissimos
          aperiam sint quia reiciendis et reprehenderit itaque dolorem! lorem
        </p>
      </div>
      <SocialProjects />
      <ButtonProject />
    </div>
  );
}
