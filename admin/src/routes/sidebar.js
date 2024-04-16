/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'
import CogIcon from '@heroicons/react/24/outline/CogIcon';
import WrenchIcon from '@heroicons/react/24/outline/WrenchIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/outline/ArrowUpOnSquareIcon';
import ClockIcon from '@heroicons/react/24/outline/ClockIcon';


const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  {
    path: '/app/leads', // url
    icon: <CogIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Efektivitas Produksi', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/leads', //url
        icon: <ArrowUpOnSquareIcon className={submenuIconClasses}/>, // icon component
        name: 'Production Lead Time', // name that appear in Sidebar
      },
      {
        path: '/app/produksi',
        icon: <ClockIcon className={submenuIconClasses}/>,
        name: 'Waktu Baku Produksi',
      },
    ] 
  },
  {
    path: '/app/mesin', // url
    icon: <WrenchIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Utilitas Mesin', // name that appear in Sidebar 
  },
  {
    path: '', //no url needed as this has submenu
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Pages', // name that appear in Sidebar
    submenu : [
      {
        path: '/login',
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
        name: 'Login',
      },
      {
        path: '/register', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Register', // name that appear in Sidebar
      },
    ]
  },
  
]

export default routes
