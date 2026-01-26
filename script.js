// Animated gradient background for portfolio landing page

const header = document.getElementById("hero");

let colors = [
  [106, 17, 203],   // purple
  [37, 117, 252],   // blue
  [255, 102, 102],  // pink
  [0, 204, 204]     // cyan
];

let step = 0;
let colorIndices = [0, 1];
const gradientSpeed = 0.002;

function updateGradient() {
  if (!header) return;

  let c0_0 = colors[colorIndices[0]];
  let c0_1 = colors[colorIndices[1]];

  let istep = 1 - step;
  let r = Math.round(istep * c0_0[0] + step * c0_1[0]);
  let g = Math.round(istep * c0_0[1] + step * c0_1[1]);
  let b = Math.round(istep * c0_0[2] + step * c0_1[2]);

  header.style.background = `rgb(${r}, ${g}, ${b})`;

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
  }

  requestAnimationFrame(updateGradient);
}

// Start the animation
updateGradient();

