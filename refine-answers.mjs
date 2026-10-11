import fs from 'node:fs';
let s=fs.readFileSync('src/bookEngine.js','utf8');const start=s.indexOf('export function syncAnswers');const end=s.indexOf('export function regeneratePage');s=s.slice(0,start)+`export function syncAnswers(b){
 const old=b.pages.filter(p=>p.kind==='answers');
 const content=b.pages.filter(p=>p.kind!=='answers');
 if(!b.settings.answerKey){b.pages=content;return;}
 const entries=content.filter(p=>p.activity?.answer).map(p=>({id:p.id,title:p.title,answer:p.activity.kind==='maze'?'Follow the highlighted route below.':p.activity.answer}));
 const groups=[];let group=[];for(const entry of entries){const maze=content.find(p=>p.id===entry.id).activity.kind==='maze';if(maze){if(group.length)groups.push(group);group=[];groups.push([entry]);}else{group.push(entry);if(group.length===3){groups.push(group);group=[];}}}if(group.length)groups.push(group);
 const keys=groups.map((answers,i)=>({id:old[i]?.id||uid(),kind:'answers',title:'The answer nook',text:'',answers,design:{fontSize:15,align:'left',layout:'Text only'}}));
 const used=new Set();b.pages=b.pages.flatMap(p=>{if(p.kind!=='answers')return[p];const replacement=keys[old.indexOf(p)];if(replacement){used.add(replacement.id);return[replacement];}return[];});
 b.pages.push(...keys.filter(p=>!used.has(p.id)));refreshAnswerReferences(b);
}
export function refreshAnswerReferences(b){for(const p of b.pages.filter(p=>p.kind==='answers')){p.answers=(p.answers||[]).filter(a=>b.pages.some(p=>p.id===a.id));for(const a of p.answers)a.page=b.pages.findIndex(p=>p.id===a.id)+1;p.text=p.answers.map(a=>'Page '+a.page+' · '+a.title+'\\n'+a.answer).join('\\n\\n');}}
`+s.slice(end);fs.writeFileSync('src/bookEngine.js',s);
s=fs.readFileSync('src/app.js','utf8').replace('syncAnswers,stats','syncAnswers,refreshAnswerReferences,stats').replace('b.reader.index=j+1;changed();editor();','b.reader.index=j+1;refreshAnswerReferences(b);changed();editor();');fs.writeFileSync('src/app.js',s);
