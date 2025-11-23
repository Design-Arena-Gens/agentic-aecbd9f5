'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 1000;

    // Golden hour gradient background
    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, '#f4d9b8');
    bgGradient.addColorStop(0.5, '#e8c9a5');
    bgGradient.addColorStop(1, '#d4b896');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Blurred trees/background elements
    ctx.globalAlpha = 0.3;
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.7;
      const radius = Math.random() * 50 + 30;
      const greenTone = Math.floor(Math.random() * 100 + 100);
      ctx.fillStyle = `rgba(${greenTone - 50}, ${greenTone}, ${greenTone - 70}, 0.4)`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Warm light overlay
    const lightGradient = ctx.createRadialGradient(
      canvas.width * 0.5, canvas.height * 0.3, 50,
      canvas.width * 0.5, canvas.height * 0.3, 400
    );
    lightGradient.addColorStop(0, 'rgba(255, 220, 180, 0.4)');
    lightGradient.addColorStop(1, 'rgba(255, 220, 180, 0)');
    ctx.fillStyle = lightGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Skin tone gradient for face
    const skinGradient = ctx.createRadialGradient(
      canvas.width * 0.5, canvas.height * 0.4, 50,
      canvas.width * 0.5, canvas.height * 0.4, 150
    );
    skinGradient.addColorStop(0, '#ffd5c8');
    skinGradient.addColorStop(0.7, '#f5c3b0');
    skinGradient.addColorStop(1, '#e8b5a0');

    // Head shape
    ctx.fillStyle = skinGradient;
    ctx.beginPath();
    ctx.ellipse(400, 350, 120, 155, 0, 0, Math.PI * 2);
    ctx.fill();

    // Neck
    ctx.fillStyle = '#f5c3b0';
    ctx.beginPath();
    ctx.moveTo(360, 480);
    ctx.lineTo(440, 480);
    ctx.lineTo(430, 560);
    ctx.lineTo(370, 560);
    ctx.closePath();
    ctx.fill();

    // Hair - reddish brown with volume
    const hairGradient = ctx.createLinearGradient(300, 200, 500, 400);
    hairGradient.addColorStop(0, '#8b5a3c');
    hairGradient.addColorStop(0.5, '#a0523d');
    hairGradient.addColorStop(1, '#7d4635');

    ctx.fillStyle = hairGradient;
    ctx.beginPath();
    // Voluminous short hair
    ctx.moveTo(280, 300);
    ctx.bezierCurveTo(250, 250, 260, 200, 320, 190);
    ctx.bezierCurveTo(360, 175, 440, 175, 480, 190);
    ctx.bezierCurveTo(540, 200, 550, 250, 520, 300);
    ctx.bezierCurveTo(510, 320, 500, 340, 490, 360);
    ctx.lineTo(490, 340);
    ctx.bezierCurveTo(480, 310, 470, 300, 450, 290);
    ctx.lineTo(450, 310);
    ctx.lineTo(400, 290);
    ctx.lineTo(350, 310);
    ctx.lineTo(350, 290);
    ctx.bezierCurveTo(330, 300, 320, 310, 310, 340);
    ctx.lineTo(310, 360);
    ctx.closePath();
    ctx.fill();

    // Hair highlights
    ctx.fillStyle = 'rgba(200, 100, 70, 0.3)';
    ctx.beginPath();
    ctx.arc(360, 240, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(440, 240, 25, 0, Math.PI * 2);
    ctx.fill();

    // Eyebrows
    ctx.strokeStyle = '#5a3825';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(345, 340);
    ctx.quadraticCurveTo(360, 335, 375, 338);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(425, 338);
    ctx.quadraticCurveTo(440, 335, 455, 340);
    ctx.stroke();

    // Eyes - expressive
    const eyeGradient = ctx.createRadialGradient(360, 365, 5, 360, 365, 12);
    eyeGradient.addColorStop(0, '#3d2817');
    eyeGradient.addColorStop(0.6, '#6b4423');
    eyeGradient.addColorStop(1, '#4a3020');

    // Left eye white
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(360, 365, 18, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Left iris
    ctx.fillStyle = eyeGradient;
    ctx.beginPath();
    ctx.arc(360, 365, 8, 0, Math.PI * 2);
    ctx.fill();

    // Left pupil
    ctx.fillStyle = '#1a1a1a';
    ctx.beginPath();
    ctx.arc(360, 365, 4, 0, Math.PI * 2);
    ctx.fill();

    // Left eye highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(362, 363, 2, 0, Math.PI * 2);
    ctx.fill();

    // Right eye white
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(440, 365, 18, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Right iris
    ctx.fillStyle = eyeGradient;
    ctx.beginPath();
    ctx.arc(440, 365, 8, 0, Math.PI * 2);
    ctx.fill();

    // Right pupil
    ctx.fillStyle = '#1a1a1a';
    ctx.beginPath();
    ctx.arc(440, 365, 4, 0, Math.PI * 2);
    ctx.fill();

    // Right eye highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(442, 363, 2, 0, Math.PI * 2);
    ctx.fill();

    // Upper eyelashes
    ctx.strokeStyle = '#2a1810';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(345 + i * 8, 355);
      ctx.lineTo(342 + i * 8, 350);
      ctx.stroke();
    }
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(425 + i * 8, 355);
      ctx.lineTo(422 + i * 8, 350);
      ctx.stroke();
    }

    // Nose
    ctx.strokeStyle = 'rgba(210, 150, 130, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(400, 360);
    ctx.lineTo(400, 405);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(395, 410, 4, 0, Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(405, 410, 4, 0, Math.PI);
    ctx.stroke();

    // Lips
    ctx.fillStyle = '#d89080';
    ctx.beginPath();
    ctx.moveTo(370, 445);
    ctx.quadraticCurveTo(385, 440, 400, 440);
    ctx.quadraticCurveTo(415, 440, 430, 445);
    ctx.quadraticCurveTo(415, 453, 400, 453);
    ctx.quadraticCurveTo(385, 453, 370, 445);
    ctx.fill();

    // Lip highlight
    ctx.strokeStyle = 'rgba(255, 200, 200, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(375, 443);
    ctx.quadraticCurveTo(385, 441, 400, 441);
    ctx.stroke();

    // Subtle smile line
    ctx.strokeStyle = 'rgba(200, 140, 120, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(430, 445);
    ctx.quadraticCurveTo(445, 450, 450, 460);
    ctx.stroke();

    // White t-shirt with sleeves
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(300, 560);
    ctx.lineTo(280, 650);
    ctx.lineTo(320, 700);
    ctx.lineTo(370, 560);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(430, 560);
    ctx.lineTo(480, 700);
    ctx.lineTo(520, 650);
    ctx.lineTo(500, 560);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(370, 560);
    ctx.lineTo(320, 1000);
    ctx.lineTo(480, 1000);
    ctx.lineTo(430, 560);
    ctx.closePath();
    ctx.fill();

    // T-shirt shadows
    ctx.fillStyle = 'rgba(200, 200, 200, 0.3)';
    ctx.beginPath();
    ctx.moveTo(370, 560);
    ctx.lineTo(340, 800);
    ctx.lineTo(360, 800);
    ctx.closePath();
    ctx.fill();

    // Warm light on face
    ctx.fillStyle = 'rgba(255, 230, 200, 0.2)';
    ctx.beginPath();
    ctx.ellipse(420, 370, 60, 80, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Soft shadow
    ctx.fillStyle = 'rgba(180, 130, 110, 0.15)';
    ctx.beginPath();
    ctx.ellipse(350, 380, 40, 60, -0.2, 0, Math.PI * 2);
    ctx.fill();

  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f5e6d3 0%, #e8d5c4 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '300',
        color: '#5a4a3a',
        marginBottom: '10px',
        textAlign: 'center',
        letterSpacing: '2px'
      }}>
        RETRATO CONTEMPORÁNEO
      </h1>
      <p style={{
        fontSize: '1rem',
        color: '#8a7a6a',
        marginBottom: '30px',
        textAlign: 'center',
        fontWeight: '300',
        letterSpacing: '1px'
      }}>
        Estética moderna | Golden Hour | Estilo profesional
      </p>
      <canvas
        ref={canvasRef}
        style={{
          maxWidth: '100%',
          maxHeight: '70vh',
          borderRadius: '8px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
          background: '#fff'
        }}
      />
      <div style={{
        marginTop: '30px',
        textAlign: 'center',
        color: '#6a5a4a',
        maxWidth: '600px'
      }}>
        <p style={{
          fontSize: '0.9rem',
          lineHeight: '1.6',
          fontWeight: '300'
        }}>
          <strong>Personalidad:</strong> Segura, creativa y sofisticada
        </p>
        <p style={{
          fontSize: '0.85rem',
          marginTop: '10px',
          fontStyle: 'italic',
          color: '#9a8a7a'
        }}>
          Retrato digital hiperrealista con iluminación cálida de golden hour
        </p>
      </div>
    </div>
  );
}
