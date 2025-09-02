import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import ViewListIcon from '@mui/icons-material/ViewList';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SettingsIcon from '@mui/icons-material/Settings';

export const routesLinks = [
    {
        route: 'Dashboard',
        path: '/',
        icon: <DashboardIcon style={{fontSize: '19px'}} />
    },{
        route: 'Product',
        icon: <CategoryIcon style={{fontSize: '19px'}} />,
        subRoute: [
            {
                linkTxt: 'All Product',
                path: '/allProducts'
            },{
                linkTxt: 'Add Product',
                path: '/addProducts'
            },{
                linkTxt: 'Edite Product',
                path: '/editeProducts'
            }
        ]
    },{
        route: 'Users',
        icon: <PersonIcon style={{fontSize: '19px'}} />,
        subRoute: [
            {
                linkTxt: 'All Users',
                path: '/allUsers'
            }, {
                linkTxt: 'Add User',
                path: '/addUser'
            }
        ]
    },{
        route: 'Orders',
        icon: <ViewListIcon style={{fontSize: '19px'}} />,
        subRoute: [
            {
                linkTxt: 'All Orders',
                path: '/allOrders'
            }, {
                linkTxt: 'Manage Orders',
                path: '/manageOrders'
            }
        ]
    },{
        route: 'Reviews',
        path: "reviews",
        icon: <ReviewsIcon style={{fontSize: '19px'}} />
    },{
        route: "Settings",
        path: "settings",
        icon: <SettingsIcon style={{fontSize: '19px'}} />
    }
]