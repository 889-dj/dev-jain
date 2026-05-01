# Minimal Hacker Design System

## Philosophy
This portfolio assumes a developer persona. The site is a tool—raw, minimal, utilitarian, and directly focused on offering value through code and engineering excellence. All generic SaaS marketing aesthetic elements (gradients, drop shadows, rounded corners) are strictly forbidden.

## Typography
- **Primary Font**: `JetBrains Mono Variable` or standard monospace fallbacks.
- **Weights**: Regular (400) for text, Bold (700) for headers.
- **Hierarchy**: No massive "display" texts. Headings should look like file paths (`/about`), commands (`> whoami`), or clear structural comments (`// Skills`).

## Colors
- **Background (`--color-bg`)**: Deep Black `#050505`
- **Surface (`--color-surface`)**: Slightly lighter `#111111` for cards/panels.
- **Border (`--color-border`)**: Dark Green `#1a3a1a` or Dark Gray `#222` to delineate structure.
- **Text Primary (`--color-text`)**: Neon Green `#00ff41` or absolute white `#ffffff`, depending on exact theme usage. Defaulting to strict green.
- **Text Secondary (`--color-text-secondary`)**: Dull Green `#00cc33` or gray.
- **Accent (`--color-accent`)**: Bright Neon Green `#00ff41` or Cyan.
- **Selection**: `rgba(0, 255, 65, 0.25)`

## UI Components
- **Buttons / Actions**: Solid borders, square corners (`border-radius: 0` or very slight `2px`). Hover states invert colors (e.g. green background, black text).
- **Cards / Containers**: Defined purely by border outlines. No shadows. No background glow unless simulating a terminal cursor.
- **Layout**: Grid-based, structured like a split-pane IDE or terminal window. Use `[` and `]` or `<` and `>` for framing decorative elements or tags.
- **Animations**: Step/typing animations, instant snaps, or classic cursor blinking. No slow easing or physics-based smooth floating.

## Personal Brand Voice
- **Copywriting**: Direct, value-driven, professional hacker. Speak directly to clients and employers outlining what problems can be solved, why you are reliable, and what expertise you bring. 
- **Metrics**: Frame metrics strictly in a technical context (e.g. `latency: 12ms`, `bundle_size: -45%`).
