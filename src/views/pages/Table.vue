<template>
    <div>
        <!-- Page Content -->
        <div class="content">
            <!-- Full Table -->
            <base-block title="List">
                <template #options>
                    <Exports/>
                </template>

                <b-table-simple responsive bordered striped table-class="table-vcenter">
                    <b-thead>
                        <b-tr>
                            <b-th class="" v-for="(item, key) in headers" :key="key">
                                {{ item }}
                            </b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>

                        <b-tr v-for="(object, key) in objects" :key="object.id">
                            <b-td class="">
                                {{ key + 1 }}
                            </b-td>

                            <template v-if="component === 'contact'">
                                <b-td class="font-w600 font-size-sm">
                                    <a :href="object.href">
                                        {{ object.name }}
                                    </a>
                                </b-td>
                                <b-td class="font-size-sm">
                                    {{ object.email }}
                                </b-td>
                                <b-td>
                                    {{ object.phone }}
                                </b-td>
                            </template>
                            <template v-else-if="component === 'contact-invoice' || component === 'invoice'">
                                <b-td class="font-w600 font-size-sm">
                                    <a :href="object.href">
                                        {{ object.name }}
                                    </a>
                                </b-td>
                                <b-td class="font-size-sm">
                                    {{ object.amount }}
                                </b-td>
                                <b-td class="font-size-sm">
                                    {{ object.bal_due }}
                                </b-td>
                                <b-td class="font-size-sm">
                                    <span :class="'badge badge-'+ object.status_icon">{{ object.status }}</span>
                                </b-td>
                            </template>
                            <template v-else-if="component === 'lead'">
                                <b-td class="font-w600 font-size-sm">
                                    <h6>{{ object.name }}</h6>
                                    {{ object.email }}<br>
                                    {{ object.phone }}
                                </b-td>
                                <b-td class="font-size-sm">
                                    <span :class="'badge badge-'+ object.status_icon">{{ object.status }}</span>
                                </b-td>
                            </template>

                            <template v-else-if="component === 'project'">
                                <b-td class="font-size-sm">
                                    {{ object.project }}
                                </b-td>
                                <b-td class="font-w600 font-size-sm">
                                    {{ object.name }}
                                </b-td>
                                <b-td class="font-size-sm">
                                    <span :class="'badge badge-'+ object.status_icon">{{ object.status }}</span>
                                </b-td>
                                <b-td class="font-size-sm">
                                    {{ object.start }}
                                </b-td>
                                <b-td class="font-size-sm">
                                    {{ object.end }}
                                </b-td>
                            </template>

                            <template v-else-if="component === 'quote'">
                                <b-td class="font-size-sm">
                                    {{ object.project }}
                                </b-td>
                                <b-td class="font-w600 font-size-sm">
                                    {{ object.name }}
                                </b-td>
                                <b-td class="font-size-sm">
                                    {{ object.amount }}
                                </b-td>
                            </template>

                            <template v-else-if="component === 'user'">
                                <b-td class="font-size-sm">
                                    <b>{{ object.info }}</b><br>{{ object.email }}<br>{{ object.phone }}
                                </b-td>
                                <b-td class="font-w600 font-size-sm">
                                    {{ object.name }}
                                </b-td>
                                <b-td class="font-size-sm">
                                    {{ object.role }}
                                </b-td>
                                <b-td class="font-size-sm">
                                    <span :class="'badge badge-'+ object.status_icon">{{ object.status }}</span>
                                </b-td>
                            </template>

                            <template v-else-if="component === 'role'">
                                <b-td class="font-w600 font-size-sm">
                                    {{ object.name }}
                                </b-td>
                            </template>

                            <template v-else-if="component === 'currency'">
                                <b-td class="font-w600 font-size-sm">
                                    {{ object.name }}
                                </b-td>

                                <b-td class="font-size-sm">
                                    <span :class="'badge badge-'+ object.status_icon">{{ object.status }}</span>
                                </b-td>
                            </template>

                            <template v-else-if="component === 'payment-method'">
                                <b-td class="font-w600 font-size-sm">
                                    {{ object.name }}
                                </b-td>

                                <b-td class="font-size-sm">
                                    <span :class="'badge badge-'+ object.status_icon">{{ object.status }}</span>
                                </b-td>
                            </template>

                            <b-td>
                                {{ object.created }}
                            </b-td>

                            <b-td class="text-left" v-if="object.href != ' '">
                                <router-link :to="{ path: object.href }">
                                    <b-button size="sm" variant="alt-primary">
                                        <i class="fa fa-1x fa-eye"></i>
                                    </b-button>
                                </router-link>
                            </b-td>

                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </base-block>
            <!-- END Full Table -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    import Filters from './Filters';
    import Exports from "./Exports";

    export default {
        name: 'Table',
        components: {Exports},
        props: {
            component: {
                type: String,
                default: ""
            },
        },
        data(props) {
            let component = props.component, headers = [], objects = [];
            if (component == 'contact') {
                headers = ['#', 'Company', 'Email Address', 'Phone', 'Created Date', 'Actions'];
                let href = '/contacts/details';
                objects = [
                    {
                        name: 'Devstab LLC',
                        email: 'support@devstab.com',
                        phone: '98723364223',
                        created: '17-06-2020',
                        href: href,
                    },
                    {
                        name: 'Pepdev It Solutions',
                        email: 'pepdevofficial@gmail.com',
                        phone: '4567898765',
                        created: '10-09-2019',
                        href: href,
                    },
                ];
            } else if (component == 'contact-invoice' || component == 'invoice') {
                headers = ['#', 'Customer', 'Amount', 'Balance Due', 'Status', 'Date', 'Action'];
                let href = '/invoices/details';
                objects = [
                    {
                        name: 'Devstab LLC',
                        amount: 1000,
                        bal_due: 200,
                        status_icon: 'primary',
                        status: 'Partially Paid',
                        created: '17-06-2020',
                        href: href,
                    },
                    {
                        name: 'Devstab LLC',
                        amount: 500,
                        bal_due: 0,
                        status_icon: 'success',
                        status: 'Paid',
                        created: '6-06-2020',
                        href: href,
                    },

                ];

                if (component == 'invoice') {
                    objects = [
                        {
                            name: 'Devstab LLC',
                            amount: 1000,
                            bal_due: 200,
                            status_icon: 'primary',
                            status: 'Partially Paid',
                            created: '17-06-2020',
                            href: href,
                        },
                        {
                            name: 'Devstab LLC',
                            amount: 500,
                            bal_due: 0,
                            status_icon: 'success',
                            status: 'Paid',
                            created: '6-06-2020',
                            href: href,
                        },
                        {
                            name: 'Pepdev It Solutions',
                            amount: 1500,
                            bal_due: 1500,
                            status_icon: 'warning',
                            status: 'Pending',
                            created: '5-07-2020',
                            href: href,
                        },
                        {
                            name: 'Pepdev It Solutions',
                            amount: 300,
                            bal_due: 300,
                            status_icon: 'danger',
                            status: 'Cancelled',
                            created: '4-07-2020',
                            href: href,
                        },
                    ];
                }

            } else if (component == 'lead') {
                let href = '/contacts/details';
                headers = ['#', 'Company', 'Status', 'Created Date', 'Action'];
                objects = [
                    {
                        name: 'Devstab LLC',
                        email: 'support@devstab.com',
                        phone: '98723364223',
                        status_icon: 'success',
                        status: 'Converted/ Qualified',
                        created: '17-06-2020',
                        href: href,
                    },
                    {
                        name: 'Pepdev It Solutions',
                        email: 'pepdevofficial@gmail.com',
                        phone: '4567898765',
                        status_icon: 'primary',
                        status: 'Contacted',
                        created: '10-09-2019',
                        href: href,
                    },
                ];
            } else if (component == 'project') {
                let href = '/' + component + 's/details';
                headers = ['#', 'Project Name', 'Customer', '% Complete', 'Start Date', 'End Date', 'Created Date', 'Action'];
                objects = [
                    {
                        project: 'Inventory Management',
                        name: 'Devstab LLC',
                        status_icon: 'primary',
                        status: '30% Completed',
                        start: '19-05-2018',
                        end: '01-08-2018',
                        created: '19-05-2018',
                        href: href,
                    },
                    {
                        project: 'Table Booking System',
                        name: 'Pepdev It Solutions',
                        status_icon: 'success',
                        status: '90% Completed',
                        start: '01-03-2020',
                        end: '26-03-2020',
                        created: '01-03-2020',
                        href: href,
                    },
                ];
            } else if (component == 'quote') {
                headers = ['#', 'Project Name', 'Customer', 'Amount', 'Quote Date', 'Action'];
                let href = '/quotes/details';
                objects = [
                    {
                        project: 'Table Booking System',
                        name: 'Devstab LLC',
                        amount: '$100.12',
                        created: '17-06-2020',
                        href: href,
                    },
                    {
                        project: 'Inventory Management',
                        name: 'Pepdev It Solutions',
                        amount: '$800.12',
                        created: '4-07-2020',
                        href: href,
                    },
                ];

            } else if (component == 'user') {
                headers = ['#', 'Person Info', 'Username', 'User Role', 'Status', 'Created Date'];
                let href = ' ';
                objects = [
                    {
                        info: 'Chandler Bing',
                        email: 'chandler@flexmust.com',
                        phone: '4568327332',
                        name: 'chandler',
                        role: 'Super Admin',
                        status_icon: 'success',
                        status: 'Active',
                        created: '18-05-2018',
                        href: href,
                    },

                    {
                        info: 'Charlie Harper',
                        email: 'charlie@flexmust.com',
                        phone: '1234567890',
                        name: 'charlie',
                        role: 'Admin',
                        status_icon: 'success',
                        status: 'Active',
                        created: '16-02-2020',
                        href: href,
                    }, {
                        info: 'Donna Paulsen',
                        email: 'donna@flexmust.com',
                        phone: '4568327332',
                        name: 'donna',
                        role: 'Project Manager',
                        status_icon: 'warning',
                        status: 'Inactive',
                        created: '16-06-2020', href: href,
                    }, {
                        info: 'Jake Harper',
                        email: 'jake@flexmust.com',
                        phone: '8765763466',
                        name: 'jake',
                        role: 'Sales Manager',
                        status_icon: 'success',
                        status: 'Active',
                        created: '18-05-2018', href: href,
                    }, {
                        info: 'Michael Ross',
                        email: 'michael@flexmust.com',
                        phone: '89787434212',
                        name: 'michael',
                        role: 'Employee',
                        status_icon: 'success',
                        status: 'Active',
                        created: '18-05-2018', href: href,
                    },
                ];
            } else if (component == 'role') {
                headers = ['#', 'User Role Name', 'Created Date'];
                let href = ' ';
                objects = [
                    {
                        name: 'Super Admin',
                        created: '18-05-2018',
                        href: href,
                    }, {
                        name: 'Admin',
                        created: '18-05-2018',
                        href: href,
                    }, {
                        name: 'Project Manager',
                        created: '18-05-2018',
                        href: href,
                    },
                    {
                        name: 'Sales Manager',
                        created: '18-05-2018',
                        href: href,
                    },
                    {
                        name: 'Employee',
                        created: '18-05-2018',
                        href: href,
                    },
                ];
            } else if (component == 'currency') {
                headers = ['#', 'Currency Name', 'Status', 'Created Date'];
                let href = ' ';
                objects = [
                    {
                        name: 'USD',
                        status_icon: 'success',
                        status: 'Active',
                        created: '18-05-2018',
                        href: href,
                    }, {
                        name: 'EUR',
                        status_icon: 'danger',
                        status: 'Inactive',
                        created: '18-05-2018',
                        href: href,
                    },
                ];
            } else if (component == 'payment-method') {
                headers = ['#', 'Payment Method', 'Status', 'Created Date'];
                let href = ' ';
                objects = [
                    {
                        name: 'Paypal',
                        status_icon: 'success',
                        status: 'Active',
                        created: '18-05-2018',
                        href: href,
                    }, {
                        name: 'Bank Transfer',
                        status_icon: 'danger',
                        status: 'Inactive',
                        created: '18-05-2018',
                        href: href,
                    }, {
                        name: 'Cash',
                        status_icon: 'success',
                        status: 'Active',
                        created: '18-05-2018',
                        href: href,
                    }, {
                        name: 'Credit card',
                        status_icon: 'success',
                        status: 'Active',
                        created: '18-05-2018',
                        href: href,
                    }, {
                        name: 'Cheque',
                        status_icon: 'success',
                        status: 'Active',
                        created: '18-05-2018',
                        href: href,
                    },
                ];
            }

            return {
                headers: headers,
                objects: objects,
            }
        },
        filters: {
            capitalize: Filters.capitalize
        }
    }
</script>