import {ZoomApi} from './zoomApi';

((PLUGIN_ID) => {

  const topic = 'topic';
  const start_time = 'start_time';
  const duration = 'duration';
  const meetingNumber = 'meetingNumber';
  const password = 'password';
  const join_url = 'join_url';

  const zoomapi = new ZoomApi(PLUGIN_ID);
  const meetingType = 2;
  const loginUser = kintone.getLoginUser();

  kintone.events.on('mobile.app.record.create.submit', async event => {
    const record = event.record;
    const data = {
      [topic]: record[topic].value,
      'type': meetingType,
      [start_time]: record[start_time].value,
      [duration]: record[duration].value,
      'timezone': loginUser.timezone
    };
    const user = await zoomapi.getUsers().catch(error => {
      const resp = JSON.parse(error[0]);
      alert(resp.message);
    });
    if (!user) return event;
    const userId = user.users[0].id;
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

  kintone.events.on(['mobile.app.record.create.show', 'mobile.app.record.index.edit.show', 'mobile.app.record.edit.show'], event => {
    const record = event.record;
    record[meetingNumber].disabled = true;
    record[password].disabled = true;
    record[join_url].disabled = true;
    return event;
  });

  kintone.events.on(['mobile.app.record.detail.delete.submit', 'mobile.app.record.index.delete.submit'], event => {
    const record = event.record;
    const meetingId = Number(record[meetingNumber].value);
    return zoomapi.deleteMeeting(meetingId).catch(error => {
      const resp = JSON.parse(error[0]);
      alert(resp.message);
    });
  });
})(kintone.$PLUGIN_ID);
