import { Line, mixins } from 'vue-chartjs'

/** Line Chart.js Base
* @module BaseChart.jsLine
*
* @param {Array} chartData - the data for the chart
* @param {Object} options - the options that change based on theming
*/

export default {
  extends: Line,
  // Use the mixin to make chart reactive
  // This will create the chartData prop and will attach a watcher to it and will update when new data is passed
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Object
    }
  },
  data: function() {
    return {
      internalOptions: {}
    }
  },
  mounted() {
    this.chartData && this.options ? this.renderChart(this.chartData, this.options) : null
    this.internalOptions = this.options;
  },
  watch: {
    options: function (newOptions) {
      if (this.internalOptions !== newOptions) {
        this._data._chart.destroy()
        this.renderChart(this.chartData, newOptions)
        this.internalOptions = newOptions
      }
    }
  },
  methods: {
    // Update function tell chart it has new data and needs to be updated
    // Calls the chart instance's update function
  	update() {
  		this.$data._chart.update()
  	}
  }
}
