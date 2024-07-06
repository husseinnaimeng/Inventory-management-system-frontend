import './Sidebar.css';
import { useEffect , useRef } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faBox,faDollarSign} from '@fortawesome/free-solid-svg-icons';

type sidebarLinkProps = {
    text:string,
    link:string,
    icon?:any,
    children?:any
}


const SidebarLink = (options : sidebarLinkProps) => {

    var is_active = options.link === window.location.pathname;

    return (
        <div className={`flex items-center  gap-3  p-2 w-full rounded ${is_active  ? 'bg-gray-800 text-white' : 'text-gray-300'}` } >
            {options.icon}
            <a  href={options.link} className={`} `} >  {options.text} </a>
        </div>

    )

    

}

const Sidebar = () => {
    const asideRef = useRef(null);

    useEffect(()=>{

        if(asideRef.current){
            gsap.fromTo(asideRef.current,{position:'absolute',right:'-100%'},{right:'0'})
        }

    },[])

    return (
    <aside ref={asideRef} className="sidebar bg-gray-950">
        <h1 className="text-base border-gray-800 p-4 border-b mb-3t text-gray-300"> أدارة المخزون </h1>

        <ul className="p-3 flex flex-col gap-2">
            <SidebarLink icon={<FontAwesomeIcon icon={faHome} />} link='/' text='الرئيسية' />
            <SidebarLink icon={<FontAwesomeIcon icon={faBox} />} link='/add-product' text='المنتجات' />
            <SidebarLink link='/finance' icon={<FontAwesomeIcon icon={faDollarSign} />} text='المالية' />

        </ul>
    </aside>
    )

}

export default Sidebar 
