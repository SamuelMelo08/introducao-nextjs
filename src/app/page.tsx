import NavBar from "@/components/NavBar";
import CardSection from "@/components/CardSection";
import PlaceForm from "@/components/PlaceForm";
import Card from "@/components/Card";

export default function Home() {
	
	const cardProps = [
		{
			title: "Palmeira Camedórea",
			description: "A palmeira Camedórea é uma palmeira de fácil cuidado, tropical e é conhecida por seu poder de purificar o ar.",
			imageUrl: "https://nordicgreen.com.br/cdn/shop/products/Chamaedorea-Freia-Cachepo-Pequeno-Branco.jpg?v=1658321058",
			category: "Planta"
		},
		{
			title: "Tostão Rosa",
			description: "A planta Tostão Rosa ou dinheiro em penca apresenta lindas e pequenas folhas verdes e rosa.",
			imageUrl: "https://nordicgreen.com.br/cdn/shop/files/Tostao-rosa-Freia-Cachepo-Pequeno-Branco.jpg?v=1726082853",
			category: "Planta"
		},
		{
			title: "Maranta Tricolor",
			description: "Maranta Tricolor é uma planta linda que dará um charme em sua casa. Também conhecida como planta Calatéia Triostar, a Maranta tricolor pertence à família de plantas de oração. ",
			imageUrl: "https://nordicgreen.com.br/cdn/shop/products/OdinSmallWhite-Plant_Tricolor_Medium_24ae5fb4-54f9-4e19-b7ab-4be7ac73171a.jpg?v=1674398581",
			category: "Planta"
		},
		{
			title: "Grou Coroado",
			description: "O grou coroado (Balearica pavonina), também chamado de grou-de-crista-preta, é uma ave africana conhecida pela coroa de penas douradas no topo da cabeça. ",
			imageUrl: "https://avesornamentaisjej.cdn.magazord.com.br/img/2024/03/produto/460/78-grou-coroado-5.png?ims=600x600",
			category: "Ave"
		},
		{
			title: "Faisão Nepal Crista Branca",
			description: "O faisão Nepal Crista Branca (Lophura leucomelanos hamiltoni) é uma subespécie originária das montanhas do Nepal. ",
			imageUrl: "https://avesornamentaisjej.cdn.magazord.com.br/img/2024/03/produto/283/41-faisao-nepal-crista-branca.png?ims=600x600",
			category: "Ave"
		},
		{
			title: "Faisão Dourado",
			description: "O faisão dourado é uma das aves ornamentais mais populares do mundo. ",
			imageUrl: "https://avesornamentaisjej.cdn.magazord.com.br/img/2024/03/produto/268/37-faisao-dourado-2.png?ims=600x600",
			category: "Ave"
		},
		
	]

  return (
    <div className="">

    	<NavBar links={
			[
				{label: 'Inicio', href: "/"},
				{label: 'Server Client', href: "/server-client"},
				{label: 'Produtos', href: "/products"},
				{label: 'Dogs', href: '/dogs'},
				{label: 'Map', href: '/map'},
				{label: 'FeedBacks', href: '/feedbacks'}
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
				<h1 className="font-bold text-[30px] text-[#576f2e]"> Catálogo de plantas e aves: </h1>
			</div>
			
			<div className="flex justify-center items-center gap-10 flex-wrap py-10">
				{cardProps.map((card, index) => (

					<Card key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} category={card.category} />

				))}


			</div>

    </div>
  );
}
