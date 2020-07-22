<template>
    <div>
        <!-- Page Content -->
        <div class="content content-narrow">

            <!-- END Stats -->

            <!-- Customers and Latest Orders -->
            <b-row class="row-deck">
                <b-col cols="4">
                    <base-block tag="a" rounded link-pop content-full class="border-right border-primary border-4x"
                                href="javascript:void(0)">

                        <div class="font-size-sm font-w600 text-uppercase text-muted">
                            <div class="text-left">Total Income</div>
                        </div>
                        <div class="font-size-h2 font-w400 number text-primary">
                            3042.65
                        </div>
                    </base-block>
                </b-col>
                <b-col cols="4">
                    <base-block tag="a" rounded link-pop content-full class="border-right border-success border-4x"
                                href="javascript:void(0)">

                        <div class="font-size-sm font-w600 text-uppercase text-muted">
                            <div class="text-left">Total Paid</div>
                        </div>
                        <div class="font-size-h2 font-w400 number text-success">
                            1722.65
                        </div>
                    </base-block>
                </b-col>
                <b-col cols="4">
                    <base-block tag="a" rounded link-pop content-full class="border-right border-danger border-4x"
                                href="javascript:void(0)">

                        <div class="font-size-sm font-w600 text-uppercase text-muted">
                            <div class="text-left">Total Due</div>
                        </div>
                        <div class="font-size-h2 font-w400 number text-danger">
                            1320.00
                        </div>
                    </base-block>
                </b-col>
            </b-row>
            <b-row class="row-deck">

                <!-- Latest Customers -->
                <b-col xl="12">
                    <base-block title="Latest Invoices" header-bg content-full>
                        <template>
                            <Table component="invoice"/>
                        </template>
                    </base-block>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="6" md="3" lg="6" xl="3">
                    <base-block tag="a" rounded link-pop content-full class="border-left border-primary border-4x"
                                href="javascript:void(0)">
                        <div class="font-size-h2 font-w400 text-primary">
                            2
                        </div>

                        <div class="font-size-sm font-w600 text-uppercase text-muted">
                            <div class="text-left">Contact(s)</div>
                        </div>
                    </base-block>
                </b-col>
                <b-col cols="6" md="3" lg="6" xl="3">
                    <base-block tag="a" rounded link-pop content-full class="border-left border-info border-4x"
                                href="javascript:void(0)">
                        <div class="font-size-h2 font-w400 text-info">
                            2
                        </div>

                        <div class="font-size-sm font-w600 text-uppercase text-muted">
                            <div class="text-left">Project(s)</div>
                        </div>

                    </base-block>
                </b-col>
                <b-col cols="6" md="3" lg="6" xl="3">
                    <base-block tag="a" rounded link-pop content-full class="border-left border-success border-4x"
                                href="javascript:void(0)">

                        <div class="font-size-h2 font-w400 text-success ">
                            4
                        </div>
                        <div class="font-size-sm font-w600 text-uppercase text-muted">
                            Invoice(s)
                        </div>
                    </base-block>
                </b-col>
                <b-col cols="6" md="3" lg="6" xl="3">
                    <base-block tag="a" rounded link-pop content-full class="border-left border-warning border-4x"
                                href="javascript:void(0)">
                        <div class="font-size-h2 font-w400 text-warning">
                            1
                        </div>
                        <div class="font-size-sm font-w600 text-uppercase text-muted">
                            Quote(s)
                        </div>
                    </base-block>
                </b-col>
            </b-row>
            <b-row class="row-deck">
                <!-- END Latest Customers -->

                <!-- Latest Orders -->
                <b-col xl="12">
                    <base-block title="Latest Contacts" header-bg content-full>
                        <Table component="contact"/>
                    </base-block>
                </b-col>
                <!-- END Latest Orders -->
            </b-row>
            <!-- END Customers and Latest Orders -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    // Chart.js, https://www.chartjs.org
    import Chart from 'chart.js'

    import Table from "./pages/Table";

    export default {
        components: {
            Table
        },
        data() {
            return {
                chartjsStyles: {
                    position: 'relative',
                    height: '344px'
                },
                chartjsEarningsOptions: {
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMax: 3000
                            }
                        }]
                    },
                    tooltips: {
                        intersect: false,
                        callbacks: {
                            label: (tooltipItems) => {
                                return ' $' + tooltipItems.yLabel
                            }
                        }
                    }
                },
                chartjsSalesOptions: {
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMax: 260
                            }
                        }]
                    },
                    tooltips: {
                        intersect: false,
                        callbacks: {
                            label: (tooltipItems) => {
                                return ' ' + tooltipItems.yLabel + ' Sales'
                            }
                        }
                    }
                },
                chartjsEarningsData: {
                    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                    datasets: [
                        {
                            label: 'This Year',
                            fill: true,
                            backgroundColor: 'rgba(132, 94, 247, .3)',
                            borderColor: 'transparent',
                            pointBackgroundColor: 'rgba(132, 94, 247, 1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(132, 94, 247, 1)',
                            data: [2150, 1350, 1560, 980, 1260, 1720, 1115, 1690, 1870, 2420, 2100, 2730]
                        },
                        {
                            label: 'Last Year',
                            fill: true,
                            backgroundColor: 'rgba(233, 236, 239, 1)',
                            borderColor: 'transparent',
                            pointBackgroundColor: 'rgba(233, 236, 239, 1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(233, 236, 239, 1)',
                            data: [2200, 1700, 1100, 1900, 1680, 2560, 1340, 1450, 2000, 2500, 1550, 1880]
                        }
                    ]
                },
                chartjsSalesData: {
                    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                    datasets: [
                        {
                            label: 'This Year',
                            fill: true,
                            backgroundColor: 'rgba(34, 184, 207, .3)',
                            borderColor: 'transparent',
                            pointBackgroundColor: 'rgba(34, 184, 207, 1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(34, 184, 207, 1)',
                            data: [175, 120, 169, 82, 135, 169, 132, 130, 192, 230, 215, 260]
                        },
                        {
                            label: 'Last Year',
                            fill: true,
                            backgroundColor: 'rgba(233, 236, 239, 1)',
                            borderColor: 'transparent',
                            pointBackgroundColor: 'rgba(233, 236, 239, 1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(233, 236, 239, 1)',
                            data: [220, 170, 110, 215, 168, 227, 154, 135, 210, 240, 145, 178]
                        }
                    ]
                },
                latestCustomers: [
                    {
                        id: 1521,
                        avatar: 'avatar11',
                        name: 'MA Monim',
                        orders: 5
                    },
                    {
                        id: 1520,
                        avatar: 'avatar1',
                        name: 'Betty Kelley',
                        orders: 7
                    },
                    {
                        id: 1519,
                        avatar: 'avatar5',
                        name: 'Jesse Fisher',
                        orders: 12
                    },
                    {
                        id: 1518,
                        avatar: 'avatar12',
                        name: 'Ryan Flores',
                        orders: 19
                    },
                    {
                        id: 1517,
                        avatar: 'avatar3',
                        name: 'Alice Moore',
                        orders: 2
                    },
                    {
                        id: 1516,
                        avatar: 'avatar13',
                        name: 'Scott Young',
                        orders: 5
                    },
                    {
                        id: 1515,
                        avatar: 'avatar14',
                        name: 'Ralph Murray',
                        orders: 9
                    }
                ],
                latestOrders: [
                    {
                        id: 7835,
                        date: 'today',
                        state: 'Pending..',
                        stateVariant: 'warning',
                        total: '$999,99'
                    },
                    {
                        id: 7834,
                        date: 'today',
                        state: 'Pending..',
                        stateVariant: 'warning',
                        total: '$2.299,00'
                    },
                    {
                        id: 7833,
                        date: 'today',
                        state: 'Success',
                        stateVariant: 'success',
                        total: '$1200,00'
                    },
                    {
                        id: 7832,
                        date: 'today',
                        state: 'Cancelled',
                        stateVariant: 'danger',
                        total: '$399,00'
                    },
                    {
                        id: 7831,
                        date: 'today',
                        state: 'Success',
                        stateVariant: 'success',
                        total: '$349,00'
                    },
                    {
                        id: 7830,
                        date: 'today',
                        state: 'Success',
                        stateVariant: 'success',
                        total: '$999,00'
                    },
                    {
                        id: 7829,
                        date: 'today',
                        state: 'Success',
                        stateVariant: 'success',
                        total: '$39,99'
                    },
                    {
                        id: 7828,
                        date: 'today',
                        state: 'Success',
                        stateVariant: 'success',
                        total: '$499,00'
                    },
                    {
                        id: 7827,
                        date: 'today',
                        state: 'Success',
                        stateVariant: 'success',
                        total: '$325,00'
                    }
                ]
            }
        },
        created() {
            // Set Chart.js configuration
            Chart.defaults.global.defaultFontColor = '#495057'
            Chart.defaults.global.defaultFontStyle = '600'
            Chart.defaults.scale.gridLines.color = 'transparent'
            Chart.defaults.scale.gridLines.zeroLineColor = 'transparent'
            Chart.defaults.scale.display = false
            Chart.defaults.scale.ticks.beginAtZero = true
            Chart.defaults.global.elements.line.borderWidth = 0
            Chart.defaults.global.elements.point.radius = 0
            Chart.defaults.global.elements.point.hoverRadius = 0
            Chart.defaults.global.tooltips.cornerRadius = 3
            Chart.defaults.global.legend.labels.boxWidth = 12
        }
    }
</script>
