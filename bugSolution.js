import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [cameraReady, setCameraReady] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraReady) {
      let photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);
    }
  };

  const cameraRef = React.useRef(null);
  if (hasPermission === null) {
    return <View />; 
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        onCameraReady={() => setCameraReady(true)}
        ref={cameraRef}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 30,
              left: 30,
            }}
            onPress={takePicture}
          >
             <Text style={{color: 'white'}}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {photo && <Image source={{ uri: photo }} style={{ flex: 1 }} />}
    </View>
  );
};
export default App;