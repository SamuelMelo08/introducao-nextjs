import Image from "next/image"

interface NavBarContent {
    names: string[]
    links: string[]
}

export default function NavBar(props:NavBarContent) {

    return (
        
        <nav className="bg-amber-200 shadow-sm">
                <div className="px-4 py-2">
                  <div className="flex justify-between h-16 items-center">
        
                      <div className="flex items-center">
                        <Image
                          src="/nextjs-icon.svg"
                          alt="logo nextjs"
                          width={40}
                          height={40}
                        />
                        <span className="ml-2 ">NextApp</span>
                      </div>
        
                      <div className="flex space-x-4">
                        {
                            props.names.map((name, link) => (
                            
                                <a className="text-lg font-medium hover:text-amber-700 hover:font-bold" href={props.links[link]}>
                                {name}
                                </a>

                                
                            ))
                        }                        
                      </div>
        
                  </div>
                </div>
        </nav>
            
        
        
    )
}