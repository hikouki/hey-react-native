import { HeyReactNative } from '../';

const spyLog = jest.spyOn(console, 'log');
spyLog.mockImplementation((x) => x);

Object.defineProperty(window, 'ReactNativeWebView', {
  value: { postMessage: jest.fn() },
});

const global = window as any;

describe('HeyReactNative', () => {
  describe('#emit', () => {
    it("don't output debug log", () => {
      const hey = new HeyReactNative<'ping'>();
      hey.emit({ event: 'ping', value: 'pong' });

      expect(console.log).not.toBeCalled();
      expect(global.ReactNativeWebView.postMessage.mock.calls.length).toBe(1);
      expect(global.ReactNativeWebView.postMessage.mock.calls[0][0]).toBe(
        `{"event":"ping","value":"pong"}`
      );
    });

    it('output debug log', () => {
      const hey = new HeyReactNative({ debug: true });
      hey.emit({ event: 'ping', value: 'pong' });

      expect(console.log).toBeCalled();
      expect(global.ReactNativeWebView.postMessage.mock.calls.length).toBe(1);
      expect(global.ReactNativeWebView.postMessage.mock.calls[0][0]).toBe(
        `{"event":"ping","value":"pong"}`
      );
    });
  });
});
