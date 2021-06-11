const MeasurementMs = 1000

function max(a: number[], b: number[]): number[] {
  const result: number[] = []
  for (let i = 0; i < a.length; i++) {
    if (isNaN(a[i])) {
      result.push(b[i])
    } else if (isNaN(b[i])) {
      result.push(a[i])
    } else if (Math.abs(<number>a[i]) > Math.abs(<number>b[i])) {
      result.push(a[i])
    } else {
      result.push(b[i])
    }
  }
  return result
}

function replaceNull(a: number | null): number {
  return a == null ? NaN : <number>a
}

export default async function getAccelerometer(): Promise<number[] | null> {
  let orientation: number[] = [NaN, NaN, NaN]
  let accelerometer: number[] = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]

  let orientationCalls = 0
  let motionCalls = 0

  function handleOrientation(event: DeviceOrientationEvent) {
    orientationCalls++
    orientation = max(orientation, [replaceNull(event.alpha), replaceNull(event.beta), replaceNull(event.gamma)])
  }

  function handleMotion(event: DeviceMotionEvent) {
    motionCalls++
    accelerometer = max(accelerometer, [
      event.accelerationIncludingGravity == null ? NaN : replaceNull(event.accelerationIncludingGravity.x),
      event.accelerationIncludingGravity == null ? NaN : replaceNull(event.accelerationIncludingGravity.y),
      event.accelerationIncludingGravity == null ? NaN : replaceNull(event.accelerationIncludingGravity.z),
      event.acceleration == null ? NaN : replaceNull(event.acceleration.x),
      event.acceleration == null ? NaN : replaceNull(event.acceleration.y),
      event.acceleration == null ? NaN : replaceNull(event.acceleration.z),
      event.rotationRate == null ? NaN : replaceNull(event.rotationRate.beta),
      event.rotationRate == null ? NaN : replaceNull(event.rotationRate.gamma),
      event.rotationRate == null ? NaN : replaceNull(event.rotationRate.alpha),
    ])
  }

  if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
    // iOS 13+
    throw 'needPermission'
  }

  window.addEventListener('devicemotion', handleMotion)
  window.addEventListener('deviceorientation', handleOrientation)
  await new Promise((resolve) => setTimeout(resolve, MeasurementMs))
  window.removeEventListener('devicemotion', handleMotion)
  window.removeEventListener('deviceorientation', handleOrientation)

  if (orientationCalls == 0 && motionCalls == 0) {
    return null
  }

  const result = orientation.concat(accelerometer)
  result.push(orientationCalls)
  result.push(motionCalls)
  return result
}
