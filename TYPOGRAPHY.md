# Typography System

## Overview
This project uses a traditional typography pairing for a classic, elegant feel:

- **Body Text**: Lora (Serif) - An elegant, highly readable serif font with calligraphic roots
- **Headlines**: Inter (Sans-serif) - A clean, modern sans-serif for contrast

## Font Weights Available

### Lora (Body)
- Full variable font with all weights available (400-700 range)
- Includes italic variants

### Inter (Headlines)
- Full variable font with all weights available

## Usage

### Automatic Application
- All body text automatically uses Lora serif
- All headings (h1-h6) automatically use Inter sans-serif

### Manual Application
You can also manually apply fonts using Tailwind utilities:

```tsx
// Use serif font (Lora)
<p className="font-serif">This text uses Lora</p>

// Use sans-serif font (Inter)
<span className="font-sans">This text uses Inter</span>
```

## Design Philosophy

The serif/sans-serif pairing creates:
- **Traditional Feel**: Serif fonts evoke trust, heritage, and timelessness
- **Visual Hierarchy**: The contrast between serif body and sans-serif headlines makes content scannable
- **Readability**: Lora is designed specifically for screen reading with excellent legibility
- **Modern Touch**: Inter keeps the design from feeling dated
- **Elegance**: Lora's calligraphic roots add a refined, sophisticated touch

## Examples

### Headlines
All headlines automatically use Inter:
```tsx
<h1>Main Headline</h1>  // Uses Inter
<h2>Subheading</h2>     // Uses Inter
```

### Body Text
All paragraphs and body text use Lora:
```tsx
<p>This is body text that will render in Lora serif font.</p>
```

### Mixed Usage
```tsx
<div>
  <h2 className="text-3xl font-bold">Welcome</h2>  {/* Inter */}
  <p className="text-lg">Join our community...</p>  {/* Lora */}
</div>
```
