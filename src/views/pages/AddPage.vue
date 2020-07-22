<template>
    <div>
        <!-- Hero -->
        <base-page-heading :title="'Add ' + component | capitalize" subtitle="">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <router-link :to="{ path: href }" v-if="component != ''">
                        <b-button size="sm" variant="alt-primary">
                            Back to {{ component + 's' | capitalize }}
                        </b-button>
                    </router-link>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Block Tabs -->
            <h2 class="content-heading">Add {{ component | capitalize }}</h2>
            <b-row>
                <b-col lg="8">
                    <!-- Block Tabs Default Style -->
                    <b-tabs class="block" nav-class="nav-tabs-block" content-class="block-content">
                        <!-- Form Horizontal - Default Style -->
                        <b-form @submit.prevent class="mb-5">

                            <template v-if="component === 'contact'">
                                <b-tab title="Basic Info" active>
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Primary Contact *', 'primary_contact', 'Devstab Doe')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Company *', 'company', 'Devstab LLC')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Phone Number *', 'phone', '98723364223')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('email', 'Email Address *', 'email', 'support@example.com')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Website', 'web', 'devstab.com')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('check', 'Marketing', 'marketing', '', ['Email', 'Call', 'SMS', 'Social Media'])"></div>
                                </b-tab>
                                <b-tab title="Address">
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Address', 'address_line', 'Address Line 1')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Country', 'country', '', ['Australia', 'Bangladesh', 'India'])"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Area or City', 'city', '', ['Canberra', 'Dhaka', 'New Delhi'])"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'State', 'state', '', [])"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Postal/ZIP Code', 'zip', '123456890')"></div>
                                </b-tab>

                                <b-tab title="Contact Persons">
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Name', 'contact_name', 'John Doe')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Phone Number', 'contact_phone', '98723364223')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('email', 'Email Address', 'contact_email', 'johndoe@example.com')"></div>
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Designation', 'contact_desig', 'Manager')"></div>
                                </b-tab>

                            </template>

                            <template v-else-if="component === 'lead'">
                                <b-tab title="Basic Info" active>
                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Company', 'company', '', customers)"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Source', 'source', 'Source')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Status', 'status', '', ['Working', 'Contacted', 'Converted/Qualified', 'Disqualified'])"></div>
                                </b-tab>

                            </template>

                            <template v-else-if="component === 'project'">
                                <b-tab title="Basic Info" active>
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Project Name *', 'project', 'Inventory Management')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Customer', 'company', '', customers)"></div>

                                    <DatePicker label="Project Start Date *" name="start"/>
                                    <DatePicker label="Project Due Date *" name="due"/>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Billing Method', 'billing', '', billingMethods)"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', '% Complete', 'complete', '% Complete')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Currency', 'currency', '', currency)"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('textarea', 'Description', 'desc', 'Project Description ...')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Total Budget Cost', 'cost', 'Total Budget Cost')"></div>
                                </b-tab>

                                <b-tab title="Staff">
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
                                                    <div class="form-row form-group"
                                                         v-html="createElem('select', 'Staff 1', 'staff1', '', staffs, true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'hours', 'Hour', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'hour_rate', 'Rate per hour', '', true)"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('select', 'Staff 2', 'staff2', '', staffs, true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'hours', 'Hour', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'hour_rate', 'Rate per hour', '', true)"></div>
                                                </td>
                                            </tr>
                                        </b-tbody>
                                    </b-table-simple>
                                </b-tab>

                                <b-tab title="Tasks">
                                    <b-table-simple responsive bordered table-class="table-vcenter">
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
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'task_name', 'Task Name', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'desc', 'Description', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'hour_rate2', 'Rate per hour', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'work_hour', 'Work Hour', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('select', 'Status', 'staff1', '', ['Started', 'In Process', 'Testing', 'Completed'], true)"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'task_name', 'Task Name', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'desc', 'Description', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'hour_rate2', 'Rate per hour', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'work_hour', 'Work Hour', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('select', 'Status', 'staff1', '', ['Started', 'In Process', 'Testing', 'Completed'], true)"></div>
                                                </td>
                                            </tr>
                                        </b-tbody>
                                    </b-table-simple>
                                </b-tab>

                            </template>

                            <template v-else-if="component === 'quote' || component === 'invoice'">
                                <b-tab title="Basic Info" active>
                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Customer', 'company', '', customers)"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Project Name *', 'project', 'Inventory Management')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Currency', 'currency', '', currency)"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Payment Method', 'payment_method', '', paymentMethods)"></div>

                                    <DatePicker :label="component + ' Date *'" name="start"/>

                                    <b-table-simple responsive bordered striped table-class="table-vcenter">
                                        <b-thead>
                                            <tr>
                                                <th>Item Name</th>
                                                <th>Item Description</th>
                                                <th>Qty</th>
                                                <th>Unit Cost</th>
                                                <th>Price</th>
                                            </tr>
                                        </b-thead>
                                        <b-tbody>
                                            <tr>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'item', 'Item Name', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'desc', 'Description', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'qty', 'Quantity', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'cost', 'Unit Cost', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'price', 'Price', '', true)"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'item', 'Item Name', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'desc', 'Description', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'qty', 'Quantity', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'cost', 'Unit Cost', '', true)"></div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'price', 'Price', '', true)"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3"></td>
                                                <td>
                                                    <div class="form-row form-group">Subtotal</div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'subtotal', 'Subtotal', '', true)"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3"></td>
                                                <td>
                                                    <div class="form-row form-group">Discount</div>
                                                </td>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'discount', 'Discount', '', true)"></div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colspan="3"></td>
                                                <th>
                                                    <div class="form-row form-group"><b>Total</b></div>
                                                </th>
                                                <td>
                                                    <div class="form-row form-group"
                                                         v-html="createElem('text', '', 'total', 'Total', '', true)"></div>
                                                </td>
                                            </tr>
                                        </b-tbody>
                                    </b-table-simple>
                                </b-tab>
                            </template>

                            <template v-if="component === 'user'">
                                <b-tab title="Basic Info" active>
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Full Name *', 'name', 'Chandler Bing')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Username *', 'company', 'chandler')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Phone Number *', 'phone', '4568327332')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('email', 'Email Address *', 'email', 'chandler@example.com')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Password', 'password', '******')"></div>

                                    <DatePicker label="Date of Birth" name="dob"/>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'User Role', 'role', '', roles)"></div>
                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Status', 'status', '', ['Active', 'Deactive'])"></div>
                                </b-tab>

                                <b-tab title="Address">
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Address', 'address_line', 'Address Line 1')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Country', 'country', '', ['Australia', 'Bangladesh', 'India'])"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Area or City', 'city', '', ['Canberra', 'Dhaka', 'New Delhi'])"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'State', 'state', '', [])"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Postal/ZIP Code', 'zip', '123456890')"></div>
                                </b-tab>
                            </template>

                            <template v-if="component === 'role'">
                                <b-tab title="Basic Info" active>
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'User Role Name *', 'name', 'Super Admin')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('textarea', 'Description', 'desc', 'Description ... ')"></div>
                                </b-tab>
                            </template>

                            <template v-if="component === 'currency'">
                                <b-tab title="Basic Info" active>
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Currency Name *', 'name', 'USD')"></div>
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Abbr *', 'abbr', '$')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Status', 'status', '', ['Active', 'Inactive'])"></div>
                                </b-tab>
                            </template>

                            <template v-if="component === 'payment-method'">
                                <b-tab title="Basic Info" active>
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Payment Method Name *', 'name', 'Paypal')"></div>
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Description', 'desc', 'Standard Paypal Payment Gateway')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Status', 'status', '', ['Active', 'Inactive'])"></div>
                                </b-tab>
                            </template>

                            <template v-if="component === ''">
                                <b-tab title="Basic Info" active>


                                    <b-form-group label="Logo" label-for="example-file-input-custom">
                                        <img class="logo" src="/img/logo.png" alt="Logo">
                                        <b-form-file id="example-file-input-custom"></b-form-file>
                                    </b-form-group>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Organization Name *', 'name', 'Flexmust')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Owner Name', 'owner', 'MA Monim')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Phone Number *', 'phone', '98723364223')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('email', 'Email Address *', 'email', 'support@flexmust.com')"></div>
                                </b-tab>
                                <b-tab title="Address">
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Address', 'address_line', 'Address Line 1')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Country', 'country', '', ['Australia', 'Bangladesh', 'India'])"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'Area or City', 'city', '', ['Canberra', 'Dhaka', 'New Delhi'])"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('select', 'State', 'state', '', [])"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Postal/ZIP Code', 'zip', '123456890')"></div>
                                </b-tab>

                                <b-tab title="Contact Persons">
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Name', 'contact_name', 'John Doe')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Phone Number', 'contact_phone', '98723364223')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('email', 'Email Address', 'contact_email', 'johndoe@example.com')"></div>
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Designation', 'contact_desig', 'Manager')"></div>
                                </b-tab>

                                <b-tab title="Account Info">
                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Account Number', 'account_no', '12345678901')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'A/C Name', 'account_name', 'Flexmust')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('text', 'Bank Name', 'bank', 'World Bank')"></div>

                                    <div class="form-row form-group"
                                         v-html="createElem('textarea', 'Bank Details', 'bank_details', 'World Bank City, Country')"></div>
                                </b-tab>

                            </template>

                            <b-tab title="Remark">
                                <!-- CKEditor 5 -->
                                <base-block title="Remark(For Internal Use)" content-full>
                                    <ckeditor :editor="ckeditor" v-model="ckeditorData"
                                              :config="ckeditorConfig"></ckeditor>
                                </base-block>
                                <!-- END CKEditor 5 -->
                            </b-tab>

                            <b-tab title-item-class="ml-auto">
                                <template #title>
                                    <i class="si si-settings"></i>
                                </template>
                            </b-tab>

                            <div class="form-group form-row">
                                <b-col sm="8" class="ml-auto">
                                    <b-button type="submit" variant="primary">Save</b-button>
                                </b-col>
                            </div>
                        </b-form>
                        <!-- END Form Horizontal - Default Style -->
                    </b-tabs>
                    <!-- END Block Tabs Default Style -->
                </b-col>
            </b-row>
        </div>
        <!-- END Page Content -->
    </div>
</template>


<script>
    import {validationMixin} from 'vuelidate'
    import Filters from './Filters';
    import CKEditor from "@ckeditor/ckeditor5-vue";
    import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
    import DatePicker from "./DatePicker";

    export default {
        name: 'AddPage',
        components: {
            ckeditor: CKEditor.component,
            DatePicker,
        },
        mixins: [validationMixin],
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
            if (component == 'currency') {
                href = '/currencies/list';
            }

            return {
                createElem: Filters.createElem,
                href: href,
                ckeditorData: 'Type your remarks ... ',
                ckeditorConfig: {},
                ckeditor: ClassicEditor,
                customers: ['Devstab LLC', 'Pepdev It Solutions'],
                staffs: [
                    'Chandler Bing(chandler@gmail.com)',
                    'Charlie Harper(charlie@gmail.com)',
                    'Michael Ross(michael@gmail.com)',
                    'Donna Paulsen(donna@gmail.com)',
                    'Jake Harper(jake@gmail.com)',
                ],
                currency: ['USD', 'EUR', 'INR', 'GBP', 'AUD'],
                billingMethods: ['Fixed Cost for Project', 'Based On Project Hours', 'Based On Task Hours', 'Based On Staff Hours'],
                paymentMethods: ['Paypal', 'Bank Transfer', 'Cash', 'Credit card', 'Google Wallets'],
                roles: ['Super Admin', 'Admin', 'Project Manager', 'Sales Manager', 'Employee'],

                // Flatpickr initial values
                dateDefault: null,
                dateCustom: null,
                dateFriendly: null,
                dateRange: null,
                timeStandalone: null,
                timeStandalone24: null,
                timeDateTime: null,
                timeDateTime24: null,
                inlineDefault: null,
                inlineTime: null,

                // Flatpickr configuration, get more form https://chmln.github.io/flatpickr/options/
                configCustom: {dateFormat: 'd-m-Y'},
                configFriendly: {dateFormat: 'F j, Y'},
                configRange: {mode: 'range', minDate: 'today'},
                configTimeStandalone: {enableTime: true, noCalendar: true, dateFormat: 'H:i'},
                configTimeStandalone24: {enableTime: true, noCalendar: true, dateFormat: 'H:i', time_24hr: true},
                configDateTime: {enableTime: true},
                configDateTime24: {enableTime: true, time_24hr: true},
                configInlineDefault: {inline: true},
                configInlineTime: {inline: true, enableTime: true},
            }
        },
    }
</script>
