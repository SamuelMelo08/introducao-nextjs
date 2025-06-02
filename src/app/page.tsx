import NavBar from "@/components/NavBar";


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

    </div>
  );
}
