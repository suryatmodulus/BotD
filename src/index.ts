import BotDetector from './detector'
import { BotDetectorInterface, InitOptions } from './types'
import getUserAgent from './sources/userAgent'
import hasUserAgentData from './sources/userAgentData'
import getAppVersion from './sources/appVersion'
import getRTT from './sources/rtt'
import getWindowOuterSize from './sources/windowOuterSize'
import arePermissionsInconsistent from './sources/notificationPermissions'
import getWebGL from './sources/webgl'
import getScreen from './sources/screen'
import getDeviceMemory from './sources/deviceMemory'
import isBigEndian from './sources/endian'
import getHardwareConcurrency from './sources/hardwareConcurrency'
import getInstallTrigger from './sources/installTrigger'
import getWebDriver from './sources/webDriver'
import getEvalLength from './sources/evalLength'
import getPluginsLength from './sources/pluginsLength'
import arePluginsConsistent from './sources/pluginsConsistence'
import getErrorTrace from './sources/errorTrace'
import getErrorFF from './sources/errorFF'
import getOSCPU from './sources/oscpu'
import getPlatform from './sources/platform'
import getProductSub from './sources/productSub'
import getVendor from './sources/vendor'
import getFrequency from './sources/frequency'
import getWindowProperties from './sources/windowProperties'
import getDocumentProperties from './sources/documentProperties'
import getNavigatorProperties from './sources/navigatorProperties'
import getTouchPoints from './sources/touch'
import getSourceBufferType from './sources/sourceBuffer'
import getDocumentElementKeys from './sources/documentElementKeys'
import getWindowClose from './sources/windowClose'
import getWindowExternal from './sources/windowExternal'
import getLanguages from './sources/languages'
import getMimeTypesLength from './sources/mimeTypesLength'
import areMimeTypesConsistent from './sources/mimeTypesConsistence'
import requiredAccelerometerPermission from './sources/accelerometerPermission'
import getTimestamp from './sources/timestamp'
import getBackdropFilter from './sources/backdropFilter'
import getASTCProfiles from './sources/astcProfiles'
import getHairlines from './sources/hairlines'
import isHiDPI from './sources/dpi'
import isDarkTheme from './sources/darkTheme'
import getSABByteLength from './sources/sab'

/**
 * Builds an instance of the BotDetector. It's recommended to call it as early as possible, ideally during application startup.
 *
 * @param {InitOptions} options Configuration options.
 * @returns {Promise<BotDetectorInterface>} A promise to the instance of the bot detector.
 */
export async function load(options: InitOptions): Promise<BotDetectorInterface> {
  const detector = new BotDetector(options)
  await detector.collect({
    userAgent: getUserAgent, // s1
    userAgentData: hasUserAgentData, // s2
    appVersion: getAppVersion, // s3
    rtt: getRTT, // s4
    windowOuterSize: getWindowOuterSize, // s5
    notificationPermissions: arePermissionsInconsistent, // s6
    webgl: getWebGL, // s7
    screen: getScreen, // s8
    deviceMemory: getDeviceMemory, // s9
    endian: isBigEndian, // s10
    hardwareConcurrency: getHardwareConcurrency, // s11
    installTrigger: getInstallTrigger, // s12
    webdriver: getWebDriver, // s13
    evalLength: getEvalLength, // s14
    pluginsLength: getPluginsLength, // s15
    pluginsConsistence: arePluginsConsistent, // s16
    errorTrace: getErrorTrace, // s17
    errorFF: getErrorFF, // s18
    oscpu: getOSCPU, // s19
    platform: getPlatform, // s20
    productSub: getProductSub, // s21
    vendor: getVendor, // s22
    frequency: getFrequency, // s23
    windowProperties: getWindowProperties, // s24
    documentProperties: getDocumentProperties, // s25
    navigatorProperties: getNavigatorProperties, // s26
    touch: getTouchPoints, // s27
    sourceBuffer: getSourceBufferType, // s28
    documentElementKeys: getDocumentElementKeys, // s29
    windowClose: getWindowClose, // s30
    windowExternal: getWindowExternal, // s31
    languages: getLanguages, // s32
    mimeTypesLength: getMimeTypesLength, // s33
    mimeTypesConsistence: areMimeTypesConsistent, // s34
    accelerometerPermission: requiredAccelerometerPermission, // s35
    clientTimestamp: getTimestamp, // s36
    backdropFilter: getBackdropFilter, // s37
    astcProfiles: getASTCProfiles, // s38
    hairlines: getHairlines, // s39
    dpi: isHiDPI, // s40
    darkTheme: isDarkTheme, // s41
    byteLength: getSABByteLength, // s42
  })
  return detector
}

export default { load }

// The exports below are for private usage. They may change unexpectedly. Use them at your own risk.
export const sources = {
  userAgent: getUserAgent, // s1
  appVersion: getAppVersion, // s3
  rtt: getRTT, // s4
  windowOuterSize: getWindowOuterSize, // s5
  notificationPermissions: arePermissionsInconsistent, // s6
  endian: isBigEndian, // s10
  installTrigger: getInstallTrigger, // s12
  pluginsConsistence: arePluginsConsistent, // s16
  errorTrace: getErrorTrace, // s17
  errorFF: getErrorFF, // s18
  productSub: getProductSub, // s21
  frequency: getFrequency, // s23
  windowProperties: getWindowProperties, // s24
  documentProperties: getDocumentProperties, // s25
  navigatorProperties: getNavigatorProperties, // s26
  sourceBuffer: getSourceBufferType, // s28
  documentElementKeys: getDocumentElementKeys, // s29
  windowClose: getWindowClose, // s30
  windowExternal: getWindowExternal, // s31
  languages: getLanguages, // s32
  mimeTypesLength: getMimeTypesLength, // s33
  mimeTypesConsistence: areMimeTypesConsistent, // s34
  accelerometerPermission: requiredAccelerometerPermission, // s35
  backdropFilter: getBackdropFilter, // s37
  astcProfiles: getASTCProfiles, // s38
  hairlines: getHairlines, // s39
  dpi: isHiDPI, // s40
  byteLength: getSABByteLength, // s42
}
