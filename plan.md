# Dhilsha & Krishna Das — Royal Wedding Invitation Website
### Build Plan (React + Tailwind + Framer Motion)

> Reference mood: the invitation box you shared — deep maroon velvet, gold zari embroidery, pearl/kundan accents, paisley & lotus motifs, peacock details, cream ivory panels. This is the exact palette and texture language the site should feel like.

---

## 1. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 18 + Vite | fast dev, simple deploy |
| Styling | Tailwind CSS | utility speed + easy custom theme tokens |
| Animation | Framer Motion | scroll reveals, video-to-content transition, text entrance |
| Fonts | Google Fonts (self-hosted for prod) | see §4 |
| Icons/Motifs | custom SVG (mandala, paisley, peacock, diya) | scalable, recolorable, no license issues |
| Audio | HTML5 `<audio>` synced to video play state | autoplay-policy safe (see §6) |
| Deploy target | Vercel / Netlify | static build, zero backend needed |

No backend is required — this is a static single-page site. If an RSVP form is wanted later, that's a small add-on (Formspree / Google Form embed / simple serverless function).

---

## 2. Asset Checklist

### Already have
- [x] `invitation.jpeg` → first frame reference / poster image for hero video
- [ ] `opening-vid.mp4` → **not yet uploaded**. Please add it to the uploads folder before build starts — the hero section is built around its duration and end-frame timing.

### Need to source or generate
| Asset | Source plan |
|---|---|
| Default background music (temporary, royal/instrumental — shehnai or veena style) | royalty-free track from **Pixabay Music** or **YouTube Audio Library** (both free-to-use, no attribution required for the shehnai/traditional category) |
| Mandala / lotus motif (large, gold line-art) | generate as custom SVG (matches embroidery pattern in your reference image) |
| Paisley motif (small accents) | generate as custom SVG |
| Peacock silhouette (corner accent) | generate as custom SVG |
| Diya (lamp) icon for section dividers | generate as custom SVG |
| Marigold garland border asset (optional texture strip) | either generate as a repeating SVG pattern, or source a transparent PNG from Pexels/Pixabay ("marigold garland png") |
| Gold foil corner frame overlays | generate as CSS border-image / SVG corner frames |
| Subtle background texture (velvet/silk weave, very low opacity) | generate as a tiled SVG noise/weave pattern, kept under 5% opacity so text stays readable |

All generated assets will be built as inline SVG components so colors can be tokenized to the palette below and reused everywhere (no external image dependency, crisp at any size).

---

## 3. Color Palette — "Royal Hindu Wedding"

```
--color-maroon-deep:   #6B0F1A   /* primary background, velvet */
--color-maroon-rich:   #8B1E2B   /* secondary panels */
--color-gold:          #C9A24B   /* primary accent, embroidery */
--color-gold-light:    #E8D4A0   /* highlights, hover states */
--color-gold-foil:     #D4AF37   /* metallic borders */
--color-ivory:         #F7F0E3   /* cream panels, text-on-dark areas */
--color-cream-card:    #FBF6EC   /* card backgrounds */
--color-pearl:         #FFFDF7   /* pearl accent dots */
--color-text-dark:     #2A1210   /* body text on light panels */
--color-shadow:        #3D0A10   /* deep shadow / gradient end */
```

Gradient language: maroon → deep maroon-black radial vignettes behind gold text, thin gold hairline borders (1px) with a slightly thicker gold rope-cord border style (matches the piping on your invitation box) around major cards/sections.

---

## 4. Typography

| Use | Font | Notes |
|---|---|---|
| Couple names / hero display | **Cormorant Garamond** (or "Cinzel Decorative" for a more ornate feel) | elegant serif, wedding-invite standard |
| Script accent (the "&" / small flourish text) | **Great Vibes** or **Mrs Saint Delafield** | calligraphic script, used sparingly |
| Section headings | **Cinzel** | classic, regal small-caps look |
| Body / details text | **Marcellus** or **EB Garamond** | readable, still classic |
| Date numerals | **Cormorant SC** | small-caps numeral styling |

All loaded via `@fontsource` packages (self-hosted, no external CDN calls, better performance/privacy than Google Fonts CDN).

---

## 5. Page Structure & Sections

### A. Hero Section (Video Gate)
- Full-viewport section, poster image = extracted first frame from `opening-vid.mp4` (or the invitation photo you shared, gold-toned overlay).
- Centered gold **"Tap to Begin"** button with a soft pulsing glow (Framer Motion `scale`/`opacity` loop) and a small diya icon.
- On tap:
  1. Background music starts (see §6 for autoplay handling).
  2. Video fades in and plays fullscreen/contained.
  3. Mute/unmute control appears (small, corner, unobtrusive).
- On video's final ~2 seconds (timed via `timeupdate` listener or a hardcoded timestamp once you send the real video), video fades out into the royal maroon-and-gold background.
- Names animate in sequentially with Framer Motion:
  - "Dhilsha" slides/fades in from left
  - ornamental "&" scales in with a gold flourish SVG
  - "Krishna Das" slides/fades in from right
  - subtitle line ("request the honour of your presence") fades up last
- A gentle scroll-down indicator (animated chevron or diya) appears once names finish animating.

### B. Save-the-Date Strip
- Date block styled like a royal seal/medallion (circular gold mandala with date inside — echoing the round pearl-centered emblem on your invitation cover).
- **August 23, 2026 · Sunday**
- Small marquee of marigold-garland SVG border top and bottom.

### C. Couple Introduction Panel
- Split card (maroon left / ivory right — mirroring the two-tone velvet-and-silk cover you shared) with the couple's names in large script and an ornamental frame.
- Subtle Framer Motion parallax on the gold mandala emblem as user scrolls.

### D. Event Details — Two Ceremony Cards
Presented as two elegant "invitation cards" side-by-side (stacked on mobile), each styled like a mini version of the reference invitation cover (velvet card, gold rope border, corner motifs, wax-seal-style icon).

**Card 1 — Talikettu**
- Date: Sunday, 23 August 2026
- Venue: Rayyan Palace Auditorium
- Time: 10:30 AM – 11:30 AM

**Card 2 — Reception**
- Date: Monday, 24 August 2026
- Venue: Zawaj Capital Auditorium
- Time: 4:00 PM – 8:00 PM

Each card: gold corner brackets, small peacock or paisley motif top corner, diya icon divider between date/venue/time rows, subtle hover lift (`whileHover={{ y: -6 }}`) on desktop.

### E. Venue Section
- "Rayyan Palace Auditorium, Karuvanpadi – Pattambi" with an embedded Google Map (iframe, styled with a gold rounded frame) and a "Get Directions" gold button.
- Second smaller entry for Zawaj Capital Auditorium reception venue.

### F. Countdown Timer
- Elegant countdown to August 23, 2026, styled as four small gold medallions (Days / Hours / Minutes / Seconds), numbers in Cormorant SC.

### G. Closing / Footer
- Large ornamental mandala centered, couple names again in script, a closing line ("With love and blessings"), soft looping background music continues, small credits line.
- Marigold garland border repeated at the very bottom to visually "close the frame" the way it opened.

---

## 6. Video + Audio Behavior (Important Technical Notes)

- Browsers block autoplay-with-sound until a user gesture. The "Tap to Begin" button **is** that gesture, so triggering `video.play()` and `audio.play()` inside that same click handler will work reliably on both desktop and mobile Safari/Chrome.
- Video element: `muted={false}`, `playsInline`, no `controls` (custom minimal mute toggle only), `preload="auto"`.
- Music: a looping `<audio>` element, started at the same click, volume ducked slightly (e.g. 0.4) so it sits underneath the video's own audio if the video has sound; if the video is silent, raise music volume to ~0.8.
- Transition out of video: use the video's `timeupdate` event to detect the last N seconds and cross-fade (Framer Motion `AnimatePresence`) from `<video>` to the names-reveal layer, rather than waiting for the hard `ended` event — this gives a seamless overlap instead of a jarring cut.
- Since actual video duration/end-frame isn't available yet (file not uploaded), the timing constants will be built as configurable variables (`VIDEO_OUTRO_START_SECONDS`) that you can adjust once the real file is in place.

---

## 7. Animation Inventory (Framer Motion)

| Element | Animation |
|---|---|
| Tap-to-begin button | infinite gentle pulse (scale 1 → 1.05, glow opacity) |
| Video → names transition | cross-fade + slight scale, staggered children for name/&/subtitle |
| Section entrances | `whileInView` fade+slide-up, `staggerChildren` for card groups |
| Ceremony cards | hover lift + gold border glow |
| Mandala emblems | slow continuous rotate (very subtle, ~60s per rotation) as an ambient background detail |
| Countdown numbers | flip/scale transition on value change |
| Scroll progress | thin gold progress bar fixed at top (optional nice touch) |

---

## 8. Folder Structure

```
wedding-invite/
├── public/
│   ├── opening-vid.mp4
│   ├── invitation-poster.jpg      (derived first-frame / provided image)
│   └── audio/
│       └── default-theme.mp3
├── src/
│   ├── assets/
│   │   ├── motifs/                (mandala.svg, paisley.svg, peacock.svg, diya.svg)
│   │   └── patterns/              (velvet-texture.svg, garland-border.svg)
│   ├── components/
│   │   ├── HeroVideo.jsx
│   │   ├── NamesReveal.jsx
│   │   ├── SaveTheDate.jsx
│   │   ├── CoupleIntro.jsx
│   │   ├── EventCard.jsx
│   │   ├── VenueMap.jsx
│   │   ├── Countdown.jsx
│   │   ├── Footer.jsx
│   │   └── shared/ (GoldButton.jsx, SectionWrapper.jsx, OrnamentDivider.jsx)
│   ├── data/
│   │   └── weddingData.js         (couple names, dates, venues, times)
│   ├── styles/
│   │   └── index.css              (Tailwind base + font-face + custom utility classes)
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js              (custom color tokens + font families from §3/§4)
├── index.html
└── package.json
```

`weddingData.js` centralizes all text content so wording can be edited in one place without touching components:

```js
export const wedding = {
  bride: "Dhilsha",
  groom: "Krishna Das",
  date: { day: "Sunday", date: 23, month: "August", year: 2026 },
  talikettu: {
    date: "23 August 2026, Sunday",
    venue: "Rayyan Palace Auditorium, Karuvanpadi – Pattambi",
    time: "10:30 AM – 11:30 AM"
  },
  reception: {
    date: "24 August 2026, Monday",
    venue: "Zawaj Capital Auditorium",
    time: "4:00 PM – 8:00 PM"
  }
};
```

---

## 9. Build Phases

1. **Scaffold** — Vite + React + Tailwind + Framer Motion installed, fonts wired up, color tokens set in `tailwind.config.js`.
2. **Static motifs** — build the reusable SVG motif components (mandala, paisley, peacock, diya, garland border) so every later section can just drop them in.
3. **Hero + video gate** — tap-to-start interaction, audio sync, video-to-names transition (using placeholder timing until real video is uploaded).
4. **Content sections** — Save-the-date, couple intro, the two ceremony cards, venue map, countdown, footer — built and styled to the palette.
5. **Animation pass** — layer in Framer Motion scroll reveals, hover states, ambient motion.
6. **Responsive pass** — mobile-first check (stacked cards, resized hero text, touch-friendly tap target for video start).
7. **Polish** — swap in your real `opening-vid.mp4` and your own song file, fine-tune the outro timing constant, final color/spacing tweaks against your actual invitation photo for a close visual match.
8. **Deploy** — static build to Vercel/Netlify, custom domain if desired.

---

## 10. Open Items / Confirm Before Build

- [ ] Please upload `opening-vid.mp4` (not present in the uploads folder yet) so the outro timing and poster frame can be set accurately.
- [ ] Confirm if a default royalty-free instrumental track is fine as a placeholder song, or if you'd like it silent until your song is added.
- [ ] Confirm if an RSVP form / Google Map pin coordinates are wanted, or if the plan above (details-only, no RSVP) is sufficient for v1.

---

Once you confirm the open items (or say "just proceed with defaults"), I'll scaffold the actual project and start building section by section.
