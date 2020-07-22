<template>
    <div>
        <!-- Hero -->
        <base-page-heading :title="'Details ' + component | capitalize" subtitle="">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <router-link :to="{ path: href }">
                        <b-button size="sm" variant="alt-primary">
                            Back to List
                        </b-button>
                    </router-link>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Block Tabs -->
            <h2 class="content-heading">Details {{ component | capitalize }}</h2>
            <template v-if="component === 'invoice' || component === 'quote'">
                <Invoice :component="component"/>
            </template>
            <template v-else>
                <b-row>
                    <b-col lg="8">
                        <!-- Block Tabs Default Style -->
                        <b-tabs class="block" nav-class="nav-tabs-block" content-class="block-content">
                            <!-- Form Horizontal - Default Style -->
                            <b-form @submit.prevent class="mb-5">

                                <template v-if="component === 'contact'">
                                    <b-tab title="Basic Info" active>
                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Primary Contact', '', 'Devstab Doe')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Company', '', 'Devstab LLC')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Phone Number', '', '98723364223')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Email Address', '', 'support@devstab.com')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Website', '', 'devstab.com')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Marketing', '', 'Email, Call, SMS, Social Media')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Address', '', 'Mirpur Road, Shyamoli, Dhaka-1207')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Remarks', '', 'Remarking notes....')"></div>
                                    </b-tab>

                                    <b-tab title="Contact Persons">
                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Name', '', 'John Doe')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Phone Number', '', '98723364223')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Email Address', '', 'johndoe@devstab.com')"></div>
                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Designation', '', 'Manager')"></div>
                                    </b-tab>

                                    <b-tab title="Invoices">
                                        <Table component="contact-invoice"/>
                                    </b-tab>

                                </template>

                                <template v-else-if="component === 'project'">
                                    <b-tab title="Basic Info" active>
                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Project Name', '', 'Table Booking System')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Customer', '', 'Devstab LLC')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Project Start Date', '', '01-03-2020')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Project Due Date', '', '21-07-2020')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', '% Complete', '', '90%')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Billing Method', '', 'Fixed Cost for Project')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Total Budget Cost', '', '$100.12')"></div>

                                        <div class="form-row form-group"
                                             v-html="createElem('plaintext', 'Description', '', 'Project Description....')"></div>
                                    </b-tab>

                                    <b-tab title="Staffs">
                                        <b-table-simple responsive bordered striped table-class="table-vcenter">
                                            <b-thead>
                                                <tr>
                                                    <th>Staff</th>
                                                    <th>Hours</th>
                                                    <th>Rate per Hour</th>
                                                </tr>
                                            </b-thead>
                                            <b-tbody>
                                                <tr>
                                                    <td>
                                                        Chandler Bing(chandler@pepdev.com)
                                                    </td>
                                                    <td>
                                                        100
                                                    </td>
                                                    <td>
                                                        $10
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Charlie Harper(charlie@pepdev.com)
                                                    </td>
                                                    <td>
                                                        75
                                                    </td>
                                                    <td>
                                                        $12
                                                    </td>
                                                </tr>
                                            </b-tbody>
                                        </b-table-simple>
                                    </b-tab>
                                    <b-tab title="Tasks">
                                        <b-table-simple responsive bordered striped table-class="table-vcenter">
                                            <b-thead>
                                                <tr>
                                                    <th>Task Name</th>
                                                    <th>Description</th>
                                                    <th>Rate per Hour</th>
                                                    <th>Work Hours (HH)</th>
                                                    <th>Status</th>
                                                </tr>
                                            </b-thead>
                                            <b-tbody>
                                                <tr>
                                                    <td>Task 1</td>
                                                    <td>Create web Design for table booking system</td>
                                                    <td>12</td>
                                                    <td>87</td>
                                                    <td>In Process</td>
                                                </tr>
                                                <tr>
                                                    <td>Task 2</td>
                                                    <td>Web Development for table booking system</td>
                                                    <td>14</td>
                                                    <td>93</td>
                                                    <td>Started</td>
                                                </tr>
                                            </b-tbody>
                                        </b-table-simple>
                                    </b-tab>

                                    <b-tab title="Remarks">
                                        Remarks.....
                                    </b-tab>

                                </template>

                            </b-form>
                            <!-- END Form Horizontal - Default Style -->
                        </b-tabs>
                        <!-- END Block Tabs Default Style -->
                    </b-col>
                </b-row>
            </template>
        </div>
        <!-- END Page Content -->
    </div>
</template>


<script>
    import Filters from './Filters';
    import Table from "./Table";
    import Invoice from "./Invoice";

    export default {
        name: 'DetailsPage',
        components: {Table, Invoice},
        filters: {
            capitalize: Filters.capitalize,
        },
        props: {
            component: {
                type: String,
                default: ""
            },
        },
        data(props) {
            let component = props.component, href = '/' + component + 's/list';

            return {
                createElem: Filters.createElem,
                href: href,
            }
        },
    }
</script>
