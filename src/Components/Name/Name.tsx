import './Name.css'
interface Props{
    colorMode: string;
}

function Name(props: Props) {
    const {colorMode} = props

    return (
        <div className='nameComponent'>
            {colorMode=="black"?
            <img src="/icons/nameOrange.png" alt="arrow"/>
            :
            <img src="/icons/name.png" alt="arrow"/>
            }
        </div>
    )
}

export default Name
