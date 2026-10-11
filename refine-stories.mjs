import fs from 'node:fs';
let s=fs.readFileSync('src/storyEngine.js','utf8');
s=s.replace("const baking=/bakery|cake|bake/.test(idea);", "const baking=/bakery|cake|bake/.test(idea);const library=/library|book/.test(idea),mystery=/mystery|missing|clue/.test(idea),costume=/costume/.test(idea);");s=s.replace("baking?'bake a moon cake for every neighbor':'bring everyone together for the autumn celebration'", "baking?'bake a moon cake for every neighbor':library?'open a welcoming library for everyone':mystery?'find the missing festival lantern':costume?'make a costume that felt just right':'bring everyone together for the autumn celebration'");s=s.replace('fear,baking,personality','fear,baking,library,mystery,costume,personality');
s=s.replace("['The empty basket','there were fewer treats than guests','cut each treat into two pieces','enough little tastes to share']",`['The empty basket','there were fewer treats than guests','cut each treat into two pieces','enough little tastes to share'],
['A pattern in the leaves','three leaves lay in a curious pattern','followed the colors from gold to red','a little note beneath an acorn'],
['The forgotten song','the musicians had forgotten the last verse','invented a new verse together','a song everyone could sing'],
['The paper boat','a paper boat had stopped at the edge of a puddle','nudged it gently with a fallen twig','a message tucked inside the sail'],
['A borrowed basket','the basket handle had come loose','wrapped it carefully with a soft scarf','a comfortable way to carry their treasures'],
['The very small door','a tiny door stood open in a fence','knelt down to greet its owner','a mouse with a very large idea'],
['The ribbon trail','a ribbon disappeared behind a bench','followed it without pulling','a neighbor decorating a beautiful arch'],
['An unexpected guest','someone new stood alone near the gate','offered a friendly introduction','a guest who knew wonderful stories'],
['The picture puzzle','a painted sign had lost one corner','matched the missing piece to its shape','a picture of their meeting place'],
['A soft landing','a cushion had blown off the garden chair','caught it before it reached the puddle','a grateful friend ready to help'],
['The echo game','their voices sounded different by a wall','tried a soft hello and waited','a gentle echo saying hello back'],
['A place for everyone','the chairs were arranged too close together','made a wider circle','room for every friend to join'],
['The secret ingredient','the warm drink needed a little flavor','added a small spoonful of cinnamon','a wonderful autumn smell'],
['The round window','a round window was covered with dust','wiped it with a soft cloth','a view of the whole garden'],
['A thoughtful gift','a guest had forgotten to bring a present','folded a paper leaf and wrote a kind word','a gift worth more than its size'],
['The quiet corner','one friend wanted a rest from the chatter','arranged a cozy cushion beneath the tree','a peaceful place to take a breath'],
['The name cards','two name cards had become mixed up','asked each guest how to spell their name','a table that welcomed everyone'],
['The last apple','only one apple remained in the basket','saved its seeds for planting','a promise of another autumn'],
['A different idea','two friends wanted different decorations','combined both ideas into one design','a surprising new pattern'],
['The kindness note','an unsigned thank-you note lay on the path','read the kind words aloud','a reason for everyone to smile'],
['The lantern hook','a lantern needed a safe place to hang','asked a grown-up to help with the hook','a warm glow above the gathering'],
['The tiny stage','the storytellers needed somewhere to stand','arranged a little platform of cushions','the perfect stage for a quiet story'],
['A new tradition','no one knew how to end the celebration','asked everyone to share one happy memory','a tradition they would remember']`);
s=s.replace("else if(t>.8)","else if(index===total-2)");
s=s.replace("if(s.tone==='Funny'",`if(m.mystery&&index===total-2)text=\`At last, \$\{n\} found the missing festival lantern beside the round window. A neighbor had moved it out of the wind. \$\{f\} laughed with relief. The mystery was solved by asking a kind question.\`;
if(m.library&&index===total-2)text=\`\$\{n\} placed the last book on its shelf. \$\{f\} opened the library door. A friend who had never borrowed a book before chose the smallest one. There was a story here for everyone.\`;
if(s.tone==='Funny'`);
const youngStart=s.indexOf('if(young){');const youngEnd=s.indexOf('\nelse if(advanced)',youngStart);s=s.slice(0,youngStart)+`if(young){if(index===0)text=\`This is \$\{n\}. \$\{n\} is a kind \$\{m.character\}. Today is a big day!\`;else if(index===1)text=\`Look! Here is \$\{o\}. “Let us go,” says \$\{n\}. A friend comes too.\`;else if(index===total-1)text=\`\$\{n\} smiles. Friends make the day happy. They are home at last.\`;else {const simple=['We see a puddle. We take small steps. We can help!','Which way do we go? We look for a sign. This is the way!','Tap, tap! What is that? It is a branch in the wind.','A bird drops a ribbon. We pick it up. Thank you, little bird!','Leaves cover the path. We sweep them away. Now we can go.','Who needs a letter? We ask our friends. Here is one for you!','The wind blows. Our stars fly away! We catch them together.','The map is upside down. We turn it. Now we can see!','We stop to rest. A warm drink feels good. We smile.','A friend has an idea. We listen. What a good idea!','The stones are wet. We go slowly. We help each other.','We share our treats. One for me. One for you.'];text=\`\$\{n\} and a friend have a new task. \$\{simple[Math.max(0,index-2)%simple.length]\}\`;}}
`+s.slice(youngEnd);
s=s.replace("return {title,text,stage", "if(!young&&['Mysterious','Classic Halloween','Gentle Spooky'].includes(s.tone)&&index>1&&index<total-2&&!s.noScary)text+=' A curious sound drifted through the leaves. They listened together before taking the next step.';\nreturn {title,text,stage");fs.writeFileSync('src/storyEngine.js',s);
