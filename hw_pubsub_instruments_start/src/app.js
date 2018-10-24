const InstrumentFamilies = require('./models/instrument_families.js')
const InstrumentMenuView = require('./views/instrument_menu_view.js')
const InstrumentInfoView = require('./views/instrument_info_view.js')
const instrumentData = require('./data/instrument_families.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#instrument-families');
  const elementInfo = new InstrumentMenuView(selectElement);
  elementInfo.bindEvents();

  const instrumentDataModel = new InstrumentFamilies(instrumentData);
  instrumentDataModel.bindEvents();

  const infoSec = document.querySelector('section.instrument-info');
  const instrumentInfo = new InstrumentInfoView(infoSec);
  instrumentInfo.bindEvents();

});
