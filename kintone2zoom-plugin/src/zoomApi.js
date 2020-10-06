export class ZoomApi {
  constructor(token) {
    this.preUrl = 'https://api.zoom.us/v2';
    this.authorization = `Bearer ${token}`;
  }

  zoomUrl(apiUrl) {
    return this.preUrl + apiUrl;
  }

  // zoomユーザーを取得する処理
  getUsers() {
    const apiUrl = '/users';
    const headers = {
      'authorization': this.authorization
    };

    return kintone.proxy(this.zoomUrl(apiUrl), 'GET', headers, '').then(args => {
      // ユーザー情報の取得が成功した場合の処理
      if (args[1] === 200) {
        const resp = JSON.parse(args[0]);
        return resp;
      }
      return Promise.reject(args);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  // zoomミーティングを生成する処理
  createMeeting(userId, data) {
    const apiUrl = `/users/${userId}/meetings`;
    const headers = {
      'authorization': this.authorization,
      'Content-Type': 'application/json'
    };
    return kintone.proxy(this.zoomUrl(apiUrl), 'POST', headers, data).then(args => {
      // ミーティングの作成が成功した場合の処理
      if (args[1] === 201) {
        const resp = JSON.parse(args[0]);
        return resp;
      }

      return Promise.reject(args);

    }).catch(error => {
      return Promise.reject(error);
    });
  }

  // zoomミーティングを削除する処理
  deleteMeeting(meetingId) {
    const apiUrl = `/meetings/${meetingId}`;
    const headers = {
      'authorization': this.authorization
    };
    return kintone.proxy(this.zoomUrl(apiUrl), 'DELETE', headers, '').then(args => {
      // ミーティングの削除が失敗した場合の処理
      if (args[1] !== 204) alert('ミーティングの削除をzoomに反映できませんでした');
    }).catch(error => {
      return Promise.reject(error);
    });
  }
}
