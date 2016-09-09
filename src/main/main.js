const TimelineWindow = require('./timeline-window');

module.exports = class Main {
  constructor() {
    this.timelineWindow = new TimelineWindow();
  }
  start() {
    new TimelineWindow().start();
  }
};
