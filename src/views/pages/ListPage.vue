<template>
    <div>
        <base-page-heading :title="component | capitalize"
                           subtitle="">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <router-link :to="{ path: hrefNew }">
                        <b-button size="sm" variant="alt-primary">
                            <i class="fa fa-plus mr-1"></i> New
                        </b-button>
                    </router-link>
                </b-breadcrumb>
            </template>
        </base-page-heading>

        <!-- Page Content -->
        <div class="content">
            <!-- Full Table -->
            <template>
                <Table :component="component"/>
            </template>
            <!-- END Full Table -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    import Filters from './Filters';
    import Table from "./Table";

    export default {
        name: 'ListPage',
        components: {Table},
        props: {
            component: {
                type: String,
                default: ""
            },
        },
        data(props) {
            let component = props.component, hrefNew = '/' + component + 's/add';
            if(component == 'currency'){
                hrefNew = '/currencies/add';
            }
            return {
                hrefNew: hrefNew,
            }
        },
        filters: {
            capitalize: Filters.capitalize
        }
    }
</script>