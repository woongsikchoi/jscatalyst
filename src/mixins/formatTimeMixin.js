var formatTimeMixin

export default formatTimeMixin = {
	// methods: {

		// formatTime: function(option){
	  //     let now = this.moment()
	  //     let dateMax = this.moment().add(1, 'day')
	  //     let dateMin
	  //     let returnValue = []
		// if (option === "Today") {
	  //       dateMin = now
	  //       returnValue = [dateMin.format('YYYY-MM-DD'), dateMax.format('YYYY-MM-DD')]
	  //     } else if (option === "Last Week") {
	  //       dateMin = now.subtract(1, 'week')
	  //       returnValue = [dateMin.format('YYYY-MM-DD'), dateMax.format('YYYY-MM-DD')]
	  //     } else if (option === "Last Month") {
	  //       dateMin = now.subtract(1, 'month')
	  //       returnValue = [dateMin.format('YYYY-MM-DD'), dateMax.format('YYYY-MM-DD')]
	  //     } else if (option === "Last 3 Months") {
	  //       dateMin = now.subtract(3, 'months')
	  //       returnValue = [dateMin.format('YYYY-MM-DD'), dateMax.format('YYYY-MM-DD')]
	  //     } else if (option === "Custom Range") {
	  //       // returnValue =  // HTK
	  //     } else if (option === "Reset") {
		//
	  //     }
	  //     return returnValue
	  //   },

			// }

	// 	}
	// }
	data: function() {
		return {
			d3Time: {
				'HH:mm:ss': '%H:%M:%S',
				'H:mm:ss': '%H:%M:%S',
				'hh:mm:ss': '%I:%M:%S',
				'h:mm:ss': '%I:%M:%S',
				'MM/YYYY': '%m/%Y',
				'M/YYYY': '%m/%Y',
				'M/YY': '%m/%y',
				'MMM YYYY': '%b %Y',
				'MMM YY': '%b %y',
				'MM/DD/YY': '%m/%d/%y',
				'MM/DD/YYYY': '%m/%d/%Y',
				'MM-DD-YY': '%m-%d-%y',
				'MM-DD-YYYY': '%m-%d-%Y',
				'MMMM YYYY': '%B %Y',
				'MMMM YY': '%B %y',
				'M/DD/YY': '%m/%d/%y',
				'M/DD/YYYY': '%m/%d/%Y',
				'M-DD-YY': '%m-%d-%y',
				'M-DD-YYYY': '%m-%d-%Y',
				'M/D/YY': '%m/%e/%y',
				'M/D/YYYY': '%m/%e/%Y',
				'M-D-YY': '%m-%e-%y',
				'M-D-YYYY': '%m-%e-%Y',
				'MM/D/YY': '%m/%e/%y',
				'MM/D/YYYY': '%m/%e/%Y',
				'MM-D-YY': '%m-%e-%y',
				'MM-D-YYYY': '%m-%e-%Y',
				'YYYY-MM-DD': '%Y-%m-%d',
				'YYYY-DD-MM': '%Y-%d-%m',
				'D-MMM-YY': '%d-%b-%y',
				'MMMM': '%B',
				'MMM': '%b',
				'ddd': '%a',
				'dddd': '%A',
				'D/MM/YY': '%e/%m/%y',
				'D/MM/YYYY': '%e/%m/%Y',
				'D-MM-YY': '%e-%m-%y',
				'D-MM-YYYY': '%e-%m-%Y',
				'D/M/YY': '%e/%m/%y',
				'D/M/YYYY': '%e/%m/%Y',
				'D-M-YY': '%e-%m-%y',
				'D-M-YYYY': '%e-%m-%Y',
				'DD/M/YY': '%d/%m/%y',
				'DD/M/YYYY': '%d/%m/%Y',
				'DD-M-YY': '%d-%m-%y',
				'DD-M-YYYY': '%d-%m-%Y',
				'DD/MM/YY': '%d/%m/%y',
				'DD/MM/YYYY': '%d/%m/%Y',
				'DD-MM-YY': '%d-%m-%y',
				'DD-MM-YYYY': '%d-%m-%Y',
				'MMMM D': '%B %e',
				'MMM D': '%b %e',
				'M/D': '%m/%e',
				"MMM DD YYYY HH:mm:ss": '%b %d %Y %H:%M:%S'
			}
		}
	}

};