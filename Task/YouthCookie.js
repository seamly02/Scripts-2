/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。注：github action用户ck填写到Settings-Secrets里面
let CookieYouth = [
    '',//账号一ck 
    '',//账号二ck,如有更多,依次类推
] ,
    ARTBODYs = ['', ''],
    REDBODYs  = ['', ''],
    READTIME = ['', ''];

if (process.env.YOUTH_HEADER && process.env.YOUTH_HEADER.split('&') && process.env.YOUTH_HEADER.split('&').length > 0) {
  CookieYouth = process.env.YOUTH_HEADER.split('&');
  }
if (process.env.YOUTH_ARTBODY && process.env.YOUTH_ARTBODY.split('&') && process.env.YOUTH_ARTBODY.split('&').length > 0) {
  ARTBODYs = process.env.YOUTH_ARTBODY.split('&');
  }
if (process.env.YOUTH_REDBODY && process.env.YOUTH_REDBODY.split('&') && process.env.YOUTH_REDBODY.split('&').length > 0) {
  REDBODYs = process.env.YOUTH_REDBODY.split('&');
  }
if (process.env.YOUTH_TIME && process.env.YOUTH_TIME.split('&') && process.env.YOUTH_TIME.split('&').length > 0) {
  READTIME = process.env.YOUTH_TIME.split('&');
  }
  
for (let i = 0; i < CookieYouth.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['youthheader_zq' + index] = CookieYouth[i];
  exports['read_zq' + index] = ARTBODYs[i];
  exports['red_zq' + index] = REDBODYs[i];
  exports['readtime_zq' + index] = READTIME[i];
}
