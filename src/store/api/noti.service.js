import store from '@/store/store';

let eventSource = null;

const NotificationService = {
  connect(subPath) {
    let isSupportBrowser = !!window.EventSource;
    if (!isSupportBrowser) {
      alert('This brower does not support EventSource!!!');
      return;
    }

    let serverUrl = `${process.env.VUE_APP_PUSH_SERVER_URL}${subPath}`;
    eventSource = new EventSource(serverUrl);
    eventSource.onmessage = (e) => {
      console.log('onmessage......');
      console.log(e);
      if (e.lastEventId === '-1') {
        eventSource.close();
      }
    };

    eventSource.addEventListener('status', (e) => {
      console.log(e);
    });
    eventSource.addEventListener('TRAINING', (e) => {
      console.log(e);
      store.dispatch('noti/setNotification', JSON.parse(e.data));
    });

    eventSource.addEventListener('test_noti', (e) => {
      console.log(e);
      store.dispatch('noti/setNotification', e);
    });
  },

  addListener(eventName) {
    if (!eventSource) {
      return;
    }

    eventSource.addEventListener(eventName, (e) => {
      console.log(e);
      store.dispatch('noti/setNotification', e);
    });
  },
};

export default NotificationService;
