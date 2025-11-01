# [PROJECT NAME] - UI/UX Design Specification

**Project:** [Project Name]
**Purpose:** [Brief description]
**Design Philosophy:** [e.g., Modern, Professional, Minimalist]
**Version:** 1.0
**Date:** [YYYY-MM-DD]

---

## Design Philosophy

**Core Principles:**
- **[Principle 1]:** Description
- **[Principle 2]:** Description
- **[Principle 3]:** Description

**Visual Identity:**
- [Key characteristic 1]
- [Key characteristic 2]
- [Key characteristic 3]

---

## Color System

**Based on MARCUS2 UI/UX Standards** - See `/methodology/00-foundation/UI_UX_STANDARDS.md`

### Selected Color Palette

```css
/* Accent Colors (Brand-specific) */
--accent-primary: #[HEX];
--accent-hover: #[HEX];
--accent-light: #[HEX];
--accent-border: #[HEX];
```

**Palette Rationale:**
[Explain why these colors were chosen - brand alignment, industry standards, target audience, etc.]

### Additional Brand Colors

```css
/* If you have additional brand-specific colors */
--brand-secondary: #[HEX];
--brand-tertiary: #[HEX];
```

**Usage:**
- Primary accent: [Primary CTAs, links, important highlights]
- Secondary: [Secondary actions, supporting elements]
- Tertiary: [Decorative accents, subtle highlights]

### Status Colors

Using MARCUS2 standard semantic colors:
- Success: `#2B7A4F` - [When to use]
- Warning: `#D97706` - [When to use]
- Error: `#DC2626` - [When to use]
- Info: `#2563EB` - [When to use]

---

## Typography

**Following MARCUS2 UI/UX Standards**

### Font Choice

```css
font-family: [Font Name], -apple-system, BlinkMacSystemFont, sans-serif;
```

**Rationale:** [Why this font was selected]

### Type Scale Usage

| Element | Size | Usage |
|---------|------|-------|
| **Page Title** | H1 (28px) | Main page headings |
| **Section Heading** | H2 (24px) | Major sections |
| **Card Title** | H3 (20px) | Card headers, subsections |
| **Body Text** | Base (16px) | Default content |
| **Small Text** | SM (14px) | Labels, captions |

---

## Component Specifications

### Buttons

**Primary Button:**
- Use for: [Main actions, form submissions, etc.]
- Color: `var(--accent-primary)`
- Examples: "Submit", "Create Account", "Save"

**Secondary Button:**
- Use for: [Alternative actions, cancellations]
- Examples: "Cancel", "Go Back"

**Text Button:**
- Use for: [Tertiary actions, less important options]
- Examples: "Learn More", "Skip"

### Cards

**Standard Card:**
- Use for: [Content containers, list items]
- Padding: 24px
- Border radius: 12px

**Elevated Card:**
- Use for: [Important content, focus areas]
- Padding: 32px
- Border radius: 16px
- Shadow: `var(--shadow-lg)`

### Forms

**Input Fields:**
- Label position: Above input
- Error messages: Below input, red color
- Success indicators: Green checkmark icon

**Validation:**
- Inline validation: On blur
- Form validation: On submit
- Error summary: Top of form

---

## Key Screens

### 1. [Screen Name]

**Purpose:** [What this screen accomplishes]

**Layout:**
```
┌────────────────────────────────────┐
│  [Header]                           │
├────────────────────────────────────┤
│                                     │
│  [Main Content Area]                │
│                                     │
│  [Component 1]                      │
│  [Component 2]                      │
│                                     │
└────────────────────────────────────┘
```

**Key Elements:**
- Element 1: [Description]
- Element 2: [Description]

**User Flow:**
1. User lands on page
2. [Action]
3. [Result]

---

### 2. [Another Screen]

[Repeat structure above]

---

## Interaction Patterns

### Navigation

**Primary Navigation:**
- Type: [Horizontal bar, sidebar, etc.]
- Location: [Top, left side]
- Items: [List navigation items]

**Mobile Navigation:**
- Type: [Hamburger menu, bottom tabs]
- Behavior: [Slide-in, overlay, etc.]

### Animations

**Micro-interactions:**
- Button hover: Slight lift (2px) + shadow increase
- Card hover: Lift (4px) + shadow increase
- Link hover: Color change to `var(--accent-hover)`

**Page Transitions:**
- Type: Fade (200ms)
- Timing: ease-out

### Loading States

- Initial load: Skeleton loaders
- Button loading: Spinner + "Loading..." text
- Form submission: Disabled state + spinner

---

## Responsive Behavior

### Breakpoints

Following MARCUS2 standards:
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Responsive Patterns

**Mobile:**
- Single column layout
- Hamburger navigation
- Full-width cards
- Stacked forms

**Tablet:**
- 2-column grid
- Simplified navigation
- Cards in pairs

**Desktop:**
- Multi-column grid
- Full navigation
- Sidebar layouts

---

## Accessibility

**WCAG 2.1 AA Compliance:**
- [ ] Color contrast verified (4.5:1 minimum)
- [ ] Keyboard navigation tested
- [ ] Focus indicators visible
- [ ] Screen reader compatible
- [ ] All images have alt text
- [ ] Forms properly labeled
- [ ] Semantic HTML used

**Keyboard Navigation:**
- Tab order: Logical flow
- Escape: Closes modals/dropdowns
- Enter/Space: Activates buttons

---

## Asset Requirements

### Images

- Logo: SVG format
- Icons: [Lucide Icons](https://lucide.dev) - 20px size
- Illustrations: [Source or style guide]

### Copy/Content

- Tone: [Professional, Friendly, etc.]
- Voice: [First person, third person]
- Key messaging: [Brand tagline, value props]

---

## Implementation Notes

### Technology Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS + shadcn/ui
- **Icons:** Lucide Icons
- **Animations:** Framer Motion (if needed)

### Setup

1. Copy `/templates/ui-ux/design-system-template.css` to `globals.css`
2. Customize accent colors
3. Copy `/templates/ui-ux/tailwind-config-template.js` to `tailwind.config.js`
4. Install shadcn/ui components as needed

### Component Library

Build in this order:
1. Base components (Button, Card, Input)
2. Layout components (Header, Footer, Container)
3. Feature components (specific to this project)

---

## Design Deliverables

- [ ] Figma mockups for all key screens
- [ ] Component specifications
- [ ] Color palette finalized
- [ ] Typography system documented
- [ ] Interaction patterns defined
- [ ] Responsive breakpoints tested
- [ ] Accessibility checklist completed

---

## Success Metrics

**Design Quality:**
- WCAG 2.1 AA: 100% compliance
- Lighthouse accessibility score: 95+
- Page load: < 2 seconds

**User Experience:**
- Task completion rate: > 90%
- User satisfaction (SUS score): > 80
- Error rate: < 5%

---

## Questions & Decisions

**Open Questions:**
- [ ] [Question 1]
- [ ] [Question 2]

**Design Decisions:**
- **[Decision 1]:** Rationale
- **[Decision 2]:** Rationale

---

**Last Updated:** [Date]
**Designer:** [Name]
**Status:** [Draft / In Review / Approved]
