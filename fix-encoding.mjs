import fs from 'node:fs';
for(const f of ['src/app.js','src/activityEngine.js','src/storyEngine.js','src/bookEngine.js','src/reader.js','src/utils.js','src/illustrations.js','src/storage.js','src/themes.js','styles.css','index.html','package.json','server.js']){let s=new TextDecoder('windows-1252').decode(fs.readFileSync(f));if(f==='src/app.js'){
s=s.replace("const icons={home:'?',create:'+',ideas:'?',editor:'?',reader:'?',activities:'?',export:'?',settings:'?'};","const icons={home:'\\u25a6',create:'+',ideas:'\\u2727',editor:'\\u25a4',reader:'\\u25eb',activities:'\\u25c7',export:'\\u2197',settings:'\\u2699'};");
s=s.replaceAll('brand-mark">?','brand-mark">&#10022;').replaceAll('>?</span>','>&#10022;</span>').replaceAll('>?</div>','>&#10023;</div>').replaceAll('>?</span>','>&#10022;</span>').replaceAll('>?</div>','>&#10023;</div>').replaceAll('>?</span>','>&#10022;</span>');
s=s.replaceAll('>? &nbsp;','>&#10022; &nbsp;').replaceAll("'? ","'\\u2727 ").replaceAll("?'? ","?'\\u2727 ").replaceAll(' &nbsp; ?',' &nbsp; &#8594;').replaceAll('book ?','book &#8594;').replaceAll('Continue ?','Continue &#8594;').replaceAll('Next ?','Next &#8594;').replaceAll('>?</span>','>&#10022;</span>').replaceAll('?>','?>');
s=s.replaceAll('<span>? No','<span>&#10023; No').replaceAll('<span>? Ready','<span>&#9707; Ready').replaceAll('<span>? Yours','<span>&#8599; Yours').replaceAll('search-field">?','search-field">&#9906;');
s=s.replaceAll("['?','?','?','Aa','?','?','?','?','?','+']","['\\u25eb','\\u25c7','\\u2727','Aa','\\u270e','\\u25a6','\\u25c9','\\u25a4','\\u263e','+']");
s=s.replaceAll("'?':'", "'\\u2713':'");
}
if(f==='src/reader.js')s=s.replaceAll('>?</span>','>&#10022;</span>').replaceAll('>?</button>','>&#8594;</button>').replaceAll('>?</span>','>&#10022;</span>');
fs.writeFileSync(f,s,'utf8');}
