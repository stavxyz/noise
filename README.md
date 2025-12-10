# 🎵 Noise - Strudel Live Coding Environment

A live coding environment for creating generative music and noise using [Strudel](https://strudel.cc).

## What is this?

Noise is a simple web-based interface for creating algorithmic music patterns using Strudel's powerful live coding language. Create beats, melodies, ambient soundscapes, and more using text-based patterns.

## Features

- 🎹 Live coding interface for creating music patterns
- 🎨 Multiple example patterns to get started
- 🔊 Real-time audio synthesis
- 🌊 Built-in effects (reverb, delay, filters)
- 📝 Mini notation support for rapid pattern creation

## Quick Start

### Web Interface

1. Install dependencies:
```bash
npm install
```

2. Open `index.html` in a web browser
3. Click "Play" to hear the default pattern
4. Edit the pattern and click "Evaluate" (or press Ctrl+Enter / Cmd+Enter)
5. Try the example patterns by clicking on them

### Node.js Example

Run the example script to see pattern generation:
```bash
npm start
```

## Pattern Examples

### Simple Beat
```javascript
s("bd sd, hh*8").bank("RolandTR909")
```

### Dark Ambient
```javascript
note("c3 eb3 g3 [bb3 c4]")
  .s("sawtooth")
  .lpf(sine.range(400, 2000).slow(8))
  .room(0.5)
```

### Noise Generator
```javascript
note("<[c2 c3]*4 [eb2 eb3]*4 [g2 g3]*4 [bb2 bb3]*4>")
  .s("square")
  .cutoff(500)
  .lpf(perlin.range(200, 2000))
```

## Strudel Basics

- **`note()`**: MIDI note values (e.g., "c3", "eb4")
- **`n()`**: Scale degrees, use with `.scale()`
- **`s()`**: Sound/sample selection
- **`*`**: Repeat (e.g., "bd*4" = 4 bass drums)
- **`[]`**: Subdivision (e.g., "[c e g]" in one beat)
- **`<>`**: Alternate per cycle
- **`stack()`**: Layer multiple patterns

## Effects

- `.lpf()` - Low-pass filter
- `.hpf()` - High-pass filter
- `.room()` - Reverb amount
- `.delay()` - Delay effect
- `.crush()` - Bit crushing
- `.gain()` - Volume

## Learn More

- [Strudel Documentation](https://strudel.cc/)
- [Strudel Tutorial](https://strudel.cc/learn/)
- [Mini Notation Guide](https://strudel.cc/learn/mini-notation/)

## License

ISC