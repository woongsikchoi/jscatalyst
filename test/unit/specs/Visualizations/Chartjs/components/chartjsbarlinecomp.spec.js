import Component from '@/components/Visualizations/Chartjs/ChartjsBarLineComp'
import { shallow, mount, createLocalVue } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Vue from 'vue'
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex)
// added to suppress the errors from chartjs lib
global.console.error = function() {}

const data = [ { "date": '2017-11-23', "value": 7 }, { "date": '2017-11-22', "value": 2 }, { "date": '2017-11-21', "value": 4 }, { "date": '2017-11-20', "value": 1 }, { "date": '2017-11-19', "value": 1 }, { "date": '2017-11-18', "value": 1 }, { "date": '2017-11-17', "value": 1 }, { "date": '2017-11-16', "value": 1 }, { "date": '2017-11-15', "value": 2 }, { "date": '2017-11-14', "value": 0 } ]
// mock colors because the css stylesheets cannot be loaded into the test environment
var mockBaseColors = jest.fn(() => ["#081A4E", "#092369", "#1A649F", "#2485B4", "#2DA8C9", "#5DC1D0", "#9AD5CD", "#D5E9CB"])
var mockColors = jest.fn(() => ['#351850', '#4F1E71', '#7C388E','#A93B8D', '#BA5288', '#DD7C91', '#F38595', '#EDB7A7'])


var store;

describe('Chartjs BarLine Component light theme', () => {
    let wrapper
    beforeEach(() => {
      store = new Vuex.Store({
        state: {
          themeMod: {
            colorTheme: 'blue'
          }
        }
      })
      wrapper = mount(Component, {
          propsData: {
              dataModel: data
         },
         attachToDocument: true,
         store,
         localVue,
         computed: {
           colors: mockBaseColors
         }
      })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('it renders at all', () => {
        expect(wrapper.contains('canvas')).toBe(true)
        expect(wrapper.html()).toContain('<canvas')
    })

    it('has the right prop data', () => {
      expect(wrapper.props()).toHaveProperty('dataModel')
      expect(wrapper.props().dataModel).toHaveLength(10)
    })

    it('has the right options', () => {
      expect(wrapper.vm.options).toHaveProperty('maintainAspectRatio', false)
      expect(wrapper.vm.options).toEqual({maintainAspectRatio: false})
    })

})

describe('Chartjs BarLine Component dark theme', () => {
    let wrapper
    beforeEach(() => {
      store = new Vuex.Store({
        state: {
          themeMod: {
            colorTheme: 'blue',
            displayTheme: 'dark'
          }
        }
      })
      wrapper = mount(Component, {
          propsData: {
              dataModel: data
         },
         attachToDocument: true,
         store,
         localVue,
         computed: {
           colors: mockBaseColors
         }
      })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('it renders at all', () => {
        expect(wrapper.contains('canvas')).toBe(true)
        expect(wrapper.html()).toContain('<canvas')
    })

    it('has the right prop data', () => {
      expect(wrapper.props()).toHaveProperty('dataModel')
      expect(wrapper.props().dataModel).toHaveLength(10)
    })

    it('has the right options', () => {
      expect(wrapper.vm.options).toHaveProperty('maintainAspectRatio', false)
      expect(wrapper.vm.options).toHaveProperty('legend')
      expect(wrapper.vm.options.legend).toEqual({labels: {fontColor: 'lightgrey'}})
      expect(wrapper.vm.options).toHaveProperty('scales')
    })

    it('has the right colors', () => {
      expect(wrapper.vm.colors).toHaveLength(8)
      expect(wrapper.vm.colors).toEqual(["#081A4E", "#092369", "#1A649F", "#2485B4", "#2DA8C9", "#5DC1D0", "#9AD5CD", "#D5E9CB"])
    })

})

describe('Chartjs BarLine Component different colorTheme', () => {
    let wrapper
    beforeEach(() => {
      store = new Vuex.Store({
        state: {
          themeMod: {
            colorTheme: 'pink'
          }
        }
      })
      wrapper = mount(Component, {
          propsData: {
              dataModel: data
         },
         attachToDocument: true,
         store,
         localVue,
         computed: {
           colors: mockColors
         }
      })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('it renders at all', () => {
        expect(wrapper.contains('canvas')).toBe(true)
        expect(wrapper.html()).toContain('<canvas')
    })

    it('has the right prop data', () => {
      expect(wrapper.props()).toHaveProperty('dataModel')
      expect(wrapper.props().dataModel).toHaveLength(10)
    })

    it('has the right colors array', () => {
      expect(wrapper.vm.colors).toHaveLength(8)
      expect(wrapper.vm.colors).toEqual(['#351850', '#4F1E71', '#7C388E','#A93B8D', '#BA5288', '#DD7C91', '#F38595', '#EDB7A7'])
    })

})

describe('Chartjs BarLine Comp, snapshot', ()=>{
    let wrapper

    beforeEach(() => {
        wrapper = mount(Component, {
          propsData: {
              dataModel: data
         },
         attachToDocument: true,
         store,
         localVue,
         computed: {
           colors: mockBaseColors
         }
        })
    })

    it('matches snapshot', () => {
        let renderer = createRenderer()
        return Vue.nextTick()
            .then(function(){
                renderer.renderToString(wrapper.vm, (err, str) => {
                  if (err) throw new Error(err)
                  expect(str).toMatchSnapshot()
                })
            })

    })

})