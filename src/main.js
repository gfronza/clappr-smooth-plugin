import {Log} from 'clappr'
import {Browser} from 'clappr'
import {HTML5Video} from 'clappr'
import {template} from 'clappr'

const MIMETYPES = [
    "text/xml",
    "application/vnd.ms-sstr+xml"
]

export default class Smooth extends HTML5Video {
  get name() { return 'smooth' }

  constructor(options) {
      // plugins have to be registered before invoking the parent's constructor
      // because it's where the source of video tag is set.
      Smooth._registerPlugins()

      super(options)
  }
}

Smooth._registerPlugins = function() {
    try {
        var classId = "Microsoft.Media.AdaptiveStreaming.SmoothByteStreamHandler"
        var extension = ".ism"
        var plugins = new Windows.Media.MediaExtensionManager();

        MIMETYPES.forEach((mimeType, index) => plugins.registerByteStreamHandler(classId, extension, mimeType))
    }
    catch (e) {
        Log.error("Error registering smooth streaming plugins")
    }
}

Smooth.canPlay = function(resourceUrl, mimeType) {
  return !!(Browser.isWindowsPhone && (!!MIMETYPES.indexOf(mimeType) > -1 || !mimeType))
};
