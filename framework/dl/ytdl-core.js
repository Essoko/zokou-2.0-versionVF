function a58_0x10ea(){const _0x6df0af=['Cover\x20of\x20','Title','toString','1469200oNjMhd','22xgpeeV','test','keys','isYTUrl','3795255rUKgYO','write','getInfo','stdout','Video\x20ID\x20or\x20YouTube\x20Url\x20is\x20required','now','mp4','WriteTags','node-id3','youtubedl-core','readline','album','audioFrequency','(((.+)+)+)+$','fluent-ffmpeg','title','log','27483rAafJe','chooseFormat','save','split','ownerChannelName','once','audioBitrate','end','videos','error','url','is\x20not\x20YouTube\x20URL','front\x20cover','.mp3','buffer','45430KUxewb','downloadMusic','size','artist','statSync','mp3','length','audioQuality','apply','videoandaudio','https://www.youtube.com/watch?v=','searchTrack','Year','Album','Image','lengthSeconds','getVideoID','image','./dustbin/','audioChannels','slice','272VYVukk','audioonly','thumbnails','audioCodec','20894pltxND','author','./Function','search','hex','toFormat','13DMOjYB','196LHRKlG','1085682SWwbYu','exports','libmp3lame','videoDetails','name','exec','youtube-yts','description','865505QLoPtx','publishDate'];a58_0x10ea=function(){return _0x6df0af;};return a58_0x10ea();}const a58_0x57ea7b=a58_0x2be6;(function(_0x395ed1,_0x26afe2){const _0x4891f9=a58_0x2be6,_0x388142=_0x395ed1();while(!![]){try{const _0xd7d8c6=-parseInt(_0x4891f9(0x19c))/0x1*(parseInt(_0x4891f9(0x196))/0x2)+parseInt(_0x4891f9(0x16e))/0x3*(parseInt(_0x4891f9(0x19d))/0x4)+-parseInt(_0x4891f9(0x1a6))/0x5+parseInt(_0x4891f9(0x19e))/0x6+parseInt(_0x4891f9(0x17d))/0x7*(-parseInt(_0x4891f9(0x192))/0x8)+parseInt(_0x4891f9(0x1b0))/0x9+parseInt(_0x4891f9(0x1ab))/0xa*(-parseInt(_0x4891f9(0x1ac))/0xb);if(_0xd7d8c6===_0x26afe2)break;else _0x388142['push'](_0x388142['shift']());}catch(_0xd13ed2){_0x388142['push'](_0x388142['shift']());}}}(a58_0x10ea,0x37b17));function a58_0x2be6(_0x490d84,_0x533995){const _0x5de9bc=a58_0x10ea();return a58_0x2be6=function(_0x24f3e3,_0x14b140){_0x24f3e3=_0x24f3e3-0x160;let _0x10ea1c=_0x5de9bc[_0x24f3e3];return _0x10ea1c;},a58_0x2be6(_0x490d84,_0x533995);}const a58_0x14b140=(function(){let _0x541566=!![];return function(_0x1328ee,_0x5ade89){const _0x1eb0b7=_0x541566?function(){const _0x30f907=a58_0x2be6;if(_0x5ade89){const _0x15f965=_0x5ade89[_0x30f907(0x185)](_0x1328ee,arguments);return _0x5ade89=null,_0x15f965;}}:function(){};return _0x541566=![],_0x1eb0b7;};}()),a58_0x24f3e3=a58_0x14b140(this,function(){const _0x541ef9=a58_0x2be6;return a58_0x24f3e3[_0x541ef9(0x1aa)]()[_0x541ef9(0x199)](_0x541ef9(0x16a))['toString']()['constructor'](a58_0x24f3e3)[_0x541ef9(0x199)](_0x541ef9(0x16a));});a58_0x24f3e3();const ytdl=require(a58_0x57ea7b(0x166)),yts=require(a58_0x57ea7b(0x1a4)),readline=require(a58_0x57ea7b(0x167)),ffmpeg=require(a58_0x57ea7b(0x16b)),NodeID3=require(a58_0x57ea7b(0x165)),fs=require('fs'),{fetchBuffer}=require(a58_0x57ea7b(0x198)),{randomBytes}=require('crypto'),ytIdRegex=/(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;class YT{constructor(){}static [a58_0x57ea7b(0x1af)]=_0x208455=>{const _0x4f674b=a58_0x57ea7b;return ytIdRegex[_0x4f674b(0x1ad)](_0x208455);};static [a58_0x57ea7b(0x18d)]=_0x5ef29c=>{const _0x5d8303=a58_0x57ea7b;if(!this['isYTUrl'](_0x5ef29c))throw new Error(_0x5d8303(0x179));return ytIdRegex[_0x5d8303(0x1a3)](_0x5ef29c)[0x1];};static [a58_0x57ea7b(0x164)]=async(_0x4e69a3,_0x202987)=>{const _0x31182c=a58_0x57ea7b;NodeID3[_0x31182c(0x1b1)]({'title':_0x202987[_0x31182c(0x1a9)],'artist':_0x202987['Artist'],'originalArtist':_0x202987['Artist'],'image':{'mime':'jpeg','type':{'id':0x3,'name':_0x31182c(0x17a)},'imageBuffer':(await fetchBuffer(_0x202987[_0x31182c(0x18b)]))[_0x31182c(0x17c)],'description':_0x31182c(0x1a8)+_0x202987[_0x31182c(0x1a9)]},'album':_0x202987[_0x31182c(0x18a)],'year':_0x202987[_0x31182c(0x189)]||''},_0x4e69a3);};static [a58_0x57ea7b(0x199)]=async(_0x22aee5,_0xea969={})=>{const _0x520451=a58_0x57ea7b,_0x34457d=await yts[_0x520451(0x199)]({'query':_0x22aee5,'hl':'id','gl':'ID',..._0xea969});return _0x34457d[_0x520451(0x176)];};static [a58_0x57ea7b(0x17e)]=async _0x3fbd46=>{const _0xe10f3f=a58_0x57ea7b;try{const _0x397772=Array['isArray'](_0x3fbd46)?_0x3fbd46:await this[_0xe10f3f(0x188)](_0x3fbd46),_0x58de1a=_0x397772[0x0],_0x4b60f1=await ytdl[_0xe10f3f(0x1b2)](_0xe10f3f(0x187)+_0x58de1a['id'],{'lang':'id'});let _0x44e7cb=ytdl(_0x58de1a['id'],{'filter':_0xe10f3f(0x193),'quality':0x8c}),_0x38bc65=_0xe10f3f(0x18f)+randomBytes(0x3)[_0xe10f3f(0x1aa)](_0xe10f3f(0x19a))+_0xe10f3f(0x17b);_0x44e7cb['on'](_0xe10f3f(0x177),_0x5ab077=>console[_0xe10f3f(0x16d)](_0x5ab077));const _0x206b1c=await new Promise(_0x1975bb=>{const _0x28a5a3=_0xe10f3f;ffmpeg(_0x44e7cb)['audioFrequency'](0xac44)[_0x28a5a3(0x190)](0x2)[_0x28a5a3(0x174)](0x80)['audioCodec'](_0x28a5a3(0x1a0))[_0x28a5a3(0x184)](0x5)[_0x28a5a3(0x19b)](_0x28a5a3(0x182))[_0x28a5a3(0x170)](_0x38bc65)['on']('end',()=>_0x1975bb(_0x38bc65));});return await this[_0xe10f3f(0x164)](_0x206b1c,{'Title':_0x58de1a[_0xe10f3f(0x16c)],'Artist':_0x58de1a[_0xe10f3f(0x180)],'Image':_0x58de1a[_0xe10f3f(0x18e)],'Album':_0x58de1a[_0xe10f3f(0x168)],'Year':_0x4b60f1[_0xe10f3f(0x1a1)][_0xe10f3f(0x1a7)]['split']('-')[0x0]}),{'meta':_0x58de1a,'path':_0x206b1c,'size':fs[_0xe10f3f(0x181)](_0x38bc65)[_0xe10f3f(0x17f)]};}catch(_0x38cea1){throw new Error(_0x38cea1);}};static [a58_0x57ea7b(0x163)]=async(_0x597825,_0x10f0a8=0x86)=>{const _0x296c9d=a58_0x57ea7b;try{if(!_0x597825)throw new Error(_0x296c9d(0x161));const _0x2df16e=this[_0x296c9d(0x1af)](_0x597825)?this['getVideoID'](_0x597825):_0x597825,_0x3610d4=await ytdl[_0x296c9d(0x1b2)]('https://www.youtube.com/watch?v='+_0x2df16e,{'lang':'id'}),_0x5d17c1=ytdl[_0x296c9d(0x16f)](_0x3610d4['formats'],{'format':_0x10f0a8,'filter':_0x296c9d(0x186)});return{'title':_0x3610d4[_0x296c9d(0x1a1)]['title'],'thumb':_0x3610d4[_0x296c9d(0x1a1)][_0x296c9d(0x194)][_0x296c9d(0x191)](-0x1)[0x0],'date':_0x3610d4[_0x296c9d(0x1a1)][_0x296c9d(0x1a7)],'duration':_0x3610d4[_0x296c9d(0x1a1)]['lengthSeconds'],'channel':_0x3610d4[_0x296c9d(0x1a1)][_0x296c9d(0x172)],'quality':_0x5d17c1['qualityLabel'],'contentLength':_0x5d17c1['contentLength'],'description':_0x3610d4[_0x296c9d(0x1a1)][_0x296c9d(0x1a5)],'videoUrl':_0x5d17c1[_0x296c9d(0x178)]};}catch(_0x1b8227){throw _0x1b8227;}};static [a58_0x57ea7b(0x182)]=async(_0x114ba4,_0x1a8cec={},_0x47ac18=![])=>{const _0x1e73af=a58_0x57ea7b;try{if(!_0x114ba4)throw new Error(_0x1e73af(0x161));_0x114ba4=this['isYTUrl'](_0x114ba4)?'https://www.youtube.com/watch?v='+this[_0x1e73af(0x18d)](_0x114ba4):_0x114ba4;const {videoDetails:_0x508c09}=await ytdl[_0x1e73af(0x1b2)](_0x114ba4,{'lang':'id'});let _0x39b153=ytdl(_0x114ba4,{'filter':_0x1e73af(0x193),'quality':0x8c}),_0x1039f0='./'+randomBytes(0x3)[_0x1e73af(0x1aa)](_0x1e73af(0x19a))+'.mp3',_0x113333;_0x39b153[_0x1e73af(0x173)]('response',()=>{const _0x300ddf=_0x1e73af;_0x113333=Date[_0x300ddf(0x162)]();}),_0x39b153['on'](_0x1e73af(0x175),()=>process[_0x1e73af(0x160)][_0x1e73af(0x1b1)]('\x0a\x0a')),_0x39b153['on'](_0x1e73af(0x177),_0x2d08d8=>console['log'](_0x2d08d8));const _0x4213ec=await new Promise(_0x1149f3=>{const _0x288487=_0x1e73af;ffmpeg(_0x39b153)[_0x288487(0x169)](0xac44)[_0x288487(0x190)](0x2)[_0x288487(0x174)](0x80)[_0x288487(0x195)]('libmp3lame')[_0x288487(0x184)](0x5)[_0x288487(0x19b)]('mp3')[_0x288487(0x170)](_0x1039f0)['on'](_0x288487(0x175),()=>{_0x1149f3(_0x1039f0);});});return Object[_0x1e73af(0x1ae)](_0x1a8cec)[_0x1e73af(0x183)]!==0x0&&await this[_0x1e73af(0x164)](_0x4213ec,_0x1a8cec),_0x47ac18&&await this[_0x1e73af(0x164)](_0x4213ec,{'Title':_0x508c09[_0x1e73af(0x16c)],'Album':_0x508c09[_0x1e73af(0x197)]['name'],'Year':_0x508c09[_0x1e73af(0x1a7)][_0x1e73af(0x171)]('-')[0x0],'Image':_0x508c09[_0x1e73af(0x194)]['slice'](-0x1)[0x0][_0x1e73af(0x178)]}),{'meta':{'title':_0x508c09['title'],'channel':_0x508c09['author'][_0x1e73af(0x1a2)],'seconds':_0x508c09[_0x1e73af(0x18c)],'description':_0x508c09[_0x1e73af(0x1a5)],'image':_0x508c09[_0x1e73af(0x194)][_0x1e73af(0x191)](-0x1)[0x0][_0x1e73af(0x178)]},'path':_0x4213ec,'size':fs[_0x1e73af(0x181)](_0x1039f0)[_0x1e73af(0x17f)]};}catch(_0x5a39de){throw _0x5a39de;}};}module[a58_0x57ea7b(0x19f)]=YT;