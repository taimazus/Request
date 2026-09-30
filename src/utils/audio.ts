/**
 * Audio Engine for Celestial Birthday Invitation:
 * - Ultra-realistic paper/cardboard flip sound effect with physical air displacement and gold shimmer
 * - Royal celestial chimes for breaking the seal and opening the envelope
 * - Old gentle piano/synth melodies have been completely removed as requested, leaving exclusively "Harpy Hare in 26edo - Bryan Deister" in the music widget.
 */

class CelestialAudioPlayer {
  private ctx: AudioContext | null = null;

  public getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public stopMusic() {
    // Old music fully removed
  }

  public toggleMusic(): boolean {
    return false;
  }

  public getIsPlaying(): boolean {
    return false;
  }

  /**
   * Ultra-realistic physical sound effect of unfolding luxury envelope / flip
   */
  public playCardFlipSound() {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // 1. Air displacement whoosh (White noise through resonant bandpass)
      const bufferSize = Math.floor(ctx.sampleRate * 0.16);
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(550, now);
      filter.frequency.exponentialRampToValueAtTime(1400, now + 0.08);
      filter.frequency.exponentialRampToValueAtTime(320, now + 0.16);
      filter.Q.setValueAtTime(2.2, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.linearRampToValueAtTime(0.24, now + 0.06);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

      noiseSource.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noiseSource.start(now);
      noiseSource.stop(now + 0.16);

      // 2. Thick Card Stock Body "Thump" (Subtle low resonant snap)
      const cardBodyOsc = ctx.createOscillator();
      const cardBodyGain = ctx.createGain();
      
      cardBodyOsc.type = 'sine';
      cardBodyOsc.frequency.setValueAtTime(130, now + 0.04);
      cardBodyOsc.frequency.exponentialRampToValueAtTime(55, now + 0.18);

      cardBodyGain.gain.setValueAtTime(0.001, now + 0.04);
      cardBodyGain.gain.linearRampToValueAtTime(0.18, now + 0.07);
      cardBodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      cardBodyOsc.connect(cardBodyGain);
      cardBodyGain.connect(ctx.destination);

      cardBodyOsc.start(now + 0.04);
      cardBodyOsc.stop(now + 0.23);

      // 3. Crisp Paper Edge Snap (Tiny high transient)
      const snapOsc = ctx.createOscillator();
      const snapGain = ctx.createGain();
      const snapFilter = ctx.createBiquadFilter();

      snapFilter.type = 'highpass';
      snapFilter.frequency.setValueAtTime(1800, now + 0.08);

      snapOsc.type = 'triangle';
      snapOsc.frequency.setValueAtTime(2400, now + 0.08);
      snapOsc.frequency.exponentialRampToValueAtTime(800, now + 0.15);

      snapGain.gain.setValueAtTime(0.001, now + 0.08);
      snapGain.gain.linearRampToValueAtTime(0.08, now + 0.095);
      snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      snapOsc.connect(snapFilter);
      snapFilter.connect(snapGain);
      snapGain.connect(ctx.destination);

      snapOsc.start(now + 0.08);
      snapOsc.stop(now + 0.19);

      // 4. Subtle Celestial Gold Shimmer
      const chimeFreqs = [880.00, 1174.66];
      chimeFreqs.forEach((freq, idx) => {
        const chimeOsc = ctx.createOscillator();
        const chimeGain = ctx.createGain();

        chimeOsc.type = 'sine';
        chimeOsc.frequency.setValueAtTime(freq, now + 0.12 + idx * 0.04);

        chimeGain.gain.setValueAtTime(0.001, now + 0.12 + idx * 0.04);
        chimeGain.gain.linearRampToValueAtTime(0.04, now + 0.14 + idx * 0.04);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);

        chimeOsc.connect(chimeGain);
        chimeGain.connect(ctx.destination);

        chimeOsc.start(now + 0.12 + idx * 0.04);
        chimeOsc.stop(now + 0.6);
      });
    } catch {
      // AudioContext not permitted yet
    }
  }

  public playChime() {
    this.playCardFlipSound();
  }

  public playCelestialChimeSound() {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const chimeFreqs = [1046.50, 1318.51, 1567.98]; // C6, E6, G6 celestial triad
      chimeFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.001, now + idx * 0.05);
        gain.gain.linearRampToValueAtTime(0.035, now + idx * 0.05 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.65);
      });
    } catch {
      // AudioContext not permitted yet
    }
  }
}

export const celestialAudio = new CelestialAudioPlayer();
