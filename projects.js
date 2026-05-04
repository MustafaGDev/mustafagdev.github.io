/**
 * ============================================================
 *  PROJECTS.JS — Add and manage your portfolio projects here
 * ============================================================
 *
 *  HOW TO ADD A PROJECT:
 *  Copy one of the objects below, paste it inside the array,
 *  and fill in your details. All fields marked (optional) can
 *  be set to null to hide them.
 *
 *  THUMBNAIL OPTIONS (pick one):
 *    - image: "images/mygame.jpg"   → use a real screenshot
 *    - icon + thumbGradient          → use an emoji + built-in gradient
 *      thumbGradient: 1–6 (each is a different dark color scheme)
 *
 *  SUPPORTED LINK TYPES:
 *    code    → GitHub / source repo
 *    play    → Live demo / web build
 *    itch    → itch.io page
 *    steam   → Steam store page
 *    trailer → YouTube / video trailer
 * ============================================================
 */

const PROJECTS = [

  {
    title:         "Aether Chronicles",
    badge:         "2D RPG",          // text on the thumbnail badge
    icon:          "🗡️",             // emoji shown when no image is set
    image:         null,              // e.g. "images/aether.jpg"
    thumbGradient: 1,                 // 1–6 built-in dark gradients
    tags:          ["Unity 2D", "C#", "Pixel Art", "ProcGen"],
    description:   "A pixel-art action RPG featuring procedural dungeons, a custom lighting engine, and a rich narrative woven into the environment.",
    links: {
      code:    "https://github.com/",  // (optional) GitHub repo
      android: null,                   // (optional) Google Play URL
      ios:     null,                   // (optional) App Store URL
    }
  },

  {
    title:         "Void Walker",
    badge:         "FPS",
    icon:          "🔫",
    image:         null,
    thumbGradient: 2,
    tags:          ["UE5", "Blueprints", "C++", "Multiplayer"],
    description:   "High-octane movement shooter built in Unreal Engine 5. Features advanced AI behaviors and Niagara particle systems.",
    links: {
      code:    "https://github.com/",
      android: null,
      ios:     null,
    }
  },

  {
    title:         "Neon Link",
    badge:         "Puzzle",
    icon:          "🔮",
    image:         null,
    thumbGradient: 3,
    tags:          ["React", "Three.js", "WebGL", "Minimalist"],
    description:   "Zen puzzle game about connecting nodes in a digital space. Built with WebGL and Three.js for browser-based play.",
    links: {
      code:    "https://github.com/",
      android: null,
      ios:     null,
    }
  },

  // ── ADD MORE PROJECTS BELOW ──────────────────────────────
  // {
  //   title:         "My New Game",
  //   badge:         "Platformer",
  //   icon:          "🏃",
  //   image:         "images/mygame.jpg",   // comment out icon if using image
  //   thumbGradient: 4,
  //   tags:          ["Unity", "C#"],
  //   description:   "Short description of what the game is about.",
  //   links: {
  //     code:    null,
  //     android: "https://play.google.com/store/apps/details?id=...",
  //     ios:     "https://apps.apple.com/app/...",
  //   }
  // },

];
