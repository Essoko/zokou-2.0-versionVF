const a0_0x4849f8=a0_0x4c29;(function(_0x1279d2,_0x553cd9){const _0x59f649=a0_0x4c29,_0xd3f797=_0x1279d2();while(!![]){try{const _0x242d96=-parseInt(_0x59f649(0x17d))/0x1*(-parseInt(_0x59f649(0x186))/0x2)+parseInt(_0x59f649(0x177))/0x3+-parseInt(_0x59f649(0x17a))/0x4*(-parseInt(_0x59f649(0x169))/0x5)+-parseInt(_0x59f649(0x16c))/0x6*(parseInt(_0x59f649(0x172))/0x7)+parseInt(_0x59f649(0x16b))/0x8+-parseInt(_0x59f649(0x166))/0x9*(-parseInt(_0x59f649(0x178))/0xa)+-parseInt(_0x59f649(0x17c))/0xb*(parseInt(_0x59f649(0x182))/0xc);if(_0x242d96===_0x553cd9)break;else _0xd3f797['push'](_0xd3f797['shift']());}catch(_0x449d71){_0xd3f797['push'](_0xd3f797['shift']());}}}(a0_0x454d,0xe9adb));const a0_0xf02ced=(function(){let _0x267cb6=!![];return function(_0x3cc892,_0x17229f){const _0x4d8899=_0x267cb6?function(){const _0x4704f6=a0_0x4c29;if(_0x17229f){const _0x4fca7e=_0x17229f[_0x4704f6(0x185)](_0x3cc892,arguments);return _0x17229f=null,_0x4fca7e;}}:function(){};return _0x267cb6=![],_0x4d8899;};}()),a0_0x5babc2=a0_0xf02ced(this,function(){const _0x50a317=a0_0x4c29;return a0_0x5babc2[_0x50a317(0x165)]()['search']('(((.+)+)+)+$')[_0x50a317(0x165)]()[_0x50a317(0x176)](a0_0x5babc2)['search'](_0x50a317(0x171));});a0_0x5babc2(),require(a0_0x4849f8(0x16a))['config']();function a0_0x4c29(_0xa1f887,_0x411163){const _0x14336d=a0_0x454d();return a0_0x4c29=function(_0x5babc2,_0xf02ced){_0x5babc2=_0x5babc2-0x164;let _0x454d20=_0x14336d[_0x5babc2];return _0x454d20;},a0_0x4c29(_0xa1f887,_0x411163);}const {Pool}=require('pg'),s=require(a0_0x4849f8(0x16e));var dbUrl=s[a0_0x4849f8(0x16d)]?s[a0_0x4849f8(0x16d)]:'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableAfk=async()=>{const _0x335957=a0_0x4849f8;try{await pool['query']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20afk\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20etat\x20text\x20DEFAULT\x20\x27off\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20message\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lien\x20text\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20'),console[_0x335957(0x164)](_0x335957(0x184));}catch(_0x4333eb){console[_0x335957(0x16f)](_0x335957(0x17b),_0x4333eb);}};creerTableAfk();function a0_0x454d(){const _0x52c9c6=['L\x27enregistrement\x20AFK\x20a\x20été\x20ajouté\x20ou\x20mis\x20à\x20jour\x20avec\x20succès.','exports','2304AHmKrZ','length','La\x20table\x20\x27afk\x27\x20a\x20été\x20créée\x20avec\x20succès.','apply','1129594oFcMca','log','toString','207sdnNlX','\x0a\x20\x20\x20\x20\x20\x20\x20\x20UPDATE\x20afk\x0a\x20\x20\x20\x20\x20\x20\x20\x20SET\x20etat\x20=\x20$1\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20=\x20$2\x0a\x20\x20\x20\x20\x20\x20\x20\x20RETURNING\x20*;\x0a\x20\x20\x20\x20\x20\x20','succes','5GlBixw','dotenv','292672CptAcr','366jaZlMf','DATABASE_URL','../set','error','query','(((.+)+)+)+$','206227LaUkUl','rows','L\x27enregistrement\x20AFK\x20n\x27existe\x20pas.','not\x20defined','constructor','4881360hPDuZy','442030tnKsct','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20de\x20l\x27enregistrement\x20AFK:','2891188rxPCeT','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27afk\x27:','101893WvkFyZ','2wCDTbS','L\x27état\x20de\x20l\x27enregistrement\x20AFK\x20a\x20été\x20modifié\x20avec\x20succès.','\x0a\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20afk\x20(id,\x20message,\x20lien)\x0a\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20($1,\x20$2,\x20$3)\x0a\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT\x20(id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20DO\x20UPDATE\x20SET\x20message\x20=\x20$2,\x20lien\x20=\x20$3;\x0a\x20\x20\x20\x20\x20\x20'];a0_0x454d=function(){return _0x52c9c6;};return a0_0x454d();}async function addOrUpdateAfk(_0x10edbf,_0x270438,_0x5ebeef){const _0x32fd49=a0_0x4849f8;try{await pool[_0x32fd49(0x170)](_0x32fd49(0x17f),[_0x10edbf,_0x270438,_0x5ebeef]),console['log'](_0x32fd49(0x180));}catch(_0x53b04f){console[_0x32fd49(0x16f)](_0x32fd49(0x179),_0x53b04f);}}async function getAfkById(_0x1c5fa1){const _0x2deeba=a0_0x4849f8;try{const {rows:_0x51db43}=await pool[_0x2deeba(0x170)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20*\x20FROM\x20afk\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20=\x20$1;\x0a\x20\x20\x20\x20\x20\x20',[_0x1c5fa1]);return _0x51db43[0x0];}catch(_0x4039d1){return console[_0x2deeba(0x16f)]('Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20récupération\x20de\x20l\x27enregistrement\x20AFK\x20par\x20ID:',_0x4039d1),null;}};async function changeAfkState(_0x3a4bfc,_0x1086e5){const _0x5b4623=a0_0x4849f8;try{const _0x21b057=await pool[_0x5b4623(0x170)](_0x5b4623(0x167),[_0x1086e5,_0x3a4bfc]);return _0x21b057[_0x5b4623(0x173)][_0x5b4623(0x183)]===0x0?(console['log'](_0x5b4623(0x174)),_0x5b4623(0x175)):(console[_0x5b4623(0x164)](_0x5b4623(0x17e)),_0x5b4623(0x168));}catch(_0x4fbaa5){console[_0x5b4623(0x16f)]('Une\x20erreur\x20est\x20survenue\x20lors\x20du\x20changement\x20de\x20l\x27état\x20de\x20l\x27enregistrement\x20AFK:',_0x4fbaa5);}}module[a0_0x4849f8(0x181)]={'addOrUpdateAfk':addOrUpdateAfk,'getAfkById':getAfkById,'changeAfkState':changeAfkState};