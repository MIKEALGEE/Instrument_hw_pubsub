const PubSub = require('../helpers/pubs_sub.js');

const InstrumentMenuView = function(element){
  this.element = element;
}

InstrumentMenuView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    this.populate(allInstruments)
  })
  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('InstrumentMenuView:change', selectedIndex)
  })
}

InstrumentMenuView.prototype.populate = function(instrumentData){
  instrumentData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = InstrumentMenuView;
