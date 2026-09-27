import CoreImage
let ci = CIImage(contentsOf: URL(fileURLWithPath: CommandLine.arguments[1]), options: [.applyOrientationProperty: true])!
try CIContext().writeJPEGRepresentation(of: ci, to: URL(fileURLWithPath: CommandLine.arguments[2]), colorSpace: CGColorSpace(name: CGColorSpace.sRGB)!, options: [kCGImageDestinationLossyCompressionQuality as CIImageRepresentationOption: 0.97])
