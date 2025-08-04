import NavBar from "@/components/NavBar";
import CardSection from "@/components/CardSection";
import PlaceForm from "@/components/PlaceForm";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="">

    	<NavBar links={
			[
				{label: 'Inicio', href: "/"},
				{label: 'Server Client', href: "/server-client"},
				{label: 'Produtos', href: "/products"},
				{label: 'Dogs', href: '/dogs'},
				{label: 'Map', href: '/map'}
			]
			}/>
		
		<CardSection content={
			[
			{icon: "nextjs-icon.svg", title: "Titulo qualquer", subTitle: "Vou fazer um card ou já estou fazendo"},
			{icon: "nextjs-icon.svg", title: "Outro Titulo qualquer", subTitle: "Vou fazer um card ou já estou fazendo"},
			{icon: "nextjs-icon.svg", title: "Mais Titulo qualquer", subTitle: "Vou fazer um card ou já estou fazendo"}
			
			]
			}/>
			
			<div className="flex justify-center items-center">

				<Card title="Esse é um card" description="Esse é um card que estou testando" imageUrl="/image.jpg" />

			</div>

    </div>
  );
}
