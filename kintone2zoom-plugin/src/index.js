import {ZoomApi} from './zoomApi';

((PLUGIN_ID) => {
  // フィールドコードを変数に格納
  const topic = 'topic';
  const start_time = 'start_time';
  const duration = 'duration';
  const meetingNumber = 'meetingNumber';
  const password = 'password';
  const join_url = 'join_url';

  const zoomapi = new ZoomApi(PLUGIN_ID);
  // ミーティングタイプは「2」の「Scheduled meeting」を指定し、変数に格納
  const meetingType = 2;
  const loginUser = kintone.getLoginUser();

  // レコードが保存されたときに、記入された「会議名」「開始時間」「会議時間」などの情報をもとにzoomミーティングを生成する処理
  kintone.events.on('app.record.create.submit', async event => {
    const record = event.record;
    const data = {
      [topic]: record[topic].value,
      'type': meetingType,
      [start_time]: record[start_time].value,
      [duration]: record[duration].value,
      'timezone': loginUser.timezone
    };
    // zoomユーザー情報を取得
    const user = await zoomapi.getUsers().catch(error => {
      const resp = JSON.parse(error[0]);
      alert(resp.message);
    });
    if (!user) return event;
    const userId = user.users[0].id;
    // 取得したzoomユーザー情報と記入された会議情報でzoomミーティングを生成
    const meetingInfo = await zoomapi.createMeeting(userId, data).catch(error => {
      const resp = JSON.parse(error[0]);
      alert(resp.message);
    });
    if (!meetingInfo) return event;
    record[meetingNumber].value = meetingInfo.id;
    record[join_url].value = meetingInfo.join_url;
    record[password].value = meetingInfo.encrypted_password;
    return event;
  });
  // レコードを作成/編集と、一覧編集画面が表示されるイベントの処理
  kintone.events.on(['app.record.create.show', 'app.record.edit.show', 'app.record.index.edit.show'], event => {
    const record = event.record;
    // 「会議名」「会議パスワード」「会議URL」などの情報を編集不可にする
    record[meetingNumber].disabled = true;
    record[password].disabled = true;
    record[join_url].disabled = true;
    return event;
  });

  // レコードを削除するときに、ミーティングの削除をzoomへ反映する処理
  kintone.events.on(['app.record.detail.delete.submit', 'app.record.index.delete.submit'], event => {
    const record = event.record;
    const meetingId = Number(record[meetingNumber].value);
    return zoomapi.deleteMeeting(meetingId).catch(error => {
      const resp = JSON.parse(error[0]);
      alert(resp.message);
    });
  });
})(kintone.$PLUGIN_ID);
