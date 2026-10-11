import { Link, type LinkProps, useLocation} from "react-router-dom"

type HeaderButtonProps = {
  children: React.ReactNode
} & LinkProps

function HeaderButton({ children, to, ...props }: HeaderButtonProps) {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link
        to={to}
        {...props}
        className={`rounded px-5 py-2 font-mono transition-all duration-300 hover:backdrop-brightness-180 hover:text-amber-300 ${
        isActive
          ? "text-violet-500"   // active style
          : "text-zinc-400 " // default style
      }`}
    >
            {children}
        </Link>
    )
}
export default HeaderButton