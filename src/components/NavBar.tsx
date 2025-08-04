import Image from "next/image"

interface NavBarContent {
    links: {
      label: string;
      href: string;
    }[]
}

export default function NavBar({links}:NavBarContent) {

    return (
        
        <nav className="bg-[#384257] shadow-sm">
            <div className="px-4">
                <div className="flex justify-between h-16 items-center ml-5">
        
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                          src="/nextjs-icon.svg"
                          alt="logo nextjs"
                          width={40}
                          height={40}
                          className="bg-white rounded-full"
                        />
                        <span className="ml-2 text-white">NextApp</span>

                    </div>
        
                    {/* Links */}
                    <div className="flex space-x-10 mr-10 text-white">
                        {
                            links.map((link, indice) => (

                                <a key={indice} className="text-lg font-medium hover:text-gray-500" href={link.href}>
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