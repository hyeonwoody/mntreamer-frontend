

interface ButtonProps {
    text : string
    onClick? : () => void
}

const Button = (props : ButtonProps) => {
    return (
        <>
        <button 
        className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium bg-[#1a1a1a] cursor-pointer transition-colors duration-250 hover:border-[#646cff] focus:outline-none focus:ring-4 focus:ring-[#646cff] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#646cff]"
        onClick={props.onClick}>
  {props.text}
</button>
        </>
    )
}

export default Button;