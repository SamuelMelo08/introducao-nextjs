import Image from "next/image"

interface NavBarContent {
    links: {
      label: string;
      href: string;
    }[]
}

export default function NavBar({links}:NavBarContent) {

    return (
        
        <nav className="bg-amber-200 shadow-sm">
            <div className="px-4 py-2">
                <div className="flex justify-between h-16 items-center">
        
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                          src="/nextjs-icon.svg"
                          alt="logo nextjs"
                          width={40}
                          height={40}
                        />
                        <span className="ml-2 ">NextApp</span>

                    </div>
        
                    {/* Links */}
                    <div className="flex space-x-4">
                        {
                            links.map((link, indice) => (

                                <a key={indice} className="text-lg font-medium hover:text-amber-700" href={link.href}>
                                	{link.label}
                                </a>
                                
                            ))
                        }                        
                    </div>
        
                </div>
            </div>
        </nav>
        
    )
}