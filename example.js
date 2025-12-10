// Noise - Strudel Example
// This demonstrates using Strudel programmatically in Node.js

import { mini } from '@strudel/mini';
import { Pattern, controls } from '@strudel/core';

// Example 1: Simple pattern
console.log('Example 1: Creating a simple pattern');
const pattern1 = mini('c3 eb3 g3 bb3');
console.log('Pattern:', pattern1.toString());

// Example 2: More complex pattern with subdivision
console.log('\nExample 2: Pattern with subdivisions');
const pattern2 = mini('c3 [eb3 g3] bb3');
console.log('Pattern:', pattern2.toString());

// Example 3: Pattern with repetition
console.log('\nExample 3: Pattern with repetition');
const pattern3 = mini('c3*2 eb3 g3*3 bb3');
console.log('Pattern:', pattern3.toString());

// Example 4: Stacked patterns
console.log('\nExample 4: Stacked patterns');
const bassPattern = mini('c2 eb2 g2 bb2');
const melodyPattern = mini('c4 eb4 g4 bb4');
console.log('Bass:', bassPattern.toString());
console.log('Melody:', melodyPattern.toString());

// Example 5: Using controls/effects
console.log('\nExample 5: Pattern with effects notation');
const effectsPattern = mini('c3 eb3 g3 bb3').slow(2);
console.log('Effects pattern (slow):', effectsPattern.toString());

console.log('\n✓ All examples completed!');
console.log('Open index.html in a browser to hear these patterns live!');
