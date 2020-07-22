<template>
    <router-view></router-view>
</template>

<style lang="scss">
    // Main Stylesheet
    @import './src/assets/scss/main';

    // Bootstrap Vue Stylesheet
    @import '~bootstrap-vue/src/index';

    // All color themes are included and available by default
    // Feel free to comment out any of them if you won't use them in your project
    @import 'assets/scss/flexmust/themes/amethyst';
    @import 'assets/scss/flexmust/themes/city';
    @import 'assets/scss/flexmust/themes/flat';
    @import 'assets/scss/flexmust/themes/modern';
    @import 'assets/scss/flexmust/themes/smooth';
</style>

<script>
    export default {
        name: 'App',
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    }
</script>
