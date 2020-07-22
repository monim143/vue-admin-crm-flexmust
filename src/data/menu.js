/*
 * Main and demo navigation arrays
 */
const routeModule = (name, icon, path, menu = []) => {
    let sub = [];
    menu.forEach(function (item) {
        sub.push({
            name: item,
            to: '/' + path + '/' + item
        });
    })

    return {
        name: name,
        icon: 'fa fa-1x ' + icon,
        subActivePaths: '/' + path,
        sub: sub
    }
}
let childList = ['add', 'list'];
export default {
    'main': [
        {
            name: 'Main',
            heading: true
        },
        {
            name: 'Dashboard',
            to: '/',
            icon: 'si si-speedometer'
        },

        routeModule('Contacts', 'fa-address-book', 'contacts', childList),
        routeModule('Leads', 'fa-bullhorn', 'leads', childList),
        routeModule('Projects', 'fa-layer-group', 'projects', childList),

        {
            name: 'Sales',
            heading: true
        },
        routeModule('Quotes/Estimates', 'fa-calculator', 'quotes', childList),
        routeModule('Invoices', 'fa-file-invoice', 'invoices', childList),

        {
            name: 'User Management',
            heading: true
        },
        routeModule('Users', 'fa-user-tie', 'users', childList),
        routeModule('Roles', 'fa-user-circle', 'roles', childList),

        {
            name: 'Settings',
            heading: true
        },
        {
            name: 'Site Info',
            to: '/site-info/',
            icon: 'fa fa-1x fa-cogs',
            subActivePaths: '/sites',
        },

        routeModule('Currency', 'fa-hand-holding-usd', 'currencies', childList),
        routeModule('Payment Method', 'si fa-1x si-credit-card', 'payment-methods', childList),
    ]
}
