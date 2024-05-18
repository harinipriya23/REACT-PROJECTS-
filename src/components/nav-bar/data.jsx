
export const menus = [
    {
        id:'1',
        label: 'Home',
        to:'/',
    },
    {
        id:'2',
        label:'Profile',
        to:'/profile',
        children: [
            {
                label:'Details',
                to:'details',
                children: [
                    {
                        label: 'Location',
                        to:'location',
                    },
                ],
            },
        ],
    },
    {
        id:'3',
        label:'Settings',
        to:'/settings',
        children:[
            {
                label:'Account',
                to:'account',
            },
            {
                label:'Security',
                to:'security',
                children:[
                    {
                        label:'Login',
                        to:'login',
                    },
                    {
                        label:'Register',
                        to:'register',
                    },
                ],
            },
        ],
    },
    
];

export default menus;