
export default function ThemeToggle() {

    return (
        <button onClick={() => {
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
        }}>Mudar Tema</button>
    )
}