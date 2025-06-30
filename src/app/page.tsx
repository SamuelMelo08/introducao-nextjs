import NavBar from "@/components/NavBar";
import Card from "@/components/CardSection";
import CardSection from "@/components/CardSection";
import PlaceForm from "@/components/PlaceForm";

export default function Home() {
  return (
    <div className="">

    	<NavBar links={
			[
				{label: 'Inicio', href: "/"},
				{label: 'Server Client', href: "/server-client"},
				{label: 'Produtos', href: "/products"}
			]
			}/>
		
		<CardSection content={
			[
			{icon: "nextjs-icon.svg", title: "Titulo qualquer", subTitle: "Vou fazer um card ou já estou fazendo"},
			{icon: "nextjs-icon.svg", title: "Outro Titulo qualquer", subTitle: "Vou fazer um card ou já estou fazendo"},
			{icon: "nextjs-icon.svg", title: "Mais Titulo qualquer", subTitle: "Vou fazer um card ou já estou fazendo"}
			
			]
			}/>

			<div className="flex justify-center" >
				<PlaceForm/>
			</div>
			

    </div>
  );
}
