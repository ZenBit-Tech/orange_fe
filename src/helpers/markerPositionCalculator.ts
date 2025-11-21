interface ReferenceRange {
  referenceMin: number;
  referenceMax: number;
}

export function calculateMarkerPosition(value: number, referenceRange: ReferenceRange): number {
  const { referenceMin, referenceMax } = referenceRange;
  const range = referenceMax - referenceMin;

  const redLowStart = referenceMin - 2 * range;
  const redLowEnd = referenceMin - 0.5 * range;
  const yellowLowStart = redLowEnd;
  const yellowLowEnd = referenceMin;
  const greenStart = referenceMin;
  const greenEnd = referenceMax;
  const yellowHighStart = referenceMax;
  const yellowHighEnd = referenceMax + 0.5 * range;
  const redHighStart = yellowHighEnd;
  const redHighEnd = referenceMax + 2 * range;

  let position: number;

  if (value <= redLowEnd) {
    if (value <= redLowStart) {
      position = 0;
    } else {
      const zoneRange = redLowEnd - redLowStart;
      const valueInZone = value - redLowStart;
      position = (valueInZone / zoneRange) * 20;
    }
  } else if (value < greenStart) {
    const zoneRange = yellowLowEnd - yellowLowStart;
    const valueInZone = value - yellowLowStart;
    position = 20 + (valueInZone / zoneRange) * 10;
  } else if (value <= greenEnd) {
    const zoneRange = greenEnd - greenStart;
    const valueInZone = value - greenStart;
    position = 30 + (valueInZone / zoneRange) * 40;
  } else if (value <= yellowHighEnd) {
    const zoneRange = yellowHighEnd - yellowHighStart;
    const valueInZone = value - yellowHighStart;
    position = 70 + (valueInZone / zoneRange) * 10;
  } else {
    if (value >= redHighEnd) {
      position = 100;
    } else {
      const zoneRange = redHighEnd - redHighStart;
      const valueInZone = value - redHighStart;
      position = 80 + (valueInZone / zoneRange) * 20;
    }
  }

  position = Math.max(0, Math.min(100, position));

  return position;
}
