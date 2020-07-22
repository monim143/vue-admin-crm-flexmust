<template #options>
    <button type="button" class="btn-block-option">
        <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-outline-secondary" variant="outline-secondary"
                        text="Export" right>

                <b-dropdown-item v-for="(item, key) in exports" :key="key">&nbsp;
                    <button type="button" class="btn-block-option" @click="printPage" v-if="key == 2">
                        <i :class="item.icon"></i>
                        {{ item.name }}
                    </button>
                    <template v-else>
                        &nbsp;&nbsp;
                        <i :class="item.icon"></i>
                        {{ item.name }}
                    </template>
                </b-dropdown-item>
            </b-dropdown>
        </b-col>
    </button>
</template>

<script>
    export default {
        name: 'Exports',
        data() {
            let exports = [
                {'icon': 'far fa-1x fa-file-excel', 'name': 'Excel'},
                {'icon': 'fa fa-1x fa-file-csv', 'name': 'CSV'},
                {'icon': 'si si-printer mr-1', 'name': 'Print'},
                {'icon': 'far fa-1x fa-copy', 'name': 'Copy'},
                {'icon': 'far fa-1x fa-envelope', 'name': 'Email'},
            ];
            return {
                exports: exports,
            }
        },
        methods: {
            printPage() {
                // Get current sidebar visibility
                let sidebarVisibility = this.$store.state.settings.sidebarVisibleDesktop

                // Close the sidebar
                this.$store.commit('sidebar', {mode: 'close'})

                // Print the page
                window.print()

                // Restore previous sidebar visibility
                if (sidebarVisibility) {
                    this.$store.commit('sidebar', {mode: 'open'})
                }
            }
        }
    }
</script>
