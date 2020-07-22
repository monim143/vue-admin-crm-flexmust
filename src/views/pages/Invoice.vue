<template>
    <div>
        <!-- Page Content -->
        <div class="content content-boxed">
            <!-- Invoice -->
            <base-block title="#INV0625">
                <template #options>
                    <Exports/>
                </template>
                <div class="p-sm-4 p-xl-7">
                    <!-- Invoice Info -->
                    <div class="row mb-4">
                        <!-- Company Info -->
                        <div class="col-6 font-size-sm">
                            <p class="h3">Customer</p>
                            <b>Devstab LLC</b>
                            <address>
                                Mirpur Road, Shyamoli, Dhaka-1207, Bangladesh<br>
                                support@devstab.com
                            </address>
                        </div>
                        <!-- END Company Info -->

                        <!-- Client Info -->
                        <div class="col-6 text-right font-size-sm">
                            <p class="h3">{{ component | capitalize }} Date</p>
                            <address>17-06-2020</address>
                        </div>
                        <!-- END Client Info -->

                        <div class="col-6 font-size-sm">
                            <b>Payment Method</b>
                            <address>Cheque</address>
                        </div>

                        <div class="col-6 text-right font-size-sm">
                            <b>Project Name</b>
                            <address>Inventory Management System</address>
                        </div>
                    </div>
                    <!-- END Invoice Info -->

                    <!-- Table -->
                    <b-table-simple responsive bordered table-class="table-vcenter">
                        <b-thead>
                            <b-tr>
                                <b-th class="text-center" style="width: 60px;"></b-th>
                                <b-th>Item Name</b-th>
                                <b-th class="text-right">Qty</b-th>
                                <b-th class="text-right">Unit Cost</b-th>
                                <b-th class="text-right">Price</b-th>
                            </b-tr>
                        </b-thead>
                        <b-tbody>
                            <b-tr>
                                <b-td class="text-center">1</b-td>
                                <b-td>
                                    <p class="font-w600 mb-1">App Design & Development</p>
                                    <div class="text-muted">Design/Development of iOS and Android application</div>
                                </b-td>
                                <b-td class="text-center">
                                    <b-badge variant="primary" pill>1</b-badge>
                                </b-td>
                                <b-td class="text-right">$2500</b-td>
                                <b-td class="text-right">$2500</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="text-center">2</b-td>
                                <b-td>
                                    <p class="font-w600 mb-1">Icon Pack Design</p>
                                    <div class="text-muted">50 uniquely crafted icons for promotion</div>
                                </b-td>
                                <b-td class="text-center">
                                    <b-badge variant="primary" pill>1</b-badge>
                                </b-td>
                                <b-td class="text-right">$900</b-td>
                                <b-td class="text-right">$900</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td colspan="4" class="font-w600 text-right">Subtotal</b-td>
                                <b-td class="text-right">$3400</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td colspan="4" class="font-w600 text-right">Discount</b-td>
                                <b-td class="text-right">$100</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td colspan="4" class="font-w600 text-right">Total</b-td>
                                <b-td class="text-right">$3300</b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                    <!-- END Table -->

                    <!-- Footer -->
                    <p class="font-size-sm text-muted text-center py-3 my-3 border-top">
                        Thank you very much for doing business with us. We look forward to working with you again!
                    </p>
                    <!-- END Footer -->
                </div>
            </base-block>
            <!-- END Invoice -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    import Exports from "./Exports";
    import Filters from "./Filters";

    export default {
        props: {
            component: {
                type: String,
                default: ""
            },
        },
        components: {Exports},
        filters: {
            capitalize: Filters.capitalize
        },
        methods: {}
    }
</script>