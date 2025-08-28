type props = {

    isDark: boolean
    onToggle: () => void

}

export default function Toggle({isDark, onToggle}: props) {

    return (

        <button className={` px-6 py-2 rounded transition-all duration-400
                            ${isDark ? "bg-white text-black" : "bg-black text-white"}
            `}
                onClick={() => onToggle()}
        >

            Toggle {isDark ? "Light" : "Black"}

        </button>

    )

}