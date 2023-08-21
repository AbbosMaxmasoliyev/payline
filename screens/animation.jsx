// import React, { useEffect, useRef,  } from 'react';
// import { Animated, Easing } from 'react-native';
// import LottieView from 'lottie-react-native';
 
// // const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
 
// export default function ControllingAnimationProgress() {
//   const animationProgress = useRef(new Animated.Value(0));
 
//   useEffect(() => {
//     Animated.timing(animationProgress.current, {
//       toValue: 1,
//       duration: 5000,
//       easing: Easing.linear,
//       useNativeDriver: false,
//     }).start();
//   }, []);
 
//   return (
//     <LottieView
//       source={require('./animation_lkvavsl4.json')}
//     //   progress={animationProgress.current}
//     />
//   );
// }
// Changing color of layers:

// NOTE: This feature may not work properly on Android. We will try fix it soon.

import React from 'react';
import LottieView from 'lottie-react-native';
 
export default function ChangingColorOfLayers() {
  return (
    <LottieView
      source={require('./animation_lkvavsl4.json')}
      colorFilters={[
        {
          keypath: 'button',
          color: '#F00000',
        },
        {
          keypath: 'Sending Loader',
          color: '#F00000',
        },
      ]}
      autoPlay
      loop
    />
  );
}