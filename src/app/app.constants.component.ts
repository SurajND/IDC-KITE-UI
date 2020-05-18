export const KiteAdminNavConstants = [
    {

        linkText: 'Dashboard',
        navigateTo: ['/home-component/dashboard'],
        icon: 'dashboard',
        subMenu: null
    },
    {
        linkText: 'Reports',
        navigateTo: ['/home-component/reports'],
        icon: 'assessment',
        subMenu: [
            {
                linkText: "Level 1",
                navigateTo: ['/home-component/reports/level1']
            },
            {
                linkText: "Level 2",
                navigateTo: ['/home-component/reports/level2']
            }
        ]
    },
    {

        linkText: 'Manage Account',
        navigateTo: ['/home-component/manage-account'],
        icon: 'account_balance',
        subMenu: [
            {
                linkText: "Opcos",
                navigateTo: ['/home-component/manage-account/opcos']
            },
            {
                linkText: "Projects",
                navigateTo: ['/home-component/manage-account/projects']
            },
            {
                linkText: "Key Indicators",
                navigateTo: ['/home-component/manage-account/keyIndicators']
            },
            {
                linkText: "Users",
                navigateTo: ['/home-component/manage-account/users']
            }
        ]
    }

];

export const KiteUserNavConstants = [
    {
        linkText: 'Dashboard',
        navigateTo: ['/home-component/dashboard'],
        icon: 'dashboard',
        subMenu: null
    },
    {
        linkText: 'Reports',
        navigateTo: ['/home-component/reports'],
        icon: 'assessment',
        subMenu: [
            {
                linkText: "Level 1",
                navigateTo: ['/home-component/reports/level1']
            },
            {
                linkText: "Level 2",
                navigateTo: ['/home-component/reports/level2']
            }
        ]
    },
    {
        linkText: 'Status Update',
        navigateTo: ['/home-component/status-update'],
        icon: 'update',
        subMenu: null
    }
]