export default [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/dashboard/index'),
    },
    {
        path: '/email/inbox',
        name: 'Email Inbox',
        component: () => import('./views/email/inbox/index')
    },
    {
        path: '/email/read',
        name: 'Email read',
        component: () => import('./views/email/reademail')
    },
    {
        path: '/email/compose',
        name: 'Email compose',
        component: () => import('./views/email/compose')
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('./views/calendar/index')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('./views/projects/index')
    },
    {
        path: '/pages/blank',
        name: 'Blank Page',
        component: () => import('./views/extrapages/blank')
    }, {
        path: '/pages/maintenance',
        name: 'Maintenance',
        component: () => import('./views/extrapages/maintenance')
    },
    {
        path: '/pages/timeline',
        name: 'Timeline',
        component: () => import('./views/extrapages/timeline')
    },
    {
        path: '/pages/faqs',
        name: 'FAQs',
        component: () => import('./views/extrapages/faqs')
    },
    {
        path: '/pages/pricing',
        name: 'Pricing',
        component: () => import('./views/extrapages/pricing/index')
    },
    {
        path: '/pages/invoice',
        name: 'Invoice',
        component: () => import('./views/extrapages/invoice')
    },
    {
        path: '/pages/404',
        name: 'Error-404',
        component: () => import('./views/extrapages/404')
    },
    {
        path: '/pages/500',
        name: 'Error-500',
        component: () => import('./views/extrapages/500')
    },
    {
        path: '/ecommerce/products',
        name: 'Products',
        component: () => import('./views/ecommerce/products/index')
    },
    {
        path: '/ecommerce/products-list',
        name: 'Products list',
        component: () => import('./views/ecommerce/productslist/index')
    },
    {
        path: '/ecommerce/order-history',
        name: 'Order History',
        component: () => import('./views/ecommerce/order-history/index')
    },
    {
        path: '/ecommerce/product-edit',
        name: 'Product edit',
        component: () => import('./views/ecommerce/product-edit')
    },
    {
        path: '/ecommerce/customers',
        name: 'Customers',
        component: () => import('./views/ecommerce/customers/index')
    },
    {
        path: '/email-template/basic',
        name: 'Basic Action Email',
        component: () => import('./views/email-template/basic')
    },
    {
        path: '/email-template/alert',
        name: 'Alert Email',
        component: () => import('./views/email-template/alert')
    },
    {
        path: '/email-template/billing',
        name: 'Billing Email',
        component: () => import('./views/email-template/billing')
    },
    {
        path: '/ui/alerts',
        name: 'Alerts',
        component: () => import('./views/ui/alerts')
    },
    {
        path: '/ui/buttons',
        name: 'Buttons',
        component: () => import('./views/ui/buttons')
    },
    {
        path: '/ui/cards',
        name: 'Cards',
        component: () => import('./views/ui/cards')
    },
    {
        path: '/ui/carousel',
        name: 'Carousel',
        component: () => import('./views/ui/carousel')
    },
    {
        path: '/ui/grid',
        name: 'Grid',
        component: () => import('./views/ui/grid')
    },
    {
        path: '/ui/images',
        name: 'Images',
        component: () => import('./views/ui/images')
    },
    {
        path: '/ui/modals',
        name: 'Modals',
        component: () => import('./views/ui/modals')
    },
    {
        path: '/ui/rangeslider',
        name: 'Rangeslider',
        component: () => import('./views/ui/rangeslider')
    },
    {
        path: '/ui/sweet-alert',
        name: 'Sweet-alert',
        component: () => import('./views/ui/sweet-alert')
    },
    {
        path: '/ui/tabs-accordions',
        name: 'Tabs-accordions',
        component: () => import('./views/ui/tabs-accordions')
    },
    {
        path: '/ui/typography',
        name: 'Typography',
        component: () => import('./views/ui/typography')
    },
    {
        path: '/ui/general',
        name: 'General',
        component: () => import('./views/ui/general')
    },
    {
        path: '/form/advanced',
        name: 'Form Advanced',
        
        component: () => import('./views/forms/advanced')
    },
    {
        path: '/form/elements',
        name: 'Form Elements',
        component: () => import('./views/forms/elements')
    },
    {
        path: '/form/editor',
        name: 'CK Editor',
        component: () => import('./views/forms/ckeditor')
    },
    {
        path: '/form/uploads',
        name: 'File Uploads',
        component: () => import('./views/forms/uploads')
    },
    {
        path: '/form/validation',
        name: 'Form Validation',
        component: () => import('./views/forms/validation')
    },
    {
        path: '/form/wizard',
        name: 'Form Wizard',
        component: () => import('./views/forms/wizard')
    },
    {
        path: '/form/mask',
        name: 'Form Mask',
        component: () => import('./views/forms/mask')
    },
    {
        path: '/charts/apex',
        name: 'Apex chart',
        
        component: () => import('./views/charts/apex/index')
    },
    {
        path: '/charts/chartjs',
        name: 'Chartjs chart',
        
        component: () => import('./views/charts/chartjs/index')
    },
    {
        path: '/charts/echart',
        name: 'Echart chart',
        
        component: () => import('./views/charts/echart/index')
    },
    {
        path: '/charts/chartist',
        name: 'Chartist chart',
        
        component: () => import('./views/charts/chartist/index')
    },
    {
        path: '/icons/themify',
        name: 'themify Icon',
        component: () => import('./views/icons/themify')
    },
    {
        path: '/icons/materialdesign',
        name: 'Materialdesign Icon',
        component: () => import('./views/icons/materialdesign')
    },
    {
        path: '/icons/ion',
        name: 'Ion Icon',
        component: () => import('./views/icons/ion')
    },
    {
        path: '/icons/dripicons',
        name: 'Dripicons Icon',
        component: () => import('./views/icons/dripicons')
    },
    {
        path: '/icons/fontawesome',
        name: 'Fontawesome Icon',
        component: () => import('./views/icons/fontawesome')
    },
    {
        path: '/tables/basictable',
        name: 'Basic Tables',
        component: () => import('./views/tables/basictable')
    },
    {
        path: '/tables/advancedtable',
        name: 'Advanced Tables',
        component: () => import('./views/tables/advanced/index')
    },
    {
        path: '/maps/google',
        name: 'Google Maps',
        component: () => import('./views/maps/google')
    },
    {
        path: '/pages/login-1',
        name: 'Login-1',
        component: () => import('./views/sample-pages/login-1')
    },
    {
        path: '/pages/login-2',
        name: 'Login-2',
        component: () => import('./views/sample-pages/login-2')
    },
    {
        path: '/pages/register-1',
        name: 'Register-1',
        component: () => import('./views/sample-pages/register-1')
    },
    {
        path: '/pages/register-2',
        name: 'Register-2',
        component: () => import('./views/sample-pages/register-2')
    },
    {
        path: '/pages/recoverpwd-1',
        name: 'Recover password-1',
        component: () => import('./views/sample-pages/recoverpwd-1')
    },
    {
        path: '/pages/recoverpwd-2',
        name: 'Recover password-2',
        component: () => import('./views/sample-pages/recoverpwd-2')
    },
    {
        path: '/pages/lockscreen-1',
        name: 'lockscreen-1',
        component: () => import('./views/sample-pages/lockscreen-1')
    },
    {
        path: '/pages/lockscreen-2',
        name: 'lockscreen-2',
        component: () => import('./views/sample-pages/lockscreen-2')
    },
]