import store from '@/store/store';
import Stomp from 'webstomp-client';
import SockJS from 'sockjs-client';

const WebSocketService = {
  connect(subPath) {
    let serverUrl = `${process.env.VUE_APP_WS_URL}${subPath}`;

    let socket = new SockJS(serverUrl);
    this.stompClient = Stomp.over(socket);
    console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverUrl}`);

    this.stompClient.connect(
      {},
      (frame) => {
        console.log('소켓 연결 성공', frame);

        this.stompClient.subscribe('/send', (res) => {
          console.log('구독으로 받은 메시지 입니다.', res.body);

          store.dispatch('noti/setNotificationWS', JSON.parse(res.body));
        });
      },
      (error) => {
        // 소켓 연결 실패
        console.log('소켓 연결 실패', error);
      }
    );
  },
};

export default WebSocketService;
