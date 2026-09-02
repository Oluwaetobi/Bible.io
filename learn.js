/**First of all if you think I write comments for fun, you are making a huge mistake, these comments are not
 * just for me but I write comments so that if anyone looks at the code in this game, they can understand
 * things that won't come to mind initially, PLEASE READ THE COMMENTS, they explain some of the methods
 * I'm using, and why I am doing what I am doing, no matter how good you are at coding, you willl always
 * forget why you did something a particular way, every good coder, writes good comments, a wise man once said
 * the faintest pen is better than the sharpest memory, and why is that, because even if you write something
 * faintly as long as you know how to read, it is engraved forever and can always be read, but no matter
 * how good your memory is, you always forget it at some point so START WRITING COMMENTS WHEN YOU CODE!!
 */

/**First of all lets take care of the loading page */
window.addEventListener("load", () => {
    /**And YES this actually detect when the page has finished loading */
    // first of all get access to the loader class
    const loader_for_learn = document.querySelector(".loader");

    loader_for_learn.classList.add("loader-hidden");

    /* we don't want to just remove it from the screen but also remove it from our code too,
    we might not obe able to currently see it, but it is in fact still there hiding in the back, 
    so let's deal with that like so */
    loader_for_learn.addEventListener("transitionend", () => {
        // once the transition has ended we will do
        document.body.removeChild(loader_for_learn);
        // we removed the loader class, yay!
    })
})

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const big_text = document.getElementById('big-text');
const text_to_read = document.getElementById('text-to-read');
const top_border = 90;
const side_border = 2;
var mouseX = 0;
var mouseY = 0;
var table_clicked = 0;
var book_clicked = 0;

var box_x_pos = 1;
var gameOn = false;
/* Being able to copy and paste text by using HTML is super important, especially when the text is super long,
that's one thing I like about HTML. As well as it's the core foundation to building websites. */
var show_or_hide_text = [];
var learn_page = 1;

window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    // This is to counter for where the canvas is actually created on the screen
    mouseX -= side_border;
    mouseY -= top_border;
})

function mouseDetections () {
    document.addEventListener("click", function (event) {
        if (learn_page == 2) {
            if (mouseX > 1075 && mouseX < 1221 && mouseY > 51 && mouseY < 83) {
                learn_page = 1;
                show_or_hide_text[1] = 0;
            }
        }
    });
}

function displayMouseX_and_MouseY () {
    ctx.font = "30px Arial";
    ctx.strokeStyle = 'rgb(190, 36, 36)';
    ctx.strokeText("MouseX: " + mouseX + " MouseY: " + mouseY, 10, 30);
    ctx.fillStyle = 'rgb(190, 36, 36)';
    ctx.fillText("MouseX: " + mouseX + " MouseY: " + mouseY, 10, 30);

}

function book_Chosen(table_clicked_html, book_clicked_html) {
    learn_page = 2;
    table_clicked = table_clicked_html;
    book_clicked = book_clicked_html;

}

function show_table_or_hide_table() {
    if (learn_page == 1) {
        document.getElementById('choose_bible_books').style.display = "block";
        document.getElementById('choose_christians_books').style.display = "block";
        document.getElementById('choose_articles_books').style.display = "block";
        document.getElementById('books_reading_mode').style.display = "none";
    }
    if (learn_page == 2) {
        document.getElementById('choose_bible_books').style.display = "none";
        document.getElementById('choose_christians_books').style.display = "none";
        document.getElementById('choose_articles_books').style.display = "none";
        document.getElementById('books_reading_mode').style.display = "block";
    }
}

function wipeOutEntireScreen() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (learn_page != 1) {
        // When I keep erasing and rewriting it, I can't copy and paste the text
        big_text.innerText = '';
    }
    if (learn_page != 2) {
        text_to_read.innerText = '';
    }
}

function titleText() {
    if(show_or_hide_text.length < 20) {
        show_or_hide_text.push(0);
    }

    // Bible.io Live Text
    if (show_or_hide_text[0] == 0) {
        // When I keep erasing and rewriting it, I can't copy and paste the text, that's why I'm doing this
        big_text.innerText = 'Learn';
        stop_re_adding_text(0);
    } else {
        // do nothing
    }
}

function goBackSign () {
    if (learn_page == 2) {
        ctx.fillStyle = 'rgb(12, 12, 12)';
        ctx.fillRect(1130 -53, 52, 146, 36);
        ctx.fillStyle = 'rgb(154, 82, 6)';
        ctx.fillRect(1130 -50, 55, 140, 30);
        ctx.font = "25px Arial";
        ctx.fillStyle = 'rgb(252, 250, 250)';
        ctx.fillText("Go Back", 1150 -50, 77);
    }
}

function loadingBox() {
    // looading box
    ctx.fillStyle = 'rgba(255, 26, 104, 1)';
    ctx.fillRect(50 + box_x_pos, canvas.height - 100, 50, 50);
    
    box_x_pos += 3;
    if (box_x_pos > canvas.width - 200) {
        box_x_pos = 0;
    }

}


function drawGame() {
    // blue background
    ctx.fillStyle = 'rgb(176, 223, 255)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    mouseDetections();
    displayMouseX_and_MouseY();
    loadingBox();
    titleText();
    show_table_or_hide_table();
    goBackSign();
    takeCareOfText();

}

function takeCareOfText () {
    if (learn_page == 2) {
        if (show_or_hide_text[1] == 0) {
            all_Text_Database();
            show_or_hide_text[0] +=1;
        } else {
            // do nothing
        }
    }


}

function all_Text_Database () {
    if (show_or_hide_text[1] == 0) {
        if (table_clicked = 1) {
            // for bible books
            Bible_DataBase();
        }
        if (table_clicked = 2) {
            // Amazing Christians From History
            Christians_From_History_DataBase();
        }
        if (table_clicked = 3) {
            // Christian Articles to Read
            Christian_Articles_DataBase();
        }
        stop_re_adding_text(1);
    } 
}

function Bible_DataBase () {
    if (book_clicked == 1) {
        
    }
}

function stop_re_adding_text (type_of_text) {
    /* we add one to the specificed element of the array, and before we write text, we check if that element
    is equal to 0 or not, if it is not equal to zero, we know that we've already written it, this allows
    give our text the capability of being copied and pasted, as well as prevents unnecessary text changes or
    addtions */
    show_or_hide_text[type_of_text] += 1;
}

function Christians_From_History_DataBase () {
    // backticks are life savers "`"  ```````
    if (book_clicked == 1) {
        // Billy Graham
        text_to_read.innerText = `Billy Graham: (1918-2018) is undoubtedly one of America’s greatest preachers. He grew up in North Carolina to a middle class family. And one day a preacher came to town, and Billy’s parents told him about it and he attended. That day Billy Graham decided to surrender his life to Jesus. Graham married his beautiful wife Ruth Bell in 1943, her father was a missionary and she was fresh from China. Ruth Bell was born to American parents who were missionaries in China. Billy Graham slowly rose to fame in America, although he did not preach for fame but solely because of his love for God, while many pastors were slowly cherry picked and faced tarnishes on their reputation, Billy Graham seemed to fly above it all and hardly was their ever a question as to whether he pure and righteous. Billy Graham had moral discipline unlike some American Pastors. Billy Graham preached to millions, in fact billions of people all across the world. His messages were translated into many languages, and many people, crowds in fact, would throng to his sermons. He was no doubt America’s greatest preacher. Once a man named “George Palmer” who feared neither young nor old, he became the leader of a gang, at age 17, and tried to kill him. In his young years, he hated Christians, despised them greatly in fact, and had a plot to kill Billy Graham. George made small zip guns for his 10 friends, who were in his gang and attended Billy Graham’s speech. And amidst a large crowd of people, amidst Billy Graham’s sermon. The altar call was almost there, Billy Graham called people to surrender their lives to Christ if they had not yet. But shortly before this, George looked around and he wondered “why in the living world are all these stupid people here!”, and out of nowhere a voice called to him saying, “why are you here.” He looked around but could not see or find the person who talked to him. He knew it was God. The truth was George did not know why he was here except but to kill Graham. He was angry because God took his father. And he asked “God why did you do it, why did you take my father.” He was about 6 or 9 when his father died. His father had cancer and passed away. He told God that he hurt him so much. And God told him he wasn’t trying to hurt him. That`;
        text_to_read.innerText += ` he would never hurt him. George hadn’t cried since he was 7 and a half years old. And that day he cried, and wept like a baby. The altar call came, he put his zip gun down and ran to the front and surrendered his life to Jesus Christ. And miraculously 9 of his 10 friends did the exact same thing.  Billy Graham traveled the world, preaching to many, saving souls, and reminded us of God’s love for us and how he wanted to save us all. Citation: https://www.youtube.com/watch?v=6GeGqm4ocg8`;
    }
    if (book_clicked == 2) {
        // John Wesley
        text_to_read.innerText = `John Wesley claimed that he did not truly know God when he was really young. When he was young, he and his brother named Charles Wesley left for America to go spread Christianity. Unfortunately while aboard the ship, the ship started to sink, there was a violent storm and everyone was afraid, except for some Moravians on boat, who instead of panicking for their lives were indeed singing praises to Almighty God in heaven! Which is similar to when Jesus was sleeping while his disciples were panicking on the boat threatened by a violent storm. John Wesley was shocked, this further drove John Wesley to seek the Lord. He even started a Holy Club with his brother, but of course he faced persecution. Eventually John Wesley learned that people were not saved by works but saved purely by a gift from God. Which contrary to the popular belief amongst rich Christians was seen as a fallacy. They believed they were better than the common person, the poor, the ill, the one who had nothing. This was a common belief held in all of America and England. But John Wesley preached against this, he was one of the founding Fathers of the Great Awakening that happened in Britain. But again, he faced persecution. Such as cursing, even once a drunk man reared up on his horse in front of John Wesley and shouted all manner of horrible things. John Wesley however did not allow any of this persecution to stop him, and continued to spread that Christian religion, when he saw that the rich would not listen to him and accept God’s free gift offered by grace and not by works. (Ephesians 2:8-9) John Wesley preached you could not earn God’s gift of salvation. When he saw that the rich would not heed him, he just like Jesus decided to go preach to the poor. And miraculously instead of being met with threats and getting heaved and thrown out like a towel. The poor accepted what he said, they needed a savior.

One of John Wesley’s famous quotes is “Do all the good you can, In all the ways you can, To all the souls you can, In every place you can, With all the zeal you can, As long as ever you can”
`
    }
    if (book_clicked == 3) {
        // John Knox
        text_to_read.innerText = `John Knox: He was a great and fearless leader, feared by many but feared none and was seen as a great prophet, even the queen of England feared him. And once said that she feared his prayers more than all the armies of Europe. John Knox and a group of other protestants were at one point sent to the galleys by the French. The galley-prisoners were chained to the benches, they were not allowed to change their postures and had to row for the entire day, meanwhile an officer with a whip in his hand, watched them as they rowed. The prisoners were also forced to worship an idol or else they would be beaten and tortured but John Knox stood up and pushed the idol right off the boat, as he saw this as a great abomination to God, Leviticus 26:1 “Ye shall make you no idols nor graven image, neither rear you up a standing image, neither shall ye set up any image of stone in your land, to bow down unto it: for I am the Lord your God.” Luckily John Knox survived the galleys after spending a total of 19 months there. One of the reasons why John Knox was able to say and do many of the things he did was because he did not fear man or woman but feared God. Luke 12: 4-5 says “Be not afraid of them that kill the body, and after that have no more that they can do. But I will forewarn you whom ye shall fear: Fear him, which after he hath killed hath power to cast into hell; yea, I say unto you, Fear him. ” The truth of the matter is that when God sends you, you must go. If you don’t go then you will be in the hands of God. Hebrews 10:31 says “It is a fearful thing to fall into the hands of the living God.” Back in the days Russia would use a group of men as barrier troops. So when the Russian soldiers were supposed to fight, if they fought, some of them died, but if they tried to retreat then their own soldiers would shoot them. The goal of this was to ensure that the soldiers continued to go forward no matter the cost. Because “he who wins the battle wins the war!” It is kind of similar to how Christians nowadays, especially in Western world, places like Canada, America, and etc. People are afraid to bear witness of Christ and`
        text_to_read.innerText += ` preach the gospel, because they are afraid their friends will laugh at them and make fun of them. Whereas the Christians of old would burn at the stake, be sawn in two, some of them were devoured by wild beasts in a stadium as some show and spectacle for men and women and emperors to watch. They suffered horribly, but even at this, they did not quake. They preached the word in season and out of season, in pain and out of pain. Whereas Christians know of the terrible disasters and horrible plagues and punishments that will come upon mankind when they refuse to repent of their murders, sorceries, fornications, thefts, drugs, worshipping of demons and other sins and vices. They know of these things but they are too coward to share the gospel. One of such plagues was Covid-19 but there is still more to come. But John Knox understood this concept well. He feared him, who could kill the body and cast the soul into hell fire. He did not fear anyone else except God.`
        
    }
    if (book_clicked == 4) {
        // Enoch Adeboye
        text_to_read.innerText = `Pastor Enoch Adejare Adeboye also known as Daddy GO, is that pastor of one of the largest evangelical churches in the world, namely, RCCG (The Redeemed Christian Church of God) Pastor Adeboye asked God to build him a house and God told him he would build him a city! Which is now called «Redemption City» which is located in Nigeria. From ministering to many around the world to performing many raw miracles and hosting crusades, Pastor Adeboye has been an inspiration to many. Pastor Enoch Adejare Adeboye was born in the village of Ifewara, Osun State. His family was so poor, that even poor people called him poor. He grew up walking on his bare feet. The first pair of shoes he owned was when he was 18 years old! But Adeboye had a dream, he wanted to work hard. His father was illiterate, and because his family was so poor. Adeboye was not able to go to school. He went on a 3 day hunger strike in order to get his father to send him to school. He was ready to die if he was not educated. Because of this, his father sold all that he had to pay for his son’s school fees and sent him to the only missionary school available in their village at the time. Adeboye proved to be a very smart kid and was gifted in mathematics. In order to stay in school when his father could no longer sponsor him Adeboye started to do some odd jobs to get some money. One of the jobs that he would do was fetching firewood from a bush and he would sell it. But one day he was stung by a swarm of bees and blood started gushing from his eyes. He ran home and it was thanks to his mothers help and the local herbs that he was saved from becoming blind. There was a time`
        text_to_read.innerText += ` in Adeboye’s village where one mother offered him some delicious food. And because of the lessons he had learnt as a kid such as never eating anything from a stranger without showing his parents first. Instead of eating delicious food. He kept it at home and continued to play with his friend until his mother had gotten home. When his mother got home, the food had become completely black and solid. After some research they realized that the female stranger had used food as a type of food poisoning to kill Adeboye, because he was smarter than her son. Because of how poor Adeboye’s family was, they were grateful for even the smallest gifts they could get with their money, such as an umbrella. The day they got their first umbrella they were grateful and very happy. Adeboye grew up from a family of idol worshippers. But his father later started attending an Anglican church. So Adeboye had a bit of Christian doctrines instilled in him as a kid. But this did not really save him or his family. And this did not stop them or other villages from worshipping idols as such was their custom. Adeboye recalls watching a Christian movie called “The Covenant Church” which dramatizes his biography “I am from a family of idol worshippers.” One of the names of their gods was called “Ogun” which is the “Yoruba God of iron.” Because they were warriors who helped lead other warriors to war. Adeboye’s witty intelligence was what kept opening doors for him and resulted in him getting lots of promotions. His dream was to become the youngest vice chancellor in Africa and he would have accomplished this dream. But God called him one day and he abandoned everything to follow Jesus. He used to be a professor of mathematics in a University in Nigeria. Before Adeboye eventually got saved and genuinely became Christian. His friend had convinced him to go see a local spiritualist which they call “babalawo.” Adeboye agreed because he believed he needed protection as there were lots of car ransacking `
        text_to_read.innerText += `and thieves along the road. Which meant there was always imminent danger from anyone driving a car across the street as well as many other dangers in his villages from witches, wizards, and etc. The babalawo told Adeboye to get him a live goat but he was not allowed to drive it in his car. The live goat proved to be very stubborn and caused the mathematics lecturer lots of problems along the journey. Lots of Adeboye’s students offered to help this respected mathematics university teacher, but he refused because the babalawo said he had to bring it by himself and it proved very difficult. The babalawo gave him 3 charms where he had to keep three different places. He promised Adeboye that these 3 charms would help keep Adeboye safe and secure. One charm was supposed to go under the driver’s seat ensuring that if he entered into a collision he would disappear and reappear somewhere else. The other 2 were to go into the car trunk and the other one on the steering wheel. But within one week Adeboye had 3 fatal car accidents and he threw all 3 charms into a lagoon. Adeboye’s marriage was a very humble one, he got married to his wife Foluke Adeboye in the year 1968. Adeboye and his wife became born again Christian in the year 1973. Adeboye worked as a translator in the church and abroad for his father in the lord also known as his mentor whose name was Reverend Josiah Olufemi Akindayomi. Reverend Josiah was illiterate and only knew how to speak Yoruba, he could not read nor write, yet he managed to write out “Redeemed Christian Church of God” through God’s help. Reverend Josiah started the Redeemed Christian Church of God (RCCG). It has been said, if you had met him, you would never be foolish again. Adeboye would translate Reverend Josiah’s sermons into English because not everyone spoke or understood Yoruba very well. As well as there were different tribes in Nigeria that spoke different languages. Because Adeboye was a translator for Reverend Josiah Olufemi Akindayomi, everyone in the church saw him as the special translator and left him alone.`
        text_to_read.innerText += ` But one day another man in the church asked Adeboye to be his translator. Adeboye was angry in his heart, and wondered, asking himself “who does this man think he is, I am the special translator’ nonetheless he agreed to translate for the man. After that God talked to him. And said, “so you think you are too BIG for my children” and after that God left him alone. And this was very problematic for Adeboye. Because before this, God used to talk to him a lot. He would tell him what people were going to preach in church on Sundays. So before he got to church he already knew what the preacher was going to say. He would tell him which directions to go while he was driving so he could avoid thieves and robbers who wanted to ransack his car. God would tell Adeboye everything, but after this God didn’t talk to Adeboye anymore. Meaning that anytime he was driving instead of it taking him 10 minutes to get to his destination. It would take him hours and thieves and robbers would steal things from him as he was driving. Adeboye prayed and fasted for a very long time and begged for God’s forgiveness and mercy. And after that God spoke to Adeboye again. He told him to write his name on the sand, and he wrote it “Adeboye” and God told him to use his leg to wipe it out. And he did so. After that he could not see his name anymore in the sand and it would seem as if it had never even existed. And God told Adeboye that the day he ever becomes proud again and lets pride enter his heart. That he will wipe out his name from the surface of the face of the Earth and it will look as if no man named Adeboye had ever even existed! Since that day Adeboye had become humble, in many people’s opinion, he is believed to be one of the most humble men on Earth. Adeboye built the city called Redemption City in Nigeria also known as Redemption Camp. He used to enter bushes in the jungle and pray with the snakes and beasts of the field to pray to God. And people would laugh at him asking “what does he think he is doing?” While others had left the ground after praying he would spend enormous quantities of time with his body flat on the ground in prayer and supplication to God and people thought`
        text_to_read.innerText += ` that he had gone mad, and today that jungle has become the city of God. It is the only place in Nigeria where there is electricity 24/7. This means that at any hour, minute, or second of the day, there is always electricity in their city. Adeboye has traveled across the world preaching sermons to people everywhere. He’s even come to America and Canada as well! Adeboye has performed many miracles by God’s help, the blind see, the lame walk, the dead are raised to life, the wombless give birth, and the mute talk. One time he was preaching and there was a man that was very short even shorter than his wife. Adeboye decreed and declared that there was someone standing there who was short and that by the end of his sermon that he would be taller even taller than those around him. And the man started growing, he grew so much that even his pants became too small for him. His wife was shocked, it was a raw miracle performed in broad daylight. When Adeboye was younger in the 1900s, he came to North America for some training and after the training was finished he was to head back to Nigeria. His friend told him what he had to do and how to get back and how to catch the flight. But they slept off and Adeboye missed the flight. So his friend drove him all the way to the airport so he could catch his flight. Adeboye knows that if he had caught the train, he would have missed the flight anyways. Adeboye has decreed and declared, he says “you missed the train so that you would not miss the flight!” There was also a time where a rich business man would go abroad doing business, every day he was always in a new place and one day Adeboye approached and started preaching to him about God. But the rich business man stopped him and said and implied [paraphrased] “God, which God! I am young right now, let me enjoy myself. Today I’m in America, the next day I’m in France, after that I’ll be in Europe and abroad somewhere else. I have a business to run! When I am old, then I will bow on my knees, serve God and cry hallelujah!! (Revelation 4:8) And so it was, much later Adeboye met the same man again but he was on a wheel chair. And the former rich business man cried “hallelujah” and Adeboye agreed but said that it didn’t have to be this`
        text_to_read.innerText += ` way. He didn’t have to wait until lightning struck him before he surrendered to God. The moral of the lesson is don’t wait until the give of life takes away your life before you realize who really gave you the breath of life and who really is in control. Acts 17:28; Job 12:9-10; James 1:10-11; There was another time where there was a mute man. And Adeboye prayed for the mute man that he might talk again. He was mute, Adeboye prayed, and God answered. Just like when Elijah prayed to God and the Lord answered by fire, so Adeboye prayed and God answered and the mute man was able to talk again. The mute man started attending church but after some time, he stopped attending. And Adeboye went to go and see the man. And started asking him, “you used to attend church but now you don’t attend anymore, what happened?” And the man started saying, “Are you the one who healed me?” And Adeboye answered and said “no” and the man continued on and said “God is everywhere, why do I need to go to church when God is everywhere.” So Adeboye left, and later some day again, when Adeboye was walking around he saw the same man, he was mute but not only that, he was not able to move his body and his arms went this way and that and he could not move them. (John 5:14) When we sin and God heals us and we continue to sin then something worse will undoubtedly happen to us especially when we are like the pig that continues to return to our wallowing in the mire. (2 Peter 2:22). One of Adeboye’s famous quotes is when people call him a mighty man of God, Adeboye would reply and say that he is “a man with a mighty God.” The lesson here is to never ascribe glory to yourself but to ascribe glory to God. (Isaiah 42:8) Don’t ever try to share in God’s glory, because you were not the one who did it, God did it! (Job 40:10-14). Adeboye recalls eating what they used to call Okra soup and meat made with Okra which they used to put in the middle. But when the Lord intervened in his families’ situation they were able to eat real meat and since that day they never had to eat okra soup again! When Adeboye gave his life to God, sicknesses disappeared from his life, whereas before he became a true Christian he used to get sick every now and then. When Adeboye surrendered his life to God, God took control and blessed`
        text_to_read.innerText += ` him. Even though he had to make big sacrifices, because we all know that nothing comes on a platter of gold. When you see greatness, there was always a great price to be paid. And Adeboye paid the price. And is still paying the price up till today and God is blessing him. There was a time when Adeboye was sleeping on his couch and all of a sudden he felt someone reaching his legs and head at the same time. He initially thought that it was his wife but then quickly realized that his wife isn’t that tall or big and there is no way that she could successfully reach his head and feet at the same time. And that whoever is doing that must be a very tall and gigantic person. Adeboye quickly opened his eyes and realized that it was a demon and scarcely had he opened his eyes scarcely had the demon disappeared. Adeboye quickly went into prayer to God asking why, why would this happen, wasn’t he one of God’s children. And God answered Adeboye and said that he allowed this to happen so that he would realize and remember who was keeping him. (Psalm 121:4; Psalm 124:2-3). There was another time where Adeboye had just finished preaching a sermon and to his amazement many people had come out to give their lives to Christ, as such was custom after every sermon, there was an altar call where Adeboye would pray for those who wanted to give their lives to Christ. When it comes to holiness and saving souls, Adeboye does not joke! He even preaches on his birthday. He wants to see how many people can be saved and his goal is to make heaven crowded. After the successful sermon he and a bunch of other pastors went to a hotel room and upon closing the door. Adeboye closed it on his thumb, one of his fingers. And he started screaming in pain, endlessly! And the pastors and men of God began to wonder “what is this?” And Adeboye prayed to God and asked why this happened? And God answered Adeboye and asked him? “Who did you thanks to after this successful sermon and evangelical soul reachout?” And at that moment Adeboye realized that he had failed to give God glory and thank him for what he had done and did so immediately. And as soon as he finished the pain from his finger ceased! (Isaiah 42:8; 1 Thessalonians 5:18) The lesson here is that when God does something for you, don’t walk away with the credit, give him thanks and all the glory!`
        text_to_read.innerText += `Pastor Adeboye is also known for his God-given ability to expand scripture. He said that one of his dreams was to expand the scriptures and keep on expanding them and wherever he was able to get to in the Bible by the time he was 70 he would retire. But God told him if he retired that he would be blind. And up till today he hasn’t retired, he is still in full time ministry. One of the passages he expanded and explained was 1 Kings 18:41-44. Elijah was a man of God and he had said in 1 Kings 17:1 that it would not rain except according to his word. And it did not rain in Israel for 3 years and 6 months according to Luke 4:25; James 5:17. It did not rain because Israel was living in sin, they had forgotten the Almighty God. But in 1 Kings 18:41 something happened. But before this, Elijah had already finished with such a mighty victory. He had made a challenge with the 450 prophets of Baal and the 400 prophets of Asherah who eat at Jezebel’s table (1Kings 18:19). He struck a deal with them. 1Kings 18:20-24, because the Israelites kept faltering between 2 opinions, whether Yahweh was the true God or Baal was the true God. So he made a challenge with them. The prophets of Baal would go first and would sacrifice their bull on wood but would put NO fire underneath. And Elijah would do the same and the God who answered by fire would be the true God. And so it was, the prophets of Baal prepared the bul, called on the name of their god, “Baal” from morning to noon (1Kings 18:26) and they leaped around the altar and danced. But nothing happened. Then Elijah started mocking them saying that, maybe their God was sleeping and they had to wake him up! (1 Kings 18:27). So the prophets of Baal in attempt to show desperate they were they started cutting themselves with knives and lances, until they started bleeding as such was their custom. And they prophesied till the evening sacrifice, but no one answered them. Now it was Elijah’s turn, he told the people to come near, and they came near, he built the altar of God the traditional way, with 12 stones, each one represented the`
        text_to_read.innerText += ` 12 tribes of Israel. He cut the bull in pieces and put in on the wood, but then he did something that should have caused even the prophets of Baal to laugh. He told the people to fill four waterpots with water and pour it on his burnt sacrifice and on the wood. And thus they did 3 times!! “So the water ran all around the altar; and he also filled the trench with water” - 1Kings 18:35. THen Elijah the prophet came near and spoke to the God of Abraham, Isaac, and Israel (Jacob), he spoke a simple prayer which is in 1 Kings 18:36-37. And fire came down from heaven and consumed the sacrifice. “And when all the people saw it, they fell on their faces: and they said, The LORD, he is the God; the LORD, he is the God. ” - 1 Kings 18:39. Then Elijah executed all the false prophets of Baal and he executed them at the Brook Kishon. Now we're back at the original story in 1 Kings: 18:41-44. Elijah told Ahab “Get thee up, eat and drink; for there is a sound of abundance of rain. So Ahab went up to eat and to drink. And Elijah went up to the top of Carmel; and he cast himself down upon the earth, and put his face between his knees, And said to his servant, Go up now, look toward the sea. And he went up, and looked, and said, There is nothing. And he said, Go again seven times. And it came to pass at the seventh time, that he said, Behold, there ariseth a little cloud out of the sea, like a man's hand. And he said, Go up, say unto Ahab, Prepare thy chariot, and get thee down, that the rain stop thee not. And it came to pass in the mean while, that the heaven was black with clouds and wind, and there was a great rain. And Ahab rode, and went to Jezreel.`
        text_to_read.innerText += `And the hand of the LORD was on Elijah; and he girded up his loins, and ran before Ahab to the entrance of Jezreel.” What is so peculiar and strange about this passage is that it took Elijah 7 tries to get rain to fall. In 1 Kings 17:1 he said “As the LORD God of Israel liveth, before whom I stand, there shall not be dew nor rain these years, but according to my word. ”`
        text_to_read.innerText += `But when Elijah prayed to God during his challenge with the prophets of Baal it only took him 1 try. The question Pastor Adeboye asked was, “which is easier for rain to fall or for fire to fall down from heaven.” The answer to the question is very simple, rain! We see rain falling down everyday, even when people don’t pray! But when was the last time you saw fire falling down from heaven. The answer is probably “never!” So the question Adeboye posed was “why was it harder for Elijah to get rain to fall down then for him to get fire to fall down” Elijah was a man of God so getting rain to fall down should have been much easier. Adeboye then proceeded to tell us that it was because “Elijah had announced his victory before it happened. He declared that it would rain before it started raining. So when the Devil saw that, he said “Good! I will show you who is the god of the sky! No rain is going to fall here!” So when Elijah prayed the first time on mountain Carmel and he sent his servant to go check the sky, he saw that nothing was happening. He prayed again 7 more times and each time his sent his servant saying “Go again” and the seventh time his servant said “Behold, there ariseth a little cloud out of the sea, like a man's hand.” - 1 Kings 18:44. This time, Elijah knew that something was happening. The man of God, Pastor Adeboye said that, you should never announce your victory before it happens. That there are some things that are not meant to be said until they happen. Otherwise you will face difficulties. So during the convention in Americas’ convention in Canada called “A second touch” when explaining 2 Kings 4:5 he used one of these stories to explain why the woman had to shut her door when pouring the oil into the empty`
        text_to_read.innerText += ` vessels. As well as also explaining Mark 8:22-26, he said lots of things. Things that intertwined and it was like a bridge when the man of God was speaking. It was like he was building a bridge, and he took us all over the Bible and was expanding and expanding. Here is a section of what he said word for word after reading Mark *:22-25: “...my Son added some beautiful things talking about the genes of Jesus Christ etc. I didn’t quite see that, as an addition to my knowledge, they brought him to Jesus. People who brought you to Jesus have brought you to the last bus stop. They have done their bit, they brought you to someone who cannot fail. Once they’ve done that, the rest is up to Jesus Christ and to you. Some people brought you here tonight, it’s now left to Jesus and you. Whether you are going home with a second touch are you are just going home like you came. There was a man, who was completely paralyzed, and he took two of his friends to carry him to the camp in Nigeria. By the time they arrived, of course the place was jammed, and miracles were already happening. So his friends dropped him and said, “you’re already here o, and the crowd is much, people were not carrying anybody and finding it difficult to walk, so here you are, when we finish we will come and pick you up here. So they left him, and he cried to God. And said o God, they’ve left me here o, but I know you can see me, as soon as he said that. The Holy Spirit picked up what he said and past it on to Him. And I heard what God said, “there’s someone here, saying “God you see me here o, God says tell that fellow, “yes I have seen you.””” When he heard. Ah, this is what I have just said! He knew he was the one God was talking to and all of a sudden when he had heard it, power began to flow! He though, is it a joke? Is it true? To cut the long story short, he got up, for the first time in his life! When the program was over, his friends went to where they had left him, they were looking at the ground and he came from behind and tapped them on his shoulders and said “are you looking for me?” May I decree to somebody, by the time you are leaving here tonight,`
        text_to_read.innerText += ` you won’t even believe yourself! In Mark chapter 2 from verse 1 to 12. There was another man like that in the Bible, he took 4 of his friends to bring him to where Jesus was, when they couldn’t get Him because of the crowd, they carried him to the roof, broke up the roof, the Bible didn’t tell us who repaired the roof. And the dropped the man by the feet of Jesus and as soon as they had done that they moved back and Jesus took over from there. They carried him in but he walked out, may I decree that whatever problems followed you here will not go home with you. And then Jesus did something interesting, he grabbed the man by the hand, because the man was blind. And drew him out of town, my son gave his own interpretation, “while Jesus took him out he reminded us that Jesus Christ was crucified outside the city and Jesus Christ knew that one day the cross would be outside that’s why he took him there. That’s a good interpretation but with apology to my son, that’s not exactly why he took him out. He took him away from the crowd, because certain miracles must happen privately. You don’t believe me? Well, if you check 2 Kings 4: 1-7, when the wife of one of the widows, one of the sons of the prophets was about to be declared bankrupt, and he came to Elisha, Elisha told her after he had asked her what she had in the house, “nothing just a little bottle of oil.” Elisha said, “go and borrow a lot of empty vessels, borrow not a few and then when you have done that, shut the door against yourself and your children” there are certain testimonies you don’t give until they are complete, there are certain miracles nobody must know that God is giving it to you, until the problem you have is completely settled. There are certain things that you don’t tell the Devil about, until God has finished the job. When, Elijah said on Mount Carmel. 1 Kings 18, when he was challenging the prophets of Baal and he said, you people give us two bullocks, give them one, give me one, give us wood. Nobody must put fire, let them call on their God and I will call on my God, they God that answers by fire, let him be God. Ah, the prophets of Baal because their God was supposed to be a God of fire. They accepted the challenge, and so they said, “ah God, you are in trouble today. By the time we call on our God for a`
        text_to_read.innerText += ` few minutes. Fire will fall,” they cried and cried, fire didn’t fall, well they said, “no problem, you’re God can answer be fire, so at the end of the day it will be drawn game.” They did not know, that God is already preparing the fire that will fall, so when Elijah got there and he prayed for 2 minutes and fire fell, they were so surprised that they couldn’t even run away! But when after Elijah had finished with the prophets of Baal and so on. He announced and said, I have heard this sound of abundance of rain. The Devil said “Good! Rain, I will show you that I am the god of the sky, no rain is going to fall here!” And then it will be drawn game, that’s why he had to pray 7 times, before the rain fell. Witch should be easier, rain falling or fire falling, but he announced victory before it was complete, I pray for somebody today, that before the end of this month, your miracles will be delivered. So the widow had to shut the door on everybody outside when pouring that little, the oil in that little bottle. So the people outside didn’t know what was happening, they’ve been wondering “why is this fellow borrowing empty vessels?” And they didn’t even know what had happened, all they discovered was that, this woman had been to the man of God in the morning, in the afternoon, she had gone back to the man of God. And after receiving a second touch, after going back to testify, she came back and sold the oil, and paid all the debt and had more than enough money to live on for the rest of the life. I had heard the testimony of someone who said, “if he should push all his debt into one river, the river will not flow anymore” May I decree, I am doing this one, but I know that God is dwelling me, “by the power of the one who is greater than all the forces in the world, by the end of this month, your debt will be gone.” That is why, you will find David, whenever he wanted to talk about something very serious, he would use the word ““I” the Lord is my shepherd, surely goodness and mercies shall follow me all the days of my life and I will dwell in the house of the Lord forever.” There are certain miracles that are for you alone, and you don’t tell anyone about it until the evidence is there. I still remember, we had a program in Lagos. Because there was one man there, he was born with only one testicle, and they took him to the herbalist to help.`
        text_to_read.innerText += ` The herbalist in an attempt to help destroyed the only one he had, and yet he still went ahead and got married. And then as the program was going God said that “there’s somebody here that has lost the only testicle he had,” Daddy asked me to tell him  “alright, I give you a creative miracle,” and he received it. A couple of months later he came to the office with his wife who of course had been barren because of course, oga had nothing to operate with, but he came with the wife, with the belly bulging, “Daddy, I was the one that God promised a brand new birth, he gave me my mouth back, can I show you?” And I said “there is no need, the evidence is already there” oh Lord in the name of the one who sent me to Canada. The evidence that God has given you a second touch, will be there before the end of the week. That’s why Daddy took him out of the town. And then one of my sons, one of the speakers said that “but explaining why Jesus spat in the eyes of the fellow” well again he gave some very brilliant interpretations but allow me to add my own little bit, you see anyone who wants to receive a major miracle from God. Must be someone who is totally submissive to God. You know the story of Naaman, 2 Kings 5, when God wanted to wash him clean. He got too close to the altar, you may not feel it yet, but power is flowing here tonight. When Naaman came to Elijah, and Elijah said, “go and wash in river Jordan 7 times and you will be clean” Naaman was angry, ah! What’s going on here! Look at this stupid prophet, I thought he would come out and pray for me, touch all the places where there is leprosy, don’t we have a better river? But because God has made up his mind that he would be merciful unto him, he listened to one of the servants and said “sir if God had asked you to do something big, won’t you have done it, all he asked you to do was go and wash” when God was to do something extraordinarily big, he wants to find out, do you want to do it your own way or my own way. I mean I can’t understand how a leper will trying to dictate to God how he wants healing. The Lord wants to find out, will this man allow me to do this job my own way. So when he spat, he couldn’t see, but he could feel, when he spat on his eyes, that man could have said “ay, what’s going on here? Ah I can’t see but I can feel. You spat on my face! Keep your `
        text_to_read.innerText += `miracle!” And there are many of us, God wants to solve your problem, going right, you think He should solve your problem going left, the Lord wants to find out, will this fellow surrender completely to me? So those of you who are here tonight, somebody had brought you to the last bus stop to Jesus Christ. God in the same finite mercy somehow allowed you to hear about this program and put aside everything you could be doing to come to this program. God is going to ask you for one more thing later on, will you surrender to him. Not pretending to be a Christian, will you allow Him to control your life from now on. I remember very well, when I came to the Redeemed Christian church of God as I told you before. I had a problem that my mathematics could not solve and somebody told me that miracles are happening in the Redeemed Christian church of God, that’s why I came and I was expecting that they would tell me how much I would pay, so that they would pray the prayer that God would answer. And when I came, they were always saying, “surrender your life to Jesus, forsake your sins” and I was thinking “what’s wrong with these people, they are all illiterate, what do they mean by sin?” I mean ordinary mistakes, “what’s wrong with them? Don’t they know that I am a human being?” I had a problem o, I was arguing with them, until one day God in his infinite mercy, must have been the one speaking to my mind saying “oga with your PhD, look at the faces of these people you are calling illiterate? What do you see?” And I saw peace, “do you have what they have? Are they asking you to surrender to the General Overseer? They are asking you to surrender to your God, and you are arguing!” That’s when I stopped arguing, that’s when I surrendered to Jesus. That’s the way God solved my problems for me, so at the end of my little talk I am going to ask you, who have not surrendered your lives to Jesus Christ totally, to do so. Because if you don’t do so, “forget about second touch” even before he touched his eyes for the first time, he had to spit on the eyes first. It’s possible that God had other reasons, like my son said eloquently, but he’s asking will you do whatever he tells you from now on. The answer must be “yes!” Otherwise don’t bother yourself about second touch. Now that’s the story on it’s own. Although you can see several other things from `
        text_to_read.innerText += `the story, when Lord touched his eyes, “what can you see” and he said “I can see men walking like trees” it tells us that this man was not born blind. He had seen trees before, he had seen men before and he knows that men don’t walk like trees. Why didn’t the Lord finish the job with one touch, let’s leave that out of today. But I am sure that you’ve heard me preach on that one before. Now, man is a trinity, three in one, according to 1 Thessalonians 5:23, it tells us that “you are made up of spirit, soul, and body” so let me talk for some minutes about the implications of a second touch, physically according as your body is involved. When you look at John 5, from verse 2 to 9, John 5:2-9. It tells us the story of a pool where, some incurable people would go waiting for the coming of an angel to trouble the waters and then the first to journey would be healed and the rest would have to wait for another year. And then Jesus went there and saw a man who had been there for you know how many years. For a very long time, and then, Jesus asked him, “will you be made whole?” And the man said “sorry, I have nobody to help me, when the angel comes I have nobody to help me, before I can crawl to the pool, somebody has gone in before me. So Jesus said “alright, let’s forget the story. Just get up and carry your bed and go” that’s the first touch. Immediately the man got up, and he was healed, he obeyed the instruction and then if we continue with the story all the way to verse 14, this man had a second touch, because the moment he got up, he went straight to the house of God. You are going to get a first touch tonight if you have gotten before and then do what this man did, then he went to the house of God. Because there are some people who will come to a meeting like this and then you never see them in church again. It was while he was in church that Jesus met him again a second time and said “oga, by the way I didn’t tell you” I’m not sure if he even waited to be told he was so happy, he said “okay, you’ve been made whole, go and sin no more, so that something worse will not happen to you” first touch gave him healing, second touch told him what to do so that he will never be sick again. This convention is a very dangerous one, because God is going to give you a second touch tonight and after that you better run away `
        text_to_read.innerText += `from sin because when Jesus Christ said if you sin again, something worse, what can be worse than 38 years of sickness. Years ago they brought a man to Ebute-Metta at the headquarters of the church if you saw him when he was coming, you won’t believe anything like that happened. His hands were straight like a piece of iron, his legs the same, the joints just cannot perform. And then we said to him “will you surrender your life to Jesus” before we finished saying so he said “I surrender” and we prayed a simple prayer and the one who could not bend knelt down and got up, danced, rejoiced, and he kept on coming to church, dancing, lifting his hands, shouting hallelujah, but after some time we didn’t see him in church and so we a did a follow up, “sir, what happened? We didn’t see you in church anymore?” Eh! He said “so what! Ah, if you are sick and you go to the hospital, and you are made whole, do you stay put in the hospital?” And we said “no” and he said “are you the one who healed us? He healed me” and we said “no” ah, he said “Jesus is everywhere” very good logic. He lived very near the university of Lagos and at that time I was lecturing in the university, he ceased to come. We pleaded “no!” Then one day I was coming from the university on my way home and I saw the same man, the hands were back straight as rods, the legs were straight as rods, and the mouth can no longer close, I looked at him, this is this man. Because, if you forsake the healer he is likely to withdraw the healing, one of my children was giving the example of the woman with the issue of blood. Yeah, she got the first touch when she got the touch that gave her healing when she touched the hem of the garment of Jesus Christ but it was when she testified that the Lord now said “you are whole!” Your churches should be full of testimonies for months to come because my God is going to do marvelous things. I think I heard one testimony tonight, someone asked God for something and she kept quiet, didn’t testify, you had to the Almighty God told us that one of the things that can really really irritate God is failure to testify. You know he told us the story of how he cleansed 10 lepers and he was the only one that made whole. The others got healing. Now when God touches you the first time, you get healed. If he touches you the second time, you become whole, you `
        text_to_read.innerText += `know it is possible to be healthy for the rest of your life. It is, and people said to me. If I am healthy for the rest of my life, you won’t fall sick. How am I going to die? You don’t have to be sick to die. After God has touched somebody listening to me tonight, after he has made you whole, you will never be sick again. When the time comes for you to go, you will just walk away. And that’s the way I want to go, if he delays rapture, I have told you it is most likely I will die on Sunday, come to church, dance, celebrate so that everybody will know when the year that the man was gone, he was saying “bye-bye” go to church, dance, rejoice, eat pounded yam, and go. If the Almighty God delays his coming, you won’t suffer before you go. Then still talking about physical things, we can talk about finance…” Photo Image Attribution: By Abolajiadeola - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=89948780`
        
        
    }
    if (book_clicked == 5) {
        // Mary Slessor
  
    }
}

function Christian_Articles_DataBase () {
    if (book_clicked == 1) {
        // Does Science Uphold the Bible
    }
    if (book_clicked == 2) {
        // Why Does God hate Divorce?
    }
    if (book_clicked == 3) {
        // Heaven and Hell
    }
    if (book_clicked == 4) {
        // The Most Important Thing
    }
    if (book_clicked == 5) {
        // The Abomination of Desolation
    }

}

function resizeCanvas() {
    // Sets the internal drawing resolution to the exact window bounds
    canvas.width = window.innerWidth -2;
    canvas.height = window.innerHeight -90;

    /* Note: Changing the canvas size clears the context state. 
    Redraw or call your render function here*/

    drawGame();
}

function gameLoop() {
    /**Wiping the entire screen clear is important before drawing your next batch */
    wipeOutEntireScreen();
    drawGame();
    /** All that requestAnimationFrame does it create a forever loop that can help me make
     * games or animations also, you can't control the fps it specifically hooked to match your
     * monitor's physical refresh rate
     */
    requestAnimationFrame(gameLoop);
}

/** Inititalize Dimensions on load */
resizeCanvas();
gameLoop();

// console.log(ctx);