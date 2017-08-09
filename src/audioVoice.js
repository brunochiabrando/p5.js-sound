'use strict';
define(function() {
  var p5sound = require('master');

  /**
   * Base class for synthesizers and instruments
   * handles note triggering and what not
   */
  p5.AudioVoice = function () {


	  //this.osctype = 'sine';
	  //this.volume= 0.33;
	  //this.note = 60;
	  this.note;

	  // this.attack = 0.25;
	  // this.decay=0.25;
	  // this.sustain=0.95;
	  // this.release=0.25;
	  //this.env = new p5.Env(this.attack,this.volume, this.decay,this.volume,  this.sustain, this.volume,this.release);

	  //this.filter.set(22050, 5);

	  //this.env.connect(this.filter);
	  //
	  this.ac = p5sound.audiocontext;
	  this.output = this.ac.createGain();
	  this.connect();

	  p5sound.soundArray.push(this);
  };

  p5.AudioVoice.prototype._setNote = function() {
  };

  p5.AudioVoice.prototype.play = function () {
  };

  p5.AudioVoice.prototype.triggerAttack = function (note, velocity, secondsFromNow) {
  };

  p5.AudioVoice.prototype.triggerRelease = function () {
  };

  p5.AudioVoice.prototype.amp = function(vol, rampTime) {
  };

  p5.AudioVoice.prototype.setParams = function(params) {
  };

  p5.AudioVoice.prototype.loadPreset = function(preset) {
  };

  p5.AudioVoice.prototype.connect = function(unit) {
    var u = unit || p5sound.input;
    this.output.connect(u.input ? u.input : u);
  };

  p5.AudioVoice.prototype.disconect = function() {
    this.output.disconnect();
  };

  p5.AudioVoice.prototype.dispose = function() {
    this.output.disconnect();
    delete this.output;
  };

  return p5.AudioVoice;
});
