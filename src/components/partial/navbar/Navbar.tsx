import profileImage from '../../../assets/img/profile-image.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear,faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

    return (
        <div className="w-full border-b bg-white flex items-center justify-center " >

            <div className="max-w-7xl w-full m-auto  p-3  flex items-center justify-between  ">
                <div className="flex items-center gap-3">
                    <span className="text-gray-500 ">  <FontAwesomeIcon icon={faSearch} />  </span>
                    <input placeholder="ابحث هنا" type="text" className="w-[300px] rounded-md bg-gray-100 p-2 " name="" id="" />
                </div>
            </div>

            <div className="flex items-center justify-between p-3 gap-2 gap-x-4">
                    <a href="" className='text-base text-gray-500 hover:text-gray-900 transition-all'> <FontAwesomeIcon icon={faGear} /> </a>

                    <a href="/profile"> <img src={profileImage} alt="" className="w-10 h-10 rounded-full" /> </a>
            </div>
        </div>
    )
}

export default Navbar;