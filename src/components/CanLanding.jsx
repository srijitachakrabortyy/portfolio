import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/audio';
import FizzCanvas from './FizzCanvas';
import { Volume2, VolumeX, MousePointerClick } from 'lucide-react';

const CanLanding = ({ onOpenPortfolio }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoveringLid, setIsHoveringLid] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [fizzActive, setFizzActive] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);
  const [mode] = useState('photo'); // 'photo' | 'vector3d'

  const triggerOpenSequence = () => {
    if (isOpen) return;

    setIsOpen(true);
    setFizzActive(true);

    // Play synthesized Pop & Fizz audio
    if (soundOn) {
      soundEngine.playPopAndFizz();
    }

    // Trigger shiny silver & red confetti explosion
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.38 },
        colors: ['#BA0C2F', '#E0E0E0', '#FFFFFF', '#FFD700']
      });
    } catch (e) {
      console.log('Confetti playback:', e);
    }

    // Trigger zoom animation
    setTimeout(() => {
      setZoomIn(true);
    }, 150);

    // Navigate to portfolio view
    setTimeout(() => {
      onOpenPortfolio();
    }, 650);
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    const state = soundEngine.toggleSound();
    setSoundOn(state);
  };

  return (
    <div className={`can-landing-container ${zoomIn ? 'zooming-in' : ''}`}>
      {/* Background studio ambiance */}
      <div className="studio-background" />

      {/* Top Header Controls */}
      <div className="landing-top-bar flex-end">
        <div className="top-right-controls">
          <button 
            className="sound-toggle-btn"
            onClick={toggleSound}
            title={soundOn ? "Mute Sound Effects" : "Enable Sound Effects"}
          >
            {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
            <span>{soundOn ? 'Sound ON' : 'Muted'}</span>
          </button>
        </div>
      </div>

      {/* Fizz Particle Engine */}
      <FizzCanvas active={fizzActive} />

      {/* Main Interactive Stage */}
      <div className="can-stage">
        
        {/* Floating Interaction Prompt */}
        <div className={`interaction-hint ${isHoveringLid ? 'active' : ''}`}>
          <MousePointerClick size={16} className="bounce-icon" />
          <span>Tap the lid or button to pop open!</span>
        </div>

        {mode === 'photo' ? (
          /* ================= PHOTOREALISTIC TRANSPARENT CAN MODE ================= */
          <div className={`photo-can-wrapper ${isOpen ? 'can-opened' : ''}`}>
            
            {/* Photorealistic Transparent Diet Coke PNG */}
            <div className="photo-can-image-box">
              <img 
                src="/diet_coke_can.png" 
                alt="Diet Coke Can" 
                className="diet-coke-photo-large"
              />

              {/* Interactive Lid Hotspot right over top lid area */}
              <div 
                className={`photo-lid-hotspot ${isHoveringLid ? 'hovered' : ''}`}
                onClick={triggerOpenSequence}
                onMouseEnter={() => setIsHoveringLid(true)}
                onMouseLeave={() => setIsHoveringLid(false)}
                role="button"
                tabIndex={0}
                aria-label="Tap to open can lid"
              >
                {/* Visual Tab Flip on Pop */}
                <div className={`overlay-tab-pop ${isOpen ? 'popped' : ''}`}>
                  <div className="tab-blade-shadow" />
                </div>

                {/* Foam / Spray anchor */}
                {isOpen && <div className="photo-fizz-anchor" />}

                {/* Glowing Hotspot Ring */}
                {!isOpen && (
                  <div className="lid-hotspot-pulse">
                    <span className="pulse-ring"></span>
                    <span className="hotspot-text">TAP LID</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        ) : (
          /* ================= VECTOR 3D CAN MODE ================= */
          <div className={`can-wrapper ${isOpen ? 'can-opened' : ''}`}>

            {/* SODA CAN LID (TAP TARGET) */}
            <div 
              className={`can-lid-container ${isHoveringLid ? 'lid-hover' : ''}`}
              onClick={triggerOpenSequence}
              onMouseEnter={() => setIsHoveringLid(true)}
              onMouseLeave={() => setIsHoveringLid(false)}
              role="button"
              tabIndex={0}
              aria-label="Tap to open can lid"
            >
              {/* Lid Rim */}
              <div className="can-rim">
                <div className="can-top-surface">
                  <div className={`can-mouth-hole ${isOpen ? 'open' : ''}`}>
                    <div className="mouth-interior" />
                    {isOpen && <div className="fizz-foam" />}
                  </div>

                  <div className={`can-pull-tab ${isOpen ? 'pulled' : ''}`}>
                    <div className="tab-ring"></div>
                    <div className="tab-rivet"></div>
                    <div className="tab-blade"></div>
                  </div>
                </div>
              </div>

              {!isOpen && (
                <div className="lid-hotspot-pulse">
                  <span className="pulse-ring"></span>
                  <span className="hotspot-text">TAP LID</span>
                </div>
              )}
            </div>

            {/* SODA CAN BODY */}
            <div className="can-body">
              <div className="can-top-bevel" />

              <div className="can-cylinder">
                <div className="can-reflection-left" />
                <div className="can-reflection-right" />
                <div className="can-center-specular" />

                <div className="can-label">
                  <div className="label-graphic">
                    <div className="diet-text">Diet</div>
                    <div className="coke-text">Coke</div>
                    <span className="trademark">®</span>
                  </div>
                  <div className="volume-text">12 FL OZ (355 mL)</div>
                </div>
              </div>

              <div className="can-bottom-bevel" />
              <div className="can-bottom-base" />
            </div>

            <div className={`can-shadow ${isOpen ? 'shadow-pop' : ''}`} />
          </div>
        )}

        {/* BOTTOM ACTION BUTTON */}
        <div className="button-container">
          <button 
            className={`meet-srijita-btn ${isOpen ? 'clicked' : ''}`}
            onClick={triggerOpenSequence}
          >
            <span>TAP TO MEET SRIJITA :)</span>
          </button>
        </div>

      </div>

    </div>
  );
};

export default CanLanding;
