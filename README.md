# RoadGuard AI

You are building a premium, award-worthy web application for a Machine Learning graduation project.

Act as a senior UI/UX designer and front-end engineer. Make every pixel count.

---

## PROJECT

Name: "RoadGuard AI — Accident Severity Prediction System"

Type: ML-powered prediction web app

Team: Ahmed Saad, Youssef Alaa, Mahmoud Mohamed, Ahmed Lotfy

Institution: NTI (National Telecommunications Institute) — Graduation Project 2025

---

## DESIGN SYSTEM

### Color Palette

- Background: #0A0E1A (deep navy black)

- Surface cards: #111827 with subtle border #1F2937

- Primary accent: #3B82F6 (electric blue) — buttons, progress, active states

- Secondary: #6366F1 (indigo) — hover states, gradients

- Severity — Slight: #FCD34D (amber yellow) with glow

- Severity — Serious: #F97316 (vivid orange) with glow

- Severity — Fatal: #EF4444 (bright red) with glow

- Text primary: #F9FAFB

- Text secondary: #9CA3AF

- Success green: #10B981

### Typography

- Font: "Inter" (Google Fonts) — clean, technical, modern

- Headings: font-weight 700-800

- Body: font-weight 400-500

- Use letter-spacing: 0.05em on uppercase labels

### Visual Style

- Glassmorphism cards: background rgba(255,255,255,0.04), backdrop-filter blur(12px), border 1px solid rgba(255,255,255,0.08)

- Subtle grain texture on hero background

- Glowing colored borders on result cards (box-shadow: 0 0 30px colorWithOpacity)

- Smooth transitions: 300ms ease-in-out everywhere

- Micro-animations: inputs lift on focus, buttons pulse on hover

- Rounded corners: border-radius 12-16px on cards, 8px on inputs

---

## PAGES

---

### PAGE 1 — Landing Page

**Layout:** Full-screen hero, centered content

**Header (sticky):**

- Logo left: 🛡️ "RoadGuard AI" in white bold

- Nav right: Home | About | Predict (CTA button in blue)

**Hero Section:**

- Animated background: slow-moving gradient mesh (navy → indigo → dark blue)

- Floating abstract road lines (SVG, very subtle, opacity 8%)

- Badge top: "🎓 NTI Graduation Project 2025" — small pill, indigo background

- H1 (huge, 64px): "Predict Road Accident Severity" — white, bold

- H2 (24px): "AI-powered system trained on 12,316 real accident records" — gray

- CTA Button (large): "Start Prediction →" — gradient blue to indigo, glow on hover

**Stats Row (3 cards below hero):**

| Icon | Number | Label |

|------|--------|-------|

| 🗃️ | 12,316 | Training Records |

| 🤖 | 6 | ML Models Compared |

| 🎯 | 3 | Severity Levels |

**How It Works Section:**

3 steps horizontal:

1. 📝 Fill the Form — Enter accident details

2. 🧠 AI Analysis — Model processes inputs

3. 📊 Get Results — Instant severity prediction

---

### PAGE 2 — Prediction Form

**Layout:** Centered card, max-width 680px, dark glass card

**Top:** Step progress bar — 4 steps with animated fill

Labels: "Location & Time" | "Driver & Vehicle" | "Road Conditions" | "Accident Details"

**STEP 1 — Location & Time**

Fields (2-column grid where possible):

- 🕐 Time of Accident: time picker (styled dark)

- 📅 Day of Week: styled dropdown

  Options: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday

- 📍 Area Type: styled dropdown

  Options: Residential areas, Office areas, Market areas, Rural areas, Hospital areas, School areas, Recreational areas, Industrial areas, Unknown

**STEP 2 — Driver & Vehicle**

- 🧑 Age Band: Under 18 / 18-30 / 31-50 / Over 51

- ⚧ Sex of Driver: Male / Female (toggle button style, not dropdown)

- 🎓 Driving Experience: No Licence / Below 1yr / 1-2yr / 2-5yr / 5-10yr / Above 10yr

- 🚗 Vehicle Type: Automobile / Lorry (7-10Q) / Lorry (11-14Q) / Bajaj / Turbo / Motorcycle / Bicycle / Pickup / Small Lorry / Other

- 🔄 Vehicle Movement: Going straight / Turning left / Turning right / U-Turn / Parked

**STEP 3 — Road & Weather**

- 🛣️ Road Surface Type: Asphalt roads / Earth roads / Gravel roads / Other

- 💧 Road Surface Conditions: Dry / Wet or damp / Snow / Flood over 3cm

- 💡 Light Conditions: Daylight / Darkness - lights lit / Darkness - lights unlit / Dawn

- 🌦️ Weather: Normal / Raining / Raining and Windy / Cloudy / Windy / Fog or mist / Snow / Other

- 🔀 Junction Type: No junction / Y Shape / T Shape / O Shape / Other / Unknown

**STEP 4 — Accident Details**

- 🚘 Number of Vehicles Involved: number slider (1-7) with visual counter

- 🤕 Number of Casualties: number slider (1-8) with visual counter

- 💥 Type of Collision: Collision with roadside-parked vehicles / With pedestrians / Rear-end collision / Rollover / Fall from vehicle / Collision with animals / Other

- ⚠️ Cause of Accident: Moving Backward / Overtaking / Changing lane to the left / Changing lane to the right / No priority to vehicle / No priority to pedestrian / No distancing / Driving carelessly / Driving at high speed / Overspeed / Improper parking / Other

**Navigation:** Back / Next buttons — Next is blue gradient, Back is ghost

**Final step:** "Analyze Accident →" button — large, full width, animated gradient

---

### PAGE 3 — Loading Screen (between form and result)

Full screen transition page:

- Animated brain/AI icon pulsing in center (use Lottie or CSS animation)

- Text cycling every 0.8s:

  - "Processing accident data..."

  - "Running ML model..."

  - "Calculating severity..."

  - "Generating prediction..."

- Progress bar filling from 0 to 100% over 2.5 seconds

- Dark background with subtle grid pattern

---

### PAGE 4 — Results Page

**Center card (max-width 600px) with dramatic reveal animation**

**Result Card — varies by severity:**

IF Slight Injury:

- Border glow: #FCD34D (amber)

- Large icon: ⚠️

- Badge: "SLIGHT INJURY" in amber

- Title: "Low Severity Detected"

- Subtitle: "Minor injuries expected. Prompt medical check recommended."

IF Serious Injury:

- Border glow: #F97316 (orange)

- Large icon: 🚨

- Badge: "SERIOUS INJURY" in orange

- Title: "High Severity Detected"

- Subtitle: "Serious injuries likely. Immediate medical attention required."

IF Fatal Injury:

- Border glow: #EF4444 (red) — stronger pulse animation

- Large icon: 🔴

- Badge: "FATAL INJURY" in red

- Title: "Critical Severity Detected"

- Subtitle: "Life-threatening. Emergency response needed immediately."

**Below the card:**

Confidence Chart:

- Horizontal bar chart (3 bars)

- Slight Injury: amber bar — e.g. 72%

- Serious Injury: orange bar — e.g. 21%

- Fatal Injury: red bar — e.g. 7%

- Bars animate from left to right on load

Input Summary:

- Small collapsible card "View your inputs" showing all entered values in a clean grid

**Buttons:**

- "🔄 New Prediction" — primary blue button

- "📊 About the Model" — ghost button → scrolls to About

---

### PAGE 5 — About Page

**Section 1 — Project**

"RoadGuard AI uses machine learning to predict road accident severity from pre-accident conditions. Trained on the Road Traffic Accidents dataset from Ethiopia containing 12,316 records."

**Section 2 — Models Used (card grid)**

| Model | Type |

|-------|------|

| Logistic Regression | Linear |

| Decision Tree | Tree-based |

| Random Forest | Ensemble |

| K-Nearest Neighbors | Instance-based |

| Support Vector Machine | Kernel-based |

| XGBoost | Boosting |

**Section 3 — Team (profile cards, 4 cards)**

Each card: avatar with colored initials circle, name, "NTI — 2025"

- Ahmed Saad

- Youssef Alaa

- Mahmoud Mohamed

- Ahmed Lotfy

---

## SIMULATION LOGIC (no real API)

```javascript

// Simulate ML prediction on form submit

function simulatePrediction(formData) {

  // Weighted random based on realistic distribution

  const rand = Math.random();

  if (rand < 0.80) return { class: 0, slight: 0.78, serious: 0.17, fatal: 0.05 };

  if (rand < 0.95) return { class: 1, slight: 0.22, serious: 0.68, fatal: 0.10 };

  return { class: 2, slight: 0.08, serious: 0.24, fatal: 0.68 };

}

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://roadguard-ai-predict.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/32ab500c-810f-4522-bc31-1da18f6a6856).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
