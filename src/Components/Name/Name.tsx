import './Name.css'
interface Props{
    colorMode: string;
}

function Name(props: Props) {
    const {colorMode} = props

    return (
        <div className='nameComponent'>
            {colorMode=="black"?
            <img  className="orangeName" src="/icons/nameOrange.png" alt="arrow"/>
            :
            <img className="blackName" src="/icons/name.png" alt="arrow"/>
            }
        </div>
    )
}

export default Name
