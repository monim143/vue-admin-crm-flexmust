<template>
    <!-- Sidebar -->
    <simplebar id="sidebar" aria-label="Main Navigation">
        <slot>
            <!-- Side Header -->
            <div class="content-header bg-white-5">
                <!-- Logo -->
                <router-link to="/" class="font-w600 text-dual">
                    <img class="logo" src="img/logo.png" alt="Logo">
                </router-link>
                <!-- END Logo -->

                <!-- Extra -->
                <div>

                    <!-- Close Sidebar, Visible only on mobile screens -->
                    <base-layout-modifier size="sm" variant="dual" action="sidebarClose" class="d-lg-none ml-2">
                        <i class="fa fa-times"></i>
                    </base-layout-modifier>
                    <!-- END Close Sidebar -->
                </div>
                <!-- END Extra -->
            </div>
            <!-- END Side Header -->

            <!-- Side Navigation -->
            <div class="content-side content-side-full">
                <base-navigation :nodes="navigation"></base-navigation>
            </div>
            <!-- END Side Navigation -->
        </slot>
    </simplebar>
    <!-- END Sidebar -->
</template>

<script>
    // SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
    import simplebar from 'simplebar-vue'

    // Get navigation data
    import menuList from '@/data/menu'

    export default {
        name: 'BaseSidebar',
        props: {
            classes: String
        },
        components: {
            simplebar
        },
        data() {
            return {
                // Get main navigation
                navigation: menuList.main
            }
        }
    }
</script>
