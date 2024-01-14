"use server"
type ButtonProps = {
    title: string,
    type: 'button' | 'submit',
    icon?: any,
    varient: 'btn_dark_yellow'
}

const Button = ({icon, title, type, varient}: ButtonProps) => {
  return (
    <button type = {type} className={`flexCenter gap-2 rounded-full border ${varient}`}>
        {icon}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button