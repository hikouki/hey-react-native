export interface HeyReactNativeEvent<T extends string> {
  event: T;
  value: any;
}

export interface Props {
  debug?: boolean;
}

export interface WindowWithReactNativeWebView extends Window {
  ReactNativeWebView: {
    postMessage: (msg: string) => void;
  };
}

declare var window: Window | WindowWithReactNativeWebView;

export class HeyReactNative<T extends string = string> {
  private readonly debug: Props['debug'];

  constructor(props?: Props) {
    this.debug = !!props?.debug;
  }

  emit(event: HeyReactNativeEvent<T>): boolean {
    if (this.debug) {
      console.log('hey-react-native emit:', event);
    }

    if ('ReactNativeWebView' in window) {
      window.ReactNativeWebView.postMessage(JSON.stringify(event));
      return true;
    }

    return false;
  }
}
