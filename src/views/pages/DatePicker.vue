<template>

  <div class="form-row form-group">
    <label :for="name" class="col-sm-4 col-form-label">{{ label }}</label>
    <div class="bv-no-focus-ring col">
      <flat-pickr :id="name" class="form-control bg-white" placeholder="d-m-Y" v-model="dateCustom" :config="configCustom"></flat-pickr>
    </div>
  </div>

</template>

<style lang="scss">
// Flatpickr + Custom overrides
@import '~flatpickr/dist/flatpickr.css';
@import './src/assets/scss/vendor/flatpickr';
</style>

<script>
// Flatpickr, for more info and examples you can check out https://github.com/ankurk91/vue-flatpickr-component
import flatPickr from 'vue-flatpickr-component';

export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
  },
  components: {
    flatPickr,
  },
  data () {
    return {
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
      configCustom: { dateFormat: 'd-m-Y' },
      configFriendly: { dateFormat: 'F j, Y' },
      configRange: { mode: 'range', minDate: 'today' },
      configTimeStandalone: { enableTime: true, noCalendar: true, dateFormat: 'H:i' },
      configTimeStandalone24: { enableTime: true, noCalendar: true, dateFormat: 'H:i', time_24hr: true },
      configDateTime: { enableTime: true },
      configDateTime24: { enableTime: true, time_24hr: true },
      configInlineDefault: { inline: true },
      configInlineTime: { inline: true, enableTime: true },
    }
  }
}
</script>
