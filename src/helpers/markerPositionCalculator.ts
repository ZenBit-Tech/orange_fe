interface ReferenceRange {
  referenceMin: number;
  referenceMax: number;
}

export function calculateMarkerPosition(value: number, referenceRange: ReferenceRange): number {
  const { referenceMin, referenceMax } = referenceRange;

  const redLowEnd = referenceMin * 0.5;
  const yellowLowEnd = referenceMin;

  const yellowHighStart = referenceMax;
  const yellowHighEnd = referenceMax * 1.5;
  const redHighEnd = referenceMax * 3;

  let position: number;

  if (value <= 0) {
    position = 0;
  } else if (value < redLowEnd) {
    position = (value / redLowEnd) * 20;
    position = Math.max(0, position);
  } else if (value < referenceMin) {
    const zoneRange = yellowLowEnd - redLowEnd;
    const valueInZone = value - redLowEnd;
    position = 20 + (valueInZone / zoneRange) * 10;
  } else if (value <= referenceMax) {
    const zoneRange = referenceMax - referenceMin;
    const valueInZone = value - referenceMin;
    position = 30 + (valueInZone / zoneRange) * 40;
  } else if (value < yellowHighEnd) {
    const zoneRange = yellowHighEnd - yellowHighStart;
    const valueInZone = value - yellowHighStart;
    position = 70 + (valueInZone / zoneRange) * 10;
  } else if (value < redHighEnd) {
    const zoneRange = redHighEnd - yellowHighEnd;
    const valueInZone = value - yellowHighEnd;
    position = 80 + (valueInZone / zoneRange) * 20;
  } else {
    position = 100;
  }

  return Math.max(0, Math.min(100, position));
}
