## KodNest Premium Build System – Design System

A premium SaaS design system for a serious B2C product company. Visual language is **calm, intentional, coherent, confident**. No playful or experimental styling, no visual noise.

---

## 1. Foundations

### 1.1 Color System

**Principles**
- **Maximum chromatic colors**: 3 (accent, success, warning) plus neutral background and primary text.
- **No gradients, no glassmorphism, no neon, no flashy overlays.**
- **No arbitrary extra colors** beyond those defined here. Borders and subtle variations are derived via opacity, not new hex values.

**Palette**
- **Background / Surface**: `#F7F6F3`
  - Used for page background and default surfaces.
  - For subtle distinction between surfaces, use 4–8% overlays of `#111111` or `#000000` in RGBA, not new hex colors.
- **Primary Text / Main Neutral**: `#111111`
  - Used for primary text, icons, and high-contrast elements.
- **Accent / Primary Action**: `#8B0000` (deep red)
  - Used for primary buttons, key highlights, key indicators, and critical emphasis.
- **Success**: _Muted green_ (single token, no variants beyond opacity)
  - Example token name: `color-success` (hex to be chosen once, then fixed).
  - Used for success states, confirmations, and positive badges.
- **Warning**: _Muted amber_ (single token, no variants beyond opacity)
  - Example token name: `color-warning` (hex to be chosen once, then fixed).
  - Used for non-destructive alerts and warnings.

**Usage Rules**
- **Text on light background**: Use `#111111` for all primary copy, headings, labels, and critical text.
- **Disabled states**: Reduce opacity of existing colors (e.g. 40–60%), do **not** introduce new grayscale hex codes.
- **Borders & Dividers**:
  - Use `#111111` at low opacity (8–16%) for borders and dividers.
  - No standalone gray hex values; always derived from `#111111`.

---

### 1.2 Typography

**Principles**
- Clear hierarchy with minimal styles.
- **Headings**: Serif, large, confident, with generous spacing.
- **Body**: Clean sans-serif, 16–18px, line-height 1.6–1.8, max text block width 720px.
- No decorative fonts, no random font sizes.

**Font Families (conceptual)**
- **Serif (Headings)**: e.g. `"Georgia", "Times New Roman", serif` (actual product may swap to a premium serif, but must remain restrained and legible).
- **Sans-serif (Body & UI)**: e.g. `"Inter", "System UI", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

**Type Scale (example)**
- **Display / Context Headline** (for Context Header only)
  - Size: 32–40px
  - Weight: 600
  - Line-height: 1.2–1.3
  - Letter-spacing: slightly expanded (+0.02em max).
- **H1** (primary page titles within workspace)
  - Size: 28–32px
  - Weight: 600
  - Line-height: 1.3
- **H2**
  - Size: 22–24px
  - Weight: 500–600
  - Line-height: 1.4
- **Body**
  - Size: 16–18px
  - Weight: 400
  - Line-height: 1.6–1.8
  - Max width: 720px
- **Caption / Meta**
  - Size: 13–14px
  - Weight: 400–500
  - Line-height: 1.4–1.6

**Rules**
- No font sizes outside the scale above, except for responsive adjustments (e.g. reducing by 2px on smaller screens).
- All long-form text must be constrained to **max-width: 720px**.
- Avoid all-caps except for small, quiet labels (e.g. status badges).

---

### 1.3 Spacing System

**Scale**
- `4px` (micro alignment only, e.g. icon alignment; avoid as primary spacing)
- `8px`
- `16px`
- `24px`
- `40px`
- `64px`

**Rules**
- **Never** use arbitrary values like 13px, 27px, etc.
- **Primary vertical rhythm**: 16px and 24px.
- **Section spacing**: 40px or 64px for large separations (e.g. between Context Header and Workspace).
- Components should use combinations of these values only.

---

## 2. Global Layout Structure

Every page in KodNest Premium Build System follows the same skeleton:

1. **Top Bar**
2. **Context Header**
3. **Primary Workspace + Secondary Panel**
4. **Proof Footer**

There must be **no deviations** from this macro-structure.

---

### 2.1 Top Bar

**Layout**
- Height: 64px.
- Horizontal padding: 24px (desktop), 16px (narrow).
- Background: `#F7F6F3`.
- Border: 1px bottom border using `#111111` at low opacity (8–12%).
- Structure: 3 segments
  - **Left**: Project name (`KodNest Premium Build System` or current project name).
  - **Center**: Progress indicator (`Step X / Y`).
  - **Right**: Status badge (`Not Started`, `In Progress`, `Shipped`).

**Content Rules**
- **Project name**: Serif or sans-serif at H2 or strong body size, never logo-like or playful.
- **Progress indicator**:
  - Text format: `Step 2 / 6`.
  - Body sans-serif, medium weight.
  - Center-aligned in the bar, not floating to one side.
- **Status badge**:
  - Small rectangular pill with subtle border.
  - Background: derived from `#111111` at very low opacity, or for semantic states:
    - `Not Started`: neutral (border only, no fill).
    - `In Progress`: subtle use of accent red with low opacity border or text.
    - `Shipped`: subtle success green border/text.
  - Text: uppercase or small-caps, 13–14px, medium weight.

---

### 2.2 Context Header

**Purpose**
- Sets context for the current step or workspace.
- Must be **calm and direct**, no hype language.

**Layout**
- Vertical stack with generous spacing.
- Padding: 24–40px top/bottom, 24px sides.
- Background: same as page background (`#F7F6F3`) or slightly distinguished with a very subtle border at bottom.

**Content**
- **Headline** (Serif)
  - 1 line wherever possible; if wrapping, keep to two lines max.
  - Confident but neutral tone (e.g. “Define Your Release Criteria”, not “Crush Your Launch!”).
- **Subtext**
  - Single line (or two max) explaining purpose clearly:
  - Example: “Configure the checks required before marking a build as shipped.”
  - Body sans-serif, 16–18px.

**Rules**
- No icons or illustrations in the header.
- No marketing copy; strictly product language.
- Maintain consistent vertical spacing between headline and subtext (e.g. 8–16px).

---

### 2.3 Primary Workspace + Secondary Panel

**Global Layout**
- Horizontal split:
  - **Primary Workspace**: ~70% width.
  - **Secondary Panel**: ~30% width.
- Gap between columns: 24px (never smaller than 16px).
- Padding: 24px around the whole section.

#### Primary Workspace (70%)

**Purpose**
- Main interaction area: forms, lists, configuration cards, tables, etc.

**Rules**
- Layout built with **cards and clear groupings**.
- Use consistent padding inside cards:
  - Minimum: 16px
  - Standard: 24px
  - Large: 32px (composed from the spacing scale).
- Cards have:
  - Background: `#F7F6F3`.
  - Border: 1px using `#111111` at low opacity (8–12%).
  - Border-radius: single global radius (e.g. 6–8px) used consistently across all components.
  - No drop shadows.
- No clutter: leave generous whitespace, avoid packing more than 2–3 distinct interaction groups per card.

#### Secondary Panel (30%)

**Purpose**
- Explain the current step.
- Provide a copyable prompt box.
- Offer action buttons for integration and feedback.

**Content**
- **Step Explanation**
  - Short, 2–4 lines max.
  - Body sans-serif, 16px.
  - Constrained to 720px width if necessary, but typically narrow.
- **Copyable Prompt Box**
  - Looks like a code or note block.
  - Background: use background color with slightly stronger border for emphasis.
  - Monospace or sans-serif with equal line-height.
  - Includes a dedicated “Copy” button aligned to the top-right or top edge.
- **Buttons (stacked or grouped)**
  - `Copy`
  - `Build in Lovable`
  - `It Worked`
  - `Error`
  - `Add Screenshot`

**Visual Style**
- Calm, low-contrast but clear.
- Buttons follow primary/secondary/tertiary rules (see Components).
- Panel uses the same card treatment as primary workspace for consistency.

---

### 2.4 Proof Footer (Persistent)

**Purpose**
- Validate that the work is truly done.
- Acts as a **checklist with proof** for each stage.

**Layout**
- Persistent bar anchored to the bottom of the viewport or page.
- Height: adaptive based on content, minimum 64px.
- Background: `#F7F6F3`, with a top border (1px, using `#111111` at low opacity).
- Padding: 16–24px.
- Content aligned horizontally where possible; stack vertically on smaller screens.

**Checklist Structure**
- Items:
  - `□ UI Built`
  - `□ Logic Working`
  - `□ Test Passed`
  - `□ Deployed`
- Each item:
  - Checkbox or check-indicator on the left.
  - Label text (body sans-serif).
  - **Required proof input** on interaction:
    - A short text input, link field, or reference field appears when checked.
    - User must enter something (e.g. link to PR, test run ID, deployment URL).

**Rules**
- No item can be marked as fully complete without proof input.
- Proof fields use the same input styling as the rest of the system.

---

## 3. Components

### 3.1 Buttons

**Global Rules**
- Border radius: single value used for all buttons (same as cards).
- Hover effect: same pattern for all variants.
- Transition: 150–200ms, `ease-in-out`.
- No bounce, no parallax, no excessive shadow.

#### Primary Button
- **Style**
  - Background: `#8B0000`.
  - Text: `#F7F6F3` (or pure white if required for contrast).
  - Border: none or 1px of the same accent color.
  - Font: sans-serif, medium weight.
  - Padding: vertical 8–12px, horizontal 16–24px (from spacing scale).
- **Hover**
  - Slight darkening of `#8B0000` via opacity or HSL adjustment (no new base color token).
  - Cursor: pointer.
- **Active**
  - Slightly lower brightness and/or inset border.
- **Disabled**
  - Reduced opacity (40–60%).
  - No hover interaction, pointer remains default.

#### Secondary Button
- **Style**
  - Background: transparent or `#F7F6F3`.
  - Text: `#8B0000` or `#111111` depending on context.
  - Border: 1px `#8B0000` or `#111111` at medium opacity.
- **Hover**
  - Light fill using `#8B0000` at very low opacity, or subtle border emphasis.

#### Tertiary / Ghost Button
- Text-only button for low-emphasis actions.
- No border, background transparent.
- Uses `#111111` or accent color for text.
- Underline on hover (optional) rather than new color.

---

### 3.2 Inputs

**General**
- No heavy shadows, no skeuomorphic styling.
- Clear labels, consistent spacing, and obvious focus states.

**Default Input**
- Background: `#F7F6F3` or white-equivalent surface.
- Border: 1px `#111111` at low opacity.
- Border-radius: same global radius.
- Padding: vertical 8px, horizontal 12–16px.
- Font: body sans-serif, 16px.

**Focus State**
- Border color intensifies:
  - Derived from `#8B0000` or `#111111` at higher opacity.
- No glow or shadow; a simple, clear, confident border is sufficient.

**Error State**
- Use warning or accent color for border.
- Provide **clear helper text** below the input explaining:
  - What went wrong.
  - How to fix it.
- Example: “This URL is not reachable. Check that the service is running and the URL includes `https://`.”

**Disabled State**
- Reduced opacity or subtle fill.
- Cursor: not-allowed (for web).

---

### 3.3 Cards

**Structure**
- Background: `#F7F6F3`.
- Border: 1px `#111111` at low opacity.
- Border-radius: global radius.
- Padding: 16–24px.
- Internal layout: vertical stack with consistent 8–16px spacing between sections.

**Header Area**
- Optional title (H2 or strong label).
- Optional meta (caption).

**Content Area**
- Forms, lists, or concise content blocks.
- Avoid more than 2–3 distinct sections per card to prevent crowding.

---

### 3.4 Status Badges & Chips

**Status Badge (Top Bar)**
- Small pill with:
  - Padding: 4px vertical, 8–12px horizontal.
  - Border radius: pill using the same radius or 9999px (single exception for pill shapes).
  - Text: uppercase or small caps, 13–14px.

**Semantic Colors**
- `Not Started`: neutral (border only, text in `#111111`).
- `In Progress`: accent-driven (text or subtle border using `#8B0000`).
- `Shipped`: success color for border and/or text.

---

## 4. Interaction Rules

**Transitions**
- Duration: 150–200ms.
- Timing: `ease-in-out`.
- Apply to:
  - Button hover, focus, and active states.
  - Input focus states.
  - Card hover (if any subtle change is needed).
- No:
  - Bounce easing.
  - Parallax.
  - Overshoot or wobble animations.

**Feedback**
- Every interactive element should provide a clear state change:
  - Hover: mild but noticeable.
  - Active: slightly more pressed.
  - Disabled: visibly distinct.

---

## 5. Error & Empty States

### 5.1 Error States

**Principles**
- Never blame the user.
- Always explain clearly:
  - What went wrong.
  - What the user can do next.

**Visual Design**
- Use warning or accent color for key affordances (border, icon, or title).
- Background remains calm; no large red fills.
- Include:
  - Concise title (what failed).
  - Short description.
  - Next action (button or link).

**Example Messaging**
- “We couldn’t reach your deployment URL. Verify the URL and try again.”
- “This test suite failed on step 3. Review the logs and rerun when ready.”

### 5.2 Empty States

**Principles**
- Never feel dead or blank.
- Provide a clear next action and minimal explanation.

**Visual Design**
- Use standard layout and typography.
- May include:
  - A short headline.
  - 1–2 lines of text.
  - A primary or secondary button for next action.

**Examples**
- “No builds yet. Connect your repository to start tracking builds.”
- “No test results. Run your test suite to see status here.”

---

## 6. Consistency & Governance

**One-Mind Rule**
- Every new screen must:
  - Use the global layout: Top Bar → Context Header → Primary Workspace + Secondary Panel → Proof Footer.
  - Use only the defined colors and spacing scale.
  - Use the typographic scale and max-width rules.
  - Use the same border radius and interaction timings.

**Design Tokens (Conceptual)**
- `color-background` → `#F7F6F3`
- `color-text-primary` → `#111111`
- `color-accent` → `#8B0000`
- `color-success` → muted green hex (TBD once selected)
- `color-warning` → muted amber hex (TBD once selected)
- `radius-base` → single numeric value (e.g. 6–8px)
- `space-1` → 8px
- `space-2` → 16px
- `space-3` → 24px
- `space-4` → 40px
- `space-5` → 64px

**Implementation Notes**
- Any CSS, design tokens, or components must reference these tokens rather than hard-coded arbitrary values.
- Reviews should explicitly check:
  - Color usage against palette.
  - Spacing values against the scale.
  - Layout against the global structure.

This document defines the **KodNest Premium Build System** design system. Product features will be layered on top of this foundation, not modify it ad hoc.

