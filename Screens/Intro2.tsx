import React from 'react'
import { Alert, Dimensions, Text, View } from 'react-native'
import { CameraScreen } from 'react-native-camera-kit';
 function Intro2() {
 const screen_height=Dimensions.get('screen').height
 
  return (
    <>
    <CameraScreen
  // Barcode props
  scanBarcode={true}
  onReadCode={() => Alert.alert('QR code found')} // optional
  showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
  laserColor='red' // (default red) optional, color of laser in scanner frame
  frameColor='white' // (default white) optional, color of border of scanner frame
  cameraRatioOverlay={undefined}
  captureButtonImage={undefined}
  captureButtonImageStyle={{}}
  cameraFlipImage={undefined}
  cameraFlipImageStyle={{}}
  hideControls={undefined}
  torchImageStyle={{}}
  onBottomButtonPressed={function(): void{
    throw new Error('function not implemented.')
  }
  }
/>
    </>
  )
}
export default Intro2