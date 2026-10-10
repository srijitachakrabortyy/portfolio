// Soda Can Pop & Fizz Sound Effects Engine

class SodaSoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // SODA CAN POP & FIZZ SOUND EFFECT
  playPopAndFizz() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // Heavy Metal Tab Pop Sound
    const popOsc = this.ctx.createOscillator();
    const popGain = this.ctx.createGain();
    
    popOsc.type = 'triangle';
    popOsc.frequency.setValueAtTime(450, now);
    popOsc.frequency.exponentialRampToValueAtTime(80, now + 0.08);

    popGain.gain.setValueAtTime(0.7, now);
    popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    popOsc.connect(popGain);
    popGain.connect(this.ctx.destination);
    popOsc.start(now);
    popOsc.stop(now + 0.09);

    // High Metallic Snap Click
    const snapOsc = this.ctx.createOscillator();
    const snapGain = this.ctx.createGain();
    
    snapOsc.type = 'sine';
    snapOsc.frequency.setValueAtTime(1800, now);
    snapOsc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

    snapGain.gain.setValueAtTime(0.5, now);
    snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    snapOsc.connect(snapGain);
    snapGain.connect(this.ctx.destination);
    snapOsc.start(now);
    snapOsc.stop(now + 0.05);

    // Carbonated Pressure Hiss
    const bufferSize = this.ctx.sampleRate * 1.5;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.frequency.linearRampToValueAtTime(3500, now + 0.3);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.setValueAtTime(0.8, now + 0.02);
    noiseGain.gain.exponentialRampToValueAtTime(0.15, now + 0.3);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

    noiseSource.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    noiseSource.start(now + 0.02);
    noiseSource.stop(now + 1.4);
  }
}

export const soundEngine = new SodaSoundEngine();
