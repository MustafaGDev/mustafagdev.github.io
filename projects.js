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
        title:         "Crowd Flow",
        badge:         "3D Puzzle",
        icon:          null,
        image:          "images/projects/CrowdFlow_Icon.png",
        thumbGradient: 3,
        tags:          ["Performance Optimization", "C#", "Tilemaps", "Pathfinding", "Game Design"],
        description:   "Help Thousands of People ride their color based buses in this color match level-based challenges.",
        links: {
        code:    null,
        android: "https://play.google.com/store/search?q=crowd%20flow&c=apps",
        ios:     null,
        }
    },
    {
        title:         "Ducks Or Tails",
        badge:         "Idle Clicker",
        icon:          null,
        image:          "images/projects/Dots_Icon.png",
        thumbGradient: 3,
        tags:          ["Unity", "C#", "Game Design", "Economy Systems", "Progression Design"],
        description:   "Vibrant idle clicker with duck-themed progression and prestige mechanics.",
        links: {
        code:    null,
        android: "https://play.google.com/store/apps/details?id=com.cryptyd.dcks&hl=en",
        ios:     "https://apps.apple.com/us/app/duck-or-tails/id6757973350",
        }
    },
    {
    title:         "Spiro Blast",
    badge:         "Hybrid Puzzle",          // text on the thumbnail badge
    icon:          null,
    image:          "images/projects/SpiroBlast_Icon.png",
    thumbGradient: 3,
    tags:          ["Unity 2D", "Splines", "Spine", "Game Design" , "Game Mathematics"],
    description:   "Arcade-style action puzzle built around spiral trajectories and progressively tighter timing challenges.",
    links: {
      code:    null,
      android: "https://play.google.com/store/apps/details?id=com.RotabGames.SpiroBlast",
      ios:     null,
    }
  },
  {
    title:         "Color Block Roll",
    badge:         "3D Puzzle",          // text on the thumbnail badge
    icon:          "🗡️",             // emoji shown when no image is set
    image:         "images/projects/CBR_Icon.png",              // e.g. "images/aether.jpg"
    thumbGradient: 1,                 // 1–6 built-in dark gradients
    tags:          ["Unity 3D", "RayCasting", "Shaders", "Quaternions"],
    description:   "3D block-rotation puzzle: rotate and reorient shapes to pass through fitting gates emphasizing on spatial awareness.",
    links: {
      code:    null,  // (optional) GitHub repo
      android: "https://play.google.com/store/apps/details?id=com.RotabGames.ColorBlockRoll",                   // (optional) Google Play URL
      ios:     "https://apps.apple.com/eg/app/color-block-roll/id6745810312",                   // (optional) App Store URL
    }
  },

  {
    title:         "CSI: Cats Survival Inc",
    badge:         "Idle RPG",
    icon:          null,
    image:          "images/projects/CSI_Icon.png",
    thumbGradient: 3,
    tags:          ["Unity 2D", "C#", "Timeline", "File Encryption" , "ScriptableObjects"],
    description:   "Top-down survivor action with scalable equipment and stat progression.",
    links: {
      code:    null,
      android: "https://play.google.com/store/apps/details?id=com.RotabGames.CatsSurvival",
      ios:     "https://apps.apple.com/jm/app/okicsi-cats-survival-inc/id6748838842",
    }
  },

  {
    title:         "Epic Blast 3D",
    badge:         "2D Puzzle",
    icon:          null,
    image:          "images/projects/EpicBlast_Icon.png",
    thumbGradient: 3,
    tags:          ["Unity", "C#", "ScriptableObjects", "BrainCloud"],
    description:   "Vibrant match-and-blast puzzler with chain reactions and level-based challenges.",
    links: {
      code:    null,
      android: "https://play.google.com/store/apps/details?id=com.RotabGames.EpicBlast3D",
      ios:     "https://apps.apple.com/jm/app/epic-blast-3d-toy-match-games/id6473456080",
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
