import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      <NavBar names={["Inicio","Recursos","Contatos"]} links={['#','#','#']} img="/nextjs-icon.svg" text="NextApp"/>
      

    </div>
  );
}
