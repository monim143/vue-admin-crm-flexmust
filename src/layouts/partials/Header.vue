<template>
  <!-- Header -->
  <header id="page-header">
    <slot>
      <!-- Header Content -->
      <div class="content-header">
        <!-- Left Section -->
        <div class="d-flex align-items-center">
          <!-- Toggle Sidebar -->
          <base-layout-modifier action="sidebarToggle" size="sm" variant="dual" class="mr-2 d-lg-none">
            <i class="fa fa-fw fa-bars"></i>
          </base-layout-modifier>
          <!-- END Toggle Sidebar -->

          <!-- Toggle Mini Sidebar -->
          <base-layout-modifier action="sidebarMiniToggle" size="sm" variant="dual" class="mr-2 d-none d-lg-inline-block">
            <i class="fa fa-fw fa-ellipsis-v"></i>
          </base-layout-modifier>
          <!-- END Toggle Mini Sidebar -->

          <!-- Apps Modal -->
          <b-modal id="one-modal-apps" size="sm" body-class="p-0" hide-footer hide-header>
            <div class="block block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Apps</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('one-modal-apps')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content block-content-full">
                <div class="row gutters-tiny">
                  <div class="col-6">
                    <!-- CRM -->
                    <base-block tag="a" href="javascript:void(0)" class="bg-default" content-class="text-center" rounded themed hideHeader>
                      <i class="si si-speedometer fa-2x text-white-75"></i>
                      <p class="font-w600 font-size-sm text-white mt-2 mb-3">
                        CRM
                      </p>
                    </base-block>
                    <!-- END CRM -->
                  </div>
                  <div class="col-6">
                    <!-- Products -->
                    <base-block tag="a" href="javascript:void(0)" class="bg-danger" content-class="text-center" rounded themed hideHeader>
                      <i class="si si-rocket fa-2x text-white-75"></i>
                      <p class="font-w600 font-size-sm text-white mt-2 mb-3">
                        Products
                      </p>
                    </base-block>
                    <!-- END Products -->
                  </div>
                  <div class="col-6">
                    <!-- Sales -->
                    <base-block tag="a" href="javascript:void(0)" class="bg-success" content-class="text-center" rounded themed hideHeader>
                      <i class="si si-plane fa-2x text-white-75"></i>
                      <p class="font-w600 font-size-sm text-white mt-2 mb-3">
                        Sales
                      </p>
                    </base-block>
                    <!-- END Sales -->
                  </div>
                  <div class="col-6">
                    <!-- Payments -->
                    <base-block tag="a" href="javascript:void(0)" class="bg-warning" content-class="text-center" rounded themed hideHeader>
                      <i class="si si-wallet fa-2x text-white-75"></i>
                      <p class="font-w600 font-size-sm text-white mt-2 mb-3">
                        Payments
                      </p>
                    </base-block>
                    <!-- END Payments -->
                  </div>
                </div>
              </div>
            </div>
          </b-modal>
          <!-- END Apps Modal -->

        </div>
        <!-- END Left Section -->

        <!-- Right Section -->
        <div class="d-flex align-items-center">
          <!-- User Dropdown -->
          <b-dropdown size="sm" variant="dual" class="d-inline-block ml-2" menu-class="p-0 border-0 font-size-sm" right no-caret>
            <template #button-content>
              <img class="rounded" src="img/avatars/avatar.jpeg" alt="Header Avatar" style="width: 18px;">
              <span class="d-none d-sm-inline-block ml-1">Monim</span>
              <i class="fa fa-fw fa-angle-down d-none d-sm-inline-block"></i>
            </template>
            <li>
              <div class="p-3 text-center bg-primary">
                <img class="img-avatar img-avatar48 img-avatar-thumb" src="img/avatars/avatar.jpeg" alt="Avatar">
              </div>
              <div class="p-2">
                <a class="dropdown-item d-flex align-items-center justify-content-between" >
                  <span>Log Out</span>
                  <i class="si si-logout ml-1"></i>
                </a>
              </div>
            </li>
          </b-dropdown>
          <!-- END User Dropdown -->
        </div>
        <!-- END Right Section -->
      </div>
      <!-- END Header Content -->

      <!-- Header Search -->
      <div id="page-header-search" class="overlay-header bg-white" :class="{ 'show': $store.state.settings.headerSearch }" @keydown.esc="() => $store.commit('headerSearch', { mode: 'off' })">
        <div class="content-header">
          <b-form @submit.stop.prevent="onSubmit" class="w-100">
            <b-input-group size="sm">
              <b-input-group-prepend>
                <base-layout-modifier action="headerSearchOff" variant="danger">
                  <i class="fa fa-fw fa-times-circle"></i>
                </base-layout-modifier>
              </b-input-group-prepend>
              <b-form-input placeholder="Search or hit ESC.." v-model="baseSearchTerm"></b-form-input>
            </b-input-group>
          </b-form>
        </div>
      </div>
      <!-- END Header Search -->

      <!-- Header Loader -->
      <div id="page-header-loader" class="overlay-header bg-white" :class="{ 'show': $store.state.settings.headerLoader }">
        <div class="content-header">
          <div class="w-100 text-center">
            <i class="fa fa-fw fa-circle-notch fa-spin"></i>
          </div>
        </div>
      </div>
      <!-- END Header Loader -->
    </slot>
  </header>
  <!-- END Header -->
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    classes: String
  },
  data () {
    return {
      baseSearchTerm: '',
      notifications: [
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-check-circle text-success',
          title: 'You have a new follower',
          time: '15 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-plus-circle text-info',
          title: '1 new sale, keep it up',
          time: '22 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-times-circle text-danger',
          title: 'Update failed, restart server',
          time: '15 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-plus-circle text-info',
          title: '2 new sales, keep it up',
          time: '33 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-user-plus text-success',
          title: 'You have a new subscriber',
          time: '41 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-check-circle text-success',
          title: 'You have a new follower',
          time: '42 min ago'
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('/backend/pages/generic/search?' + this.baseSearchTerm)
    },
    eventHeaderSearch (event) {
      // When ESCAPE key is hit close the header search section
      if (event.which === 27) {
        event.preventDefault()
        this.$store.commit('headerSearch', { mode: 'off' })
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', this.eventHeaderSearch)
  },
  destroyed () {
    document.removeEventListener('keydown', this.eventHeaderSearch)
  }
}
</script>
