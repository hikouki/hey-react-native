# hey-react-native

Send message to react-native app from react-native-webview.

If not in the react-native-webview, It won't do anything.

## Install

```
npm install hey-react-native
```

## Usage

Please refer to [tests](https://github.com/hikouki/hey-react-native/blob/main/__tests__/index.spec.ts).

```typescript
import { HeyReactNative } from "hey-react-native";

const hey = new HeyReactNative({ debug: true });
hey.emit({ event: 'ping', value: 'pong' });

// => console.log {"event":"ping","value":"pong"}
```

## License

hey-react-native is [MIT licensed](https://github.com/hikouki/hey-react-native/blob/main/LICENSE).
