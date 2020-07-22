/*
 * Default Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Main layouts
import LayoutBackend from '@/layouts/variations/Backend.vue'
import LayoutSimple from '@/layouts/variations/Simple.vue'
import DetailsPage from "../views/pages/DetailsPage";

// Register Vue Router
Vue.use(Router)

// Frontend: Landing
//const Landing = () => import("@/views/Landing.vue")

// Backend: General
const Dashboard = () => import(/* webpackChunkName: "pages-dashboard", webpackPrefetch: true */"@/views/Dashboard.vue")

// Backend: Blocks
const BlockStyles = () => import("@/views/blocks/Styles.vue")
const BlockOptions = () => import("@/views/blocks/Options.vue")
const BlockForms = () => import("@/views/blocks/Forms.vue")
const BlockThemed = () => import("@/views/blocks/Themed.vue")
const BlockApi = () => import("@/views/blocks/Api.vue")

// Backend: Elements
const ElementsGrid = () => import("@/views/elements/Grid.vue")
const ElementsTypography = () => import("@/views/elements/Typography.vue")
const ElementsIcons = () => import("@/views/elements/Icons.vue")
const ElementsButtons = () => import("@/views/elements/Buttons.vue")
const ElementsButtonGroups = () => import("@/views/elements/ButtonGroups.vue")
const ElementsDropdowns = () => import("@/views/elements/Dropdowns.vue")
const ElementsTabs = () => import("@/views/elements/Tabs.vue")
const ElementsNavigation = () => import("@/views/elements/Navigation.vue")
const ElementsNavigationHorizontal = () => import("@/views/elements/NavigationHorizontal.vue")
const ElementsProgress = () => import("@/views/elements/Progress.vue")
const ElementsAlerts = () => import("@/views/elements/Alerts.vue")
const ElementsTooltips = () => import("@/views/elements/Tooltips.vue")
const ElementsPopovers = () => import("@/views/elements/Popovers.vue")
const ElementsModals = () => import("@/views/elements/Modals.vue")
const ElementsImages = () => import("@/views/elements/Images.vue")
const ElementsTimeline = () => import(/* webpackChunkName: "elements-timeline" */"@/views/elements/Timeline.vue")
const ElementsRibbons = () => import("@/views/elements/Ribbons.vue")
const ElementsAnimations = () => import("@/views/elements/Animations.vue")
const ElementsColorThemes = () => import("@/views/elements/ColorThemes.vue")

// Backend: Tables
const TablesStyles = () => import("@/views/tables/Styles.vue")
const TablesResponsive = () => import("@/views/tables/Responsive.vue")
const TablesHelpers = () => import("@/views/tables/Helpers.vue")
const TablesPricing = () => import("@/views/tables/Pricing.vue")

// Backend: Forms
const FormsElements = () => import("@/views/forms/Elements.vue")
const FormsCustomControls = () => import("@/views/forms/CustomControls.vue")
const FormsLayouts = () => import("@/views/forms/Layouts.vue")
const FormsInputGroups = () => import("@/views/forms/InputGroups.vue")
const FormsPlugins = () => import(/* webpackChunkName: "forms-plugins" */"@/views/forms/Plugins.vue")
const FormsEditors = () => import(/* webpackChunkName: "forms-editors" */"@/views/forms/Editors.vue")
const FormsValidation = () => import(/* webpackChunkName: "forms-validation" */"@/views/forms/Validation.vue")

// Backend: Plugins
const PluginsImageCropper = () => import(/* webpackChunkName: "plugins-image-cropper" */"@/views/plugins/ImageCropper.vue")
const PluginsCharts = () => import(/* webpackChunkName: "plugins-charts" */"@/views/plugins/Charts.vue")
const PluginsCalendar = () => import(/* webpackChunkName: "plugins-calendar" */"@/views/plugins/Calendar.vue")
const PluginsCarousel = () => import("@/views/plugins/Carousel.vue")
const PluginsSyntaxHighlighting = () => import(/* webpackChunkName: "plugins-syntax-highlighting" */"@/views/plugins/SyntaxHighlighting.vue")
const PluginsRating = () => import(/* webpackChunkName: "plugins-rating" */"@/views/plugins/Rating.vue")
const PluginsDialogs = () => import(/* webpackChunkName: "plugins-dialogs" */"@/views/plugins/Dialogs.vue")
const PluginsNotifications = () => import("@/views/plugins/Notifications.vue")
const PluginsGallery = () => import(/* webpackChunkName: "plugins-gallery" */"@/views/plugins/Gallery.vue")

// Backend: Layout
const LayoutPageDefault = () => import("@/views/layout/page/Default.vue")
const LayoutPageFlipped = () => import("@/views/layout/page/Flipped.vue")
const LayoutMainContentFullWidth = () => import("@/views/layout/main-content/FullWidth.vue")
const LayoutMainContentNarrow = () => import("@/views/layout/main-content/Narrow.vue")
const LayoutMainContentBoxed = () => import("@/views/layout/main-content/Boxed.vue")
const LayoutHeaderFixedLight = () => import("@/views/layout/header/FixedLight.vue")
const LayoutHeaderFixedDark = () => import("@/views/layout/header/FixedDark.vue")
const LayoutHeaderStaticLight = () => import("@/views/layout/header/StaticLight.vue")
const LayoutHeaderStaticDark = () => import("@/views/layout/header/StaticDark.vue")
const LayoutSidebarMini = () => import("@/views/layout/sidebar/Mini.vue")
const LayoutSidebarLight = () => import("@/views/layout/sidebar/Light.vue")
const LayoutSidebarDark = () => import("@/views/layout/sidebar/Dark.vue")
const LayoutSidebarHidden = () => import("@/views/layout/sidebar/Hidden.vue")
const LayoutSideOverlayVisible = () => import("@/views/layout/side-overlay/Visible.vue")
const LayoutSideOverlayHoverMode = () => import("@/views/layout/side-overlay/HoverMode.vue")
const LayoutSideOverlayNoPageOverlay = () => import("@/views/layout/side-overlay/NoPageOverlay.vue")
const LayoutLoaders = () => import("@/views/layout/Loaders.vue")
const LayoutApi = () => import("@/views/layout/Api.vue")

// Backend: Generic Pages
const PagesGenericBlank = () => import("@/views/pages/generic/Blank.vue")
const PagesGenericBlankBlock = () => import("@/views/pages/generic/BlankBlock.vue")
const PagesGenericSearch = () => import("@/views/pages/generic/Search.vue")
const PagesGenericProfile = () => import("@/views/pages/generic/Profile.vue")
const PagesGenericInvoice = () => import("@/views/pages/generic/Invoice.vue")
const PagesGenericFaq = () => import("@/views/pages/generic/Faq.vue")


// Backend: Auth Pages
const PagesAuthAll = () => import("@/views/pages/auth/All.vue")

// Backend: Error Pages
const PagesErrorsAll = () => import("@/views/pages/errors/All.vue")

// Pages: Auth
const AuthSignIn = () => import(/* webpackChunkName: "auth-signin" */"@/views/pages/auth/SignIn.vue")
const AuthSignIn2 = () => import(/* webpackChunkName: "auth-signin2" */"@/views/pages/auth/SignIn2.vue")
const AuthSignUp = () => import(/* webpackChunkName: "auth-signup" */"@/views/pages/auth/SignUp.vue")
const AuthSignUp2 = () => import(/* webpackChunkName: "auth-signup2" */"@/views/pages/auth/SignUp2.vue")
const AuthLock = () => import(/* webpackChunkName: "auth-lock" */"@/views/pages/auth/Lock.vue")
const AuthLock2 = () => import(/* webpackChunkName: "auth-lock2" */"@/views/pages/auth/Lock2.vue")
const AuthReminder = () => import(/* webpackChunkName: "auth-reminder" */"@/views/pages/auth/Reminder.vue")
const AuthReminder2 = () => import(/* webpackChunkName: "auth-reminder2" */"@/views/pages/auth/Reminder2.vue")

//Pages: Common
const ListPage = () => import("@/views/pages/ListPage.vue")
const AddPage = () => import("@/views/pages/AddPage.vue")

const routeMenu = (path, component) => {
    let page = DetailsPage;
    if (path == 'list') {
        page = ListPage;
    } else if (path == 'add') {
        page = AddPage;
    }
    return {
        path: path,
        name: component,
        component: page,
        props: {component: component}
    };
}
const routeModule = (path, component, menu = []) => {
    let children = [];
    menu.forEach(function (item) {
        children.push(routeMenu(item, component));
    })

    return {
        path: path,
        redirect: '/' + path + '/list',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: children,
    };
}
let childList = ['add', 'list', 'details'];
// Router Configuration
export default new Router({
    mode: 'history',
    hash: false,
    linkActiveClass: 'active',
    linkExactActiveClass: '',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [
        {
            path: '/auth',
            component: LayoutSimple,
            children: [
                {
                    path: 'signin',
                    name: 'Sign In',
                    component: AuthSignIn
                },
                {
                    path: 'signin2',
                    name: 'Sign In 2',
                    component: AuthSignIn2
                },
                {
                    path: 'signup',
                    name: 'Sign Up',
                    component: AuthSignUp
                },
                {
                    path: 'signup2',
                    name: 'Sign Up 2',
                    component: AuthSignUp2
                },
                {
                    path: 'lock',
                    name: 'Auth Lock',
                    component: AuthLock
                },
                {
                    path: 'lock2',
                    name: 'Auth Lock 2',
                    component: AuthLock2
                },
                {
                    path: 'reminder',
                    name: 'Auth Reminder',
                    component: AuthReminder
                },
                {
                    path: 'reminder2',
                    name: 'Auth Reminder 2',
                    component: AuthReminder2
                }
            ]
        },
        {
            path: '/',
            component: LayoutBackend,
            children: [
                {
                    path: '/',
                    name: 'Dashboard',
                    component: Dashboard
                },

                routeModule('contacts', 'contact', childList),
                routeModule('leads', 'lead', ['add', 'list']),
                routeModule('projects', 'project', childList),
                routeModule('quotes', 'quote', childList),
                routeModule('invoices', 'invoice', childList),
                routeModule('users', 'user', childList),
                routeModule('roles', 'role', ['add', 'list']),
                {
                    path: 'site-info',
                    name: 'Site Info',
                    component: AddPage
                },
                routeModule('currencies', 'currency', ['add', 'list']),
                routeModule('payment-methods', 'payment-method', ['add', 'list']),

                {
                    path: 'blocks',
                    redirect: '/blocks/styles',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'styles',
                            name: 'Block Styles',
                            component: BlockStyles
                        },
                        {
                            path: 'options',
                            name: 'Block Options',
                            component: BlockOptions
                        },
                        {
                            path: 'forms',
                            name: 'Block Forms',
                            component: BlockForms
                        },
                        {
                            path: 'themed',
                            name: 'Block Themed',
                            component: BlockThemed
                        },
                        {
                            path: 'api',
                            name: 'Block API',
                            component: BlockApi
                        }
                    ]
                },
                {
                    path: 'elements',
                    redirect: '/elements/grid',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'grid',
                            name: 'Elements Grid',
                            component: ElementsGrid
                        },
                        {
                            path: 'typography',
                            name: 'Elements Typography',
                            component: ElementsTypography
                        },
                        {
                            path: 'icons',
                            name: 'Elements Icons',
                            component: ElementsIcons
                        },
                        {
                            path: 'buttons',
                            name: 'Elements Buttons',
                            component: ElementsButtons
                        },
                        {
                            path: 'button-groups',
                            name: 'Elements Button Groups',
                            component: ElementsButtonGroups
                        },
                        {
                            path: 'dropdowns',
                            name: 'Elements Dropdowns',
                            component: ElementsDropdowns
                        },
                        {
                            path: 'tabs',
                            name: 'Elements Tabs',
                            component: ElementsTabs
                        },
                        {
                            path: 'navigation',
                            name: 'Elements Navigation',
                            component: ElementsNavigation
                        },
                        {
                            path: 'navigation-horizontal',
                            name: 'Elements Horizontal Navigation',
                            component: ElementsNavigationHorizontal
                        },
                        {
                            path: 'progress',
                            name: 'Elements Progress',
                            component: ElementsProgress
                        },
                        {
                            path: 'alerts',
                            name: 'Elements Alerts',
                            component: ElementsAlerts
                        },
                        {
                            path: 'tooltips',
                            name: 'Elements Tooltips',
                            component: ElementsTooltips
                        },
                        {
                            path: 'popovers',
                            name: 'Elements Popovers',
                            component: ElementsPopovers
                        },
                        {
                            path: 'modals',
                            name: 'Elements Modals',
                            component: ElementsModals
                        },
                        {
                            path: 'images',
                            name: 'Elements Images',
                            component: ElementsImages
                        },
                        {
                            path: 'timeline',
                            name: 'Elements Timeline',
                            component: ElementsTimeline
                        },
                        {
                            path: 'ribbons',
                            name: 'Elements Ribbons',
                            component: ElementsRibbons
                        },
                        {
                            path: 'animations',
                            name: 'Elements Animations',
                            component: ElementsAnimations
                        },
                        {
                            path: 'color-themes',
                            name: 'Elements Color Themes',
                            component: ElementsColorThemes
                        }
                    ]
                },
                {
                    path: 'tables',
                    redirect: '/tables/styles',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'styles',
                            name: 'Tables Styles',
                            component: TablesStyles
                        },
                        {
                            path: 'responsive',
                            name: 'Tables Responsive',
                            component: TablesResponsive
                        },
                        {
                            path: 'helpers',
                            name: 'Tables Helpers',
                            component: TablesHelpers
                        },
                        {
                            path: 'pricing',
                            name: 'Tables Princing',
                            component: TablesPricing
                        }
                    ]
                },
                {
                    path: 'forms',
                    redirect: '/forms/elements',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'elements',
                            name: 'Form Elements',
                            component: FormsElements
                        },
                        {
                            path: 'custom-controls',
                            name: 'Custom Form Controls',
                            component: FormsCustomControls
                        },
                        {
                            path: 'layouts',
                            name: 'Form Layouts',
                            component: FormsLayouts
                        },
                        {
                            path: 'input-groups',
                            name: 'Form Input Groups',
                            component: FormsInputGroups
                        },
                        {
                            path: 'plugins',
                            name: 'Form Plugins',
                            component: FormsPlugins
                        },
                        {
                            path: 'editors',
                            name: 'Form Editors',
                            component: FormsEditors
                        },
                        {
                            path: 'validation',
                            name: 'Form Validation',
                            component: FormsValidation
                        }
                    ]
                },
                {
                    path: 'plugins',
                    redirect: '/plugins/charts',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'image-cropper',
                            name: 'Image Cropper',
                            component: PluginsImageCropper
                        },
                        {
                            path: 'charts',
                            name: 'Charts',
                            component: PluginsCharts
                        },
                        {
                            path: 'calendar',
                            name: 'Calendar',
                            component: PluginsCalendar
                        },
                        {
                            path: 'carousel',
                            name: 'Carousel',
                            component: PluginsCarousel
                        },
                        {
                            path: 'syntax-highlighting',
                            name: 'Syntax Hightlighting',
                            component: PluginsSyntaxHighlighting
                        },
                        {
                            path: 'rating',
                            name: 'Rating',
                            component: PluginsRating
                        },
                        {
                            path: 'dialogs',
                            name: 'Dialogs',
                            component: PluginsDialogs
                        },
                        {
                            path: 'notifications',
                            name: 'Notifications',
                            component: PluginsNotifications
                        },
                        {
                            path: 'gallery',
                            name: 'Gallery',
                            component: PluginsGallery
                        }
                    ]
                },
                {
                    path: 'layout',
                    redirect: '/layout/api',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'page/default',
                            name: 'Layout Page Default',
                            component: LayoutPageDefault
                        },
                        {
                            path: 'page/flipped',
                            name: 'Layout Page Flipped',
                            component: LayoutPageFlipped
                        },
                        {
                            path: 'main-content/full-width',
                            name: 'Layout Main Content Full Width',
                            component: LayoutMainContentFullWidth
                        },
                        {
                            path: 'main-content/narrow',
                            name: 'Layout Main Content Narrow',
                            component: LayoutMainContentNarrow
                        },
                        {
                            path: 'main-content/boxed',
                            name: 'Layout Main Content Boxed',
                            component: LayoutMainContentBoxed
                        },
                        {
                            path: 'header/fixed-light',
                            name: 'Layout Header Fixed Light',
                            component: LayoutHeaderFixedLight
                        },
                        {
                            path: 'header/fixed-dark',
                            name: 'Layout Header Fixed Dark',
                            component: LayoutHeaderFixedDark
                        },
                        {
                            path: 'header/static-light',
                            name: 'Layout Header Static Light',
                            component: LayoutHeaderStaticLight
                        },
                        {
                            path: 'header/static-dark',
                            name: 'Layout Header Static Dark',
                            component: LayoutHeaderStaticDark
                        },
                        {
                            path: 'sidebar/mini',
                            name: 'Layout Sidebar Mini',
                            component: LayoutSidebarMini
                        },
                        {
                            path: 'sidebar/light',
                            name: 'Layout Sidebar Light',
                            component: LayoutSidebarLight
                        },
                        {
                            path: 'sidebar/dark',
                            name: 'Layout Sidebar Dark',
                            component: LayoutSidebarDark
                        },
                        {
                            path: 'sidebar/hidden',
                            name: 'Layout Sidebar Hidden',
                            component: LayoutSidebarHidden
                        },
                        {
                            path: 'side-overlay/visible',
                            name: 'Layout Side Overlay Visible',
                            component: LayoutSideOverlayVisible
                        },
                        {
                            path: 'side-overlay/hover-mode',
                            name: 'Layout Side Overlay Hover Mode',
                            component: LayoutSideOverlayHoverMode
                        },
                        {
                            path: 'side-overlay/no-page-overlay',
                            name: 'Layout Side Overlay No Page Overlay',
                            component: LayoutSideOverlayNoPageOverlay
                        },
                        {
                            path: 'loaders',
                            name: 'Loaders',
                            component: LayoutLoaders
                        },
                        {
                            path: 'api',
                            name: 'Layout API',
                            component: LayoutApi
                        }
                    ]
                },
                {
                    path: 'pages/generic',
                    redirect: '/pages/generic/blank',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'blank',
                            name: 'Pages Generic Blank',
                            component: PagesGenericBlank
                        },
                        {
                            path: 'blank-block',
                            name: 'Pages Generic Blank Block',
                            component: PagesGenericBlankBlock
                        },
                        {
                            path: 'search',
                            name: 'Pages Generic Search',
                            component: PagesGenericSearch
                        },
                        {
                            path: 'profile',
                            name: 'Pages Generic Profile',
                            component: PagesGenericProfile
                        },
                        {
                            path: 'invoice',
                            name: 'Pages Generic Invoice',
                            component: PagesGenericInvoice
                        },
                        {
                            path: 'faq',
                            name: 'Pages Generic Faq',
                            component: PagesGenericFaq
                        }
                    ]
                },
                {
                    path: 'pages/auth',
                    redirect: '/pages/auth/all',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'all',
                            name: 'Pages Auth All',
                            component: PagesAuthAll
                        }
                    ]
                },
                {
                    path: 'pages/errors',
                    redirect: '/pages/errors/all',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'all',
                            name: 'Pages Errors All',
                            component: PagesErrorsAll
                        }
                    ]
                }
            ]
        }
    ],
})
