# MediYou Assets

All images go inside this folder. Once added, swap the placeholder
Unsplash URLs in the components for the local paths below.

All files are PNG.

---

## /assets/treatments/

Photos used in the "What we treat" speciality cards.
Recommended size: **400 × 280 px**.

| File name to use         | Card it appears on     | Component         |
|--------------------------|------------------------|-------------------|
| `proctology.png`         | Proctology             | Specialities.jsx  |
| `laparoscopy.png`        | Laparoscopy            | Specialities.jsx  |
| `gynaecology.png`        | Gynaecology            | Specialities.jsx  |
| `ent.png`                | ENT                    | Specialities.jsx  |
| `urology.png`            | Urology                | Specialities.jsx  |
| `vascular.png`           | Vascular               | Specialities.jsx  |
| `aesthetics.png`         | Aesthetics             | Specialities.jsx  |
| `orthopedics.png`        | Orthopedics            | Specialities.jsx  |
| `ophthalmology.png`      | Ophthalmology          | Specialities.jsx  |
| `ivf-fertility.png`      | IVF & Fertility        | Specialities.jsx  |

---

## /assets/doctors/

Doctor profile photos. Displayed as a circle, cropped from center.
Recommended size: **200 × 200 px minimum**, square crop works best.

| File name to use         | Doctor                   | Component      |
|--------------------------|--------------------------|----------------|
| `dr-anjali-mehta.png`    | Dr. Anjali Mehta         | Surgeons.jsx   |
| `dr-rajan-kulkarni.png`  | Dr. Rajan Kulkarni       | Surgeons.jsx   |
| `dr-priya-nambiar.png`   | Dr. Priya Nambiar        | Surgeons.jsx   |

---

## /assets/illustrations/

Decorative illustrations used in section headers.
Recommended size: **400 × 280 px**.

| File name to use         | Used in                  | Component         |
|--------------------------|--------------------------|-------------------|
| `specialities.png`       | "What we treat" header   | Specialities.jsx  |
| `weight-loss.png`        | "Weight Loss" header     | WeightLoss.jsx    |

---

## How to swap in local images (after adding files)

### Treatment photos — Specialities.jsx
Find the `SPECIALITIES` array and replace the `img` URLs:
```js
// Before
img: 'https://images.unsplash.com/photo-...'

// After
img: '/assets/treatments/proctology.png'
```

### Doctor photos — Surgeons.jsx
Find the `SURGEONS` array and replace the `photo` URLs:
```js
// Before
photo: 'https://images.unsplash.com/photo-...'

// After
photo: '/assets/doctors/dr-anjali-mehta.png'
```

### Illustrations — Specialities.jsx / WeightLoss.jsx
Replace the inline SVG components with an `<img>` tag:
```jsx
// Replace <SpecIllustration /> with:
<img src="/assets/illustrations/specialities.png" alt="" aria-hidden="true"
     style={{ width: 200, flexShrink: 0 }} />
```
