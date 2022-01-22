export const storyContent = ﻿{"inkVersion":20,"root":[[{"#":"author: Hendrik Wallbaum"},{"#":"title: The Sword"},{"->":"Beginning"},["done",{"#n":"g-0"}],null],"done",{"Beginning":[[{"#":"SCENE: beginning/bonfire"},"^It was one of those evenings around the bonfire where stories gush out like water from a spring and grow into cascading streams of adventure like rivers before they reach the sea.","\n","^And now, it was Bens turn to stand up...","\n","ev","str","^listen","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"BensStory"},"\n",{"#f":5}]}],null],"BensStory":[[{"#":"SCENE: beginning/sword"},"^\"Once there was a sword signifying the rule over this land\" he began.","\n","^\"But soon after the king died it vanished into the realms of myth... Until one day, a mighty wizard appeared who struck it into a stone! So that it may rest there until the next true king of our great country come and find it.\"","\n","ev","str","^I listened intrigued","/str","/ev",{"*":".^.c-0","flg":20},["ev",{"^->":"BensStory.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"What nonsense\" I thought to myself.",{"->":"$r","var":true},null]}],{"c-0":["\n","ev",{"VAR?":"adventurous"},"/ev",{"VAR=":"mood","re":true},"^I continued to listen intrigued by this story of long forgotten kings and magic.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"BensStory.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"distrusting"},"/ev",{"VAR=":"mood","re":true},"^But I never listened to Bens stories for the news they contained. It was the entertainment that bound all of us to his lips.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Ben continued \"rumor has it, the stone was found over in Budshire not long ago.\"","\n","^Little did I know at this point what change Bens story would bring to my life.","\n","^mood: ","ev",{"VAR?":"mood"},"out","/ev","\n","ev","str","^continue","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["^ ",{"->":"SettingOut"},"\n",{"#f":5}]}]}],null],"SettingOut":["^Setting out...","\n","^[Mountains] ",{"->":"MountainRoute"},"\n","^[Forrest] ",{"->":"ForrestRoute"},"\n",null],"ForrestRoute":["^Meeting Bandids...","\n","^You wishfully look at the mountain. View is probably amazing and you can't picture bandits being there.","\n","^[] ",{"->":"ArrivingAtTheSword"},"\n",null],"MountainRoute":["^Enjoy the view....","\n","^You see the forrest from above. Looks like bandits, could be dreadful or an adventure.","\n","^Put a tunnel here to see some animals. Maybe both routes can go to the same tunnel? Could be little button in the image that points out a goat or something.","\n","^[] ",{"->":"ArrivingAtTheSword"},"\n",null],"ArrivingAtTheSword":["^What a festival is going on","\n","^[] ",{"->":"TryPuLlingTheSwordOut"},"\n",null],"TryPuLlingTheSwordOut":[["^Do your best mate. Previous choices will dictate wether you can or not.","\n",["ev",{"^->":"TryPuLlingTheSwordOut.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Succeed ",{"->":"$r","var":true},null]}],["ev",{"^->":"TryPuLlingTheSwordOut.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Fail ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"TryPuLlingTheSwordOut.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"YouBecomeKing"},"\n",{"#f":5}],"c-1":["ev",{"^->":"TryPuLlingTheSwordOut.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"YouFailed"},"\n",{"#f":5}]}],null],"YouBecomeKing":["^You become the king. Maybe lamet how nice it would be to not shoulder all the responsibility.","\n",{"->":"theEnd"},null],"YouFailed":["^You go home as you were. Someone else becomes king. You think about how nice it would be to be that person.","\n",{"->":"theEnd"},null],"theEnd":["^Thank you for playing.","\n","end",null],"global decl":["ev",{"list":{"mood.neutral":3}},{"VAR=":"mood"},"/ev","end",null]}],"listDefs":{"mood":{"adventurous":1,"distrusting":2,"neutral":3}}}