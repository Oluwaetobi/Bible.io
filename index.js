/** Alright, so let's get this straight, servers will try to look for the index.html in the root
 * folder, if it's not there, and maybe your index.html is hiding inside another folder, it 
 * won't load, but instead it will display an error, unless you do something like index.js,
 *  index.php, app.js, someo other popular alternatives.
 * So in this case, my index.html is hiding inside my folder called Front-End-Development,
 * I created another index.html file in the root folder (outside of all my other folders) 
 * linked it to this file called index.js and in order to send the user to the 
 * index.html hiding inside the Front-End-Development folder I use this code
 * in my javascript file  window.location.href = 
 *  "./ "then the name of the folder it is hiding in" / then "index.html"
 */
var warning_important = "IMPORTANT!!! WARNING!!!! If somebody told you to paste something here, don't do it, someone is trying to hack you, install a malware on your computer, or steal your information!!!!! \n \n \n Bible.io is looking for experienced Web Developers, Game Developers, programmers, and skilled artists to join the Bible.io Team. We want YOU!! To help build the World's soon to be NUMBER 1 Leading Website for teaching and gamifying God's word. https://github.com/Oluwaetobi/Bible.io  Join us, NOW!!";
localStorage.setItem('warning_important', warning_important);
const warning_note = localStorage.getItem('warning_important')
console.log(warning_note)

function redirect_User_to_the_right_page() {
    window.location.href = "./Front-End-Development/index.html"; 
}

/**Developer tools, if the item exists already get it, if not, save one as false, if you are a developer,
 * then I'm sure you know what to do, if not, don't worry
 */
var i_am_a_developer = false;
const developer_tools = JSON.parse(localStorage.getItem('i_am_a_developer'));
if (developer_tools) {
    i_am_a_developer = developer_tools;
} else {
    /** set it to false, if you are a developer than you know what to do */
    localStorage.setItem('i_am_a_developer', JSON.stringify(i_am_a_developer));
}



function store_Bible_books_sessionally () {
    sessionStorage.setItem('book_of_genesis', JSON.stringify(book_of_genesis))
}

var book_of_genesis = `Genesis Chapter 1
God createth Heaven and Earth, and all things therein, in six days.

1:1. In the beginning God created heaven, and earth.

1:2. And the earth was void and empty, and darkness was upon the face of the deep; and the spirit of God moved over the waters.

1:3. And God said: Be light made. And light was made.

1:4. And God saw the light that it was good; and he divided the light from the darkness.

1:5. And he called the light Day, and the darkness Night; and there was evening and morning one day.

1:6. And God said: Let there be a firmament made amidst the waters: and let it divide the waters from the waters.

A firmament.... By this name is here understood the whole space between the earth, and the highest stars. The lower part of which divideth the waters that are upon the earth, from those that are above in the clouds.

1:7. And God made a firmament, and divided the waters that were under the firmament, from those that were above the firmament, and it was so.

1:8. And God called the firmament, Heaven; and the evening and morning were the second day.

1:9. God also said; Let the waters that are under the heaven, be gathered together into one place: and let the dry land appear. And it was so done.

1:10. And God called the dry land, Earth; and the gathering together of the waters, he called Seas. And God saw that it was good.

1:11. And he said: let the earth bring forth green herb, and such as may seed, and the fruit tree yielding fruit after its kind, which may have seed in itself upon the earth. And it was so done.

1:12. And the earth brought forth the green herb, and such as yieldeth seed according to its kind, and the tree that beareth fruit, having seed each one according to its kind. And God saw that it was good.

1:13. And the evening and the morning were the third day.

1:14. And God said: Let there be lights made in the firmament of heaven, to divide the day and the night, and let them be for signs, and for seasons, and for days and years:

1:15. To shine in the firmament of heaven, and to give light upon the earth, and it was so done.

1:16. And God made two great lights: a greater light to rule the day; and a lesser light to rule the night: and the stars.

Two great lights.... God created on the first day, light, which being moved from east to west, by its rising and setting, made morning and evening. But on the fourth day he ordered and distributed this light, and made the sun, moon, and stars. The moon, though much less than the stars, is here called a great light, from its giving a far greater light to the earth than any of them.

1:17. And he set them in the firmament of heaven to shine upon the earth.

1:18. And to rule the day and the night, and to divide the light and the darkness. And God saw that it was good.

1:19. And the evening and morning were the fourth day.

1:20. God also said: let the waters bring forth the creeping creature having life, and the fowl that may fly over the earth under the firmament of heaven.

1:21. And God created the great whales, and every living and moving creature, which the waters brought forth, according to their kinds, and every winged fowl according to its kind. And God saw that it was good.

1:22. And he blessed them, saying: Increase and multiply, and fill the waters of the sea: and let the birds be multiplied upon the earth.

1:23. And the evening and morning were the fifth day.

1:24. And God said: Let the earth bring forth the living creature in its kind, cattle and creeping things, and beasts of the earth, according to their kinds. And it was so done.

1:25. And God made the beasts of the earth according to their kinds, and cattle, and every thing that creepeth on the earth after its kind. And God saw that it was good.

1:26. And he said: Let us make man to our image and likeness: and let him have dominion over the fishes of the sea, and the fowls of the air, and the beasts, and the whole earth, and every creeping creature that moveth upon the earth.

Let us make man to our image.... This image of God in man, is not in the body, but in the soul; which is a spiritual substance, endued with understanding and free will. God speaketh here in the plural number, to insinuate the plurality of persons in the Deity.

1:27. And God created man to his own image: to the image of God he created him: male and female he created them.

1:28. And God blessed them, saying: Increase and multiply, and fill the earth, and subdue it, and rule over the fishes of the sea, and the fowls of the air, and all living creatures that move upon the earth.

Increase and multiply.... This is not a precept, as some Protestant controvertists would have it, but a blessing, rendering them fruitful; for God had said the same words to the fishes, and birds, (ver. 22) who were incapable of receiving a precept.

1:29. And God said: Behold I have given you every herb bearing seed upon the earth, and all trees that have in themselves seed of their own kind, to be your meat:

1:30. And to all beasts of the earth, and to every fowl of the air, and to all that move upon the earth, and wherein there is life, that they may have to feed upon. And it was so done.

1:31. And God saw all the things that he had made, and they were very good. And the evening and morning were the sixth day.

Genesis Chapter 2
God resteth on the seventh day and blesseth it. The earthly paradise, in which God placeth man. He commandeth him not to eat of the tree of knowledge. And formeth a woman of his rib.

2:1. So the heavens and the earth were finished, and all the furniture of them.

2:2. And on the seventh day God ended his work which he had made: and he rested on the seventh day from all his work which he had done.

He rested, etc.... That is, he ceased to make or create any new kinds of things. Though, as our Lord tells us, John 5.17, “He still worketh”, viz., by conserving and governing all things, and creating souls.

2:3. And he blessed the seventh day, and sanctified it: because in it he had rested from all his work which God created and made.

2:4. These are the generations of the heaven and the earth, when they were created, in the day that the Lord God made the heaven and the earth:

2:5. And every plant of the field before it sprung up in the earth, and every herb of the ground before it grew: for the Lord God had not rained upon the earth; and there was not a man to till the earth.

2:6. But a spring rose out of the earth, watering all the surface of the earth.

2:7. And the Lord God formed man of the slime of the earth: and breathed into his face the breath of life, and man became a living soul.

2:8. And the Lord God had planted a paradise of pleasure from the beginning: wherein he placed man whom he had formed.

2:9. And the Lord God brought forth of the ground all manner of trees, fair to behold, and pleasant to eat of: the tree of life also in the midst of paradise: and the tree of knowledge of good and evil.

The tree of life.... So called because it had that quality, that by eating of the fruit of it, man would have been preserved in a constant state of health, vigour, and strength, and would not have died at all. The tree of knowledge.... To which the deceitful serpent falsely attributed the power of imparting a superior kind of knowledge, beyond that which God was pleased to give.

2:10. And a river went out of the place of pleasure to water paradise, which from thence is divided into four heads.

2:11. The name of the one is Phison: that is it which compasseth all the land of Hevilath, where gold groweth.

2:12. And the gold of that land is very good: there is found bdellium, and the onyx stone.

2:13. And the name of the second river is Gehon: the same is it that compasseth all the land of Ethiopia.

2:14. And the name of the third river is Tigris: the same passeth along by the Assyrians. And the fourth river is Euphrates.

2:15. And the Lord God took man, and put him into the paradise of pleasure, to dress it, and to keep it.

2:16. And he commanded him, saying: Of every tree of paradise thou shalt eat:

2:17. But of the tree of knowledge of good and evil, thou shalt not eat. For in what day soever thou shalt eat of it, thou shalt die the death.

2:18. And the Lord God said: It is not good for man to be alone: let us make him a help like unto himself.

2:19. And the Lord God having formed out of the ground all the beasts of the earth, and all the fowls of the air, brought them to Adam to see what he would call them: for whatsoever Adam called any living creature the same is its name.

2:20. And Adam called all the beasts by their names, and all the fowls of the air, and all the cattle of the field: but for Adam there was not found a helper like himself.

2:21. Then the Lord God cast a deep sleep upon Adam: and when he was fast asleep, he took one of his ribs, and filled up flesh for it.

2:22. And the Lord God built the rib which he took from Adam into a woman: and brought her to Adam.

2:23. And Adam said: This now is bone of my bones, and flesh of my flesh; she shall be called woman, because she was taken out of man.

2:24. Wherefore a man shall leave father and mother, and shall cleave to his wife: and they shall be two in one flesh.

2:25. And they were both naked: to wit, Adam and his wife: and were not ashamed.

Genesis Chapter 3
The serpent’s craft. The fall of our first parents. Their punishment. The promise of a Redeemer.

3:1. Now the serpent was more subtle than any of the beasts of the earth which the Lord God had made. And he said to the woman: Why hath God commanded you, that you should not eat of every tree of paradise?

3:2. And the woman answered him, saying: Of the fruit of the trees that are in paradise we do eat:

3:3. But of the fruit of the tree which is in the midst of paradise, God hath commanded us that we should not eat; and that we should not touch it, lest perhaps we die.

3:4. And the serpent said to the woman: No, you shall not die the death.

3:5. For God doth know that in what day soever you shall eat thereof, your eyes shall be opened: and you shall be as Gods, knowing good and evil.

3:6. And the woman saw that the tree was good to eat, and fair to the eyes, and delightful to behold: and she took of the fruit thereof, and did eat, and gave to her husband, who did eat.

3:7. And the eyes of them both were opened: and when they perceived themselves to be naked, they sewed together fig leaves, and made themselves aprons.

And the eyes, etc.... Not that they were blind before, (for the woman saw that the tree was fair to the eyes, ver. 6.) nor yet that their eyes were opened to any more perfect knowledge of good; but only to the unhappy experience of having lost the good of original grace and innocence, and incurred the dreadful evil of sin. From whence followed a shame of their being naked; which they minded not before; because being now stript of original grace, they quickly began to be subject to the shameful rebellions of the flesh.

3:8. And when they heard the voice of the Lord God walking in paradise at the afternoon air, Adam and his wife hid themselves from the face of the Lord God, amidst the trees of paradise.

3:9. And the Lord God called Adam, and said to him: Where art thou?

3:10. And he said: I heard thy voice in paradise; and I was afraid, because I was naked, and I hid myself.

3:11. And he said to him: And who hath told thee that thou wast naked, but that thou hast eaten of the tree whereof I commanded thee that thou shouldst not eat?

3:12. And Adam said: The woman, whom thou gavest me to be my companion, gave me of the tree, and I did eat.

3:13. And the Lord God said to the woman: Why hast thou done this? And she answered: The serpent deceived me, and I did eat.

3:14. And the Lord God said to the serpent: Because thou hast done this thing, thou art cursed among all cattle, and beasts of the earth: upon thy breast shalt thou go, and earth shalt thou eat all the days of thy life.

3:15. I will put enmities between thee and the woman, and thy seed and her seed: she shall crush thy head, and thou shalt lie in wait for her heel.

She shall crush.... Ipsa, the woman; so divers of the fathers read this place, conformably to the Latin: others read it ipsum, viz., the seed. The sense is the same: for it is by her seed, Jesus Christ, that the woman crushes the serpent’s head.

3:16. To the woman also he said: I will multiply thy sorrows, and thy conceptions: in sorrow shalt thou bring forth children, and thou shalt be under thy husband’s power, and he shall have dominion over thee.

3:17. And to Adam he said: Because thou hast hearkened to the voice of thy wife, and hast eaten of the tree, whereof I commanded thee, that thou shouldst not eat, cursed is the earth in thy work: with labour and toil shalt thou eat thereof all the days of thy life.

3:18. Thorns and thistles shall it bring forth to thee, and thou shalt eat the herbs of the earth.

3:19. In the sweat of thy face shalt thou eat bread till thou return to the earth out of which thou wast taken: for dust thou art, and into dust thou shalt return.

3:20. And Adam called the name of his wife Eve: because she was the mother of all the living.

3:21. And the Lord God made for Adam and his wife garments of skins, and clothed them.

3:22. And he said: Behold Adam is become as one of us, knowing good and evil: now therefore lest perhaps he put forth his hand and take also of the tree of life, and eat, and live for ever.

Behold Adam, etc.... This was spoken by way of reproaching him with his pride, in affecting a knowledge that might make him like to God.

3:23. And the Lord God sent him out of the paradise of pleasure, to till the earth from which he was taken.

3:24. And he cast out Adam: and placed before the paradise of pleasure Cherubims, and a flaming sword, turning every way, to keep the way of the tree of life.

Genesis Chapter 4
The history of Cain and Abel.

4:1. And Adam knew Eve his wife; who conceived and brought forth Cain, saying: I have gotten a man through God.

4:2. And again she brought forth his brother Abel. And Abel was a shepherd, and Cain a husbandman.

4:3. And it came to pass after many days, that Cain offered, of the fruits of the earth, gifts to the Lord.

4:4. Abel also offered of the firstlings of his flock, and of their fat: and the Lord had respect to Abel, and to his offerings.

Had respect.... That is, shewed his acceptance of his sacrifice (as coming from a heart full of devotion): and that, as we may suppose, by some visible token, such as sending fire from heaven upon his offerings.

4:5. But to Cain and his offerings he had no respect: and Cain was exceeding angry, and his countenance fell.

4:6. And the Lord said to him: Why art thou angry? and why is thy countenance fallen?

4:7. If thou do well, shalt thou not receive? but if ill, shall not sin forthwith be present at the door? but the lust thereof shall be under thee, and thou shalt have dominion over it.

4:8. And Cain said to Abel his brother: Let us go forth abroad. And when they were in the field, Cain rose up against his brother Abel, and slew him.

4:9. And the Lord said to Cain: Where is thy brother Abel? And he answered: I know not: am I my brother’s keeper?

4:10. And he said to him: What hast thou done? the voice of thy brother’s blood crieth to me from the earth.

4:11. Now, therefore, cursed shalt thou be upon the earth, which hath opened her mouth and received the blood of thy brother at thy hand.

4:12. When thou shalt till it, it shall not yield to thee its fruit: a fugitive and a vagabond shalt thou be upon the earth.

4:13. And Cain said to the Lord: My iniquity is greater than that I may deserve pardon.

4:14. Behold thou dost cast me out this day from the face of the earth, and from thy face I shall be hid, and I shall be a vagabond and a fugitive on the earth: every one, therefore, that findeth me, shall kill me.

Every one that findeth me shall kill me.... His guilty conscience made him fear his own brothers and nephews; of whom, by this time, there might be a good number upon the earth; which had now endured near 130 years; as may be gathered from Gen. 5.3, compared with chap. 4.25, though in the compendious account given in the scriptures, only Cain and Abel are mentioned.

4:15. And the Lord said to him: No, it shall not so be: but whosoever shall kill Cain, shall be punished sevenfold. And the Lord set a mark upon Cain, that whosoever found him should not kill him.

Set a mark, etc.... The more common opinion of the interpreters of holy writ supposes this mark to have been a trembling of the body; or a horror and consternation in his countenance.

4:16. And Cain went out from the face of the Lord, and dwelt as a fugitive on the earth at the east side of Eden.

4:17. And Cain knew his wife, and she conceived, and brought forth Henoch: and he built a city, and called the name thereof by the name of his son Henoch.

His wife.... She was a daughter of Adam, and Cain’s own sister; God dispensing with such marriages in the beginning of the world, as mankind could not otherwise be propagated. He built a city, viz.... In process of time, when his race was multiplied, so as to be numerous enough to people it. For in the many hundred years he lived, his race might be multiplied even to millions.

4:18. And Henoch begot Irad, and Irad begot Maviael, and Maviael begot Mathusael, and Mathusael begot Lamech,

4:19. Who took two wives: the name of the one was Ada, and the name of the other Sella.

4:20. And Ada brought forth Jabel: who was the father of such as dwell in tents, and of herdsmen.

4:21. And his brother’s name was Jubal: he was the father of them that play upon the harp and the organs.

4:22. Sella also brought forth Tubalcain, who was a hammerer and artificer in every work of brass and iron. And the sister of Tubalcain was Noema.

4:23. And Lamech said to his wives Ada and Sella: Hear my voice, ye wives of Lamech, hearken to my speech: for I have slain a man to the wounding of myself, and a stripling to my own bruising.

I have slain a man, etc.... It is the tradition of the Hebrews, that Lamech in hunting slew Cain, mistaking him for a wild beast; and that having discovered what he had done, he beat so unmercifully the youth, by whom he was led into that mistake, that he died of the blows.

4:24. Sevenfold vengeance shall be taken for Cain: but for Lamech seventy times sevenfold.

4:25. Adam also knew his wife again: and she brought forth a son, and called his name Seth, saying: God hath given me another seed for Abel, whom Cain slew.

4:26. But to Seth also was born a son, whom he called Enos: this man began to call upon the name of the Lord.

Began to call upon, etc.... Not that Adam and Seth had not called upon God, before the birth of Enos; but that Enos used more solemnity in the worship and invocation of God.

Genesis Chapter 5
The genealogy, age, and death of the Patriarchs, from Adam to Noe. The translation of Henoch.

5:1. This is the book of the generation of Adam. In the day that God created man, he made him to the likeness of God.

5:2. He created them male and female; and blessed them: and called their name Adam, in the day when they were created.

5:3. And Adam lived a hundred and thirty years, and begot a son to his own image and likeness, and called his name Seth.

5:4. And the days of Adam, after he begot Seth, were eight hundred years: and he begot sons and daughters.

5:5. And all the time that Adam lived, came to nine hundred and thirty years, and he died.

5:6. Seth also lived a hundred and five years, and begot Enos.

5:7. And Seth lived after he begot Enos, eight hundred and seven years, and begot sons and daughters.

5:8. And all the days of Seth were nine hundred and twelve years, and he died.

5:9. And Enos lived ninety years, and begot Cainan.

5:10. After whose birth he lived eight hundred and fifteen years, and begot sons and daughters.

5:11. And all the days of Enos were nine hundred and five years, and he died.

5:12. And Cainan lived seventy years, and begot Malaleel.

5:13. And Cainan lived after he begot Malaleel, eight hundred and forty years, and begot sons and daughters.

5:14. And all the days of Cainan were nine hundred and ten years, and he died.

5:15. And Malaleel lived sixty-five years and begot Jared.

5:16. And Malaleel lived after he begot Jared, eight hundred and thirty years, and begot sons and daughters.

5:17. And all the days of Malaleel were eight hundred and ninety-five years, and he died.

5:18. And Jared lived a hundred and sixty-two years, and begot Henoch.

5:19. And Jared lived after he begot Henoch, eight hundred years, and begot sons and daughters.

5:20. And all the days of Jared were nine hundred and sixty-two years, and he died.

5:21. And Henoch lived sixty-five years, and begot Mathusala.

5:22. And Henoch walked with God: and lived after he begot Mathusala, three hundred years, and begot sons and daughters.

5:23. And all the days of Henoch were three hundred and sixty-five years.

5:24. And he walked with God, and was seen no more: because God took him.

5:25. And Mathusala lived a hundred and eighty-seven years, and begot Lamech.

5:26. And Mathlusala lived after he begot Lamech, seven hundred and eighty-two years, and begot sons and daughters.

5:27. And all the days of Mathusala were nine hundred and sixty-nine years, and he died.

5:28. And Lamech lived a hundred and eighty-two years, and begot a son.

5:29. And he called his name Noe, saying: This same shall comfort us from the works and labours of our hands on the earth, which the Lord hath cursed.

5:30. And Lamech lived after he begot Noe, five hundred and ninety-five years, and begot sons and daughters.

5:31. And all the days of Lamech came to seven hundred and seventy-seven years, and he died. And Noe, when he was five hundred years old, begot Sem, Cham, and Japheth.

Genesis Chapter 6
Man’s sin is the cause of the deluge. Noe is commanded to build the ark.

6:1. And after that men began to be multiplied upon the earth, and daughters were born to them,

6:2. The sons of God seeing the daughters of men, that they were fair, took to themselves wives of all which they chose.

The sons of God.... The descendants of Seth and Enos are here called sons of God from their religion and piety: whereas the ungodly race of Cain, who by their carnal affections lay grovelling upon the earth, are called the children of men. The unhappy consequence of the former marrying with the latter, ought to be a warning to Christians to be very circumspect in their marriages; and not to suffer themselves to be determined in their choice by their carnal passion, to the prejudice of virtue or religion.

6:3. And God said: My spirit shall not remain in man for ever, because he is flesh, and his days shall be a hundred and twenty years.

His days shall be, etc.... The meaning is, that man’s days, which before the flood were usually 900 years, should now be reduced to 120 years. Or rather, that God would allow men this term of 120 years, for their repentance and conversion, before he would send the deluge.

6:4. Now giants were upon the earth in those days. For after the sons of God went in to the daughters of men, and they brought forth children, these are the mighty men of old, men of renown.

Giants.... It is likely the generality of men before the flood were of a gigantic stature in comparison with what men now are. But these here spoken of are called giants, as being not only tall in stature, but violent and savage in their dispositions, and mere monsters of cruelty and lust.

6:5. And God seeing that the wickedness of men was great on the earth, and that all the thought of their heart was bent upon evil at all times,

6:6. It repented him that he had made man on the earth. And being touched inwardly with sorrow of heart,

It repented him, etc.... God, who is unchangeable, is not capable of repentance, grief, or any other passion. But these expressions are used to declare the enormity of the sins of men, which was so provoking as to determine their Creator to destroy these his creatures, whom before he had so much favoured.

6:7. He said: I will destroy man, whom I have created, from the face of the earth, from man even to beasts, from the creeping thing even to the fowls of the air, for it repenteth me that I have made them.

6:8. But Noe found grace before the Lord.

6:9. These are the generations of Noe: Noe was a just and perfect man in his generations, he walked with God.

6:10. And he begot three sons, Sem, Cham, and Japheth.

6:11. And the earth was corrupted before God, and was filled with iniquity.

6:12. And when God had seen that the earth was corrupted (for all flesh had corrupted its way upon the earth),

6:13. He said to Noe: The end of all flesh is come before me, the earth is filled with iniquity through them, and I will destroy them with the earth.

6:14. Make thee an ark of timber planks: thou shalt make little rooms in the ark, and thou shalt pitch it within and without.

6:15. And thus shalt thou make it. The length of the ark shall be three hundred cubits: the breadth of it fifty cubits, and the height of it thirty cubits.

Three hundred cubits, etc.... The ark, according to the dimensions here set down, contained four hundred and fifty thousand square cubits; which was more than enough to contain all the kinds of living creatures, with all necessary provisions: even supposing the cubits here spoken of to have been only a foot and a half each, which was the least kind of cubits.

6:16. Thou shalt make a window in the ark, and in a cubit shalt thou finish the top of it: and the door of the ark thou shalt set in the side: with lower, middle chambers, and third stories shalt thou make it.

6:17. Behold, I will bring the waters of a great flood upon the earth, to destroy all flesh, wherein is the breath of life under heaven. All things that are in the earth shall be consumed.

6:18. And I will establish my covenant with thee, and thou shalt enter into the ark, thou and thy sons, and thy wife, and the wives of thy sons with thee.

6:19. And of every living creature of all flesh, thou shalt bring two of a sort into the ark, that they may live with thee: of the male sex, and the female.

6:20. Of fowls according to their kind, and of beasts in their kind, and of every thing that creepeth on the earth according to its kind: two of every sort shall go in with thee, that they may live.

6:21. Thou shalt take unto thee of all food that may be eaten, and thou shalt lay it up with thee: and it shall be food for thee and them.

6:22. And Noe did all things which God commanded him.

Genesis Chapter 7
Noe with his family go into the ark. The deluge overflows the earth.

7:1. And the Lord said to him: Go in, thou and all thy house, into the ark: for thee I have seen just before me in this generation.

7:2. Of all clean beasts take seven and seven, the male and the female.

Of all clean.... The distinction of clean and unclean beasts appears to have been made before the law of Moses, which was not promulgated till the year of the world 2514.

7:3. But of the beasts that are unclean two and two, the male and the female. Of the fowls also of the air seven and seven, the male and the female: that seed may be saved upon the face of the whole earth.

7:4. For yet a while, and after seven days, I will rain upon the earth forty days and forty nights: and I will destroy every substance that I have made, from the face of the earth.

7:5. And Noe did all things which the Lord had commanded him.

7:6. And he was six hundred years old, when the waters of the flood overflowed the earth.

7:7. And Noe went in and his sons, his wife and the wives of his sons with him into the ark, because of the waters of the flood.

7:8. And of beasts clean and unclean, and of fowls, and of every thing that moveth upon the earth,

7:9. Two and two went in to Noe into the ark, male and female, as the Lord had commanded Noe.

7:10. And after the seven days were passed, the waters of the flood overflowed the earth.

7:11. In the six hundredth year of the life of Noe, in the second month, in the seventeenth day of the month, all the fountains of the great deep were broken up, and the floodgates of heaven were opened:

7:12. And the rain fell upon the earth forty days and forty nights.

7:13. In the selfsame day Noe, and Sem, and Cham, and Japheth, his sons: his wife, and the three wives of his sons with them, went into the ark.

7:14. They and every beast according to its kind, and all the cattle in their kind, and every thing that moveth upon the earth, according to its kind, and every fowl according to its kind, all birds, and all that fly,

7:15. Went in to Noe into the ark, two and two of all flesh, wherein was the breath of life.

7:16. And they that went in, went in male and female of all flesh, as God had commanded him: and the Lord shut him in on the outside.

7:17. And the flood was forty days upon the earth: and the waters increased, and lifted up the ark on high from the earth.

7:18. For they overflowed exceedingly: and filled all on the face of the earth: and the ark was carried upon the waters.

7:19. And the waters prevailed beyond measure upon the earth: and all the high mountains under the whole heaven were covered.

7:20. The water was fifteen cubits higher than the mountains which it covered.

7:21. And all flesh was destroyed that moved upon the earth, both of fowl and of cattle, and of beasts, and of all creeping things that creep upon the earth: and all men.

7:22. And all things wherein there is the breath of life on the earth, died.

7:23. And he destroyed all the substance that was upon the earth, from man even to beast, and the creeping things and fowls of the air: and they were destroyed from the earth: and Noe only remained, and they that were with him in the ark.

7:24. And the waters prevailed upon the earth a hundred and fifty days.

Genesis Chapter 8
The deluge ceaseth. Noe goeth out of the ark, and offereth a sacrifice. God’s covenant to him.

8:1. And God remembered Noe, and all the living creatures, and all the cattle which were with him in the ark, and brought a wind upon the earth, and the waters were abated:

8:2. The fountains also of the deep, and the floodgates of heaven, were shut up, and the rain from heaven was restrained.

8:3. And the waters returned from off the earth going and coming: and they began to be abated after a hundred and fifty days.

8:4. And the ark rested in the seventh month, the seven and twentieth day of the month, upon the mountains of Armenia.

8:5. And the waters were going and decreasing until the tenth month: for in the tenth month, the first day of the month, the tops of the mountains appeared.

8:6. And after that forty days were passed, Noe opening the window of the ark, which he had made, sent forth a raven:

8:7. Which went forth and did not return, till the waters were dried up upon the earth.

Did not return.... The raven did not return into the ark; but (as it may be gathered from the Hebrew) went to and fro; sometimes going to the mountains, where it found carcasses to feed on: and other times returning, to rest upon the top of the ark.

8:8. He sent forth also a dove after him, to see if the waters had now ceased upon the face of the earth.

8:9. But she not finding where her foot might rest, returned to him into the ark: for the waters were upon the whole earth: and he put forth his hand, and caught her, and brought her into the ark.

8:10. And having waited yet seven other days, he again sent forth the dove out of the ark.

8:11. And she came to him in the evening carrying a bough of an olive tree, with green leaves, in her mouth. Noe therefore understood that the waters were ceased upon the earth.

8:12. And he stayed yet other seven days: and he sent forth the dove, which returned not any more unto him.

8:13. Therefore in the six hundredth and first year, the first month, the first day of the month, the waters were lessened upon the earth, and Noe opening the covering of the ark, looked, and saw that the face of the earth was dried.

8:14. In the second month, the seven and twentieth day of the month, the earth was dried.

8:15. And God spoke to Noe, saying:

8:16. Go out of the ark, thou and thy wife, thy sons and the wives of thy sons with thee.

8:17. All living things that are with thee of all flesh, as well in fowls as in beasts, and all creeping things that creep upon the earth, bring out with thee, and go ye upon the earth: increase and multiply upon it.

8:18. So Noe went out, he and his sons: his wife, and the wives of his sons with him.

8:19. And all living things, and cattle, and creeping things that creep upon the earth, according to their kinds went out of the ark.

8:20. And Noe built an altar unto the Lord: and taking of all cattle and fowls that were clean, offered holocausts upon the altar.

Holocausts, ... or whole burnt offerings. In which the whole victim was consumed by fire upon God’s altar, and no part was reserved for the use of priest or people.

8:21. And the Lord smelled a sweet savour, and said: I will no more curse the earth for the sake of man: for the imagination and thought of man’s heart are prone to evil from his youth: therefore I will no more destroy every living soul as I have done.

Smelled, etc.... A figurative expression, denoting that God was well pleased with the sacrifices which his servant offered.

8:22. All the days of the earth, seedtime and harvest, cold and heat, summer and winter, night and day, shall not cease.

Genesis Chapter 9
God blesseth Noe: forbiddeth blood, and promiseth never more to destroy the world by water. The blessing of Sem and Japheth.

9:1. And God blessed Noe and his sons. And he said to them: Increase, and multiply, and fill the earth.

9:2. And let the fear and dread of you be upon all the beasts of the earth, and upon all the fowls of the air, and all that move upon the earth: all the fishes of the sea are delivered into your hand.

9:3. And every thing that moveth, and liveth shall be meat for you: even as the green herbs have I delivered them all to you:

9:4. Saving that flesh with blood you shall not eat.

9:5. For I will require the blood of your lives at the hand of every beast, and at the hand of man, at the hand of every man, and of his brother, will I require the life of man.

9:6. Whosoever shall shed man’s blood, his blood shall be shed: for man was made to the image of God.

9:7. But increase you and multiply, and go upon the earth and fill it.

9:8. Thus also said God to Noe, and to his sons with him:

9:9. Behold I will establish my covenant with you, and with your seed after you:

9:10. And with every living soul that is with you, as well in all birds, as in cattle and beasts of the earth, that are come forth out of the ark, and in all the beasts of the earth.

9:11. I will establish my covenant with you, and all flesh shall be no more destroyed with the waters of a flood, neither shall there be from henceforth a flood to waste the earth.

9:12. And God said: This is the sign of the covenant which I give between me and you, and to every living soul that is with you, for perpetual generations.

9:13. I will set my bow in the clouds, and it shall be the sign of a covenant between me and between the earth.

9:14. And when I shall cover the sky with clouds, my bow shall appear in the clouds:

9:15. And I will remember my covenant with you, and with every living soul that beareth flesh: and there shall no more be waters of a flood to destroy all flesh.

9:16. And the bow shall be in the clouds, and I shall see it, and shall remember the everlasting covenant, that was made between God and every living soul of all flesh which is upon the earth.

9:17. And God said to Noe: This shall be the sign of the covenant, which I have established, between me and all flesh upon the earth.

9:18. And the sons of Noe, who came out of the ark, were Sem, Cham, and Japheth: and Cham is the father of Chanaan.

9:19. These three are the sons of Noe: and from these was all mankind spread over the whole earth.

9:20. And Noe a husbandman began to till the ground, and planted a vineyard.

9:21. And drinking of the wine was made drunk, and was uncovered in his tent.

Drunk.... Noe by the judgment of the fathers was not guilty of sin, in being overcome by wine: because he knew not the strength of it.

9:22. Which when Cham the father of Chanaan had seen, to wit, that his father’s nakedness was uncovered, he told it to his two brethren without.

9:23. But Sem and Japheth put a cloak upon their shoulders, and going backward, covered the nakedness of their father: and their faces were turned away, and they saw not their father’s nakedness.

Covered the nakedness.... Thus, as St. Gregory takes notice L. 35; Moral. c. 22, we ought to cover the nakedness, that is, the sins, of our spiritual parents and superiors.

9:24. And Noe awaking from the wine, when he had learned what his younger son had done to him,

9:25. He said: Cursed be Chanaan, a servant of servants shall he be unto his brethren.

Cursed be Chanaan.... The curses, as well as the blessings, of the patriarchs, were prophetical: And this in particular is here recorded by Moses, for the children of Israel, who were to possess the land of Chanaan. But why should Chanaan be cursed for his father’s faults? The Hebrews answer, that he being then a boy, was the first that saw his grandfather’s nakedness, and told his father Cham of it; and joined with him in laughing at it: which drew upon him, rather than upon the rest of the children of Cham, this prophetical curse.

9:26. And he said: Blessed be the Lord God of Sem, be Chanaan his servant.

9:27. May God enlarge Japheth, and may he dwell in the tents of Sem, and Chanaan be his servant.

9:28. And Noe lived after the flood three hundred and fifty years.

9:29. And all his days were in the whole nine hundred and fifty years: and he died.

Genesis Chapter 10
The genealogy of the children of Noe, by whom the world was peopled after the flood.

10:1. These are the generations of the sons of Noe: Sem, Cham, and Japheth: and unto them sons were born after the flood.

10:2. The sons of Japheth: Gomer, and Magog, and Madai, and Javan, and Thubal, and Mosoch, and Thiras.

10:3. And the sons of Gomer: Ascenez and Riphath and Thogorma.

10:4. And the sons of Javan: Elisa and Tharsis, Cetthim and Dodanim.

10:5. By these were divided the islands of the Gentiles in their lands, every one according to his tongue and their families in their nations.

The islands.... So the Hebrews called all the remote countries, to which they went by ships from Judea, to Greece, Italy, Spain, etc.

10:6. And the Sons of Cham: Chus, and Mesram, and Phuth, and Chanaan.

10:7. And the sons of Chus: Saba, and Hevila, and Sabatha, and Regma, and Sabatacha. The sons of Regma: Saba, and Dadan.

10:8. Now Chus begot Nemrod: he began to be mighty on the earth.

10:9. And he was a stout hunter before the Lord. Hence came a proverb: Even as Nemrod the stout hunter before the Lord.

A stout hunter.... Not of beasts but of men: whom by violence and tyranny he brought under his dominion. And such he was, not only in the opinion of men, but before the Lord, that is, in his sight who cannot be deceived.

10:10. And the beginning of his kingdom was Babylon, and Arach, and Achad, and Chalanne in the land of Sennaar.

10:11. Out of that land came forth Assur, and built Ninive, and the streets of the city, and Chale.

10:12. Resen also between Ninive and Chale: this is the great city.

10:13. And Mesraim begot Ludim, and Anamim and Laabim, Nephthuim.

10:14. And Phetrusim, and Chasluim; of whom came forth the Philistines, and the Capthorim.

10:15. And Chanaan begot Sidon his firstborn, the Hethite,

10:16. And the Jebusite, and the Amorrhite, and the Gergesite.

10:17. The Hevite and Aracite: the Sinite,

10:18. And the Aradian, the Samarite, and the Hamathite: and afterwards the families of the Chanaanites were spread abroad.

10:19. And the limits of Chanaan were from Sidon as one comes to Gerara even to Gaza, until thou enter Sodom and Gomorrha, and Adama, and Seboim even to Lesa.

10:20. These are the children of Cham in their kindreds and tongues, and generations, and lands, and nations.

10:21. Of Sem also the father of all the children of Heber, the elder brother of Japheth, sons were born.

10:22. The sons of Sem: Elam and Assur, and Arphaxad, and Lud, and Aram.

10:23. The sons of Aram: Us, and Hull, and Gether; and Mes.

10:24. But Arphaxad begot Sale, of whom was born Heber.

10:25. And to Heber were born two sons: the name of the one was Phaleg, because in his days was the earth divided: and his brother’s name Jectan.

10:26. Which Jectan begot Elmodad, and Saleph, and Asarmoth, Jare,

10:27. And Aduram, and Uzal, and Decla,

10:28. And Ebal, and Abimael, Saba,

10:29. And Ophir, and Hevila, and Jobab. All these were the sons of Jectan.

10:30. And their dwelling was from Messa as we go on as far as Sephar, a mountain in the east.

10:31. These are the children of Sem according to their kindreds and tongues, and countries in their nations.

10:32. These are the families of Noe, according to their people and nations. By these were the nations divided on the earth after the flood.

Genesis Chapter 11
The tower of Babel. The confusion of tongues. The genealogy of Sem down to Abram.

11:1. And the earth was of one tongue, and of the same speech.

11:2. And when they removed from the east, they found a plain in the land of Sennaar, and dwelt in it.

11:3. And each one said to his neighbour: Come let us make brick, and bake them with fire. And they had brick instead of stones, and slime instead of mortar:

11:4. And they said: Come, let us make a city and a tower, the top whereof may reach to heaven; and let us make our name famous before we be scattered abroad into all lands.

11:5. And the Lord came down to see the city and the tower, which the children of Adam were building.

11:6. And he said: Behold, it is one people, and all have one tongue: and they have begun to do this, neither will they leave off from their designs, till they accomplish them in deed.

11:7. Come ye, therefore, let us go down, and there confound their tongue, that they may not understand one another’s speech.

11:8. And so the Lord scattered them from that place into all lands, and they ceased to build the city.

11:9. And therefore the name thereof was called Babel, because there the language of the whole earth was confounded: and from thence the Lord scattered them abroad upon the face of all countries.

Babel.... That is, confusion.

11:10. These are the generations of Sem: Sem was a hundred years old when he begot Arphaxad, two years after the flood.

11:11. And Sem lived after he begot Arphaxad, five hundred years, and begot sons and daughters.

11:12. And Arphaxad lived thirty-five years, and begot Sale.

11:13. And Arphaxad lived after he begot Sale, three hundred and three years, and begot sons and daughters.

11:14. Sale also lived thirty years, and begot Heber.

11:15. And Sale lived after he begot Heber, four hundred and three years: and begot sons and daughters.

11:16. And Heber lived thirty-four years, and begot Phaleg.

11:17. And Heber lived after he begot Phaleg, four hundred and thirty years: and begot sons and daughters.

11:18. Phaleg also lived thirty years, and begot Reu.

11:19. And Phaleg lived after he begot Reu, two hundred and nine years, and begot sons and daughters.

11:20. And Reu lived thirty-two years, and begot Sarug.

11:21. And Reu lived after he begot Sarug, two hundred and seven years, and begot sons and daughters.

11:22. And Sarug lived thirty years, and begot Nachor.

11:23. And Sarug lived after he begot Nachor, two hundred years, and begot sons and daughters.

11:24. And Nachor lived nine and twenty years, and begot Thare.

11:25. And Nachor lived after he begot Thare, a hundred and nineteen years, and begot sons and daughters.

11:26. And Thare lived seventy years, and begot Abram, and Nachor, and Aran.

11:27. And these are the generations of Thare: Thare begot Abram, Nachor, and Aran. And Aran begot Lot.

11:28. And Aran died before Thare his father, in the land of his nativity in Ur of the Chaldees.

11:29. And Abram and Nachor married wives: the name of Abram’s wife was Sarai: and the name of Nachor’s wife, Melcha, the daughter of Aran, father of Melcha and father of Jescha.

11:30. And Sarai was barren, and had no children.

11:31. And Thare took Abram his son, and Lot the son of Aran, his son’s son, and Sarai his daughter in law, the wife of Abram his son, and brought them out of Ur of the Chaldees, to go into the land of Chanaan: and they came as far as Haran, and dwelt there.

11:32. And the days of Thare were two hundred and five years, and he died in Haran.

Genesis Chapter 12
The call of Abram, and the promise made to him. He sojourneth in Chanaan, and then by occasion of a famine, goeth down to Egypt.

12:1. And the Lord said to Abram: Go forth out of thy country, and from thy kindred, and out of thy father’s house, and come into the land which I shall shew thee.

12:2. And I will make of thee a great nation, and I will bless thee, and magnify thy name, and thou shalt be blessed.

12:3. I will bless them that bless thee, and curse them that curse thee, and IN THEE shall all the kindreds of the earth be blessed.

12:4. So Abram went out as the Lord had commanded him, and Lot went with him: Abram was seventy-five years old when he went forth from Haran.

12:5. And he took Sarai his wife, and Lot his brother’s son, and all the substance which they had gathered, and the souls which they had gotten in Haran: and they went out to go into the land of Chanaan. And when they were come into it,

12:6. Abram passed through the country unto the place of Sichem, as far as the noble vale: now the Chanaanite was at that time in the land.

12:7. And the Lord appeared to Abram, and said to him: To thy seed will I give this land. And he built there an altar to the Lord, who had appeared to him.

12:8. And passing on from thence to a mountain, that was on the east side of Bethel, he there pitched his tent, having Bethel on the west, and Hai on the east: he built there also an altar to the Lord, and called upon his name.

12:9. And Abram went forward, going and proceeding on to the south.

12:10. And there came a famine in the country: and Abram went down into Egypt, to sojourn there: for the famine was very grievous in the land.

12:11. And when he was near to enter into Egypt, he said to Sarai his wife: I know that thou art a beautiful woman:

12:12. And that when the Egyptians shall see thee, they will say: She is his wife: and they will kill me, and keep thee.

12:13. Say, therefore, I pray thee, that thou art my sister: that I may be well used for thee, and that my soul may live for thy sake.

My sister.... This was no lie; because she was his niece, being daughter to his brother Aran, and therefore, in the style of the Hebrews, she might truly be called his sister, as Lot is called Abram’s brother, Gen. 14.14. See Gen. 20.12.

12:14. And when Abram was come into Egypt, the Egyptians saw the woman that she was very beautiful.

12:15. And the princes told Pharao, and praised her before him: and the woman was taken into the house of Pharao.

12:16. And they used Abram well for her sake. And he had sheep and oxen and he asses, and men servants, and maid servants, and she asses, and camels.

12:17. But the Lord scourged Pharao and his house with most grievous stripes for Sarai, Abram’s wife.

12:18. And Pharao called Abram, and said to him: What is this that thou hast done to me? Why didst thou not tell me that she was thy wife?

12:19. For what cause didst thou say, she was thy sister, that I might take her to my wife? Now therefore there is thy wife, take her, and go thy way.

12:20. And Pharao gave his men orders concerning Abram: and they led him away and his wife, and all that he had.

Genesis Chapter 13
Abram and Lot part from each other. God’s promise to Abram.

13:1. And Abram went up out of Egypt, he and his wife, and all that he had, and Lot with him into the south.

13:2. And he was very rich in possession of gold and silver.

13:3. And he returned by the way, that he came, from the south to Bethel, to the place where before he had pitched his tent between Bethel and Hai,

13:4. In the place of the altar which he had made before, and there he called upon the name of the Lord.

13:5. But Lot also, who was with Abram, had flocks of sheep, and herds of beasts, and tents.

13:6. Neither was the land able to bear them, that they might dwell together: for their substance was great, and they could not dwell together.

13:7. Whereupon also there arose a strife between the herdsmen of Abram and of Lot. And at that time the Chanaanite and the Pherezite dwelled in that country.

13:8. Abram therefore said to Lot: Let there be no quarrel, I beseech thee, between me and thee, and between my herdsmen and thy herdsmen: for we are brethren.

13:9. Behold the whole land is before thee: depart from me, I pray thee: if thou wilt go to the left hand, I will take the right: if thou choose the right hand, I will pass to the left.

13:10. And Lot lifting up his eyes, saw all the country about the Jordan, which was watered throughout, before the Lord destroyed Sodom and Gomorrha, as the paradise of the Lord, and like Egypt as one comes to Segor.

13:11. And Lot chose to himself the country about the Jordan, and he departed from the east: and they were separated one brother from the other.

13:12. Abram dwelt in the land of Chanaan: and Lot abode in the towns, that were about the Jordan, and dwelt in Sodom.

13:13. And the men of Sodom were very wicked, and sinners before the face of the Lord beyond measure.

13:14. And the Lord said to Abram, after Lot was separated from him: Lift up thy eyes, and look from the place wherein thou now art, to the north and to the south, to the east and to the west.

13:15. All the land which thou seest, I will give to thee, and to thy seed for ever.

13:16. And I will make thy seed as the dust of the earth: if any man be able to number the dust of the earth, he shall be able to number thy seed also.

13:17. Arise and walk through the land in the length, and the breadth thereof: for I will give it to thee.

13:18. So Abram removing his tent, came, and dwelt by the vale of Mambre, which is in Hebron: and he built there an altar to the Lord.

Genesis Chapter 14
The expedition of the four kings; the victory of Abram; he is blessed by Melchisedech.

14:1. And it came to pass at that time, that Amraphel, king of Sennaar, and Arioch, king of Pontus, and Chodorlahomor, king of the Elamites, and Thadal, king of nations,

14:2. Made war against Bara, king of Sodom, and against Bersa, king of Gomorrha, and against Sennaab, king of Adama, and against Semeber, king of Seboim, and against the king of Bala, which is Segor.

14:3. All these came together into the woodland vale, which now is the salt sea.

14:4. For they had served Chodorlahomor twelve years, and in the thirteenth year they revolted from him.

14:5. And in the fourteenth year came Chodorlahomor, and the kings that were with him: and they smote the Raphaim in Astarothcarnaim, and the Zuzim with them, and the Emim in Save of Cariathaim.

14:6. And the Chorreans in the mountains of Seir, even to the plains of Pharan, which is in the wilderness.

14:7. And they returned, and came to the fountain of Misphat, the same is Cades: and they smote all the country of the Amalecites, and the Amorrhean that dwelt in Asasonthamar.

14:8. And the king of Sodom, and the king of Gomorrha, and the king of Adama, and the king of Seboim, and the king of Bala, which is Segor, went out: and they set themselves against them in battle array, in the woodland vale:

14:9. To wit, against Chodorlahomor king of the Elamites, and Thadal king of nations, and Amraphel king of Sennaar, and Arioch king of Pontus: four kings against five.

14:10. Now the woodland vale had many pits of slime. And the king of Sodom, and the king of Gomorrha turned their backs, and were overthrown there: and they that remained, fled to the mountain.

Of slime. Bituminis.... This was a kind of pitch, which served for mortar in the building of Babel, Gen. 11.3, and was used by Noe in pitching the ark.

14:11. And they took all the substance of the Sodomites, and Gomorrhites, and all their victuals, and went their way:

14:12. And Lot also, the son of Abram’s brother, who dwelt in Sodom, and his substance.

14:13. And behold one, that had escaped, told Abram the Hebrew, who dwelt in the vale of Mambre the Amorrhite, the brother of Escol, and the brother of Aner: for these had made a league with Abram.

14:14. Which when Abram had heard, to wit, that his brother Lot was taken, he numbered of the servants born in his house, three hundred and eighteen, well appointed: and pursued them to Dan.

14:15. And dividing his company, he rushed upon them in the night, and defeated them: and pursued them as far as Hoba, which is on the left hand of Damascus.

14:16. And he brought back all the substance, and Lot his brother, with his substance, the women also, and the people.

14:17. And the king of Sodom went out to meet him, after he returned from the slaughter of Chodorlahomor, and of the kings that were with him in the vale of Save, which is the king’s vale.

14:18. But Melchisedech, the king of Salem, bringing forth bread and wine, for he was the priest of the most high God,

14:19. Blessed him, and said: Blessed be Abram by the most high God, who created heaven and earth.

14:20. And blessed be the most high God, by whose protection, the enemies are in thy hands. And he gave him the tithes of all.

14:21. And the king of Sodom said to Abram: Give me the persons, and the rest take to thyself.

14:22. And he answered him: I lift up my hand to the Lord God the most high, the possessor of heaven and earth,

14:23. That from the very woof thread unto the shoe latchet, I will not take of any things that are thine, lest thou say: I have enriched Abram.

14:24. Except such things as the young men have eaten, and the shares of the men that came with me, Aner, Escol, and Mambre: these shall take their shares.

Genesis Chapter 15
God promiseth seed to Abram. His faith, sacrifice and vision.

15:1. Now when these things were done, the word of the Lord came to Abram by a vision, saying: Fear not, Abram, I am thy protector, and thy reward exceeding great.

15:2. And Abram said: Lord God, what wilt thou give me? I shall go without children: and the son of the steward of my house is this Damascus Eliezer.

15:3. And Abram added: But to me thou hast not given seed: and lo my servant born in my house, shall be my heir.

15:4. And immediately the word of the Lord came to him, saying: He shall not be thy heir: but he that shall come out of thy bowels, him shalt thou have for thy heir.

15:5. And he brought him forth abroad, and said to him: Look up to heaven and number the stars if thou canst. And he said to him: So shall thy seed be.

15:6. Abram believed God, and it was reputed to him unto justice.

15:7. And he said to him: I am the Lord who brought thee out from Ur of the Chaldees, to give thee this land, and that thou mightest possess it.

15:8. But he said: Lord God, whereby may I know that I shall possess it?

15:9. And the Lord answered, and said: Take me a cow of three years old, and a she-goat of three years, and a ram of three years, a turtle also, and a pigeon.

15:10. And he took all these, and divided them in the midst, and laid the two pieces of each one against the other: but the birds he divided not.

15:11. And the fowls came down upon the carcasses, and Abram drove them away.

15:12. And when the sun was setting, a deep sleep fell upon Abram, and a great and darksome horror seized upon him.

15:13. And it was said unto him: Know thou beforehand that thy seed shall be a stranger in a land not their own, and they shall bring them under bondage, and afflict them four hundred years.

15:14. But I will judge the nation which they shall serve, and after this they shall come out with great substance.

15:15. And thou shalt go to thy fathers in peace, and be buried in a good old age.

15:16. But in the fourth generation they shall return hither: for as yet the iniquities of the Amorrhites are not at the full until this present time.

15:17. And when the sun was set, there arose a dark mist, and there appeared a smoking furnace, and a lamp of fire passing between those divisions.

15:18. That day God made a covenant with Abram, saying: To thy seed will I give this land, from the river to Egypt even to the great river Euphrates.

15:19. The Cineans, and Cenezites, the Cedmonites,

15:20. And the Hethites, and the Pherezites, the Raphaim also,

15:21. And the Amorrhites, and the Chanaanites, and the Gergesites, and the Jebusites.

Genesis Chapter 16
Abram marrieth Agar, who bringeth forth Ismael.

16:1. Now Sarai, the wife of Abram, had brought forth no children: but having a handmaid, an Egyptian, named Agar,

16:2. She said to her husband: Behold, the Lord hath restrained me from bearing: go in unto my handmaid, it may be I may have children of her at least. And when he agreed to her request,

16:3. She took Agar the Egyptian her handmaid, ten years after they first dwelt in the land of Chanaan, and gave her to her husband to wife.

To wife.... Plurality of wives, though contrary to the primitive institution of marriage, Gen. 2.24, was by divine dispensation allowed to the patriarchs: which allowance seems to have continued during the time of the law of Moses. But Christ our Lord reduced marriage to its primitive institution. Matt. 19.

16:4. And he went in to her. But she perceiving that she was with child, despised her mistress.

16:5. And Sarai said to Abram: Thou dost unjustly with me: I gave my handmaid into thy bosom, and she perceiving herself to be with child, despiseth me. The Lord judge between me and thee.

16:6. And Abram made answer, and said to her: Behold thy handmaid is in thy own hand, use her as it pleaseth thee. And when Sarai afflicted her, she ran away.

16:7. And the angel of the Lord having found her, by a fountain of water in the wilderness, which is in the way to Sur in the desert,

16:8. He said to her: Agar, handmaid of Sarai, whence comest thou? and whither goest thou? And she answered: I flee from the face of Sarai, my mistress.

16:9. And the angel of the Lord said to her: Return to thy mistress, and humble thyself under her hand.

16:10. And again he said: I will multiply thy seed exceedingly, and it shall not be numbered for multitude.

16:11. And again: Behold, said he, thou art with child, and thou shalt bring forth a son: and thou shalt call his name Ismael, because the Lord hath heard thy affliction.

16:12. He shall be a wild man: his hand will be against all men, and all men’s hands against him: and he shall pitch his tents over against all his brethren.

16:13. And she called the name of the Lord that spoke unto her: Thou the God who hast seen me. For she said: Verily, here have I seen the hinder parts of him that seeth me.

16:14. Therefore she called that well, the well of him that liveth and seeth me. The same is between Cades and Barad.

16:15. And Agar brought forth a son to Abram: who called his name Ismael.

16:16. Abram was four score and six years old when Agar brought him forth Ismael.

Genesis Chapter 17
The Covenant of circumcision.

17:1. And after he began to be ninety and nine years old, the Lord appeared to him: and said unto him: I am the Almighty God: walk before me, and be perfect.

17:2. And I will make my covenant between me and thee: and I will multiply thee exceedingly.

17:3. Abram fell flat on his face.

17:4. And God said to him: I am, and my covenant is with thee, and thou shalt be a father of many nations.

17:5. Neither shall thy name be called any more Abram: but thou shalt be called Abraham: because I have made thee a father of many nations.

Abram.... in the Hebrew, signifies a high father: but Abraham, the father of the multitude; Sarai signifies my Lady, but Sara absolutely Lady.

17:6. And I will make thee increase exceedingly, and I will make nations of thee, and kings shall come out of thee.

17:7. And I will establish my covenant between me and thee, and between thy seed after thee in their generations, by a perpetual covenant: to be a God to thee, and to thy seed after thee.

17:8. And I will give to thee, and to thy seed, the land of thy sojournment, all the land of Chanaan, for a perpetual possession, and I will be their God.

17:9. Again God said to Abraham: And thou therefore shalt keep my covenant, and thy seed after thee in their generations.

17:10. This is my covenant which you shall observe between me and you, and thy seed after thee: All the male-kind of you shall be circumcised.

17:11. And you shall circumcise the flesh of your foreskin, that it may be for a sign of the covenant between me and you.

17:12. An infant of eight days old shall be circumcised among you, every manchild in your generations: he that is born in the house, as well as the bought servant, shall be circumcised, and whosoever is not of your stock:

17:13. And my covenant shall be in your flesh for a perpetual covenant.

17:14. The male whose flesh of his foreskin shall not be circumcised, that soul shall be destroyed out of his people: because he hath broken my covenant.

17:15. God said also to Abraham: Sarai thy wife thou shalt not call Sarai, but Sara.

17:16. And I will bless her, and of her I will give thee a son, whom I will bless, and he shall become nations, and kings of people shall spring from him.

17:17. Abraham fell upon his face, and laughed, saying in his heart: Shall a son, thinkest thou, be born to him that is a hundred years old? and shall Sara that is ninety years old bring forth?

17:18. And he said to God: O that Ismael may live before thee.

17:19. And God said to Abraham: Sara thy wife shall bear thee a son, and thou shalt call his name Isaac, and I will establish my covenant with him for a perpetual covenant, and with his seed after him.

17:20. And as for Ismael I have also heard thee. Behold, I will bless him, and increase, and multiply him exceedingly: he shall beget twelve chiefs, and I will make him a great nation.

17:21. But my covenant I will establish with Isaac, whom Sara shall bring forth to thee at this time in the next year.

17:22. And when he had left off speaking with him, God went up from Abraham.

17:23. And Abraham took Ismael his son, and all that were born in his house: and all whom he had bought, every male among the men of his house: and he circumcised the flesh of their foreskin forthwith the very same day, as God had commanded him.

17:24. Abraham was ninety and nine years old, when he circumcised the flesh of his foreskin.

17:25. And Ismael his son was full thirteen years old at the time of his circumcision.

17:26. The self-same day was Abraham circumcised and Ismael his son.

17:27. And all the men of his house, as well they that were born in his house, as the bought servants and strangers, were circumcised with him.

Genesis Chapter 18
Angels are entertained by Abraham. They foretell the birth of Isaac. Abraham’s prayer for the men of Sodom.

18:1. And the Lord appeared to him in the vale of Mambre as he was sitting at the door of his tent, in the very heat of the day.

18:2. And when he had lifted up his eyes, there appeared to him three men standing near to him: and as soon as he saw them, he ran to meet them from the door of his tent, and adored down to the ground.

18:3. And he said: Lord, if I have found favour in thy sight, pass not away from thy servant.

18:4. But I will fetch a little water, and wash ye your feet, and rest ye under the tree.

18:5. And I will set a morsel of bread, and strengthen ye your heart, afterwards you shall pass on: for therefore are you come aside to your servant. And they said: Do as thou hast spoken.

18:6. Abraham made haste into the tent to Sara, and said to her: Make haste, temper together three measures of flour, and make cakes upon the hearth.

18:7. And he himself ran to the herd, and took from thence a calf, very tender and very good, and gave it to a young man, who made haste and boiled it.

18:8. He took also butter and milk, and the calf which he had boiled, and set before them: but he stood by them under the tree.

18:9. And when they had eaten, they said to him: Where is Sara thy wife? He answered: Lo she is in the tent.

18:10. And he said to him: I will return and come to thee at this time, life accompanying, and Sara, thy wife, shall have a son. Which when Sara heard, she laughed behind the door of the tent.

18:11. Now they were both old, and far advanced in years, and it had ceased to be with Sara after the manner of women.

18:12. And she laughed secretly, saying: After I am grown old, and my lord is an old man, shall I give myself to pleasure?

18:13. And the Lord said to Abraham: Why did Sara laugh, saying: Shall I, who am an old woman, bear a child indeed?

18:14. Is there any thing hard to God? According to appointment I will return to thee at this same time, life accompanying, and Sara shall have a son.

18:15. Sara denied, saying: I did not laugh: for she was afraid. But the Lord said: Nay; but thou didst laugh.

18:16. And when the men rose up from thence, they turned their eyes towards Sodom: and Abraham walked with them, bringing them on the way.

18:17. And the Lord said: Can I hide from Abraham what I am about to do:

18:18. Seeing he shall become a great and mighty nation, and in him all the nations of the earth shall be blessed?

18:19. For I know that he will command his children, and his household after him, to keep the way of the Lord, and do judgment and justice: that for Abraham’s sake, the Lord may bring to effect all the things he hath spoken unto him.

18:20. And the Lord said: The cry of Sodom and Gomorrha is multiplied, and their sin is become exceedingly grievous.

18:21. I will go down and see whether they have done according to the cry that is come to me; or whether it be not so, that I may know.

I will go down, etc.... The Lord here accommodates his discourse to the way of speaking and acting amongst men; for he knoweth all things, and needeth not to go anywhere for information. Note here, that two of the three angels went away immediately for Sodom; whilst the third, who represented the Lord, remained with Abraham.

18:22. And they turned themselves from thence, and went their way to Sodom: but Abraham as yet stood before the Lord.

18:23. And drawing nigh, he said: Wilt thou destroy the just with the wicked?

18:24. If there be fifty just men in the city, shall they perish withal? and wilt thou not spare that place for the sake of the fifty just, if they be therein?

18:25. Far be it from thee to do this thing, and to slay the just with the wicked, and for the just to be in like case as the wicked; this is not beseeming thee: thou who judgest all the earth, wilt not make this judgment.

18:26. And the Lord said to him: If I find in Sodom fifty just within the city, I will spare the whole place for their sake.

18:27. And Abraham answered, and said: Seeing I have once begun, I will speak to my Lord, whereas I am dust and ashes.

18:28. What if there be five less than fifty just persons? wilt thou for five and forty destroy the whole city: And he said: I will not destroy it, if I find five and forty.

18:29. And again he said to him: But if forty be found there, what wilt thou do? He said: I will not destroy it for the sake of forty.

18:30. Lord, saith he, be not angry, I beseech thee, if I speak: What if thirty shall be found there? He answered: I will not do it, if I find thirty there.

18:31. Seeing, saith he, I have once begun, I will speak to my Lord: What if twenty be found there? He said: I will not destroy it for the sake of twenty.

18:32. I beseech thee, saith he, be not angry, Lord, if I speak yet once more: What if ten shall be found there? And he said: I will not destroy it for the sake of ten.

18:33. And the Lord departed, after he had left speaking to Abraham: and Abraham returned to his place.

Genesis Chapter 19
Lot, entertaining Angels in his house, is delivered from Sodom, which is destroyed: his wife for looking back is turned into a statue of salt.

19:1. And the two angels came to Sodom in the evening, and Lot was sitting in the gate of the city. And seeing them, he rose up and went to meet them: and worshipped prostrate to the ground.

19:2. And said: I beseech you, my lords, turn in to the house of your servant, and lodge there: wash your feet, and in the morning you shall go on your way. And they said: No, but we will abide in the street.

19:3. He pressed them very much to turn in unto him: and when they were come into his house, he made them a feast, and baked unleavened bread, and they ate:

19:4. But before they went to bed, the men of the city beset the house, both young and old, all the people together.

19:5. And they called Lot, and said to him: Where are the men that came in to thee at night? bring them out hither, that we may know them:

19:6. Lot went out to them, and shut the door after him, and said:

19:7. Do not so, I beseech you, my brethren, do not commit this evil.

19:8. I have two daughters who, as yet, have not known man; I will bring them out to you, and abuse you them as it shall please you, so that you do no evil to these men, because they are come in under the shadow of my roof.

19:9. But they said: Get thee back thither. And again: Thou camest in, said they, as a stranger, was it to be a judge? therefore we will afflict thee more than them. And they pressed very violently upon Lot: and they were even at the point of breaking open the doors.

19:10. And behold the men put out their hand, and drew in Lot unto them, and shut the door.

19:11. And them, that were without, they struck with blindness from the least to the greatest, so that they could not find the door.

19:12. And they said to Lot: Hast thou here any of thine? son in law, or sons, or daughters, all that are thine bring them out of this city:

19:13. For we will destroy this place, because their cry is grown loud before the Lord, who hath sent us to destroy them.

19:14. So Lot went out, and spoke to his sons in law that were to have his daughters, and said: Arise: get you out of this place, because the Lord will destroy this city. And he seemed to them to speak as it were in jest.

19:15. And when it was morning, the angels pressed him, saying: Arise, take thy wife, and the two daughters that thou hast: lest thou also perish in the wickedness of the city.

19:16. And as he lingered, they took his hand, and the hand of his wife, and of his two daughters, because the Lord spared him.

19:17. And they brought him forth, and set him without the city: and there they spoke to him, saying: Save thy life: look not back, neither stay thou in all the country about: but save thy self in the mountain, lest thou be also consumed.

19:18. And Lot said to them: I beseech thee, my Lord,

19:19. Because thy servant hath found grace before thee, and thou hast magnified thy mercy, which thou hast shewn to me, in saving my life, and I cannot escape to the mountain, lest some evil seize me, and I die.

19:20. There is this city here at hand, to which I may flee, it is a little one, and I shall be saved in it: is it not a little one, and my soul shall live?

19:21. And he said to him: Behold also in this, I have heard thy prayers, not to destroy the city for which thou hast spoken.

19:22. Make haste, and be saved there: because I cannot do any thing till thou go in thither. Therefore the name of that city was called Segor.

Segor.... That is, a little one.

19:23. The sun was risen upon the earth, and Lot entered into Segor.

19:24. And the Lord rained upon Sodom and Gomorrha brimstone and fire from the Lord out of heaven.

19:25. And he destroyed these cities, and all the country about, all the inhabitants of the cities, and all things that spring from the earth.

19:26. And his wife looking behind her, was turned into a statue of salt.

And his wife.... As a standing memorial to the servants of God to proceed in virtue, and not to look back to vice or its allurements.

19:27. And Abraham got up early in the morning, and in the place where he had stood before with the Lord:

19:28. He looked towards Sodom and Gomorrha, and the whole land of that country: and he saw the ashes rise up from the earth as the smoke of a furnace.

19:29. Now when God destroyed the cities of that country, remembering Abraham, he delivered Lot out of the destruction of the cities wherein he had dwelt.

19:30. And Lot went up out of Segor, and abode in the mountain, and his two daughters with him (for he was afraid to stay in Segor) and he dwelt in a cave, he and his two daughters with him.

19:31. And the elder said to the younger: Our father is old, and there is no man left on the earth, to come in unto us after the manner of the whole earth.

19:32. Come, let us make him drunk with wine, and let us lie with him, that we may preserve seed of our father.

19:33. And they made their father drink wine that night: and the elder went in, and lay with her father: but he perceived not, neither when his daughter lay down, nor when she rose up.

19:34. And the next day the elder said to the younger: Behold I lay last night with my father, let us make him drink wine also to night, and thou shalt lie with him, that we may save seed of our father.

19:35. They made their father drink wine that night also, and the younger daughter went in, and lay with him: and neither then did he perceive when she lay down, nor when she rose up.

19:36. So the two daughters of Lot were with child by their father.

19:37. And the elder bore a son, and she called his name Moab: he is the father of the Moabites unto this day.

19:38. The younger also bore a son, and she called his name Ammon; that is, the son of my people: he is the father of the Ammonites unto this day.

Genesis Chapter 20
Abraham sojourned in Gerara: Sara is taken into king Abimelech’s house, but by God’s commandment is restored untouched.

20:1. Abraham removed from thence to the south country, and dwelt between Cades and Sur, and sojourned in Gerara.

20:2. And he said of Sara his wife: She is my sister. So Abimelech the king of Gerara sent, and took her.

20:3. And God came to Abimelech in a dream by night, and he said to him: Lo thou shalt die for the woman that thou hast taken: for she hath a husband.

20:4. Now Abimelech had not touched her, and he said: Lord, wilt thou slay a nation that is ignorant and just?

20:5. Did not he say to me: She is my sister: and she say, He is my brother? in the simplicity of my heart, and cleanness of my hands have I done this.

20:6. And God said to him: And I know that thou didst it with a sincere heart: and therefore I withheld thee from sinning against me, and I suffered thee not to touch her.

20:7. Now therefore restore the man his wife, for he is a prophet: and he shall pray for thee, and thou shalt live: but if thou wilt not restore her, know that thou shalt surely die, thou and all that are thine.

20:8. And Abimelech forthwith rising up in the night, called all his servants: and spoke all these words in their hearing, and all the men were exceedingly afraid.

20:9. And Abimelech called also for Abraham, and said to him: What hast thou done to us? what have we offended thee in, that thou hast brought upon me and upon my kingdom a great sin? thou hast done to us what thou oughtest not to do.

20:10. And again he expostulated with him, and said: What sawest thou, that thou hast done this?

20:11. Abraham answered: I thought with myself, saying: Perhaps there is not the fear of God in this place: and they will kill me for the sake of my wife:

20:12. Howbeit, otherwise also she is truly my sister, the daughter of my father, and not the daughter of my mother, and I took her to wife.

20:13. And after God brought me out of my father’s house, I said to her: Thou shalt do me this kindness: In every place, to which we shall come, thou shalt say that I am thy brother.

20:14. And Abimelech took sheep and oxen, and servants and handmaids, and gave to Abraham: and restored to him Sara his wife,

20:15. And said: The land is before you, dwell wheresoever it shall please thee.

20:16. And to Sara he said: Behold I have given thy brother a thousand pieces of silver, this shall serve thee for a covering of thy eyes to all that are with thee, and whithersoever thou shalt go: and remember thou wast taken.

20:17. And when Abraham prayed, God healed Abimelech and his wife, and his handmaids, and they bore children:

20:18. For the Lord had closed up every womb of the house of Abimelech, on account of Sara, Abraham’s wife.

Genesis Chapter 21
Isaac is born. Agar and Ismael are cast forth.

21:1. And the Lord visited Sara, as he had promised: and fulfilled what he had spoken.

21:2. And she conceived and bore a son in her old age, at the time that God had foretold her.

21:3. And Abraham called the name of his son, whom Sara bore him, Isaac.

Isaac.... This word signifies laughter.

21:4. And he circumcised him the eighth day, as God had commanded him,

21:5. When he was a hundred years old: for at this age of his father, was Isaac born.

21:6. And Sara said: God hath made a laughter for me: whosoever shall hear of it will laugh with me.

21:7. And again she said: Who would believe that Abraham should hear that Sara gave suck to a son, whom she bore to him in his old age?

21:8. And the child grew, and was weaned: and Abraham made a great feast on the day of his weaning.

21:9. And when Sara had seen the son of Agar, the Egyptian, playing with Isaac, her son, she said to Abraham:

21:10. Cast out this bondwoman and her son; for the son of the bondwoman shall not be heir with my son Isaac.

21:11. Abraham took this grievously for his son.

21:12. And God said to him: Let it not seem grievous to thee for the boy, and for thy bondwoman: in all that Sara hath said to thee, hearken to her voice: for in Isaac shall thy seed be called.

21:13. But I will make the son also of the bondwoman a great nation, because he is thy seed.

21:14. So Abraham rose up in the morning, and taking bread and a bottle of water, put it upon her shoulder, and delivered the boy, and sent her away. And she departed, and wandered in the wilderness of Bersabee.

21:15. And when the water in the bottle was spent, she cast the boy under one of the trees that were there.

21:16. And she went her way, and sat over against him a great way off, as far as a bow can carry, for she said: I will not see the boy die: and sitting over against, she lifted up her voice and wept.

21:17. And God heard the voice of the boy: and an angel of God called to Agar from heaven, saying: What art thou doing, Agar? fear not; for God hath heard the voice of the boy, from the place wherein he is.

21:18. Arise, take up the boy, and hold him by the hand, for I will make him a great nation.

21:19. And God opened her eyes: and she saw a well of water, and went and filled the bottle, and gave the boy to drink.

21:20. And God was with him: and he grew, and dwelt in the wilderness, and became a young man, an archer.

21:21. And he dwelt in the wilderness of Pharan, and his mother took a wife for him out of the land of Egypt.

21:22. At the same time Abimelech, and Phicol the general of his army, said to Abraham: God is with thee in all that thou dost.

21:23. Swear therefore by God, that thou wilt not hurt me, nor my posterity, nor my stock: but according to the kindness that I have done to thee, thou shalt do to me, and to the land wherein thou hast lived a stranger.

21:24. And Abraham said: I will swear.

21:25. And he reproved Abimelech for a well of water, which his servants had taken away by force.

21:26. And Abimelech answered: I knew not who did this thing: and thou didst not tell me, and I heard not of it till today.

21:27. Then Abraham took sheep and oxen, and gave them to Abimelech: and both of them made a league.

21:28. And Abraham set apart seven ewelambs of the flock.

21:29. And Abimelech said to him: What mean these seven ewelambs which thou hast set apart?

21:30. But he said: Thou shalt take seven ewelambs at my hand: that they may be a testimony for me, that I dug this well.

21:31. Therefore that place was called Bersabee; because there both of them did swear.

Bersabee.... That is, the well of oath.

21:32. And they made a league for the well of oath.

21:33. And Abimelech and Phicol, the general of his army, arose and returned to the land of the Palestines. But Abraham planted a grove in Bersabee, and there called upon the name of the Lord God eternal.

21:34. And he was a sojourner in the land of the Palestines many days.

Genesis Chapter 22
The faith and obedience of Abraham is proved in his readiness to sacrifice his son Isaac. He is stayed from the act by an angel. Former promises are renewed to him. His brother Nachor’s issue.

22:1. After these things, God tempted Abraham, and said to him: Abraham, Abraham. And he answered: Here I am.

God tempted, etc.... God tempteth no man to evil, James 1.13; but by trial and experiment maketh known to the world, and to ourselves, what we are, as here by this trial the singular faith and obedience of Abraham was made manifest.

22:2. He said to him: Take thy only begotten son Isaac, whom thou lovest, and go into the land of vision; and there thou shalt offer him for an holocaust upon one of the mountains which I will shew thee.

22:3. So Abraham rising up in the night, saddled his ass, and took with him two young men, and Isaac his son: and when he had cut wood for the holocaust, he went his way to the place which God had commanded him.

22:4. And on the third day, lifting up his eyes, he saw the place afar off.

22:5. And he said to his young men: Stay you here with the ass; I and the boy will go with speed as far as yonder, and after we have worshipped, will return to you.

22:6. And he took the wood for the holocaust, and laid it upon Isaac his son; and he himself carried in his hands fire and a sword. And as they two went on together,

22:7. Isaac said to his father: My father. And he answered: What wilt thou, son? Behold, saith he, fire and wood: where is the victim for the holocaust?

22:8. And Abraham said: God will provide himself a victim for an holocaust, my son. So they went on together.

22:9. And they came to the place which God had shewn him, where he built an altar, and laid the wood in order upon it; and when he had bound Isaac his son, he laid him on the altar upon the pile of wood.

22:10. And he put forth his hand, and took the sword, to sacrifice his son.

22:11. And behold, an angel of the Lord from heaven called to him, saying: Abraham, Abraham. And he answered: Here I am.

22:12. And he said to him: Lay not thy hand upon the boy, neither do thou any thing to him: now I know that thou fearest God, and hast not spared thy only begotten son for my sake.

22:13. Abraham lifted up his eyes, and saw behind his back a ram, amongst the briers, sticking fast by the horns, which he took and offered for a holocaust instead of his son.

22:14. And he called the name of that place, The Lord seeth. Whereupon, even to this day, it is said: In the mountain the Lord will see.

22:15. And the angel of the Lord called to Abraham a second time from heaven, saying:

22:16. By my own self have I sworn, saith the Lord: because thou hast done this thing, and hast not spared thy only begotten son for my sake:

22:17. I will bless thee, and I will multiply thy seed as the stars of heaven, and as the sand that is by the sea shore; thy seed shall possess the gates of their enemies.

22:18. And in thy seed shall all the nations of the earth be blessed, because thou hast obeyed my voice.

22:19. Abraham returned to his young men, and they went to Bersabee together, and he dwelt there.

22:20. After these things, it was told Abraham, that Melcha also had borne children to Nachor his brother.

22:21. Hus, the firstborn, and Buz, his brother, and Camuel the father of the Syrians,

22:22. And Cased, and Azau, and Pheldas, and Jedlaph,

22:23. And Bathuel, of whom was born Rebecca: these eight did Melcha bear to Nachor, Abraham’s brother.

22:24. And his concubine, named Roma, bore Tabee, and Gaham, and Tahas, and Maacha.

Genesis Chapter 23
Sara’s death and burial in the field bought of Ephron.

23:1. And Sara lived a hundred and twenty-seven years.

23:2. And she died in the city of Arbee which is Hebron, in the land of Chanaan: and Abraham came to mourn and weep for her.

23:3. And after he rose up from the funeral obsequies, he spoke to the children of Heth, saying:

23:4. I am a stranger and sojourner among you: give me the right of a burying place with you, that I may bury my dead.

23:5. The children of Heth answered, saying:

23:6. My lord, hear us, thou art a prince of God among us: bury thy dead in our principal sepulchres: and no man shall have power to hinder thee from burying thy dead in his sepulchre.

23:7. Abraham rose up, and bowed down to the people of the land, to wit, the children of Heth:

Bowed down to the people.... Adoravit, literally adored. But this word here, as well as in many other places in the Latin scriptures, is used to signify only an inferior honour and reverence paid to men, expressed by a bowing down of the body.

23:8. And said to them: If it please your soul that I should bury my dead, hear me, and intercede for me to Ephron the son of Seor.

23:9. That he may give me the double cave, which he hath in the end of his field: For as much money as it is worth he shall give it me before you, for a possession of a burying place.

23:10. Now Ephron dwelt in the midst of the children of Heth. And Ephron made answer to Abraham in the hearing of all that went in at the gate of the city, saying:

23:11. Let it not be so, my lord, but do thou rather hearken to what I say: The field I deliver to thee, and the cave that is therein; in the presence of the children of my people, bury thy dead.

23:12. Abraham bowed down before the people of the land.

23:13. And he spoke to Ephron, in the presence of the people: I beseech thee to hear me: I will give money for the field; take it, and so will I bury my dead in it.

23:14. And Ephron answered:

23:15. My lord, hear me. The ground which thou desirest, is worth four hundred sicles of silver: this is the price between me and thee: but what is this? bury thy dead.

23:16. And when Abraham had heard this, he weighed out the money that Ephron had asked, in the hearing of the children of Heth, four hundred sicles of silver, of common current money.

23:17. And the field that before was Ephron’s, wherein was the double cave, looking towards Mambre, both it and the cave, and all the trees thereof, in all its limits round about,

23:18. Was made sure to Abraham for a possession, in the sight of the children of Heth, and of all that went in at the gate of his city.

23:19. And so Abraham buried Sara, his wife, in the double cave of the field, that looked towards Mambre, this is Hebron in the land of Chanaan.

23:20. And the field was made sure to Abraham, and the cave that was in it, for a possession to bury in, by the children of Heth.

Genesis Chapter 24
Abraham’s servant, sent by him into Mesopotamia, bringeth from thence Rebecca, who is married to Isaac.

24:1. Now Abraham was old, and advanced in age; and the Lord had blessed him in all things.

24:2. And he said to the elder servant of his house, who was ruler over all he had: Put thy hand under my thigh,

24:3. That I may make thee swear by the Lord, the God of heaven and earth, that thou take not a wife for my son, of the daughters of the Chanaanites, among whom I dwell:

24:4. But that thou go to my own country and kindred, and take a wife from thence for my son Isaac.

24:5. The servant answered: If the woman will not come with me into this land, must I bring thy son back again to the place from whence thou camest out?

24:6. And Abraham said: Beware thou never bring my son back again thither.

24:7. The Lord God of heaven, who took me out of my father’s house, and out of my native country, who spoke to me, and swore to me, saying: To thy seed will I give this land: he will send his angel before thee, and thou shalt take from thence a wife for my son.

He will send his angel before thee.... This shows that the Hebrews believed that God gave them guardian angels for their protection.

24:8. But if the woman will not follow thee, thou shalt not be bound by the oath: only bring not my son back thither again.

24:9. The servant, therefore, put his hand under the thigh of Abraham, his lord, and swore to him upon his word.

24:10. And he took ten camels of his master’s herd, and departed, carrying something of all his goods with him, and he set forward and went on to Mesopotamia, to the city of Nachor.

24:11. And when he had made the camels lie down without the town, near a well of water, in the evening, at the time when women are wont to come out to draw water, he said:

24:12. O Lord, the God of my master, Abraham, meet me today, I beseech thee, and shew kindness to my master, Abraham.

24:13. Behold, I stand nigh the spring of water, and the daughters of the inhabitants of this city will come out to draw water:

24:14. Now, therefore, the maid to whom I shall say: Let down thy pitcher that I may drink: and she shall answer, Drink, and I will give thy camels drink also: let it be the same whom thou hast provided for thy servant Isaac: and by this, I shall understand that thou hast shewn kindness to my master.

24:15. He had not yet ended these words within himself, and behold Rebecca came out, the daughter of Bathuel, son of Melcha, wife to Nachor the brother of Abraham, having a pitcher on her shoulder:

24:16. An exceeding comely maid, and a most beautiful virgin, and not known to man: and she went down to the spring, and filled her pitcher, and was coming back.

24:17. And the servant ran to meet her, and said: Give me a little water to drink of thy pitcher.

24:18. And she answered: Drink, my lord. And quickly she let down the pitcher upon her arm, and gave him drink.

24:19. And when he had drunk, she said: I will draw water for thy camels also, till they all drink.

24:20. And pouring out the pitcher into the troughs, she ran back to the well to draw water; and having drawn, she gave to all the camels.

24:21. But he musing, beheld her with silence, desirous to know whether the Lord had made his journey prosperous or not.

24:22. And after that the camels had drunk, the man took out golden earrings, weighing two sicles; and as many bracelets, of ten sicles weight.

24:23. And he said to her: Whose daughter art thou? tell me: is there any place in thy father’s house to lodge?

24:24. And she answered: I am the daughter of Bathuel, the son of Melcha, whom she bore to Nachor.

24:25. And she said, moreover, to him: We have good store of both straw and hay, and a large place to lodge in.

24:26. The man bowed himself down, and adored the Lord,

24:27. Saying: Blessed be the Lord God of my master Abraham, who hath not taken away his mercy and truth from my master, and hath brought me the straight way into the house of my master’s brother.

24:28. Then the maid ran, and told in her mother’s house all that she had heard.

24:29. And Rebecca had a brother, named Laban, who went out in haste to the man, to the well.

24:30. And when he had seen the earrings and bracelets in his sister’s hands, and had heard all that she related, saying, Thus and thus the man spoke to me: he came to the man who stood by the camels, and near to the spring of water,

24:31. And said to him: Come in, thou blessed of the Lord; why standest thou without? I have prepared the house, and a place for the camels.

24:32. And he brought him into his lodging; and he unharnessed the camels, and gave straw and hay, and water to wash his feet, and the feet of the men that were come with him.

24:33. And bread was set before him. But he said: I will not eat, till I tell my message. He answered him: Speak.

24:34. And he said: I am the servant of Abraham:

24:35. And the Lord hath blessed my master wonderfully, and he is become great: and he hath given him sheep and oxen, silver and gold, men servants and women servants, camels and asses.

24:36. And Sara, my master’s wife, hath borne my master a son in her old age, and he hath given him all that he had.

24:37. And my master made me swear, saying: Thou shalt not take a wife for my son of the Chanaanites, in whose land I dwell:

24:38. But thou shalt go to my father’s house, and shalt take a wife of my own kindred for my son:

24:39. But I answered my master: What if the woman will not come with me?

24:40. The Lord, said he, in whose sight I walk, will send his angel with thee, and will direct thy way: and thou shalt take a wife for my son of my own kindred, and of my father’s house.

24:41. But thou shalt be clear from my curse, when thou shalt come to my kindred, if they will not give thee one.

24:42. And I came today to the well of water, and said: O Lord God of my master, Abraham, if thou hast prospered my way, wherein I now walk,

24:43. Behold, I stand by the well of water, and the virgin, that shall come out to draw water, who shall hear me say: Give me a little water to drink of thy pitcher:

24:44. And shall say to me: Both drink thou, and I will also draw for thy camels: let the same be the woman, whom the Lord hath prepared for my master’s son.

24:45. And whilst I pondered these things secretly with myself, Rebecca appeared, coming with a pitcher, which she carried on her shoulder: and she went down to the well and drew water. And I said to her: Give me a little to drink.

24:46. And she speedily let down the pitcher from her shoulder, and said to me: Both drink thou, and to thy camels I will give drink. I drank, and she watered the camels.

24:47. And I asked her, and said: Whose daughter art thou? And she answered: I am the daughter of Bathuel, the son of Nachor, whom Melcha bore to him. So I put earrings on her to adorn her face, and I put bracelets on her hands.

24:48. And falling down, I adored the Lord, blessing the Lord God of my master, Abraham, who hath brought me the straight way to take the daughter of my master’s brother for his son.

24:49. Wherefore, if you do according to mercy and truth with my master, tell me: but if it please you otherwise, tell me that also, that I may go to the right hand, or to the left.

24:50. And Laban and Bathuel answered: The word hath proceeded from the Lord: we cannot speak any other thing to thee but his pleasure.

24:51. Behold, Rebecca is before thee, take her and go thy way, and let her be the wife of thy master’s son, as the Lord hath spoken.

24:52. Which when Abraham’s servant heard, falling down to the ground, he adored the Lord.

24:53. And bringing forth vessels of silver and gold, and garments, he gave them to Rebecca, for a present. He offered gifts also to her brothers, and to her mother.

24:54. And a banquet was made, and they ate and drank together, and lodged there. And in the morning, the servant arose, and said: Let me depart, that I may go to my master.

24:55. And her brother and mother answered: Let the maid stay, at least, ten days with us, and afterwards she shall depart.

24:56. Stay me not, said he, because the Lord hath prospered my way: send me away, that I may go to my master.

24:57. And they said: Let us call the maid, and ask her will.

Let us call the maid, and ask her will.... Not as to her marriage, as she had already consented, but of her quitting her parents and going to her husband.

24:58. And they called her, and when she was come, they asked: Wilt thou go with this man? She said: I will go.

24:59. So they sent her away, and her nurse, and Abraham’s servant, and his company.

24:60. Wishing prosperity to their sister, and saying: Thou art our sister, mayst thou increase to thousands of thousands; and may thy seed possess the gates of their enemies.

24:61. So Rebecca and her maids, being set upon camels, followed the man: who with speed returned to his master.

24:62. At the same time, Isaac was walking along the way to the well which is called Of the living and the seeing: for he dwelt in the south country:

24:63. And he was gone forth to meditate in the field, the day being now well spent: and when he had lifted up his eyes, he saw camels coming afar off.

24:64. Rebecca also, when she saw Isaac, lighted off the camel,

24:65. And said to the servant: Who is that man who cometh towards us along the field? And he said to her: That man is my master. But she quickly took her cloak, and covered herself.

24:66. And the servant told Isaac all that he had done.

24:67. Who brought her into the tent of Sara his mother, and took her to wife: and he loved her so much, that it moderated the sorrow which was occasioned by his mother’s death.

Genesis Chapter 25
Abraham’s children by Cetura; his death and that of Ismael. Isaac hath Esau and Jacob twins. Esau selleth his first birthright to Jacob.

25:1. And Abraham married another wife named Cetura:

25:2. Who bore him Zamram, and Jecsan, and Madan, and Madian, and Jesboc, and Sue.

25:3. Jecsan also begot Saba, and Dadan. The children of Dadan were Assurim, and Latusim, and Loomim.

25:4. But of Madian was born Epha, and Opher, and Henoch, and Abida, and Eldaa: all these were the children of Cetura.

25:5. And Abraham gave all his possessions to Isaac:

25:6. And to the children of the concubines he gave gifts, and separated them from Isaac his son, while he yet lived, to the east country.

Concubines.... Agar and Cetura are here called concubines, (though they were lawful wives, and in other places are so called,) because they were of an inferior degree, and such in scripture are usually called concubines.

25:7. And the days of Abraham’s life were a hundred and seventy-five years.

25:8. And decaying he died in a good old age, and having lived a long time, and being full of days: and was gathered to his people.

25:9. And Isaac and Ismael his sons buried him in the double cave, which was situated in the field of Ephron the son of Seor the Hethite, over against Mambre,

25:10. Which he had bought of the children of Heth: there was he buried, and Sara his wife.

25:11. And after his death, God blessed Isaac his son, who dwelt by the well named Of the living and seeing.

25:12. These are the generations of Ismael the son of Abraham, whom Agar the Egyptian, Sara’s servant, bore unto him:

25:13. And these are the names of his children according to their calling and generations. The firstborn of Ismael was Nabajoth, then Cedar, and Adbeel, and Mabsam,

25:14. And Masma, and Duma, and Massa,

25:15. Hadar, and Thema, and Jethur, and Naphis, and Cedma.

25:16. These are the sons of Ismael: and these are their names by their castles and towns, twelve princes of their tribes.

25:17. And the years of Ismael’s life were a hundred and thirty-seven, and decaying he died, and was gathered unto his people.

25:18. And he dwelt from Hevila as far as Sur, which looketh towards Egypt, to them that go towards the Assyrians. He died in the presence of all his brethren.

25:19. These also are the generations of Isaac the son of Abraham: Abraham begot Isaac:

25:20. Who when he was forty years old, took to wife Rebecca the daughter of Bathuel the Syrian of Mesopotamia, sister to Laban.

25:21. And Isaac besought the Lord for his wife, because she was barren: and he heard him, and made Rebecca to conceive.

25:22. But the children struggled in her womb, and she said: If it were to be so with me, what need was there to conceive? And she went to consult the Lord.

25:23. And he answering, said: Two nations are in thy womb, and two peoples shall be divided out of thy womb, and one people shall overcome the other, and the elder shall serve the younger.

25:24. And when her time was come to be delivered, behold twins were found in her womb.

25:25. He that came forth first was red, and hairy like a skin: and his name was called Esau. Immediately the other coming forth, held his brother’s foot in his hand: and therefore he was called Jacob.

25:26. Isaac was threescore years old when the children were born unto him.

25:27. And when they were grown up, Esau became a skilful hunter, and a husbandman: but Jacob, a plain man, dwelt in tents.

25:28. Isaac loved Esau, because he ate of his hunting: and Rebecca loved Jacob.

25:29. And Jacob boiled pottage: to whom Esau, coming faint out of the field,

25:30. Said: Give me of this red pottage, for I am exceeding faint. For which reason his name was called Edom.

25:31. And Jacob said to him: Sell me thy first birthright.

25:32. He answered: Lo I die, what will the first birthright avail me?

25:33. Jacob said: Swear therefore to me. Esau swore to him, and sold his first birthright.

25:34. And so taking bread and the pottage of lentils, he ate, and drank, and went on his way; making little account of having sold his first birthright.

Genesis Chapter 26
Isaac sojourneth in Gerara, where God reneweth to him the promise made to Abraham. King Abimelech maketh league with him.

26:1. And when a famine came in the land, after that barrenness which had happened in the days of Abraham, Isaac went to Abimelech, king of the Palestines, to Gerara.

26:2. And the Lord appeared to him, and said: Go not down into Egypt, but stay in the land that I shall tell thee.

26:3. And sojourn in it, and I will be with thee, and will bless thee: for to thee and to thy seed I will give all these countries, to fulfil the oath which I swore to Abraham thy father.

26:4. And I will multiply thy seed like the stars of heaven: and I will give to thy posterity all these countries: and in thy seed shall all the nations of the earth be blessed.

26:5. Because Abraham obeyed my voice, and kept my precepts and commandments, and observed my ceremonies and laws.

26:6. So Isaac abode in Gerara.

26:7. And when he was asked by the men of that place, concerning his wife, he answered: She is my sister: for he was afraid to confess that she was his wife, thinking lest perhaps they would kill him because of her beauty.

26:8. And when very many days were passed, and he abode there, Abimelech, king of the Palestines, looking out through a window, saw him playing with Rebecca, his wife.

26:9. And calling for him, he said: It is evident she is thy wife: why didst thou feign her to be thy sister? He answered: I feared lest I should die for her sake.

26:10. And Abimelech said: Why hast thou deceived us? Some man of the people might have lain with thy wife, and thou hadst brought upon us a great sin. And he commanded all the people, saying:

26:11. He that shall touch this man’s wife, shall surely be put to death.

26:12. And Isaac sowed in that land, and he found that same year a hundredfold: and the Lord blessed him.

26:13. And the man was enriched, and he went on prospering and increasing, till he became exceeding great.

26:14. And he had possessions of sheep and of herds, and a very great family. Wherefore the Palestines envying him,

26:15. Stopped up at that time all the wells, that the servants of his father, Abraham, had digged, filling them up with earth:

26:16. Insomuch that Abimelech himself said to Isaac: Depart from us, for thou art become much mightier than we.

26:17. So he departed, and came to the torrent of Gerara, to dwell there:

26:18. And he digged again other wells, which the servants of his father, Abraham, had digged, and which, after his death, the Philistines had of old stopped up: and he called them by the same names, by which his father before had called them.

26:19. And they digged in the torrent, and found living water:

Torrent.... That is, a channel where sometimes a torrent or violent stream had run.

26:20. But there also the herdsmen of Gerara strove against the herdsmen of Isaac, saying: It is our water. Wherefore he called the name of the well, on occasion of that which had happened, Calumny.

26:21. And they digged also another; and for that they quarrelled likewise, and he called the name of it, Enmity.

26:22. Going forward from thence, he digged another well, for which they contended not; therefore he called the name thereof, Latitude, saying: Now hath the Lord given us room, and made us to increase upon the earth.

Latitude.... That is, wideness, or room.

26:23. And he went up from that place to Bersabee,

26:24. Where the Lord appeared to him that same night, saying: I am the God of Abraham thy father, do not fear, for I am with thee: I will bless thee, and multiply thy seed for my servant Abraham’s sake.

26:25. And he built there an altar: and called upon the name of the Lord, and pitched his tent; and commanded his servants to dig a well.

26:26. To which place when Abimelech, and Ochozath his friend, and Phicol chief captain of his soldiers, came from Gerara,

26:27. Isaac said to them: Why are ye come to me, a man whom you hate, and have thrust out from you?

26:28. And they answered: We saw that the Lord is with thee, and therefore we said: Let there be an oath between us, and let us make a covenant,

26:29. That thou do us no harm, as we on our part have touched nothing of thine, nor have done any thing to hurt thee; but with peace have sent thee away, increased with the blessing of the Lord.

26:30. And he made them a feast, and after they had eaten and drunk:

26:31. Arising in the morning, they swore one to another: and Isaac sent them away peaceably to their own home.

26:32. And behold, the same day the servants of Isaac came, telling him of a well which they had digged, and saying: We have found water.

26:33. Whereupon he called it Abundance: and the name of the city was called Bersabee, even to this day.

26:34. And Esau being forty years old, married wives, Judith, the daughter of Beeri, the Hethite, and Basemath, the daughter of Elon, of the same place.

26:35. And they both offended the mind of Isaac and Rebecca.

Genesis Chapter 27
Jacob, by him mother’s counsel, obtaineth his father’s blessing instead of Esau. And by her is advised to fly to his uncle Laban.

27:1. Now Isaac was old, and his eyes were dim, and he could not see: and he called Esau, his elder son, and said to him: My son? And he answered: Here I am.

27:2. And his father said to him, Thou seest that I am old, and know not the day of my death.

27:3. Take thy arms, thy quiver, and bow, and go abroad; and when thou hast taken something by hunting,

27:4. Make me a savoury meat thereof, as thou knowest I like, and bring it that I may eat: and my soul may bless thee, before I die.

27:5. And when Rebecca had heard this, and he was gone into the field to fulfil his father’s commandment,

27:6. She said to her son Jacob: I heard thy father talking with Esau, thy brother, and saying to him:

27:7. Bring me of thy hunting, and make me meats that I may eat, and bless thee in the sight of the Lord, before I die.

27:8. Now therefore, my son, follow my counsel:

27:9. And go thy way to the flock, bring me two kids of the best, that I may make of them meat for thy father, such as he gladly eateth.

27:10. Which when thou hast brought in, and he hath eaten, he may bless thee before he die.

27:11. And he answered her: Thou knowest that Esau, my brother, is a hairy man, and I am smooth:

27:12. If my father should feel me, and perceive it, I fear lest he will think I would have mocked him, and I shall bring upon me a curse instead of a blessing.

27:13. And his mother said to him: Upon me be this curse, my son: only hear thou my voice, and go, fetch me the things which I have said.

27:14. He went, and brought, and gave them to his mother. She dressed meats, such as she knew his father liked.

27:15. And she put on him very good garments of Esau, which she had at home with her:

27:16. And the little skins of the kids she put about his hands, and covered the bare of his neck.

27:17. And she gave him the savoury meat, and delivered him bread that she had baked.

27:18. Which when he had carried in, he said: My father? But he answered: I hear. Who art thou, my son?

27:19. And Jacob said: I am Esau, thy firstborn: I have done as thou didst command me: arise, sit and eat of my venison, that thy soul may bless me.

I am Esau thy firstborn.... St. Augustine (L. Contra mendacium, c. 10), treating at large upon this place, excuseth Jacob from a lie, because this whole passage was mysterious, as relating to the preference which was afterwards to be given to the Gentiles before the carnal Jews, which Jacob by prophetic light might understand. So far is certain, that the first birthright, both by divine election and by Esau’s free cession belonged to Jacob: so that if there were any lie in the case, it could be no more than an officious and venial one.

27:20. And Isaac said to his son: How couldst thou find it so quickly, my son? He answered: It was the will of God, that what I sought came quickly in my way:

27:21. And Isaac said: Come hither, that I may feel thee, my son, and may prove whether thou be my son Esau, or no.

27:22. He came near to his father, and when he had felt him, Isaac said: The voice indeed is the voice of Jacob; but the hands, are the hands of Esau.

27:23. And he knew him not, because his hairy hands made him like to the elder. Then blessing him,

27:24. He said: Art thou my son Esau? He answered: I am.

27:25. Then he said: Bring me the meats of thy hunting, my son, that my soul may bless thee. And when they were brought, and he had eaten, he offered him wine also, which after he had drunk,

27:26. He said to him: Come near me, and give me a kiss, my son.

27:27. He came near, and kissed him. And immediately as he smelled the fragrant smell of his garments, blessing him, he said: Behold, the smell of my son is as the smell of a plentiful field, which the Lord hath blessed.

27:28. God give thee of the dew of heaven, and of the fatness of the earth, abundance of corn and wine.

27:29. And let peoples serve thee, and tribes worship thee: be thou lord of thy brethren, and let thy mother’s children bow down before thee. Cursed be he that curseth thee: and let him that blesseth thee be filled with blessings.

27:30. Isaac had scarce ended his words, when, Jacob being now gone out abroad, Esau came,

27:31. And brought in to his father meats, made of what he had taken in hunting, saying: Arise, my father, and eat of thy son’s venison; that thy soul may bless me.

27:32. And Isaac said to him: Why! who art thou? He answered: I am thy firstborn son, Esau.

27:33. Isaac was struck with fear, and astonished exceedingly; and wondering beyond what can be believed, said: Who is he then that even now brought me venison that he had taken, and I ate of all before thou camest? and I have blessed him, and he shall be blessed.

27:34. Esau having heard his father’s words, roared out with a great cry; and, being in a consternation, said: Bless me also, my father.

27:35. And he said: Thy brother came deceitfully and got thy blessing.

27:36. But he said again: Rightly is his name called Jacob; for he hath supplanted me lo this second time: My birthright he took away before, and now this second time he hath stolen away my blessing. And again he said to his father: Hast thou not reserved me also a blessing?

Jacob.... That is, a supplanter.

27:37. Isaac answered: I have appointed him thy lord, and have made all his brethren his servants: I have established him with corn and wine, and after this, what shall I do more for thee, my son?

27:38. And Esau said to him: Hast thou only one blessing, father? I beseech thee bless me also. And when he wept with a loud cry,

27:39. Isaac being moved, said to him: In the fat of the earth, and in the dew of heaven from above,

27:40. Shall thy blessing be. Thou shalt live by the sword, and shalt serve thy brother: and the time shall come, when thou shalt shake off and loose his yoke from thy neck.

27:41. Esau therefore always hated Jacob, for the blessing wherewith his father had blessed him; and he said in his heart: The days will come of the mourning for my father, and I will kill my brother Jacob.

27:42. These things were told to Rebecca: and she sent and called Jacob, her son, and said to him: Behold Esau, thy brother, threateneth to kill thee.

27:43. Now therefore, my son, hear my voice, arise and flee to Laban, my brother, to Haran:

27:44. And thou shalt dwell with him a few days, till the wrath of thy brother be assuaged,

27:45. And his indignation cease, and he forget the things thou hast done to him: afterwards I will send, and bring thee from thence hither. Why shall I be deprived of both my sons in one day?

27:46. And Rebecca said to Isaac: I am weary of my life, because of the daughters of Heth: if Jacob take a wife of the stock of this land, I choose not to live.

Genesis Chapter 28
Jacob’s journey to Mesopotamia: his vision and vow.

28:1. And Isaac called Jacob, and blessed him, and charged him, saying: Take not a wife of the stock of Chanaan:

28:2. But go, and take a journey to Mesopotamia of Syria, to the house of Bathuel, thy mother’s father, and take thee a wife thence of the daughters of Laban, thy uncle.

28:3. And God almighty bless thee, and make thee to increase and multiply thee: that thou mayst be a multitude of people.

28:4. And give the blessings of Araham to thee, and to thy seed after thee: that thou mayst possess the land of thy sojournment, which he promised to thy grandfather.

28:5. And when Isaac had sent him away, he took his journey and went to Mesopotamia of Syria, to Laban, the son of Bathuel, the Syrian, brother to Rebecca, his mother.

28:6. And Esau seeing that his father had blessed Jacob, and had sent him into Mesopotamia of Syria, to marry a wife thence; and that after the blessing he had charged him, saying: Thou shalt not take a wife of the daughters of Chanaan:

28:7. And that Jacob obeying his parents, was gone into Syria:

28:8. Experiencing also, that his father was not well pleased with the daughters of Chanaan:

28:9. He went to Ismael, and took to wife, besides them he had before, Maheleth, the daughter of Ismael, Abraham’s son, the sister of Nabajoth.

28:10. But Jacob being departed from Bersabee, went on to Haran.

28:11. And when he was come to a certain place, and would rest in it after sunset, he took of the stones that lay there, and putting under his head, slept in the same place.

28:12. And he saw in his sleep a ladder standing upon the earth, and the top thereof touching heaven: the angels also of God ascending and descending by it.

28:13. And the Lord leaning upon the ladder saying to him: I am the Lord God of Abraham thy father, and the God of Isaac: The land, wherein thou sleepest, I will give to thee and to thy seed.

28:14. And thy seed shall be as the dust of the earth: thou shalt spread abroad to the west, and to the east, and to the north, and to the south: and IN THEE and thy seed, all the tribes of the earth SHALL BE BLESSED.

28:15. And I will be thy keeper whithersoever thou goest, and will bring thee back into this land: neither will I leave thee, till I shall have accomplished all that I have said.

28:16. And when Jacob awaked out of sleep, he said: Indeed the Lord is in this place, and I knew it not.

28:17. And trembling, he said: How terrible is this place? this is no other but the house of God, and the gate of heaven.

28:18. And Jacob arising in the morning, took the stone which he had laid under his head, and set it up for a title, pouring oil upon the top of it.

28:19. And he called the name of the city Bethel, which before was called Luza.

Bethel.... This name signifies the house of God.

28:20. And he made a vow, saying: If God shall be with me, and shall keep me in the way, by which I walk, and shall give me bread to eat, and raiment to put on,

28:21. And I shall return prosperously to my father’s house: the Lord shall be my God:

28:22. And this stone, which I have set up for a title, shall be called the house of God: and of all things that thou shalt give to me, I will offer tithes to thee.

Genesis Chapter 29
Jacob serveth Laban seven years for Rachel: but is deceived with Lia: he afterwards marrieth Rachel. Lia bears him four sons.

29:1. Then Jacob went on in his journey, and came into the east country.

29:2. And he saw a well in the field, and three flocks of sheep lying by it: for the beasts were watered out of it, and the mouth thereof was closed with a great stone.

29:3. And the custom was, when all the sheep were gathered together, to roll away the stone, and after the sheep were watered, to put it on the mouth of the well again.

29:4. And he said to the shepherds: Brethren, whence are you? They answered: Of Haran.

29:5. And he asked them, saying: Know you Laban, the son of Nachor? They said: We know him.

29:6. He said: Is he in health? He is in health, say they: and behold, Rachel, his daughter, cometh with his flock.

29:7. And Jacob said: There is yet much day remaining, neither is it time to bring the flocks into the folds again: first give the sheep drink, and so lead them back to feed.

29:8. They answered: We cannot, till all the cattle be gathered together, and we remove the stone from the well’s mouth, that we may water the flocks.

29:9. They were yet speaking, and behold Rachel came with her father’s sheep; for she fed the flock.

29:10. And when Jacob saw her, and knew her to be his cousin german, and that they were the sheep of Laban, his uncle: he removed the stone wherewith the well was closed.

29:11. And having watered the flock, he kissed her: and lifting up his voice wept.

29:12. And he told her that he was her father’s brother, and the son of Rebecca: but she went in haste and told her father.

29:13. Who, when he heard that Jacob his sister’s son was come, ran forth to meet him: and embracing him, and heartily kissing him, brought him into his house. And when he had heard the causes of his journey,

29:14. He answered: Thou art my bone and my flesh. And after the days of one month were expired,

29:15. He said to him: Because thou art my brother, shalt thou serve me without wages? Tell me what wages thou wilt have.

29:16. Now he had two daughters, the name of the elder was Lia; and the younger was called Rachel.

29:17. But Lia was blear-eyed: Rachel was well favoured, and of a beautiful countenance.

29:18. And Jacob being in love with her, said: I will serve thee seven years for Rachel, thy younger daughter.

29:19. Laban answered: It is better that I give her to thee than to another man; stay with me.

29:20. So Jacob served seven years for Rachel: and they seemed but a few days, because of the greatness of his love.

29:21. And he said to Laban: Give me my wife; for now the time is fulfilled, that I may go in unto her.

29:22. And he, having invited a great number of his friends to the feast, made the marriage.

29:23. And at night he brought in Lia, his daughter, to him,

29:24. Giving his daughter a handmaid, named Zelpha. Now when Jacob had gone in to her according to custom, when morning was come he saw it was Lia.

29:25. And he said to his father-in-law: What is it that thou didst mean to do? did not I serve thee for Rachel? why hast thou deceived me?

29:26. Laban answered: It is not the custom in this place, to give the younger in marriage first.

29:27. Make up the week of days of this match: and I will give thee her also, for the service that thou shalt render me other seven years.

29:28. He yielded to his pleasure: and after the week was past, he married Rachel:

29:29. To whom her father gave Bala, for her servant.

29:30. And having at length obtained the marriage he wished for, he preferred the love of the latter before the former, and served with him other seven years.

29:31. And the Lord seeing that he despised Lia, opened her womb, but her sister remained barren.

29:32. And she conceived and bore a son, and called his name Ruben, saying: The Lord saw my affliction: now my husband will love me.

29:33. And again she conceived and bore a son, and said: Because the Lord heard that I was despised, he hath given this also to me: and she called his name Simeon.

29:34. And she conceived the third time, and bore another son, and said: Now also my husband will be joined to me, because I have borne him three sons: and therefore she called his name Levi.

29:35. The fourth time she conceived and bore a son, and said: Now will I praise the Lord: and for this she called him Juda. And she left bearing.

Genesis Chapter 30
Rachel, being barren, delivereth her handmaid to Jacob; she beareth two sons. Lia ceasing to bear, giveth also her handmaid, and she beareth two more. Then Lia beareth other two sons and one daughter. Rachel beareth Joseph. Jacob, desirous to return home, is hired to stay for a certain part of the flock’s increase, whereby he becometh exceeding rich.

30:1. And Rachel seeing herself without children, envied her sister, and said to her husband: Give me children, otherwise I shall die.

30:2. And Jacob being angry with her, answered: Am I as God, who hath deprived thee of the fruit of thy womb?

30:3. But she said: I have here my servant Bala: go in unto her, that she may bear upon my knees, and I may have children by her.

30:4. And she gave him Bala in marriage: who,

30:5. When her husband had gone in unto her, conceived and bore a son.

30:6. And Rachel said: The Lord hath judged for me, and hath heard my voice, giving me a son; and therefore she called his name Dan.

30:7. And again Bala conceived, and bore another,

30:8. For whom Rachel said: God hath compared me with my sister, and I have prevailed: and she called him Nephthali.

30:9. Lia perceiving that she had left of bearing, gave Zelpha, her handmaid, to her husband.

30:10. And when she had conceived, and brought forth a son,

30:11. She said: Happily. And therefore called his name Gad.

30:12. Zelpha also bore another.

30:13. And Lia said: This is for my happiness: for women will call me blessed. Therefore she called him Aser.

30:14. And Ruben going out in the time of the wheat harvest into the field, found mandrakes: which he brought to his mother Lia. And Rachel said: Give me part of thy son’s mandrakes.

30:15. She answered: Dost thou think it a small matter, that thou hast taken my husband from me, unless thou take also my son’s mandrakes? Rachel said: He shall sleep with thee this night, for thy son’s mandrakes.

30:16. And when Jacob returned at even from the field, Lia went out to meet him, and said: Thou shalt come in unto me, because I have hired thee for my son’s mandrakes. And he slept with her that night.

30:17. And God heard her prayers; and she conceived: and bore a fifth son:

30:18. And said: God hath given me a reward, because I gave my handmaid to my husband. And she called his name Issachar.

30:19. And Lia conceived again, and bore the sixth son,

30:20. And said: God hath endowed me with a good dowry; this turn also my husband will be with me, because I have borne him six sons: and therefore she called his name Zabulon.

30:21. After whom she bore a daughter, named Dina.

30:22. The Lord also remembering Rachel, heard her, and opened her womb.

30:23. And she conceived, and bore a son, saying: God hath taken away my reproach.

30:24. And she called his name Joseph: saying: The Lord give me also another son.

30:25. And when Joseph was born, Jacob said to his father-in-law: Send me away, that I may return into my country, and to my land.

30:26. Give me my wives, and my children, for whom I have served thee, that I may depart: thou knowest the service that I have rendered thee.

30:27. Laban said to him: Let me find favour in thy sight: I have learned, by experience, that God hath blessed me for thy sake.

30:28. Appoint thy wages which I shall give thee.

30:29. But he answered: Thou knowest how I have served thee, and how great thy possession hath been in my hands.

30:30. Thou hadst but little before I came to thee, and now thou art become rich: and the Lord hath blessed thee at my coming. It is reasonable, therefore, that I should now provide also for my own house.

30:31. And Laban said: What shall I give thee? But he said: I require nothing; but if thou wilt do what I demand, I will feed and keep thy sheep again.

30:32. Go round through all thy flocks, and separate all the sheep of divers colours, and speckled; and all that is brown and spotted, and of divers colours, as well among the sheep as among the goats, shall be my wages.

30:33. And my justice shall answer for me tomorrow before thee, when the time of the bargain shall come; and all that is not of divers colours, and spotted, and brown, as well among the sheep as among the goats, shall accuse me of theft.

30:34. And Laban said: I like well what thou demandest.

30:35. And he separated the same day the she-goats, and the sheep, and the he-goats, and the rams of divers colours, and spotted; and all the flock of one colour, that is, of white and black fleece, he delivered into the hands of his sons.

30:36. And he set the space of three days journey betwixt himself and his son-in-law, who fed the rest of his flock.

30:37. And Jacob took green rods of poplar, and of almond, and of plane-trees, and pilled them in part: so when the bark was taken off, in the parts that were pilled, there appeared whiteness: but the parts that were whole, remained green: and by this means the colour was divers.

30:38. And he put them in the troughs, where the water was poured out; that when the flocks should come to drink, they might have the rods before their eyes, and in the sight of them might conceive.

30:39. And it came to pass, that in the very heat of coition, the sheep beheld the rods, and brought forth spotted, and of divers colours, and speckled.

30:40. And Jacob separated the flock, and put the rods in the troughs before the eyes of the rams; and all the white and the black were Laban’s, and the rest were Jacob’s, when the flocks were separated one from the other.

30:41. So when the ewes went first to ram, Jacob put the rods in the troughs of water before the eyes of the rams, and of the ewes, that they might conceive while they were looking upon them.

30:42. But when the later coming was, and the last conceiving, he did not put them. And those that were lateward, became Laban’s; and they of the first time, Jacob’s.

30:43. And the man was enriched exceedingly, and he had many flocks, maid-servants and men-servants, camels and asses.

Genesis Chapter 31
Jacob’s departure: he is pursued and overtaken by Laban. They make a covenant.

31:1. But after that he had heard the words of the sons of Laban, saying: Jacob hath taken away all that was our father’s, and being enriched by his substance is become great.

31:2. And perceiving also, that Laban’s countenance was not towards him as yesterday and the other day.

31:3. Especially the Lord saying to him: Return into the land of thy fathers and to thy kindred, and I will be with thee.

31:4. He sent, and called Rachel and Lia into the field, where he fed the flocks,

31:5. And said to them: I see your father’s countenance is not towards me as yesterday and the other day: but the God of my father hath been with me.

31:6. And you know that I have served your father to the uttermost of my power.

31:7. Yea your father hath also overreached me, and hath changed my wages ten times: and yet God hath not suffered him to hurt me.

31:8. If at any time, he said: The speckled shall be thy wages: all the sheep brought forth speckled: but when he said on the contrary: Thou shalt take all the white one for thy wages: all the flocks brought forth white ones.

31:9. And God hath taken your father’s substance, and given it to me.

31:10. For after the time came of the ewes conceiving, I lifted up my eyes, and saw in my sleep, that the males which leaped upon the females were of divers colours, and spotted, and speckled.

31:11. And the angel of God said to me in my sleep: Jacob. And I answered: Here I am.

31:12. And he said: Lift up thy eyes, and see that all the males leaping upon the females, are of divers colours, spotted and speckled. For I have seen all that Laban hath done to thee.

31:13. I am the God of Bethel, where thou didst anoint the stone, and make a vow to me. Now therefore arise, and go out of this land, and return into thy native country.

31:14. And Rachel and Lia answered: Have we any thing left among the goods and inheritance of our father’s house?

31:15. Hath he not counted us as strangers, and sold us, and eaten up the price of us?

31:16. But God hath taken our father’s riches, and delivered them to us, and to our children: wherefore, do all that God hath commanded thee.

31:17. Then Jacob rose up, and having set his children and wives upon camels, went his way.

31:18. And he took all his substance, and flocks, and whatsoever he had gotten in Mesopotamia, and went forward to Isaac, his father, to the land of Chanaan.

31:19. At that time Laban was gone to shear his sheep, and Rachel stole away her father’s idols.

Her father’s idols.... By this it appears that Laban was an idolater; and some of the fathers are of opinion that Rachel stole away these idols to withdraw him from idolatry, removing the occasion of his sin.

31:20. And Jacob would not confess to his father-in-law that he was flying away.

31:21. And when he was gone, together with all that belonged to him, and having passed the river, was going on towards mount Galaad,

31:22. It was told Laban on the third day, that Jacob fled.

31:23. And he took his brethren with him, and pursued after him seven days; and overtook him in the mount of Galaad.

31:24. And he saw in a dream God, saying to him: Take heed thou speak not any thing harshly against Jacob.

31:25. Now Jacob had pitched his tent in the mountain: and when he, with his brethren, had overtaken him, he pitched his tent in the same mount of Galaad.

31:26. And he said to Jacob: Why hast thou done thus, to carry away, without my knowledge, my daughters as captives taken with the sword?

31:27. Why wouldst thou run away privately, and not acquaint me, that I might have brought thee on the way with joy, and with songs, and with timbrels, and with harps?

31:28. Thou hast not suffered me to kiss my sons and daughters; thou hast done foolishly; and now indeed,

31:29. It is in my power to return thee evil; but the God of your father said to me yesterday: Take heed thou speak not any thing harshly against Jacob.

31:30. Suppose thou didst desire to go to thy friends, and hadst a longing after thy father’s house: why hast thou stolen away my gods?

31:31. Jacob answered: That I departed unknown to thee, it was for fear lest thou wouldst take away thy daughters by force.

31:32. But, whereas, thou chargest me with theft: with whomsoever thou shalt find thy gods, let him be slain before our brethren. Search, and if thou find any of thy things with me, take them away. Now when he said this, he knew not that Rachel had stolen the idols.

31:33. So Laban went into the tent of Jacob, and of Lia, and of both the handmaids, and found them not. And when he was entered into Rachel’s tent,

31:34. She, in haste, hid the idols under the camel’s furniture, and sat upon them: and when he had searched all the tent, and found nothing,

31:35. She said: Let not my lord be angry that I cannot rise up before thee, because it has now happened to me according to the custom of women. So his careful search was in vain.

31:36. And Jacob being angry, said in a chiding manner: For what fault of mine, and for what offence on my part hast thou so hotly pursued me,

31:37. And searched all my household stuff? What hast thou found of all the substance of thy house? lay it here before my brethren, and thy brethren, and let them judge between me and thee.

31:38. Have I, therefore, been with thee twenty years? thy ewes and goats were not barren, the rams of thy flocks I did not eat:

31:39. Neither did I shew thee that which the beast had torn; I made good all the damage: whatsoever was lost by theft, thou didst exact it of me:

31:40. Day and night was I parched with heat, and with frost, and sleep departed from my eyes.

31:41. And in this manner have I served thee in thy house twenty years, fourteen for thy daughters, and six for thy flocks: thou hast changed also my wages ten times.

31:42. Unless the God of my father, Abraham, and the fear of Isaac, had stood by me, peradventure now thou hadst sent me away naked: God beheld my affliction and the labour of my hands, and rebuked thee yesterday.

31:43. Laban answered him: The daughters are mine, and the children, and thy flocks, and all things that thou seest are mine: what can I do to my children, and grandchildren?

31:44. Come, therefore, let us enter into a league; that it may be for a testimony between me and thee.

31:45. And Jacob took a stone, and set it up for a title.

31:46. And he said to his brethren: Bring hither stones. And they, gathering stones together, made a heap, and they ate upon it.

31:47. And Laban called it, The witness heap; and Jacob, The hillock of testimony: each of them according to the propriety of his language.

31:48. And Laban said: This heap shall be a witness between me and thee this day, and therefore the name thereof was called Galaad, that is, The witness heap.

31:49. The Lord behold and judge between us, when we shall be gone one from the other.

31:50. If thou afflict my daughters, and if thou bring in other wives over them: none is witness of our speech but God, who is present and beholdeth.

31:51. And he said again to Jacob: Behold this heap, and the stone which I have set up between me and thee,

31:52. Shall be a witness: this heap, I say, and the stone, be they for a testimony, if either I shall pass beyond it going towards thee, or thou shalt pass beyond it thinking harm to me.

31:53. The God of Abraham, and the God of Nachor, the God of their father, judge between us. And Jacob swore by the fear of his father Isaac:

31:54. And after he had offered sacrifices in the mountain, he called his brethren to eat bread. And when they had eaten, they lodged there:

31:55. But Laban arose in the night, and kissed his sons and daughters, and blessed them: and returned to his place.

Genesis Chapter 32
Jacob’s vision of angels; his message and presents to Esau; his wrestling with an angel.

32:1. Jacob also went on the journey he had begun: and the angels of God met him.

32:2. And when he saw them, he said: These are the camps of God, and he called the name of that place Mahanaim, that is, Camps.

32:3. And he sent messengers before him to Esau, his brother, to the land of Seir, to the country of Edom:

32:4. And he commanded them, saying: Thus shall ye speak to my lord Esau: Thus saith thy brother Jacob: I have sojourned with Laban, and have been with him until this day:

32:5. I have oxen, and asses, and sheep, and menservants, and womenservants: and now I send a message to my lord, that I may find favour in thy sight.

32:6. And the messengers returned to Jacob, saying: We came to Esau, thy brother, and behold he cometh with speed to meet thee with four hundred men.

32:7. Then Jacob was greatly afraid; and in his fear divided the people that was with him, and the flocks, and the sheep, and the oxen, and the camels, into two companies,

32:8. Saying: If Esau come to one company, and destroy it, the other company that is left, shall escape.

32:9. And Jacob said: O God of my father Abraham, and God of my father Isaac: O Lord who saidst to me, Return to thy land, and to the place of thy birth, and I will do well for thee.

32:10. I am not worthy of the least of all thy mercies, and of thy truth which thou hast fulfilled to thy servant. With my staff I passed over this Jordan; and now I return with two companies.

32:11. Deliver me from the hand of my brother Esau, for I am greatly afraid of him; lest perhaps he come, and kill the mother with the children.

32:12. Thou didst say, that thou wouldst do well by me, and multiply my seed like the sand of the sea, which cannot be numbered for multitude.

32:13. And when he had slept there that night, he set apart, of the things which he had, presents for his brother Esau,

32:14. Two hundred she-goats, twenty he-goats, two hundred ewes, and twenty rams,

32:15. Thirty milch camels with their colts, forty kine, and twenty bulls, twenty she-asses, and ten of their foals.

32:16. And he sent them by the hands of his servants, every drove by itself, and he said to his servants: Go before me, and let there be a space between drove and drove.

32:17. And he commanded the first, saying: If thou meet my brother Esau, and he ask thee: Whose art thou? or whither goest thou? or whose are these before thee?

32:18. Thou shalt answer: Thy servant Jacob’s: he hath sent them as a present to my lord Esau; and he cometh after us.

32:19. In like manner he commanded the second, and the third, and all that followed the droves, saying: Speak ye the same words to Esau, when ye find him.

32:20. And ye shall add: Thy servant Jacob himself also followeth after us; for he said: I will appease him with the presents that go before, and afterwards I will see him, perhaps he will be gracious to me.

32:21. So the presents went before him, but himself lodged that night in the camp.

32:22. And rising early, he took his two wives and his two handmaids, with his eleven sons, and passed over the ford of Jaboc.

32:23. And when all things were brought over that belonged to him,

32:24. He remained alone; and behold, a man wrestled with him till morning.

A man, etc.... This was an angel in human shape, as we learn from Osee 12.4. He is called God, ver. 28 and 30, because he represented the person of the Son of God. This wrestling, in which Jacob, assisted by God, was a match for an angel, was so ordered (ver. 28,) that he might learn by this experiment of the divine assistance, that neither Esau, nor any other man, should have power to hurt him.—It was also spiritual, as appeareth by his earnest prayer, urging and at last obtaining the angel’s blessing.

32:25. And when he saw that he could not overcome him, he touched the sinew of his thigh, and forthwith it shrank.

32:26. And he said to him: Let me go, for it is break of day. He answered: I will not let thee go, except thou bless me.

32:27. And he said: What is thy name? He answered: Jacob.

32:28. But he said: Thy name shall not be called Jacob, but Israel; for if thou hast been strong against God, how much more shalt thou prevail against men?

32:29. Jacob asked him: Tell me by what name art thou called? He answered: Why dost thou ask my name? And he blessed him in the same place.

32:30. And Jacob called the name of the place Phanuel, saying: I have seen God face to face, and my soul has been saved.

Phanuel.... This word signifies the face of God, or the sight, or seeing of God.

32:31. And immediately the sun rose upon him, after he was past Phanuel; but he halted on his foot.

32:32. Therefore the children of Israel, unto this day, eat not the sinew, that shrank in Jacob’s thigh: because he touched the sinew of his thigh and it shrank.

Genesis Chapter 33
Jacob and Esau meet: Jacob goeth to Salem, where he raiseth an altar.

33:1. And Jacob lifting up his eyes, saw Esau coming, and with him four hundred men: and he divided the children of Lia and of Rachel, and of the two handmaids.

33:2. And he put both the handmaids and their children foremost: and Lia and her children in the second place: and Rachel and Joseph last.

33:3. And he went forward and bowed down with his face to the ground seven times, until his brother came near.

33:4. Then Esau ran to meet his brother, and embraced him: and clasping him fast about the neck, and kissing him, wept.

33:5. And lifting up his eyes, he saw the women and their children, and said: What mean these? And do they belong to thee? He answered: They are the children which God hath given to me, thy servant.

33:6. Then the handmaids and their children came near and bowed themselves.

33:7. Lia also, with her children, came near and bowed down in like manner; and last of all, Joseph and Rachel bowed down.

33:8. And Esau said: What are the droves that I met? He answered: That I might find favour before my lord.

33:9. But he said: I have plenty, my brother, keep what is thine for thyself.

33:10. And Jacob said: Do not so I beseech thee, but if I have found favour in thy eyes, receive a little present at my hands: for I have seen thy face, as if I should have seen the countenance of God: be gracious to me,

33:11. And take the blessing which I have brought thee, and which God hath given me, who giveth all things. He took it with much ado at his brother’s earnest pressing him,

33:12. And said: Let us go on together, and I will accompany thee in thy journey.

33:13. And Jacob said: My lord, thou knowest that I have with me tender children, and sheep, and kine with young: which if I should cause to be overdriven, in one day all the flocks will die.

33:14. May it please my lord to go before his servant: and I will follow softly after him, as I shall see my children to be able, until I come to my lord in Seir.

33:15. Esau answered: I beseech thee, that some of the people, at least, who are with me, may stay to accompany thee in the way. And he said: There is no necessity: I want nothing else but only to find favour, my lord, in thy sight.

33:16. So Esau returned that day, the way that he came, to Seir.

33:17. And Jacob came to Socoth: where having built a house, and pitched tents, he called the name of the place Socoth, that is, Tents.

33:18. And he passed over to Salem, a city of the Sichemites, which is in the land of Chanaan, after he returned from Mesopotamia of Syria: and he dwelt by the town.

33:19. And he bought that part of the field, in which he pitched his tents, of the children of Hemor, the father of Sichem, for a hundred lambs.

33:20. And raising an altar there, he invoked upon it the most mighty God of Israel.

Genesis Chapter 34
Dina is ravished, for which the Sichemites are destroyed.

34:1. And Dina the daughter of Lia went out to see the women of that country.

34:2. And when Sichem the son of Hemor the Hevite, the prince of that land, saw her, he was in love with her: and took her away, and lay with her, ravishing the virgin.

34:3. And his soul was fast knit unto her; and whereas she was sad, he comforted her with sweet words.

34:4. And going to Hemor his father, he said: Get me this damsel to wife.

34:5. But when Jacob had heard this, his sons being absent, and employed in feeding the cattle, he held his peace till they came back.

34:6. And when Hemor the father of Sichem was come out to speak to Jacob,

34:7. Behold his sons came from the field: and hearing what had passed, they were exceeding angry, because he had done a foul thing in Israel, and committed an unlawful act, in ravishing Jacob’s daughter.

34:8. And Hemor spoke to them: The soul of my son Sichem has a longing for your daughter: give her him to wife:

34:9. And let us contract marriages one with another: give us your daughters, and take you our daughters.

34:10. And dwell with us: the land is at your command, till, trade, and possess it.

34:11. Sichem also said to her father and to her brethren: Let me find favour in your sight, and whatsoever you shall appoint I will give:

34:12. Raise the dowry, and ask gifts, and I will gladly give what you shall demand: only give me this damsel to wife.

34:13. The sons of Jacob answered Sichem and his father deceitfully, being enraged at the deflowering of their sister:

Deceitfully.... The sons of Jacob, on this occasion, were guilty of a grievous sin, as well by falsely pretending religion, as by excess of revenge: though otherwise their zeal against so foul a crime was commendable.

34:14. We cannot do what you demand, nor give our sister to one that is uncircumcised; which with us is unlawful and abominable.

34:15. But in this we may be allied with you, if you will be like us, and all the male sex among you be circumcised:

34:16. Then will we mutually give and take your daughters, and ours; and we will dwell with you, and will be one people:

34:17. But if you will not be circumcised, we will take our daughter and depart.

34:18. Their offer pleased Hemor, and Sichem, his son:

34:19. And the young man made no delay, but forthwith fulfilled what was required: for he loved the damsel exceedingly, and he was the greatest man in all his father’s house.

34:20. And going into the gate of the city, they spoke to the people:

34:21. These men are peaceable, and are willing to dwell with us: let them trade in the land, and till it, which being large and wide wanteth men to till it: we shall take their daughters for wives, and we will give them ours.

34:22. One thing there is for which so great a good is deferred: We must circumcise every male among us, following the manner of the nation.

34:23. And their substance, and cattle, and all that they possess, shall be ours; only in this let us condescend, and by dwelling together, we shall make one people.

34:24. And they all agreed, and circumcised all the males.

34:25. And behold the third day, when the pain of the wound was greatest: two of the sons of Jacob, Simeon and Levi, the brothers of Dina, taking their swords, entered boldly into the city and slew all the men.

34:26. And they killed also Hemor and Sichem, and took away their sister Dina out of Sichem’s house.

34:27. And when they were gone out, the other sons of Jacob came upon the slain; and plundered the city in revenge of the rape.

34:28. And they took their sheep, and their herds, and their asses, wasting all they had in their houses and in their fields.

34:29. And their children and wives they took captive.

34:30. And when they had boldly perpetrated these things, Jacob said to Simeon and Levi: You have troubled me, and made me hateful to the Chanaanites and Pherezites, the inhabitants of this land. We are few: they will gather themselves together and kill me; and both I, and my house shall be destroyed.

34:31. They answered: Should they abuse our sister as a strumpet?

Genesis Chapter 35
Jacob purgeth his family from idols: goeth by God’s commandment to Bethel, and there buildeth an altar. God appearing again to Jacob blesseth him, and changeth his name into Israel. Rachel dieth in childbirth. Isaac also dieth.

35:1. In the mean time God said to Jacob: Arise and go up to Bethel, and dwell there, and make there an altar to God, who appeared to thee when thou didst flee from Esau, thy brother.

35:2. And Jacob having called together all his household, said: Cast away the strange gods that are among you, and be cleansed, and change your garments.

35:3. Arise, and let us go up to Bethel, that we may make there an altar to God; who heard me in the day of my affliction, and accompained me in my journey.

35:4. So they gave him all the strange gods they had, and the earrings which were in their ears: and he buried them under the turpentine tree, that is behind the city of Sichem.

35:5. And when they were departed, the terror of God fell upon all the cities round about, and they durst not pursue after them as they went away.

35:6. And Jacob came to Luza, which is in the land of Chanaan, surnamed Bethel: he and all the people that were with him.

35:7. And he built there an altar, and called the name of that place, The house of God: for there God appeared to him when he fled from his brother.

35:8. At the same time Debora, the nurse of Rebecca, died, and was buried at the foot of Bethel, under an oak, and the name of that place was called, The oak of weeping.

35:9. And God appeared again to Jacob, after he returned from Mesopotamia of Syria, and he blessed him,

35:10. Saying: Thou shalt not be called any more Jacob, but Israel shall be thy name. And he called him Israel.

Israel.... This name signifieth one that prevaileth with God.

35:11. And said to him: I am God almighty, increase thou and be multiplied. Nations and peoples of nations shall be from thee, and kings shall come out of thy loins.

35:12. And the land which I gave to Abraham and Isaac, I will give to thee, and to thy seed after thee.

35:13. And he departed from him.

35:14. But he set up a monument of stone, in the place where God had spoken to him: pouring drink-offerings upon it, and pouring oil thereon:

35:15. And calling the name of that place Bethel.

35:16. And going forth from thence, he came in the spring time to the land which leadeth to Ephrata: wherein when Rachel was in travail,

35:17. By reason of her hard labour, she began to be in danger, and the midwife said to her: Fear not, for thou shalt have this son also.

35:18. And when her soul was departing for pain, and death was now at hand, she called the name of her son Benoni, that is, the son of my pain: but his father called him Benjamin, that is, the son of the right hand.

35:19. So Rachel died, and was buried in the highway that leadeth to Ephrata, this is Bethlehem.

35:20. And Jacob erected a pillar over her sepulchre: this is the pillar of Rachel’s monument, to this day.

35:21. Departing thence, he pitched his tent beyond the Flock tower.

35:22. And when he dwelt in that country, Ruben went, and slept with Bala the concubine of his father: which he was not ignorant of. Now the sons of Jacob were twelve.

The concubine.... She was his lawful wife; but, according to the style of the Hebrews, is called concubine, because of her servile extraction.

35:23. The sons of Lia: Ruben the first born, and Simeon, and Levi, and Juda, and Issachar, and Zabulon.

35:24. The sons of Rachel: Joseph and Benjamin.

35:25. The sons of Bala, Rachel’s handmaid: Dan and Nephthali.

35:26. The sons of Zelpha, Lia’s handmaid: Gad and Aser: these are the sons of Jacob, that were born to him in Mesopotamia of Syria.

35:27. And he came to Isaac his father in Mambre, the city of Arbee, this is Hebron: wherein Abraham and Isaac sojourned.

35:28. And the days of Isaac were a hundred and eighty years.

35:29. And being spent with age he died, and was gathered to his people, being old and full of days: and his sons Esau and Jacob buried him.

Genesis Chapter 36
Esau with his wives and children parteth from Jacob. An account of his descendants, and of the first kings of Edom.

36:1. And these are the generations of Esau, the same is Edom.

36:2. Esau took wives of the daughters of Chanaan: Ada the daughter of Elon the Hethite, and Oolibama the daughter of Ana, the daughter of Sebeon the Hevite:

Ada.... These wives of Esau are called by other names, Gen. 26. But it was very common amongst the ancients for the same persons to have two names, as Esau himself was also called Edom.

36:3. And Basemath, the daughter of Ismael, sister of Nabajoth.

36:4. And Ada bore Eliphaz: Basemath bore Rahuel.

36:5. Oolibama bore Jehus, and Ihelon, and Core. These are the sons of Esau, that were born to him in the land of Chanaan.

36:6. And Esau took his wives, and his sons and daughters, and every soul of his house, and his substance, and cattle, and all that he was able to acquire in the land of Chanaan: and went into another country, and departed from his brother Jacob.

36:7. For they were exceeding rich, and could not dwell together: neither was the land in which they sojourned able to bear them, for the multitude of their flocks.

36:8. And Esau dwelt in mount Seir: he is Edom.

36:9. And these are the generations of Esau, the father of Edom, in mount Seir.

36:10. And these the names of his sons: Eliphaz the son of Ada, the wife of Esau: and Rahuel, the son of Basemath, his wife.

36:11. And Eliphaz had sons: Theman, Omar, Sepho, and Gatham and Cenez.

36:12. And Thamna was the concubine of Eliphaz, the son of Esau: and she bore him Amalech. These are the sons of Ada, the wife of Esau.

36:13. And the sons of Rahuel were Nahath and Zara, Samma and Meza. These were the sons of Basemath, the wife of Esau.

36:14. And these were the sons of Oolibama, the daughter of Ana, the daughter of Sebeon, the wife of Esau, whom she bore to him, Jehus, and Ihelon, and Core.

36:15. These were dukes of the sons of Esau: the sons of Eliphaz, the firstborn of Esau: duke Theman, duke Omar, duke Sepho, duke Cenez,

36:16. Duke Core, duke Gatham, duke Amalech: these are the sons of Eliphaz, in the land of Edom, and these the sons of Ada.

36:17. And these were the sons of Rahuel, the son of Esau: duke Nahath, duke Zara, duke Samma, duke Meza. And these are the dukes of Rahuel, in the land of Edom: these the sons of Basemath, the wife of Esau.

36:18. And these the sons of Oolibama, the wife of Esau: duke Jehus, duke Ihelon, duke Core. These are the dukes of Oolibama, the daughter of Ana, and wife of Esau.

36:19. These are the sons of Esau, and these the dukes of them: the same is Edom.

36:20. These are the sons of Seir, the Horrite, the inhabitants of the land: Lotan, and Sobal, and Sebeon, and Ana,

36:21. And Dison, and Eser, and Disan. These are dukes of the Horrites, the sons of Seir, in the land of Edom.

36:22. And Lotan had sons: Hori and Heman. And the sister of Lotan was Thamna.

36:23. And these the sons of Sobal: Alvan, and Manahat, and Ebal, and Sepho, and Onam.

36:24. And these the sons of Sebeon: Aia and Ana. This is Ana that found the hot waters in the wilderness, when he fed the asses of Sebeon, his father:

36:25. And he had a son Dison, and a daughter Oolibama.

36:26. And these were the sons of Dison: Hamdan, and Eseban, and Jethram, and Charan.

36:27. These also were the sons of Eser: Balaan, and Zavan, and Acan.

36:28. And Dison had sons: Hus and Aram.

36:29. These were dukes of the Horrites: duke Lotan, duke Sobal, duke Sebeon, duke Ana,

36:30. Duke Dison, duke Eser, duke Disan: these were dukes of the Horrites that ruled in the land of Seir.

36:31. And the kings that ruled in the land of Edom, before the children of Israel had a king, were these:

36:32. Bela the son of Beor, and the name of his city Denaba.

36:33. And Bela died, and Jobab, the son of Zara, of Bosra, reigned in his stead.

36:34. And when Jobab was dead, Husam, of the land of the Themanites, reigned in his stead.

36:35. And after his death, Adad, the son of Badad, reigned in his stead, who defeated the Madianites in the country of Moab; and the name of his city was Avith.

36:36. And when Adad was dead, there reigned in his stead, Semla, of Masreca.

36:37. And he being dead, Saul, of the river Rohoboth, reigned in his stead.

36:38. And when he also was dead, Balanan, the son of Achobor, succeeded to the kingdom.

36:39. This man also being dead, Adar reigned in his place; and the name of his city was Phau: and his wife was called Meetabel, the daughter of Matred, daughter of Mezaab.

36:40. And these are the names of the dukes of Esau in their kindreds, and places, and callings: duke Thamna, duke Alva, duke Jetheth,

36:41. Duke Oolibama, duke Ela, duke Phinon,

36:42. Duke Cenez, duke Theman, duke Mabsar,

36:43. Duke Magdiel, duke Hiram: these are the dukes of Edom dwelling in the land of their government; the same is Esau, the father of the Edomites.

Genesis Chapter 37
Joseph’s dreams: he is sold by his brethren, and carried into Egypt.

37:1. And Jacob dwelt in the land of Chanaan, wherein his father sojourned.

37:2. And these are his generations: Joseph, when he was sixteen years old, was feeding the flock with his brethren, being but a boy: and he was with the sons of Bala and of Zelpha his father’s wives: and he accused his brethren to his father of a most wicked crime.

37:3. Now Israel loved Joseph above all his sons, because he had him in his old age: and he made him a coat of divers colours.

37:4. And his brethren seeing that he was loved by his father, more than all his sons, hated him, and could not speak peaceably to him.

37:5. Now it fell out also that he told his brethren a dream, that he had dreamed: which occasioned them to hate him the more.

A dream.... These dreams of Joseph were prophetical, and sent from God; as were also those which he interpreted, Gen. 40. and 41.; otherwise generally speaking, the observing of dreams is condemned in the Scripture, as superstitious and sinful. See Deut. 18.10; Eccli. 34.2,3.

37:6. And he said to them: Hear my dream which I dreamed.

37:7. I thought we were binding sheaves in the field: and my sheaf arose as it were, and stood, and your sheaves standing about bowed down before my sheaf.

37:8. His brethren answered: Shalt thou be our king? or shall we be subject to thy dominion? Therefore this matter of his dreams and words ministered nourishment to their envy and hatred.

37:9. He dreamed also another dream, which he told his brethren, saying: I saw in a dream, as it were the sun, and the moon, and eleven stars worshipping me.

37:10. And when he had told this to his father, and brethren, his father rebuked him and said: What meaneth this dream that thou hast dreamed? shall I and thy mother, and thy brethren worship thee upon the earth?

Worship.... This word is not used here to signify divine worship, but an inferior veneration, expressed by the bowing of the body, and that, according to the manner of the eastern nations, down to the ground.

37:11. His brethren therefore envied him: but his father considered the thing with himself.

37:12. And when his brethren abode in Sechem, feeding their father’s flocks,

37:13. Israel said to him: Thy brethren feed the sheep in Sichem: come, I will send thee to them. And when he answered:

37:14. I am ready: he said to him: Go, and see if all things be well with thy brethren, and the cattle: and bring me word again what is doing. So being sent from the vale of Hebron, he came to Sichem:

37:15. And a man found him there wandering in the field, and asked what he sought.

37:16. But he answered: I seek my brethren, tell me where they feed the flocks.

37:17. And the man said to him: They are departed from this place: for I heard them say: Let us go to Dothain. And Joseph went forward after his brethren, and found them in Dothain.

37:18. And when they saw him afar off, before he came nigh them, they thought to kill him:

37:19. And said one to another: Behold the dreamer cometh.

37:20. Come, let us kill him, and cast him into some old pit: and we will say: Some evil beast hath devoured him: and then it shall appear what his dreams avail him:

37:21. And Ruben hearing this, endeavoured to deliver him out of their hands, and said:

37:22. Do not take away his life, nor shed his blood: but cast him into this pit, that is in the wilderness, and keep your hands harmless: now he said this, being desirous to deliver him out of their hands and to restore him to his father.

37:23. And as soon as he came to his brethren, they forthwith stript him of his outside coat, that was of divers colours:

37:24. And cast him into an old pit where there was not water.

37:25. And sitting down to eat bread, they saw some Ismaelites on their way coming from Galaad, with their camels, carrying spices, and balm, and myrrh to Egypt.

37:26. And Juda said to his brethren: What will it profit us to kill our brother, and conceal his blood?

37:27. It is better that he be sold to the Ismaelites, and that our hands be not defiled: for he is our brother and our flesh. His brethren agreed to his words.

37:28. And when the Madianite merchants passed by, they drew him out of the pit, and sold him to the Ismaelites, for twenty pieces of silver: and they led him into Egypt.

37:29. And Ruben returning to the pit, found not the boy:

37:30. And rending his garments he went to his brethren, and said: The boy doth not appear, and whither shall I go?

37:31. And they took his coat, and dipped it in the blood of a kid, which they had killed:

37:32. Sending some to carry it to their father, and to say: This we have found: see whether it be thy son’s coat, or not.

37:33. And the father acknowledging it, said: It is my son’s coat, an evil wild beast hath eaten him, a beast hath devoured Joseph.

37:34. And tearing his garments, he put on sackcloth, mourning for his son a long time.

37:35. And all his children being gathered together to comfort their father in his sorrow, he would not receive comfort, but said: I will go down to my son into hell, mourning. And whilst he continued weeping,

Into hell.... That is, into limbo, the place where the souls of the just were received before the death of our Redeemer. For allowing that the word hell sometimes is taken for the grave, it cannot be so taken in this place; since Jacob did not believe his son to be in the grave, (whom he supposed to be devoured by a wild beast,) and therefore could not mean to go down to him thither: but certainly meant the place of rest where he believed his soul to be.

37:36. The Madianites sold Joseph in Egypt to Putiphar, an eunuch of Pharao, captain of the soldiers.

An eunuch.... This word sometimes signifies a chamberlain, courtier, or officer of the king: and so it is taken in this place.

Genesis Chapter 38
The sons of Juda: the death of Her and Onan: the birth of Phares and Zara.

38:1. At that time Juda went down from his brethren, and turned in to a certain Odollamite, named Hiras.

38:2. And he saw there the daughter of a man of Chanaan, called Sue: and taking her to wife, he went in unto her.

38:3. And she conceived, and bore a son, and called his name Her.

38:4. And conceiving again, she bore a son, and called him Onan.

38:5. She bore also a third: whom she called Sela. After whose birth, she ceased to bear any more.

38:6. And Juda took a wife for Her, his first born, whose name was Thamar.

38:7. And Her, the first born of Juda, was wicked in the sight of the Lord: and was slain by him.

38:8. Juda, therefore, said to Onan his son: Go in to thy brother’s wife and marry her, that thou mayst raise seed to thy brother.

38:9. He knowing that the children should not be his, when he went in to his brother’s wife, he spilled his seed upon the ground, lest children should be born in his brother’s name.

38:10. And therefore the Lord slew him, because he did a detestable thing:

38:11. Wherefore Juda said to Thamar his daughter-in-law: Remain a widow in thy father’s house, till Sela my son grow up: for he was afraid lest he also might die, as his brethren did. She went her way, and dwelt in her father’s house.

38:12. And after many days were past: the daughter of Sue the wife of Juda died: and when he had taken comfort after his mourning, he went up to Thamnas, to the shearers of his sheep, he and Hiras the Odollamite, the shepherd of his flock.

38:13. And it was told Thamar that her father-in-law was come up to Thamnas to shear his sheep.

38:14. And she put off the garments of her widowhood, and took a veil: and changing her dress, sat in the cross way, that leadeth to Thamnas: because Sela was grown up, and she had not been married to him.

38:15. When Juda saw her, he thought she was a harlot: for she had covered her face, lest she should be known.

38:16. And going to her, he said: Suffer me to lie with thee: for he knew her not to be his daughter-in-law. And she answered: What wilt thou give me to enjoy my company?

38:17. He said: I will send thee a kid out of the flock. And when she said again: I will suffer what thou wilt, if thou give me a pledge, till thou send what thou promisest.

38:18. Juda said: What wilt thou have for a pledge? She answered: Thy ring and bracelet, and the staff which thou holdest in thy hand. The woman therefore at one copulation conceived.

38:19. And she arose and went her way: and putting off the apparel which she had taken, put on the garments of her widowhood.

38:20. And Juda sent a kid by his shepherd, the Odollamite, that he might receive the pledge again, which he had given to the woman: but he, not finding her,

38:21. Asked the men of that place: Where is the woman that sat in the cross way? And when they all made answer: There was no harlot in this place,

38:22. He returned to Juda, and said to him: I have not found her; moreover, the men of that place said to me, that there never sat a harlot there.

38:23. Juda said: Let her take it to herself, surely she cannot charge us with a lie, I sent the kid which I promised: and thou didst not find her.

38:24. And behold, after three months, they told Juda, saying: Thamar, thy daughter-in-law, hath played the harlot, and she appeareth to have a big belly. And Juda said: Bring her out that she may be burnt.

38:25. But when she was led to execution, she sent to her father in law, saying: By the man, to whom these things belong, I am with child. See whose ring, and bracelet, and staff this is.

38:26. But he acknowledging the gifts, said: She is juster than I: because I did not give her to Sela, my son. However he knew her no more.

38:27. And when she was ready to be brought to bed, there appeared twins in her womb: and in the very delivery of the infants, one put forth a hand, whereon the midwife tied a scarlet thread, saying:

38:28. This shall come forth the first.

38:29. But he drawing back his hand, the other came forth: and the woman said: Why is the partition divided for thee? and therefore called his name Phares.

Phares.... That is, a breach or division.

38:30. Afterwards his brother came out, on whose hand was the scarlet thread: and she called his name Zara.

Genesis Chapter 39
Joseph hath charge of his master’s house: rejecteth his mistress’s solicitations: is falsely accused by her, and cast into prison, where he hath the charge of all the prisoners.

39:1. And Joseph was brought into Egypt, and Putiphar, an eunuch of Pharao, chief captain of the army, an Egyptian, bought him of the Ismaelites, by whom he was brought.

39:2. And the Lord was with him, and he was a prosperous man in all things: and he dwelt in his master’s house:

39:3. Who knew very well that the Lord was with him, and made all that he did to prosper in his hand.

39:4. And Joseph found favour in the sight of his master, and ministered to him: and being set over all by him, he governed the house committed to him, and all things that were delivered to him:

39:5. And the Lord blessed the house of the Egyptian for Joseph’s sake, and multiplied all his substance, both at home and in the fields.

39:6. Neither knew he any other thing, but the bread which he ate. And Joseph was of a beautiful countenance, and comely to behold.

39:7. And after many days, his mistress cast her eyes on Joseph, and said: Lie with me.

39:8. But he in no wise consenting to that wicked act said to her: Behold, my master hath delivered all things to me, and knoweth not what he hath in his own house:

39:9. Neither is there any thing which is not in my power, or that he hath not delivered to me, but thee, who art his wife; how then can I do this wicked thing, and sin against my God?

39:10. With such words as these day by day, both the woman was importunate with the young man, and he refused the adultery.

39:11. Now it happened on a certain day, that Joseph went into the house, and was doing some business, without any man with him:

39:12. And she catching the skirt of his garment, said: Lie with me. But he leaving the garment in her hand, fled, and went out.

39:13. And when the woman saw the garment in her hands, and herself disregarded,

39:14. She called to her the men of her house, and said to them: See, he hath brought in a Hebrew, to abuse us: he came in to me, to lie with me; and when I cried out,

39:15. And he heard my voice, he left the garment that I held, and got him out.

39:16. For a proof therefore of her fidelity, she kept the garment, and shewed it to her husband when he returned home:

A proof of her fidelity.... or an argument to gain credit, argumentum fidei.

39:17. And said: The Hebrew servant, whom thou hast brought, came to me to abuse me.

39:18. And when he heard me cry, he left the garment which I held, and fled out.

39:19. His master hearing these things, and giving too much credit to his wife’s words, was very angry,

39:20. And cast Joseph into the prison, where the king’s prisoners were kept, and he was there shut up.

39:21. But the Lord was with Joseph, and having mercy upon him gave him favour in the sight of the chief keeper of the prison:

39:22. Who delivered into his hand all the prisoners that were kept in custody: and whatsoever was done, was under him.

39:23. Neither did he himself know any thing, having committed all things to him: for the Lord was with him, and made all that he did to prosper.

Genesis Chapter 40
Joseph interpreteth the dreams of two of Pharao’s servants in prison: the event declareth the interpretations to be true, but Joseph is forgotten.

40:1. After this, it came to pass, that two eunuchs, the butler and the baker of the king of Egypt, offended their lord.

40:2. And Pharao being angry with them, (now the one was chief butler, the other chief baker,)

40:3. He sent them to the prison of the commander of the soldiers, in which Joseph also was prisoner.

40:4. But the keeper of the prison delivered them to Joseph, and he served them. Some little time passed, and they were kept in custody.

40:5. And they both dreamed a dream the same night, according to the interpretation agreeing to themselves:

40:6. And when Joseph was come into them in the morning, and saw them sad,

40:7. He asked them, saying: Why is your countenance sadder today than usual?

40:8. They answered: We have dreamed a dream, and there is nobody to interpret it to us. And Joseph said to them: Doth not interpretation belong to God? Tell me what you have dreamed:

Doth not interpretation belong to God?.... When dreams are from God, as these were, the interpretation of them is a gift of God. But the generality of dreams are not of this sort; but either proceed from the natural complexions and dispositions of persons, or the roving of their imaginations in the day on such objects as they are much affected with, or from their mind being disturbed with cares and troubles, and oppressed with bodily infirmities: or they are suggested by evil spirits, to flatter, or to terrify weak minds, in order to gain belief, and so draw them into error or superstition; or at least to trouble them in their sleep, whom they cannot move when they are awake: so that the general rule, with regard to dreams, is not to observe them, nor to give any credit to them.

40:9. The chief butler first told his dream: I saw before me a vine,

40:10. On which were three branches, which by little and little sent out buds, and after the blossoms brought forth ripe grapes:

40:11. And the cup of Pharao was in my hand: and I took the grapes, and pressed them into the cup which I held, and I gave the cup to Pharao.

40:12. Joseph answered: This is the interpretation of the dream: The three branches, are yet three days:

40:13. After which Pharao will remember thy service, and will restore thee to thy former place: and thou shalt present him the cup according to thy office, as before thou was wont to do.

40:14. Only remember me when it shall be well with thee, and do me this kindness: to put Pharao in mind to take me out of this prison:

40:15. For I was stolen away out of the land of the Hebrews, and here without any fault was cast into the dungeon.

40:16. The chief baker seeing that he had wisely interpreted the dream, said: I also dreamed a dream, That I had three baskets of meal upon my head:

40:17. And that in one basket which was uppermost, I carried all meats that are made by the art of baking, and that the birds ate out of it.

40:18. Joseph answered: This is the interpretation of the dream: The three baskets, are yet three days:

40:19. After which Pharao will take thy head from thee, and hang thee on a cross, and the birds shall tear thy flesh.

40:20. The third day after this was the birthday of Pharao: and he made a great feast for his servants, and at the banquet remembered the chief butler, and the chief baker.

40:21. And he restored the one to his place, to present him the cup:

40:22. The other he hanged on a gibbet, that the truth of the interpreter might be shewn.

40:23. But the chief butler, when things prospered with him, forgot his interpreter.

Genesis Chapter 41
Joseph interpreteth the two dreams of Pharao: he is made ruler over all Egypt.

41:1. After two years Pharao had a dream. He thought he stood by the river,

41:2. Out of which came up seven kine, very beautiful and fat: and they fed in marshy places.

41:3. Other seven also came up out of the river, ill-favoured, and lean fleshed: and they fed on the very bank of the river, in green places:

41:4. And they devoured them, whose bodies were very beautiful and well conditioned. So Pharao awoke.

41:5. He slept again, and dreamed another dream: Seven ears of corn came up upon one stalk full and fair:

41:6. Then seven other ears sprung up thin and blasted,

41:7. And devoured all the beauty of the former. Pharao awaked after his rest:

41:8. And when morning was come, being struck with fear, he sent to all the interpreters of Egypt, and to all the wise men: and they being called for, he told them his dream, and there was not any one that could interpret it.

41:9. Then at length the chief butler remembering, said: I confess my sin:

41:10. The king being angry with his servants, commanded me and the chief baker to be cast into the prison of the captain of the soldiers.

41:11. Where in one night both of us dreamed a dream foreboding things to come.

41:12. There was there a young man a Hebrew, servant to the same captain of the soldiers: to whom we told our dreams,

41:13. And we heard what afterwards the event of the thing proved to be so. For I was restored to my office: and he was hanged upon a gibbet.

41:14. Forthwith at the king’s command Joseph was brought out of the prison, and they shaved him: and changing his apparel brought him in to him.

41:15. And he said to him: I have dreamed dreams, and there is no one that can expound them: Now I have heard that thou art very wise at interpreting them:

41:16. Joseph answered: Without me, God shall give Pharao a prosperous answer.

41:17. So Pharao told what he had dreamed: Methought I stood upon the bank of the river,

41:18. And seven kine came up out of the river, exceeding beautiful and full of flesh: and they grazed on green places in a marshy pasture.

41:19. And behold, there followed these, other seven kine, so very ill-favoured and lean, that I never saw the like in the land of Egypt:

41:20. And they devoured and consumed the former,

41:21. And yet gave no mark of their being full: but were as lean and ill-favoured as before. I awoke, and then fell asleep again,

41:22. And dreamed a dream: Seven ears of corn grew up upon one stalk, full and very fair.

41:23. Other seven also thin and blasted, sprung of the stalk:

41:24. And they devoured the beauty of the former: I told this dream to the conjecturers, and there is no man that can expound it.

41:25. Joseph answered: The king’s dream is one: God hath shewn to Pharao what he is about to do.

41:26. The seven beautiful kine, and the seven full ears, are seven years of plenty: and both contain the same meaning of the dream.

41:27. And the seven lean and thin kine that came up after them, and the seven thin ears that were blasted with the burning wind, are seven years of famine to come:

41:28. Which shall be fulfilled in this order.

41:29. Behold, there shall come seven years of great plenty in the whole land of Egypt:

41:30. After which shall follow other seven years of so great scarcity, that all the abundance before shall be forgotten: for the famine shall consume all the land,

41:31. And the greatness of the scarcity shall destroy the greatness of the plenty.

41:32. And for that thou didst see the second time a dream pertaining to the same thing: it is a token of the certainty, and that the word of God cometh to pass, and is fulfilled speedily.

41:33. Now therefore let the king provide a wise and industrious man, and make him ruler over the land of Egypt:

41:34. That he may appoint overseers over all the countries: and gather into barns the fifth part of the fruits, during the seven fruitful years,

41:35. That shall now presently ensue: and let all the corn be laid up, under Pharao’s hands, and be reserved in the cities.

41:36. And let it be in readiness, against the famine of seven years to come, which shall oppress Egypt, and the land shall not be consumed with scarcity.

41:37. The counsel pleased Pharao, and all his servants.

41:38. And he said to them: Can we find such another man, that is full of the spirit of God?

41:39. He said therefore to Joseph: Seeing God hath shewn thee all that thou hast said, can I find one wiser and one like unto thee?

41:40. Thou shalt be over my house, and at the commandment of thy mouth all the people shall obey: only in the kingly throne will I be above thee.

41:41. And again Pharao said to Joseph: Behold, I have appointed thee over the whole land of Egypt.

41:42. And he took his ring from his own hand, and gave it into his hand: and he put upon him a robe of silk, and put a chain of gold about his neck.

41:43. And he made him go up into his second chariot, the crier proclaiming that all should bow their knee before him, and that they should know he was made governor over the whole land of Egypt.

41:44. And the king said to Joseph: I am Pharao: without thy commandment no man shall move hand or foot in all the land of Egypt.

41:45. And he turned his name, and called him in the Egyptian tongue the saviour of the world. And he gave him to wife Aseneth, the daughter of Putiphare, priest of Heliopolis. Then Joseph went out to the land of Egypt.

The saviour of the world.... Zaphnah paaneah.

41:46. (Now he was thirty years old when he stood before king Pharao), and he went round all the countries of Egypt.

41:47. And the fruitfulness of the seven years came: and the corn being bound up into sheaves, was gathered together into the barns of Egypt.

41:48. And all the abundance of grain was laid up in every city.

41:49. And there was so great abundance of wheat, that it was equal to the sand of the sea, and the plenty exceeded measure.

41:50. And before the famine came, Joseph had two sons born: whom Aseneth, the daughter of Putiphare, priest of Heliopolis, bore unto him.

41:51. And he called the name of the firstborn Manasses, saying: God hath made me to forget all my labours, and my father’s house.

Manasses.... That is, oblivion, or forgetting.

41:52. And he named the second Ephraim, saying: God hath made me to grow in the land of my poverty.

Ephraim.... That is, fruitful, or growing.

41:53. Now when the seven years of plenty that had been in Egypt were passed:

41:54. The seven years of scarcity, which Joseph had foretold, began to come: and the famine prevailed in the whole world, but there was bread in all the land of Egypt.

41:55. And when there also they began to be famished, the people cried to Pharao, for food. And he said to them: Go to Joseph: and do all that he shall say to you.

41:56. And the famine increased daily in all the land: and Joseph opened all the barns, and sold to the Egyptians: for the famine had oppressed them also.

41:57. And all provinces came into Egypt, to buy food, and to seek some relief of their want.

Genesis Chapter 42
Jacob sendeth his ten sons to buy corn in Egypt. Their treatment by Joseph.

42:1. And Jacob hearing that food was sold in Egypt, said to his sons: Why are ye careless?

42:2. I have heard that wheat is sold in Egypt: Go ye down, and buy us necessaries, that we may live, and not be consumed with want.

42:3. So the ten brethren of Joseph went down, to buy corn in Egypt:

42:4. Whilst Benjamin was kept at home by Jacob, who said to his brethren: Lest perhaps he take any harm in the journey.

42:5. And they entered into the land of Egypt with others that went to buy. For the famine was in the land of Chanaan.

42:6. And Joseph was governor in the land of Egypt, and corn was sold by his direction to the people. And when his brethren had bowed down to him,

42:7. And he knew them, he spoke as it were to strangers, somewhat roughly, asking them: Whence came you? They answered: From the land of Chanaan, to buy necessaries of life.

42:8. And though he knew his brethren, he was not known by them.

42:9. And remembering the dreams, which formerly he had dreamed, he said to them: You are spies. You are come to view the weaker parts of the land.

You are spies.... This he said by way of examining them, to see what they would answer.

42:10. But they said: It is not so, my lord; but thy servants are come to buy food.

42:11. We are all the sons of one man: we are come as peaceable men, neither do thy servants go about any evil.

42:12. And he answered them: It is otherwise: you are come to consider the unfenced parts of this land.

42:13. But they said: We thy servants are twelve brethren, the sons of one man in the land of Chanaan: the youngest is with our father, the other is not living.

42:14. He saith, This is it that I said: You are spies.

42:15. I shall now presently try what you are: by the health of Pharao, you shall not depart hence, until your youngest brother come.

42:16. Send one of you to fetch him: and you shall be in prison, till what you have said be proved, whether it be true or false: or else by the health of Pharao you are spies.

Or else by the health of Pharao you are spies.... That is, if these things you say be proved false, you are to be held for spies for your lying, and shall be treated as such. Joseph dealt in this manner with his brethren, to bring them by the means of affliction to a sense of their former sin, and a sincere repentance for it.

42:17. So he put them in prison three days.

42:18. And the third day he brought them out of prison, and said: Do as I have said, and you shall live: for I fear God.

42:19. If you be peaceable men, let one of your brethren be bound in prison: and go ye your ways, and carry the corn that you have bought, unto your houses.

42:20. And bring your youngest brother to me, that I may find your words to be true, and you may not die. They did as he had said.

42:21. And they talked one to another: We deserve to suffer these things, because we have sinned against our brother, seeing the anguish of his soul, when he besought us, and we would not hear: therefore is this affliction come upon us.

42:22. And Ruben, one of them, said: Did not I say to you: Do not sin against the boy; and you would not hear me? Behold his blood is required.

42:23. And they knew not that Joseph understood, because he spoke to them by an interpreter.

42:24. And he turned himself away a little while, and wept: and returning, he spoke to them.

42:25. And taking Simeon, and binding him in their presence, he commanded his servants to fill their sacks with wheat, and to put every man’s money again in their sacks, and to give them besides provisions for the way: and they did so.

42:26. But they having loaded their asses with the corn went their way.

42:27. And one of them opening his sack, to give his beast provender in the inn, saw the money in the sack’s mouth,

42:28. And said to his brethren: My money is given me again; behold it is in the sack. And they were astonished, and troubled, and said to one another: What is this that God hath done unto us?

42:29. And they came to Jacob their father in the land of Chanaan, and they told him all things that had befallen them, saying:

42:30. The lord of the land spoke roughly to us, and took us to be spies of the country.

42:31. And we answered him: We are peaceable men, and we mean no plot.

42:32. We are twelve brethren born of one father: one is not living, the youngest is with our father in the land of Chanaan.

42:33. And he said to us: Hereby shall I know that you are peaceable men: Leave one of your brethren with me, and take ye necessary provision for your houses, and go your ways,

42:34. And bring your youngest brother to me, that I may know you are not spies: and you may receive this man again, that is kept in prison: and afterwards may have leave to buy what you will.

42:35. When they had told this, they poured out their corn, and every man found his money tied in the mouth of his sack: and all being astonished together,

42:36. Their father Jacob said: You have made me to be without children: Joseph is not living, Simeon is kept in bonds, and Benjamin you will take away: all these evils are fallen upon me.

42:37. And Ruben answered him: Kill my two sons, if I bring him not again to thee: deliver him into my hand, and I will restore him to thee.

42:38. But he said: My son shall not go down with you: his brother is dead, and he is left alone: if any mischief befall him in the land to which you go, you will bring down my grey hairs with sorrow to hell.

To hell.... That is, to that place, where the souls then remained, as above, chapter 37. ver. 35.

Genesis Chapter 43
The sons of Jacob go again into Egypt with Benjamin. They are entertained by Joseph.

43:1. In the mean time the famine was heavy upon all the land.

43:2. And when they had eaten up all the corn, which they had brought out of Egypt, Jacob said to his sons: Go again, and buy us a little food.

43:3. Juda answered: The man declared unto us with the attestation of an oath, saying: You shall not see my face, unless you bring your youngest brother with you.

43:4. If therefore thou wilt send him with us, we will set out together, and will buy necessaries for thee.

43:5. But if thou wilt not, we will not go: for the man, as we have often said, declared unto us, saying: You shall not see my face without your youngest brother.

43:6. Israel said to them: You have done this for my misery, in that you told him you had also another brother.

43:7. But they answered: The man asked us in order concerning our kindred: if our father lived: if we had a brother: and we answered him regularly, according to what he demanded: could we know that he would say: Bring hither your brother with you?

43:8. And Juda said to his father: Send the boy with me, that we may set forward, and may live: lest both we and our children perish.

43:9. I take the boy upon me, require him at my hand: unless I bring him again, and restore him to thee, I will be guilty of sin against thee for ever.

43:10. If delay had not been made, we had been here again the second time.

43:11. Then Israel said to them: If it must needs be so, do what you will: take of the best fruits of the land in your vessels, and carry down presents to the man, a little balm, and honey, and storax, myrrh, turpentine, and almonds.

Balm.... Literally rosin, resinae; but here by that name is meant balm.

43:12. And take with you double money, and carry back what you found in your sacks, lest perhaps it was done by mistake.

43:13. And take also your brother, and go to the man.

43:14. And may my almighty God make him favourable to you: and send back with you your brother, whom he keepeth, and this Benjamin: and as for me I shall be desolate without children.

43:15. So the men took the presents, and double money, and Benjamin: and went down into Egypt, and stood before Joseph.

43:16. And when he had seen them, and Benjamin with them, he commanded the steward of his house, saying: Bring in the men into the house, and kill victims, and prepare a feast: because they shall eat with me at noon.

43:17. He did as he was commanded, and brought the men into the house.

43:18. And they being much afraid, said there one to another: Because of the money, which we carried back the first time in our sacks, we are brought in: that he may bring upon us a false accusation, and by violence make slaves of us and our asses.

43:19. Wherefore, going up to the steward of the house, at the door,

43:20. They said: Sir, we desire thee to hear us. We came down once before to buy food:

43:21. And when we had bought, and were come to the inn, we opened our sacks, and found our money in the mouths of the sacks: which we have now brought again in the same weight.

43:22. And we have brought other money besides, to buy what we want: we cannot tell who put it in our bags.

43:23. But he answered: Peace be with you, fear not: your God, and the God of your father, hath given you treasure in your sacks. For the money, which you gave me, I have for good. And he brought Simeon out to them.

43:24. And having brought them into the house, he fetched water, and they washed their feet, and he gave provender to their asses.

43:25. But they made ready the presents, against Joseph came at noon: for they had heard that they should eat bread there.

43:26. Then Joseph came in to his house, and they offered him the presents, holding them in their hands; and they bowed down with their face to the ground.

43:27. But he courteously saluting them again, asked them, saying: Is the old man your father in health, of whom you told me? Is he yet living?

43:28. And they answered: Thy servant our father, is in health; he is yet living. And bowing themselves, they made obeisance to him.

43:29. And Joseph lifting up his eyes, saw Benjamin, his brother by the same mother, and said: Is this your young brother, of whom you told me? And he said: God be gracious to thee, my son.

43:30. And he made haste, because his heart was moved upon his brother, and tears gushed out: and going into his chamber, he wept.

43:31. And when he had washed his face, coming out again, he refrained himself, and said: Set bread on the table.

43:32. And when it was set on, for Joseph apart, and for his brethren apart, for the Egyptians also that ate with him apart, (for it is unlawful for the Egyptians to eat with the Hebrews, and they think such a feast profane):

43:33. They sat before him, the firstborn according to his birthright, and the youngest according to his age. And they wondered very much;

43:34. Taking the messes which they received of him: and the greater mess came to Benjamin, so that it exceeded by five parts. And they drank, and were merry with him.

Genesis Chapter 44
Joseph’s contrivance to stop his brethren. The humble supplication of Juda.

44:1. And Joseph commanded the steward of his house, saying: Fill their sacks with corn, as much as they can hold: and put the money of every one in the top of his sack.

44:2. And in the mouth of the younger’s sack put my silver cup, and the price which he gave for the wheat. And it was so done.

44:3. And when the morning arose, they were sent away with their asses.

44:4. And when they were now departed out of the city, and had gone forward a little way: Joseph sending for the steward of his house, said: Arise, and pursue after the men: and when thou hast overtaken them, say to them: Why have you returned evil for good?

44:5. The cup which you have stolen, is that in which my lord drinketh, and in which he is wont to divine: you have done a very evil thing.

44:6. He did as he had commanded him. And having overtaken them, he spoke to them the same words.

44:7. And they answered: Why doth our lord speak so, as though thy servants had committed so heinous a fact?

44:8. The money, that we found in the top of our sacks, we brought back to thee from the land of Chanaan: how then should it be that we should steal out of thy lord’s house, gold or silver?

44:9. With whomsoever of thy servants shall be found that which thou seekest, let him die, and we will be the bondmen of my lord.

44:10. And he said to them: Let it be according to your sentence: with whomsoever it shall be found, let him be my servant, and you shall be blameless.

44:11. Then they speedily took down their sacks to the ground, and every man opened his sack.

44:12. Which when he had searched, beginning at the eldest, and ending at the youngest, he found the cup in Benjamin’s sack.

44:13. Then they rent their garments, and loading their asses again, returned into the town.

44:14. And Juda at the head of his brethren went in to Joseph (for he was not yet gone out of the place) and they all together fell down before him on the ground.

44:15. And he said to them: Why would you do so? know you not that there is no one like me in the science of divining.

The science of divining.... He speaks of himself according to what he was esteemed in that kingdom. And indeed, he being truly a prophet, knew more without comparison than any of the Egyptian sorcerers.

44:16. And Juda said to him: What shall we answer my lord? or what shall we say, or be able justly to allege? God hath found out the iniquity of thy servants: behold, we are all bondmen to my lord, both we, and he with whom the cup was found.

44:17. Joseph answered: God forbid that I should do so: he that stole the cup, he shall be my bondman: and go you away free to your father.

44:18. Then Juda coming nearer, said boldly: I beseech thee, my lord, let thy servant speak a word in thy ears, and be not angry with thy servant: for after Pharao thou art.

44:19. My lord. Thou didst ask thy servants the first time: Have you a father or a brother.

44:20. And we answered thee, my lord: We have a father an old man, and a young boy, that was born in his old age; whose brother by the mother is dead; and he alone is left of his mother, and his father loveth him tenderly.

44:21. And thou saidst to thy servants: Bring him hither to me, and I will set my eyes on him.

44:22. We suggested to my lord: The boy cannot leave his father: for if he leave him, he will die.

44:23. And thou saidst to thy servants: Except your youngest brother come with you, you shall see my face no more.

44:24. Therefore when we were gone up to thy servant our father, we told him all that my lord had said.

44:25. And our father said: Go again, and buy us a little wheat.

44:26. And we said to him: We cannot go: if our youngest brother go down with us, we will set out together: otherwise, without him we dare not see the man’s face.

44:27. Whereunto he answered: You know that my wife bore me two.

44:28. One went out, and you said: A beast devoured him; and hitherto he appeareth not.

44:29. If you take this also, and any thing befall him in the way, you will bring down my grey hairs with sorrow unto hell.

44:30. Therefore, if I shall go to thy servant, our father, and the boy be wanting, (whereas his life dependeth upon the life of him,)

44:31. And he shall see that he is not with us, he will die, and thy servants shall bring down his grey hairs with sorrow unto hell.

His gray hairs.... That is, his person, now far advanced in years.—With sorrow unto hell.... The Hebrew word for hell is here sheol, the Greek hades: it is not taken for the hell of the damned; but for that place of souls below where the servants of God were kept before the coming of Christ. Which place, both in the Scripture and in the creed, is named hell.

44:32. Let me be thy proper servant, who took him into my trust, and promised, saying: If I bring him not again, I will be guilty of sin against my father for ever.

44:33. Therefore I, thy servant, will stay instead of the boy in the service of my lord, and let the boy go up with his brethren.

44:34. For I cannot return to my father without the boy, lest I be a witness of the calamity that will oppress my father.

Genesis Chapter 45
Joseph maketh himself known to his brethren: and sendeth for his father.

45:1. Joseph could no longer refrain himself before many that stood by: whereupon he commanded that all should go out, and no stranger be present at their knowing one another.

45:2. And he lifted up his voice with weeping, which the Egyptians, and all the house of Pharao heard.

45:3. And he said to his brethren: I am Joseph: Is my father yet living? His brethren could not answer him, being struck with exceeding great fear.

45:4. And he said mildly to them: Come nearer to me. And when they were come near him, he said: I am Joseph, your brother, whom you sold into Egypt.

45:5. Be not afraid, and let it not seem to you a hard case that you sold me into these countries: for God sent me before you into Egypt for your preservation.

45:6. For it is two years since the famine began to be upon the land, and five years more remain, wherein there can be neither ploughing nor reaping.

45:7. And God sent me before, that you may be preserved upon the earth, and may have food to live.

45:8. Not by your counsel was I sent hither, but by the will of God: who hath made me as it were a father to Pharao, and lord of his whole house, and governor in all the land of Egypt.

45:9. Make haste, and go ye up to my father, and say to him: Thus saith thy son Joseph: God hath made me lord of the whole land of Egypt; come down to me, linger not.

45:10. And thou shalt dwell in the land of Gessen: and thou shalt be near me, thou and thy sons, and thy sons’ sons, thy sheep, and thy herds, and all things that thou hast.

45:11. And there I will feed thee, (for there are yet five years of famine remaining) lest both thou perish, and thy house, and all things that thou hast.

45:12. Behold, your eyes, and the eyes of my brother Benjamin, see that it is my mouth that speaketh to you.

45:13. You shall tell my father of all my glory, and all things that you have seen in Egypt: make haste and bring him to me.

45:14. And falling upon the neck of his brother Benjamin, he embraced him and wept: and Benjamin in like manner wept also on his neck.

45:15. And Joseph kissed all his brethren, and wept upon every one of them: after which they were emboldened to speak to him.

45:16. And it was heard, and the fame was spread abroad in the king’s court: The brethren of Joseph are come; and Pharao with all his family was glad.

45:17. And he spoke to Joseph that he should give orders to his brethren, saying: Load your beasts, and go into the land of Chanaan,

45:18. And bring away from thence your father and kindred, and come to me; and I will give you all the good things of Egypt, that you may eat the marrow of the land.

45:19. Give orders also that they take wagons out of the land of Egypt, for the carriage of their children and their wives; and say: Take up your father, and make haste to come with all speed:

45:20. And leave nothing of your household stuff; for all the riches of Egypt shall be yours.

45:21. And the sons of Israel did as they were bid. And Joseph gave them wagons according to Pharao’s commandment: and provisions for the way.

45:22. He ordered also to be brought out for every one of them two robes: but to Benjamin he gave three hundred pieces of silver, with five robes of the best:

45:23. Sending to his father as much money and raiment; adding besides, ten he-asses, to carry off all the riches of Egypt, and as many she-asses, carrying wheat and bread for the journey.

45:24. So he sent away his brethren, and at their departing said to them: Be not angry in the way.

45:25. And they went up out of Egypt, and came into the land of Chanaan, to their father Jacob.

45:26. And they told him, saying: Joseph, thy son, is living; and he is ruler in all the land of Egypt. Which when Jacob heard, he awaked as it were out of a deep sleep, yet did not believe them.

45:27. They, on the other side, told the whole order of the thing. And when he saw the wagons, and all that he had sent, his spirit revived,

45:28. And he said: It is enough for me if Joseph, my son, be yet living: I will go and see him before I die.

Genesis Chapter 46
Israel, warranted by a vision from God, goeth down into Egypt with all his family.

46:1. And Israel taking his journey, with all that he had, came to the well of the oath, and killing victims there to the God of his father Isaac,

The well of the oath.... Bersabee.

46:2. He heard him, by a vision in the night, calling him, and saying to him: Jacob, Jacob. And he answered him: Lo, here I am.

46:3. God said to him: I am the most mighty God of thy father; fear not, go down into Egypt, for I will make a great nation of thee there.

46:4. I will go down with thee thither, and will bring thee back again from thence: Joseph also shall put his hands upon thy eyes.

46:5. And Jacob rose up from the well of the oath: and his sons took him up, with their children and wives in the wagons, which Pharao had sent to carry the old man,

46:6. And all that he had in the land of Chanaan: and he came into Egypt with all his seed;

46:7. His sons, and grandsons, daughters, and all his offspring together.

46:8. And these are the names of the children of Israel, that entered into Egypt, he and his children. His firstborn Ruben,

46:9. The sons of Ruben: Henoch and Phallu, and Hesron and Charmi.

46:10. The sons of Simeon: Jamuel and Jamin and Ahod, and Jachin and Sohar, and Saul, the son of a woman of Chanaan.

46:11. The sons of Levi: Gerson and Caath, and Merari.

46:12. The sons of Juda: Her and Onan, and Sela, and Phares and Zara. And Her and Onan died in the land of Chanaan. And sons were born to Phares: Hesron and Hamul.

46:13. The sons of Issachar: Thola and Phua, and Job and Semron.

46:14. The sons of Zabulon: Sared, and Elon, and Jahelel.

46:15. These are the sons of Lia, whom she bore in Mesopotamia of Syria, with Dina, his daughter. All the souls of her sons and daughters, thirty-three.

46:16. The sons of Gad: Sephion and Haggi, and Suni and Esebon, and Heri and Arodi, and Areli.

46:17. The sons of Aser: Jamne and Jesua, and Jessuri and Beria, and Sara their sister. The sons of Beria: Heber and Melchiel.

46:18. These are the sons of Zelpha, whom Laban gave to Lia, his daughter. And these she bore to Jacob, sixteen souls.

46:19. The sons of Rachel, Jacob’s wife: Joseph and Benjamin.

46:20. And sons were born to Joseph, in the land of Egypt, whom Aseneth, the daughter of Putiphare, priest of Heliopolis, bore him: Manasses and Ephraim.

46:21. The sons of Benjamin: Bela and Bechor, and Asbel and Gera, and Naaman and Echi, and Ross and Mophim, and Ophim and Ared.

46:22. These are the sons of Rachel, whom she bore to Jacob: all the souls, fourteen.

46:23. The sons of Dan: Husim.

46:24. The sons of Nephthali: Jaziel and Guni, and Jeser and Sallem.

46:25. These are the sons of Bala, whom Laban gave to Rachel, his daughter: and these she bore to Jacob: all the souls, seven.

46:26. All the souls that went with Jacob into Egypt, and that came out of his thigh, besides his sons’ wives, sixty-six.

46:27. And the sons of Joseph, that were born to him in the land of Egypt, two souls. All the souls of the house of Jacob, that entered into Egypt, were seventy.

46:28. And he sent Juda before him to Joseph, to tell him; and that he should meet him in Gessen.

46:29. And when he was come thither, Joseph made ready his chariot, and went up to meet his father in the same place: and seeing him, he fell upon his neck, and embracing him, wept.

46:30. And the father said to Joseph: Now shall I die with joy, because I have seen thy face, and leave thee alive.

46:31. And Joseph said to his brethren, and to all his father’s house: I will go up, and will tell Pharao, and will say to him: My brethren, and my father’s house, that were in the land of Chanaan, are come to me:

46:32. And the men are shepherds, and their occupation is to feed cattle; their flocks, and herds, and all they have, they have brought with them.

46:33. And when he shall call you, and shall say: What is your occupation?

46:34. You shall answer: We, thy servants, are shepherds, from our infancy until now, both we and our fathers. And this you shall say, that you may dwell in the land of Gessen, because the Egyptians have all shepherds in abomination.

Genesis Chapter 47
Jacob and his sons are presented before Pharao: he giveth them the land of Gessen. The famine forceth the Egyptians to sell all their possessions to the king.

47:1. Then Joseph went in and told Pharao, saying: My father and brethren, their sheep and their herds, and all that they possess, are come out of the land of Chanaan: and behold they stay in the land of Gessen.

47:2. Five men also, the last of his brethren, he presented before the king:

The last ... xtremos. Some interpret this word of the chiefest, and most rightly: but Joseph seems rather to have chosen out such as had the meanest appearance, that Pharao might not think of employing them at court, with danger of their morals and religion.

47:3. And he asked them: What is your occupation? They answered: We, thy servants, are shepherds, both we and our fathers.

47:4. We are come to sojourn in thy land, because there is no grass for the flocks of thy servants, the famine being very grievous in the land of Chanaan: and we pray thee to give orders that we thy servants may be in the land of Gessen.

47:5. The king therefore said to Joseph: Thy father and thy brethren are come to thee.

47:6. The land of Egypt is before thee: and make them dwell in the best place, and give them the land of Gessen. And if thou knowest that there are industrious men among them, make them rulers over my cattle.

47:7. After this Joseph brought in his father to the king, and presented him before him: and he blessed him.

47:8. And being asked by him: How many are the days of the years of thy life?

47:9. He answered: The days of my pilgrimage are a hundred and thirty years, few, and evil, and they are not come up to the days of the pilgrimage of my fathers.

47:10. And blessing the king, he went out.

47:11. But Joseph gave a possession to his father and his brethren in Egypt, in the best place of the land, in Ramesses, as Pharao had commanded.

47:12. And he nourished them, and all his father’s house, allowing food to every one.

47:13. For in the whole world there was want of bread, and a famine had oppressed the land, more especially of Egypt and Chanaan;

47:14. Out of which he gathered up all the money for the corn which they bought, and brought it in to the king’s treasure.

47:15. And when the buyers wanted money, all Egypt came to Joseph, saying: Give us bread: why should we die in thy presence, having now no money?

47:16. And he answered them: Bring me your cattle, and for them I will give you food, if you have no money.

47:17. And when they had brought them, he gave them food in exchange for their horses, and sheep, and oxen, and asses: and he maintained them that year for the exchange of their cattle.

47:18. And they came the second year, and said to him: We will not hide from our lord, how that our money is spent, and our cattle also are gone: neither art thou ignorant that we have nothing now left but our bodies and our lands.

47:19. Why therefore shall we die before thy eyes? we will be thine, both we and our lands: buy us to be the king’s servants, and give us seed, lest for want of tillers the land be turned into a wilderness.

47:20. So Joseph bought all the land of Egypt, every man selling his possessions, because of the greatness of the famine. And he brought it into Pharao’s hands:

47:21. And all its people from one end of the borders of Egypt, even to the other end thereof,

47:22. Except the land of the priests, which had been given them by the king: to whom also a certain allowance of food was given out of the public stores, and therefore they were not forced to sell their possessions.

47:23. Then Joseph said to the people: Behold, as you see, both you and your lands belong to Pharao; take seed and sow the fields,

47:24. That you may have corn. The fifth part you shall give to the king; the other four you shall have for seed, and for food for your families and children.

47:25. And they answered: our life is in thy hand; only let my lord look favourably upon us, and we will gladly serve the king.

47:26. From that time unto this day, in the whole land of Egypt, the fifth part is paid to the kings, and it is become as a law, except the land of the priests, which was free from this covenant.

47:27. So Israel dwelt in Egypt, that is, in the land of Gessen, and possessed it; and grew, and was multiplied exceedingly.

47:28. And he lived in it seventeen years: and all the days of his life came to a hundred and forty-seven years.

47:29. And when he saw that the day of his death drew nigh, he called his son Joseph, and said to him: If I have found favour in thy sight, put thy hand under my thigh; and thou shalt shew me this kindness and truth, not to bury me in Egypt.

47:30. But I will sleep with my fathers, and thou shalt take me away out of this land, and bury me in the burying place of my ancestors. And Joseph answered him: I will do what thou hast commanded.

47:31. And he said: Swear then to me. And as he was swearing, Israel adored God, turning to the bed’s head.

To the bed’s head.... St. Paul, Heb. 11.21, following the Greek translation of the Septuagint, reads adored the top of his rod. Where note, that the same word in the Hebrew, according to the different pointing of it, signifies both a bed and a rod. And to verify both these sentences, we must understand that Jacob leaning on Joseph’s rod adored, turning towards the head of his bed: which adoration, inasmuch as it was referred to God, was an absolute and sovereign worship: but inasmuch as it was referred to the rod of Joseph, as a figure of the sceptre, that is, of the royal dignity of Christ, was only an inferior and relative honour.

Genesis Chapter 48
Joseph visiteth his father in his sickness, who adopteth his two sons Manasses and Ephraim, and blesseth them, preferring the younger before the elder.

48:1. After these things, it was told Joseph that his father was sick; and he set out to go to him, taking his two sons Manasses and Ephraim.

48:2. And it was told the old man: Behold thy son Joseph cometh to thee. And being strengthened, he sat on his bed.

48:3. And when Joseph was come in to him, he said: God almighty appeared to me at Luza, which is in the land of Chanaan, and he blessed me,

48:4. And said: I will cause thee to increase and multiply, and I will make of thee a multitude of people: and I will give this land to thee, and to thy seed after thee for an everlasting possession.

48:5. So thy two sons, who were born to thee in the land of Egypt before I came hither to thee, shall be mine: Ephraim and Manasses shall be reputed to me as Ruben and Simeon.

48:6. But the rest whom thou shalt have after them, shall be thine, and shall be called by the name of their brethren in their possessions.

48:7. For, when I came out of Mesopotamia, Rachel died from me in the land of Chanaan in the very journey, and it was spring time: and I was going to Ephrata, and I buried her near the way of Ephrata, which by another name is called Bethlehem.

48:8. Then seeing his sons, he said to him: Who are these?

48:9. He answered: They are my sons, whom God hath given me in this place. And he said: Bring them to me, that I may bless them.

48:10. For Israel’s eyes were dim by reason of his great age, and he could not see clearly. And when they were brought to him, he kissed and embraced them,

48:11. And said to his son: I am not deprived of seeing thee; moreover God hath shewn me thy seed.

48:12. And when Joseph had taken them from his father’s lap, he bowed down with his face to the ground.

48:13. And he set Ephraim on his right hand, that is, towards the left hand of Israel; but Manasses on his left hand, to wit, towards his father’s right hand, and brought them near to him.

48:14. But he, stretching forth his right hand, put it upon the head of Ephraim, the younger brother; and the left upon the head of Manasses, who was the elder, changing his hands.

48:15. And Jacob blessed the sons of Joseph, and said: God, in whose sight my fathers Abraham and Isaac walked, God that feedeth me from my youth until this day:

48:16. The angel that delivereth me from all evils, bless these boys: and let my name be called upon them, and the names of my fathers Abraham and Isaac; and may they grow into a multitude upon the earth.

48:17. And Joseph seeing that his father had put his right hand upon the head of Ephraim, was much displeased: and taking his father’s hand, he tried to lift it from Ephraim’s head, and to remove it to the head of Manasses.

48:18. And he said to his father: It should not be so, my father; for this is the firstborn, put thy right hand upon his head.

48:19. But he refusing, said: I know, my son, I know: and this also shall become a people, and shall be multiplied; but his younger brother shall be greater than he; and his seed shall grow into nations.

48:20. And he blessed them at that time, saying: In thee shall Israel be blessed, and it shall be said: God do to thee as to Ephraim, and as to Manasses. And he set Ephraim before Manasses.

48:21. And he said to Joseph, his son: Behold I die, and God will be with you, and will bring you back into the land of your fathers.

48:22. I give thee a portion above thy brethren, which I took out of the hand of the Amorrhite with my sword and bow.

Genesis Chapter 49
Jacob’s prophetical blessings of his twelve sons: his death.

49:1. And Jacob called his sons, and said to them: Gather yourselves together, that I may tell you the things that shall befall you in the last days.

49:2. Gather yourselves together, and hear, O ye sons of Jacob, hearken to Israel, your father:

49:3. Ruben, my firstborn, thou art my strength, and the beginning of my sorrow; excelling in gifts, greater in command.

My strength, etc.... He calls him his strength, as being born whilst his father was in his full strength and vigour: he calls him the beginning of his sorrow, because cares and sorrows usually come on with the birth of children. Excelling in gifts, etc., because the firstborn had a title to a double portion, and to have the command over his brethren, which Ruben forfeited by his sin; being poured out as water, that is, spilt and lost.

49:4. Thou art poured out as water, grow thou not; because thou wentest up to thy father’s bed, and didst defile his couch.

Grow thou not.... This was not meant by way of a curse or imprecation; but by way of a prophecy foretelling that the tribe of Ruben should not inherit the pre-eminences usually annexed to the first birthright, viz., the double portion, the being prince or lord over the other brethren, and the priesthood: of which the double portion was given to Joseph, the princely office to Juda, and the priesthood to Levi.

49:5. Simeon and Levi brethren: vessels of iniquity waging war.

49:6. Let not my soul go into their counsel, nor my glory be in their assembly: because in their fury they slew a man, and in their self-will they undermined a wall.

Slew a man, ... viz., Sichem the son of Hemor, with all his people, Gen. 34.; mystically and prophetically it alludes to Christ, whom their posterity, viz., the priests and the scribes, put to death.

49:7. Cursed be their fury, because it was stubborn: and their wrath, because it was cruel: I will divide them in Jacob, and will scatter them in Israel.

49:8. Juda, thee shall thy brethren praise: thy hand shall be on the necks of thy enemies; the sons of thy father shall bow down to thee.

49:9. Juda is a lion’s whelp: to the prey, my son, thou art gone up: resting thou hast couched as a lion, and as a lioness, who shall rouse him?

A lion’s whelp, etc.... This blessing of Juda foretelleth the strength of his tribe, the fertility of his inheritance; and principally that the sceptre and legislative power should not be utterly taken away from his race till about the time of the coming of Christ: as in effect it never was: which is a demonstration against the modern Jews, that the Messiah is long since come; for the sceptre has long since been utterly taken away from Juda.

49:10. The sceptre shall not be taken away from Juda, nor a ruler from his thigh, till he come that is to be sent, and he shall be the expectation of nations.

49:11. Tying his foal to the vineyard, and his ass, O my son, to the vine. He shall wash his robe in wine, and his garment in the blood of the grape.

49:12. His eyes are more beautiful than wine, and his teeth whiter than milk.

49:13. Zabulon shall dwell on the seashore, and in the road of ships, reaching as far as Sidon.

49:14. Issachar shall be a strong ass, lying down between the borders.

49:15. He saw rest that it was good: and the land that it was excellent: and he bowed his shoulder to carry, and became a servant under tribute.

49:16. Dan shall judge his people like another tribe in Israel.

Dan shall judge, etc.... This was verified in Samson, who was of the tribe of Dan, and began to deliver Israel. Judges 13.5. But as this deliverance was but temporal and very imperfect, the holy patriarch (ver. 18) aspires after another kind of deliverer, saying: I will look for thy salvation, O Lord.

49:17. Let Dan be a snake in the way, a serpent in the path, that biteth the horse’s heels, that his rider may fall backward.

49:18. I will look for thy salvation, O Lord.

49:19. Gad, being girded, shall fight before him: and he himself shall be girded backward.

Gad being girded, etc.... It seems to allude to the tribe of Gad; when after they had received for their lot the land of Galaad, they marched in arms before the rest of the Israelites, to the conquest of the land of Chanaan: from whence they afterwards returned loaded with spoils. See Jos. 4. and 12.

49:20. Aser, his bread shall be fat, and he shall yield dainties to kings.

49:21. Nephthali, a hart let loose, and giving words of beauty.

49:22. Joseph is a growing son, a growing son and comely to behold: the daughters run to and fro upon the wall;

Run to and fro, etc.... To behold his beauty; whilst his envious brethren turned their darts against him, etc.

49:23. But they that held darts, provoked him, and quarrelled with him, and envied him.

49:24. His bow rested upon the strong, and the bands of his arms and his hands were loosed, by the hands of the mighty one of Jacob: thence he came forth a pastor, the stone of Israel.

His bow rested upon the strong, etc.... That is, upon God, who was his strength: who also loosed his bands, and brought him out of prison to be the pastor, that is, the feeder and ruler of Egypt, and the stone, that is, the rock and support of Israel.

49:25. The God of thy father shall be thy helper, and the Almighty shall bless thee with the blessings of heaven above, with the blessings of the deep that lieth beneath, with the blessings of the breasts and of the womb.

49:26. The blessings of thy father are strengthened with the blessings of his fathers: until the desire of the everlasting hills should come: may they be upon the head of Joseph, and upon the crown of the Nazarite among his brethren.

The blessings of thy father, etc.... That is, thy father’s blessings are made more prevalent and effectual in thy regard, by the additional strength they receive from his inheriting the blessings of his progenitors Abraham and Isaac. The desire of the everlasting hills, etc.... These blessings all looked forward towards Christ, called the desire of the everlasting hills, as being longed for, as it were, by the whole creation. Mystically, the patriarchs and prophets are called the everlasting hills, by reason of the eminence of their wisdom and holiness. The Nazarite.... This word signifies one separated; and agrees to Joseph, as being separated from, and more eminent than, his brethren. As the ancient Nazarites were so called from their being set aside for God, and vowed to him.

49:27. Benjamin a ravenous wolf, in the morning shall eat the prey, and in the evening shall divide the spoil.

49:28. All these are the twelve tribes of Israel: these things their father spoke to them, and he blessed every one with their proper blessings.

49:29. And he charged them, saying: I am now going to be gathered to my people: bury me with my fathers in the double cave, which is in the field of Ephron the Hethite,

To be gathered to my people.... That is, I am going to die, and so to follow my ancestors that are gone before me, and to join their company in another world.

49:30. Over against Mambre, in the land of Chanaan, which Abraham bought together with the field, of Ephron the Hethite, for a possession to bury in.

49:31. There they buried him, and Sara his wife: there was Isaac buried with Rebecca, his wife: there also Lia doth lie buried.

49:32. And when he had ended the commandments, wherewith he instructed his sons, he drew up his feet upon the bed, and died: and he was gathered to his people.

Genesis Chapter 50
The mourning for Jacob, and his interment. Joseph’s kindness towards his brethren. His death.

50:1. And when Joseph saw this, he fell upon his father’s face, weeping and kissing him.

50:2. And he commanded his servants, the physicians, to embalm his father.

50:3. And while they were fulfilling his commands, there passed forty days: for this was the manner with bodies that were embalmed, and Egypt mourned for him seventy days.

50:4. And the time of the mourning being expired, Joseph spoke to the family of Pharao: If I have found favour in your sight, speak in the ears of Pharao:

50:5. For my father made me swear to him, saying: Behold I die; thou shalt bury me in my sepulchre which I have digged for myself in the land of Chanaan. So I will go up and bury my father, and return.

50:6. And Pharao said to him: Go up and bury thy father according as he made thee swear.

50:7. So he went up, and there went with him all the ancients of Pharao’s house, and all the elders of the land of Egypt.

50:8. And the house of Joseph with his brethren, except their children, and their flocks and herds, which they left in the land of Gessen.

50:9. He had also in his train chariots and horsemen: and it was a great company.

50:10. And they came to the threshing floor of Atad, which is situated beyond the Jordan: where celebrating the exequies with a great and vehement lamentation, they spent full seven days.

50:11. And when the inhabitants of Chanaan saw this, they said: This is a great mourning to the Egyptians. And therefore the name of that place was called, The mourning of Egypt.

50:12. So the sons of Jacob did as he had commanded them.

50:13. And carrying him into the land of Chanaan, they buried him in the double cave, which Abraham had bought together with the field for a possession of a burying place, of Ephron, the Hethite, over against Mambre.

50:14. And Joseph returned into Egypt with his brethren, and all that were in his company, after he had buried his father.

50:15. Now he being dead, his brethren were afraid, and talked one with another: Lest perhaps he should remember the wrong he suffered, and requite us all the evil that we did to him.

50:16. And they sent a message to him, saying: Thy father commanded us before he died,

50:17. That we should say thus much to thee from him: I beseech thee to forget the wickedness of thy brethren, and the sin and malice they practised against thee: we also pray thee, to forgive the servants of the God of thy father this wickedness. And when Joseph heard this, he wept.

50:18. And his brethren came to him; and worshipping prostrate on the ground, they said: We are thy servants.

50:19. And he answered them: Fear not: can we resist the will of God?

50:20. You thought evil against me: but God turned it into good, that he might exalt me, as at present you see, and might save many people.

50:21. Fear not: I will feed you and your children. And he comforted them, and spoke gently and mildly.

50:22. And he dwelt in Egypt with all his father’s house; and lived a hundred and ten years. And he saw the children of Ephraim to the third generation. The children also of Machir, the sons of Manasses, were born on Joseph’s knees.

50:23. After which he told his brethren: God will visit you after my death, and will make you go up out of this land, to the land which he swore to Abraham, Isaac, and Jacob.

50:24. And he made them swear to him, saying: God will visit you, carry my bones with you out of this place:

50:25. And he died, being a hundred and ten years old. And being embalmed, he was laid in a coffin in Egypt.

`

var book_of_job = `Job Chapter 1
Job’s virtue and riches. Satan by permission from God strippeth him of all his substance. His patience.

1:1. There was a man in the land of Hus, whose name was Job, and that man was simple and upright, and fearing God, and avoiding evil.

Hus.... The land of Hus was a part of Edom; as appears from Lam. 4.21.—Ibid. Simple.... That is, innocent, sincere, and without guile.

1:2. And there were born to him seven sons and three daughters.

1:3. And his possession was seven thousand sheep, and three thousand camels, and five hundred yoke of oxen, and five hundred she asses, and a family exceedingly great: and this man was great among all the people of the east.

1:4. And his sons went, and made a feast by houses, every one in his day. And sending, they called their three sisters, to eat and drink with them.

And made a feast by houses.... That is, each made a feast in his own house and had his day, inviting the others, and their sisters.

1:5. And when the days of their feasting were gone about, Job sent to them, and sanctified them: and rising up early, offered holocausts for every one of them. For he said: Lest perhaps my sons have sinned, and have blessed God in their hearts. So did Job all days.

Blessed.... For greater horror of the very thought of blasphemy, the scripture both here and ver. 11, and in the following chapter, ver. 5 and 9, uses the word bless to signify its contrary.

1:6. Now on a certain day, when the sons of God came to stand before the Lord, Satan also was present among them.

The sons of God.... The angels.—Ibid. Satan also, etc.... This passage represents to us in a figure, accommodated to the ways and understandings of men, 1. The restless endeavours of Satan against the servants of God; 2. That he can do nothing without God’s permission; 3. That God doth not permit him to tempt them above their strength: but assists them by his divine grace in such manner, that the vain efforts of the enemy only serve to illustrate their virtue and increase their merit.

1:7. And the Lord said to him: Whence comest thou? And he answered and said: I have gone round about the earth, and walked through it.

1:8. And the Lord said to him: Hast thou considered my servant, Job, that there is none like him in the earth, a simple and upright man, and fearing God, and avoiding evil?

1:9. And Satan answering, said: Doth Job fear God in vain?

1:10. Hast thou not made a fence for him, and his house, and all his substance round about, blessed the works of his hands, and his possession hath increased on the earth?

1:11. But stretch forth thy hand a little, and touch all that he hath, and see if he bless thee not to thy face.

1:12. Then the Lord said to Satan: Behold, all that he hath is in thy hand: only put not forth thy hand upon his person. And Satan went forth from the presence of the Lord.

1:13. Now upon a certain day, when his sons and daughters were eating and drinking wine, in the house of their eldest brother,

1:14. There came a messenger to Job, and said: The oxen were ploughing, and the asses feeding beside them,

1:15. And the Sabeans rushed in, and took all away, and slew the servants with the sword; and I alone have escaped to tell thee.

1:16. And while he was yet speaking, another came, and said: The fire of God fell from heaven, and striking the sheep and the servants, hath consumed them; and I alone have escaped to tell thee.

1:17. And while he also was yet speaking, there came another, and said: The Chaldeans made three troops, and have fallen upon the camels, and taken them; moreover, they have slain the servants with the sword: and I alone have escaped to tell thee.

1:18. He was yet speaking, and behold another came in, and said: Thy sons and daughters were eating and drinking wine in the house of their eldest brother,

1:19. A violent wind came on a sudden from the side of the desert, and shook the four corners of the house, and it fell upon thy children, and they are dead: and I alone have escaped to tell thee.

1:20. Then Job rose up, and rent his garments, and having shaven his head, fell down upon the ground, and worshipped,

1:21. And said: Naked came I out of my mother’s womb, and naked shall I return thither: the Lord gave, and the Lord hath taken away: as it hath pleased the Lord, so is it done: blessed be the name of the Lord.

1:22. In all these things Job sinned not by his lips, nor spoke he any foolish thing against God.

Job Chapter 2
2:1. And it came to pass, when on a certain day the sons of God came, and stood before the Lord, and Satan came amongst them, and stood in his sight,

2:2. That the Lord said to Satan: Whence comest thou? And he answered, and said: I have gone round about the earth, and walked through it.

2:3. And the Lord said to Satan: Hast thou considered my servant, Job, that there is none like him in the earth, a man simple and upright, and fearing God, and avoiding evil, and still keeping his innocence? But thou hast moved me against him, that I should afflict him without cause.

2:4. And Satan answered, and said: Skin for skin; and all that a man hath, he will give for his life:

2:5. But put forth thy hand, and touch his bone and his flesh, and then thou shalt see that he will bless thee to thy face.

2:6. And the Lord said to Satan: Behold, he is in thy hand, but yet save his life.

2:7. So Satan went forth from the presence of the Lord, and struck Job with a very grievous ulcer, from the sole of the foot even to the top of his head:

2:8. And he took a potsherd and scraped the corrupt matter, sitting on a dunghill.

2:9. And his wife said to him: Dost thou still continue in thy simplicity? bless God and die.

2:10. And he said to her: Thou hast spoken like one of the foolish women: If we have received good things at the hand of God, why should we not receive evil? In all these things Job did not sin with his lips.

2:11. Now when Job’s three friends heard all the evil that had befallen him, they came every one from his own place, Eliphaz, the Themanite, and Baldad, the Suhite, and Sophar, the Naamathite. For they had made an appointment to come together and visit him, and comfort him.

2:12. And when they had lifted up their eyes afar off, they knew him not, and crying out, they wept, and rending their garments, they sprinkled dust upon their heads toward heaven.

2:13. And they sat with him on the ground seven days and seven nights and no man spoke to him a word: for they saw that his grief was very great.

Job Chapter 3
3:1. After this, Job opened his mouth, and cursed his day,

Cursed his day.... Job cursed the day of his birth, not by way of wishing evil to any thing of God’s creation; but only to express in a stronger manner his sense of human miseries in general, and of his own calamities in particular.

3:2. And he said:

3:3. Let the day perish wherein I was born, and the night in which it was said: A man child is conceived.

3:4. Let that day be turned into darkness, let not God regard it from above, and let not the light shine upon it.

3:5. Let darkness, and the shadow of death, cover it, let a mist overspread it, and let it be wrapped up in bitterness.

3:6. Let a darksome whirlwind seize upon that night, let it not be counted in the days of the year, nor numbered in the months.

3:7. Let that night be solitary, and not worthy of praise.

3:8. Let them curse it who curse the day, who are ready to raise up a leviathan:

3:9. Let the stars be darkened with the mist thereof: let it expect light, and not see it, nor the rising of the dawning of the day:

3:10. Because it shut not up the doors of the womb that bore me, nor took away evils from my eyes.

3:11. Why did I not die in the womb? why did I not perish when I came out of the belly?

3:12. Why received upon the knees? why suckled at the breasts?

3:13. For now I should have been asleep and still, and should have rest in my sleep:

3:14. With kings and consuls of the earth, who build themselves solitudes:

3:15. Or with princes, that possess gold, and fill their houses with silver:

3:16. Or as a hidden untimely birth, I should not be; or as they that, being conceived, have not seen the light.

3:17. There the wicked cease from tumult, and there the wearied in strength are at rest.

3:18. And they sometime bound together without disquiet, have not heard the voice of the oppressor.

3:19. The small and great are there, and the servant is free from his master.

3:20. Why is light given to him that is in misery, and life to them that are in bitterness of soul?

3:21. That look for death, and it cometh not, as they that dig for a treasure:

3:22. And they rejoice exceedingly when they have found the grave?

3:23. To a man whose way is hidden, and God hath surrounded him with darkness?

3:24. Before I eat I sigh: and as overflowing waters, so is my roaring:

3:25. For the fear which I feared, hath come upon me: and that which I was afraid of, hath befallen me.

3:26. Have I not dissembled? have I not kept silence? have I not been quiet? and indignation is come upon me.

Job Chapter 4
4:1. Then Eliphaz, the Themanite, answered, and said:

4:2. If we begin to speak to thee, perhaps thou wilt take it ill; but who can withhold the words he hath conceived?

4:3. Behold thou hast taught many, and thou hast strengthened the weary hands:

4:4. Thy words have confirmed them that were staggering, and thou hast strengthened the trembling knees:

4:5. But now the scourge is come upon thee, and thou faintest: It hath touched thee, and thou art troubled.

4:6. Where is thy fear, thy fortitude, thy patience, and the perfection of thy ways?

4:7. Remember, I pray thee, who ever perished being innocent? or when were the just destroyed?

4:8. On the contrary, I have seen those who work iniquity, and sow sorrows, and reap them,

4:9. Perishing by the blast of God, and consumed by the spirit of his wrath.

4:10. The roaring of the lion, and the voice of the lioness, and the teeth of the whelps of lions, are broken:

4:11. The tiger hath perished for want of prey, and the young lions are scattered abroad.

4:12. Now there was a word spoken to me in private, and my ears by stealth, as it were, received the veins of its whisper.

4:13. In the horror of a vision by night, when deep sleep is wont to hold men,

4:14. Fear seized upon me, and trembling, and all my bones were affrighted:

4:15. And when a spirit passed before me, the hair of my flesh stood up.

4:16. There stood one whose countenance I knew not, an image before my eyes, and I heard the voice, as it were, of a gentle wind.

4:17. Shall man be justified in comparison of God, or shall a man be more pure than his maker?

Shall man be justified in comparison of God, etc.... These are the words which Eliphaz had heard from an angel, which, ver. 15, he calls a spirit.

4:18. Behold, they that serve him are not steadfast, and in his angels he found wickedness:

4:19. How much more shall they that dwell in houses of clay, who have an earthly foundation, be consumed as with the moth?

4:20. From morning till evening they shall be cut down: and because no one understandeth, they shall perish for ever.

4:21. And they that shall be left, shall be taken away from them: they shall die, and not in wisdom.

Job Chapter 5
5:1. Call now, if there be any that will answer thee, and turn to some of the saints.

5:2. Anger indeed killeth the foolish, and envy slayeth the little one.

5:3. I have seen a fool with a strong root, and I cursed his beauty immediately.

5:4. His children shall be far from safety, and shall be destroyed in the gate, and there shall be none to deliver them.

5:5. Whose harvest the hungry shall eat, and the armed man shall take him by violence, and the thirsty shall drink up his riches.

5:6. Nothing upon earth is done without a cause, and sorrow doth not spring out of the ground.

5:7. Man is born to labour, and the bird to fly.

5:8. Wherefore I will pray to the Lord, and address my speech to God:

5:9. Who doth great things, and unsearchable and wonderful things without number:

5:10. Who giveth rain upon the face of the earth, and watereth all things with waters:

5:11. Who setteth up the humble on high, and comforteth with health those that mourn.

5:12. Who bringeth to nought the designs of the malignant, so that their hands cannot accomplish what they had begun:

5:13. Who catcheth the wise in their craftiness, and disappointeth the counsel of the wicked:

5:14. They shall meet with darkness in the day, and grope at noonday as in the night.

5:15. But he shall save the needy from the sword of their mouth, and the poor from the hand of the violent.

5:16. And to the needy there shall be hope, but iniquity shall draw in her mouth.

5:17. Blessed is the man whom God correcteth: refuse not, therefore, the chastising of the Lord.

5:18. For he woundeth, and cureth: he striketh, and his hands shall heal.

5:19. In six troubles he shall deliver thee, and in the seventh, evil shall not touch thee.

5:20. In famine he shall deliver thee from death; and in battle, from the hand of the sword.

5:21. Thou shalt be hidden from the scourge of the tongue: and thou shalt not fear calamity when it cometh.

5:22. In destruction and famine thou shalt laugh: and thou shalt not be afraid of the beasts of the earth.

5:23. But thou shalt have a covenant with the stones of the lands, and the beasts of the earth shall be at peace with thee.

5:24. And thou shalt know that thy tabernacle is in peace, and visiting thy beauty, thou shalt not sin.

5:25. Thou shalt know also that thy seed shall be multiplied, and thy offspring like the grass of the earth.

5:26. Thou shalt enter into the grave in abundance, as a heap of wheat is brought in its season.

5:27. Behold, this is even so, as we have searched out: which thou having heard, consider it thoroughly in thy mind.

Job Chapter 6
6:1. But Job answered, and said:

6:2. O that my sins, whereby I have deserved wrath, and the calamity that I suffer, were weighed in a balance.

My sins, etc.... He does not mean to compare his sufferings with his real sins: but with the imaginary crimes which his friends imputed to him: and especially with his wrath, or grief, expressed in the third chapter, which they so much accused. Though, as he tells them here, it bore no proportion with the greatness of his calamity.

6:3. As the sand of the sea, this would appear heavier: therefore, my words are full of sorrow:

6:4. For the arrows of the Lord are in me, the rage whereof drinketh up my spirit, and the terrors of the Lord war against me.

6:5. Will the wild ass bray when he hath grass? or will the ox low when he standeth before a full manger?

6:6. Or can an unsavoury thing be eaten, that is not seasoned with salt? or can a man taste that which, when tasted, bringeth death?

6:7. The things which before my soul would not touch, now, through anguish, are my meats.

6:8. Who will grant that my request may come: and that God may give me what I look for?

6:9. And that he that hath begun may destroy me, that he may let loose his hand, and cut me off?

6:10. And that this may be my comfort, that afflicting me with sorrow, he spare not, nor I contradict the words of the Holy one.

6:11. For what is my strength, that I can hold out? or what is my end, that I should keep patience?

6:12. My strength is not the strength of stones, nor is my flesh of brass.

6:13. Behold there is no help for me in myself, and my familiar friends also are departed from me.

6:14. He that taketh away mercy from his friend, forsaketh the fear of the Lord.

6:15. My brethren have passed by me, as the torrent that passeth swiftly in the valleys.

6:16. They that fear the hoary frost, the snow shall fall upon them.

6:17. At the time when they shall be scattered they shall perish: and after it groweth hot, they shall be melted out of their place.

6:18. The paths of their steps are entangled: they shall walk in vain, and shall perish.

6:19. Consider the paths of Thema, the ways of Saba, and wait a little while.

6:20. They are confounded, because I have hoped: they are come also even unto me, and are covered with shame.

6:21. Now you are come: and now, seeing my affliction, you are afraid.

6:22. Did I say: Bring to me, and give me of your substance?

6:23. Or deliver me from the hand of the enemy, and rescue me out of the hand of the mighty?

6:24. Teach me, and I will hold my peace: and if I have been ignorant of any thing, instruct me.

6:25. Why have you detracted the words of truth, whereas there is none of you that can reprove me?

6:26. You dress up speeches only to rebuke, and you utter words to the wind.

6:27. You rush in upon the fatherless, and you endeavour to overthrow your friend.

6:28. However, finish what you have begun: give ear and see whether I lie.

6:29. Answer, I beseech you, without contention: and speaking that which is just, judge ye.

6:30. And you shall not find iniquity in my tongue, neither shall folly sound in my mouth.

Job Chapter 7
7:1. The life of man upon earth is a warfare, and his days are like the days of a hireling.

7:2. As a servant longeth for the shade, as the hireling looketh for the end of his work;

7:3. So I also have had empty months, and have numbered to myself wearisome nights.

7:4. If I lie down to sleep, I shall say: When shall I rise? and again, I shall look for the evening, and shall be filled with sorrows even till darkness.

7:5. My flesh is clothed with rottenness and the filth of dust; my skin is withered and drawn together.

7:6. My days have passed more swiftly than the web is cut by the weaver, and are consumed without any hope.

7:7. Remember that my life is but wind, and my eye shall not return to see good things.

7:8. Nor shall the sight of man behold me: thy eyes are upon me, and I shall be no more.

7:9. As a cloud is consumed, and passeth away: so he that shall go down to hell shall not come up.

7:10. Nor shall he return any more into his house, neither shall his place know him any more.

7:11. Wherefore, I will not spare my month, I will speak in the affliction of my spirit: I will talk with the bitterness of my soul.

7:12. Am I a sea, or a whale, that thou hast enclosed me in a prison?

7:13. If I say: My bed shall comfort me, and I shall be relieved, speaking with myself on my couch:

7:14. Thou wilt frighten me with dreams, and terrify me with visions.

7:15. So that my soul rather chooseth hanging, and my bones death.

7:16. I have done with hope, I shall now live no longer: spare me, for my days are nothing.

7:17. What is a man, that thou shouldst magnify him or why dost thou set thy heart upon him?

7:18. Thou visitest him early in the morning, and thou provest him suddenly.

7:19. How long wilt thou not spare me, nor suffer me to swallow down my spittle?

7:20. I have sinned: what shall I do to thee, O keeper of men? why hast thou set me opposite to thee, and am I become burdensome to myself?

7:21. Why dost thou not remove my sin, and why dost thou not take away my iniquity? Behold now I shall sleep in the dust: and if thou seek me in the morning, I shall not be.

Job Chapter 8
8:1. Then Baldad, the Suhite, answered, and said:

8:2. How long wilt thou speak these things, and how long shall the words of thy mouth be like a strong wind?

8:3. Doth God pervert judgment, or doth the Almighty overthrow that which is just?

8:4. Although thy children have sinned against him, and he hath left them in the hand of their iniquity:

8:5. Yet if thou wilt arise early to God, and wilt beseech the Almighty:

8:6. If thou wilt walk clean and upright, he will presently awake unto thee, and will make the dwelling of thy justice peaceable:

8:7. In so much, that if thy former things were small thy latter things would be multiplied exceedingly.

8:8. For inquire of the former generation, and search diligently into the memory of the fathers:

8:9. (For we are but of yesterday, and are ignorant that our days upon earth are but a shadow.)

8:10. And they shall teach thee: they shall speak to thee, and utter words out of their hearts.

8:11. Can the rush be green without moisture? or sedge bush grow without water?

8:12. When it is yet in flower, and is not plucked up with the hand, it withereth before all herbs.

8:13. Even so are the ways of all that forget God, and the hope of the hypocrite shall perish:

8:14. His folly shall not please him, and his trust shall be like the spider’s web.

8:15. He shall lean upon his house, and it shall not stand: he shall prop it up, and it shall not rise:

8:16. He seemeth to have moisture before the sun cometh; and at his rising, his blossom shall shoot forth.

8:17. His roots shall be thick upon a heap of stones; and among the stones he shall abide.

8:18. If one swallow him up out of his place, he shall deny him, and shall say: I know thee not.

8:19. For this is the joy of his way, that others may spring again out of the earth.

8:20. God will not cast away the simple, nor reach out his hand to the evil doer:

8:21. Until thy mouth be filled with laughter, and thy lips with rejoicing.

8:22. They that hate thee, shall be clothed with confusion: and the dwelling of the wicked shall not stand.

Job Chapter 9
9:1. And Job answered, and said:

9:2. Indeed I know it is so, and that man cannot be justified, compared with God.

9:3. If he will contend with him, he cannot answer him one for a thousand.

9:4. He is wise in heart, and mighty in strength: who hath resisted him, and hath had peace?

9:5. Who hath removed mountains, and they whom he overthrew in his wrath, knew it not.

9:6. Who shaketh the earth out of her place, and the pillars thereof tremble.

9:7. Who commandeth the sun, and it riseth not: and shutteth up the stars, as it were, under a seal:

9:8. Who alone spreadeth out the heavens, and walketh upon the waves of the sea,

9:9. Who maketh Arcturus, and Orion, and Hyades, and the inner parts of the south.

Arcturus, etc.... These are names of stars or constellations. In Hebrew, Ash, Cesil, and Cimah. See note chap. 38, ver. 31.

9:10. Who doth things great and incomprehensible, and wonderful, of which there is no number.

9:11. If he come to me, I shall not see him: if he depart, I shall not understand.

9:12. If he examine on a sudden, who shall answer him? or who can say: Why dost thou so?

9:13. God, whose wrath no man can resist, and under whom they stoop that bear up the world.

9:14. What am I then, that I should answer him, and have words with him?

9:15. I, who although I should have any just thing, would not answer, but would make supplication to my judge.

9:16. And if he should hear me when I call, I should not believe that he had heard my voice.

9:17. For he shall crush me in a whirlwind, and multiply my wounds even without cause.

Without cause.... That is, without my knowing the cause: or without any crime of mine.

9:18. He alloweth not my spirit to rest, and he filleth me with bitterness.

9:19. If strength be demanded, he is most strong: if equity of judgment, no man dare bear witness for me.

9:20. If I would justify myself, my own mouth shall condemn me: if I would shew myself innocent, he shall prove me wicked.

9:21. Although I should be simple, even this my soul shall be ignorant of, and I shall be weary of my life.

9:22. One thing there is that I have spoken, both the innocent and the wicked he consumeth.

9:23. If he scourge, let him kill at once, and not laugh at the pains of the innocent.

9:24. The earth is given into the hand of the wicked, he covereth the face of the judges thereof: and if it be not he, who is it then?

9:25. My days have been swifter than a post: they have fled away and have not seen good.

9:26. They have passed by as ships carrying fruits, as an eagle flying to the prey.

9:27. If I say: I will not speak so: I change my face, and am tormented with sorrow.

9:28. I feared all my works, knowing that thou didst not spare the offender.

9:29. But if so also I am wicked, why have I laboured in vain?

9:30. If I be washed, as it were, with snow waters, and my hands shall shine ever so clean:

9:31. Yet thou shalt plunge me in filth, and my garments shall abhor me.

9:32. For I shall not answer a man that is like myself: nor one that may be heard with me equally in judgment.

9:33. There is none that may be able to reprove both, and to put his hand between both.

9:34. Let him take his rod away from me, and let not his fear terrify me.

9:35. I will speak, and will not fear him: for I cannot answer while I am in fear.

Job Chapter 10
10:1. My soul is weary of my life, I will let go my speech against myself, I will speak in the bitterness of my soul.

10:2. I will say to God: Do not condemn me: tell me why thou judgest me so?

10:3. Doth it seem good to thee that thou shouldst calumniate me, and oppress me, the work of thy own hands, and help the counsel of the wicked?

10:4. Hast thou eyes of flesh: or, shalt thou see as man seeth?

10:5. Are thy days as the days of man, and are thy years as the times of men:

10:6. That thou shouldst inquire after my iniquity, and search after my sin?

10:7. And shouldst know that I have done no wicked thing, whereas there is no man that can deliver out of thy hand?

10:8. Thy hands have made me, and fashioned me wholly round about, and dost thou thus cast me down headlong on a sudden?

10:9. Remember, I beseech thee, that thou hast made me as the clay, and thou wilt bring me into dust.

10:10. Hast thou not milked me as milk, and curdled me like cheese?

10:11. Thou hast clothed me with skin and flesh: thou hast put me together with bones and sinews:

10:12. Thou hast granted me life and mercy, and thy visitation hath preserved my spirit.

10:13. Although thou conceal these things in thy heart, yet I know that thou rememberest all things.

10:14. If I have sinned, and thou hast spared me for an hour: why dost thou not suffer me to be clean from my iniquity?

10:15. And if I be wicked, woe unto me: and if just, I shall not lift up my head, being filled with affliction and misery.

10:16. And for pride thou wilt take me as a lioness, and returning, thou tormentest me wonderfully.

10:17. Thou renewest thy witnesses against me, and multipliest thy wrath upon me, and pains war against me.

10:18. Why didst thou bring me forth out of the womb? O that I had been consumed, that eye might not see me!

10:19. I should have been as if I had not been, carried from the womb to the grave.

10:20. Shall not the fewness of my days be ended shortly? Suffer me, therefore, that I may lament my sorrow a little:

10:21. Before I go and return no more, to a land that is dark and covered with the mist of death:

10:22. A land of misery and darkness, where the shadow of death, and no order, but everlasting horror dwelleth.

Job Chapter 11
Sophar reproves Job, for justifying himself, and invites him to repentance.

11:1. Then Sophar the Naamathite answered, and said:

11:2. Shall not he that speaketh much, hear also? or shall a man full of talk be justified?

11:3. Shall men hold their peace to thee only? and when thou hast mocked others, shall no man confute thee?

11:4. For thou hast said: My word is pure, and I am clean in thy sight.

11:5. And I wish that God would speak with thee, and would open his lips to thee,

11:6. That he might shew thee the secrets of wisdom, and that his law is manifold, and thou mightest understand that he exacteth much less of thee, than thy iniquity deserveth.

11:7. Peradventure thou wilt comprehend the steps of God, and wilt find out the Almighty perfectly?

11:8. He is higher than heaven, and what wilt thou do? he is deeper than hell, and how wilt thou know?

11:9. The measure of him is longer than the earth, and broader than the sea.

11:10. If he shall overturn all things, or shall press them together, who shall contradict him?

11:11. For he knoweth the vanity of men, and when he seeth iniquity, doth he not consider it?

11:12. A vain man is lifted up into pride, and thinketh himself born free like a wild ass’s colt.

11:13. But thou hast hardened thy heart, and hast spread thy hands to him.

11:14. If thou wilt put away from thee the iniquity that is in thy hand, and let not injustice remain in thy tabernacle:

11:15. Then mayst thou lift up thy face without spot, and thou shalt be steadfast, and shalt not fear.

11:16. Thou shalt also forget misery, and remember it only as waters that are passed away.

11:17. And brightness like that of the noonday, shall arise to thee at evening: and when thou shalt think thyself consumed, thou shalt rise as the day star.

11:18. And thou shalt have confidence, hope being set before thee, and being buried thou shalt sleep secure.

11:19. Thou shalt rest, and there shall be none to make thee afraid: and many shall entreat thy face.

11:20. But the eyes of the wicked shall decay, and the way to escape shall fail them, and their hope the abomination of the soul.

Job Chapter 12
Job’s reply to Sophar. He extols God’s power and wisdom.

12:1. Then Job answered, and said:

12:2. Are you then men alone, and shall wisdom die with you?

12:3. I also have a heart as well as you: for who is ignorant of these things, which you know?

12:4. He that is mocked by his friends as I, shall call upon God and he will hear him: for the simplicity of the just man is laughed to scorn.

12:5. The lamp despised in the thoughts of the rich, is ready for the time appointed.

12:6. The tabernacles of robbers abound, and they provoke God boldly; whereas it is he that hath given all into their hands:

12:7. But ask now the beasts, and they shall teach thee: and the birds of the air, and they shall tell thee.

12:8. Speak to the earth, and it shall answer thee: and the fishes of the sea shall tell.

12:9. Who is ignorant that the hand of the Lord hath made all these things?

12:10. In whose hand is the soul of every living thing, and the spirit of all flesh of man.

12:11. Doth not the ear discern words, and the palate of him that eateth, the taste?

12:12. In the ancient is wisdom, and in length of days prudence.

12:13. With him is wisdom and strength, he hath counsel and understanding.

12:14. If he pull down, there is no man that can build up: if he shut up a man, there is none that can open.

12:15. If he withhold the waters, all things shall be dried up: and if he send them out, they shall overturn the earth.

12:16. With him is strength and wisdom: he knoweth both the deceivers, and him that is deceived.

12:17. He bringeth counsellors to a foolish end, and judges to insensibility.

12:18. He looseth the belt of kings, and girdeth their loins with a cord.

12:19. He leadeth away priests without glory, and overthroweth nobles.

12:20. He changeth the speech of the true speakers, and taketh away the doctrine of the aged.

12:21. He poureth contempt upon princes, and relieveth them that were oppressed.

12:22. He discovereth deep things out of darkness, and bringeth up to light the shadow of death.

12:23. He multiplieth nations, and destroyeth them, and restoreth them again after they were overthrown.

12:24. He changeth the heart of the princes of the people of the earth, and deceiveth them that they walk in vain where there is no way.

12:25. They shall grope as in the dark, and not in the light, and he shall make them stagger like men that are drunk.

Job Chapter 13
Job persists in maintaining his innocence: and reproves his friends.

13:1. Behold my eye hath seen all these things, and my ear hath heard them, and I have understood them all.

13:2. According to your knowledge I also know: neither am I inferior to you.

13:3. But yet I will speak to the Almighty, and I desire to reason with God.

13:4. Having first shewn that you are forgers of lies, and maintainers of perverse opinions.

13:5. And I wish you would hold your peace, that you might be thought to be wise men.

13:6. Hear ye therefore my reproof, and attend to the judgment of my lips.

13:7. Hath God any need of your lie, that you should speak deceitfully for him?

13:8. Do you accept this person, and do you endeavour to judge for God?

13:9. Or shall it please him, from whom nothing can be concealed? or shall he be deceived as a man, with your deceitful dealings?

13:10. He shall reprove you, because in secret you accept his person.

13:11. As soon as he shall move himself, he shall trouble you: and his dread shall fall upon you.

13:12. Your remembrance shall be compared to ashes, and your necks shall be brought to clay.

13:13. Hold your peace a little while, that I may speak whatsoever my mind shall suggest to me.

13:14. Why do I tear my flesh with my teeth, and carry my soul in my hands?

13:15. Although he should kill me, I will trust in him: but yet I will reprove my ways in his sight.

13:16. And he shall be my saviour: for no hypocrite shall come before his presence.

13:17. Hear ye my speech, and receive with your ears hidden truths.

13:18. If I shall be judged, I know that I shall be found just.

13:19. Who is he that will plead against me? let him come: why am I consumed holding my peace?

13:20. Two things only do not to me, and then from thy face I shall not be hid:

13:21. Withdraw thy hand far from me, and let not thy dread terrify me.

13:22. Call me, and I will answer thee: or else I will speak, and do thou answer me.

13:23. How many are my iniquities and sins? make me know my crimes and offenses.

13:24. Why hidest thou thy face, and thinkest me thy enemy?

13:25. Against a leaf, that is carried away with the wind, thou shewest thy power, and thou pursuest a dry straw.

13:26. For thou writest bitter things against me, and wilt consume me for the sins of my youth.

13:27. Thou hast put my feet in the stocks, and hast observed all my paths, and hast considered the steps of my feet:

13:28. Who am to be consumed as rottenness, and as a garment that is motheaten.

Job Chapter 14
Job declares the shortness of man’s days: and professes his belief of a resurrection.

14:1. Man born of a woman, living for a short time, is filled with many miseries.

14:2. Who cometh forth like a flower, and is destroyed, and fleeth as a shadow, and never continueth in the same state.

14:3. And dost thou think it meet to open thy eyes upon such an one, and to bring him into judgment with thee?

14:4. Who can make him clean that is conceived of unclean seed? is it not thou who only art?

14:5. The days of man are short, and the number of his months is with thee: thou hast appointed his bounds which cannot be passed.

14:6. Depart a little from him, that he may rest until his wished for day come, as that of the hireling.

14:7. A tree hath hope: if it be cut, it groweth green again, and the boughs thereof sprout.

14:8. If its roots be old in the earth, and its stock be dead in the dust:

14:9. At the scent of water, it shall spring, and bring forth leaves, as when it was first planted.

14:10. But man when he shall be dead, and stripped and consumed, I pray you where is he?

14:11. As if the waters should depart out of the sea, and an emptied river should be dried up;

14:12. So man when he is fallen asleep shall not rise again; till the heavens be broken, he shall not awake, nor rise up out of his sleep.

14:13. Who will grant me this, that thou mayst protect me in hell, and hide me till thy wrath pass, and appoint me a time when thou wilt remember me?

That thou mayst protect me in hell.... That is, in the state of the dead; and in the place where the souls are kept waiting for their Redeemer.

14:14. Shall man that is dead, thinkest thou, live again? all the days in which I am now in warfare, I expect until my change come.

14:15. Thou shalt call me, and I will answer thee: to the work of thy hands thou shalt reach out thy right hand.

14:16. Thou indeed hast numbered my steps, but spare my sins.

14:17. Thou hast sealed up my offences as it were in a bag, but hast cured my iniquity.

14:18. A mountain falling cometh to nought, and a rock is removed out of its place.

14:19. Waters wear away the stones, and with inundation the ground by little and little is washed away: so in like manner thou shalt destroy man.

14:20. Thou hast strengthened him for a little while, that he may pass away for ever: thou shalt change his face, and shalt send him away.

14:21. Whether his children come to honour or dishonour, he shall not understand.

14:22. But yet his flesh, while he shall live, shall have pain, and his soul shall mourn over him.

Job Chapter 15
Eliphaz returns to the charge against Job, and describes the wretched state of the wicked.

15:1. And Eliphaz the Themanite, answered, and said:

15:2. Will a wise man answer as if he were speaking in the wind, and fill his stomach with burning heat?

15:3. Thou reprovest him by words, who is not equal to thee, and thou speakest that which is not good for thee.

15:4. As much as is in thee, thou hast made void fear, and hast taken away prayers from before God.

Thou hast made void fear.... That is, cast off the fear of offending God.

15:5. For thy iniquity hath taught thy mouth, and thou imitatest the tongue of blasphemers.

15:6. Thy own mouth shall condemn thee, and not I: and thy own lips shall answer thee.

15:7. Art thou the first man that was born, or wast thou made before the hills?

15:8. Hast thou heard God’s counsel, and shall his wisdom be inferior to thee?

15:9. What knowest thou that we are ignorant of? what dost thou understand that we know not?

15:10. There are with us also aged and ancient men, much elder than thy fathers.

15:11. Is it a great matter that God should comfort thee? but thy wicked words hinder this.

15:12. Why doth thy heart elevate thee, and why dost thou stare with thy eyes, as if they were thinking great things?

15:13. Why doth thy spirit swell against God, to utter such words out of thy mouth?

15:14. What is man that he should be without spot, and he that is born of a woman that he should appear just?

15:15. Behold among his saints none is unchangeable, and the heavens are not pure in his sight.

15:16. How much more is man abominable, and unprofitable, who drinketh iniquity like water?

15:17. I will shew thee, hear me: and I will tell thee what I have seen.

15:18. Wise men confess and hide not their fathers.

Wise men confess and hide not their fathers.... That is, the knowledge and documents they have received from their fathers they are not ashamed to own.

15:19. To whom alone the earth was given, and no stranger hath passed among them.

15:20. The wicked man is proud all his days, and the number of the years of his tyranny is uncertain.

15:21. The sound of dread is always in his ears: and when there is peace, he always suspecteth treason.

15:22. He believeth not that he may return from darkness to light, looking round about for the sword on every side.

15:23. When he moveth himself to seek bread, he knoweth that the day of darkness is ready at his hand.

15:24. Tribulation shall terrify him, and distress shall surround him, as a king that is prepared for the battle.

15:25. For he hath stretched out his hand against God, and hath strengthened himself against the Almighty.

15:26. He hath run against him with his neck raised up, and is armed with a fat neck.

15:27. Fatness hath covered his face, and the fat hangeth down on his sides.

15:28. He hath dwelt in desolate cities, and in desert houses that are reduced into heaps.

15:29. He shall not be enriched, neither shall his substance continue, neither shall he push his root in the earth.

15:30. He shall not depart out of darkness: the flame shall dry up his branches, and he shall be taken away by the breath of his own mouth.

15:31. He shall not believe, being vainly deceived by error, that he may be redeemed with any price.

15:32. Before his days be full he shall perish: and his hands shall wither away.

15:33. He shall be blasted as a vine when its grapes are in the first flower, and as an olive tree that casteth its flower.

15:34. For the congregation of the hypocrite is barren, and fire shall devour their tabernacles, who love to take bribes.

15:35. He hath conceived sorrow, and hath brought forth iniquity, and his womb prepareth deceits.

Job Chapter 16
Job expostulates with his friends: and appeals to the judgment of God.

16:1. Then Job answered, and said:

16:2. I have often heard such things as these: you are all troublesome comforters.

16:3. Shall windy words have no end? or is it any trouble to thee to speak?

16:4. I also could speak like you: and would God your soul were for my soul.

16:5. I would comfort you also with words, and would wag my head over you.

16:6. I would strengthen you with my mouth, and would move my lips, as sparing you.

16:7. But what shall I do? If I speak, my pain will not rest: and if I hold my peace, it will not depart from me.

16:8. But now my sorrow hath oppressed me, and all my limbs are brought to nothing.

16:9. My wrinkles bear witness against me, and a false speaker riseth up against my face, contradicting me.

16:10. He hath gathered together his fury against me, and threatening me he hath gnashed with his teeth upon me: my enemy hath beheld me with terrible eyes.

16:11. They have opened their mouths upon me, and reproaching me they have struck me on the cheek, they are filled with my pains.

16:12. God hath shut me up with the unjust man, and hath delivered me into the hands of the wicked.

16:13. I that was formerly so wealthy, am all on a sudden broken to pieces: he hath taken me by my neck, he hath broken me, and hath set me up to be his mark.

16:14. He hath compassed me round about with his lances, he hath wounded my loins, he hath not spared, and hath poured out my bowels on the earth,

16:15. He hath torn me with wound upon wound, he hath rushed in upon me like a giant.

16:16. I have sowed sackcloth upon my skin, and have covered my flesh with ashes.

16:17. My face is swollen with weeping, and my eyelids are dim.

16:18. These things have I suffered without the iniquity of my hand, when I offered pure prayers to God.

16:19. O earth, cover not thou my blood, neither let my cry find a hiding place in thee.

16:20. For behold my witness is in heaven, and he that knoweth my conscience is on high.

16:21. My friends are full of words: my eye poureth out tears to God.

16:22. And O that a man might so be judged with God, as the son of man is judged with his companion!

16:23. For behold short years pass away, and I am walking in a path by which I shall not return.

Job Chapter 17
Job’s hope in God: he expects rest in death.

17:1. My spirit shall be wasted, my days shall be shortened and only the grave remaineth for me.

17:2. I have not sinned, and my eye abideth in bitterness.

Not sinned.... That is, I am not guilty of such sins as they charge me with.

17:3. Deliver me, O Lord, and set me beside thee, and let any man’s hand fight against me.

17:4. Thou hast set their heart far from understanding, therefore they shall not be exalted.

17:5. He promiseth a prey to his companions, and the eyes of his children shall fail.

17:6. He hath made me as it were a byword of the people, and I am an example before them.

17:7. My eye is dim through indignation, and my limbs are brought as it were to nothing.

17:8. The just shall be astonished at this, and the innocent shall be raised up against the hypocrite.

17:9. And the just man shall hold on his way, and he that hath clean hands shall be stronger and stronger.

17:10. Wherefore be you all converted, and come, and I shall not find among you any wise man.

17:11. My days have passed away, my thoughts are dissipated, tormenting my heart.

17:12. They have turned night into day, and after darkness I hope for light again.

17:13. If I wait hell is my house, and I have made my bed in darkness.

Hell.... Sheol. The region of the dead.

17:14. I have said to rottenness: Thou art my father; to worms, my mother and my sister.

17:15. Where is now then my expectation, and who considereth my patience?

17:16. All that I have shall go down into the deepest pit: thinkest thou that there at least I shall have rest?

Deepest pit.... Literally, hell.

Job Chapter 18
Baldad again reproves Job and describes the miseries of the wicked.

18:1. Then Baldad the Suhite answered, and said:

18:2. How long will you throw out words? understand first, and so let us speak.

18:3. Why are we reputed as beasts, and counted vile before you?

18:4. Thou that destroyest thy soul in thy fury, shall the earth be forsaken for thee, and shall rocks be removed out of their place?

18:5. Shall not the light of the wicked be extinguished, and the flame of his fire not shine?

18:6. The light shall be dark in his tabernacle, and the lamp that is over him, shall be put out.

18:7. The step of his strength shall be straitened, and his own counsel shall cast him down headlong.

18:8. For he hath thrust his feet into a net, and walketh in its meshes.

18:9. The sole of his foot shall be held in a snare, and thirst shall burn against him.

18:10. A gin is hidden for him in the earth, and his trap upon the path.

18:11. Fears shall terrify him on every side, and shall entangle his feet.

18:12. Let his strength be wasted with famine, and let hunger invade his ribs.

18:13. Let it devour the beauty of his skin, let the firstborn death consume his arms.

18:14. Let his confidence be rooted out of his tabernacle, and let destruction tread upon him like a king.

18:15. Let the companions of him that is not, dwell in his tabernacle, let brimstone be sprinkled in his tent.

18:16. Let his roots be dried up beneath, and his harvest destroyed above.

18:17. Let the memory of him perish from the earth, and let not his name be renowned in the streets.

18:18. He shall drive him out of light into darkness, and shall remove him out of the world.

18:19. His seed shall not subsist, nor his offspring among his people, nor any remnants in his country.

18:20. They that come after him shall be astonished at his day, and horror shall fall upon them that went before.

18:21. These then are the tabernacles of the wicked, and this the place of him that knoweth not God.

Job Chapter 19
Job complains of the cruelty of his friends; he describes his own sufferings: and his belief of a future resurrection.

19:1. Then Job answered, and said:

19:2. How long do you afflict my soul, and break me in pieces with words?

19:3. Behold, these ten times you confound me, and are not ashamed to oppress me.

19:4. For if I have been ignorant, my ignorance shall be with me.

19:5. But you set yourselves up against me, and reprove me with my reproaches.

19:6. At least now understand, that God hath not afflicted me with an equal judgment, and compassed me with his scourges.

With an equal judgment.... St. Gregory explains these words thus: Job being a just man, and truly considering his own life, thought that his affliction was greater than his sins deserved: and in that respect, that the punishment was not equal, yet it was just, as coming from God, who gives a crown of justice to those who suffer for righteousness’ sake, and proves the just with tribulations, as gold is tried by fire.

19:7. Behold I shall cry suffering violence, and no one will hear: I shall cry aloud, and there is none to judge.

19:8. He hath hedged in my path round about, and I cannot pass, and in my way he hath set darkness.

19:9. He hath stripped me of my glory, and hath taken the crown from my head.

19:10. He hath destroyed me on every side, and I am lost, and he hath taken away my hope, as from a tree that is plucked up.

19:11. His wrath is kindled against me, and he hath counted me as his enemy.

19:12. His troops have come together, and have made themselves a way by me, and have besieged my tabernacle round about.

19:13. He hath put my brethren far from me, and my acquaintance like strangers have departed from me.

19:14. My kinsmen have forsaken me, and they that knew me, have forgotten me.

19:15. They that dwell in my house, and my maidservants have counted me as a stranger, and I have been like an alien in their eyes.

19:16. I called my servant, and he gave me no answer, I entreated him with my own mouth.

19:17. My wife hath abhorred my breath, and I entreated the children of my womb.

19:18. Even fools despised me, and when I was gone from them, they spoke against me.

19:19. They that were sometime my counsellors, have abhorred me: and he whom I loved most is turned against me.

19:20. The flesh being consumed, my bone hath cleaved to my skin, and nothing but lips are left about my teeth.

19:21. Have pity on me, have pity on me, at least you my friends, because the hand of the Lord hath touched me.

19:22. Why do you persecute me as God, and glut yourselves with my flesh?

19:23. Who will grant me that my words may be written? who will grant me that they may be marked down in a book?

19:24. With an iron pen and in a plate of lead, or else be graven with an instrument in flint stone?

19:25. For I know that my Redeemer liveth, and in the last day I shall rise out of the earth.

Ver. 25, 26, and 27 shew Job’s explicit belief in his Redeemer, and also of the resurrection of the flesh, not as one tree riseth in place of another, but that the selfsame flesh shall rise at the last day, by the power of God, changed in quality but not in substance, every one to receive sentence according to his works in this life.

19:26. And I shall be clothed again with my skin, and in my flesh I shall see my God.

19:27. Whom I myself shall see, and my eyes shall behold, and not another: this my hope is laid up in my bosom.

19:28. Why then do you say now: Let us persecute him, and let us find occasion of word against him?

19:29. Flee then from the face of the sword, for the sword is the revenger of iniquities: and know ye that there is a judgment.

Job Chapter 20
Sophar declares the shortness of the prosperity of the wicked: and their sudden downfall.

20:1. Then Sophar the Naamathite answered, and said:

20:2. Therefore various thoughts succeed one another in me, and my mind is hurried away to different things.

20:3. The doctrine with which thou reprovest me, I will hear, and the spirit of my understanding shall answer for me.

20:4. This I know from the beginning, since man was placed upon the earth,

20:5. That the praise of the wicked is short, and the joy of the hypocrite but for a moment.

20:6. If his pride mount up even to heaven, and his head touch the clouds:

20:7. In the end he shall be destroyed like a dunghill, and they that had seen him, shall say: Where is he?

20:8. As a dream that fleeth away he shall not be found, he shall pass as a vision of the night:

20:9. The eyes that had seen him, shall see him no more, neither shall his place any more behold him.

20:10. His children shall be oppressed with want, and his hands shall render to him his sorrow.

20:11. His bones shall be filled with the vices of his youth, and they shall sleep with him in the dust.

20:12. For when evil shall be sweet in his mouth, he will hide it under his tongue.

20:13. He will spare it, and not leave it, and will hide it in his throat.

20:14. His bread in his belly shall be turned into the gall of asps within him,

20:15. The riches which he hath swallowed, he shall vomit up, and God shall draw them out of his belly.

20:16. He shall suck the head of asps, and the viper’s tongue shall kill him.

20:17. Let him not see the streams of the river, the brooks of honey and of butter.

20:18. He shall be punished for all that he did, and yet shall not be consumed: according to the multitude of his devices so also shall he suffer.

According to the multitude of his devices.... That is, his stratagems to gratify his passions and to oppress and destroy the poor.

20:19. Because he broke in and stripped the poor: he hath violently taken away a house which he did not build.

20:20. And yet his belly was not filled: and when he hath the things he coveted, he shall not be able to possess them.

20:21. There was nothing left of his meat, and therefore nothing shall continue of his goods:

20:22. When he shall be filled, he shall be straitened, he shall burn, and every sorrow shall fall upon him.

20:23. May his belly be filled, that God may send forth the wrath of his indignation upon him, and rain down his war upon him.

20:24. He shall flee from weapons of iron, and shall fall upon a bow of brass.

20:25. The sword is drawn out, and cometh forth from its scabbard, and glittereth in his bitterness: the terrible ones shall go and come upon him.

20:26. All darkness is hid in his secret places: a fire that is not kindled shall devour him, he shall be afflicted when left in his tabernacle.

20:27. The heavens shall reveal his iniquity, and the earth shall rise up against him.

20:28. The offspring of his house shall be exposed, he shall be pulled down in the day of God’s wrath.

20:29. This is the portion of a wicked man from God, and the inheritance of his doings from the Lord.

Job Chapter 21
Job shews that the wicked often prosper in this world, even to the end of their life: but that their judgment is in another world.

21:1. Then Job answered, and said:

21:2. Hear, I beseech you, my words, and do penance.

21:3. Suffer me, and I will speak, and after, if you please, laugh at my words.

21:4. Is my debate against man, that I should not have just reason to be troubled?

21:5. Hearken to me and be astonished, and lay your finger on your mouth.

21:6. As for me, when I remember, I am afraid, and trembling taketh hold on my flesh.

21:7. Why then do the wicked live, are they advanced, and strengthened with riches?

21:8. Their seed continueth before them, a multitude of kinsmen, and of children’s children in their sight.

21:9. Their houses are secure and peaceable, and the rod of God is not upon them.

21:10. Their cattle have conceived, and failed not: their cow has calved, and is not deprived of her fruit.

21:11. Their little ones go out like a flock, and their children dance and play.

21:12. They take the timbrel, and the harp, and rejoice at the sound of the organ.

21:13. They spend their days in wealth, and in a moment they go down to hell.

21:14. Who have said to God: Depart from us, we desire not the knowledge of thy ways.

21:15. Who is the Almighty, that we should serve him? and what doth it profit us if we pray to him?

21:16. Yet because their good things are not in their hand, may the counsel of the wicked be far from me.

21:17. How often shall the lamp of the wicked be put out, and a deluge come upon them, and he shall distribute the sorrows of his wrath?

21:18. They shall be as chaff before the face of the wind, and as ashes which the whirlwind scattereth.

21:19. God shall lay up the sorrow of the father for his children: and when he shall repay, then shall he know.

21:20. His eyes shall see his own destruction, and he shall drink of the wrath of the Almighty.

21:21. For what is it to him what befalleth his house after him: and if the number of his months be diminished by one half?

21:22. Shall any one teach God knowledge, who judgeth those that are high?

21:23. One man dieth strong, and hale, rich and happy.

21:24. His bowels are full of fat, and his bones are moistened with marrow.

21:25. But another dieth in bitterness of soul without any riches:

21:26. And yet they shall sleep together in the dust, and worms shall cover them.

21:27. Surely I know your thoughts, and your unjust judgments against me.

21:28. For you say: Where is the house of the prince? and where are the dwelling places of the wicked?

21:29. Ask any one of them that go by the way, and you shall perceive that he knoweth these same things.

21:30. Because the wicked man is reserved to the day of destruction, and he shall be brought to the day of wrath.

21:31. Who shall reprove his way to his face? and who shall repay him what he hath done?

21:32. He shall be brought to the graves, and shall watch in the heap of the dead.

21:33. He hath been acceptable to the gravel of Cocytus, and he shall draw every man after him, and there are innumerable before him.

Acceptable to the gravel of Cocytus.... The Hebrew word, which St. Jerome has here rendered by the name Cocytus, (which the poets represent as a river in hell,) signifies a valley or a torrent: and in this place, is taken for the low region of death and hell: which willingly, as it were, receives the wicked at their death: who are ushered in by innumerable others that have gone before them; and are followed by multitudes above number.

21:34. How then do ye comfort me in vain, whereas your answer is shewn to be repugnant to truth?

Job Chapter 22
Eliphaz falsely imputes many crimes to Job, but promises him prosperity if he will repent.

22:1. Then Eliphaz the Themanite answered, and said:

22:2. Can man be compared with God, even though he were of perfect knowledge?

22:3. What doth it profit God if thou be just? or what dost thou give him if thy way be unspotted?

22:4. Shall he reprove thee for fear, and come with thee into judgment:

22:5. And not for thy manifold wickedness and thy infinite iniquities?

22:6. For thou hast taken away the pledge of thy brethren without cause, and stripped the naked of their clothing.

22:7. Thou hast not given water to the weary, thou hast withdrawn bread from the hungry.

22:8. In the strength of thy arm thou didst possess the land, and being the most mighty thou holdest it.

22:9. Thou hast sent widows away empty, and the arms of the fatherless thou hast broken in pieces.

22:10. Therefore art thou surrounded with snares, and sudden fear troubleth thee.

22:11. And didst thou think that thou shouldst not see darkness, and that thou shouldst not be covered with the violence of overflowing waters?

22:12. Dost not thou think that God is higher than heaven, and is elevated above the height of the stars?

22:13. And thou sayst: What doth God know? and he judgeth as it were through a mist.

22:14. The clouds are his covert, and he doth not consider our things, and he walketh about the poles of heaven.

22:15. Dost thou desire to keep the path of ages, which wicked men have trodden?

22:16. Who were taken away before their time, and a flood hath overthrown their foundation.

22:17. Who said to God: Depart from us: and looked upon the Almighty as if he could do nothing:

22:18. Whereas he had filled their houses with good things: whose way of thinking be far from me.

22:19. The just shall see, and shall rejoice, and the innocent shall laugh them to scorn.

22:20. Is not their exaltation cut down, and hath not fire devoured the remnants of them?

22:21. Submit thyself then to him, and be at peace: and thereby thou shalt have the best fruits.

22:22. Receive the law of his mouth, and lay up his words in thy heart.

22:23. If thou wilt return to the Almighty, thou shalt be built up, and shalt put away iniquity far from thy tabernacle.

22:24. He shall give for earth flint, and for flint torrents of gold.

22:25. And the Almighty shall be against thy enemies, and silver shall be heaped together for thee.

22:26. Then shalt thou abound in delights in the Almighty, and shalt lift up thy face to God.

22:27. Thou shalt pray to him, and he will hear thee, and thou shalt pay vows.

22:28. Thou shalt decree a thing, and it shall come to thee, and light shall shine in thy ways.

22:29. For he that hath been humbled, shall be in glory: and he that shall bow down his eyes, he shall be saved.

22:30. The innocent shall be saved, and he shall be saved by the cleanness of his hands.

Job Chapter 23
Job wishes to be tried at God’s tribunal.

23:1. Then Job answered, and said:

23:2. Now also my words are in bitterness, and the hand of my scourge is more grievous than my mourning.

23:3. Who will grant me that I might know and find him, and come even to his throne?

23:4. I would set judgment before him, and would fill my mouth with complaints.

23:5. That I might know the words that he would answer me, and understand what he would say to me.

23:6. I would not that he should contend with me with much strength, nor overwhelm me with the weight of his greatness.

23:7. Let him propose equity against me, and let my judgment come to victory.

23:8. But if I go to the east, he appeareth not; if to the west, I shall not understand him.

23:9. If to the left hand, what shall I do? I shall not take hold on him: if I turn myself to the right hand, I shall not see him.

23:10. But he knoweth my way, and has tried me as gold that passeth through the fire:

23:11. My foot hath followed his steps, I have kept his way, and have not declined from it.

23:12. I have not departed from the commandments of his lips, and the words of his mouth I have hid in my bosom.

23:13. For he is alone, and no man can turn away his thought: and whatsoever his soul hath desired, that hath he done.

23:14. And when he shall have fulfilled his will in me, many other like things are also at hand with him.

23:15. And therefore I am troubled at his presence, and when I consider him I am made pensive with fear.

23:16. God hath softened my heart, and the Almighty hath troubled me.

23:17. For I have not perished because of the darkness that hangs over me, neither hath the mist covered my face.

Job Chapter 24
God’s providence often suffers the wicked to go on a long time in their sins: but punisheth them in another life.

24:1. Times are not hid from the Almighty: but they that know him, know not his days.

24:2. Some have removed landmarks, have taken away flocks by force, and fed them.

24:3. They have driven away the ass of the fatherless, and have taken away the widow’s ox for a pledge.

24:4. They have overturned the way of the poor, and have oppressed together the meek of the earth.

24:5. Others like wild asses in the desert go forth to their work: by watching for a prey they get bread for their children.

24:6. They reap the field that is not their own, and gather the vintage of his vineyard whom by violence they have oppressed.

24:7. They send men away naked, taking away their clothes who have no covering in the cold:

24:8. Who are wet, with the showers of the mountains, and having no covering embrace the stones.

24:9. They have violently robbed the fatherless, and stripped the poor common people.

24:10. From the naked and them that go without clothing, and from the hungry they have taken away the ears of corn.

24:11. They have taken their rest at noon among the stores of them, who after having trodden the winepresses suffer thirst.

24:12. Out of the cities they have made men to groan, and the soul of the wounded hath cried out, and God doth not suffer it to pass unrevenged.

24:13. They have been rebellious to the light, they have not known his ways, neither have they returned by his paths.

24:14. The murderer riseth at the very break of day, he killeth the needy, and the poor man: but in the night he will be as a thief.

24:15. The eye of the adulterer observeth darkness, saying: No eye shall see me: and he will cover his face.

24:16. He diggeth through houses in the dark, as in the day they had appointed for themselves, and they have not known the light.

24:17. If the morning suddenly appear, it is to them the shadow of death: and they walk in darkness as if it were in light.

24:18. He is light upon the face of the water: cursed be his portion on the earth, let him not walk by the way of the vineyards.

24:19. Let him pass from the snow waters to excessive heat, and his sin even to hell.

24:20. Let mercy forget him: may worms be his sweetness: let him be remembered no more, but be broken in pieces as an unfruitful tree.

24:21. For he hath fed the barren that beareth not, and to the widow he hath done no good.

24:22. He hath pulled down the strong by his might: and when he standeth up, he shall not trust to his life.

24:23. God hath given him place for penance, and he abuseth it unto pride: but his eyes are upon his ways.

24:24. They are lifted up for a little while and shall not stand, and shall be brought down as all things, and shall be taken away, and as the tops of the ears of corn they shall be broken.

24:25. And if it be not so, who can convince me that I have lied, and set my words before God?

Job Chapter 25
Baldad represents the justice of God, before whom no man can be justified.

25:1. Then Baldad the Suhite answered, and I said:

25:2. Power and terror are with him, who maketh peace in his high places.

25:3. Is there any numbering of his soldiers? and upon whom shall not his light arise?

25:4. Can man be justified compared with God, or he that is born of a woman appear clean?

25:5. Behold even the moon doth not shine, and the stars are not pure in his sight.

25:6. How much less man that is rottenness and the son of man who is a worm?

Job Chapter 26
Job declares his sentiments of the wisdom and power of God.

26:1. Then Job answered, and said:

26:2. Whose helper art thou? is it of him that is weak? and dost thou hold up the arm of him that has no strength?

26:3. To whom hast thou given counsel? perhaps to him that hath no wisdom, and thou hast shewn thy very great prudence.

26:4. Whom hast thou desired to teach? was it not him that made life?

26:5. Behold the giants groan under the waters, and they that dwell with them.

26:6. Hell is naked before him, and there is no covering for destruction.

26:7. He stretched out the north over the empty space, and hangeth the earth upon nothing.

26:8. He bindeth up the waters in his clouds, so that they break not out and fall down together.

26:9. He withholdeth the face of his throne, and spreadeth his cloud over it.

26:10. He hath set bounds about the waters, till light and darkness come to an end.

26:11. The pillars of heaven tremble, and dread at his beck.

26:12. By his power the seas are suddenly gathered together, and his wisdom has struck the proud one.

26:13. His spirit hath adorned the heavens, and his obstetric hand brought forth the winding serpent.

His obstetric hand brought forth the winding serpent.... That is, the omnipotent power of God: which brought forth all things created in time, but conceived in the Divine mind from all eternity. The winding serpent, a constellation of fixed stars winding round the north pole, called Draco. This appears from the foregoing part of the same verse, His spirit hath adorned the heavens.

26:14. Lo, these things are said in part of his ways: and seeing we have heard scarce a little drop of his word, who shall be able to behold the thunder of his greatness?

Job Chapter 27
Job persists in asserting his own innocence, and that hypocrites will be punished in the end.

27:1. Job also added, taking up his parable, and said:

27:2. As God liveth, who hath taken away my judgment, and the Almighty, who hath brought my soul to bitterness,

27:3. As long as breath remaineth in me, and the spirit of God in my nostrils,

27:4. My lips shall not speak iniquity, neither shall my tongue contrive lying.

27:5. God forbid that I should judge you to be just: till I die I will not depart from my innocence.

27:6. My justification, which I have begun to hold, I will not forsake: for my heart doth not reprehend me in all my life.

27:7. Let my enemy be as the ungodly, and my adversary as the wicked one.

27:8. For what is the hope of the hypocrite if through covetousness he take by violence, and God deliver not his soul?

27:9. Will God hear his cry, when distress shall come upon him?

27:10. Or can he delight himself in the Almighty, and call upon God at all times?

27:11. I will teach you by the hand of God, what the Almighty hath, and I will not conceal it.

27:12. Behold you all know it, and why do you speak vain things without cause?

27:13. This is the portion of a wicked man with God, and the inheritance of the violent, which they shall receive of the Almighty.

27:14. If his sons be multiplied, they shall be for the sword, and his grandsons shall not be filled with bread.

27:15. They that shall remain of him, shall be buried in death, and his widows shall not weep.

27:16. If he shall heap together silver as earth, and prepare raiment as clay,

27:17. He shall prepare indeed, but the just man shall be clothed with it: and the innocent shall divide the silver.

27:18. He hath built his house as a moth, and as a keeper he hath made a booth.

27:19. The rich man when he shall sleep shall take away nothing with him: he shall open his eyes and find nothing.

27:20. Poverty like water shall take hold on him, a tempest shall oppress him in the night:

27:21. A burning wind shall take him up, and carry him away, and as a whirlwind shall snatch him from his place.

27:22. And he shall cast upon him, and shall not spare: out of his hand he would willingly flee.

27:23. He shall clasp his hands upon him, and shall hiss at him, beholding his place.

Job Chapter 28
Man’s industry searcheth out many things: true wisdom is taught by God alone.

28:1. Silver hath beginnings of its veins, and gold hath a place wherein it is melted.

28:2. Iron is taken out of the earth, and stone melted with heat is turned into brass.

28:3. He hath set a time for darkness, and the end of all things he considereth, the stone also that is in the dark and the shadow of death.

28:4. The flood divideth from the people that are on their journey, those whom the food of the needy man hath forgotten, and who cannot be come at.

28:5. The land, out of which bread grew in its place, hath been overturned with fire.

28:6. The stones of it are the place of sapphires, and the clods of it are gold.

28:7. The bird hath not known the path, neither hath the eye of the vulture beheld it.

28:8. The children of the merchants have not trodden it, neither hath the lioness passed by it.

28:9. He hath stretched forth his hand to the flint, he hath overturned mountains from the roots.

28:10. In the rocks he hath cut out rivers, and his eye hath seen every precious thing.

28:11. The depths also of rivers he hath searched, and hidden things he hath brought forth to light.

28:12. But where is wisdom to be found, and where is the place of understanding?

28:13. Man knoweth not the price thereof, neither is it found in the land of them that live in delights.

28:14. The depth saith: It is not in me: and the sea saith: It is not with me.

28:15. The finest gold shall not purchase it, neither shall silver be weighed in exchange for it.

28:16. It shall not be compared with the dyed colours of India, or with the most precious stone sardonyx, or the sapphire.

28:17. Gold or crystal cannot equal it, neither shall any vessels of gold be changed for it.

28:18. High and eminent things shall not be mentioned in comparison of it: but wisdom is drawn out of secret places.

28:19. The topaz of Ethiopia shall not be equal to it, neither shall it be compared to the cleanest dyeing.

28:20. Whence then cometh wisdom? and where is the place of understanding?

28:21. It is hid from the eyes of all living, and the fowls of the air know it not.

28:22. Destruction and death have said: With our ears we have heard the fame thereof.

28:23. God understandeth the way of it, and he knoweth the place thereof.

28:24. For he beholdeth the ends of the world: and looketh on all things that are under heaven.

28:25. Who made a weight for the winds, and weighed the waters by measure.

28:26. When he gave a law for the rain, and a way for the sounding storms.

28:27. Then he saw it, and declared, and prepared, and searched it.

28:28. And he said to man: Behold the fear of the Lord, that is wisdom: and to depart from evil, is understanding.

Job Chapter 29
Job relates his former happiness, and the respect that all men shewed him.

29:1. Job also added, taking up his parable, and said:

29:2. Who will grant me, that I might be according to the months past, according to the days in which God kept me?

29:3. When his lamp shined over my head, and I walked by his light in darkness?

29:4. As I was in the days of my youth, when God was secretly in my tabernacle?

29:5. When the Almighty was with me: and my servants round about me?

29:6. When I washed my feet with butter, and the rock poured me out rivers of oil?

29:7. When I went out to the gate of the city, and in the street they prepared me a chair?

29:8. The young men saw me, and hid themselves: and the old men rose up and stood.

29:9. The princes ceased to speak, and laid the finger on their mouth.

29:10. The rulers held their peace, and their tongue cleaved to their throat.

29:11. The ear that heard me blessed me, and the eye that saw me gave witness to me:

29:12. Because I had delivered the poor man that cried out; and the fatherless, that had no helper.

29:13. The blessing of him that was ready to perish came upon me, and I comforted the heart of the widow.

29:14. I was clad with justice: and I clothed myself with my judgment, as with a robe and a diadem.

29:15. I was an eye to the blind, and a foot to the lame.

29:16. I was the father of the poor: and the cause which I knew not, I searched out most diligently.

29:17. I broke the jaws of the wicked man, and out of his teeth I took away the prey.

29:18. And I said: I shall die in my nest, and as a palm tree shall multiply my days.

29:19. My root is opened beside the waters, and dew shall continue in my harvest.

29:20. My glory shall always be renewed, and my bow in my hand shall be repaired.

29:21. They that heard me, waited for my sentence, and being attentive held their peace at my counsel.

29:22. To my words they durst add nothing, and my speech dropped upon them.

29:23. They waited for me as for rain, and they opened their mouth as for a latter shower.

29:24. If at any time I laughed on them, they believed not, and the light of my countenance fell not on earth.

29:25. If I had a mind to go to them, I sat first, and when I sat as a king, with his army standing about him, yet I was a comforter of them that mourned.

Job Chapter 30
Job shews the wonderful change of his temporal estate, from welfare to great calamity.

30:1. But now the younger in time scorn me, whose fathers I would not have set with the dogs of my flock:

But now the younger in time.... That is, younger than I am, and as it were obscure, when I was conspicuous and in magnificence; they now look down on me.

30:2. The strength of whose hands was to me as nothing, and they were thought unworthy of life itself.

30:3. Barren with want and hunger, who gnawed in the wilderness, disfigured with calamity and misery.

30:4. And they ate grass, and barks of trees, and the root of junipers was their food.

30:5. Who snatched up these things out of the valleys, and when they had found any of them, they ran to them with a cry.

30:6. They dwelt in the desert places of torrents, and in caves of earth, or upon the gravel.

30:7. They pleased themselves among these kind of things, and counted it delightful to be under the briers.

30:8. The children of foolish and base men, and not appearing at all upon the earth.

30:9. Now I am turned into their song, and am become their byword.

30:10. They abhor me, and flee far from me, and are not afraid to spit in my face.

30:11. For he hath opened his quiver, and hath afflicted me, and hath put a bridle into my mouth.

30:12. At the right hand of my rising, my calamities forthwith arose: they have overthrown my feet, and have overwhelmed me with their paths as with waves.

30:13. They have destroyed my ways, they have lain in wait against me, and they have prevailed, and there was none to help.

30:14. They have rushed in upon me, as when a wall is broken, and a gate opened, and have rolled themselves down to my miseries.

30:15. I am brought to nothing: as a wind thou hast taken away my desire: and my prosperity hath passed away like a cloud.

30:16. And now my soul fadeth within myself, and the days of affliction possess me.

30:17. In the night my bone is pierced with sorrows: and they that feed upon me, do not sleep.

30:18. With the multitude of them my garment is consumed, and they have girded me about, as with the collar of my coat.

30:19. I am compared to dirt, and am likened to embers and ashes.

30:20. I cry to thee, and thou hearest me not: I stand up, and thou dost not regard me.

30:21. Thou art changed to be cruel toward me, and in the hardness of thy hand thou art against me.

30:22. Thou hast lifted me up, and set me as it were upon the wind, and thou hast mightily dashed me.

30:23. I know that thou wilt deliver me to death, where a house is appointed for every one that liveth.

30:24. But yet thou stretchest not forth thy hand to their consumption: and if they shall fall down thou wilt save.

30:25. I wept heretofore for him that was afflicted, and my soul had compassion on the poor.

30:26. I expected good things, and evils are come upon me: I waited for light, and darkness broke out.

30:27. My inner parts have boiled without any rest, the days of affliction have prevented me.

30:28. I went mourning without indignation; I rose up, and cried in the crowd.

30:29. I was the brother of dragons, and companion of ostriches.

Brother of dragons, etc.... Imitating these creatures in their lamentable noise.

30:30. My skin is become black upon me, and my bones are dried up with heat.

30:31. My harp is turned to mourning, and my organ into the voice of those that weep.

Job Chapter 31
Job, to defend himself from the unjust judgments of his friends, gives a sincere account of his own virtues.

31:1. I made a covenant with my eyes, that I would not so much as think upon a virgin.

31:2. For what part should God from above have in me, and what inheritance the Almighty from on high?

31:3. Is not destruction to the wicked, and aversion to them that work iniquity?

31:4. Doth not he consider my ways, and number all my steps?

31:5. If I have walked in vanity, and my foot hath made haste to deceit:

31:6. Let him weigh me in a just balance, and let God know my simplicity.

31:7. If my step hath turned out of the way, and if my heart hath followed my eyes, and if a spot hath cleaved to my hands:

31:8. Then let me sow and let another reap: and let my offspring be rooted out.

31:9. If my heart hath been deceived upon a woman, and if I have laid wait at my friend’s door:

31:10. Let my wife be the harlot of another, and let other men lie with her.

31:11. For this is a heinous crime, and a most grievous iniquity.

31:12. It is a fire that devoureth even to destruction, and rooteth up all things that spring.

31:13. If I have despised to abide judgment with my manservant, or my maidservant, when they had any controversy against me:

31:14. For what shall I do when God shall rise to judge? and when he shall examine, what shall I answer him?

31:15. Did not he that made me in the womb make him also: and did not one and the same form me in the womb?

31:16. If I have denied to the poor what they desired, and have made the eyes of the widow wait:

31:17. If I have eaten my morsel alone, and the fatherless hath not eaten thereof:

31:18. (For from my infancy mercy grew up with me: and it came out with me from my mother’s womb:)

31:19. If I have despised him that was perishing for want of clothing, and the poor man that had no covering:

31:20. If his sides have not blessed me, and if he were not warmed with the fleece of my sheep:

31:21. If I have lifted up my hand against the fatherless, even when I saw myself superior in the gate:

31:22. Let my shoulder fall from its joint, and let my arm with its bones be broken.

31:23. For I have always feared God as waves swelling over me, and his weight I was unable to bear.

31:24. If I have thought gold my strength, and have said to fine gold: My confidence:

31:25. If I have rejoiced over my great riches, and because my hand had gotten much.

31:26. If I beheld the sun when it shined and the moon going in brightness:

If I beheld the sun, etc.... If I behold the sun and moon with admiration, knowing them to be created and governed by the power of God, I call on my adversaries to produce any thing against me, whereby I could be charged with worshipping the sun or moon.

31:27. And my heart in secret hath rejoiced, and I have kissed my hand with, my mouth:

31:28. Which is a very great iniquity, and a denial against the most high God.

31:29. If I have been glad at the downfall of him that hated me, and have rejoiced that evil had found him.

31:30. For I have not given my mouth to sin, by wishing a curse to his soul.

31:31. If the men of my tabernacle have not said: Who will give us of his flesh that we may be filled?

31:32. The stranger did not stay without, my door was open to the traveller.

31:33. If as a man I have hid my sin, and have concealed my iniquity in my bosom.

31:34. If I have been afraid at a very great multitude, and the contempt of kinsmen hath terrified me: and have not rather held my peace, and not gone out of the door.

31:35. Who would grant me a hearing, that the Almighty may hear my desire: and that he himself that judgeth would write a book,

31:36. That I may carry it on my shoulder, and put it about me as a crown?

31:37. At every step of mine I would pronounce it, and offer it as to a prince.

31:38. If my land cry against me, and with it the furrows thereof mourn:

31:39. If I have eaten the fruits thereof without money, and have afflicted the soul of the tillers thereof:

31:40. Let thistles grow up to me instead of wheat, and thorns instead of barley.

The words of Job are ended.

Job Chapter 32
Eliu is angry with Job and his friends. He boasts of himself.

32:1. So these three men ceased to answer Job, because he seemed just to himself.

32:2. And Eliu the son of Barachel the Buzite of the kindred of Ram, was angry and was moved to indignation: now he was angry against Job, because he said he was just before God.

32:3. And he was angry with his friends, because they had not found a reasonable answer, but only had condemned Job.

32:4. So Eliu waited while Job was speaking because they were his elders that were speaking.

32:5. But when he saw that the three were not able to answer, he was exceedingly angry.

32:6. Then Eliu the son of Barachel the Buzite answered, and said: I am younger in days, and you are more ancient, therefore hanging down my head, I was afraid to shew you my opinion.

32:7. For I hoped that greater age would speak, and that a multitude of years would teach wisdom.

32:8. But, as I see, there is a spirit in men, and the inspiration of the Almighty giveth understanding.

32:9. They that are aged are not the wise men, neither do the ancients understand judgment.

32:10. Therefore I will speak: Hearken to me, I also will shew you my wisdom.

32:11. For I have waited for your words, I have given ear to your wisdom, as long as you were disputing in words.

32:12. And as long as I thought you said some thing, I considered: but, as I see, there is none of you that can convince Job, and answer his words.

32:13. Lest you should say: We have found wisdom, God hath cast him down, not man.

32:14. He hath spoken nothing to me, and I will not answer him according to your words.

32:15. They were afraid, and answered no more, and they left off speaking.

32:16. Therefore because I have waited, and they have not spoken: they stood, and answered no more:

32:17. I also will answer my part, and will shew my knowledge.

32:18. For I am full of matter to speak of, and the spirit of my bowels straiteneth me.

32:19. Behold, my belly is as new wine which wanteth vent, which bursteth the new vessels.

32:20. I will speak and take breath a little: I will open my lips, and will answer.

32:21. I will not accept the person of man, and I will not level God with man.

I will not level God with man.... Here Eliu considers that Job hath put himself on a level with God, by the manner he assumed to justify his own life in speaking to God as if he spoke to an equal: Eliu expresses in the following ver. 22 his fear of punishment hereafter for such an attempt.

32:22. For I know not how long I shall continue, and whether after a while my Maker may take me away.

Job Chapter 33
Eliu blames Job for asserting his own innocence.

33:1. Hear therefore, O Job, my speeches, and hearken to all my words.

33:2. Behold now I have opened my mouth, let my tongue speak within my jaws.

33:3. My words are from my upright heart, and my lips shall speak a pure sentence.

33:4. The spirit of God made me, and the breath of the Almighty gave me life.

33:5. If thou canst, answer me, and stand up against my face.

33:6. Behold God hath made me as well as thee, and of the same clay I also was formed.

33:7. But yet let not my wonder terrify thee, and let not my eloquence be burdensome to thee.

33:8. Now thou hast said in my hearing, and I have heard the voice of thy words:

33:9. I am clean, and without sin: I am unspotted, and there is no iniquity in me.

33:10. Because he hath found complaints against me, therefore he hath counted me for his enemy.

33:11. He hath put my feet in the stocks, he hath observed all my paths.

33:12. Now this is the thing in which thou art not justified: I will answer thee, that God is greater than man.

33:13. Dost thou strive against him, because he hath not answered thee to all words?

33:14. God speaketh once, and repeateth not the selfsame thing the second time.

33:15. By a dream in a vision by night, when deep sleep falleth upon men, and they are sleeping in their beds:

33:16. Then he openeth the ears of men, and teaching instructeth them in what they are to learn.

33:17. That he may withdraw a man from the things he is doing, and may deliver him from pride.

33:18. Rescuing his soul from corruption: and his life from passing to the sword.

33:19. He rebuketh also by sorrow in the bed, and he maketh all his bones to wither.

33:20. Bread becometh abominable to him in his life, and to his soul the meat which before he desired.

33:21. His flesh shall be consumed away, and his bones that were covered shall be made bare.

33:22. His soul hath drawn near to corruption, and his life to the destroyers.

33:23. If there shall be an angel speaking for him, one among thousands, to declare man’s uprightness,

33:24. He shall have mercy on him, and shall say: Deliver him, that he may not go down to corruption: I have found wherein I may be merciful to him.

33:25. His flesh is consumed with punishments, let him return to the days of his youth.

33:26. He shall pray to God, and he will be gracious to him: and he shall see his face with joy, and he will render to man his justice.

33:27. He shall look upon men, and shall say: I have sinned, and indeed I have offended, and I have not received what I have deserved.

33:28. He hath delivered his soul from going into destruction, that it may live and see the light.

33:29. Behold, all these things God worketh three times within every one.

33:30. That he may withdraw their souls from corruption, and enlighten them with the light of the living.

33:31. Attend, Job, and hearken to me, and hold thy peace, whilst I speak.

33:32. But if thou hast any thing to say, answer me, speak: for I would have thee to appear just.

33:33. And if thou have not, hear me: hold thy peace, and I will teach thee wisdom.

Job Chapter 34
Eliu charges Job with blasphemy: and sets forth the power and justice of God.

34:1. And Eliu continued his discourse, and said:

34:2. Hear ye, wise men, my words, and ye learned, hearken to me:

34:3. For the ear trieth words, and the mouth discerneth meats by the taste.

34:4. Let us choose to us judgment, and let us see among ourselves what is the best.

34:5. For Job hath said: I am just, and God hath overthrown my judgment.

34:6. For in judging me there is a lie: my arrow is violent without any sin.

34:7. What man is there like Job, who drinketh up scorning like water?

34:8. Who goeth in company with them that work iniquity, and walketh with wicked men?

34:9. For he hath said: Man shall not please God, although he run with him.

34:10. Therefore, ye men of understanding, hear me: far from God be wickedness, and iniquity from the Almighty.

34:11. For he will render to a man his work, and according to the ways of every one he will reward them.

34:12. For in very deed God will not condemn without cause, neither will the Almighty pervert judgment.

34:13. What other hath he appointed over the earth? or whom hath he set over the world which he made?

34:14. If he turn his heart to him, he shall draw his spirit and breath unto himself.

34:15. All flesh shall perish together, and man shall return into ashes.

34:16. If then thou hast understanding, hear what is said, and hearken to the voice of my words.

34:17. Can he be healed that loveth not judgment? and how dost thou so far condemn him that is just?

34:18. Who saith to the king: Thou art an apostate: who calleth rulers ungodly:

34:19. Who accepteth not the persons of princes: nor hath regarded the tyrant, when he contended against the poor man: for all are the work of his hands.

34:20. They shall suddenly die, and the people shall be troubled at midnight, and they shall pass, and take away the violent without hand.

34:21. For his eyes are upon the ways of men, and he considereth all their steps.

34:22. There is no darkness, and there is no shadow of death, where they may be hid who work iniquity.

34:23. For it is no longer in the power of man to enter into judgment with God.

34:24. He shall break in pieces many and innumerable, and shall make others to stand in their stead.

34:25. For he knoweth their works: and therefore he shall bring night on them, and they shall be destroyed.

34:26. He hath struck them, as being wicked, in open sight.

34:27. Who as it were on purpose have revolted from him, and would not understand all his ways:

34:28. So that they caused the cry of the needy to come to him, and he heard the voice of the poor.

34:29. For when he granteth peace, who is there that can condemn? When he hideth his countenance, who is there that can behold him, whether it regard nations, or all men?

34:30. Who maketh a man that is a hypocrite to reign for the sins of the people?

34:31. Seeing then I have spoken of God, I will not hinder thee in thy turn.

34:32. If I have erred, teach thou me: if I have spoken iniquity, I will add no more.

34:33. Doth God require it of thee, because it hath displeased thee? for thou begannest to speak, and not I: but if thou know any thing better, speak.

34:34. Let men of understanding speak to me, and let a wise man hearken to me.

34:35. But Job hath spoken foolishly, and his words sound not discipline.

34:36. My father, let Job be tried even to the end: cease not from the man of iniquity.

34:37. Because he addeth blasphemy upon his sins, let him be tied fast in the mean time amongst us: and then let him provoke God to judgment with his speeches.

Job Chapter 35
Eliu declares that the good or evil done by man cannot reach God.

35:1. Moreover Eliu spoke these words:

35:2. Doth thy thought seem right to thee, that thou shouldst say: I am more just than God?

35:3. For thou saidst: That which is right doth not please thee: or what will it profit thee if I sin?

35:4. Therefore I will answer thy words, and thy friends with thee.

35:5. Look up to heaven and see, and behold the sky, that it is higher than thee.

35:6. If thou sin, what shalt thou hurt him? and if thy iniquities be multiplied, what shalt thou do against him?

35:7. And if thou do justly, what shalt thou give him, or what shall he receive of thy hand?

35:8. Thy wickedness may hurt a man that is like thee: and thy justice may help the son of man.

35:9. By reason of the multitude of oppressors they shall cry out: and shall wail for the violence of the arm of tyrants.

35:10. And he hath not said: Where is God, who made me, who hath given songs in the night?

35:11. Who teacheth us more than the beasts of the earth, and instructeth us more than the fowls of the air.

35:12. There shall they cry, and he will not hear, because of the pride of evil men.

35:13. God therefore will not hear in vain, and the Almighty will look into the causes of every one.

35:14. Yea, when thou shalt say: He considereth not: be judged before him, and expect him.

35:15. For he doth not now bring on his fury, neither doth he revenge wickedness exceedingly.

35:16. Therefore Job openeth his mouth in vain, and multiplieth words without knowledge.

Job Chapter 36
Eliu proceeds in setting forth the justice and power of God.

36:1. Eliu also proceeded, and said:

36:2. Suffer me a little, and I will shew thee: for I have yet somewhat to speak in God’s behalf.

36:3. I will repeat my knowledge from the beginning, and I will prove my Maker just.

36:4. For indeed my words are without a lie, and perfect knowledge shall be proved to thee.

36:5. God doth not cast away the mighty, whereas he himself also is mighty.

36:6. But he saveth not the wicked, and he giveth judgment to the poor.

36:7. He will not take away his eyes from the just, and he placeth kings on the throne for ever, and they are exalted.

36:8. And if they shall be in chains, and be bound with the cords of poverty:

36:9. He shall shew them their works, and their wicked deeds, because they have been violent.

36:10. He also shall open their ear, to correct them: and shall speak, that they may return from iniquity.

36:11. If they shall hear and observe, they shall accomplish their days in good, and their years in glory.

36:12. But if they hear not, they shall pass by the sword, and shall be consumed in folly.

36:13. Dissemblers and crafty men prove the wrath of God, neither shall they cry when they are bound.

36:14. Their soul shall die in a storm, and their life among the effeminate.

36:15. He shall deliver the poor out of his distress, and shall open his ear in affliction.

36:16. Therefore he shall set thee at large out of the narrow mouth, and which hath no foundation under it: and the rest of thy table shall be full of fatness.

Out of the narrow mouth.... That is, out of hell, whose entrance is narrow, and its depth bottomless; but figuratively meant here, that is, from his miseries and calamity to be restored to his former state of happiness.

36:17. Thy cause hath been judged as that of the wicked, cause and judgment thou shalt recover.

36:18. Therefore let not anger overcome thee to oppress any man: neither let multitude of gifts turn thee aside.

36:19. Lay down thy greatness without tribulation, and all the mighty of strength.

36:20. Prolong not the night that people may come up for them.

36:21. Beware thou turn not aside to iniquity: for this thou hast begun to follow after misery.

For this thou hast begun to follow after misery.... Eliu charges Job, that notwithstanding his misery, he does not fear God as he ought: but in his judgment, falls into iniquity.

36:22. Behold, God is high in his strength, and none is like him among the lawgivers.

36:23. Who can search out his ways? or who can say to him: Thou hast wrought iniquity?

36:24. Remember that thou knowest not his work, concerning which men have sung.

36:25. All men see him, every one beholdeth afar off.

36:26. Behold, God is great, exceeding our knowledge: the number of his years is inestimable.

36:27. He lifteth up the drops of rain, and poureth out showers like floods:

36:28. Which flow from the clouds that cover all above.

36:29. If he will spread out clouds as his tent,

36:30. And lighten with his light from above, he shall cover also the ends of the sea.

36:31. For by these he judgeth people, and giveth food to many mortals.

36:32. In his hands he hideth the light, and commandeth it to come again.

36:33. He sheweth his friend concerning it, that it is his possession, and that he may come up to it.

Job Chapter 37
Eliu goes on in his discourse, shewing God’s wisdom and power, by his wonderful works.

37:1. At this my heart trembleth, and is moved out of its place.

37:2. Hear ye attentively the terror of his voice, and the sound that cometh out of his mouth.

37:3. He beholdeth under all the heavens, and his light is upon the ends of the earth.

37:4. After it a noise shall roar, he shall thunder with the voice of his majesty, and shall not be found out, when his voice shall be heard.

37:5. God shall thunder wonderfully with his voice, he that doth great and unsearchable things.

37:6. He commandeth the snow to go down upon the earth, and the winter rain, and the shower of his strength.

37:7. He sealeth up the hand of all men, that every one may know his works.

He sealeth up, etc.... When he sends those showers of his strength, that is, those storms of rain, he seals up, that is, he shuts up the hands of men from their usual works abroad, and confines them within doors, to consider his works; or to forecast their works, that is, what they themselves are to do.

37:8. Then the beast shall go into his covert, and shall abide in his den.

37:9. Out of the inner parts shall a tempest come, and cold out of the north.

37:10. When God bloweth there cometh frost, and again the waters are poured out abundantly.

37:11. Corn desireth clouds, and the clouds spread their light:

37:12. Which go round about, whithersoever the will of him that governeth them shall lead them, to whatsoever he shall command them upon the face of the whole earth:

37:13. Whether in one tribe, or in his own land, or in what place soever of his mercy he shall command them to be found.

37:14. Hearken to these things, Job: Stand, and consider the wondrous works of God.

37:15. Dost thou know when God commanded the rains, to shew his light of his clouds?

37:16. Knowest thou the great paths of the clouds, and the perfect knowledges?

37:17. Are not thy garments hot, when the south wind blows upon the earth?

37:18. Thou perhaps hast made the heavens with him, which are most strong, as if they were of molten brass.

37:19. Shew us what we may say to him: for we are wrapped up in darkness.

37:20. Who shall tell him the things I speak? even if a man shall speak, he shall be swallowed up.

He shall be swallowed up.... All that man can say when he speaks of God, is so little and inconsiderable in comparison with the subject, that man is lost, and as it were swallowed up in so immense an ocean.

37:21. But now they see not the light: the air on a sudden shall be thickened into clouds, and the wind shall pass and drive them away.

37:22. Cold cometh out of the north, and to God praise with fear.

37:23. We cannot find him worthily: he is great in strength, and in judgment, and in justice, and he is ineffable.

37:24. Therefore men shall fear him, and all that seem to themselves to be wise, shall not dare to behold him.

Job Chapter 38
God interposes and shews from the things he hath made, that man cannot comprehend his power and wisdom.

38:1. Then the Lord answered Job out of a whirlwind, and said:

The Lord. That is, an angel speaking in the name of the Lord.

38:2. Who is this that wrappeth up sentences in unskilful words?

38:3. Gird up thy loins like a man: I will ask thee, and answer thou me.

38:4. Where wast thou when I laid the foundations of the earth? tell me if thou hast understanding.

38:5. Who hath laid the measures thereof, if thou knowest or who hath stretched the line upon it?

38:6. Upon what are its bases grounded? or who laid the corner stone thereof,

38:7. When the morning stars praised me together, and all the sons of God made a joyful melody?

38:8. Who shut up the sea with doors, when it broke forth as issuing out of the womb:

38:9. When I made a cloud the garment thereof, and wrapped it in a mist as in swaddling bands?

38:10. I set my bounds around it, and made it bars and doors:

38:11. And I said: Hitherto thou shalt come, and shalt go no further, and here thou shalt break thy swelling waves.

38:12. Didst thou since thy birth command the morning, and shew the dawning of the day its place?

38:13. And didst thou hold the extremities of the earth shaking them, and hast thou shaken the ungodly out of it?

38:14. The seal shall be restored as clay, and shall stand as a garment.

38:15. From the wicked their light shall be taken away, and the high arm shall be broken.

38:16. Hast thou entered into the depths of the sea, and walked in the lowest parts of the deep?

38:17. Have the gates of death been opened to thee, and hast thou seen the darksome doors?

38:18. Hast thou considered the breadth of the earth? tell me, if thou knowest all things?

38:19. Where is the way where light dwelleth, and where is the place of darkness?

38:20. That thou mayst bring every thing to its own bounds, and understand the paths of the house thereof.

38:21. Didst thou know then that thou shouldst be born? and didst thou know the number of thy days?

38:22. Hast thou entered into the storehouses of the snow, or hast thou beheld the treasures of the hail:

38:23. Which I have prepared for the time of the enemy, against the day of battle and war?

38:24. By what way is the light spread, and heat divided upon the earth?

38:25. Who gave a course to violent showers, or a way for noisy thunder:

38:26. That it should rain on the earth without man in the wilderness, where no mortal dwelleth:

38:27. That it should fill the desert and desolate land, and should bring forth green grass?

38:28. Who is the father of rain? or who begot the drops of dew?

38:29. Out of whose womb came the ice? and the frost from heaven who hath gendered it?

38:30. The waters are hardened like a stone, and the surface of the deep is congealed.

38:31. Shalt thou be able to join together the shining stars the Pleiades, or canst thou stop the turning about of Arcturus?

Pleiades.... Hebrew, Cimah. A cluster of seven stars in the constellation Taurus or the Bull. Arcturus, a bright star in the constellation Bootes. The Hebrew name Cesil, is variously interpreted; by some, Orion; by others, the Great Bear is understood.

38:32. Canst thou bring forth the day star in its time, and make the evening star to rise upon the children of the earth?

38:33. Dost thou know the order of heaven, and canst thou set down the reason thereof on the earth?

38:34. Canst thou lift up thy voice to the clouds, that an abundance of waters may cover thee?

38:35. Canst thou send lightnings, and will they go, and will they return and say to thee: Here we are?

38:36. Who hath put wisdom in the heart of man? or who gave the cock understanding?

Understanding.... That instinct by which he distinguishes the times of crowing in the night.

38:37. Who can declare the order of the heavens, or who can make the harmony of heaven to sleep?

38:38. When was the dust poured on the earth, and the clods fastened together?

38:39. Wilt thou take the prey for the lioness, and satisfy the appetite of her whelps,

38:40. When they couch in the dens and lie in wait in holes?

38:41. Who provideth food for the raven, when her young ones cry to God, wandering about, because they have no meat?

Job Chapter 39
The wonders of the power and providence of God in many of his creatures.

39:1. Knowest thou the time when the wild goats bring forth among the rocks, or hast thou observed the hinds when they fawn?

39:2. Hast thou numbered the months of their conceiving, or knowest thou the time when they bring forth?

39:3. They bow themselves to bring forth young, and they cast them, and send forth roarings.

39:4. Their young are weaned and go to feed: they go forth, and return not to them.

39:5. Who hath sent out the wild ass free, and who hath loosed his bonds?

39:6. To whom I have given a house in the wilderness, and his dwellings in the barren land.

39:7. He scorneth the multitude of the city, he heareth not the cry of the driver.

39:8. He looketh round about the mountains of his pasture, and seeketh for every green thing,

39:9. Shall the rhinoceros be willing to serve thee, or will he stay at thy crib?

39:10. Canst thou bind the rhinoceros with thy thong to plough, or will he break the clods of the valleys after thee?

39:11. Wilt thou have confidence in his great strength, and leave thy labours to him?

39:12. Wilt thou trust him that he will render thee the seed, and gather it into thy barnfloor?

39:13. The wing of the ostrich is like the wings of the heron, and of the hawk.

39:14. When she leaveth her eggs on the earth, thou perhaps wilt warm them in the dust.

39:15. She forgetteth that the foot may tread upon them, or that the beasts of the field may break them.

39:16. She is hardened against her young ones, as though they were not hers, she hath laboured in vain, no fear constraining her.

39:17. For God hath deprived her of wisdom, neither hath he given her understanding.

39:18. When time shall be, she setteth up her wings on high: she scorneth the horse and his rider.

39:19. Wilt thou give strength to the horse or clothe his neck with neighing?

39:20. Wilt thou lift him up like the locusts? the glory of his nostrils is terror.

39:21. He breaketh up the earth with his hoof, he pranceth boldly, he goeth forward to meet armed men.

39:22. He despiseth fear, he turneth not his back to the sword.

39:23. Above him shall the quiver rattle, the spear and shield shall glitter.

39:24. Chasing and raging he swalloweth the ground, neither doth he make account when the noise of the trumpet soundeth.

39:25. When he heareth the trumpet he saith: Ha, ha: he smelleth the battle afar off, the encouraging of the captains, and the shouting of the army.

39:26. Doth the hawk wax feathered by thy wisdom, spreading her wings to the south?

39:27. Will the eagle mount up at thy command, and make her nest in high places?

39:28. She abideth among the rocks, and dwelleth among cragged flints, and stony hills, where there is no access.

39:29. From thence she looketh for the prey, and her eyes behold afar off.

39:30. Her young ones shall suck up blood: and wheresoever the carcass shall be, she is immediately there.

39:31. And the Lord went on, and said to Job:

39:32. Shall he that contendeth with God be so easily silenced? surely he that reproveth God, ought to answer him.

39:33. Then Job answered the Lord, and said:

39:34. What can I answer, who hath spoken inconsiderately? I will lay my hand upon my mouth.

Spoken inconsiderately.... If we discuss all Job’s words (saith St. Gregory), we shall find nothing impiously spoken; as may be gathered from the words of the Lord himself, chap. 42, ver. 7, 8; but what was reprehensible in him, was the manner of expressing himself at times, speaking too much of his own affliction, and too little of God’s goodness towards him, which here he acknowledges as inconsiderate.

39:35. One thing I have spoken, which I wish I had not said: and another, to which I will add no more.

Job Chapter 40
Of the power of God in the behemoth and the leviathan.

40:1. And the Lord answering Job out of the whirlwind, said:

40:2. Gird up thy loins like a man: I will ask thee, and do thou tell me.

40:3. Wilt thou make void my judgment: and condemn me, that thou mayst be justified?

40:4. And hast thou an arm like God, and canst thou thunder with a voice like him?

40:5. Clothe thyself with beauty, and set thyself up on high, and be glorious, and put on goodly garments.

40:6. Scatter the proud in thy indignation, and behold every arrogant man, and humble him.

40:7. Look on all that are proud, and confound them, and crush the wicked in their place,

40:8. Hide them in the dust together, and plunge their faces into the pit.

40:9. Then I will confess that thy right hand is able to save thee.

40:10. Behold behemoth whom I made with thee, he eateth grass like an ox.

Behemoth.... In Hebrew, behema, which signifies in general an animal; but many authors explain, that here it is put for the elephant.

40:11. His strength is in his loins, and his force in the navel of his belly.

40:12. He setteth up his tail like a cedar, the sinews of his testicles are wrapped together.

40:13. His bones are like pipes of brass, his gristle like plates of iron.

40:14. He is the beginning of the ways of God, who made him, he will apply his sword.

He will apply his sword.... This text is variously explained: some explain the sword, the horn given to the animal for his defence: others, the power that God hath given to the animal for his defence: others, the power that God hath given to man to slay him, notwithstanding his great size and strength.

40:15. To him the mountains bring forth grass: there all the beasts of the field shall play.

40:16. He sleepeth under the shadow, in the covert of the reed, and in moist places.

40:17. The shades cover his shadow, the willows of the brook shall compass him about.

40:18. Behold, he will drink up a river, and not wonder: and he trusteth that the Jordan may run into his mouth.

40:19. In his eyes as with a hook he shall take him, and bore through his nostrils with stakes.

40:20. Canst thou draw out the leviathan with a hook, or canst thou tie his tongue with a cord?

Leviathan.... The whale or some sea monster.

40:21. Canst thou put a ring in his nose, or bore through his jaw with a buckle?

40:22. Will he make many supplications to thee, or speak soft words to thee?

40:23. Will he make a covenant with thee, and wilt thou take him to be a servant for ever,

40:24. Shalt thou play with him as with a bird, or tie him up for thy handmaids?

40:25. Shall friends cut him in pieces, shall merchants divide him?

40:26. Wilt thou fill nets with his skin, and the cabins of fishes with his head?

40:27. Lay thy hand upon him: remember the battle, and speak no more.

40:28. Behold his hope shall fail him, and in the sight of all he shall be cast down.

Job Chapter 41
A further description of the leviathan.

41:1. I will not stir him up, like one that is cruel, for who can resist my countenance?

41:2. Who hath given me before that I should repay him? All things that are under heaven are mine.

41:3. I will not spare him, nor his mighty words, and framed to make supplication.

41:4. Who can discover the face of his garment? or who can go into the midst of his mouth?

41:5. Who can open the doors of his face? his teeth are terrible round about.

41:6. His body is like molten shields, shut close up with scales pressing upon one another.

41:7. One is joined to another, and not so much as any air can come between them:

41:8. They stick one to another and they hold one another fast, and shall not be separated.

41:9. His sneezing is like the shining of fire, and his eyes like the eyelids of the morning.

41:10. Out of his mouth go forth lamps, like torches of lighted fire.

41:11. Out of his nostrils goeth smoke, like that of a pot heated and boiling.

41:12. His breath kindleth coals, and a flame cometh forth out of his mouth.

41:13. In his neck strength shall dwell, and want goeth before his face.

41:14. The members of his flesh cleave one to another: he shall send lightnings against him, and they shall not be carried to another place.

41:15. His heart shall be as hard as a stone, and as firm as a smith’s anvil,

41:16. When he shall raise him up, the angels shall fear, and being affrighted shall purify themselves.

Angels.... Elim, Hebrew: which signifies here, the mighty, the most valiant, shall fear this monstrous fish, and in their fear shall seek to be purified.

41:17. When a sword shall lay at him, it shall not be able to hold, nor a spear, nor a breastplate.

41:18. For he shall esteem iron as straw, and brass as rotten wood.

41:19. The archer shall not put him to flight, the stones of the sling are to him like stubble.

41:20. As stubble will he esteem the hammer, and he will laugh him to scorn who shaketh the spear.

41:21. The beams of the sun shall be under him, and he shall strew gold under him like mire.

Under him.... He shall not value the beams of the sun; and gold to him shall be like mire.

41:22. He shall make the deep sea to boil like a pot, and shall make it as when ointments boil.

41:23. A path shall shine after him, he shall esteem the deep as growing old.

The deep as growing old.... Growing hoary, as it were with the froth which he leaves behind him.

41:24. There is no power upon earth that can be compared with him who was made to fear no one,

41:25. He beholdeth every high thing, he is king over all the children of pride.

He is king, etc.... He is superior in strength to all that are great and strong amongst living creatures: mystically it is understood of the devil, who is king over all the proud.

Job Chapter 42
Job submits himself. God pronounces in his favour. Job offers sacrifice for his friends. He is blessed with riches and children, and dies happily,

42:1. Then Job answered the Lord, and said:

42:2. I know that thou canst do all things, and no thought is hid from thee.

42:3. Who is this that hideth counsel without knowledge? Therefore I have spoken unwisely, and things that above measure exceeded my knowledge.

42:4. Hear, and I will speak: I will ask thee, and do thou tell me.

42:5. With the hearing of the ear, I have heard thee, but now my eye seeth thee.

42:6. Therefore I reprehend myself, and do penance in dust and ashes.

42:7. And after the Lord had spoken these words to Job, he said to Eliphaz the Themanite: My wrath is kindled against thee, and against thy two friends, because you have not spoken the thing that is right before me, as my servant Job hath.

42:8. Take unto you therefore seven oxen and seven rams, and go to my servant Job, and offer for yourselves a holocaust, and my servant Job shall pray for you: his face I will accept, that folly be not imputed to you: for you have not spoken right things before me, as my servant Job hath.

42:9. So Eliphaz the Themanite, and Baldad the Suhite, and Sophar the Naamathite went, and did as the Lord had spoken to them, and the Lord accepted the face of Job.

42:10. The Lord also was turned at the penance of Job, when he prayed for his friends. And the Lord gave Job twice as much as he had before.

42:11. And all his brethren came to him, and all his sisters, and all that knew him before, and they ate bread with him in his house: and bemoaned him, and comforted him upon all the evil that God had brought upon him. And every man gave him one ewe, and one earring of gold.

42:12. And the Lord blessed the latter end of Job more than his beginning. And he had fourteen thousand sheep, and six thousand camels, and a thousand yoke of oxen, and a thousand she asses.

42:13. And he had seven sons, and three daughters.

42:14. And he called the name of one Dies, and the name of the second Cassia, and the name of the third Cornustibii.

42:15. And there were not found in all the earth women so beautiful as the daughters of Job: and their father gave them inheritance among their brethren.

42:16. And Job lived after these things, a hundred and forty years, and he saw his children, and his children’s children, unto the fourth generation, and he died an old man, and full of days.

`

var book_of_psalms = `Psalms Chapter 1
Beatus vir.

The happiness of the just and the evil state of the wicked.

1:1. Blessed is the man who hath not walked in the counsel of the ungodly, nor stood in the way of sinners, nor sat in the chair of pestilence:

1:2. But his will is in the law of the Lord, and on his law he shall meditate day and night.

1:3. And he shall be like a tree which is planted near the running waters, which shall bring forth its fruit, in due season. And his leaf shall not fall off: and all whatsoever he shall do shall prosper.

1:4. Not so the wicked, not so: but like the dust, which the wind driveth from the face of the earth.

1:5. Therefore the wicked shall not rise again in judgment: nor sinners in the council of the just.

1:6. For the Lord knoweth the way of the just: and the way of the wicked shall perish.

Psalms Chapter 2
Quare fremuerunt.

The vain efforts of persecutors against Christ and his church.

2:1. Why have the Gentiles raged, and the people devised vain things?

2:2. The kings of the earth stood up, and the princes met together, against the Lord, and against his Christ.

2:3. Let us break their bonds asunder: and let us cast away their yoke from us.

2:4. He that dwelleth in heaven shall laugh at them: and the Lord shall deride them.

2:5. Then shall he speak to them in his anger, and trouble them in his rage.

2:6. But I am appointed king by him over Sion, his holy mountain, preaching his commandment.

2:7. The Lord hath said to me: Thou art my son, this day have I begotten thee.

2:8. Ask of me, and I will give thee the Gentiles for thy inheritance, and the utmost parts of the earth for thy possession.

2:9. Thou shalt rule them with a rod of iron, and shalt break them in pieces like a potter’s vessel.

2:10. And now, O ye kings, understand: receive instruction, you that judge the earth.

2:11. Serve ye the Lord with fear: and rejoice unto him with trembling.

2:12. Embrace discipline, lest at any time the Lord be angry, and you perish from the just way.

2:13. When his wrath shall be kindled in a short time, blessed are all they that trust in him.

Psalms Chapter 3
Domine, quid multiplicati.

The prophet’s danger and delivery from his son Absalom: mystically, the passion and resurrection of Christ.

3:1. The psalm of David when he fled from the face of his son Absalom.

3:2. Why, O Lord, are they multipied that afflict me? many are they who rise up against me.

3:3. Many say to my soul: There is no salvation for him in his God.

3:4. But thou, O Lord, art my protector, my glory, and the lifter up of my head.

3:5. I have cried to the Lord with my voice: and he hath heard me from his holy hill.

3:6. I have slept and have taken my rest: and I have risen up, because the Lord hath protected me.

3:7. I will not fear thousands of the people surrounding me: arise, O Lord; save me, O my God.

3:8. For thou hast struck all them who are my adversaries without cause: thou hast broken the teeth of sinners.

3:9. Salvation is of the Lord: and thy blessing is upon thy people.

Psalms Chapter 4
Cum invocarem.

The prophet teacheth us to flee to God in tribulation, with confidence in him.

4:1. Unto the end, in verses. A psalm for David.

Unto the end.... Or, as St. Jerome renders it, victori, to him that overcometh: which some understand of the chief musician; to whom they suppose the psalms, which bear that title, were given to be sung: we rather understand the psalms thus inscribed to refer to Christ, who is the end of the law, and the great conqueror of death and hell, and to the New Testament.—Ibid. In verses, in carminibus.... In the Hebrew, it is neghinoth, supposed by some to be a musical instrument, with which this psalm was to be sung.—Ibid. For David, or to David.... That is, inspired to David himself, or to be sung.

4:2. When I called upon him, the God of my justice heard me: when I was in distress, thou hast enlarged me. Have mercy on me: and hear my prayer.

4:3. O ye sons of men, how long will you be dull of heart? why do you love vanity, and seek after lying?

4:4. Know ye also that the Lord hath made his holy one wonderful: the Lord will hear me when I shall cry unto him.

4:5. Be ye angry, and sin not: the things you say in your hearts, be sorry for them upon your beds.

4:6. Offer up the sacrifice of justice, and trust in the Lord: many say, Who sheweth us good things?

4:7. The light of thy countenance, O Lord, is signed upon us: thou hast given gladness in my heart.

4:8. By the fruit of their corn, their wine, and oil, they are multiplied.

4:9. In peace in the self same I will sleep, and I will rest:

4:10. For thou, O Lord, singularly hast settled me in hope.

Psalms Chapter 5
Verba mea auribul.

A prayer to God against the iniquities of men.

5:1. Unto the end, for her that obtaineth the inheritance. A psalm for David.

For her that obtaineth the inheritance.... That is, for the church of Christ.

5:2. Give ear, O Lord, to my words, understand my cry.

5:3. Hearken to the voice of my prayer, O my King and my God.

5:4. For to thee will I pray: O Lord, in the morning thou shalt hear my voice.

5:5. In the morning I will stand before thee, and I will see: because thou art not a God that willest iniquity.

5:6. Neither shall the wicked dwell near thee: nor shall the unjust abide before thy eyes.

5:7. Thou hatest all the workers of iniquity: thou wilt destroy all that speak a lie. The bloody and the deceitful man the Lord will abhor.

5:8. But as for me in the multitude of thy mercy, I will come into thy house; I will worship towards thy holy temple, in thy fear.

5:9. Conduct me, O Lord, in thy justice: because of my enemies, direct my way in thy sight.

5:10. For there is no truth in their mouth: their heart is vain.

5:11. Their throat is an open sepulchre: they dealt deceitfully with their tongues: judge them, O God. Let them fall from their devices: according to the multitude of their wickednesses cast them out: for they have provoked thee, O Lord.

5:12. But let all them be glad that hope in thee: they shall rejoice for ever, and thou shalt dwell in them. And all they that love thy name shall glory in thee.

5:13. For thou wilt bless the just. O Lord, thou hast crowned us, as with a shield of thy good will.

Psalms Chapter 6
Domine, ne in furore.

A prayer of a penitent sinner, under the scourge of God. The first penitential psalm.

6:1. Unto the end, in verses, a psalm for David, for the octave.

For the octave.... That is, to be sung on an instrument of eight strings. St. Augustine understands it mystically, of the last resurrection, and the world to come; which is, as it were, the octave, or eighth day, after the seven days of this mortal life: and for this octave, sinners must dispose themselves, like David, by bewailing their sins, whilst they are here upon earth.

6:2. O Lord, rebuke me not in thy indignation, nor chastise me in thy wrath.

6:3. Have mercy on me, O Lord, for I am weak: heal me, O Lord, for my bones are troubled.

6:4. And my soul is troubled exceedingly: but thou, O Lord, how long?

6:5. Turn to me, O Lord, and deliver my soul: O save me for thy mercy’s sake.

6:6. For there is no one in death, that is mindful of thee: and who shall confess to thee in hell?

6:7. I have laboured in my groanings, every night I will wash my bed: I will water my couch with my tears.

6:8. My eye is troubled through indignation: I have grown old amongst all my enemies.

6:9. Depart from me, all ye workers of iniquity: for the Lord hath heard the voice of my weeping.

6:10. The Lord hath heard my supplication: the Lord hath received my prayer.

6:11. Let all my enemies be ashamed, and be very much troubled: let them be turned back, and be ashamed very speedily.

Psalms Chapter 7
Domine, Deus meus.

David, trusting in the justice of his cause, prayeth for God’s help against his enemies.

7:1. The psalm of David, which he sung to the Lord, for the words of Chusi, the son of Jemini.

7:2. O Lord, my God, in thee have I put my trust; save me from all them that persecute me, and deliver me.

7:3. Lest at any time he seize upon my soul like a lion, while there is no one to redeem me, nor to save.

7:4. O Lord, my God, if I have done this thing, if there be iniquity in my hands:

7:5. If I have rendered to them that repaid me evils, let me deservedly fall empty before my enemies.

7:6. Let the enemy pursue my soul, and take it, and tread down my life, on the earth, and bring down my glory to the dust.

7:7. Rise up, O Lord, in thy anger: and be thou exalted in the borders of my enemies. And arise, O Lord, my God, in the precept which thou hast commanded:

7:8. And a congregation of people shall surround thee. And for their sakes return thou on high.

7:9. The Lord judgeth the people. Judge me, O Lord, according to my justice, and according to my innocence in me.

7:10. The wickedness of sinners shall be brought to nought; and thou shalt direct the just: the searcher of hearts and reins is God.

7:11. Just is my help from the Lord; who saveth the upright of heart.

7:12. God is a just judge, strong and patient: is he angry every day?

7:13. Except you will be converted, he will brandish his sword; he hath bent his bow, and made it ready.

7:14. And in it he hath prepared the instruments of death, he hath made ready his arrows for them that burn.

For them that burn.... That is, against the persecutors of his saints.

7:15. Behold he hath been in labour with injustice: he hath conceived sorrow, and brought forth iniquity.

7:16. He hath opened a pit and dug it: and he is fallen into the hole he made.

7:17. His sorrow shall be turned on his own head: and his iniquity shall come down upon his crown.

7:18. I will give glory to the Lord according to his justice: and will sing to the name of the Lord the most high.

Psalms Chapter 8
Domine, Dominus noster.

God is wonderful in his works; especially in mankind, singularly exalted by the incarnation of Christ.

8:1. Unto the end, for the presses: a psalm for David.

The presses.... In Hebrew, Gittith, supposed to be a musical instrument.

8:2. O Lord, our Lord, how admirable is thy name in the whole earth! For thy magnificence is elevated above the heavens.

8:3. Out of the mouth of infants and of sucklings thou hast perfected praise, because of thy enemies, that thou mayst destroy the enemy and the avenger.

8:4. For I will behold thy heavens, the works of thy fingers: the moon and the stars which thou hast founded.

8:5. What is man, that thou art mindful of him? or the son of man, that thou visitest him?

8:6. Thou hast made him a little less than the angels, thou hast crowned him with glory and honour:

8:7. And hast set him over the works of thy hands.

8:8. Thou hast subjected all things under his feet, all sheep and oxen: moreover, the beasts also of the fields.

8:9. The birds of the air, and the fishes of the sea, that pass through the paths of the sea.

8:10. O Lord, our Lord, how admirable is thy name in the whole earth!

Psalms Chapter 9
Confitebor tibi, Domine. The church praiseth God for his protection against her enemies.

9:1. Unto the end, for the hidden things of the Son. A psalm for David.

The hidden things of the Son.... The humility and sufferings of Christ, the Son of God; and of good Christians, who are his sons by adoption; are called hidden things, with regard to the children of this world, who know not the value and merit of them.

9:2. I will give praise to thee, O Lord, with my whole heart: I will relate all thy wonders.

9:3. I will be glad, and rejoice in thee: I will sing to thy name, O thou most high.

9:4. When my enemy shall be turned back: they shall be weakened, and perish before thy face.

9:5. For thou hast maintained my judgment and my cause: thou hast sat on the throne, who judgest justice.

9:6. Thou hast rebuked the Gentiles, and the wicked one hath perished; thou hast blotted out their name for ever and ever.

9:7. The swords of the enemy have failed unto the end: and their cities thou hast destroyed. Their memory hath perished with a noise:

9:8. But the Lord remaineth for ever. He hath prepared his throne in judgment:

9:9. And he shall judge the world in equity, he shall judge the people in justice.

9:10. And the Lord is become a refuge for the poor: a helper in due time in tribulation.

9:11. And let them trust in thee who know thy name: for thou hast not forsaken them that seek thee, O Lord.

9:12. Sing ye to the Lord, who dwelleth in Sion: declare his ways among the Gentiles:

9:13. For requiring their blood, he hath remembered them: he hath not forgotten the cry of the poor.

9:14. Have mercy on me, O Lord: see my humiliation which I suffer from my enemies.

9:15. Thou that liftest me up from the gates of death, that I may declare all thy praises in the gates of the daughter of Sion.

9:16. I will rejoice in thy salvation: the Gentiles have stuck fast in the destruction which they prepared. Their foot hath been taken in the very snare which they hid.

9:17. The Lord shall be known when he executeth judgments: the sinner hath been caught in the works of his own hands.

9:18. The wicked shall be turned into hell, all the nations that forget God.

9:19. For the poor man shall not be forgotten to the end: the patience of the poor shall not perish for ever.

9:20. Arise, O Lord, let not man be strengthened: let the Gentiles be judged in thy sight.

9:21. Appoint, O Lord, a lawgiver over them: that the Gentiles may know themselves to be but men.

Here the late Hebrew doctors divide this psalm into two, making ver. 22 the beginning of Psalm 10. And again they join Psalms 146 and 147 into one, in order that the whole number of psalms should not exceed 150. And in this manner the psalms are numbered in the Protestant Bible.

Psalm 10 according to the Hebrews.

9a:1. Why, O Lord, hast thou retired afar off? why dost thou slight us in our wants, in the time of trouble?

9a:2. Whilst the wicked man is proud, the poor is set on fire: they are caught in the counsels which they devise.

9a:3. For the sinner is praised in the desires of his soul: and the unjust man is blessed.

9a:4. The sinner hath provoked the Lord, according to the multitude of his wrath, he will not seek him:

9a:5. God is not before his eyes: his ways are filthy at all times. Thy judgments are removed from his sight: he shall rule over all his enemies.

9a:6. For he hath said in his heart: I shall not be moved from generation to generation, and shall be without evil.

9a:7. His mouth is full of cursing, and of bitterness, and of deceit: under his tongue are labour and sorrow.

9a:8. He sitteth in ambush with the rich, in private places, that he may kill the innocent.

9a:9. His eyes are upon the poor man: he lieth in wait, in secret, like a lion in his den. He lieth in ambush, that he may catch the poor man: so catch the poor, whilst he draweth him to him.

9a:10. In his net he will bring him down, he will crouch and fall, when he shall have power over the poor.

9a:11. For he hath said in his heart: God hath forgotten, he hath turned away his face, not to see to the end.

9a:12. Arise, O Lord God, let thy hand be exalted: forget not the poor.

9a:13. Wherefore hath the wicked provoked God? for he hath said in his heart: He will not require it.

9a:14. Thou seest it, for thou considerest labour and sorrow: that thou mayst deliver them into thy hands. To thee is the poor man left: thou wilt be a helper to the orphan.

9a:15. Break thou the arm of the sinner and of the malignant: his sin shall be sought, and shall not be found.

9a:16. The Lord shall reign to eternity, yea, for ever and ever: ye Gentiles shall perish from his land.

9a:17. The Lord hath heard the desire of the poor: thy ear hath heard the preparation of their heart.

9a:18. To judge for the fatherless and for the humble, that man may no more presume to magnify himself upon earth.

Psalms Chapter 10
In Domino confido.

The just man’s confidence in God in the midst of persecutions.

10:1. Unto the end. A psalm to David.

10:2. In the Lord I put my trust: how then do you say to my soul: Get thee away from hence to the mountain, like a sparrow.

10:3. For, lo, the wicked have bent their bow: they have prepared their arrows in the quiver, to shoot in the dark the upright of heart.

10:4. For they have destroyed the things which thou hast made: but what has the just man done?

10:5. The Lord is in his holy temple, the Lord’s throne is in heaven. His eyes look on the poor man: his eyelids examine the sons of men.

10:6. The Lord trieth the just and the wicked: but he that loveth iniquity, hateth his own soul.

10:7. He shall rain snares upon sinners: fire and brimstone, and storms of winds, shall be the portion of their cup.

10:8. For the Lord is just, and hath loved justice: his countenance hath beheld righteousness.

Psalms Chapter 11
Salvum me fac.

The prophet calls for God’s help against the wicked.

11:1. Unto the end: for the octave, a psalm for David.

11:2. Save me, O Lord, for there is now no saint: truths are decayed from among the children of men.

11:3. They have spoken vain things, every one to his neighbour: with deceitful lips, and with a double heart have they spoken.

11:4. May the Lord destroy all deceitful lips, and the tongue that speaketh proud things.

11:5. Who have said: We will magnify our tongue: our lips are our own: who is Lord over us?

11:6. By reason of the misery of the needy, and the groans of the poor, now will I arise, saith the Lord. I will set him in safety: I will deal confidently in his regard.

11:7. The words of the Lord are pure words: as silver tried by the fire, purged from the earth, refined seven times.

11:8. Thou, O Lord, wilt preserve us: and keep us from this generation for ever.

11:9. The wicked walk round about: according to thy highness, thou hast multiplied the children of men.

Psalms Chapter 12
Usquequo, Domine.

A prayer in tribulation.

12:1. Unto the end, a psalm for David. How long, O Lord, wilt thou forget me unto the end? how long dost thou turn away thy face from me?

12:2. How long shall I take counsels in my soul, sorrow in my heart all the day?

12:3. How long shall my enemy be exalted over Me?

12:4. Consider, and hear me, O Lord, my God. Enlighten my eyes, that I never sleep in death:

12:5. Lest at any time my enemy say: I have prevailed against him. They that trouble me, will rejoice when I am moved:

12:6. But I have trusted in thy mercy. My heart shall rejoice in thy salvation: I will sing to the Lord, who giveth me good things: yea, I will sing to the name of the Lord, the most high.

Psalms Chapter 13
Dixit insipiens.

The general corruption of man before our redemption by Christ.

13:1. Unto the end, a psalm for David. The fool hath said in his heart: There is no God. They are corrupt, and are become abominable in their ways: there is none that doth good, no not one.

13:2. The Lord hath looked down from heaven upon the children of men, to see if there be any that understand and seek God.

13:3. They are all gone aside, they are become unprofitable together: there is none that doth good: no not one. Their throat is an open sepulchre; with their tongues they acted deceitfully: the poison of asps is under their lips. Their mouth is full of cursing and bitterness; their feet are swift to shed blood. Destruction and unhappiness in their ways; and the way of peace they have not known: there is no fear of God before their eyes.

13:4. Shall not all they know that work iniquity, who devour my people as they eat bread?

13:5. They have not called upon the Lord: there have they trembled for fear, where there was no fear.

13:6. For the Lord is in the just generation: you have confounded the counsel of the poor man; but the Lord is his hope.

13:7. Who shall give out of Sion the salvation of Israel? when the Lord shall have turned away the captivity of his people, Jacob shall rejoice, and Israel shall be glad.

Psalms Chapter 14
Domine, quis habitabit.

What kind of men shall dwell in the heavenly Sion.

14:1. A psalm for David. Lord, who shall dwell in thy tabernacle? or who shall rest in thy holy hill?

14:2. He that walketh without blemish, and worketh justice:

14:3. He that speaketh truth in his heart, who hath not used deceit in his tongue: Nor hath done evil to his neighbour: nor taken up a reproach against his neighbours.

14:4. In his sight the malignant is brought to nothing: but he glorifieth them that fear the Lord. He that sweareth to his neighbour, and deceiveth not;

14:5. He that hath not put out his money to usury, nor taken bribes against the innocent: He that doth these things, shall not be moved for ever.

Psalms Chapter 15
Conserva me, Domine.

Christ’s future victory and triumph over the world and death.

15:1. The inscription of a title to David himself. Preserve me, O Lord, for I have put my trust in thee.

The inscription of a title.... That is, of a pillar or monument, staylographia: which is as much as to say, that this psalm is most worthy to be engraved on an everlasting monument.

15:2. I have said to the Lord, thou art my God, for thou hast no need of my goods.

15:3. To the saints, who are in his land, he hath made wonderful all my desires in them.

15:4. Their infirmities were multiplied: afterwards they made haste. I will not gather together their meetings for bloodofferings: nor will I be mindful of their names by my lips.

15:5. The Lord is the portion of my inheritance and of my cup: it is thou that wilt restore my inheritance to me.

15:6. The lines are fallen unto me in goodly places: for my inheritance is goodly to me.

15:7. I will bless the Lord, who hath given me understanding: moreover, my reins also have corrected me even till night.

15:8. I set the Lord always in my sight: for he is at my right hand, that I be not moved.

15:9. Therefore my heart hath been glad, and my tongue hath rejoiced: moreover, my flesh also shall rest in hope.

15:10. Because thou wilt not leave my soul in hell; nor wilt thou give thy holy one to see corruption.

15:11. Thou hast made known to me the ways of life, thou shalt fill me with joy with thy countenance: at thy right hand are delights even to the end.

Psalms Chapter 16
Exaudi, Domine, justitiam.

A just man’s prayer in tribulation against the malice of his enemy.

16:1. The prayer of David. Hear, O Lord, my justice: attend to my supplication. Give ear unto my prayer, which proceedeth not from deceitful lips.

16:2. Let my judgment come forth from thy countenance: let thy eyes behold the things that are equitable.

16:3. Thou hast proved my heart, and visited it by night, thou hast tried me by fire: and iniquity hath not been found in me.

16:4. That my mouth may not speak the works of men: for the sake of the words of thy lips, I have kept hard ways.

16:5. Perfect thou my goings in thy paths: that my footsteps be not moved.

16:6. I have cried to thee, for thou, O God, hast heard me: O incline thy ear unto me, and hear my words.

16:7. Shew forth thy wonderful mercies; thou who savest them that trust in thee.

16:8. From them that resist thy right hand keep me, as the apple of thy eye. Protect me under the shadow of thy wings.

16:9. From the face of the wicked who have afflicted me. My enemies have surrounded my soul:

16:10. They have shut up their fat: their mouth hath spoken proudly.

Their fat.... That is, their bowels of compassion: for they have none for me.

16:11. They have cast me forth, and now they have surrounded me: they have set their eyes bowing down to the earth.

16:12. They have taken me, as a lion prepared for the prey; and as a young lion dwelling in secret places.

16:13. Arise, O Lord, disappoint him and supplant him; deliver my soul from the wicked one; thy sword

16:14. From the enemies of thy hand. O Lord, divide them from the few of the earth in their life: their belly is filled from thy hidden stores. They are full of children: and they have left to their little ones the rest of their substance.

Divide them from the few, etc.... That is, cut them off from the earth, and the few trifling things thereof; which they are so proud of, or divide them from the few; that is, from thy elect, who are but few; that they may no longer have it in their power to oppress them. It is not meant by way of a curse or imprecation; but, as many other the like passages in the psalms, by way of a prediction, or prophecy of what should come upon them, in punishment of their wickedness. Ibid. Thy hidden stores.... Thy secret treasures, out of which thou furnishest those earthly goods, which, with a bountiful hand thou hast distributed both to the good and the bad.

16:15. But as for me, I will appear before thy sight in justice: I shall be satisfied when thy glory shall appear.

Psalms Chapter 17
Diligam te, Domine.

David’s thanks to God for his delivery from all his enemies.

17:1. Unto the end, for David, the servant of the Lord, who spoke to the Lord the words of this canticle, in the day that the Lord delivered him from the hand of all his enemies, and from the hand of Saul: and he said:

17:2. I will love thee, O Lord, my strength:

17:3. The Lord is my firmament, my refuge, and my deliverer. My God is my helper, and in him will I put my trust. My protector, and the horn of my salvation, and my support.

17:4. Praising, I will call upon the Lord: and I shall be saved from my enemies.

17:5. The sorrows of death surrounded me: and the torrents of iniquity troubled me.

17:6. The sorrows of hell encompassed me: and the snares of death prevented me.

17:7. In my affliction I called upon the Lord, and I cried to my God: And he heard my voice from his holy temple: and my cry before him came into his ears.

17:8. The earth shook and trembled: the foundations of the mountains were troubled and were moved, because he was angry with them.

17:9. There went up a smoke in his wrath: and a fire flamed from his face: coals were kindled by it.

17:10. He bowed the heavens, and came down, and darkness was under his feet.

17:11. And he ascended upon the cherubim, and he flew; he flew upon the wings of the winds.

17:12. And he made darkness his covert, his pavilion round about him: dark waters in the clouds of the air.

17:13. At the brightness that was before him the clouds passed, hail and coals of fire.

17:14. And the Lord thundered from heaven, and the Highest gave his voice: hail and coals of fire.

17:15. And he sent forth his arrows, and he scattered them: he multiplied lightnings, and troubled them.

17:16. Then the fountains of waters appeared, and the foundations of the world were discovered: At thy rebuke, O Lord, at the blast of the spirit of thy wrath.

17:17. He sent from on high, and took me: and received me out of many waters.

17:18. He delivered me from my strongest enemies, and from them that hated me: for they were too strong for me.

17:19. They prevented me in the day of my affliction: and the Lord became my protector.

17:20. And he brought me forth into a large place: he saved me, because he was well pleased with me.

17:21. And the Lord will reward me according to my justice; and will repay me according to the cleanness of my hands:

17:22. Because I have kept the ways of the Lord; and have not done wickedly against my God.

17:23. For all his judgments are in my sight: and his justices I have not put away from me.

17:24. And I shall be spotless with him: and shall keep myself from my iniquity.

17:25. And the Lord will reward me according to my justice: and according to the cleanness of my hands before his eyes.

17:26. With the holy thou wilt be holy; and with the innocent man thou wilt be innocent:

17:27. And with the elect thou wilt be elect: and with the perverse thou wilt be perverted.

17:28. For thou wilt save the humble people; but wilt bring down the eyes of the proud.

17:29. For thou lightest my lamp, O Lord: O my God, enlighten my darkness.

17:30. For by thee I shall be delivered from temptation; and through my God I shall go over a wall.

17:31. As for my God, his way is undefiled: the words of the Lord are fire-tried: he is the protector of all that trust in him.

17:32. For who is God but the Lord? or who is God but our God?

17:33. God, who hath girt me with strength; and made my way blameless.

17:34. Who hath made my feet like the feet of harts: and who setteth me upon high places.

17:35. Who teacheth my hands to war: and thou hast made my arms like a brazen bow.

17:36. And thou hast given me the protection of thy salvation: and thy right hand hath held me up: And thy discipline hath corrected me unto the end: and thy discipline, the same shall teach me.

17:37. Thou hast enlarged my steps under me; and my feet are not weakened.

17:38. I will pursue after my enemies, and overtake them: and I will not turn again till they are consumed.

17:39. I will break them, and they shall not be able to stand: they shall fall under my feet.

17:40. And thou hast girded me with strength unto battle; and hast subdued under me them that rose up against me.

17:41. And thou hast made my enemies turn their back upon me, and hast destroyed them that hated me.

17:42. They cried, but there was none to save them, to the Lord: but he heard them not.

17:43. And I shall beat them as small as the dust before the wind; I shall bring them to nought, like the dirt in the streets.

17:44. Thou wilt deliver me from the contradictions of the people; thou wilt make me head of the Gentiles.

17:45. A people which I knew not, hath served me: at the hearing of the ear they have obeyed me.

17:46. The children that are strangers have lied to me, strange children have faded away, and have halted from their paths.

17:47. The Lord liveth, and blessed be my God, and let the God of my salvation be exalted.

17:48. O God, who avengest me, and subduest the people under me, my deliverer from my enraged enemies.

17:49. And thou wilt lift me up above them that rise up against me: from the unjust man thou wilt deliver me.

17:50. Therefore will I give glory to thee, O Lord, among the nations, and I will sing a psalm to thy name.

17:51. Giving great deliverance to his king, and shewing mercy to David, his anointed: and to his seed for ever.

Psalms Chapter 18
Coeli enarrant.

The works of God shew forth his glory: his law is greatly to be esteemed and loved.

18:1. Unto the end. A Psalm for David.

18:2. The heavens shew forth the glory of God, and the firmament declareth the work of his hands.

18:3. Day to day uttereth speech, and night to night sheweth knowledge.

18:4. There are no speeches nor languages, where their voices are not heard.

18:5. Their sound hath gone forth into all the earth: and their words unto the ends of the world.

18:6. He hath set his tabernacle in the sun: and he as a bridegroom coming out of his bridechamber, Hath rejoiced as a giant to run the way:

18:7. His going out is from the end of heaven, And his circuit even to the end thereof: and there is no one that can hide himself from his heat.

18:8. The law of the Lord is unspotted, converting souls: the testimony of the Lord is faithful, giving wisdom to little ones.

18:9. The justices of the Lord are right, rejoicing hearts: the commandment of the Lord is lightsome, enlightening the eyes.

18:10. The fear of the Lord is holy, enduring for ever and ever: the judgments of the Lord are true, justified in themselves.

18:11. More to be desired than gold and many precious stones: and sweeter than honey and the honeycomb.

18:12. For thy servant keepeth them, and in keeping them there is a great reward.

18:13. Who can understand sins? from my secret ones cleanse me, O Lord:

18:14. And from those of others spare thy servant. If they shall have no dominion over me, then shall I be without spot: and I shall be cleansed from the greatest sin.

18:15. And the words of my mouth shall be such as may please: and the meditation of my heart always in thy sight. O Lord, my helper and my Redeemer.

Psalms Chapter 19
Exaudiat te Dominus.

A prayer for the king.

19:1. Unto the end. A psalm for David.

19:2. May the Lord hear thee in the day of tribulation: may the name of the God of Jacob protect thee.

19:3. May he send thee help from the sanctuary: and defend thee out of Sion.

19:4. May he be mindful of all thy sacrifices: and may thy whole burntoffering be made fat.

19:5. May he give thee according to thy own heart; and confirm all thy counsels.

19:6. We will rejoice in thy salvation; and in the name of our God we shall be exalted.

19:7. The Lord fulfil all thy petitions: now have I known that the Lord hath saved his anointed. He will hear him from his holy heaven: the salvation of his right hand is in powers.

The salvation of his right hand is in powers.... That is, in strength. His right hand is strong and mighty to save them that trust in him.

19:8. Some trust in chariots, and some in horses: but we will call upon the name of the Lord, our God.

19:9. They are bound, and have fallen: but we are risen, and are set upright. O Lord, save the king: and hear us in the day that we shall call upon thee.

Psalms Chapter 20
Domine, in virtute.

Praise to God for Christ’s exaltation after his passion.

20:1. Unto the end. A psalm for David.

20:2. In thy strength, O Lord, the king shall joy; and in thy salvation he shall rejoice exceedingly.

20:3. Thou hast given him his heart’s desire: and hast not withholden from him the will of his lips.

20:4. For thou hast prevented him with blessings of sweetness: thou hast set on his head a crown of precious stones.

20:5. He asked life of thee: and thou hast given him length of days for ever and ever.

20:6. His glory is great in thy salvation: glory and great beauty shalt thou lay upon him.

20:7. For thou shalt give him to be a blessing for ever and ever: thou shalt make him joyful in gladness with thy countenance.

20:8. For the king hopeth in the Lord: and through the mercy of the most High he shall not be moved.

20:9. Let thy hand be found by all thy enemies: let thy right hand find out all them that hate thee.

20:10. Thou shalt make them as an oven of fire, in the time of thy anger: the Lord shall trouble them in his wrath, and fire shall devour them.

20:11. Their fruit shalt thou destroy from the earth: and their seed from among the children of men.

20:12. For they have intended evils against thee: they have devised counsels which they have not been able to establish.

20:13. For thou shalt make them turn their back: in thy remnants thou shalt prepare their face.

In thy remnants thou shalt prepare their face.... Or thou shalt set thy remnants against their faces. That is, thou shalt make them see what punishments remain for them hereafter from thy justice. Instead of remnants, St. Jerome renders it funes, that is, cords or strings, viz., of the bow of divine justice, from which God directs his arrows against the faces of his enemies.

20:14. Be thou exalted, O Lord, in thy own strength: we will sing and praise thy power.

Psalms Chapter 21
Deus Deus meus.

Christ’s passion: and the conversion of the Gentiles.

21:1. Unto the end, for the morning protection, a psalm for David.

21:2. O God my God, look upon me: why hast thou forsaken me? Far from my salvation are the words of my sins.

The words of my sins.... That is, the sins of the world, which I have taken upon myself, cry out against me, and are the cause of all my sufferings.

21:3. O my God, I shall cry by day, and thou wilt not hear: and by night, and it shall not be reputed as folly in me.

21:4. But thou dwellest in the holy place, the praise of Israel.

21:5. In thee have our fathers hoped: they have hoped, and thou hast delivered them.

21:6. They cried to thee, and they were saved: they trusted in thee, and were not confounded.

21:7. But I am a worm, and no man: the reproach of men, and the outcast of the people.

21:8. All they that saw me have laughed me to scorn: they have spoken with the lips, and wagged the head.

21:9. He hoped in the Lord, let him deliver him: let him save him, seeing he delighteth in him.

21:10. For thou art he that hast drawn me out of the womb: my hope from the breasts of my mother.

21:11. I was cast upon thee from the womb. From my mother’s womb thou art my God,

21:12. Depart not from me. For tribulation is very near: for there is none to help me.

21:13. Many calves have surrounded me: fat bulls have besieged me.

21:14.They have opened their mouths against me, as a lion ravening and roaring.

21:15. I am poured out like water; and all my bones are scattered. My heart is become like wax melting in the midst of my bowels.

21:16. My strength is dried up like a potsherd, and my tongue hath cleaved to my jaws: and thou hast brought me down into the dust of death.

21:17. For many dogs have encompassed me: the council of the malignant hath besieged me. They have dug my hands and feet.

21:18. They have numbered all my bones. And they have looked and stared upon me.

21:19. They parted my garments amongst them; and upon my vesture they cast lots.

21:20. But thou, O Lord, remove not thy help to a distance from me; look towards my defence.

21:21. Deliver, O God, my soul from the sword: my only one from the hand of the dog.

21:22. Save me from the lion’s mouth; and my lowness from the horns of the unicorns.

21:23. I will declare thy name to my brethren: in the midst of the church will I praise thee.

21:24. Ye that fear the Lord, praise him: all ye the seed of Jacob, glorify him.

21:25. Let all the seed of Israel fear him: because he hath not slighted nor despised the supplication of the poor man. Neither hath he turned away his face from me: and when I cried to him he heard me.

21:26. With thee is my praise in a great church: I will pay my vows in the sight of them that fear him.

21:27. The poor shall eat and shall be filled: and they shall praise the Lord that seek him: their hearts shall live for ever and ever.

21:28. All the ends of the earth shall remember, and shall be converted to the Lord: And all the kindreds of the Gentiles shall adore in his sight.

21:29. For the kingdom is the Lord’s; and he shall have dominion over the nations.

21:30. All the fat ones of the earth have eaten and have adored: all they that go down to the earth shall fall before him.

21:31. And to him my soul shall live: and my seed shall serve him.

21:32. There shall be declared to the Lord a generation to come: and the heavens shall shew forth his justice to a people that shall be born, which the Lord hath made.

Psalms Chapter 22
Dominus regit me.

God’s spiritual benefits to faithful souls.

22:1. A psalm for David. The Lord ruleth me: and I shall want nothing.

Ruleth me.... In Hebrew, Is my shepherd, viz., to feed, guide, and govern me.

22:2. He hath set me in a place of pasture. He hath brought me up, on the water of refreshment:

22:3. He hath converted my soul. He hath led me on the paths of justice, for his own name’s sake.

22:4. For though I should walk in the midst of the shadow of death, I will fear no evils, for thou art with me. Thy rod and thy staff, they have comforted me.

22:5. Thou hast prepared a table before me against them that afflict me. Thou hast anointed my head with oil; and my chalice which inebriateth me, how goodly is it!

22:6. And thy mercy will follow me all the days of my life. And that I may dwell in the house of the Lord unto length of days.

Psalms Chapter 23
Domini est terra.

Who are they that shall ascend to heaven: Christ’s triumphant ascension thither.

23:1. On the first day of the week, a psalm for David. The earth is the Lord’s and the fulness thereof: the world, and all they that dwell therein.

23:2. For he hath founded it upon the seas; and hath prepared it upon the rivers.

23:3. Who shall ascend into the mountain of the Lord: or who shall stand in his holy place?

23:4. The innocent in hands, and clean of heart, who hath not taken his soul in vain, nor sworn deceitfully to his neighbour.

23:5. He shall receive a blessing from the Lord, and mercy from God his Saviour.

23:6. This is the generation of them that seek him, of them that seek the face of the God of Jacob.

23:7. Lift up your gates, O ye princes, and be ye lifted up, O eternal gates: and the King of Glory shall enter in.

23:8. Who is this King of Glory? the Lord who is strong and mighty: the Lord mighty in battle.

23:9. Lift up your gates, O ye princes, and be ye lifted up, O eternal gates: and the King of Glory shall enter in.

23:10. Who is this King of Glory? the Lord of hosts, he is the King of Glory.

Psalms Chapter 24
Ad te, Domine, levavi.

A prayer for grace, mercy, and protection against our enemies.

24:1. Unto the end, a psalm for David. To thee, O Lord, have I lifted up my soul.

24:2. In thee, O my God, I put my trust; let me not be ashamed.

24:3. Neither let my enemies laugh at me: for none of them that wait on thee shall be confounded.

24:4. Let all them be confounded that act unjust things without cause. Shew, O Lord, thy ways to me, and teach me thy paths.

24:5. Direct me in thy truth, and teach me; for thou art God my Saviour; and on thee have I waited all the day long.

24:6. Remember, O Lord, thy bowels of compassion; and thy mercies that are from the beginning of the world.

24:7. The sins of my youth and my ignorances do not remember. According to thy mercy remember thou me: for thy goodness’ sake, O Lord.

24:8. The Lord is sweet and righteous: therefore he will give a law to sinners in the way.

24:9. He will guide the mild in judgment: he will teach the meek his ways.

24:10. All the ways of the Lord are mercy and truth, to them that seek after his covenant and his testimonies.

24:11. For thy name’s sake, O Lord, thou wilt pardon my sin: for it is great.

24:12. Who is the man that feareth the Lord? He hath appointed him a law in the way he hath chosen.

24:13. His soul shall dwell in good things: and his seed shall inherit the land.

24:14. The Lord is a firmament to them that fear him: and his covenant shall be made manifest to them.

24:15. My eyes are ever towards the Lord: for he shall pluck my feet out of the snare.

24:16. Look thou upon me, and have mercy on me; for I am alone and poor.

24:17. The troubles of my heart are multiplied: deliver me from my necessities.

24:18. See my abjection and my labour; and forgive me all my sins.

24:19. Consider my enemies for they are multiplied, and have hated me with an unjust hatred.

24:20. Keep thou my soul, and deliver me: I shall not be ashamed, for I have hoped in thee.

24:21. The innocent and the upright have adhered to me: because I have waited on thee.

24:22. Deliver Israel, O God, from all his tribulations.

Psalms Chapter 25
Judica me, Domine.

David’s prayer to God in his distress, to be delivered, that he may come to worship him in his tabernacle.

25:1. Unto the end, a psalm for David. Judge me, O Lord, for I have walked in my innocence: and I have put my trust in the Lord, and shall not be weakened.

25:2. Prove me, O Lord, and try me; burn my reins and my heart.

25:3. For thy mercy is before my eyes; and I am well pleased with thy truth.

25:4. I have not sat with the council of vanity: neither will I go in with the doers of unjust things.

25:5. I have hated the assembly of the malignant; and with the wicked I will not sit.

25:6. I will wash my hands among the innocent; and will compass thy altar, O Lord:

25:7. That I may hear the voice of thy praise: and tell of all thy wondrous works.

25:8. I have loved, O Lord, the beauty of thy house; and the place where thy glory dwelleth.

25:9. Take not away my soul, O God, with the wicked: nor my life with bloody men:

25:10. In whose hands are iniquities: their right hand is filled with gifts.

25:11. But as for me, I have walked in my innocence: redeem me, and have mercy on me.

25:12. My foot hath stood in the direct way: in the churches I will bless thee, O Lord.

Psalms Chapter 26
Dominus illuminatio.

David’s faith and hope in God.

26:1. The psalm of David before he was anointed. The Lord is my light and my salvation, whom shall I fear? The Lord is the protector of my life: of whom shall I be afraid?

26:2. Whilst the wicked draw near against me, to eat my flesh. My enemies that trouble me, have themselves been weakened, and have fallen.

26:3. If armies in camp should stand together against me, my heart shall not fear. If a battle should rise up against me, in this will I be confident.

26:4. One thing I have asked of the Lord, this will I seek after; that I may dwell in the house of the Lord all the days of my life. That I may see the delight of the Lord, and may visit his temple.

26:5. For he hath hidden me in his tabernacle; in the day of evils, he hath protected me in the secret place of his tabernacle.

26:6. He hath exalted me upon a rock: and now he hath lifted up my head above my enemies. I have gone round, and have offered up in his tabernacle a sacrifice of jubilation: I will sing, and recite a psalm to the Lord.

26:7. Hear, O Lord, my voice, with which I have cried to thee: have mercy on me and hear me.

26:8. My heart hath said to thee: My face hath sought thee: thy face, O Lord, will I still seek.

26:9. Turn not away thy face from me; decline not in thy wrath from thy servant. Be thou my helper, forsake me not; do not thou despise me, O God my Saviour.

26:10. For my father and my mother have left me: but the Lord hath taken me up.

26:11. Set me, O Lord, a law in thy way, and guide me in the right path, because of my enemies.

26:12. Deliver me not over to the will of them that trouble me; for unjust witnesses have risen up against me; and iniquity hath lied to itself.

26:13. I believe to see the good things of the Lord in the land of the living.

26:14. Expect the Lord, do manfully, and let thy heart take courage, and wait thou for the Lord.

Psalms Chapter 27
Ad te, Domine, clamabo.

David’s prayer that his enemies may not prevail over him.

27:1. A psalm for David himself. Unto thee will I cry, O Lord: O my God, be not thou silent to me: lest if thou be silent to me, I become like them that go down into the pit.

27:2. Hear, O Lord, the voice of my supplication, when I pray to thee; when I lift up my hands to thy holy temple.

27:3. Draw me not away together with the wicked; and with the workers of iniquity destroy me not: Who speak peace with their neighbour, but evils are in their hearts.

27:4. Give them according to their works, and according to the wickedness of their inventions. According to the works of their hands give thou to them: render to them their reward.

27:5. Because they have not understood the works of the Lord, and the operations of his hands: thou shalt destroy them, and shalt not build them up.

27:6. Blessed be the Lord, for he hath heard the voice of my supplication.

27:7. The Lord is my helper and my protector: in him hath my heart confided, and I have been helped. And my flesh hath flourished again, and with my will I will give praise to him.

27:8. The Lord is the strength of his people, and the protector of the salvation of his anointed.

27:9. Save, O Lord, thy people, and bless thy inheritance: and rule them and exalt them for ever.

Psalms Chapter 28
Afferte Domino.

An invitation to glorify God, with a commemoration of his mighty works.

28:1. A psalm for David, at the finishing of the tabernacle. Bring to the Lord, O ye children of God: bring to the Lord the offspring of rams.

28:2. Bring to the Lord glory and honour: bring to the Lord glory to his name: adore ye the Lord in his holy court.

28:3. The voice of the Lord is upon the waters; the God of majesty hath thundered, The Lord is upon many waters.

28:4. The voice of the Lord is in power; the voice of the Lord in magnificence.

28:5. The voice of the Lord breaketh the cedars: yea, the Lord shall break the cedars of Libanus.

28:6. And shall reduce them to pieces, as a calf of Libanus, and as the beloved son of unicorns.

Shall reduce them to pieces, etc.... In Hebrew, shall make them to skip like a calf. The psalmist here describes the effects of thunder (which he calls the voice of the Lord) which sometimes breaks down the tallest and strongest trees; and makes their broken branches skip, etc. All this is to be understood mystically of the powerful voice of God’s word in his church; which has broken the pride of the great ones of this world, and brought many of them meekly and joyfully to submit their necks to the sweet yoke of Christ.

28:7. The voice of the Lord divideth the flame of fire:

28:8. The voice of the Lord shaketh the desert: and the Lord shall shake the desert of Cades.

28:9. The voice of the Lord prepareth the stags: and he will discover the thick woods: and in his temple all shall speak his glory.

28:10. The Lord maketh the flood to dwell: and the Lord shall sit king for ever. The Lord will give strength to his people: the Lord will bless his people with peace.

Psalms Chapter 29
Exaltabo te, Domine.

David praiseth God for his deliverance, and his merciful dealings with him.

29:1. A psalm of a canticle, at the dedication of David’s house.

29:2. I will extol thee, O Lord, for thou hast upheld me: and hast not made my enemies to rejoice over me.

29:3. O Lord my God, I have cried to thee, and thou hast healed me.

29:4. Thou hast brought forth, O Lord, my soul from hell: thou hast saved me from them that go down into the pit.

29:5. Sing to the Lord, O ye his saints: and give praise to the memory of his holiness.

29:6. For wrath is in his indignation; and life in his good will. In the evening weeping shall have place, and in the morning gladness.

29:7. And in my abundance I said: I shall never be moved.

29:8. O Lord, in thy favour, thou gavest strength to my beauty. Thou turnedst away thy face from me, and I became troubled.

29:9. To thee, O Lord, will I cry: and I will make supplication to my God.

29:10. What profit is there in my blood, whilst I go down to corruption? Shall dust confess to thee, or declare thy truth?

29:11. The Lord hath heard, and hath had mercy on me: the Lord became my helper.

29:12. Thou hast turned for me my mourning into joy: thou hast cut my sackcloth, and hast compassed me with gladness:

29:13. To the end that my glory may sing to thee, and I may not regret: O Lord my God, I will give praise to thee for ever.

Psalms Chapter 30
In te, Domine, speravi.

A prayer of a just man under affliction.

30:1. Unto the end, a psalm for David, in an ecstasy.

30:2. In thee, O Lord, have I hoped, let me never be confounded: deliver me in thy justice.

30:3. Bow down thy ear to me: make haste to deliver me. Be thou unto me a God, a protector, and a house of refuge, to save me.

30:4. For thou art my strength and my refuge; and for thy name’s sake thou wilt lead me, and nourish me.

30:5. Thou wilt bring me out of this snare, which they have hidden for me: for thou art my protector.

30:6. Into thy hands I commend my spirit: thou hast redeemed me, O Lord, the God of truth.

30:7. Thou hast hated them that regard vanities, to no purpose. But I have hoped in the Lord:

30:8. I will be glad and rejoice in thy mercy. For thou hast regarded my humility, thou hast saved my soul out of distresses.

30:9. And thou hast not shut me up in the hands of the enemy: thou hast set my feet in a spacious place.

30:10. Have mercy on me, O Lord, for I am afflicted: my eye is troubled with wrath, my soul, and my belly:

30:11. For my life is wasted with grief: and my years in sighs. My strength is weakened through poverty and my bones are disturbed.

30:12. I am become a reproach among all my enemies, and very much to my neighbours; and a fear to my acquaintance. They that saw me without fled from me.

30:13. I am forgotten as one dead from the heart. I am become as a vessel that is destroyed.

30:14. For I have heard the blame of many that dwell round about. While they assembled together against me, they consulted to take away my life.

30:15. But I have put my trust in thee, O Lord: I said: Thou art my God.

30:16. My lots are in thy hands. Deliver me out of the hands of my enemies; and from them that persecute me.

30:17. Make thy face to shine upon thy servant; save me in thy mercy.

30:18. Let me not be confounded, O Lord, for I have called upon thee. Let the wicked be ashamed, and be brought down to hell.

30:19. Let deceitful lips be made dumb. Which speak iniquity against the just, with pride and abuse.

30:20. O how great is the multitude of thy sweetness, O Lord, which thou hast hidden for them that fear thee! Which thou hast wrought for them that hope in thee, in the sight of the sons of men.

30:21. Thou shalt hide them in the secret of thy face, from the disturbance of men. Thou shalt protect them in thy tabernacle from the contradiction of tongues.

30:22. Blessed be the Lord, for he hath shewn his wonderful mercy to me in a fortified city.

30:23. But I said in the excess of my mind: I am cast away from before thy eyes. Therefore thou hast heard the voice of my prayer, when I cried to thee.

30:24. O love the Lord, all ye his saints: for the Lord will require truth, and will repay them abundantly that act proudly.

30:25. Do ye manfully, and let your heart be strengthened, all ye that hope in the Lord.

Psalms Chapter 31
Beati quorum.

The second penitential psalm.

31:1. To David himself, understanding. Blessed are they whose iniquities are forgiven, and whose sins are covered.

31:2. Blessed is the man to whom the Lord hath not imputed sin, and in whose spirit there is no guile.

31:3. Because I was silent my bones grew old; whilst I cried out all the day long.

Because I was silent, etc.... That is, whilst I kept silence, by concealing, or refusing to confess my sins, thy hand was heavy upon me, etc.

31:4. For day and night thy hand was heavy upon me: I am turned in my anguish, whilst the thorn is fastened.

I am turned, etc.... That is, I turn and roll about in my bed to seek for ease in my pain whilst the thorn of thy justice pierces my flesh, and sticks fast in me. Or, I am turned: that is, I am converted to thee, my God, by being brought to a better understanding by thy chastisements. In the Hebrew it is, my moisture is turned into the droughts of the summer.

31:5. I have acknowledged my sin to thee, and my injustice I have not concealed. I said I will confess against my self my injustice to the Lord: and thou hast forgiven the wickedness of my sin.

31:6. For this shall every one that is holy pray to thee in a seasonable time. And yet in a flood of many waters, they shall not come nigh unto him.

31:7. Thou art my refuge from the trouble which hath encompassed me: my joy, deliver me from them that surround me.

31:8. I will give thee understanding, and I will instruct thee in this way, in which thou shalt go: I will fix my eyes upon thee.

31:9. Do not become like the horse and the mule, who have no understanding. With bit and bridle bind fast their jaws, who come not near unto thee.

31:10. Many are the scourges of the sinner, but mercy shall encompass him that hopeth in the Lord.

31:11. Be glad in the Lord, and rejoice, ye just, and glory, all ye right of heart.

Psalms Chapter 32
Exultate, justi.

An exhortation to praise God, and to trust in him.

32:1. A psalm for David. Rejoice in the Lord, O ye just: praise becometh the upright.

32:2. Give praise to the Lord on the harp; sing to him with the psaltery, the instrument of ten strings.

32:3. Sing to him a new canticle, sing well unto him with a loud noise.

32:4. For the word of the Lord is right, and all his works are done with faithfulness.

32:5. He loveth mercy and judgment; the earth is full of the mercy of the Lord.

32:6. By the word of the Lord the heavens were established; and all the power of them by the spirit of his mouth:

32:7. Gathering together the waters of the sea, as in a vessel; laying up the depths in storehouses.

32:8. Let all the earth fear the Lord, and let all the inhabitants of the world be in awe of him.

32:9. For he spoke and they were made: he commanded and they were created.

32:10. The Lord bringeth to nought the counsels of nations; and he rejecteth the devices of people, and casteth away the counsels of princes.

32:11. But the counsel of the Lord standeth for ever: the thoughts of his heart to all generations.

32:12. Blessed is the nation whose God is the Lord: the people whom he hath chosen for his inheritance.

32:13. The Lord hath looked from heaven: he hath beheld all the sons of men.

32:14. From his habitation which he hath prepared, he hath looked upon all that dwell on the earth.

32:15. He who hath made the hearts of every one of them: who understandeth all their works.

32:16. The king is not saved by a great army: nor shall the giant be saved by his own great strength.

32:17. Vain is the horse for safety: neither shall he be saved by the abundance of his strength.

32:18. Behold the eyes of the Lord are on them that fear him: and on them that hope in his mercy.

32:19. To deliver their souls from death; and feed them in famine.

32:20. Our soul waiteth for the Lord: for he is our helper and protector.

32:21. For in him our heart shall rejoice: and in his holy name we have trusted.

32:22. Let thy mercy, O Lord, be upon us, as we have hoped in thee.

Psalms Chapter 33
Benedicam Dominum.

An exhortation to the praise, and service of God.

33:1. For David, when he changed his countenance before Achimelech, who dismissed him, and he went his way. [1 Kings 21.]

33:2. I will bless the Lord at all times, his praise shall be always in my mouth.

33:3. In the Lord shall my soul be praised: let the meek hear and rejoice.

33:4. O magnify the Lord with me; and let us extol his name together.

33:5. I sought the Lord, and he heard me; and he delivered me from all my troubles.

33:6. Come ye to him and be enlightened: and your faces shall not be confounded.

33:7. This poor man cried, and the Lord heard him: and saved him out of all his troubles.

33:8. The angel of the Lord shall encamp round about them that fear him: and shall deliver them.

33:9. O taste, and see that the Lord is sweet: blessed is the man that hopeth in him.

33:10. Fear the Lord, all ye his saints: for there is no want to them that fear him.

33:11. The rich have wanted, and have suffered hunger: but they that seek the Lord shall not be deprived of any good.

33:12. Come, children, hearken to me: I will teach you the fear of the Lord.

33:13. Who is the man that desireth life: who loveth to see good days?

33:14. Keep thy tongue from evil, and thy lips from speaking guile.

33:15. Turn away from evil and do good: seek after peace and pursue it.

33:16. The eyes of the Lord are upon the just: and his ears unto their prayers.

33:17. But the countenance of the Lord is against them that do evil things: to cut off the remembrance of them from the earth.

33:18. The just cried, and the Lord heard them: and delivered them out of all their troubles.

33:19. The Lord is nigh unto them that are of a contrite heart: and he will save the humble of spirit.

33:20. Many are the afflictions of the just; but out of them all will the Lord deliver them.

33:21. The Lord keepeth all their bones, not one of them shall be broken.

33:22. The death of the wicked is very evil: and they that hate the just shall be guilty.

33:23. The Lord will redeem the souls of his servants: and none of them that trust in him shall offend.

Psalms Chapter 34
Judica, Domine, nocentes me.

David, in the person of Christ, prayeth against his persecutors: prophetically foreshewing the punishments that shall fall upon them.

34:1. For David himself. Judge thou, O Lord, them that wrong me: overthrow them that fight against me.

34:2. Take hold of arms and shield: and rise up to help me.

34:3. Bring out the sword, and shut up the way against them that persecute me: say to my soul: I am thy salvation.

34:4. Let them be confounded and ashamed that seek after my soul. Let them be turned back and be confounded that devise evil against me.

34:5. Let them become as dust before the wind: and let the angel of the Lord straiten them.

34:6. Let their way become dark and slippery; and let the angel of the Lord pursue them.

34:7. For without cause they have hidden their net for me unto destruction: without cause they have upbraided my soul.

34:8. Let the snare which he knoweth not come upon him: and let the net which he hath hidden catch him: and into that very snare let them fall.

34:9. But my soul shall rejoice in the Lord; and shall be delighted in his salvation.

34:10. All my bones shall say: Lord, who is like to thee? Who deliverest the poor from the hand of them that are stronger than he; the needy and the poor from them that strip him.

34:11. Unjust witnesses rising up have asked me things I knew not.

34:12. They repaid me evil for good: to the depriving me of my soul.

34:13. But as for me, when they were troublesome to me, I was clothed with haircloth. I humbled my soul with fasting; and my prayer shall be turned into my bosom.

34:14. As a neighbour and as an own brother, so did I please: as one mourning and sorrowful so was I humbled.

34:15. But they rejoiced against me, and came together: scourges were gathered together upon me, and I knew not.

34:16. They were separated, and repented not: they tempted me, they scoffed at me with scorn: they gnashed upon me with their teeth.

34:17. Lord, when wilt thou look upon me? rescue thou my soul from their malice: my only one from the lions.

34:18. I will give thanks to thee in a great church; I will praise thee in a strong people.

34:19. Let not them that are my enemies wrongfully rejoice over me: who have hated me without cause, and wink with the eyes.

34:20. For they spoke indeed peaceably to me; and speaking in the anger of the earth they devised guile.

34:21. And they opened their mouth wide against me; they said: Well done, well done, our eyes have seen it.

34:22. Thou hast seen, O Lord, be not thou silent: O Lord, depart not from me.

34:23. Arise, and be attentive to my judgment: to my cause, my God, and my Lord.

34:24. Judge me, O Lord my God according to thy justice, and let them not rejoice over me.

34:25. Let them not say in their hearts: It is well, it is well, to our mind: neither let them say: We have swallowed him up.

34:26. Let them blush: and be ashamed together, who rejoice at my evils. Let them be clothed with confusion and shame, who speak great things against me.

34:27. Let them rejoice and be glad, who are well pleased with my justice, and let them say always: The Lord be magnified, who delights in the peace of his servant.

34:28. And my tongue shall meditate thy justice, thy praise all the day long.

Psalms Chapter 35
Dixit injustus.

The malice of sinners, and the goodness of God.

35:1. Unto the end, for the servant of God, David himself.

35:2. The unjust hath said within himself, that he would sin: there is no fear of God before his eyes.

35:3. For in his sight he hath done deceitfully, that his iniquity may be found unto hatred.

Unto hatred.... That is, hateful to God.

35:4. The words of his mouth are iniquity and guile: he would not understand that he might do well.

35:5. He hath devised iniquity on his bed, he hath set himself on every way that is not good: but evil he hath not hated.

35:6. O Lord, thy mercy is in heaven, and thy truth reacheth even to the clouds.

35:7. Thy justice is as the mountains of God, thy judgments are a great deep. Men and beasts thou wilt preserve, O Lord:

35:8. O how hast thou multiplied thy mercy, O God! But the children of men shall put their trust under the covert of thy wings.

35:9. They shall be inebriated with the plenty of thy house; and thou shalt make them drink of the torrent of thy pleasure.

35:10. For with thee is the fountain of life; and in thy light we shall see light.

35:11. Extend thy mercy to them that know thee, and thy justice to them that are right in heart.

35:12. Let not the foot of pride come to me, and let not the hand of the sinner move me.

35:13. There the workers of iniquity are fallen, they are cast out, and could not stand.

Psalms Chapter 36
Noli aemulari.

An exhortation to despise this world; and the short prosperity of the wicked; and to trust in Providence.

36:1. Be not emulous of evildoers; nor envy them that work iniquity.

36:2. For they shall shortly wither away as grass, and as the green herbs shall quickly fall.

36:3. Trust in the Lord, and do good, and dwell in the land, and thou shalt be fed with its riches.

36:4. Delight in the Lord, and he will give thee the requests of thy heart.

36:5. Commit thy way to the Lord, and trust in him, and he will do it.

36:6. And he will bring forth thy justice as the light, and thy judgment as the noonday.

36:7. Be subject to the Lord and pray to him. Envy not the man who prospereth in his way; the man who doth unjust things.

36:8. Cease from anger, and leave rage; have no emulation to do evil.

36:9. For evildoers shall be cut off: but they that wait upon the Lord, they shall inherit the land.

36:10. For yet a little while, and the wicked shall not be: and thou shalt seek his place, and shalt not find it.

36:11. But the meek shall inherit the land, and shall delight in abundance of peace.

36:12. The sinner shall watch the just man: and shall gnash upon him with his teeth.

36:13. But the Lord shall laugh at him: for he foreseeth that his day shall come.

36:14. The wicked have drawn out the sword: they have bent their bow. To cast down the poor and needy, to kill the upright of heart.

36:15. Let their sword enter into their own hearts, and let their bow be broken.

36:16. Better is a little to the just, than the great riches of the wicked.

36:17. For the arms of the wicked shall be broken in pieces; but the Lord strengtheneth the just.

36:18. The Lord knoweth the days of the undefiled; and their inheritance shall be for ever.

36:19. They shall not be confounded in the evil time; and in the days of famine they shall be filled:

36:20. Because the wicked shall perish. And the enemies of the Lord, presently after they shall be honoured and exalted, shall come to nothing and vanish like smoke.

36:21. The sinner shall borrow, and not pay again; but the just sheweth mercy and shall give.

36:22. For such as bless him shall inherit the land: but such as curse him shall perish.

36:23. With the Lord shall the steps of a man be directed, and he shall like well his way.

36:24. When he shall fall he shall not be bruised, for the Lord putteth his hand under him.

36:25. I have been young and now am old; and I have not seen the just forsaken, nor his seed seeking bread.

36:26. He sheweth mercy, and lendeth all the day long; and his seed shall be in blessing.

36:27. Decline from evil and do good, and dwell for ever and ever.

36:28. For the Lord loveth judgment, and will not forsake his saints: they shall be preserved for ever. The unjust shall be punished, and the seed of the wicked shall perish.

36:29. But the just shall inherit the land, and shall dwell therein for evermore.

36:30. The mouth of the just shall meditate wisdom: and his tongue shall speak judgment.

36:31. The law of his God is in his heart, and his steps shall not be supplanted.

36:32. The wicked watcheth the just man, and seeketh to put him to death,

36:33. But the Lord will not leave him in his hands; nor condemn him when he shall be judged.

36:34. Expect the Lord and keep his way: and he will exalt thee to inherit the land: when the sinners shall perish thou shalt see.

36:35. I have seen the wicked highly exalted, and lifted up like the cedars of Libanus.

36:36. And I passed by, and lo, he was not: and I sought him and his place was not found.

36:37. Keep innocence, and behold justice: for there are remnants for the peaceable man.

36:38. But the unjust shall be destroyed together: the remnants of the wicked shall perish.

36:39. But the salvation of the just is from the Lord, and he is their protector in the time of trouble.

36:40. And the Lord will help them and deliver them: and he will rescue them from the wicked, and save them because they have hoped in him.

Psalms Chapter 37
Domine, ne in furore.

A prayer of a penitent for the remission of his sins. The third penitential psalm.

37:1. A psalm for David, for a remembrance of the sabbath.

For a remembrance.... Viz., of our miseries and sins: and to be sung on the sabbath day.

37:2. Rebuke me not, O Lord, in thy indignation; nor chastise me in thy wrath.

37:3. For thy arrows are fastened in me: and thy hand hath been strong upon me.

37:4. There is no health in my flesh, because of thy wrath: there is no peace for my bones, because of my sins.

37:5. For my iniquities are gone over my head: and as a heavy burden are become heavy upon me.

37:6. My sores are putrified and corrupted, because of my foolishness.

37:7. I am become miserable, and am bowed down even to the end: I walked sorrowful all the day long.

37:8. For my loins are filled with illusions; and there is no health in my flesh.

37:9. I am afflicted and humbled exceedingly: I roared with the groaning of my heart.

37:10. Lord, all my desire is before thee, and my groaning is not hidden from thee.

37:11. My heart is troubled, my strength hath left me, and the light of my eyes itself is not with me.

37:12. My friends and my neighbours have drawn near, and stood against me. And they that were near me stood afar off:

37:13. And they that sought my soul used violence. And they that sought evils to me spoke vain things, and studied deceits all the day long.

37:14. But I, as a deaf man, heard not: and as a dumb man not opening his mouth.

37:15. And I became as a man that heareth not: and that hath no reproofs in his mouth.

37:16. For in thee, O Lord, have I hoped: thou wilt hear me, O Lord my God.

37:17. For I said: Lest at any time my enemies rejoice over me: and whilst my feet are moved, they speak great things against me.

37:18. For I am ready for scourges: and my sorrow is continually before me.

37:19. For I will declare my iniquity: and I will think for my sin.

37:20. But my enemies live, and are stronger than I: and they that hate me wrongfully are multiplied.

37:21. They that render evil for good, have detracted me, because I followed goodness.

37:22. For sake me not, O Lord my God: do not thou depart from me.

37:23. Attend unto my help, O Lord, the God of my salvation.

Psalms Chapter 38
Dixi custodiam.

A just man’s peace and patience in his sufferings; considering the vanity of the world, and the providence of God.

38:1. Unto the end, for Idithun himself, a canticle of David.

38:2. I said: I will take heed to my ways: that I sin not with my tongue. I have set a guard to my mouth, when the sinner stood against me.

38:3. I was dumb, and was humbled, and kept silence from good things: and my sorrow was renewed.

38:4. My heart grew hot within me: and in my meditation a fire shall flame out.

38:5. I spoke with my tongue: O Lord, make me know my end. And what is the number of my days: that I may know what is wanting to me.

38:6. Behold thou hast made my days measurable, and my substance is as nothing before thee. And indeed all things are vanity: every man living.

38:7. Surely man passeth as an image: yea, and he is disquieted in vain. He storeth up: and he knoweth not for whom he shall gather these things.

38:8. And now what is my hope? is it not the Lord? and my substance is with thee.

38:9. Deliver thou me from all my iniquities: thou hast made me a reproach to the fool.

38:10. I was dumb, and I opened not my mouth, because thou hast done it.

38:11. Remove thy scourges from me. The strength of thy hand hath made me faint in rebukes:

38:12. Thou hast corrected man for iniquity. And thou hast made his soul to waste away like a spider: surely in vain is any man disquieted.

38:13. Hear my prayer, O Lord, and my supplication: give ear to my tears. Be not silent: for I am a stranger with thee, and a sojourner as all my fathers were.

38:14. O forgive me, that I may be refreshed, before I go hence, and be no more.

Psalms Chapter 39
Expectans expectavi.

Christ’s coming, and redeeming mankind.

39:1. Unto the end, a psalm for David himself.

39:2. With expectation I have waited for the Lord, and he was attentive to me.

39:3. And he heard my prayers, and brought me out of the pit of misery and the mire of dregs. And he set my feet upon a rock, and directed my steps.

39:4. And he put a new canticle into my mouth, a song to our God. Many shall see, and shall fear: and they shall hope in the Lord.

39:5. Blessed is the man whose trust is in the name of the Lord; and who hath not had regard to vanities, and lying follies.

39:6. Thou hast multiplied thy wonderful works, O Lord my God: and in thy thoughts there is no one like to thee. I have declared and I have spoken they are multiplied above number.

39:7. Sacrifice and oblation thou didst not desire; but thou hast pierced ears for me. Burnt offering and sin offering thou didst not require:

39:8. Then said I, Behold I come. In the head of the book it is written of me

39:9. That I should do thy will: O my God, I have desired it, and thy law in the midst of my heart.

39:10. I have declared thy justice in a great church, lo, I will not restrain my lips: O Lord, thou knowest it.

39:11. I have not hid thy justice within my heart: I have declared thy truth and thy salvation. I have not concealed thy mercy and thy truth from a great council.

39:12. Withhold not thou, O Lord, thy tender mercies from me: thy mercy and thy truth have always upheld me.

39:13. For evils without number have surrounded me; my iniquities have overtaken me, and I was not able to see. They are multiplied above the hairs of my head: and my heart hath forsaken me.

My iniquities.... That is, the sins of all mankind, which I have taken upon me.

39:14. Be pleased, O Lord, to deliver me: look down, O Lord, to help me.

39:15. Let them be confounded and ashamed together, that seek after my soul to take it away. Let them be turned backward and be ashamed that desire evils to me.

39:16. Let them immediately bear their confusion, that say to me: ’Tis well, ’tis well.

’Tis well.... The Hebrew here is an interjection of insult and derision, like the Vah. Matt. 27.49.

39:17. Let all that seek thee rejoice and be glad in thee: and let such as love thy salvation say always: The Lord be magnified.

39:18. But I am a beggar and poor: the Lord is careful for me. Thou art my helper and my protector: O my God, be not slack.

Psalms Chapter 40
Beatus qui intelligit.

The happiness of him that shall believe in Christ; notwithstanding the humility and poverty in which he shall come: the malice of his enemies, especially of the traitor Judas.

40:1. Unto the end, a psalm for David himself.

40:2. Blessed is he that understandeth concerning the needy and the poor: the Lord will deliver him in the evil day.

40:3. The Lord preserve him and give him life, and make him blessed upon the earth: and deliver him not up to the will of his enemies.

40:4. The Lord help him on his bed of sorrow: thou hast turned all his couch in his sickness.

40:5. I said: O Lord, be thou merciful to me: heal my soul, for I have sinned against thee.

40:6. My enemies have spoken evils against me: when shall he die and his name perish?

40:7. And if he came in to see me, he spoke vain things: his heart gathered together iniquity to itself. He went out and spoke to the same purpose.

40:8. All my enemies whispered together against me: they devised evils to me.

40:9. They determined against me an unjust word: shall he that sleepeth rise again no more?

40:10. For even the man of my peace, in whom I trusted, who ate my bread, hath greatly supplanted me.

40:11. But thou, O Lord, have mercy on me, and raise me up again: and I will requite them.

40:12. By this I know, that thou hast had a good will for me: because my enemy shall not rejoice over me.

40:13. But thou hast upheld me by reason of my innocence: and hast established me in thy sight for ever.

40:14. Blessed be the Lord the God of Israel from eternity to eternity. So be it. So be it.

Psalms Chapter 41
Quemadmodum desiderat.

The fervent desire of the just after God: hope in afflictions.

41:1. Unto the end, understanding for the sons of Core.

41:2. As the hart panteth after the fountains of water; so my soul panteth after thee, O God.

41:3. My soul hath thirsted after the strong living God; when shall I come and appear before the face of God?

41:4. My tears have been my bread day and night, whilst it is said to me daily: Where is thy God?

41:5. These things I remembered, and poured out my soul in me: for I shall go over into the place of the wonderful tabernacle, even to the house of God: With the voice of joy and praise; the noise of one feasting.

41:6. Why art thou sad, O my soul? and why dost thou trouble me? Hope in God, for I will still give praise to him: the salvation of my countenance,

41:7. And my God. My soul is troubled within my self: therefore will I remember thee from the land of Jordan and Hermoniim, from the little hill.

41:8. Deep calleth on deep, at the noise of thy flood-gates. All thy heights and thy billows have passed over me.

41:9. In the daytime the Lord hath commanded his mercy; and a canticle to him in the night. With me is prayer to the God of my life.

41:10. I will say to God: Thou art my support. Why hast thou forgotten me? and why go I mourning, whilst my enemy afflicteth me?

41:11. Whilst my bones are broken, my enemies who trouble me have reproached me; Whilst they say to me day by day: Where is thy God?

41:12. Why art thou cast down, O my soul? and why dost thou disquiet me? Hope thou in God, for I will still give praise to him: the salvation of my countenance, and my God.

Psalms Chapter 42
Judica me, Deus.

The prophet aspireth after the temple and altar of God.

42:1. A psalm for David. Judge me, O God, and distinguish my cause from the nation that is not holy: deliver me from the unjust and deceitful man.

42:2. For thou art God my strength: why hast thou cast me off? and why do I go sorrowful whilst the enemy afflicteth me?

42:3. Send forth thy light and thy truth: they have conducted me, and brought me unto thy holy hill, and into thy tabernacles.

42:4. And I will go in to the altar of God: to God who giveth joy to my youth.

42:5. To thee, O God my God, I will give praise upon the harp: why art thou sad, O my soul? and why dost thou disquiet me?

42:6. Hope in God, for I will still give praise to him: the salvation of my countenance, and my God.

Psalms Chapter 43
Deus auribus nostris.

The church commemorates former favours, and present afflictions; under which she prays for succour.

43:1. Unto the end, for the sons of Core, to give understanding.

43:2. We have heard, O God, with our ears: our fathers have declared to us, The work thou hast wrought in their days, and in the days of old.

43:3. Thy hand destroyed the Gentiles, and thou plantedst them: thou didst afflict the people and cast them out.

43:4. For they got not the possession of the land by their own sword: neither did their own arm save them. But thy right hand and thy arm, and the light of thy countenance: because thou wast pleased with them.

43:5. Thou art thyself my king and my God, who commandest the saving of Jacob.

43:6. Through thee we will push down our enemies with the horn: and through thy name we will despise them that rise up against us.

43:7. For I will not trust in my bow: neither shall my sword save me.

43:8. But thou hast saved us from them that afflict us: and hast put them to shame that hate us.

43:9. In God shall we glory all the day long: and in thy name we will give praise for ever.

43:10. But now thou hast cast us off, and put us to shame: and thou, O God, wilt not go out with our armies.

43:11. Thou hast made us turn our back to our enemies: and they that hated us plundered for themselves.

43:12. Thou hast given us up like sheep to be eaten: thou hast scattered us among the nations.

43:13. Thou hast sold thy people for no price: and there was no reckoning in the exchange of them.

43:14. Thou hast made us a reproach to our neighbours, a scoff and derision to them that are round about us.

43:15. Thou hast made us a byword among the Gentiles: a shaking of the head among the people.

43:16. All the day long my shame is before me: and the confusion of my face hath covered me,

43:17. At the voice of him that reproacheth and detracteth me: at the face of the enemy and persecutor.

43:18. All these things have come upon us, yet we have not forgotten thee: and we have not done wickedly in thy covenant.

43:19. And our heart hath not turned back: neither hast thou turned aside our steps from thy way.

43:20. For thou hast humbled us in the place of affliction: and the shadow of death hath covered us.

43:21. If we have forgotten the name of our God, and if we have spread forth our hands to a strange god:

43:22. Shall not God search out these things: for he knoweth the secrets of the heart. Because for thy sake we are killed all the day long: we are counted as sheep for the slaughter.

43:23. Arise, why sleepest thou, O Lord? arise, and cast us not off to the end.

43:24. Why turnest thou thy face away? and forgettest our want and our trouble?

43:25. For our soul is humbled down to the dust: our belly cleaveth to the earth.

43:26. Arise, O Lord, help us and redeem us for thy name’s sake.

Psalms Chapter 44
Eructavit cor meum.

The excellence of Christ’s kingdom, and the endowments of his church.

44:1. Unto the end, for them that shall be changed, for the sons of Core, for understanding. A canticle for the Beloved.

For them that shall be changed.... i.e., for souls happily changed, by being converted to God.—Ibid. The Beloved.... Viz., Our Lord Jesus Christ.

44:2. My heart hath uttered a good word: I speak my works to the king: My tongue is the pen of a scrivener that writeth swiftly.

44:3. Thou art beautiful above the sons of men: grace is poured abroad in thy lips; therefore hath God blessed thee for ever.

44:4. Gird thy sword upon thy thigh, O thou most mighty.

44:5. With thy comeliness and thy beauty set out, proceed prosperously, and reign. Because of truth and meekness and justice: and thy right hand shall conduct thee wonderfully.

44:6. Thy arrows are sharp: under thee shall people fall, into the hearts of the king’s enemies.

44:7. Thy throne, O God, is forever and ever: the sceptre of thy kingdom is a sceptre of uprightness.

44:8. Thou hast loved justice, and hated iniquity: therefore God, thy God, hath anointed thee with the oil of gladness above thy fellows.

44:9. Myrrh and stacte and cassia perfume thy garments, from the ivory houses: out of which

44:10. The daughters of kings have delighted thee in thy glory. The queen stood on thy right hand, in gilded clothing; surrounded with variety.

44:11. Hearken, O daughter, and see, and incline thy ear: and forget thy people and thy father’s house.

44:12. And the king shall greatly desire thy beauty; for he is the Lord thy God, and him they shall adore.

44:13. And the daughters of Tyre with gifts, yea, all the rich among the people, shall entreat thy countenance.

44:14. All the glory of the king’s daughter is within in golden borders,

44:15. Clothed round about with varieties. After her shall virgins be brought to the king: her neighbours shall be brought to thee.

44:16. They shall be brought with gladness and rejoicing: they shall be brought into the temple of the king.

44:17. Instead of thy fathers, sons are born to thee: thou shalt make them princes over all the earth.

44:18. They shall remember thy name throughout all generations. Therefore shall people praise thee for ever; yea, for ever and ever.

Psalms Chapter 45
Deus noster refugium.

The church in persecution trusteth in the protection of God.

45:1. Unto the end, for the sons of Core, for the hidden.

45:2. Our God is our refuge and strength: a helper in troubles, which have found us exceedingly.

45:3. Therefore we will not fear, when the earth shall be troubled; and the mountains shall be removed into the heart of the sea.

45:4. Their waters roared and were troubled: the mountains were troubled with his strength.

45:5. The stream of the river maketh the city of God joyful: the most High hath sanctified his own tabernacle.

45:6. God is in the midst thereof, it shall not be moved: God will help it in the morning early.

45:7. Nations were troubled, and kingdoms were bowed down: he uttered his voice, the earth trembled.

45:8. The Lord of armies is with us: the God of Jacob is our protector.

45:9. Come and behold ye the works of the Lord: what wonders he hath done upon earth,

45:10. Making wars to cease even to the end of the earth. He shall destroy the bow, and break the weapons: and the shield he shall burn in the fire.

45:11. Be still and see that I am God; I will be exalted among the nations, and I will be exalted in the earth.

45:12. The Lord of armies is with us: the God of Jacob is our protector.

Psalms Chapter 46
Omnes gentes, plaudite.

The Gentiles are invited to praise God for the establishment of the kingdom of Christ.

46:1. Unto the end, for the sons of Core.

46:2. O clap your hands, all ye nations: shout unto God with the voice of joy,

46:3. For the Lord is high, terrible: a great king over all the earth.

46:4. He hath subdued the people under us; and the nations under our feet.

46:5. He hath chosen for us his inheritance, the beauty of Jacob which he hath loved.

46:6. God is ascended with jubilee, and the Lord with the sound of trumpet.

46:7. Sing praises to our God, sing ye: sing praises to our king, sing ye.

46:8. For God is the king of all the earth: sing ye wisely.

46:9. God shall reign over the nations: God sitteth on his holy throne.

46:10. The princes of the people are gathered together, with the God of Abraham: for the strong gods of the earth are exceedingly exalted.

Psalms Chapter 47
Magnus Dominus.

God is greatly to be praised for the establishment of his church.

47:1. A psalm of a canticle, for the sons of Core, on the second day of the week.

47:2. Great is the Lord, and exceedingly to be praised in the city of our God, in his holy mountain.

47:3. With the joy of the whole earth is mount Sion founded, on the sides of the north, the city of the great king.

47:4. In her houses shall God be known, when he shall protect her.

47:5. For behold the kings of the earth assembled themselves: they gathered together.

47:6. So they saw, and they wondered, they were troubled, they were moved:

47:7. Trembling took hold of them. There were pains as of a woman in labour.

47:8. With a vehement wind thou shalt break in pieces the ships of Tharsis.

47:9. As we have heard, so have we seen, in the city of the Lord of hosts, in the city of our God: God hath founded it for ever.

47:10. We have received thy mercy, O God, in the midst of thy temple.

47:11. According to thy name, O God, so also is thy praise unto the ends of the earth: thy right hand is full of justice.

47:12. Let mount Sion rejoice, and the daughters of Juda be glad; because of thy judgments, O Lord.

47:13. Surround Sion, and encompass her: tell lye in her towers.

47:14. Set your hearts on her strength; and distribute her houses, that ye may relate it in another generation.

47:15. For this is God, our God unto eternity, and for ever and ever: he shall rule us for evermore.

Psalms Chapter 48
Audite haec, omnes gentes.

The folly of worldlings, who live on in sin, without thinking of death or hell.

48:1. Unto the end, a psalm for the sons of Core.

48:2. Hear these things, all ye nations: give ear, all ye inhabitants of the world.

48:3. All you that are earthborn, and you sons of men: both rich and poor together.

48:4. My mouth shall speak wisdom: and the meditation of my heart understanding.

48:5. I will incline my ear to a parable; I will open my proposition on the psaltery.

48:6. Why shall I fear in the evil day? the iniquity of my heel shall encompass me.

The iniquity of my heel.... That is, the iniquity of my steps or ways: or the iniquity of my pride, with which as with the heel, I have spurned and kicked at my neighbours: or the iniquity of my heel, that is, the iniquity in which I shall be found in death. The meaning of this verse is, Why should I now indulge those passions and sinful affections, or commit now those sins, which will cause me so much fear and anguish in the evil day; when the sorrows of death shall compass me, and the perils of hell shall find me?

48:7. They that trust in their own strength, and glory in the multitude of their riches,

They that trust, etc.... As much as to say, let them fear that trust in their strength or riches: for they have great reason to fear: seeing no brother or other man, how much a friend soever, can by any price or labour rescue them from death.

48:8. No brother can redeem, nor shall man redeem: he shall not give to God his ransom,

48:9. Nor the price of the redemption of his soul: and shall labour for ever,

And shall labour for ever, etc.... This seems to be a continuation of the foregoing sentence: as much as to say no man can by any price or ransom prolong his life, that so he may still continue to labour here, and live to the end of the world. Others understand it of the eternal sorrows, and dying life of hell, which is the dreadful consequence of dying in sin.

48:10. And shall still live unto the end.

48:11. He shall not see destruction, when he shall see the wise dying: the senseless and the fool shall perish together: And they shall leave their riches to strangers:

He shall not see destruction, etc.... Or, shall he not see destruction? As much as to say, however thoughtless he may be of his death, he must not expect to escape; when even the wise and the good are not exempt from dying.

48:12. And their sepulchres shall be their houses for ever. Their dwelling places to all generations: they have called their lands by their names.

They have called, etc.... That is, they have left their names on their graves, which alone remain of their lands.

48:13. And man when he was in honour did not understand; he is compared to senseless beasts, and is become like to them.

48:14. This way of theirs is a stumblingblock to them: and afterwards they shall delight in their mouth.

They shall delight in their mouth.... Notwithstanding the wretched way in which they walk, they shall applaud themselves with their mouths, and glory in their doings.

48:15. They are laid in hell like sheep: death shall feed upon them. And the just shall have dominion over them in the morning; and their help shall decay in hell from their glory.

In the morning.... That is, in the resurrection to a new life; when the just shall judge and condemn the wicked. Ibid. From their glory.... That is, when their short-lived glory in this world shall be past, and be no more.

48:16. But God will redeem my soul from the hand of hell, when he shall receive me.

48:17. Be not thou afraid, when a man shall be made rich, and when the glory of his house shall be increased.

48:18. For when he shall die he shall take nothing away; nor shall his glory descend with him.

48:19. For in his lifetime his soul will be blessed: and he will praise thee when thou shalt do well to him.

48:20. He shall go in to the generations of his fathers: and he shall never see light.

48:21. Man when he was in honour did not understand: he hath been compared to senseless beasts, and made like to them.

Psalms Chapter 49
Deus deorum.

The coming of Christ: who prefers virtue and inward purity before the blood of victims.

49:1. A psalm for Asaph. The God of gods, the Lord hath spoken: and he hath called the earth. From the rising of the sun, to the going down thereof:

49:2. Out of Sion the loveliness of his beauty.

49:3. God shall come manifestly: our God shall come, and shall not keep silence. A fire shall burn before him: and a mighty tempest shall be round about him.

49:4. He shall call heaven from above, and the earth, to judge his people.

49:5. Gather ye together his saints to him: who set his covenant before sacrifices.

49:6. And the heavens shall declare his justice: for God is judge.

49:7. Hear, O my people, and I will speak: O Israel, and I will testify to thee: I am God, thy God.

49:8. I will not reprove thee for thy sacrifices: and thy burnt offerings are always in my sight.

49:9. I will not take calves out of thy house: nor he goats out of thy flocks.

49:10. For all the beasts of the woods are mine: the cattle on the hills, and the oxen.

49:11. I know all the fowls of the air: and with me is the beauty of the field.

49:12. If I should be hungry, I would not tell thee: for the world is mine, and the fulness thereof.

49:13. Shall I eat the flesh of bullocks? or shall I drink the blood of goats?

49:14. Offer to God the sacrifice of praise: and pay thy vows to the most High.

49:15. And call upon me in the day of trouble: I will deliver thee, and thou shalt glorify me.

49:16. But to the sinner God hath said: Why dost thou declare my justices, and take my covenant in thy mouth?

49:17. Seeing thou hast hated discipline: and hast cast my words behind thee.

49:18. If thou didst see a thief thou didst run with him: and with adulterers thou hast been a partaker.

49:19. Thy mouth hath abounded with evil, and thy tongue framed deceits.

49:20. Sitting thou didst speak against thy brother, and didst lay a scandal against thy mother’s son:

49:21. These things hast thou done, and I was silent. Thou thoughtest unjustly that I should be like to thee: but I will reprove thee, and set before thy face.

49:22. Understand these things, you that forget God; lest he snatch you away, and there be none to deliver you.

49:23. The sacrifice of praise shall glorify me: and there is the way by which I will shew him the salvation of God.

Psalms Chapter 50
Miserere.

The repentance and confession of David after his sin. The fourth penitential psalm.

50:1. Unto the end, a psalm of David,

50:2. When Nathan the prophet came to him, after he had sinned with Bethsabee. [2 Kings 12.]

50:3. Have mercy on me, O God, according to thy great mercy. And according to the multitude of thy tender mercies blot out my iniquity.

50:4. Wash me yet more from my iniquity, and cleanse me from my sin.

50:5. For I know my iniquity, and my sin is always before me.

50:6. To thee only have I sinned, and have done evil before thee: that thou mayst be justified in thy words, and mayst overcome when thou art judged.

50:7. For behold I was conceived in iniquities; and in sins did my mother conceive me.

50:8. For behold thou hast loved truth: the uncertain and hidden things of thy wisdom thou hast made manifest to me.

50:9. Thou shalt sprinkle me with hyssop, and I shall be cleansed: thou shalt wash me, and I shall be made whiter than snow.

50:10. To my hearing thou shalt give joy and gladness: and the bones that have been humbled shall rejoice.

50:11. Turn away thy face from my sins, and blot out all my iniquities.

50:12. Create a clean heart in me, O God: and renew a right spirit within my bowels.

50:13. Cast me not away from thy face; and take not thy holy spirit from me.

50:14. Restore unto me the joy of thy salvation, and strengthen me with a perfect spirit.

50:15. I will teach the unjust thy ways: and the wicked shall be converted to thee.

50:16. Deliver me from blood, O God, thou God of my salvation: and my tongue shall extol thy justice.

50:17. O Lord, thou wilt open my lips: and my mouth shall declare thy praise.

50:18. For if thou hadst desired sacrifice, I would indeed have given it: with burnt offerings thou wilt not be delighted.

50:19. A sacrifice to God is an afflicted spirit: a contrite and humbled heart, O God, thou wilt not despise.

50:20. Deal favourably, O Lord, in thy good will with Sion; that the walls of Jerusalem may be built up.

50:21. Then shalt thou accept the sacrifice of justice, oblations and whole burnt offerings: then shall they lay calves upon thy altar.

Psalms Chapter 51
Quid gloriaris.

David condemneth the wickedness of Doeg, and foretelleth his destruction.

51:1. Unto the end, understanding for David,

51:2. When Doeg the Edomite came and told Saul: David went to the house of Achimelech.

51:3. Why dost thou glory in malice, thou that art mighty in iniquity?

51:4. All the day long thy tongue hath devised injustice: as a sharp razor, thou hast wrought deceit.

51:5. Thou hast loved malice more than goodness: and iniquity rather than to speak righteousness.

51:6. Thou hast loved all the words of ruin, O deceitful tongue.

51:7. Therefore will God destroy thee for ever: he will pluck thee out, and remove thee from thy dwelling place: and thy root out of the land of the living.

51:8. The just shall see and fear, and shall laugh at him, and say:

51:9. Behold the man that made not God his helper: But trusted in the abundance of his riches: and prevailed in his vanity.

51:10. But I, as a fruitful olive tree in the house of God, have hoped in the mercy of God for ever, yea for ever and ever.

51:11. I will praise thee for ever, because thou hast done it: and I will wait on thy name, for it is good in the sight of thy saints.

Psalms Chapter 52
Dixit insipiens.

The general corruption of man before the coming of Christ.

52:1. Unto the end, for Maeleth, understandings to David. The fool said in his heart: There is no God.

Maeleth.... Or Machalath. A musical instrument, or a chorus of musicians, for St. Jerome renders it, per chorum.

52:2. They are corrupted, and become abominable in iniquities: there is none that doth good.

52:3. God looked down from heaven on the children of men: to see if there were any that did understand, or did seek God.

52:4. All have gone aside, they are become unprofitable together, there is none that doth good, no not one.

52:5. Shall not all the workers of iniquity know, who eat up my people as they eat bread?

52:6. They have not called upon God: there have they trembled for fear, where there was no fear. For God hath scattered the bones of them that please men: they have been confounded, because God hath despised them.

God hath scattered the bones, etc.... That is, God has brought to nothing the strength of all those that seek to please men, to the prejudice of their duty to their Maker.

52:7. Who will give out of Sion the salvation of Israel? when God shall bring back the captivity of his people, Jacob shall rejoice, and Israel shall be glad.

Psalms Chapter 53
Deus, in nomine tuo.

A prayer for help in distress.

53:1. Unto the end, in verses, understanding for David.

53:2. When the men of Ziph had come and said to Saul: Is not David hidden with us? [1 Kings 23.19]

53:3. Save me, O God, by thy name, and judge me in thy strength.

53:4. O God, hear my prayer: give ear to the words of my mouth.

53:5. For strangers have risen up against me; and the mighty have sought after my soul: and they have not set God before their eyes.

53:6. For behold God is my helper: and the Lord is the protector of my soul.

53:7. Turn back the evils upon my enemies; and cut them off in thy truth.

53:8. I will freely sacrifice to thee, and will give praise, O God, to thy name: because it is good:

53:9. For thou hast delivered me out of all trouble: and my eye hath looked down upon my enemies.

Psalms Chapter 54
Exaudi, Deus.

A prayer of a just man under persecution from the wicked. It agrees to Christ persecuted by the Jews, and betrayed by Judas.

54:1. Unto the end, in verses, understanding for David.

54:2. Hear, O God, my prayer, and despise not my supplication:

54:3. Be attentive to me and hear me. I am grieved in my exercise; and am troubled,

54:4. At the voice of the enemy, and at the tribulation of the sinner. For they have cast iniquities upon me: and in wrath they were troublesome to me.

54:5. My heart is troubled within me: and the fear of death is fallen upon me.

54:6. Fear and trembling are come upon me: and darkness hath covered me.

54:7. And I said: Who will give me wings like a dove, and I will fly and be at rest?

54:8. Lo, I have gone far off flying away; and I abode in the wilderness.

54:9. I waited for him that hath saved me from pusillanimity of spirit, and a storm.

54:10. Cast down, O Lord, and divide their tongues; for I have seen iniquity and contradiction in the city.

54:11. Day and night shall iniquity surround it upon its walls: and in the midst thereof are labour,

54:12. And injustice. And usury and deceit have not departed from its streets.

54:13. For if my enemy had reviled me, I would verily have borne with it. And if he that hated me had spoken great things against me, I would perhaps have hidden my self from him.

54:14. But thou a man of one mind, my guide, and my familiar,

54:15. Who didst take sweetmeats together with me: in the house of God we walked with consent.

54:16. Let death come upon them, and let them go down alive into hell. For there is wickedness in their dwellings: in the midst of them.

Let death, etc.... This, and such like imprecations which occur in the psalms, are delivered prophetically; that is, by way of foretelling the punishments which shall fall upon the wicked from divine justice, and approving the righteous ways of God: but not by way of ill will, or uncharitable curses, which the law of God disallows.

54:17. But I have cried to God: and the Lord will save me.

54:18. Evening and morning, and at noon I will speak and declare: and he shall hear my voice.

54:19. He shall redeem my soul in peace from them that draw near to me: for among many they were with me.

Among many, etc.... That is, they that drew near to attack me were many in company all combined to fight against me.

54:20. God shall hear, and the Eternal shall humble them. For there is no change with them, and they have not feared God:

54:21. He hath stretched forth his hand to repay. They have defiled his covenant,

54:22. They are divided by the wrath of his countenance, and his heart hath drawn near. His words are smoother than oil, and the same are darts.

They are divided, etc.... Dispersed, scattered, and brought to nothing, by the wrath of God; who looks with indignation on their wicked and deceitful ways.

54:23. Cast thy care upon the Lord, and he shall sustain thee: he shall not suffer the just to waver for ever.

54:24. But thou, O God, shalt bring them down into the pit of destruction. Bloody and deceitful men shall not live out half their days; but I will trust in thee, O Lord.

Psalms Chapter 55
Miserere mei, Deus.

A prayer of David in danger and distress.

55:1. Unto the end, for a people that is removed at a distance form the sanctuary: for David, for an inscription of a title (or pillar) when the Philistines held him in Geth.

55:2. Have mercy on me, O God, for man hath trodden me under foot; all the day long he hath afflicted me fighting against me.

55:3. My enemies have trodden on me all the day long; for they are many that make war against me.

55:4. From the height of the day I shall fear: but I will trust in thee.

The height of the day.... That is, even at noonday, when the sun is the highest, I am still in danger.

55:5. In God I will praise my words, in God I have put my trust: I will not fear what flesh can do against me.

My words.... The words or promises God has made in my favour.

55:6. All the day long they detested my words: all their thoughts were against me unto evil.

55:7. They will dwell and hide themselves: they will watch my heel. As they have waited for my soul,

55:8. For nothing shalt thou save them: in thy anger thou shalt break the people in pieces. O God,

For nothing shalt thou save them.... That is, since they lie in wait to ruin my soul, thou shalt for no consideration favour or assist them, but execute thy justice upon them.

55:9. I have declared to thee my life: thou hast set my tears in thy sight, As also in thy promise.

55:10. Then shall my enemies be turned back. In what day soever I shall call upon thee, behold I know thou art my God.

55:11. In God will I praise the word, in the Lord will I praise his speech. In God have I hoped, I will not fear what man can do to me.

55:12. In me, O God, are vows to thee, which I will pay, praises to thee:

55:13. Because thou hast delivered my soul from death, my feet from falling: that I may please in the sight of God, in the light of the living.

Psalms Chapter 56
Miserere mei, Deus. The prophet prays in his affliction, and praises God for his delivery.

56:1. Unto the end, destroy not, for David, for an inscription of a title, when he fled from Saul into the cave. [1 Kings 24.]

Destroy not.... Suffer me not to be destroyed.

56:2. Have mercy on me, O God, have mercy on me: for my soul trusteth in thee. And in the shadow of thy wings will I hope, until iniquity pass away.

56:3. I will cry to God the most high; to God who hath done good to me.

56:4. He hath sent from heaven and delivered me: he hath made them a reproach that trod upon me. God hath sent his mercy and his truth,

56:5. And he hath delivered my soul from the midst of the young lions. I slept troubled. The sons of men, whose teeth are weapons and arrows, and their tongue a sharp sword.

56:6. Be thou exalted, O God, above the heavens, and thy glory above all the earth.

56:7. They prepared a snare for my feet; and they bowed down my soul. They dug a pit before my face, and they are fallen into it.

56:8. My heart is ready, O God, my heart is ready: I will sing, and rehearse a psalm.

56:9. Arise, O my glory, arise psaltery and harp: I will arise early.

56:10. I will give praise to thee, O Lord, among the people: I will sing a psalm to thee among the nations.

56:11. For thy mercy is magnified even to the heavens: and thy truth unto the clouds.

56:12. Be thou exalted, O God, above the heavens: and thy glory above all the earth.

Psalms Chapter 57
Si vere utique.

David reproveth the wicked, and foretelleth their punishment.

57:1. Unto the end, destroy not, for David, for an inscription of a title.

57:2. If in very deed ye speak justice: judge right things, ye sons of men.

57:3. For in your heart you work iniquity: your hands forge injustice in the earth.

57:4. The wicked are alienated from the womb; they have gone astray from the womb: they have spoken false things.

57:5. Their madness is according to the likeness of a serpent: like the deaf asp that stoppeth her ears:

57:6. Which will not hear the voice of the charmers; nor of the wizard that charmeth wisely.

57:7. God shall break in pieces their teeth in their mouth: the Lord shall break the grinders of the lions.

57:8. They shall come to nothing, like water running down; he hath bent his bow till they be weakened.

57:9. Like wax that melteth they shall be taken away: fire hath fallen on them, and they shall not see the sun.

57:10. Before your thorns could know the brier; he swalloweth them up, as alive, in his wrath.

Before your thorns, etc.... That is, before your thorns grow up, so as to become strong briers, they shall be overtaken and consumed by divine justice, swallowing them up, as it were, alive in his wrath.

57:11. The just shall rejoice when he shall see the revenge: he shall wash his hands in the blood of the sinner.

Shall wash his hands, etc.... Shall applaud the justice of God, and take occasion from the consideration of the punishment of the wicked to wash and cleanse his hands from sin.

57:12. And man shall say: If indeed there be fruit to the just: there is indeed a God that judgeth them on the earth.

Psalms Chapter 58
Eripe me.

A prayer to be delivered from the wicked, with confidence in God’s help and protection. It agrees to Christ and his enemies the Jews.

58:1. Unto the end, destroy not, for David for an inscription of a title, when Saul sent and watched his house to kill him. [1 Kings 19.]

58:2. Deliver me from my enemies, O my God; and defend me from them that rise up against me.

58:3. Deliver me from them that work iniquity, and save me from bloody men.

58:4. For behold they have caught my soul: the mighty have rushed in upon me:

58:5. Neither is it my iniquity, nor my sin, O Lord: without iniquity have I run, and directed my steps.

58:6. Rise up thou to meet me, and behold: even thou, O Lord, the God of hosts, the God of Israel. Attend to visit all the nations: have no mercy on all them that work iniquity.

58:7. They shall return at evening, and shall suffer hunger like dogs: and shall go round about the city.

58:8. Behold they shall speak with their mouth, and a sword is in their lips: for who, say they, hath heard us?

58:9. But thou, O Lord, shalt laugh at them: thou shalt bring all the nations to nothing.

58:10. I will keep my strength to thee: for thou art my protector:

58:11. My God, his mercy shall prevent me.

58:12. God shall let me see over my enemies: slay them not, lest at any time my people forget. Scatter them by thy power; and bring them down, O Lord, my protector:

58:13. For the sin of their mouth, and the word of their lips: and let them be taken in their pride. And for their cursing and lying they shall be talked of,

58:14. When they are consumed: when they are consumed by thy wrath, and they shall be no more. And they shall know that God will rule Jacob, and all the ends of the earth.

58:15. They shall return at evening and shall suffer hunger like dogs: and shall go round about the city.

58:16. They shall be scattered abroad to eat, and shall murmur if they be not filled.

58:17. But I will sing thy strength: and will extol thy mercy in the morning. For thou art become my support, and my refuge, in the day of my trouble.

58:18. Unto thee, O my helper, will I sing, for thou art God my defence: my God my mercy.

Psalms Chapter 59
Deus, repulisti nos.

After many afflictions, the church of Christ shall prevail.

59:1. Unto the end, for them that shall be changed, for the inscription of a title, to David himself, for doctrine,

59:2. When he set fire to Mesopotamia of Syria and Sobal: and Joab returned and slew of Edom, in the vale of the saltpits, twelve thousand men.

59:3. O God, thou hast cast us off, and hast destroyed us; thou hast been angry, and hast had mercy on us.

59:4. Thou hast moved the earth, and hast troubled it: heal thou the breaches thereof, for it has been moved.

59:5. Thou hast shewn thy people hard things; thou hast made us drink the wine of sorrow.

59:6. Thou hast given a warning to them that fear thee: that they may flee from before the bow: That thy beloved may be delivered.

59:7. Save me with thy right hand, and hear me.

59:8. God hath spoken in his holy place: I will rejoice, and I will divide Sichem; and will mete out the vale of tabernacles.

59:9. Galaad is mine, and Manasses is mine: and Ephraim is the strength of my head. Juda is my king:

59:10. Moab is the pot of my hope. Into Edom will I stretch out my shoe: to me the foreigners are made subject.

The pot of my hope.... Or my watering pot. That is, a vessel for meaner uses, by being reduced to serve me, even in the meanest employments.—Ibid. Foreigners.... So the Philistines are called, who had no kindred with the Israelites; whereas the Edomites, Moabites, etc., were originally of the same family.

59:11. Who will bring me into the strong city? who will lead me into Edom?

59:12. Wilt not thou, O God, who hast cast us off? and wilt not thou, O God, go out with our armies?

59:13. Give us help from trouble: for vain is the salvation of man.

59:14. Through God we shall do mightily: and he shall bring to nothing them that afflict us.

Psalms Chapter 60
Exaudi, Deus.

A prayer for the coming of the kingdom of Christ, which shall have no end.

60:1. Unto the end, in hymns, for David.

60:2. Hear, O God, my supplication: be attentive to my prayer.

60:3. To thee have I cried from the ends of the earth: when my heart was in anguish, thou hast exalted me on a rock. Thou hast conducted me;

60:4. For thou hast been my hope; a tower of strength against the face of the enemy.

60:5. In thy tabernacle I shall dwell for ever: I shall be protected under the covert of thy wings.

60:6. For thou, my God, hast heard my prayer: thou hast given an inheritance to them that fear thy name.

60:7. Thou wilt add days to the days of the king: his years even to generation and generation.

60:8. He abideth for ever in the sight of God: his mercy and truth who shall search?

60:9. So will I sing a psalm to thy name for ever and ever: that I may pay my vows from day to day.

Psalms Chapter 61
Nonne Deo.

The prophet encourageth himself and all others to trust in God, and serve him.

61:1. Unto the end, for Idithun, a psalm of David.

61:2. Shall not my soul be subject to God? for from him is my salvation.

61:3. For he is my God and my saviour: he is my protector, I shall be moved no more.

61:4. How long do you rush in upon a man? you all kill, as if you were thrusting down a leaning wall, and a tottering fence.

61:5. But they have thought to cast away my price; I ran in thirst: they blessed with their mouth, but cursed with their heart.

61:6. But be thou, O my soul, subject to God: for from him is my patience.

61:7. For he is my God and my saviour: he is my helper, I shall not be moved.

61:8. In God is my salvation and my glory: he is the God of my help, and my hope is in God.

61:9. Trust in him, all ye congregation of people: pour out your hearts before him. God is our helper for ever.

61:10. But vain are the sons of men, the sons of men are liars in the balances: that by vanity they may together deceive.

Are liars in the balances, etc.... They are so vain and light, that if they are put into the scales, they will be found to be of no weight; and to be mere lies, deceit, and vanity. Or, They are liars in their balances, by weighing things by false weights, and preferring the temporal before the eternal.

61:11. Trust not in iniquity, and cover not robberies: if riches abound, set not your heart upon them.

61:12. God hath spoken once, these two things have I heard, that power belongeth to God,

61:13. And mercy to thee, O Lord; for thou wilt render to every man according to his works.

Psalms Chapter 62
Deus Deus meus, ad te.

The prophet aspireth after God.

62:1. A psalm of David while he was in the desert of Edom.

62:2. O God, my God, to thee do I watch at break of day. For thee my soul hath thirsted; for thee my flesh, O how many ways!

62:3. In a desert land, and where there is no way, and no water: so in the sanctuary have I come before thee, to see thy power and thy glory.

62:4. For thy mercy is better than lives: thee my lips will praise.

62:5. Thus will I bless thee all my life long: and in thy name I will lift up my hands.

62:6. Let my soul be filled as with marrow and fatness: and my mouth shall praise thee with joyful lips.

62:7. If I have remembered thee upon my bed, I will meditate on thee in the morning:

62:8. Because thou hast been my helper. And I will rejoice under the covert of thy wings:

62:9. My soul hath stuck close to thee: thy right hand hath received me.

62:10. But they have sought my soul in vain, they shall go into the lower parts of the earth:

62:11. They shall be delivered into the hands of the sword, they shall be the portions of foxes.

62:12. But the king shall rejoice in God, all they shall be praised that swear by him: because the mouth is stopped of them that speak wicked things.

Psalms Chapter 63
Exaudi Deus orationem.

A prayer in affliction, with confidence in God that he will bring to nought the machinations of persecutors.

63:1. Unto the end, a psalm for David.

63:2. Hear O God, my prayer, when I make supplication to thee: deliver my soul from the fear of the enemy.

63:3. Thou hast protected me from the assembly of the malignant; from the multitude of the workers of iniquity.

63:4. For they have whetted their tongues like a sword; they have bent their bow a bitter thing,

63:5. To shoot in secret the undefiled.

63:6. They will shoot at him on a sudden, and will not fear: they are resolute in wickedness. They have talked of hiding snares; they have said: Who shall see them?

63:7. They have searched after iniquities: they have failed in their search. Man shall come to a deep heart:

A deep heart.... That is, crafty, subtle, deep projects and designs; which nevertheless shall not succeed; for God shall be exalted in bringing them to nought by his wisdom and power.

63:8. And God shall be exalted. The arrows of children are their wounds:

The arrows of children are their wounds.... That is, the wounds, stripes, or blows, they seek to inflict upon the just, are but like the weak efforts of children’s arrows, which can do no execution: and their tongues, that is, their speeches against them come to nothing.

63:9. And their tongues against them are made weak. All that saw them were troubled;

63:10. And every man was afraid. And they declared the works of God, and understood his doings.

63:11. The just shall rejoice in the Lord, and shall hope in him: and all the upright in heart shall be praised.

Psalms Chapter 64
Te decet.

God is to be praised in his church, to which all nations shall be called.

64:1. To the end, a psalm of David. The canticle of Jeremias and Ezechiel to the people of the captivity, when they began to go out.

Of the captivity.... That is, the people of the captivity of Babylon. This is not in the Hebrew, but is found in the ancient translation of the Septuagint.

64:2. A hymn, O God, becometh thee in Sion: and a vow shall be paid to thee in Jerusalem.

64:3. O hear my prayer: all flesh shall come to thee.

64:4. The words of the wicked have prevailed over us: and thou wilt pardon our transgressions.

64:5. Blessed is he whom thou hast chosen and taken to thee: he shall dwell in thy courts. We shall be filled with the good things of thy house; holy is thy temple,

64:6. Wonderful in justice. Hear us, O God our saviour, who art the hope of all the ends of the earth, and in the sea afar off.

64:7. Thou who preparest the mountains by thy strength, being girded with power:

64:8. Who troublest the depth of the sea, the noise of its waves. The Gentiles shall be troubled,

64:9. And they that dwell in the uttermost borders shall be afraid at thy signs: thou shalt make the outgoings of the morning and of the evening to be joyful.

64:10. Thou hast visited the earth, and hast plentifully watered it; thou hast many ways enriched it. The river of God is filled with water, thou hast prepared their food: for so is its preparation.

64:11. Fill up plentifully the streams thereof, multiply its fruits; it shall spring up and rejoice in its showers.

64:12. Thou shalt bless the crown of the year of thy goodness: and thy fields shall be filled with plenty.

64:13. The beautiful places of the wilderness shall grow fat: and the hills shall be girded about with joy,

64:14. The rams of the flock are clothed, and the vales shall abound with corn: they shall shout, yea they shall sing a hymn.

Psalms Chapter 65
Jubilate Deo.

An invitation to praise God.

65:1. Unto the end, a canticle of a psalm of the resurrection. Shout with joy to God, all the earth,

65:2. Sing ye a psalm to his name; give glory to his praise.

65:3. Say unto God, How terrible are thy works, O Lord! in the multitude of thy strength thy enemies shall lie to thee.

65:4. Let all the earth adore thee, and sing to thee: let it sing a psalm to thy name.

65:5. Come and see the works of God; who is terrible in his counsels over the sons of men.

65:6. Who turneth the sea into dry land, in the river they shall pass on foot: there shall we rejoice in him.

65:7. Who by his power ruleth for ever: his eyes behold the nations; let not them that provoke him be exalted in themselves.

65:8. O bless our God, ye Gentiles: and make the voice of his praise to be heard.

65:9. Who hath set my soul to live: and hath not suffered my feet to be moved:

65:10. For thou, O God, hast proved us: thou hast tried us by fire, as silver is tried.

65:11. Thou hast brought us into a net, thou hast laid afflictions on our back:

65:12. Thou hast set men over our heads. We have passed through fire and water, and thou hast brought us out into a refreshment.

65:13. I will go into thy house with burnt offerings: I will pay thee my vows,

65:14. Which my lips have uttered, And my mouth hath spoken, when I was in trouble.

65:15. I will offer up to thee holocausts full of marrow, with burnt offerings of rams: I will offer to thee bullocks with goats.

65:16. Come and hear, all ye that fear God, and I will tell you what great things he hath done for my soul.

65:17. I cried to him with my mouth: and I extolled him with my tongue.

65:18. If I have looked at iniquity in my heart, the Lord will not hear me.

65:19. Therefore hath God heard me, and hath attended to the voice of my supplication.

65:20. Blessed be God, who hath not turned away my prayer, nor his mercy from me.

Psalms Chapter 66
Deus misereatur.

A prayer for the propagation of the church.

66:1. Unto the end, in hymns, a psalm of a canticle for David.

66:2. May God have mercy on us, and bless us: may he cause the light of his countenance to shine upon us, and may he have mercy on us.

66:3. That we may know thy way upon earth: thy salvation in all nations.

66:4. Let people confess to thee, O God: let all people give praise to thee.

66:5. Let the nations be glad and rejoice: for thou judgest the people with justice, and directest the nations upon earth.

66:6. Let the people, O God, confess to thee: let all the people give praise to thee:

66:7. The earth hath yielded her fruit. May God, our God bless us,

66:8. May God bless us: and all the ends of the earth fear him.

Psalms Chapter 67
Exurgat Deus.

The glorious establishment of the church of the New Testament, prefigured by the benefits bestowed on the people of Israel.

67:1. Unto the end, a psalm of a canticle for David himself.

67:2. Let God arise, and let his enemies be scattered: and let them that hate him flee from before his face.

67:3. As smoke vanisheth, so let them vanish away: as wax melteth before the fire, so let the wicked perish at the presence of God.

67:4. And let the just feast, and rejoice before God: and be delighted with gladness.

67:5. Sing ye to God, sing a psalm to his name, make a way for him who ascendeth upon the west: the Lord is his name. Rejoice ye before him: but the wicked shall be troubled at his presence,

Who ascendeth upon the west.... Super occasum. St. Gregory understands it of Christ, who after his going down, like the sun, in the west, by his passion and death, ascended more glorious, and carried all before him. St. Jerome renders it, who ascendeth, or cometh up, through the deserts.

67:6. Who is the father of orphans, and the judge of widows. God in his holy place:

67:7. God who maketh men of one manner to dwell in a house: Who bringeth out them that were bound in strength; in like manner them that provoke, that dwell in sepulchres.

Of one manner.... That is, agreeing in faith, unanimous in love, and following the same manner of discipline. It is verified in the servants of God, living together in his house, which is the church. 1 Tim. 3.15.—Ibid. Them that were bound, etc.... The power and mercy of God appears in his bringing out of their captivity those that were strongly bound in their sins: and in restoring to his grace those whose behaviour had been most provoking; and who by their evil habits were not only dead, but buried in their sepulchres.

67:8. O God, when thou didst go forth in the sight of thy people, when thou didst pass through the desert:

67:9. The earth was moved, and the heavens dropped at the presence of the God of Sina, at the presence of the God of Israel.

67:10. Thou shalt set aside for thy inheritance a free rain, O God: and it was weakened, but thou hast made it perfect.

A free rain.... the manna, which rained plentifully from heaven, in favour of God’s inheritance, that is, of his people Israel: which was weakened indeed under a variety of afflictions, but was made perfect by God; that is, was still supported by divine providence, and brought on to the promised land. It agrees particularly to the church of Christ his true inheritance, which is plentifully watered with the free rain of heavenly grace; and through many infirmities, that is, crosses and tribulations, is made perfect, and fitted for eternal glory.

67:11. In it shall thy animals dwell; in thy sweetness, O God, thou hast provided for the poor.

In it, etc.... That is, in this church, which is thy fold and thy inheritance, shall thy animals, thy sheep, dwell: where thou hast plentifully provided for them.

67:12. The Lord shall give the word to them that preach good tidings with great power.

To them that preach good tidings.... Evangelizantibus. That is, to the preachers of the gospel; who receiving the word from the Lord, shall with great power and efficacy preach throughout the world the glad tidings of a Saviour, and of eternal salvation through him.

67:13. The king of powers is of the beloved, of the beloved; and the beauty of the house shall divide spoils.

The king of powers.... That is, the mighty King, the Lord of hosts, is of the beloved, of the beloved; that is, is on the side of Christ, his most beloved son: and his beautiful house, viz., the church, in which God dwells forever, shall by her spiritual conquests divide the spoils of many nations. The Hebrew (as it now stands pointed) is thus rendered, The kings of armies have fled, they have fled, and she that dwells at home (or the beauty of the house) shall divide the spoils.

67:14. If you sleep among the midst of lots, you shall be as the wings of a dove covered with silver, and the hinder parts of her back with the paleness of gold.

If you sleep among the midst of lots (intermedios cleros, etc.)... Viz., in such dangers and persecutions, as if your enemies were casting lots for your goods and persons: or in the midst of the lots, (intermedios terminos, as St. Jerome renders it,) that is, upon the very bounds or borders of the dominions of your enemies: you shall be secure nevertheless under the divine protection; and shall be enabled to fly away, like a dove, with glittering wings and feathers shining like the palest and most precious gold; that is, with great increase of virtue, and glowing with the fervour of charity.

67:15. When he that is in heaven appointeth kings over her, they shall be whited with snow in Selmon.

Kings over her.... That is, pastors and rulers over his church, viz., the apostles and their successors. Then by their ministry shall men be made whiter than the snow which lies on the top of the high mountain Selmon.

67:16. The mountain of God is a fat mountain. A curdled mountain, a fat mountain.

The mountain of God.... The church, which, Isa. 2.2, is called The mountain of the house of the Lord upon the top of mountains. It is here called a fat and a curdled mountain; that is to say, most fruitful, and enriched by the spiritual gifts and graces of the Holy Ghost.

67:17. Why suspect, ye curdled mountains? A mountain in which God is well pleased to dwell: for there the Lord shall dwell unto the end.

Why suspect, ye curdled mountains?.... Why do you suppose or imagine there may be any other such curdled mountains? You are mistaken: the mountain thus favoured by God is but one; and this same he has chosen for his dwelling for ever.

67:18. The chariot of God is attended by ten thousands; thousands of them that rejoice: the Lord is among them in Sina, in the holy place.

The chariot of God.... Descending to give his law on mount Sina: as also of Jesus Christ his Son, ascending into heaven, to send from thence the Holy Ghost, to publish his new law, is attended with ten thousands, that is, with an innumerable multitude of joyful angels.

67:19. Thou hast ascended on high, thou hast led captivity captive; thou hast received gifts in men. Yea for those also that do not believe, the dwelling of the Lord God.

Led captivity captive.... Carrying away with thee to heaven those who before had been the captives of Satan; and receiving from God the Father gifts to be distributed to men; even to those who were before unbelievers.

67:20. Blessed be the Lord day by day: the God of our salvation will make our journey prosperous to us.

67:21. Our God is the God of salvation: and of the Lord, of the Lord are the issues from death.

The issues from death.... The Lord alone is master of the issues, by which we may escape from death.

67:22. But God shall break the heads of his enemies: the hairy crown of them that walk on in their sins.

67:23. The Lord said: I will turn them from Basan, I will turn them into the depth of the sea:

I will turn them from Basan, etc.... I will cast out my enemies from their rich possessions, signified by Basan, a fruitful country; and I will drive them into the depth of the sea: and make such a slaughter of them, that the feet of my servants may be dyed in their blood, etc.

67:24. That thy foot may be dipped in the blood of thy enemies; the tongue of thy dogs be red with the same.

67:25. They have seen thy goings, O God, the goings of my God: of my king who is in his sanctuary.

Thy goings.... Thy ways, thy proceedings, by which thou didst formerly take possession of the promised land in favour of thy people; and shalt afterwards of the whole world, which thou shalt subdue to thy Son.

67:26. Princes went before joined with singers, in the midst of young damsels playing on timbrels.

Princes.... The apostles, the first converters of nations; attended by numbers of perfect souls, singing the divine praises, and virgins consecrated to God.

67:27. In the churches bless ye God the Lord, from the fountains of Israel.

From the fountains of Israel.... From whom both Christ and his apostles sprung. By Benjamin, the holy fathers on this place understand St. Paul, who was of that tribe, named here a youth, because he was the last called to the apostleship. By the princes of Juda, Zabulon, and Nephthali, we may understand the other apostles, who were of the tribe of Juda; or of the tribes of Zabulon, and Nephthali, where our Lord began to preach, Matt. 4.13, etc.

67:28. There is Benjamin a youth, in ecstasy of mind. The princes of Juda are their leaders: the princes of Zabulon, the princes of Nephthali.

67:29. Command thy strength, O God confirm, O God, what thou hast wrought in us.

Command thy strength.... Give orders that thy strength may be always with us.

67:30. From thy temple in Jerusalem, kings shall offer presents to thee.

67:31. Rebuke the wild beasts of the reeds, the congregation of bulls with the kine of the people; who seek to exclude them who are tried with silver. Scatter thou the nations that delight in wars:

Rebuke the wild beasts of the reeds.... or the wild beasts, which lie hid in the reeds. That is, the devils, who hide themselves in order to surprise their prey. Or by wild beasts, are here understood persecutors, who, for all their attempts against the Church, are but as weak reeds, which cannot prevail against them who are supported by the strength of the Almighty. The same are also called the congregation of bulls (from their rage against the Church) who assemble together all their kine, that is, the people their subjects, to exclude if they can, from Christ and his inheritance, his constant confessors, who are like silver tried by fire.

67:32. Ambassadors shall come out of Egypt: Ethiopia shall soon stretch out her hands to God.

Ambassadors shall come, etc.... It is a prophecy of the conversion of the Gentiles, and by name of the Egyptians and Ethiopians.

67:33. Sing to God, ye kingdoms of the earth: sing ye to the Lord: Sing ye to God,

67:34. Who mounteth above the heaven of heavens, to the east. Behold he will give to his voice the voice of power:

To the east.... From mount Olivet, which is on the east side of Jerusalem.—Ibid. The voice of power.... That is, he will make his voice to be a powerful voice: by calling from death to life, such as were dead in mortal sin: as at the last day he will by the power of his voice call all the dead from their graves.

67:35. Give ye glory to God for Israel, his magnificence, and his power is in the clouds.

67:36. God is wonderful in his saints: the God of Israel is he who will give power and strength to his people. Blessed be God.

Psalms Chapter 68
Salvum me fac, Deus.

Christ in his passion declareth the greatness of his sufferings, and the malice of his persecutors the Jews; and foretelleth their reprobation.

68:1. Unto the end, for them that shall be changed; for David.

For them that shall be changed.... A psalm for Christian converts, to remember the passion of Christ.

68:2. Save me, O God: for the waters are come in even unto my soul.

The waters.... Of afflictions and sorrows. My soul is sorrowful even unto death. Matt. 26.38.

68:3. I stick fast in the mire of the deep and there is no sure standing. I am come into the depth of the sea, and a tempest hath overwhelmed me.

68:4. I have laboured with crying; my jaws are become hoarse, my eyes have failed, whilst I hope in my God.

68:5. They are multiplied above the hairs of my head, who hate me without cause. My enemies are grown strong who have wrongfully persecuted me: then did I pay that which I took not away.

I pay that which I took not away.... Christ in his passion made restitution of what he had not taken away, by suffering the punishment due to our sins, and so repairing the injury we had done to God.

68:6. O God, thou knowest my foolishness; and my offences are not hidden from thee:

My foolishness and my offences.... which my enemies impute to me: or the follies and sins of men, which I have taken upon myself.

68:7. Let not them be ashamed for me, who look for thee, O Lord, the Lord of hosts. Let them not be confounded on my account, who seek thee, O God of Israel.

68:8. Because for thy sake I have borne reproach; shame hath covered my face.

68:9. I am become a stranger to my brethren, and an alien to the sons of my mother.

68:10. For the zeal of thy house hath eaten me up: and the reproaches of them that reproached thee are fallen upon me.

68:11. And I covered my soul in fasting: and it was made a reproach to me.

68:12. And I made haircloth my garment: and I became a byword to them.

68:13. They that sat in the gate spoke against me: and they that drank wine made me their song.

68:14. But as for me, my prayer is to thee, O Lord; for the time of thy good pleasure, O God. In the multitude of thy mercy hear me, in the truth of thy salvation.

68:15. Draw me out of the mire, that I may not stick fast: deliver me from them that hate me, and out of the deep waters.

68:16. Let not the tempest of water drown me, nor the deep water swallow me up: and let not the pit shut her mouth upon me.

68:17. Hear me, O Lord, for thy mercy is kind; look upon me according to the multitude of thy tender mercies.

68:18. And turn not away thy face from thy servant: for I am in trouble, hear me speedily.

68:19. Attend to my soul, and deliver it: save me because of my enemies.

68:20. Thou knowest my reproach, and my confusion, and my shame.

68:21. In thy sight are all they that afflict me; my heart hath expected reproach and misery. And I looked for one that would grieve together with me, but there was none: and for one that would comfort me, and I found none.

68:22. And they gave me gall for my food, and in my thirst they gave me vinegar to drink.

68:23. Let their table become as a snare before them, and a recompense, and a stumblingblock.

Let their table, etc.... What here follows in the style of an imprecation, is a prophecy of the wretched state to which the Jews should be reduced in punishment of their wilful obstinacy.

68:24. Let their eyes be darkened that they see not; and their back bend thou down always.

68:25. Pour out thy indignation upon them: and let thy wrathful anger take hold of them.

68:26. Let their habitation be made desolate: and let there be none to dwell in their tabernacles.

68:27. Because they have persecuted him whom thou hast smitten; and they have added to the grief of my wounds.

68:28. Add thou iniquity upon their iniquity: and let them not come into thy justice.

68:29. Let them be blotted out of the book of the living; and with the just let them not be written.

68:30. But I am poor and sorrowful: thy salvation, O God, hath set me up.

68:31. I will praise the name of God with a canticle: and I will magnify him with praise.

68:32. And it shall please God better than a young calf, that bringeth forth horns and hoofs.

68:33. Let the poor see and rejoice: seek ye God, and your soul shall live.

68:34. For the Lord hath heard the poor: and hath not despised his prisoners.

68:35. Let the heavens and the earth praise him; the sea, and every thing that creepeth therein.

68:36. For God will save Sion, and the cities of Juda shall be built up. And they shall dwell there, and acquire it by inheritance.

Sion.... The catholic church. The cities of Juda, etc., her places of worship, which shall be established throughout the world. And there, viz., in this church of Christ, shall his servants dwell, etc.

68:37. And the seed of his servants shall possess it; and they that love his name shall dwell therein.

Psalms Chapter 69
Deus in adjutorium.

A prayer in persecution.

69:1. Unto the end, a psalm for David, to bring to remembrance that the Lord saved him.

69:2. O God, come to my assistance; O Lord, make haste to help me.

69:3. Let them be confounded and ashamed that seek my soul:

69:4. Let them be turned backward, and blush for shame that desire evils to me: Let them be presently turned away blushing for shame that say to me: ’Tis well, ’tis well.

’Tis well, ’tis well.... Euge, euge. St. Jerome renders it, vah, vah! which is the voice of one insulting and deriding. Some understand it as a detestation of deceitful flatterers.

69:5. Let all that seek thee rejoice and be glad in thee; and let such as love thy salvation say always: The Lord be magnified.

69:6. But I am needy and poor; O God, help me. Thou art my helper and my deliverer: O lord, make no delay.

Psalms Chapter 70
In te, Domine.

A prayer for perseverance.

70:1. A psalm for David. Of the sons of Jonadab, and the former captives. In thee, O Lord, I have hoped, let me never be put to confusion:

Of the sons of Jonadab.... The Rechabites, of whom see Jer. 35. By this addition of the seventy-two interpreters, we gather that this psalm was usually sung in the synagogue, in the person of the Rechabites, and of those who were first carried away into captivity.

70:2. Deliver me in thy justice, and rescue me. Incline thy ear unto me, and save me.

70:3. Be thou unto me a God, a protector, and a place of strength: that thou mayst make me safe. For thou art my firmament and my refuge.

70:4. Deliver me, O my God, out of the hand of the sinner, and out of the hand of the transgressor of the law and of the unjust.

70:5. For thou art my patience, O Lord: my hope, O Lord, from my youth.

70:6. By thee have I been confirmed from the womb: from my mother’s womb thou art my protector. Of thee I shall continually sing:

70:7. I am become unto many as a wonder, but thou art a strong helper.

70:8. Let my mouth be filled with praise, that I may sing thy glory; thy greatness all the day long.

70:9. Cast me not off in the time of old age: when my strength shall fail, do not thou forsake me.

70:10. For my enemies have spoken against me; and they that watched my soul have consulted together,

70:11. Saying: God hath forsaken him: pursue and take him, for there is none to deliver him.

70:12. O God, be not thou far from me: O my God, make haste to my help.

70:13. Let them be confounded and come to nothing that detract my soul; let them be covered with confusion and shame that seek my hurt.

70:14. But I will always hope; and will add to all thy praise.

70:15. My mouth shall shew forth thy justice; thy salvation all the day long. Because I have not known learning,

Learning.... As much as to say, I build not upon human learning, but only on the power and justice of God.

70:16. I will enter into the powers of the Lord: O Lord, I will be mindful of thy justice alone.

70:17. Thou hast taught me, O God, from my youth: and till now I will declare thy wonderful works.

70:18. And unto old age and grey hairs: O God, forsake me not, Until I shew forth thy arm to all the generation that is to come: Thy power,

70:19. And thy justice, O God, even to the highest great things thou hast done: O God, who is like to thee?

70:20. How great troubles hast thou shewn me, many and grievous: and turning thou hast brought me to life, and hast brought me back again from the depths of the earth:

70:21. Thou hast multiplied thy magnificence; and turning to me thou hast comforted me.

70:22. For I will also confess to thee thy truth with the instruments of psaltery: O God, I will sing to thee with the harp, thou holy one of Israel.

70:23. My lips shall greatly rejoice, when I shall sing to thee; and my soul which thou hast redeemed.

70:24. Yea and my tongue shall meditate on thy justice all the day; when they shall be confounded and put to shame that seek evils to me.

Psalms Chapter 71
Deus, judicium tuum.

A prophecy of the coming of Christ, and of his kingdom: prefigured by Solomon and his happy reign.

71:1. A psalm on Solomon.

71:2. Give to the king thy judgment, O God, and to the king’s son thy justice: To judge thy people with justice, and thy poor with judgment.

71:3. Let the mountains receive peace for the people: and the hills justice.

71:4. He shall judge the poor of the people, and he shall save the children of the poor: and he shall humble the oppressor.

71:5. And he shall continue with the sun and before the moon, throughout all generations.

71:6. He shall come down like rain upon the fleece; and as showers falling gently upon the earth.

71:7. In his days shall justice spring up, and abundance of peace, till the moon be taken away.

71:8. And he shall rule from sea to sea, and from the river unto the ends of the earth.

71:9. Before him the Ethiopians shall fall down: and his enemies shall lick the ground.

71:10. The kings of Tharsis and the islands shall offer presents: the kings of the Arabians and of Saba shall bring gifts:

71:11. And all kings of the earth shall adore him: all nations shall serve him.

71:12. For he shall deliver the poor from the mighty: and the needy that had no helper.

71:13. He shall spare the poor and needy: and he shall save the souls of the poor.

71:14. He shall redeem their souls from usuries and iniquity: and their names shall be honourable in his sight.

71:15. And he shall live, and to him shall be given of the gold of Arabia, for him they shall always adore: they shall bless him all the day.

71:16. And there shall be a firmament on the earth on the tops of mountains, above Libanus shall the fruit thereof be exalted: and they of the city shall flourish like the grass of the earth.

A firmament on the earth, etc.... This may be understood of the church of Christ, ever firm and visible: and of the flourishing condition of its congregation.

71:17. Let his name be blessed for evermore: his name continueth before the sun. And in him shall all the tribes of the earth be blessed: all nations shall magnify him.

71:18. Blessed be the Lord, the God of Israel, who alone doth wonderful things.

71:19. And blessed be the name of his majesty for ever: and the whole earth shall be filled with his majesty. So be it. So be it.

71:20. The praises of David, the son of Jesse, are ended.

Are ended.... By this it appears that this psalm, though placed here, was in order of time the last of those which David composed.

Psalms Chapter 72
Quam bonus Israel Deus.

The temptation of the weak, upon seeing the prosperity of the wicked, is overcome by the consideration of the justice of God, who will quickly render to every one according to his works.

72:1. A psalm for Asaph. How good is God to Israel, to them that are of a right heart!

72:2. But my feet were almost moved; my steps had well nigh slipped.

72:3. Because I had a zeal on occasion of the wicked, seeing the prosperity of sinners.

72:4. For there is no regard to their death, nor is there strength in their stripes.

72:5. They are not in the labour of men: neither shall they be scourged like other men.

72:6. Therefore pride hath held them fast: they are covered with their iniquity and their wickedness.

72:7. Their iniquity hath come forth, as it were from fatness: they have passed into the affection of the heart.

Fatness.... Abundance and temporal prosperity, which hath encouraged them in their iniquity: and made them give themselves up to their irregular affections.

72:8. They have thought and spoken wickedness: they have spoken iniquity on high.

72:9. They have set their mouth against heaven: and their tongue hath passed through the earth.

72:10. Therefore will my people return here and full days shall be found in them.

Return here.... or hither. The weak among the servants of God, will be apt often to return to this thought, and will be shocked when they consider the full days, that is, the long and prosperous life of the wicked; and will be tempted to make the reflections against providence which are set down in the following verses.

72:11. And they said: How doth God know? and is there knowledge in the most High?

72:12. Behold these are sinners; and yet, abounding in the world they have obtained riches.

72:13. And I said: Then have I in vain justified my heart, and washed my hands among the innocent.

72:14. And I have been scourged all the day; and my chastisement hath been in the mornings.

72:15. If I said: I will speak thus; behold I should condemn the generation of thy children.

If I said, etc.... That is, if I should indulge such thoughts as these.

72:16. I studied that I might know this thing, it is a labour in my sight:

72:17. Until I go into the sanctuary of God, and understand concerning their last ends.

72:18. But indeed for deceits thou hast put it to them: when they were lifted up thou hast cast them down.

Thou hast put it to them.... In punishment of their deceits, or for deceiving them, thou hast brought evils upon them in their last end, which, in their prosperity they never apprehended.

72:19. How are they brought to desolation? they have suddenly ceased to be: they have perished by reason of their iniquity.

72:20. As the dream of them that awake, O Lord; so in thy city thou shalt bring their image to nothing.

72:21. For my heart hath been inflamed, and my reins have been changed:

72:22. And I am brought to nothing, and I knew not.

72:23. I am become as a beast before thee: and I am always with thee.

72:24. Thou hast held me by my right hand; and by thy will thou hast conducted me, and with thy glory thou hast received me.

72:25. For what have I in heaven? and besides thee what do I desire upon earth?

72:26. For thee my flesh and my heart hath fainted away: thou art the God of my heart, and the God that is my portion for ever.

72:27. For behold they that go far from thee shall perish: thou hast destroyed all them that are disloyal to thee.

72:28. But it is good for me to adhere to my God, to put my hope in the Lord God: That I may declare all thy praises, in the gates of the daughter of Sion.

Psalms Chapter 73
Ut quid, Deus.

A prayer of the church under grievous persecutions.

73:1. Understanding for Asaph. O God, why hast thou cast us off unto the end: why is thy wrath enkindled against the sheep of thy pasture?

73:2. Remember thy congregation, which thou hast possessed from the beginning. The sceptre of thy inheritance which thou hast redeemed: mount Sion in which thou hast dwelt.

73:3. Lift up thy hands against their pride unto the end; see what things the enemy hath done wickedly in the sanctuary.

73:4. And they that hate thee have made their boasts, in the midst of thy solemnity. They have set up their ensigns for signs,

Their ensigns, etc.... They have fixed their colours for signs and trophies, both on the gates, and on the highest top of the temple: and they knew not, that is, they regarded not the sanctity of the place. This psalm manifestly foretells the time of the Machabees, and the profanation of the temple by Antiochus.

73:5. And they knew not both in the going out and on the highest top. As with axes in a wood of trees,

73:6. They have cut down at once the gates thereof, with axe and hatchet they have brought it down.

73:7. They have set fire to thy sanctuary: they have defiled the dwelling place of thy name on the earth.

73:8. They said in their heart, the whole kindred of them together: Let us abolish all the festival days of God from the land.

73:9. Our signs we have not seen, there is now no prophet: and he will know us no more.

73:10. How long, O God, shall the enemy reproach: is the adversary to provoke thy name for ever?

73:11. Why dost thou turn away thy hand: and thy right hand out of the midst of thy bosom for ever?

73:12. But God is our king before ages: he hath wrought salvation in the midst of the earth.

73:13. Thou by thy strength didst make the sea firm: thou didst crush the heads of the dragons in the waters.

The sea firm.... By making the waters of the Red Sea stand like firm walls, whilst Israel passed through: and destroying the Egyptians called here dragons from their cruelty, in the same waters, with their king: casting up their bodies on the shore to be stripped by the Ethiopians inhabiting in those days the coast of Arabia.

73:14. Thou hast broken the heads of the dragon: thou hast given him to be meat for the people of the Ethiopians.

73:15. Thou hast broken up the fountains and the torrents: thou hast dried up the Ethan rivers.

Ethan rivers.... That is, rivers which run with strong streams. This was verified in Jordan, Jos. 3, and in Arnon, Num. 21.14.

73:16. Thine is the day, and thine is the night: thou hast made the morning light and the sun.

73:17. Thou hast made all the borders of the earth: the summer and the spring were formed by thee.

73:18. Remember this, the enemy hath reproached the Lord: and a foolish people hath provoked thy name.

73:19. Deliver not up to beasts the souls that confess to thee: and forget not to the end the souls of thy poor.

73:20. Have regard to thy covenant: for they that are the obscure of the earth have been filled with dwellings of iniquity.

The obscure of the earth.... Mean and ignoble wretches have been filled, that is, enriched, with houses of iniquity, that is, with our estates and possessions, which they have unjustly acquired.

73:21. Let not the humble be turned away with confusion: the poor and needy shall praise thy name.

73:22. Arise, O God, judge thy own cause: remember thy reproaches with which the foolish man hath reproached thee all the day.

73:23. Forget not the voices of thy enemies: the pride of them that hate thee ascendeth continually.

Psalms Chapter 74
Confitebimur tibi.

There is a just judgment to come: therefore let the wicked take care.

74:1. Unto the end, corrupt not, a psalm of a canticle for Asaph.

Corrupt not.... It is believed to have been the beginning of some ode or hymn, to the tune of which this psalm was to be sung. St. Augustine and other fathers take it to be an admonition of the spirit of God, not to faint or fail in our hope: but to persevere with constancy in good: because God will not fail in his due time to render to every man according to his works.

74:2. We will praise thee, O God: we will praise, and we will call upon thy name. We will relate thy wondrous works:

74:3. When I shall take a time, I will judge justices.

When I shall take a time.... In proper times: particularly at the last day, when the earth shall melt away at the presence of the great Judge: the same who originally laid the foundations of it, and as it were established its pillars.

74:4. The earth is melted, and all that dwell therein: I have established the pillars thereof.

74:5. I said to the wicked: Do not act wickedly: and to the sinners: Lift not up the horn.

74:6. Lift not up your horn on high: speak not iniquity against God.

74:7. For neither from the east, nor from the west, nor from the desert hills:

74:8. For God is the judge. One he putteth down, and another he lifteth up:

74:9. For in the hand of the Lord there is a cup of strong wine full of mixture. And he hath poured it out from this to that: but the dregs thereof are not emptied: all the sinners of the earth shall drink.

74:10. But I will declare for ever: I will sing to the God of Jacob.

74:11. And I will break all the horns of sinners: but the horns of the just shall be exalted.

Psalms Chapter 75
Notus in Judaea.

God is known in his church: and exerts his power in protecting it. It alludes to the slaughter of the Assyrians, in the days of king Ezechias.

75:1. Unto the end, in praises, a psalm for Asaph: a canticle to the Assyrians.

75:2. In Judea God is known: his name is great in Israel.

75:3. And his place is in peace: and his abode in Sion:

75:4. There hath he broken the powers of bows, the shield, the sword, and the battle.

75:5. Thou enlightenest wonderfully from the everlasting hills.

75:6. All the foolish of heart were troubled. They have slept their sleep; and all the men of riches have found nothing in their hands.

75:7. At thy rebuke, O God of Jacob, they have all slumbered that mounted on horseback.

75:8. Thou art terrible, and who shall resist thee? from that time thy wrath.

From that time, etc.... From the time that thy wrath shall break out.

75:9. Thou hast caused judgment to be heard from heaven: the earth trembled and was still,

75:10. When God arose in judgment, to save all the meek of the earth.

75:11. For the thought of man shall give praise to thee: and the remainders of the thought shall keep holiday to thee.

75:12. Vow ye, and pay to the Lord your God: all you that are round about him bring presents. To him that is terrible,

75:13. Even to him who taketh away the spirit of princes: to the terrible with the kings of the earth.

Psalms Chapter 76
Voce mea.

The faithful have recourse to God in trouble of mind, with confidence in his mercy and power.

76:1. Unto the end, for Idithun, a psalm of Asaph.

76:2. I cried to the Lord with my voice; to God with my voice, and he gave ear to me.

76:3. In the day of my trouble I sought God, with my hands lifted up to him in the night, and I was not deceived. My soul refused to be comforted:

76:4. I remembered God, and was delighted, and was exercised, and my spirit swooned away.

76:5. My eyes prevented the watches: I was troubled, and I spoke not.

76:6. I thought upon the days of old: and I had in my mind the eternal years.

76:7. And I meditated in the night with my own heart: and I was exercised and I swept my spirit.

76:8. Will God then cast off for ever? or will he never be more favourable again?

76:9. Or will he cut off his mercy for ever, from generation to generation?

76:10. Or will God forget to shew mercy? or will he in his anger shut up his mercies?

76:11. And I said, Now have I begun: this is the change of the right hand of the most High.

76:12. I remembered the works of the Lord: for I will be mindful of thy wonders from the beginning.

76:13. And I will meditate on all thy works: and will be employed in thy inventions.

76:14. Thy way, O God, is in the holy place: who is the great God like our God?

76:15. Thou art the God that dost wonders. Thou hast made thy power known among the nations:

76:16. With thy arm thou hast redeemed thy people the children of Jacob and of Joseph.

76:17. The waters saw thee, O God, the waters saw thee: and they were afraid, and the depths were troubled.

76:18. Great was the noise of the waters: the clouds sent out a sound. For thy arrows pass:

76:19. The voice of thy thunder in a wheel. Thy lightnings enlightened the world: the earth shook and trembled.

76:20. Thy way is in the sea, and thy paths in many waters: and thy footsteps shall not be known.

76:21. Thou hast conducted thy people like sheep, by the hand of Moses and Aaron.

Psalms Chapter 77
Attendite.

God’s great benefits to the people of Israel, notwithstanding their ingratitude.

77:1. Understanding for Asaph. Attend, O my people, to my law: incline your ears to the words of my mouth.

77:2. I will open my mouth in parables: I will utter propositions from the beginning.

Propositions.... Deep and mysterious sayings. By this it appears that the historical facts of ancient times, commemorated in this psalm, were deep and mysterious: as being figures of great truths appertaining to the time of the New Testament.

77:3. How great things have we heard and known, and our fathers have told us.

77:4. They have not been hidden from their children, in another generation. Declaring the praises of the Lord, and his powers, and his wonders which he hath done.

77:5. And he set up a testimony in Jacob: and made a law in Israel. How great things he commanded our fathers, that they should make the same known to their children:

77:6. That another generation might know them. The children that should be born and should rise up, and declare them to their children.

77:7. That they may put their hope in God and may not forget the works of God: and may seek his commandments.

77:8. That they may not become like their fathers, a perverse and exasperating generation. A generation that set not their heart aright: and whose spirit was not faithful to God.

77:9. The sons of Ephraim who bend and shoot with the bow: they have turned back in the day of battle.

77:10. They kept not the covenant of God: and in his law they would not walk.

77:11. And they forgot his benefits, and his wonders that he had shewn them.

77:12. Wonderful things did he do in the sight of their fathers, in the land of Egypt, in the field of Tanis.

77:13. He divided the sea and brought them through: and he made the waters to stand as in a vessel.

77:14. And he conducted them with a cloud by day: and all the night with a light of fire.

77:15. He struck the rock in the wilderness: and gave them to drink, as out of the great deep.

77:16. He brought forth water out of the rock: and made streams run down as rivers.

77:17. And they added yet more sin against him: they provoked the most High to wrath in the place without water.

77:18. And they tempted God in their hearts, by asking meat for their desires.

77:19. And they spoke ill of God: they said: Can God furnish a table in the wilderness?

77:20. Because he struck the rock, and the waters gushed out, and the streams overflowed. Can he also give bread, or provide a table for his people?

77:21. Therefore the Lord heard, and was angry: and a fire was kindled against Jacob, and wrath came up against Israel.

77:22. Because they believed not in God: and trusted not in his salvation.

77:23. And he had commanded the clouds from above, and had opened the doors of heaven.

77:24. And had rained down manna upon them to eat, and had given them the bread of heaven.

77:25. Man ate the bread of angels: he sent them provisions in abundance.

77:26. He removed the south wind from heaven: and by his power brought in the south-west wind.

77:27. And he rained upon them flesh as dust: and feathered fowls like as the sand of the sea.

77:28. And they fell in the midst of their camp, round about their pavilions.

77:29. So they did eat, and were filled exceedingly, and he gave them their desire:

77:30. they were not defrauded of that which they craved. As yet their meat was in their mouth:

77:31. And the wrath of God came upon them. And he slew the fat ones amongst them, and brought down the chosen men of Israel.

77:32. In all these things they sinned still: and they believed not for his wondrous works.

77:33. And their days were consumed in vanity, and their years in haste.

77:34. When he slew them, then they sought him: and they returned, and came to him early in the morning.

77:35. And they remembered that God was their helper: and the most high God their redeemer.

77:36. And they loved him with their mouth: and with their tongue they lied unto him:

77:37. But their heart was not right with him: nor were they counted faithful in his covenant.

77:38. But he is merciful, and will forgive their sins: and will not destroy them. And many a time did he turn away his anger: and did not kindle all his wrath.

77:39. And he remembered that they are flesh: a wind that goeth and returneth not.

77:40. How often did they provoke him in the desert: and move him to wrath in the place without water?

77:41. And they turned back and tempted God: and grieved the holy one of Israel.

77:42. They remembered not his hand, in the day that he redeemed them from the hand of him that afflicted them:

77:43. How he wrought his signs in Egypt, and his wonders in the field of Tanis.

77:44. And he turned their rivers into blood, and their showers that they might not drink.

77:45. He sent amongst them divers sorts of flies, which devoured them: and frogs which destroyed them.

77:46. And he gave up their fruits to the blast, and their labours to the locust.

77:47. And he destroyed their vineyards with hail, and their mulberry trees with hoarfrost.

77:48. And he gave up their cattle to the hail, and their stock to the fire.

77:49. And he sent upon them the wrath of his indignation: indignation and wrath and trouble, which he sent by evil angels.

77:50. He made a way for a path to his anger: he spared not their souls from death, and their cattle he shut up in death.

77:51. And he killed all the firstborn in the land of Egypt: the firstfruits of all their labour in the tabernacles of Cham.

77:52. And he took away his own people as sheep: and guided them in the wilderness like a flock.

77:53. And he brought them out in hope and they feared not: and the sea overwhelmed their enemies.

77:54. And he brought them into the mountain of his sanctuary: the mountain which his right hand had purchased. And he cast out the Gentiles before them: and by lot divided to them their land by a line of distribution.

77:55. And he made the tribes of Israel to dwell in their tabernacles.

77:56. Yet they tempted, and provoked the most high God: and they kept not his testimonies.

77:57. And they turned away, and kept not the covenant: even like their fathers they were turned aside as a crooked bow.

77:58. They provoked him to anger on their hills: and moved him to jealousy with their graven things.

77:59. God heard, and despised them, and he reduced Israel exceedingly as it were to nothing.

77:60. And he put away the tabernacle of Silo, his tabernacle where he dwelt among men.

77:61. And he delivered their strength into captivity: and their beauty into the hands of the enemy.

77:62. And he shut up his people under the sword: and he despised his inheritance.

77:63. Fire consumed their young men: and their maidens were not lamented.

77:64. Their priests fell by the sword: and their widows did not mourn.

77:65. And the Lord was awaked as one out of sleep, and like a mighty man that hath been surfeited with wine.

77:66. And he smote his enemies on the hinder parts: he put them to an everlasting reproach.

77:67. And he rejected the tabernacle of Joseph: and chose not the tribe of Ephraim:

77:68. But he chose the tribe of Juda, mount Sion which he loved.

77:69. And he built his sanctuary as of unicorns, in the land which he founded for ever.

As of unicorns.... That is, firm and strong like the horn of the unicorn. This is one of the chiefest of the propositions of this psalm, foreshewing the firm establishment of the one, true, and everlasting sanctuary of God, in his church.

77:70. And he chose his servant David, and took him from the flocks of sheep: he brought him from following the ewes great with young,

77:71. To feed Jacob his servant and Israel his inheritance.

77:72. And he fed them in the innocence of his heart: and conducted them by the skilfulness of his hands.

Psalms Chapter 78
Deus, venerunt gentes.

The church in time of persecution prayeth for relief. It seems to belong to the time of the Machabees.

78:1. A psalm for Asaph. O God, the heathens are come into thy inheritance, they have defiled thy holy temple: they have made Jerusalem as a place to keep fruit.

78:2. They have given the dead bodies of thy servants to be meat for the fowls of the air: the flesh of thy saints for the beasts of the earth.

78:3. They have poured out their blood as water, round about Jerusalem and there was none to bury them.

78:4. We are become a reproach to our neighbours: a scorn and derision to them that are round about us.

78:5. How long, O Lord, wilt thou be angry for ever: shall thy zeal be kindled like a fire?

78:6. Pour out thy wrath upon the nations that have not known thee: and upon the kingdoms that have not called upon thy name.

78:7. Because they have devoured Jacob; and have laid waste his place.

78:8. Remember not our former iniquities: let thy mercies speedily prevent us, for we are become exceeding poor.

78:9. Help us, O God, our saviour: and for the glory of thy name, O Lord, deliver us: and forgive us our sins for thy name’s sake:

78:10. Lest they should say among the Gentiles: Where is their God? And let him be made known among the nations before our eyes, By the revenging the blood of thy servants, which hath been shed:

78:11. Let the sighing of the prisoners come in before thee. According to the greatness of thy arm, take possession of the children of them that have been put to death.

78:12. And render to our neighbours sevenfold in their bosom: the reproach wherewith they have reproached thee, O Lord.

78:13. But we thy people, and the sheep of thy pasture, will give thanks to thee for ever. We will shew forth thy praise, unto generation and generation.

Psalms Chapter 79
Qui regis Israel.

A prayer for the church in tribulation, commemorating God’s former favours.

79:1. Unto the end, for them that shall be changed, a testimony for Asaph, a psalm.

79:2. Give ear, O thou that rulest Israel: thou that leadest Joseph like a sheep. Thou that sittest upon the cherubims, shine forth

79:3. Before Ephraim, Benjamin, and Manasses. Stir up thy might, and come to save us.

79:4. Convert us, O God: and shew us thy face, and we shall be saved.

79:5. O Lord God of hosts, how long wilt thou be angry against the prayer of thy servant?

79:6. How long wilt thou feed us with the bread of tears: and give us for our drink tears in measure?

79:7. Thou hast made us to be a contradiction to our neighbours: and our enemies have scoffed at us.

79:8. O God of hosts, convert us: and shew thy face, and we shall be saved.

79:9. Thou hast brought a vineyard out of Egypt: thou hast cast out the Gentiles and planted it.

79:10. Thou wast the guide of its journey in its sight: thou plantedst the roots thereof, and it filled the land.

79:11. The shadow of it covered the hills: and the branches thereof the cedars of God.

79:12. It stretched forth its branches unto the sea, and its boughs unto the river.

79:13. Why hast thou broken down the hedge thereof, so that all they who pass by the way do pluck it?

79:14. The boar out of the wood hath laid it waste: and a singular wild beast hath devoured it.

79:15. Turn again, O God of hosts, look down from heaven, and see, and visit this vineyard:

79:16. And perfect the same which thy right hand hath planted: and upon the son of man whom thou hast confirmed for thyself.

79:17. Things set on fire and dug down shall perish at the rebuke of thy countenance.

Things set on fire, etc.... So this vineyard of thine, almost consumed already, must perish, if thou continue thy rebukes.

79:18. Let thy hand be upon the man of thy right hand: and upon the son of man whom thou hast confirmed for thyself.

The man of thy right hand.... Christ.

79:19. And we depart not from thee, thou shalt quicken us: and we will call upon thy name.

79:20. O Lord God of hosts, convert us and shew thy face, and we shall be saved.

Psalms Chapter 80
Exultate Deo.

An invitation to a solemn praising of God.

80:1. Unto the end, for the winepresses, a psalm for Asaph himself.

For the winepresses, etc.... Torcularibus. It either signifies a musical instrument, or that this psalm was to be sung at the feast of the tabernacles after the gathering in of the vintage.

80:2. Rejoice to God our helper: sing aloud to the God of Jacob.

80:3. Take a psalm, and bring hither the timbrel: the pleasant psaltery with the harp.

80:4. Blow up the trumpet on the new moon, on the noted day of your solemnity.

80:5. For it is a commandment in Israel, and a judgment to the God of Jacob.

80:6. He ordained it for a testimony in Joseph, when he came out of the land of Egypt: he heard a tongue which he knew not.

80:7. He removed his back from the burdens: his hands had served in baskets.

80:8. Thou calledst upon me in affliction, and I delivered thee: I heard thee in the secret place of tempest: I proved thee at the waters of contradiction.

In the secret place of tempest.... Heb., Of thunder. When thou soughtest to hide thyself from the tempest: or, when I came down to mount Sina, hidden from thy eyes in a storm of thunder.

80:9. Hear, O my people, and I will testify to thee: O Israel, if thou wilt hearken to me,

80:10. there shall be no new god in thee: neither shalt thou adore a strange god.

80:11. For I am the Lord thy God, who brought thee out of the land of Egypt: open thy mouth wide, and I will fill it.

80:12. But my people heard not my voice: and Israel hearkened not to me.

80:13. So I let them go according to the desires of their heart: they shall walk in their own inventions.

80:14. If my people had heard me: if Israel had walked in my ways:

80:15. I should soon have humbled their enemies, and laid my hand on them that troubled them.

80:16. The enemies of the Lord have lied to him: and their time shall be for ever.

Their time shall be forever.... Impenitent sinners shall suffer for ever.

80:17. And he fed them with the fat of wheat, and filled them with honey out of the rock.

Psalms Chapter 81
Deus stetit.

An exhortation to judges and men in power.

81:1. A psalm for Asaph. God hath stood in the congregation of gods: and being in the midst of them he judgeth gods.

81:2. How long will you judge unjustly: and accept the persons of the wicked?

81:3. Judge for the needy and fatherless: do justice to the humble and the poor.

81:4. Rescue the poor; and deliver the needy out of the hand of the sinner.

81:5. They have not known nor understood: they walk on in darkness: all the foundations of the earth shall be moved.

81:6. I have said: You are gods and all of you the sons of the most High.

81:7. But you like men shall die: and shall fall like one of the princes.

81:8. Arise, O God, judge thou the earth: for thou shalt inherit among all the nations.

Psalms Chapter 82
Deus, quis similis.

A prayer against the enemies of God’s church.

82:1. A canticle of a psalm for Asaph.

82:2. O God, who shall be like to thee? hold not thy peace, neither be thou still, O God.

82:3. For lo, thy enemies have made a noise: and they that hate thee have lifted up the head.

82:4. They have taken a malicious counsel against thy people, and have consulted against thy saints.

82:5. They have said: Come and let us destroy them, so that they be not a nation: and let the name of Israel be remembered no more.

82:6. For they have contrived with one consent: they have made a covenant together against thee,

82:7. The tabernacles of the Edomites, and the Ishmahelites: Moab, and the Agarens,

82:8. Gebal, and Ammon and Amalec: the Philistines, with the inhabitants of Tyre.

82:9. Yea, and the Assyrian also is joined with them: they are come to the aid of the sons of Lot.

82:10. Do to them as thou didst to Madian and to Sisara: as to Jabin at the brook of Cisson.

82:11. Who perished at Endor: and became as dung for the earth.

82:12. Make their princes like Oreb, and Zeb, and Zebee, and Salmana. All their princes,

82:13. Who have said: Let us possess the sanctuary of God for an inheritance.

82:14. O my God, make them like a wheel; and as stubble before the wind.

82:15. As fire which burneth the wood: and as a flame burning mountains:

82:16. So shalt thou pursue them with thy tempest: and shalt trouble them in thy wrath.

82:17. Fill their faces with shame; and they shall seek thy name, O Lord.

82:18. Let them be ashamed and troubled for ever and ever: and let them be confounded and perish.

82:19. And let them know that the Lord is thy name: thou alone art the most High over all the earth.

Psalms Chapter 83
Quam dilecta.

The soul aspireth after heaven; rejoicing in the mean time, in being in the communion of God’s church upon earth.

83:1. Unto the end, for the winepresses, a psalm for the sons of Core.

83:2. How lovely are thy tabernacles, O Lord of hosts!

83:3. my soul longeth and fainteth for the courts of the Lord. My heart and my flesh have rejoiced in the living God.

83:4. For the sparrow hath found herself a house, and the turtle a nest for herself where she may lay her young ones: Thy altars, O Lord of hosts, my king and my God.

83:5. Blessed are they that dwell in thy house, O Lord: they shall praise thee for ever and ever.

83:6. Blessed is the man whose help is from thee: in his heart he hath disposed to ascend by steps,

In his heart he hath disposed to ascend by steps, etc.... Ascensiones in corde suo disposuit. As by steps men ascended to the temple of God situated on a hill; so the good Christian ascends towards the eternal temple by certain steps of virtue disposed or ordered within the heart: and this whilst he lives as yet in the body, in this vale of tears, the place which man hath set: that is, which he hath brought himself to: being cast out of paradise for his sin.

83:7. In the vale of tears, in the place which he hath set.

83:8. For the lawgiver shall give a blessing, they shall go from virtue to virtue: the God of gods shall be seen in Sion.

83:9. O Lord God of hosts, hear my prayer: give ear, O God of Jacob.

83:10. Behold, O God our protector: and look on the face of thy Christ.

83:11. For better is one day in thy courts above thousands. I have chosen to be an abject in the house of my God, rather than to dwell in the tabernacles of sinners.

83:12. For God loveth mercy and truth: the Lord will give grace and glory.

83:13. He will not deprive of good things them that walk in innocence: O Lord of hosts, blessed is the man that trusteth in thee.

Psalms Chapter 84
Benedixisti, Domine.

The coming of Christ, to bring peace and salvation to man.

84:1. Unto the end, for the sons of Core, a psalm.

84:2. Lord, thou hast blessed thy land: thou hast turned away the captivity of Jacob.

84:3. Thou hast forgiven the iniquity of thy people: thou hast covered all their sins.

84:4. Thou hast mitigated all thy anger: thou hast turned away from the wrath of thy indignation.

84:5. Convert us, O God our saviour: and turn off thy anger from us.

84:6. Wilt thou be angry with us for ever: or wilt thou extend thy wrath from generation to generation?

84:7. Thou wilt turn, O God, and bring us to life: and thy people shall rejoice in thee.

84:8. Shew us, O Lord, thy mercy; and grant us thy salvation.

84:9. I will hear what the Lord God will speak in me: for he will speak peace unto his people: And unto his saints: and unto them that are converted to the heart.

84:10. Surely his salvation is near to them that fear him: that glory may dwell in our land.

84:11. Mercy and truth have met each other: justice and peace have kissed.

84:12. Truth is sprung out of the earth: and justice hath looked down from heaven.

84:13. For the Lord will give goodness: and our earth shall yield her fruit.

84:14. Justice shall walk before him: and shall set his steps in the way.

Psalms Chapter 85
Inclina, Domine.

A prayer for God’s grace to assist us to the end.

85:1. A prayer for David himself. Incline thy ear, O Lord, and hear me: for I am needy and poor.

85:2. Preserve my soul, for I am holy: save thy servant, O my God, that trusteth in thee.

I am holy.... I am by my office and profession dedicated to thy service.

85:3. Have mercy on me, O Lord, for I have cried to thee all the day.

85:4. Give joy to the soul of thy servant, for to thee, O Lord, I have lifted up my soul.

85:5. For thou, O Lord, art sweet and mild: and plenteous in mercy to all that call upon thee.

85:6. Give ear, O Lord, to my prayer: and attend to the voice of my petition.

85:7. I have called upon thee in the day of my trouble: because thou hast heard me.

85:8. There is none among the gods like unto thee, O Lord: and there is none according to thy works.

85:9. All the nations thou hast made shall come and adore before thee, O Lord: and they shall glorify thy name.

85:10. For thou art great and dost wonderful things: thou art God alone.

85:11. Conduct me, O Lord, in thy way, and I will walk in thy truth: let my heart rejoice that it may fear thy name.

85:12. I will praise thee, O Lord my God, with my whole heart, and I will glorify thy name for ever:

85:13. For thy mercy is great towards me: and thou hast delivered my soul out of the lower hell.

85:14. O God, the wicked are risen up against me, and the assembly of the mighty have sought my soul: and they have not set thee before their eyes.

85:15. And thou, O Lord, art a God of compassion, and merciful, patient, and of much mercy, and true.

85:16. O look upon me, and have mercy on me: give thy command to thy servant, and save the son of thy handmaid.

85:17. Shew me a token for good: that they who hate me may see, and be confounded, because thou, O Lord, hast helped me and hast comforted me.

Psalms Chapter 86
Fundamenta ejus.

The glory of the church of Christ.

86:1. For the sons of Core, a psalm of a canticle. The foundations thereof are in the holy mountains:

The holy mountains.... The apostles and prophets. Eph. 2.20.

86:2. The Lord loveth the gates of Sion above all the tabernacles of Jacob.

86:3. Glorious things are said of thee, O city of God.

86:4. I will be mindful of Rahab and of Babylon knowing me. Behold the foreigners, and Tyre, and the people of the Ethiopians, these were there.

Rahab.... Egypt, etc. To this Sion, which is the church of God, many shall resort from all nations.

86:5. Shall not Sion say: This man and that man is born in her? and the Highest himself hath founded her.

Shall not Sion say, etc.... The meaning is, that Sion, viz., the church, shall not only be able to commemorate this or that particular person of renown born in her, but also to glory in great multitudes of people and princes of her communion; who have been foretold in the writings of the prophets, and registered in the writings of the apostles.

86:6. The Lord shall tell in his writings of peoples and of princes, of them that have been in her.

86:7. The dwelling in thee is as it were of all rejoicing.

Psalms Chapter 87
Domine, Deus salutis.

A prayer of one under grievous affliction: it agrees to Christ in his passion, and alludes to his death and burial.

87:1. A canticle of a psalm for the sons of Core: unto the end, for Maheleth, to answer understanding of Eman the Ezrahite.

Maheleth.... A musical instrument, or chorus of musicians, to answer one another.—Ibid. Understanding.... Or a psalm of instruction, composed by Eman the Ezrahite, or by David, in his name.

87:2. O Lord, the God of my salvation: I have cried in the day, and in the night before thee.

87:3. Let my prayer come in before thee: incline thy ear to my petition.

87:4. For my soul is filled with evils: and my life hath drawn nigh to hell.

87:5. I am counted among them that go down to the pit: I am become as a man without help,

87:6. Free among the dead. Like the slain sleeping in the sepulchres, whom thou rememberest no more: and they are cut off from thy hand.

87:7. They have laid me in the lower pit: in the dark places, and in the shadow of death.

87:8. Thy wrath is strong over me: and all thy waves thou hast brought in upon me.

87:9. Thou hast put away my acquaintance far from me: they have set me an abomination to themselves. I was delivered up, and came not forth:

87:10. My eyes languished through poverty. All the day I cried to thee, O Lord: I stretched out my hands to thee.

87:11. Wilt thou shew wonders to the dead? or shall physicians raise to life, and give praise to thee?

87:12. Shall any one in the sepulchre declare thy mercy: and thy truth in destruction?

87:13. Shall thy wonders be known in the dark; and thy justice in the land of forgetfulness?

87:14. But I, O Lord, have cried to thee: and in the morning my prayer shall prevent thee.

87:15. Lord, why castest thou off my prayer: why turnest thou away thy face from me?

87:16. I am poor, and in labours from my youth: and being exalted have been humbled and troubled.

87:17. Thy wrath hath come upon me: and thy terrors have troubled me.

87:18. They have come round about me like water all the day: they have compassed me about together.

87:19. Friend and neighbour thou hast put far from me: and my acquaintance, because of misery.

Psalms Chapter 88
Misericordias Domini.

The perpetuity of the church of Christ, in consequence of the promise of God: which, notwithstanding, God permits her to suffer sometimes most grievous afflictions.

88:1. Of understanding, for Ethan the Ezrahite.

88:2. The mercies of the Lord I will sing for ever. I will shew forth thy truth with my mouth to generation and generation.

88:3. For thou hast said: Mercy shall be built up for ever in the heavens: thy truth shall be prepared in them.

88:4. I have made a covenant with my elect: I have sworn to David my servant:

88:5. Thy seed will I settle for ever. And I will build up thy throne unto generation and generation.

88:6. The heavens shall confess thy wonders, O Lord: and thy truth in the church of the saints.

88:7. For who in the clouds can be compared to the Lord: or who among the sons of God shall be like to God?

88:8. God, who is glorified in the assembly of the saints: great and terrible above all them that are about him.

88:9. O Lord God of hosts, who is like to thee? thou art mighty, O Lord, and thy truth is round about thee.

88:10. Thou rulest the power of the sea: and appeasest the motion of the waves thereof.

88:11. Thou hast humbled the proud one, as one that is slain: with the arm of thy strength thou hast scattered thy enemies.

88:12. Thine are the heavens, and thine is the earth: the world and the fulness thereof thou hast founded:

88:13. The north and the sea thou hast created. Thabor and Hermon shall rejoice in thy name:

88:14. Thy arm is with might. Let thy hand be strengthened, and thy right hand exalted:

88:15. Justice and judgment are the preparation of thy throne. Mercy and truth shall go before thy face:

88:16. Blessed is the people that knoweth jubilation. They shall walk, O Lord, in the light of thy countenance:

88:17. And in thy name they shall rejoice all the day, and in thy justice they shall be exalted.

88:18. For thou art the glory of their strength: and in thy good pleasure shall our horn be exalted.

88:19. For our protection is of the Lord, and of our king the holy one of Israel.

88:20. Then thou spokest in a vision to thy saints, and saidst: I have laid help upon one that is mighty, and have exalted one chosen out of my people.

88:21. I have found David my servant: with my holy oil I have anointed him.

88:22. For my hand shall help him: and my arm shall strengthen him.

88:23. The enemy shall have no advantage over him: nor the son of iniquity have power to hurt him.

88:24. And I will cut down his enemies before his face; and them that hate him I will put to flight.

88:25. And my truth and my mercy shall be with him: and in my name shall his horn be exalted.

88:26. And I will set his hand in the sea; and his right hand in the rivers.

88:27. He shall cry out to me: Thou art my father: my God, and the support of my salvation.

88:28. And I will make him my firstborn, high above the kings of the earth.

88:29. I will keep my mercy for him for ever: and my covenant faithful to him.

88:30. And I will make his seed to endure for evermore: and his throne as the days of heaven.

88:31. And if his children forsake my law, and walk not in my judgments:

88:32. If they profane my justices: and keep not my commandments:

88:33. I will visit their iniquities with a rod and their sins with stripes.

88:34. But my mercy I will not take away from him: nor will I suffer my truth to fail.

88:35. Neither will I profane my covenant: and the words that proceed from my mouth I will not make void.

88:36. Once have I sworn by my holiness: I will not lie unto David:

88:37. His seed shall endure for ever.

88:38. And his throne as the sun before me: and as the moon perfect for ever, and a faithful witness in heaven.

88:39. But thou hast rejected and despised: thou hast been angry with my anointed.

88:40. Thou hast overthrown the covenant of thy servant: thou hast profaned his sanctuary on the earth.

Overthrown the covenant, etc.... All this seems to relate to the time of the captivity of Babylon, in which, for the sins of the people and their princes, God seemed to have set aside for a while the covenant he made with David.

88:41. Thou hast broken down all his hedges: thou hast made his strength fear.

88:42. All that pass by the way have robbed him: he is become a reproach to his neighbours.

88:43. Thou hast set up the right hand of them that oppress him: thou hast made all his enemies to rejoice.

88:44. Thou hast turned away the help of his sword; and hast not assisted him in battle.

88:45. Thou hast made his purification to cease: and thou hast cast his throne down to the ground.

88:46. Thou hast shortened the days of his time: thou hast covered him with confusion.

88:47. How long, O Lord, turnest thou away unto the end? shall thy anger burn like fire?

88:48. Remember what my substance is: for hast thou made all the children of men in vain?

88:49. Who is the man that shall live, and not see death: that shall deliver his soul from the hand of hell?

88:50. Lord, where are thy ancient mercies, according to what thou didst swear to David in thy truth?

88:51. Be mindful, O Lord, of the reproach of thy servants (which I have held in my bosom) of many nations:

88:52. Wherewith thy enemies have reproached, O Lord; wherewith they have reproached the change of thy anointed.

88:53. Blessed be the Lord for evermore. So be it. So be it.

Psalms Chapter 89
Domine, refugium.

A prayer for the mercy of God: recounting the shortness and miseries of the days of man.

89:1. A prayer of Moses the man of God. Lord, thou hast been our refuge from generation to generation.

89:2. Before the mountains were made, or the earth and the world was formed; from eternity and to eternity thou art God.

89:3. Turn not man away to be brought low: and thou hast said: Be converted, O ye sons of men.

Turn not man away, etc.... Suffer him not quite to perish from thee, since thou art pleased to call upon him to be converted to thee.

89:4. For a thousand years in thy sight are as yesterday, which is past. And as a watch in the night,

89:5. Things that are counted nothing, shall their years be.

89:6. In the morning man shall grow up like grass; in the morning he shall flourish and pass away: in the evening he shall fall, grow dry, and wither.

89:7. For in thy wrath we have fainted away: and are troubled in thy indignation.

89:8. Thou hast set our iniquities before thy eyes: our life in the light of thy countenance.

89:9. For all our days are spent; and in thy wrath we have fainted away. Our years shall be considered as a spider:

As a spider.... As frail and weak as a spider’s web; and miserable withal, whilst like a spider we spend our bowels in weaving webs to catch flies.

89:10. The days of our years in them are threescore and ten years. But if in the strong they be fourscore years: and what is more of them is labour and sorrow. For mildness is come upon us: and we shall be corrected.

Mildness is come upon us, etc.... God’s mildness corrects us; inasmuch as he deals kindly with us, in shortening the days of this miserable life; and so weaning our affections from all its transitory enjoyments, and teaching us true wisdom.

89:11. Who knoweth the power of thy anger, and for thy fear

89:12. Can number thy wrath? So make thy right hand known: and men learned in heart, in wisdom.

89:13. Return, O Lord, how long? and be entreated in favour of thy servants.

89:14. We are filled in the morning with thy mercy: and we have rejoiced, and are delighted all our days.

89:15. We have rejoiced for the days in which thou hast humbled us: for the years in which we have seen evils.

89:16. Look upon thy servants and upon their works: and direct their children.

89:17. And let the brightness of the Lord our God be upon us: and direct thou the works of our hands over us; yea, the work of our hands do thou direct.

Psalms Chapter 90
Qui habitat.

The just is secure under the protection of God.

90:1. The praise of a canticle for David. He that dwelleth in the aid of the most High, shall abide under the protection of the God of Jacob.

90:2. He shall say to the Lord: Thou art my protector, and my refuge: my God, in him will I trust.

90:3. For he hath delivered me from the snare of the hunters: and from the sharp word.

90:4. He will overshadow thee with his shoulders: and under his wings thou shalt trust.

90:5. His truth shall compass thee with a shield: thou shalt not be afraid of the terror of the night.

90:6. Of the arrow that flieth in the day, of the business that walketh about in the dark: of invasion, or of the noonday devil.

90:7. A thousand shall fall at thy side, and ten thousand at thy right hand: but it shall not come nigh thee.

90:8. But thou shalt consider with thy eyes: and shalt see the reward of the wicked.

90:9. Because thou, O Lord, art my hope: thou hast made the most High thy refuge.

90:10. There shall no evil come to thee: nor shall the scourge come near thy dwelling.

90:11. For he hath given his angels charge over thee; to keep thee in all thy ways.

90:12. In their hands they shall bear thee up: lest thou dash thy foot against a stone.

90:13. Thou shalt walk upon the asp and the basilisk: and thou shalt trample under foot the lion and the dragon.

90:14. Because he hoped in me I will deliver him: I will protect him because he hath known my name.

90:15. He shall cry to me, and I will hear him: I am with him in tribulation, I will deliver him, and I will glorify him.

90:16. I will fill him with length of days; and I will shew him my salvation.

Psalms Chapter 91
Bonum est confiteri.

God is to be praised for his wondrous works.

91:1. A psalm of a canticle on the sabbath day.

91:2. It is good to give praise to the Lord: and to sing to thy name, O most High.

91:3. To shew forth thy mercy in the morning, and thy truth in the night:

91:4. Upon an instrument of ten strings, upon the psaltery: with a canticle upon the harp.

91:5. For thou hast given me, O Lord, a delight in thy doings: and in the works of thy hands I shall rejoice.

91:6. O Lord, how great are thy works! thy thoughts are exceeding deep.

91:7. The senseless man shall not know: nor will the fool understand these things.

91:8. When the wicked shall spring up as grass: and all the workers of iniquity shall appear: That they may perish for ever and ever:

91:9. But thou, O Lord, art most high for evermore.

91:10. For behold thy enemies, O lord, for behold thy enemies shall perish: and all the workers of iniquity shall be scattered.

91:11. But my horn shall be exalted like that of the unicorn: and my old age in plentiful mercy.

91:12. My eye also hath looked down upon my enemies: and my ear shall hear of the downfall of the malignant that rise up against me.

91:13. The just shall flourish like the palm tree: he shall grow up like the cedar of Libanus.

91:14. They that are planted in the house of the Lord shall flourish in the courts of the house of our God.

91:15. They shall still increase in a fruitful old age: and shall be well treated,

91:16. That they may shew, That the Lord our God is righteous, and there is no iniquity in him.

Psalms Chapter 92
Dominus regnavit.

The glory and stability of the kingdom; that is, of the church of Christ.

Praise in the way of a canticle, for David himself, on the day before the sabbath, when the earth was founded.

92:1. The Lord hath reigned, he is clothed with beauty: the Lord is clothed with strength, and hath girded himself. For he hath established the world which shall not be moved.

92:2. My throne is prepared from of old: thou art from everlasting.

92:3. The floods have lifted up, O Lord: the floods have lifted up their voice. The floods have lifted up their waves,

92:4. With the noise of many waters. Wonderful are the surges of the sea: wonderful is the Lord on high.

92:5. Thy testimonies are become exceedingly credible: holiness becometh thy house, O Lord, unto length of days.

Psalms Chapter 93
Deus ultionum.

God shall judge and punish the oppressors of his people.

A psalm for David himself on the fourth day of the week.

93:1. The Lord is the God to whom revenge belongeth: the God of revenge hath acted freely.

93:2. Lift up thyself, thou that judgest the earth: render a reward to the proud.

93:3. How long shall sinners, O Lord: how long shall sinners glory?

93:4. Shall they utter, and speak iniquity: shall all speak who work injustice?

93:5. Thy people, O Lord, they have brought low: and they have afflicted thy inheritance.

93:6. They have slain the widow and the stranger: and they have murdered the fatherless.

93:7. And they have said: The Lord shall not see: neither shall the God of Jacob understand.

93:8. Understand, ye senseless among the people: and, you fools, be wise at last.

93:9. He that planted the ear, shall he not hear? or he that formed the eye, doth he not consider?

93:10. He that chastiseth nations, shall he not rebuke: he that teacheth man knowledge?

93:11. The Lord knoweth the thoughts of men, that they are vain.

93:12. Blessed is the man whom thou shalt instruct, O Lord: and shalt teach him out of thy law.

93:13. That thou mayst give him rest from the evil days: till a pit be dug for the wicked.

Rest from the evil days.... That thou mayst mitigate the sorrows, to which he is exposed, during the short and evil days of his mortality.

93:14. For the Lord will not cast off his people: neither will he forsake his own inheritance.

93:15. Until justice be turned into judgment: and they that are near it are all the upright in heart.

Until justice be turned into judgment, etc.... By being put in execution; which will be agreeable to all the upright in heart.

93:16. Who shall rise up for me against the evildoers? or who shall stand with me against the workers of iniquity?

93:17. Unless the Lord had been my helper, my soul had almost dwelt in hell.

93:18. If I said: My foot is moved: thy mercy, O Lord, assisted me.

93:19. According to the multitude of my sorrows in my heart, thy comforts have given joy to my soul.

93:20. Doth the seat of iniquity stick to thee, who framest labour in commandment?

Doth the seat of iniquity stick to thee, etc.... That is, wilt thou, O God, who art always just, admit of the seat of iniquity: that is, of injustice, or unjust judges, to have any partnership with thee? Thou who framest, or makest, labour in commandment, that is, thou who obligest us to labour with all diligence to keep thy commandments.

93:21. They will hunt after the soul of the just, and will condemn innocent blood.

93:22. But the Lord is my refuge: and my God the help of my hope.

93:23. And he will render them their iniquity: and in their malice he will destroy them: the Lord our God will destroy them.

Psalms Chapter 94
Venite exultemus.

An invitation to adore and serve God, and to hear his voice.

Praise of a canticle for David himself.

94:1. Come let us praise the Lord with joy: let us joyfully sing to God our saviour.

94:2. Let us come before his presence with thanksgiving; and make a joyful noise to him with psalms.

94:3. For the Lord is a great God, and a great King above all gods.

94:4. For in his hand are all the ends of the earth: and the heights of the mountains are his.

94:5. For the sea is his, and he made it: and his hands formed the dry land.

94:6. Come let us adore and fall down: and weep before the Lord that made us.

94:7. For he is the Lord our God: and we are the people of his pasture and the sheep of his hand.

94:8. To day if you shall hear his voice, harden not your hearts:

94:9. As in the provocation, according to the day of temptation in the wilderness: where your fathers tempted me, they proved me, and saw my works.

94:10. Forty years long was I offended with that generation, and I said: These always err in heart.

94:11. And these men have not known my ways: so I swore in my wrath that they shall not enter into my rest.

Psalms Chapter 95
Cantate Domino.

An exhortation to praise God for the coming of Christ and his kingdom.

95:1. A canticle for David himself, when the house was built after the captivity. Sing ye to the Lord a new canticle: sing to the Lord, all the earth.

When the house was built, etc.... Alluding to that time, and then ordered to be sung: but principally relating to the building of the church of Christ, after our redemption from the captivity of Satan.

95:2. Sing ye to the Lord and bless his name: shew forth his salvation from day to day.

95:3. Declare his glory among the Gentiles: his wonders among all people.

95:4. For the Lord is great, and exceedingly to be praised: he is to be feared above all gods.

95:5. For all the gods of the Gentiles are devils: but the Lord made the heavens.

95:6. Praise and beauty are before him: holiness and majesty in his sanctuary.

95:7. Bring ye to the Lord, O ye kindreds of the Gentiles, bring ye to the Lord glory and honour:

95:8. Bring to the Lord glory unto his name. Bring up sacrifices, and come into his courts:

95:9. Adore ye the Lord in his holy court. Let all the earth be moved at his presence.

95:10. Say ye among the Gentiles, the Lord hath reigned. For he hath corrected the world, which shall not be moved: he will judge the people with justice.

95:11. Let the heavens rejoice, and let the earth be glad, let the sea be moved, and the fulness thereof:

95:12. The fields and all things that are in them shall be joyful. Then shall all the trees of the woods rejoice

95:13. before the face of the Lord, because he cometh: because he cometh to judge the earth. He shall judge the world with justice, and the people with his truth.

Psalms Chapter 96
Dominus regnavit.

All are invited to rejoice at the glorious coming and reign of Christ.

96:1. For the same David, when his land was restored again to him. The Lord hath reigned, let the earth rejoice: let many islands be glad.

96:2. Clouds and darkness are round about him: justice and judgment are the establishment of his throne.

Clouds and darkness.... The coming of Christ in the clouds with great terror and majesty to judge the world, is here prophesied.

96:3. A fire shall go before him, and shall burn his enemies round about.

96:4. His lightnings have shone forth to the world: the earth saw and trembled.

96:5. The mountains melted like wax, at the presence of the Lord: at the presence of the Lord of all the earth.

96:6. The heavens declared his justice: and all people saw his glory.

96:7. Let them be all confounded that adore graven things, and that glory in their idols. Adore him, all you his angels:

96:8. Sion heard, and was glad. And the daughters of Juda rejoiced, because of thy judgments, O Lord.

96:9. For thou art the most high Lord over all the earth: thou art exalted exceedingly above all gods.

96:10. You that love the Lord, hate evil: the Lord preserveth the souls of his saints, he will deliver them out of the hand of the sinner.

96:11. Light is risen to the just, and joy to the right of heart.

96:12. Rejoice, ye just, in the Lord: and give praise to the remembrance of his holiness.

Psalms Chapter 97
Cantate Domino.

All are again invited to praise the Lord, for the victories of Christ.

97:1. A psalm for David himself. Sing ye to the Lord a new canticle: because he hath done wonderful things. His right hand hath wrought for him salvation, and his arm is holy.

97:2. The Lord hath made known his salvation: he hath revealed his justice in the sight of the Gentiles.

97:3. He hath remembered his mercy and his truth toward the house of Israel. All the ends of the earth have seen the salvation of our God.

97:4. Sing joyfully to God, all the earth; make melody, rejoice and sing.

97:5. Sing praise to the Lord on the harp, on the harp, and with the voice of a psalm:

97:6. With long trumpets, and sound of cornet. Make a joyful noise before the Lord our king:

97:7. Let the sea be moved and the fullness thereof: the world and they that dwell therein.

97:8. The rivers shall clap their hands, the mountains shall rejoice together

97:9. At the presence of the Lord: because he cometh to judge the earth. He shall judge the world with justice, and the people with equity.

Psalms Chapter 98
Dominus regnavit.

The reign of the Lord in Sion: that is, of Christ in his church.

98:1. A psalm for David himself. The Lord hath reigned, let the people be angry: he that sitteth on the cherubims: let the earth be moved.

Let the people be angry.... Though many enemies rage, and the whole earth be stirred up to oppose the reign of Christ, he shall still prevail.

98:2. The lord is great in Sion, and high above all people.

98:3. Let them give praise to thy great name: for it is terrible and holy:

98:4. And the king’s honour loveth judgment. Thou hast prepared directions: thou hast done judgment and justice in Jacob.

Loveth judgment.... Requireth discretion.—Ibid. Directions.... Most right and just laws to direct men.

98:5. Exalt ye the Lord our God, and adore his footstool, for it is holy.

Adore his footstool.... The ark of the covenant was called, in the Old Testament, God’s footstool: over which he was understood to sit, on his propitiatory, or mercy seat, as on a throne, between the wings of the cherubims, in the sanctuary: to which the children of Israel paid a great veneration. But as this psalm evidently relates to Christ, and the New Testament, where the ark has no place, the holy fathers understand this text, of the worship paid by the church to the body and blood of Christ in the sacred mysteries: inasmuch as the humanity of Christ is, as it were, the footstool of the divinity. So St. Ambrose, L. 3. De Spiritu Sancto, c. 12. And St. Augustine upon this psalm.

98:6. Moses and Aaron among his priests: and Samuel among them that call upon his name. They called upon the Lord, and he heard them:

Moses and Aaron among his priests.... By this it is evident, that Moses also was a priest, and indeed the chief priest, inasmuch as he consecrated Aaron, and offered sacrifice for him. Lev. 8. So that his pre-eminence over Aaron makes nothing for lay church headship.

98:7. He spoke to them in the pillar of the cloud. They kept his testimonies, and the commandment which he gave them.

98:8. Thou didst hear them, O Lord our God: thou wast a merciful God to them, and taking vengeance on all their inventions.

All their inventions.... that is, all the enterprises of their enemies against them, as in the case of Core, Dathan, and Abiron.

98:9. Exalt ye the Lord our God, and adore at his holy mountain: for the Lord our God is holy.

Psalms Chapter 99
Jubilate Deo.

All are invited to rejoice in God the creator of all.

99:1. A psalm of praise.

99:2. Sing joyfully to God, all the earth: serve ye the Lord with gladness. Come in before his presence with exceeding great joy.

99:3. Know ye that the Lord he is God: he made us, and not we ourselves. We are his people and the sheep of his pasture.

99:4. Go ye into his gates with praise, into his courts with hymns: and give glory to him. Praise ye his name:

99:5. For the Lord is sweet, his mercy endureth for ever, and his truth to generation and generation.

Psalms Chapter 100
Misericordiam et judicium.

The prophet exhorteth all by his example, to follow mercy and justice.

100:1. A psalm for David himself. Mercy and judgment I will sing to thee, O Lord: I will sing,

100:2. And I will understand in the unspotted way, when thou shalt come to me. I walked in the innocence of my heart, in the midst of my house.

I will understand, etc.... That is, I will apply my mind, I will do my endeavour, to know and to follow the perfect way of thy commandments: not trusting to my own strength, but relying on thy coming to me by thy grace.

100:3. I will not set before my eyes any unjust thing: I hated the workers of iniquities.

100:4. The perverse heart did not cleave to me: and the malignant, that turned aside from me, I would not know.

100:5. The man that in private detracted his neighbour, him did I persecute. With him that had a proud eye, and an unsatiable heart, I would not eat.

100:6. My eyes were upon the faithful of the earth, to sit with me: the man that walked in the perfect way, he served me.

100:7. He that worketh pride shall not dwell in the midst of my house: he that speaketh unjust things did not prosper before my eyes.

100:8. In the morning I put to death all the wicked of the land: that I might cut off all the workers of iniquity from the city of the Lord.

Psalms Chapter 101
Domine, exaudi.

A prayer for one in affliction: the fifth penitential psalm.

101:1. The prayer of the poor man, when he was anxious, and poured out his supplication before the Lord.

101:2. Hear, O Lord, my prayer: and let my cry come to thee.

101:3. Turn not away thy face from me: in the day when I am in trouble, incline thy ear to me. In what day soever I shall call upon thee, hear me speedily.

101:4. For my days are vanished like smoke, and my bones are grown dry like fuel for the fire.

101:5. I am smitten as grass, and my heart is withered: because I forgot to eat my bread.

101:6. Through the voice of my groaning, my bone hath cleaved to my flesh.

101:7. I am become like to a pelican of the wilderness: I am like a night raven in the house.

A pelican, etc.... I am become through grief, like birds that affect solitude and darkness.

101:8. I have watched, and am become as a sparrow all alone on the housetop.

101:9. All the day long my enemies reproached me: and they that praised me did swear against me.

101:10. For I did eat ashes like bread, and mingled my drink with weeping.

101:11. Because of thy anger and indignation: for having lifted me up thou hast thrown me down.

101:12. My days have declined like a shadow, and I am withered like grass.

101:13. But thou, O Lord, endurest for ever: and thy memorial to all generations.

101:14. Thou shalt arise and have mercy on Sion: for it is time to have mercy on it, for the time is come.

101:15. For the stones thereof have pleased thy servants: and they shall have pity on the earth thereof.

101:16. And the Gentiles shall fear thy name, O Lord, and all the kings of the earth thy glory.

101:17. For the Lord hath built up Sion: and he shall be seen in his glory.

101:18. He hath had regard to the prayer of the humble: and he hath not despised their petition.

101:19. Let these things be written unto another generation: and the people that shall be created shall praise the Lord:

101:20. Because he hath looked forth from his high sanctuary: from heaven the Lord hath looked upon the earth.

101:21. That he might hear the groans of them that are in fetters: that he might release the children of the slain:

101:22. That they may declare the name of the Lord in Sion: and his praise in Jerusalem;

101:23. When the people assemble together, and kings, to serve the Lord.

101:24. He answered him in the way of his strength: Declare unto me the fewness of my days.

He answered him in the way of his strength.... That is, the people, mentioned in the foregoing verse, or the penitent, in whose person this psalm is delivered, answered the Lord in the way of his strength: that is, according to the best of his power and strength: or when he was in the flower of his age and strength: inquiring after the fewness of his days: to know if he should live long enough to see the happy restoration of Sion, etc.

101:25. Call me not away in the midst of my days: thy years are unto generation and generation.

101:26. In the beginning, O Lord, thou foundedst the earth: and the heavens are the works of thy hands.

101:27. They shall perish but thou remainest: and all of them shall grow old like a garment: And as a vesture thou shalt change them, and they shall be changed.

101:28. But thou art always the selfsame, and thy years shall not fail.

101:29. The children of thy servants shall continue and their seed shall be directed for ever.

Psalms Chapter 102
Benedic, anima.

Thanksgiving to God for his mercies.

102:1. For David himself. Bless the Lord, O my soul: and let all that is within me bless his holy name.

102:2. Bless the Lord, O my soul, and never forget all he hath done for thee.

102:3. Who forgiveth all thy iniquities: who healeth all thy diseases.

102:4. Who redeemeth thy life from destruction: who crowneth thee with mercy and compassion.

102:5. Who satisfieth thy desire with good things: thy youth shall be renewed like the eagle’s.

102:6. The Lord doth mercies, and judgment for all that suffer wrong.

102:7. He hath made his ways known to Moses: his wills to the children of Israel.

102:8. The Lord is compassionate and merciful: longsuffering and plenteous in mercy.

102:9. He will not always be angry: nor will he threaten for ever.

102:10. He hath not dealt with us according to our sins: nor rewarded us according to our iniquities.

102:11. For according to the height of the heaven above the earth: he hath strengthened his mercy towards them that fear him.

102:12. As far as the east is from the west, so far hath he removed our iniquities from us.

102:13. As a father hath compassion on his children, so hath the Lord compassion on them that fear him:

102:14. For he knoweth our frame. He remembereth that we are dust:

102:15. Man’s days are as grass, as the flower of the field so shall he flourish.

102:16. For the spirit shall pass in him, and he shall not be: and he shall know his place no more.

102:17. But the mercy of the Lord is from eternity and unto eternity upon them that fear him: And his justice unto children’s children,

102:18. To such as keep his covenant, And are mindful of his commandments to do them.

102:19. The lord hath prepared his throne in heaven: and his kingdom shall rule over all.

102:20. Bless the Lord, all ye his angels: you that are mighty in strength, and execute his word, hearkening to the voice of his orders.

102:21. Bless the Lord, all ye his hosts: you ministers of his that do his will.

102:22. Bless the Lord, all his works: in every place of his dominion, O my soul, bless thou the Lord.

Psalms Chapter 103
Benedic, anima.

God is to be praised for his mighty works, and wonderful providence.

103:1. For David himself. Bless the Lord, O my soul: O Lord my God, thou art exceedingly great. Thou hast put on praise and beauty:

103:2. And art clothed with light as with a garment. Who stretchest out the heaven like a pavilion:

103:3. Who coverest the higher rooms thereof with water. Who makest the clouds thy chariot: who walkest upon the wings of the winds.

103:4. Who makest thy angels spirits: and thy ministers a burning fire.

103:5. Who hast founded the earth upon its own bases: it shall not be moved for ever and ever.

103:6. The deep like a garment is its clothing: above the mountains shall the waters stand.

103:7. At thy rebuke they shall flee: at the voice of thy thunder they shall fear.

103:8. The mountains ascend, and the plains descend into the place which thou hast founded for them.

103:9. Thou hast set a bound which they shall not pass over; neither shall they return to cover the earth.

103:10. Thou sendest forth springs in the vales: between the midst of the hills the waters shall pass.

103:11. All the beasts of the field shall drink: the wild asses shall expect in their thirst.

103:12. Over them the birds of the air shall dwell: from the midst of the rocks they shall give forth their voices.

103:13. Thou waterest the hills from thy upper rooms: the earth shall be filled with the fruit of thy works:

103:14. Bringing forth grass for cattle, and herb for the service of men. That thou mayst bring bread out of the earth:

103:15. And that wine may cheer the heart of man. That he may make the face cheerful with oil: and that bread may strengthen man’s heart.

103:16. The trees of the field shall be filled, and the cedars of Libanus which he hath planted:

103:17. There the sparrows shall make their nests. The highest of them is the house of the heron.

103:18. The high hills are a refuge for the harts, the rock for the irchins.

103:19. He hath made the moon for seasons: the sun knoweth his going down.

103:20. Thou hast appointed darkness, and it is night: in it shall all the beasts of the woods go about:

103:21. The young lions roaring after their prey, and seeking their meat from God.

103:22. The sun ariseth, and they are gathered together: and they shall lie down in their dens.

103:23. Man shall go forth to his work, and to his labour until the evening.

103:24. How great are thy works, O Lord? thou hast made all things in wisdom: the earth is filled with thy riches.

103:25. So is this great sea, which stretcheth wide its arms: there are creeping things without number: Creatures little and great.

103:26. There the ships shall go. This sea dragon which thou hast formed to play therein.

103:27. All expect of thee that thou give them food in season.

103:28. What thou givest to them they shall gather up: when thou openest thy hand, they shall all be filled with good.

103:29. But if thou turnest away thy face, they shall be troubled: thou shalt take away their breath, and they shall fail, and shall return to their dust.

103:30. Thou shalt send forth thy spirit, and they shall be created: and thou shalt renew the face of the earth.

103:31. May the glory of the Lord endure for ever: the Lord shall rejoice in his works.

103:32. He looketh upon the earth, and maketh it tremble: he toucheth the mountains, and they smoke.

103:33. I will sing to the Lord as long as I live: I will sing praise to my God while I have my being.

103:34. Let my speech be acceptable to him: but I will take delight in the Lord.

103:35. Let sinners be consumed out of the earth, and the unjust, so that they be no more: O my soul, bless thou the Lord.

Psalms Chapter 104
Confitemini Domino.

A thanksgiving to God for his benefits to his people Israel.

Alleluia.

104:1. Give glory to the Lord, and call upon his name: declare his deeds among the Gentiles.

104:2. Sing to him, yea sing praises to him: relate all his wondrous works.

104:3. Glory ye in his holy name: let the heart of them rejoice that seek the Lord.

104:4. Seek ye the lord, and be strengthened: seek his face evermore.

104:5. Remember his marvellous works which he hath done; his wonders, and the judgments of his mouth.

104:6. O ye seed of Abraham his servant; ye sons of Jacob his chosen.

104:7. He is the Lord our God: his judgments are in all the earth.

104:8. He hath remembered his covenant for ever: the word which he commanded to a thousand generations.

104:9. Which he made to Abraham; and his oath to Isaac:

104:10. And he appointed the same to Jacob for a law, and to Israel for an everlasting testament:

104:11. Saying: To thee will I give the land of Chanaan, the lot of your inheritance.

104:12. When they were but a small number: yea very few, and sojourners therein:

104:13. And they passed from nation to nation, and from one kingdom to another people.

104:14. He suffered no man to hurt them: and he reproved kings for their sakes.

104:15. Touch ye not my anointed: and do no evil to my prophets.

104:16. And he called a famine upon the land: and he broke in pieces all the support of bread.

104:17. He sent a man before them: Joseph, who was sold for a slave.

104:18. They humbled his feet in fetters: the iron pierced his soul,

104:19. Until his word came. The word of the Lord inflamed him.

104:20. The king sent, and he released him: the ruler of the people, and he set him at liberty.

104:21. He made him master of his house, and ruler of all his possession.

104:22. That he might instruct his princes as himself, and teach his ancients wisdom.

104:23. And Israel went into Egypt: and Jacob was a sojourner in the land of Cham.

104:24. And he increased his people exceedingly: and strengthened them over their enemies.

104:25. He turned their heart to hate his people: and to deal deceitfully with his servants.

He turned their heart, etc.... Not that God (who is never the author of sin) moved the Egyptians to hate and persecute his people; but that the Egyptians took occasion of hating and envying them, from the sight of the benefits which God bestowed upon them.

104:26. He sent Moses his servant: Aaron the man whom he had chosen.

104:27. He gave them power to shew them signs, and his wonders in the land of Cham.

104:28. He sent darkness, and made it obscure: and grieved not his words.

Grieved not his words.... That is, he was not wanting to fulfil his words: or he did not grieve Moses and Aaron, the carriers of his words: or he did not grieve his words, that is, his sons, the children of Israel, who enjoyed light whilst the Egyptians were oppressed with darkness.

104:29. He turned their waters into blood, and destroyed their fish.

104:30. Their land brought forth frogs, in the inner chambers of their kings.

104:31. He spoke, and there came divers sorts of flies and sciniphs in all their coasts.

Sciniphs.... See the annotation, Ex.8.16.

104:32. He gave them hail for rain, a burning fire in the land.

104:33. And he destroyed their vineyards and their fig trees: and he broke in pieces the trees of their coasts.

104:34. He spoke, and the locust came, and the bruchus, of which there was no number.

Bruchus.... An insect of the locust kind.

104:35. And they devoured all the grass in their land, and consumed all the fruit of their ground.

104:36. And he slew all the firstborn in their land: the firstfruits of all their labour.

104:37. And he brought them out with silver and gold: and there was not among their tribes one that was feeble.

104:38. Egypt was glad when they departed: for the fear of them lay upon them.

104:39. He spread a cloud for their protection, and fire to give them light in the night.

104:40. They asked, and the quail came: and he filled them with the bread of heaven.

104:41. He opened the rock, and waters flowed: rivers ran down in the dry land.

104:42. Because he remembered his holy word, which he had spoken to his servant Abraham.

104:43. And he brought forth his people with joy, and his chosen with gladness.

104:44. And he gave them the lands of the Gentiles: and they possessed the labours of the people:

104:45. That they might observe his justifications, and seek after his law.

His justifications.... That is, his commandments; which here, and in many other places of the scripture, are called justifications, because the keeping of them makes man just. The Protestants render it by the word statutes, in favour of their doctrine, which does not allow good works to justify.

Psalms Chapter 105
Confitemini Domino.

A confession of the manifold sins and ingratitudes of the Israelites.

Alleluia.

105:1. Give glory to the Lord, for he is good: for his mercy endureth for ever.

105:2. Who shall declare the powers of the Lord? who shall set forth all his praises?

105:3. Blessed are they that keep judgment, and do justice at all times.

105:4. Remember us, O Lord, in the favour of thy people: visit us with thy salvation.

105:5. That we may see the good of thy chosen, that we may rejoice in the joy of thy nation: that thou mayst be praised with thy inheritance.

105:6. We have sinned with our fathers: we have acted unjustly, we have wrought iniquity.

105:7. Our fathers understood not thy wonders in Egypt: they remembered not the multitude of thy mercies: And they provoked to wrath going up to the sea, even the Red Sea.

105:8. And he saved them for his own name’s sake: that he might make his power known.

105:9. And he rebuked the Red Sea and it was dried up: and he led them through the depths, as in a wilderness.

105:10. And he saved them from the hand of them that hated them: and he redeemed them from the hand of the enemy.

105:11. And the water covered them that afflicted them: there was not one of them left.

105:12. And they believed his words: and they sang his praises.

105:13. They had quickly done, they forgot his works: and they waited not for his counsel.

105:14. And they coveted their desire in the desert: and they tempted God in the place without water.

105:15. And he gave them their request: and sent fulness into their souls.

105:16. And they provoked Moses in the camp, Aaron the holy one of the Lord.

105:17. The earth opened and swallowed up Dathan: and covered the congregation of Abiron.

105:18. And a fire was kindled in their congregation: the flame burned the wicked.

105:19. They made also a calf in Horeb: and they adored the graven thing.

105:20. And they changed their glory into the likeness of a calf that eateth grass.

105:21. They forgot God, who saved them, who had done great things in Egypt,

105:22. Wondrous works in the land of Cham: terrible things in the Red Sea.

105:23. And he said that he would destroy them: had not Moses his chosen stood before him in the breach: To turn away his wrath, lest he should destroy them.

105:24. And they set at nought the desirable land. They believed not his word,

105:25. And they murmured in their tents: they hearkened not to the voice of the Lord.

105:26. And he lifted up his hand over them: to overthrow them in the desert;

105:27. And to cast down their seed among the nations, and to scatter them in the countries.

105:28. They also were initiated to Beelphegor: and ate the sacrifices of the dead.

Initiated.... That is, they dedicated, or consecrated themselves to the idol of the Moabites and Madianites, called Beelphegor, or Baal-Peor. Num. 25.3.—Ibid. The dead.... Viz., idols without life.

105:29. And they provoked him with their inventions: and destruction was multiplied among them.

105:30. Then Phinees stood up, and pacified him: and the slaughter ceased.

105:31. And it was reputed to him unto justice, to generation and generation for evermore.

105:32. They provoked him also at the waters of contradiction: and Moses was afflicted for their sakes:

105:33. Because they exasperated his spirit. And he distinguished with his lips.

He distinguished with his lips.... Moses, by occasion of the people’s rebellion and incredulity, was guilty of distinguishing with his lips; when, instead of speaking to the rock, as God had commanded, he said to the people, with a certain hesitation in his faith, Hear ye, rebellious and incredulous: Can we from this rock bring out water for you? Num. 20.10.

105:34. They did not destroy the nations of which the Lord spoke unto them.

105:35. And they were mingled among the heathens, and learned their works:

105:36. And served their idols, and it became a stumblingblock to them.

105:37. And they sacrificed their sons, and their daughters to devils.

105:38. And they shed innocent blood: the blood of their sons and of their daughters which they sacrificed to the idols of Chanaan. And the land was polluted with blood,

105:39. And was defiled with their works: and they went aside after their own inventions.

105:40. And the Lord was exceedingly angry with his people: and he abhorred his inheritance.

105:41. And he delivered them into the hands of the nations: and they that hated them had dominion over them.

105:42. And their enemies afflicted them: and they were humbled under their hands:

105:43. Many times did he deliver them. But they provoked him with their counsel: and they were brought low by their iniquities.

105:44. And he saw when they were in tribulation: and he heard their prayer.

105:45. And he was mindful of his covenant: and repented according to the multitude of his mercies.

105:46. And he gave them unto mercies, in the sight of all those that had made them captives.

105:47. Save us, O Lord, our God: and gather us from among the nations: That we may give thanks to thy holy name, and may glory in thy praise.

105:48. Blessed be the Lord the God of Israel, from everlasting to everlasting: and let all the people say: So be it, so be it.

Psalms Chapter 106
Confitemini Domino.

All are invited to give thanks to God for his perpetual providence over men.

Alleluia.

106:1. Give glory to the Lord, for he is good: for his mercy endureth for ever.

106:2. Let them say so that have been redeemed by the Lord, whom he hath redeemed from the hand of the enemy: and gathered out of the countries.

106:3. From the rising and from the setting of the sun, from the north and from the sea.

106:4. They wandered in a wilderness, in a place without water: they found not the way of a city for their habitation.

106:5. They were hungry and thirsty: their soul fainted in them.

106:6. And they cried to the Lord in their tribulation: and he delivered them out of their distresses.

106:7. And he led them into the right way, that they might go to a city of habitation.

106:8. Let the mercies of the Lord give glory to him: and his wonderful works to the children of men.

106:9. For he hath satisfied the empty soul, and hath filled the hungry soul with good things.

106:10. Such as sat in darkness and in the shadow of death: bound in want and in iron.

106:11. Because they had exasperated the words of God: and provoked the counsel of the most High:

106:12. And their heart was humbled with labours: they were weakened, and there was none to help them.

106:13. Then they cried to the Lord in their affliction: and he delivered them out of their distresses.

106:14. And he brought them out of darkness, and the shadow of death; and broke their bonds in sunder.

106:15. Let the mercies of the Lord give glory to him, and his wonderful works to the children of men.

106:16. Because he hath broken gates of brass, and burst iron bars.

106:17. He took them out of the way of their iniquity: for they were brought low for their injustices.

106:18. Their soul abhorred all manner of meat: and they drew nigh even to the gates of death.

106:19. And they cried to the Lord in their affliction: and he delivered them out of their distresses.

106:20. He sent his word, and healed them: and delivered them from their destructions.

106:21. Let the mercies of the Lord give glory to him: and his wonderful works to the children of men.

106:22. And let them sacrifice the sacrifice of praise: and declare his works with joy.

106:23. They that go down to the sea in ships, doing business in the great waters:

106:24. These have seen the works of the Lord, and his wonders in the deep.

106:25. He said the word, and there arose a storm of wind: and the waves thereof were lifted up.

106:26. They mount up to the heavens, and they go down to the depths: their soul pined away with evils.

106:27. They were troubled, and reeled like a drunken man; and all their wisdom was swallowed up.

106:28. And they cried to the Lord in their affliction: and he brought them out of their distresses.

106:29. And he turned the storm into a breeze: and its waves were still.

106:30. And they rejoiced because they were still: and he brought them to the haven which they wished for.

106:31. Let the mercies of the Lord give glory to him, and his wonderful works to the children of men.

106:32. And let them exalt him in the church of the people: and praise him in the chair of the ancients.

106:33. He hath turned rivers into a wilderness: and the sources of waters into dry ground:

106:34. A fruitful land into barrenness, for the wickedness of them that dwell therein.

106:35. He hath turned a wilderness into pools of waters, and a dry land into water springs.

106:36. And hath placed there the hungry; and they made a city for their habitation.

106:37. And they sowed fields, and planted vineyards: and they yielded fruit of birth.

106:38. And he blessed them, and they were multiplied exceedingly: and their cattle he suffered not to decrease.

106:39. Then they were brought to be few: and they were afflicted through the trouble of evils and sorrow.

106:40. Contempt was poured forth upon their princes: and he caused them to wander where there was no passing, and out of the way.

106:41. And he helped the poor out of poverty: and made him families like a flock of sheep.

106:42. The just shall see, and shall rejoice, and all iniquity shall stop her mouth.

106:43. Who is wise, and will keep these things; and will understand the mercies of the Lord?

Psalms Chapter 107
Paratum cor meum.

The prophet praiseth God for benefits received.

107:1. A canticle of a psalm for David himself.

107:2. My heart is ready, O God, my heart is ready: I will sing, and will give praise, with my glory.

107:3. Arise, my glory; arise, psaltery and harp: I will arise in the morning early.

107:4. I will praise thee, O Lord, among the people: and I will sing unto thee among the nations.

107:5. For thy mercy is great above the heavens: and thy truth even unto the clouds.

107:6. Be thou exalted, O God, above the heavens, and thy glory over all the earth:

107:7. That thy beloved may be delivered. Save with thy right hand and hear me.

107:8. God hath spoken in his holiness. I will rejoice, and I will divide Sichem and I will mete out the vale of tabernacles.

107:9. Galaad is mine: and Manasses is mine and Ephraim the protection of my head. Juda is my king:

107:10. Moab the pot of my hope. Over Edom I will stretch out my shoe: the aliens are become my friends.

107:11. Who will bring me into the strong city? who will lead me into Edom?

107:12. Wilt not thou, O God, who hast cast us off? and wilt not thou, O God, go forth with our armies?

107:13. O grant us help from trouble: for vain is the help of man.

107:14. Through God we shall do mightily: and he will bring our enemies to nothing.

Psalms Chapter 108
Deus, laudem meam.

David in the person of Christ, prayeth against his persecutors; more especially the traitor Judas: foretelling and approving his just punishment for his obstinacy in sin and final impenitence.

108:1. Unto the end, a psalm for David.

108:2. O God, be not thou silent in my praise: for the mouth of the wicked and the mouth of the deceitful man is opened against me.

108:3. They have spoken against me with deceitful tongues; and they have compassed me about with words of hatred; and have fought against me without cause.

108:4. Instead of making me a return of love, they detracted me: but I gave myself to prayer.

108:5. And they repaid me evil for good: and hatred for my love.

108:6. Set thou the sinner over him: and may the devil stand at his right hand.

Set thou the sinner over him, etc.... Give to the devil, that arch-sinner, power over him: let him enter into him, and possess him. The imprecations, contained in the thirty verses of this psalm, are opposed to the thirty pieces of silver for which Judas betrayed our Lord; and are to be taken as prophetic denunciations of the evils that should befall the traitor and his accomplices the Jews; and not properly as curses.

108:7. When he is judged, may he go out condemned; and may his prayer be turned to sin.

108:8. May his days be few: and his bishopric let another take.

108:9. May his children be fatherless, and his wife a widow.

108:10. Let his children be carried about vagabonds, and beg; and let them be cast out of their dwellings.

108:11. May the usurer search all his substance: and let strangers plunder his labours.

108:12. May there be none to help him: nor none to pity his fatherless offspring.

108:13. May his posterity be cut off; in one generation may his name be blotted out.

108:14. May the iniquity of his fathers be remembered in the sight of the Lord: and let not the sin of his mother be blotted out.

108:15. May they be before the Lord continually, and let the memory of them perish from the earth:

108:16. because he remembered not to shew mercy,

108:17. But persecuted the poor man and the beggar; and the broken in heart, to put him to death.

108:18. And he loved cursing, and it shall come unto him: and he would not have blessing, and it shall be far from him. And he put on cursing, like a garment: and it went in like water into his entrails, and like oil in his bones.

108:19. May it be unto him like a garment which covereth him; and like a girdle with which he is girded continually.

108:20. This is the work of them who detract me before the Lord; and who speak evils against my soul.

108:21. But thou, O Lord, do with me for thy name’s sake: because thy mercy is sweet. Do thou deliver me,

108:22. For I am poor and needy, and my heart is troubled within me.

108:23. I am taken away like the shadow when it declineth: and I am shaken off as locusts.

108:24. My knees are weakened through fasting: and my flesh is changed for oil.

For oil.... Propter oleum. The meaning is, my flesh is changed, being perfectly emaciated and dried up, as having lost all its oil or fatness.

108:25. And I am become a reproach to them: they saw me and they shaked their heads.

108:26. Help me, O Lord my God; save me; according to thy mercy.

108:27. And let them know that this is thy hand: and that thou, O Lord, hast done it.

108:28. They will curse and thou wilt bless: let them that rise up against me be confounded: but thy servant shall rejoice.

108:29. Let them that detract me be clothed with shame: and let them be covered with their confusion as with a double cloak.

108:30. I will give great thanks to the Lord with my mouth: and in the midst of many I will praise him.

108:31. Because he hath stood at the right hand of the poor, to save my soul from persecutors.

Psalms Chapter 109
Dixit Dominus.

Christ’s exaltation and everlasting priesthood.

109:1. A psalm for David. The Lord said to my Lord: Sit thou at my right hand: Until I make thy enemies thy footstool.

109:2. The Lord will send forth the sceptre of thy power out of Sion: rule thou in the midst of thy enemies.

109:3. With thee is the principality in the day of thy strength: in the brightness of the saints: from the womb before the day star I begot thee.

109:4. The Lord hath sworn, and he will not repent: Thou art a priest for ever according to the order of Melchisedech.

109:5. The Lord at thy right hand hath broken kings in the day of his wrath.

109:6. He shall judge among nations, he shall fill ruins: he shall crush the heads in the land of many.

109:7. He shall drink of the torrent in the way: therefore shall he lift up the head.

Psalms Chapter 110
Confitebor tibi, Domine.

God is to be praised for his graces, and benefits to his church.

Alleluia.

110:1. I will praise thee, O Lord, with my whole heart; in the council of the just, and in the congregation.

110:2. Great are the works of the Lord: sought out according to all his wills.

110:3. His work is praise and magnificence: and his justice continueth for ever and ever.

110:4. He hath made a remembrance of his wonderful works, being a merciful and gracious Lord:

110:5. He hath given food to them that fear him. He will be mindful for ever of his covenant:

110:6. He will shew forth to his people the power of his works.

110:7. That he may give them the inheritance of the Gentiles: the works of his hands are truth and judgment.

110:8. All his commandments are faithful: confirmed for ever and ever, made in truth and equity.

110:9. He hath sent redemption to his people: he hath commanded his covenant for ever. Holy and terrible is his name:

110:10. The fear of the Lord is the beginning of wisdom. A good understanding to all that do it: his praise continueth for ever and ever.

Psalms Chapter 111
Beatus vir.

The good man is happy.

Alleluia, of the returning of Aggeus and Zacharias.

Of the returning, etc.... This is in the Greek and Latin, but not in the Hebrew. It signifies that this psalm was proper to be sung at the time of the return of the people from their captivity; to inculcate to them, how happy they might be, if they would be constant in the service of God.

111:1. Blessed is the man that feareth the Lord: he shall delight exceedingly in his commandments.

111:2. His seed shall be mighty upon earth: the generation of the righteous shall be blessed.

111:3. Glory and wealth shall be in his house: and his justice remaineth for ever and ever.

111:4. To the righteous a light is risen up in darkness: he is merciful, and compassionate and just.

111:5. Acceptable is the man that sheweth mercy and lendeth: he shall order his words with judgment:

111:6. Because he shall not be moved for ever.

111:7. The just shall be in everlasting remembrance: he shall not fear the evil hearing. His heart is ready to hope in the Lord:

111:8. His heart is strengthened, he shall not be moved until he look over his enemies.

111:9. He hath distributed, he hath given to the poor: his justice remaineth for ever and ever: his horn shall be exalted in glory.

111:10. The wicked shall see, and shall be angry, he shall gnash with his teeth and pine away: the desire of the wicked shall perish.

Psalms Chapter 112
Laudate, pueri.

God is to be praised for his regard to the poor and humble.

Alleluia.

112:1. Praise the Lord, ye children: praise ye the name of the Lord.

112:2. Blessed be the name of the Lord, from henceforth now and for ever.

112:3. From the rising of the sun unto the going down of the same, the name of the Lord is worthy of praise.

112:4. The Lord is high above all nations; and his glory above the heavens.

112:5. Who is as the Lord our God, who dwelleth on high:

112:6. and looketh down on the low things in heaven and in earth?

112:7. Raising up the needy from the earth, and lifting up the poor out of the dunghill:

112:8. That he may place him with princes, with the princes of his people.

112:9. Who maketh a barren woman to dwell in a house, the joyful mother of children.

Psalms Chapter 113
In exitu Israel.

God hath shewn his power in delivering his people: idols are vain. The Hebrews divide this into two psalms.

Alleluia.

113:1. When Israel went out of Egypt, the house of Jacob from a barbarous people:

113:2. Judea was made his sanctuary, Israel his dominion.

113:3. The sea saw and fled: Jordan was turned back.

113:4. The mountains skipped like rams, and the hills like the lambs of the flock.

113:5. What ailed thee, O thou sea, that thou didst flee: and thou, O Jordan, that thou wast turned back?

113:6. Ye mountains, that ye skipped like rams, and ye hills, like lambs of the flock?

113:7. At the presence of the Lord the earth was moved, at the presence of the God of Jacob:

113:8. Who turned the rock into pools of water, and the stony hill into fountains of waters.

113:1. Not to us, O Lord, not to us; but to thy name give glory.

113:2. For thy mercy, and for thy truth’s sake: lest the Gentiles should say: Where is their God?

113:3. But our God is in heaven: he hath done all things whatsoever he would.

113:4. The idols of the Gentiles are silver and gold, the works of the hands of men.

113:5. They have mouths and speak not: they have eyes and see not.

113:6. They have ears and hear not: they have noses and smell not.

113:7. They have hands and feel not: they have feet and walk not: neither shall they cry out through their throat.

113:8. Let them that make them become like unto them: and all such as trust in them.

113:9. The house of Israel hath hoped in the Lord: he is their helper and their protector.

113:10. The house of Aaron hath hoped in the Lord: he is their helper and their protector.

113:11. They that fear the Lord have hoped in the Lord: he is their helper and their protector.

113:12. The Lord hath been mindful of us, and hath blessed us. He hath blessed the house of Israel: he hath blessed the house of Aaron.

113:13. He hath blessed all that fear the Lord, both little and great.

113:14. May the Lord add blessings upon you: upon you, and upon your children.

113:15. Blessed be you of the Lord, who made heaven and earth.

113:16. The heaven of heaven is the Lord’s: but the earth he has given to the children of men.

113:17. The dead shall not praise thee, O Lord: nor any of them that go down to hell.

113:18. But we that live bless the Lord: from this time now and for ever.

Psalms Chapter 114
Dilexi.

The prayer of a just man in affliction, with a lively confidence in God.

Alleluia.

114:1. I have loved, because the Lord will hear the voice of my prayer.

114:2. Because he hath inclined his ear unto me: and in my days I will call upon him.

114:3. The sorrows of death have compassed me: and the perils of hell have found me. I met with trouble and sorrow:

114:4. And I called upon the name of the Lord. O Lord, deliver my soul.

114:5. The Lord is merciful and just, and our God sheweth mercy.

114:6. The Lord is the keeper of little ones: I was humbled, and he delivered me.

114:7. Turn, O my soul, into thy rest: for the Lord hath been bountiful to thee.

114:8. For he hath delivered my soul from death: my eyes from tears, my feet from falling.

114:9. I will please the Lord in the land of the living.

Psalms Chapter 115
Credidi.

This in the Hebrew is joined with the foregoing psalm, and continues to express the faith and gratitude of the psalmist.

Alleluia.

115:10. I have believed, therefore have I spoken; but I have been humbled exceedingly.

115:11. I said in my excess: Every man is a liar.

115:12. What shall I render to the Lord, for all the things that he hath rendered to me?

115:13. I will take the chalice of salvation; and I will call upon the name of the Lord.

115:14. I will pay my vows to the Lord before all his people:

115:15. Precious in the sight of the Lord is the death of his saints.

115:16. O Lord, for I am thy servant: I am thy servant, and the son of thy handmaid. Thou hast broken my bonds:

115:17. I will sacrifice to thee the sacrifice of praise, and I will call upon the name of the Lord.

115:18. I will pay my vows to the Lord in the sight of all his people:

115:19. In the courts of the house of the Lord, in the midst of thee, O Jerusalem.

Psalms Chapter 116
Laudate Dominum.

All nations are called upon to praise God for his mercy and truth.

Alleluia.

116:1. O Praise the Lord, all ye nations: praise him, all ye people.

116:2. For his mercy is confirmed upon us: and the truth of the Lord remaineth for ever.

Psalms Chapter 117
Confitemini Domino.

The psalmist praiseth God for his delivery from evils: putteth his whole trust in him; and foretelleth the coming of Christ.

Alleluia.

117:1. Give praise to the Lord, for he is good: for his mercy endureth for ever.

117:2. Let Israel now say, that he is good: that his mercy endureth for ever.

117:3. Let the house of Aaron now say, that his mercy endureth for ever.

117:4. Let them that fear the Lord now say, that his mercy endureth for ever.

117:5. In my trouble I called upon the Lord: and the Lord heard me, and enlarged me.

117:6. The Lord is my helper: I will not fear what man can do unto me.

117:7. The Lord is my helper: and I will look over my enemies.

117:8. It is good to confide in the Lord, rather than to have confidence in man.

117:9. It is good to trust in the Lord, rather than to trust in princes.

117:10. All nations compassed me about; and, in the name of the Lord I have been revenged on them.

117:11. Surrounding me they compassed me about: and in the name of the Lord I have been revenged on them.

117:12. They surrounded me like bees, and they burned like fire among thorns: and in the name of the Lord I was revenged on them.

117:13. Being pushed I was overturned that I might fall: but the Lord supported me.

117:14. The Lord is my strength and my praise: and he is become my salvation.

117:15. The voice of rejoicing and of salvation is in the tabernacles of the just.

117:16. The right hand of the Lord hath wrought strength: the right hand of the Lord hath exalted me: the right hand of the Lord hath wrought strength.

117:17. I shall not die, but live: and shall declare the works of the Lord.

117:18. The Lord chastising hath chastised me: but he hath not delivered me over to death.

117:19. Open ye to me the gates of justice: I will go in to them, and give praise to the Lord.

117:20. This is the gate of the Lord, the just shall enter into it.

117:21. I will give glory to thee because thou hast heard me: and art become my salvation.

117:22. The stone which the builders rejected; the same is become the head of the corner.

117:23. This is the Lord’s doing, and it is wonderful in our eyes.

117:24. This is the day which the Lord hath made: let us be glad and rejoice therein.

117:25. O Lord, save me: O Lord, give good success.

117:26. Blessed be he that cometh in the name of the Lord. We have blessed you out of the house of the Lord.

117:27. The Lord is God, and he hath shone upon us. Appoint a solemn day, with shady boughs, even to the horn of the altar.

117:28. Thou art my God, and I will praise thee: thou art my God, and I will exalt thee. I will praise thee, because thou hast heard me, and art become my salvation.

117:29. O praise ye the Lord, for he is good: for his mercy endureth for ever.

Psalms Chapter 118
Beati immaculati.

Of the excellence of virtue consisting in the love and observance of the commandments of God.

Alleluia.

ALEPH.

Aleph.... The first eight verses of this psalm in the original begin with Aleph, which is the name of the first letter of the Hebrew alphabet. The second eight verses begin with Beth, the name of the second letter of the Hebrew alphabet; and so to the end of the whole alphabet, in all twenty-two letters, each letter having eight verses. This order is variously expounded by the holy fathers; which shews the difficulty of understanding the holy scriptures, and consequently with what humility, and submission to the Church they are to be read.

118:1. Blessed are the undefiled in the way, who walk in the law of the Lord.

118:2. Blessed are they that search his testimonies: that seek him with their whole heart.

His testimonies.... The commandments of God are called his testimonies, because they testify his holy will unto us. Note here, that in almost every verse of this psalm (which in number are 176) the word and law of God, and the love and observance of it, is perpetually inculcated, under a variety of denominations, all signifying the same thing.

118:3. For they that work iniquity, have not walked in his ways.

118:4. Thou hast commanded thy commandments to be kept most diligently.

118:5. O! that my ways may be directed to keep thy justifications.

118:6. Then shall I not be confounded, when I shall look into all thy commandments.

118:7. I will praise thee with uprightness of heart, when I shall have learned the judgments of thy justice.

118:8. I will keep thy justifications: O! do not thou utterly forsake me.

BETH.

118:9. By what doth a young man correct his way? by observing thy words.

118:10. With my whole heart have I sought after thee: let me not stray from thy commandments.

118:11. Thy words have I hidden in my heart, that I may not sin against thee.

118:12. Blessed art thou, O Lord: teach me thy justifications.

118:13. With my lips I have pronounced all the judgments of thy mouth.

118:14. I have been delighted in the way of thy testimonies, as in all riches.

118:15. I will meditate on thy commandments: and I will consider thy ways.

118:16. I will think of thy justifications: I will not forget thy words.

GIMEL.

118:17. Give bountifully to thy servant, enliven me: and I shall keep thy words.

118:18. Open thou my eyes: and I will consider the wondrous things of thy law.

118:19. I am a sojourner on the earth: hide not thy commandments from me.

118:20. My soul hath coveted to long for thy justifications, at all times.

118:21. Thou hast rebuked the proud: they are cursed who decline from thy commandments.

118:22. Remove from me reproach and contempt: because I have sought after thy testimonies.

118:23. For princes sat, and spoke against me: but thy servant was employed in thy justifications.

118:24. For thy testimonies are my meditation: and thy justifications my counsel.

DALETH.

118:25. My soul hath cleaved to the pavement: quicken thou me according to thy word.

118:26. I have declared my ways, and thou hast heard me: teach me thy justifications.

118:27. Make me to understand the way of thy justifications: and I shall be exercised in thy wondrous works.

118:28. My soul hath slumbered through heaviness: strengthen thou me in thy words.

118:29. Remove from me the way of iniquity: and out of thy law have mercy on me.

118:30. I have chosen the way of truth: thy judgments I have not forgotten.

118:31. I have stuck to thy testimonies, O Lord: put me not to shame.

118:32. I have run the way of thy commandments, when thou didst enlarge my heart.

HE.

118:33. Set before me for a law the way of thy justifications, O Lord: and I will always seek after it.

118:34. Give me understanding, and I will search thy law; and I will keep it with my whole heart.

118:35. Lead me into the path of thy commandments; for this same I have desired.

118:36. Incline my heart into thy testimonies and not to covetousness.

118:37. Turn away my eyes that they may not behold vanity: quicken me in thy way.

118:38. Establish thy word to thy servant, in thy fear.

118:39. Turn away my reproach, which I have apprehended: for thy judgments are delightful.

118:40. Behold I have longed after thy precepts: quicken me in thy justice.

VAU.

118:41. Let thy mercy also come upon me, O Lord: thy salvation according to thy word.

118:42. So shall I answer them that reproach me in any thing; that I have trusted in thy words.

118:43. And take not thou the word of truth utterly out of my mouth: for in thy words, I have hoped exceedingly.

118:44. So shall I always keep thy law, for ever and ever.

118:45. And I walked at large: because I have sought after thy commandments.

118:46. And I spoke of thy testimonies before kings: and I was not ashamed.

118:47. I meditated also on thy commandments, which I loved.

118:48. And I lifted up my hands to thy commandments, which I loved: and I was exercised in thy justifications.

ZAIN.

118:49. Be thou mindful of thy word to thy servant, in which thou hast given me hope.

118:50. This hath comforted me in my humiliation: because thy word hath enlivened me.

118:51. The proud did iniquitously altogether: but I declined not from thy law.

118:52. I remembered, O Lord, thy judgments of old: and I was comforted.

118:53. A fainting hath taken hold of me, because of the wicked that forsake thy law.

118:54. Thy justifications were the subject of my song, in the place of my pilgrimage.

118:55. In the night I have remembered thy name, O Lord: and have kept thy law.

118:56. This happened to me: because I sought after thy justifications.

HETH.

118:57. O Lord, my portion, I have said, I would keep thy law.

118:58. I entreated thy face with all my heart: have mercy on me according to thy word.

118:59. I have thought on my ways: and turned my feet unto thy testimonies.

118:60. I am ready, and am not troubled: that I may keep thy commandments.

118:61. The cords of the wicked have encompassed me: but I have not forgotten thy law.

118:62. I rose at midnight to give praise to thee; for the judgments of thy justification.

118:63. I am a partaker with all them that fear thee, and that keep thy commandments.

118:64. The earth, O Lord, is full of thy mercy: teach me thy justifications.

TETH.

118:65. Thou hast done well with thy servant, O Lord, according to thy word.

118:66. Teach me goodness and discipline and knowledge; for I have believed thy commandments.

118:67. Before I was humbled I offended; therefore have I kept thy word.

118:68. Thou art good; and in thy goodness teach me thy justifications.

118:69. The iniquity of the proud hath been multiplied over me: but I will seek thy commandments with my whole heart.

118:70. Their heart is curdled like milk: but I have meditated on thy law.

118:71. It is good for me that thou hast humbled me, that I may learn thy justifications.

118:72. The law of thy mouth is good to me, above thousands of gold and silver.

JOD.

118:73. Thy hands have made me and formed me: give me understanding, and I will learn thy commandments.

118:74. They that fear thee shall see me, and shall be glad: because I have greatly hoped in thy words.

118:75. I know, O Lord, that thy judgments are equity: and in thy truth thou hast humbled me.

118:76. O! let thy mercy be for my comfort, according to thy word unto thy servant.

118:77. Let thy tender mercies come unto me, and I shall live: for thy law is my meditation.

118:78. Let the proud be ashamed, because they have done unjustly towards me: but I will be employed in thy commandments.

118:79. Let them that fear thee turn to me: and they that know thy testimonies.

118:80. Let my heart be undefiled in thy justifications, that I may not be confounded.

CAPH.

118:81. My soul hath fainted after thy salvation: and in thy word I have very much hoped.

118:82. My eyes have failed for thy word, saying: When wilt thou comfort me?

118:83. For I am become like a bottle in the frost: I have not forgotten thy justifications.

118:84. How many are the days of thy servant: when wilt thou execute judgment on them that persecute me?

118:85. The wicked have told me fables: but not as thy law.

118:86. All thy statutes are truth: they have persecuted me unjustly, do thou help me.

118:87. They had almost made an end of me upon earth: but I have not forsaken thy commandments.

118:88. Quicken thou me according to thy mercy: and I shall keep the testimonies of thy mouth.

LAMED.

118:89. For ever, O Lord, thy word standeth firm in heaven.

118:90. Thy truth unto all generations: thou hast founded the earth, and it continueth.

118:91. By thy ordinance the day goeth on: for all things serve thee.

118:92. Unless thy law had been my meditation, I had then perhaps perished in my abjection.

118:93. Thy justifications I will never forget: for by them thou hast given me life.

118:94. I am thine, save thou me: for I have sought thy justifications.

118:95. The wicked have waited for me to destroy me: but I have understood thy testimonies.

118:96. I have seen an end of all perfection: thy commandment is exceeding broad.

MEM.

118:97. O how have I loved thy law, O Lord! it is my meditation all the day.

118:98. Through thy commandment, thou hast made me wiser than my enemies: for it is ever with me.

118:99. I have understood more than all my teachers: because thy testimonies are my meditation.

118:100. I have had understanding above ancients: because I have sought thy commandments.

118:101. I have restrained my feet from every evil way: that I may keep thy words.

118:102. I have not declined from thy judgments, because thou hast set me a law.

118:103. How sweet are thy words to my palate! more than honey to my mouth.

118:104. By thy commandments I have had understanding: therefore have I hated every way of iniquity.

NUN.

118:105. Thy word is a lamp to my feet, and a light to my paths.

118:106. I have sworn and am determined to keep the judgments of thy justice.

118:107. I have been humbled, O Lord, exceedingly: quicken thou me according to thy word.

118:108. The free offerings of my mouth make acceptable, O Lord: and teach me thy judgments.

118:109. My soul is continually in my hands: and I have not forgotten thy law.

118:110. Sinners have laid a snare for me: but I have not erred from thy precepts.

118:111. I have purchased thy testimonies for an inheritance for ever: because they are the joy of my heart.

118:112. I have inclined my heart to do thy justifications for ever, for the reward.

SAMECH.

118:113. I have hated the unjust: and have loved thy law.

118:114. Thou art my helper and my protector: and in thy word I have greatly hoped.

118:115. Depart from me, ye malignant: and I will search the commandments of my God.

118:116. Uphold me according to thy word, and I shall live: and let me not be confounded in my expectation.

118:117. Help me, and I shall be saved: and I will meditate always on thy justifications.

118:118. Thou hast despised all them that fall off from thy judgments; for their thought is unjust.

118:119. I have accounted all the sinners of the earth prevaricators: therefore have I loved thy testimonies.

118:120. Pierce thou my flesh with thy fear: for I am afraid of thy judgments.

AIN.

118:121. I have done judgment and justice: give me not up to them that slander me.

118:122. Uphold thy servant unto good: let not the proud calumniate me.

118:123. My eyes have fainted after thy salvation: and for the word of thy justice.

118:124. Deal with thy servant according to thy mercy: and teach me thy justifications.

118:125. I am thy servant: give me understanding that I may know thy testimonies.

118:126. It is time, O Lord, to do: they have dissipated thy law.

118:127. Therefore have I loved thy commandments above gold and the topaz.

118:128. Therefore was I directed to all thy commandments: I have hated all wicked ways.

PHE.

118:129. Thy testimonies are wonderful: therefore my soul hath sought them.

118:130. The declaration of thy words giveth light: and giveth understanding to little ones.

118:131. I opened my mouth, and panted: because I longed for thy commandments.

118:132. Look thou upon me, and have mercy on me according to the judgment of them that love thy name.

118:133. Direct my steps according to thy word: and let no iniquity have dominion over me.

118:134. Redeem me from the calumnies of men: that I may keep thy commandments.

118:135. Make thy face to shine upon thy servant: and teach me thy justifications.

118:136. My eyes have sent forth springs of water: because they have not kept thy law.

SADE.

118:137. Thou art just, O Lord: and thy judgment is right.

118:138. Thou hast commanded justice thy testimonies: and thy truth exceedingly.

118:139. My zeal hath made me pine away: because my enemies forgot thy words.

118:140. Thy word is exceedingly refined: and thy servant hath loved it.

118:141. I am very young and despised; but I forget not thy justifications.

118:142. Thy justice is justice for ever: and thy law is the truth.

118:143. Trouble and anguish have found me: thy commandments are my meditation.

118:144. Thy testimonies are justice for ever: give me understanding, and I shall live.

COPH.

118:145. I cried with my whole heart, hear me, O Lord: I will seek thy justifications.

118:146. I cried unto thee, save me: that I may keep thy commandments.

118:147. I prevented the dawning of the day, and cried: because in thy words I very much hoped.

118:148. My eyes to thee have prevented the morning: that I might meditate on thy words.

118:149. Hear thou my voice, O Lord, according to thy mercy: and quicken me according to thy judgment.

118:150. They that persecute me have drawn nigh to iniquity; but they are gone far off from thy law.

118:151. Thou art near, O Lord: and all thy ways are truth.

118:152. I have known from the beginning concerning thy testimonies: that thou hast founded them for ever.

RES.

118:153. See my humiliation and deliver me for I have not forgotten thy law.

118:154. Judge my judgment and redeem me: quicken thou me for thy word’s sake.

118:155. Salvation is far from sinners; because they have not sought thy justifications.

118:156. Many, O Lord, are thy mercies: quicken me according to thy judgment.

118:157. Many are they that persecute me and afflict me; but I have not declined from thy testimonies.

118:158. I beheld the transgressors, and pined away; because they kept not thy word.

118:159. Behold I have loved thy commandments, O Lord; quicken me thou in thy mercy.

118:160. The beginning of thy words is truth: all the judgments of thy justice are for ever.

SIN.

118:161. Princes have persecuted me without cause: and my heart hath been in awe of thy words.

118:162. I will rejoice at thy words, as one that hath found great spoil.

118:163. I have hated and abhorred iniquity; but I have loved thy law.

118:164. Seven times a day I have given praise to thee, for the judgments of thy justice.

118:165. Much peace have they that love thy law, and to them there is no stumbling block.

118:166. I looked for thy salvation, O Lord: and I loved thy commandments.

118:167. My soul hath kept thy testimonies and hath loved them exceedingly.

118:168. I have kept thy commandments and thy testimonies: because all my ways are in thy sight.

TAU.

118:169. Let my supplication, O Lord, come near in thy sight: give me understanding according to thy word.

118:170. Let my request come in before thee; deliver thou me according to thy word.

118:171. My lips shall utter a hymn, when thou shalt teach me thy justifications.

118:172. My tongue shall pronounce thy word: because all thy commandments are justice.

118:173. Let thy hand be with me to save me; for I have chosen thy precepts.

118:174. I have longed for thy salvation, O Lord; and thy law is my meditation.

118:175. My soul shall live and shall praise thee: and thy judgments shall help me.

118:176. I have gone astray like a sheep that is lost: seek thy servant, because I have not forgotten thy commandments.

Psalms Chapter 119
Ad Dominum.

A prayer in tribulation.

A gradual canticle.

A gradual canticle.... The following psalms, in number fifteen, are called gradual psalms, or canticles, from the word gradus, signifying steps, ascensions, or degrees: either because they were appointed to be sung on the fifteen steps, by which the people ascended to the temple: or, that in the singing of them the voice was to be raised by certain steps or ascensions: or, that they were to be sung by the people returning from their captivity and ascending to Jerusalem, which was seated amongst mountains. The holy fathers, in a mystical sense, understand these steps, or ascensions, of the degrees by which Christians spiritually ascend to virtue and perfection; and to the true temple of God in the heavenly Jerusalem.

119:1. In my trouble I cried to the Lord: and he heard me.

119:2. O Lord, deliver my soul from wicked lips, and a deceitful tongue.

119:3. What shall be given to thee, or what shall be added to thee, to a deceitful tongue?

119:4. The sharp arrows of the mighty, with coals that lay waste.

119:5. Woe is me, that my sojourning is prolonged! I have dwelt with the inhabitants of Cedar:

119:6. My soul hath been long a sojourner.

119:7. With them that hated peace I was peaceable: when I spoke to them they fought against me without cause.

Psalms Chapter 120
Levavi oculos.

God is the keeper of his servants.

A gradual canticle.

120:1. I have lifted up my eyes to the mountains, from whence help shall come to me.

120:2. My help is from the Lord, who made heaven and earth.

120:3. May he not suffer thy foot to be moved: neither let him slumber that keepeth thee.

120:4. Behold he shall neither slumber nor sleep, that keepeth Israel.

120:5. The Lord is thy keeper, the Lord is thy protection upon thy right hand.

120:6. The sun shall not burn thee by day: nor the moon by night.

120:7. The Lord keepeth thee from all evil: may the Lord keep thy soul.

120:8. May the Lord keep thy coming in and thy going out; from henceforth now and for ever.

Psalms Chapter 121
Laetatus sum in his.

The desire and hope of the just for the coming of the kingdom of God, and the peace of his church.

A gradual canticle.

121:1. I rejoiced at the things that were said to me: We shall go into the house of the Lord.

121:2. Our feet were standing in thy courts, O Jerusalem.

121:3. Jerusalem, which is built as a city, which is compact together.

121:4. For thither did the tribes go up, the tribes of the Lord: the testimony of Israel, to praise the name of the Lord.

121:5. Because their seats have sat in judgment, seats upon the house of David.

121:6. Pray ye for the things that are for the peace of Jerusalem: and abundance for them that love thee.

121:7. Let peace be in thy strength: and abundance in thy towers.

121:8. For the sake of my brethren, and of my neighbours, I spoke peace of thee.

121:9. Because of the house of the Lord our God, I have sought good things for thee.

Psalms Chapter 122
Ad te levavi.

A prayer in affliction, with confidence in God.

A gradual canticle.

122:1. To thee have I lifted up my eyes, who dwellest in heaven.

122:2. Behold as the eyes of servants are on the hands of their masters, As the eyes of the handmaid are on the hands of her mistress: so are our eyes unto the Lord our God, until he have mercy on us.

122:3. Have mercy on us, O Lord, have mercy on us: for we are greatly filled with contempt.

122:4. For our soul is greatly filled: we are a reproach to the rich, and contempt to the proud.

Psalms Chapter 123
Nisi quia Domini.

The church giveth glory to God for her deliverance, from the hands of her enemies.

A gradual canticle.

123:1. If it had not been that the Lord was with us, let Israel now say:

123:2. If it had not been that the Lord was with us, When men rose up against us,

123:3. Perhaps they had swallowed us up alive. When their fury was enkindled against us,

123:4. Perhaps the waters had swallowed us up.

123:5. Our soul hath passed through a torrent: perhaps our soul had passed through a water insupportable.

123:6. Blessed be the Lord, who hath not given us to be a prey to their teeth.

123:7. Our soul hath been delivered as a sparrow out of the snare of the fowlers. The snare is broken, and we are delivered.

123:8. Our help is in the name of the Lord, who made heaven and earth.

Psalms Chapter 124
Qui confidunt.

The just are always under God’s protection.

A gradual canticle.

124:1. They that trust in the Lord shall be as mount Sion: he shall not be moved for ever that dwelleth

124:2. In Jerusalem. Mountains are round about it: so the Lord is round about his people from henceforth now and for ever.

124:3. For the Lord will not leave the rod of sinners upon the lot of the just: that the just may not stretch forth their hands to iniquity.

124:4. Do good, O Lord, to those that are good, and to the upright of heart.

124:5. But such as turn aside into bonds, the Lord shall lead out with the workers of iniquity: peace upon Israel.

Psalms Chapter 125
In convertendo.

The people of God rejoice at their delivery from captivity.

A gradual canticle.

125:1. When the Lord brought back the captivity of Sion, we became like men comforted.

125:2. Then was our mouth filled with gladness; and our tongue with joy. Then shall they say among the Gentiles: The Lord hath done great things for them.

125:3. The Lord hath done great things for us: we are become joyful.

125:4. Turn again our captivity, O Lord, as a stream in the south.

125:5. They that sow in tears shall reap in joy.

125:6. Going they went and wept, casting their seeds.

125:7. But coming they shall come with joyfulness, carrying their sheaves.

Psalms Chapter 126
Nisi Dominus.

Nothing can be done without God’s grace and blessing.

A gradual canticle of Solomon.

126:1. Unless the Lord build the house, they labour in vain that build it. Unless the Lord keep the city, he watcheth in vain that keepeth it.

126:2. It is vain for you to rise before light, rise ye after you have sitten, you that eat the bread of sorrow. When he shall give sleep to his beloved,

It is vain for you to rise before light.... That is, your early rising, your labour and worldly solicitude, will be vain, that is, will avail you nothing, without the light, grace, and blessing of God.

126:3. Behold the inheritance of the Lord are children: the reward, the fruit of the womb.

126:4. As arrows in the hand of the mighty, so the children of them that have been shaken.

126:5. Blessed is the man that hath filled the desire with them; he shall not be confounded when he shall speak to his enemies in the gate.

Psalms Chapter 127
Beati omnes.

The fear of God is the way to happiness.

A gradual canticle.

127:1. Blessed are all they that fear the Lord: that walk in his ways.

127:2. For thou shalt eat the labours of thy hands: blessed art thou, and it shall be well with thee.

127:3. Thy wife as a fruitful vine, on the sides of thy house. Thy children as olive plants, round about thy table.

127:4. Behold, thus shall the man be blessed that feareth the Lord.

127:5. May the Lord bless thee out of Sion: and mayst thou see the good things of Jerusalem all the days of thy life.

127:6. And mayst thou see thy children’s children, peace upon Israel.

Psalms Chapter 128
Saepe expugnaverunt.

The church of God is invincible: her persecutors come to nothing.

A gradual canticle.

128:1. Often have they fought against me from my youth, let Israel now say.

128:2. Often have they fought against me from my youth: but they could not prevail over me.

128:3. The wicked have wrought upon my back: they have lengthened their iniquity.

128:4. The Lord who is just will cut the necks of sinners:

128:5. Let them all be confounded and turned back that hate Sion.

128:6. Let them be as grass upon the tops of houses: which withereth before it be plucked up:

128:7. Who with the mower filleth not his hand: nor he that gathereth sheaves his bosom.

128:8. And they that passed by have not said: The blessing of the Lord be upon you: we have blessed you in the name of the Lord.

Psalms Chapter 129
De profundis.

A prayer of a sinner, trusting in the mercies of God. The sixth penitential psalm.

A gradual canticle.

129:1. Out of the depths I have cried to thee, O Lord:

129:2. Lord, hear my voice. Let thy ears be attentive to the voice of my supplication.

129:3. If thou, O Lord, wilt mark iniquities: Lord, who shall stand it.

129:4. For with thee there is merciful forgiveness: and by reason of thy law, I have waited for thee, O Lord. My soul hath relied on his word:

129:5. my soul hath hoped in the Lord.

129:6. From the morning watch even until night, let Israel hope in the Lord.

129:7. Because with the Lord there is mercy: and with him plentiful redemption.

129:8. And he shall redeem Israel from all his iniquities.

Psalms Chapter 130
Domine, none est.

The prophet’s humility.

A gradual canticle of David.

130:1. Lord, my heart is not exalted: nor are my eyes lofty. Neither have I walked in great matters, nor in wonderful things above me.

130:2. If I was not humbly minded, but exalted my soul: As a child that is weaned is towards his mother, so reward in my soul.

130:3. Let Israel hope in the Lord, from henceforth now and for ever.

Psalms Chapter 131
Memento, Domine.

A prayer for the fulfilling of the promise made to David.

A gradual canticle.

131:1. O Lord, remember David, and all his meekness.

131:2. How he swore to the Lord, he vowed a vow to the God of Jacob:

131:3. If I shall enter into the tabernacle of my house: if I shall go up into the bed wherein I lie:

131:4. If I shall give sleep to my eyes, or slumber to my eyelids,

131:5. Or rest to my temples: until I find out a place for the Lord, a tabernacle for the God of Jacob.

131:6. Behold we have heard of it in Ephrata: we have found it in the fields of the wood.

We have heard of it in Ephrata.... When I was young, and lived in Bethlehem, otherwise called Ephrata, I heard of God’s tabernacle and ark, and had a devout desire of seeking it; and accordingly I found it at Cariathiarim, the city of the woods: where it was till it was removed to Jerusalem. See 1 Par. 13.

131:7. We will go into his tabernacle: we will adore in the place where his feet stood.

131:8. Arise, O Lord, into thy resting place: thou and the ark, which thou hast sanctified.

131:9. Let thy priests be clothed with justice: and let thy saints rejoice.

131:10. For thy servant David’s sake, turn not away the face of thy anointed.

131:11. The Lord hath sworn truth to David, and he will not make it void: of the fruit of thy womb I will set upon thy throne.

131:12. If thy children will keep my covenant, and these my testimonies which I shall teach them: Their children also for evermore shall sit upon thy throne.

131:13. For the Lord hath chosen Sion: he hath chosen it for his dwelling.

131:14. This is my rest for ever and ever: here will I dwell, for I have chosen it.

131:15. Blessing I will bless her widow: I will satisfy her poor with bread.

131:16. I will clothe her priests with salvation, and her saints shall rejoice with exceeding great joy.

131:17. There will I bring forth a horn to David: I have prepared a lamp for my anointed.

131:18. His enemies I will clothe with confusion: but upon him shall my sanctification flourish.

Psalms Chapter 132
Ecce quam bonum.

The happiness of brotherly love and concord.

A gradual canticle of David.

132:1. Behold how good and how pleasant it is for brethren to dwell together in unity:

132:2. Like the precious ointment on the head, that ran down upon the beard, the beard of Aaron, Which ran down to the skirt of his garment:

132:3. As the dew of Hermon, which descendeth upon mount Sion. For there the Lord hath commanded blessing, and life for evermore.

Psalms Chapter 133
Ecce nunc benedicite.

An exhortation to praise God continually.

A gradual canticle.

133:1. Behold now bless ye the Lord, all ye servants of the Lord: Who stand in the house of the Lord, in the courts of the house of our God.

133:2. In the nights lift up your hands to the holy places, and bless ye the Lord.

133:3. May the Lord out of Sion bless thee, he that made heaven and earth.

Psalms Chapter 134
Laudate nomen.

An exhortation to praise God: the vanity of idols.

134:1. Alleluia. Praise ye the name of the Lord: O you his servants, praise the Lord:

134:2. You that stand in the house of the Lord, in the courts of the house of our God.

134:3. Praise ye the Lord, for the Lord is good: sing ye to his name, for it is sweet.

134:4. For the Lord hath chosen Jacob unto himself: Israel for his own possession.

134:5. For I have known that the Lord is great, and our God is above all gods.

134:6. Whatsoever the Lord pleased he hath done, in heaven, in earth, in the sea, and in all the deeps.

134:7. He bringeth up clouds from the end of the earth: he hath made lightnings for the rain. He bringeth forth winds out of his stores:

134:8. He slew the firstborn of Egypt from man even unto beast.

134:9. He sent forth signs and wonders in the midst of thee, O Egypt: upon Pharao, and upon all his servants.

134:10. He smote many nations, and slew mighty kings:

134:11. Sehon king of the Amorrhites, and Og king of Basan, and all the kingdoms of Chanaan.

134:12. And gave their land for an inheritance, for an inheritance to his people Israel.

134:13. Thy name, O Lord, is for ever: thy memorial, O Lord, unto all generations.

134:14. For the Lord will judge his people, and will be entreated in favour of his servants.

134:15. The idols of the Gentiles are silver and gold, the works of men’s hands.

134:16. They have a mouth, but they speak not: they have eyes, but they see not.

134:17. They have ears, but they hear not: neither is there any breath in their mouths.

134:18. Let them that make them be like to them: and every one that trusteth in them.

134:19. Bless the Lord, O house of Israel: bless the Lord, O house of Aaron.

134:20. Bless the Lord, O house of Levi: you that fear the Lord, bless the Lord.

134:21. Blessed be the Lord out of Sion, who dwelleth in Jerusalem.

Psalms Chapter 135
Confitemini Domino.

God is to be praised for his wonderful works.

135:1. Alleluia. Praise the Lord, for he is good: for his mercy endureth for ever.

Praise the Lord.... By this invitation to praise the Lord, thrice repeated, we profess the Blessed Trinity, One God in three distinct Persons, the Father, and the Son, and the Holy Ghost.

135:2. Praise ye the God of gods: for his mercy endureth for ever.

135:3. Praise ye the Lord of lords: for his mercy endureth for ever.

135:4. Who alone doth great wonders: for his mercy endureth for ever.

135:5. Who made the heavens in understanding: for his mercy endureth for ever.

135:6. Who established the earth above the waters: for his mercy endureth for ever.

135:7. Who made the great lights: for his mercy endureth for ever.

135:8. The sun to rule the day: for his mercy endureth for ever.

135:9. The moon and the stars to rule the night: for his mercy endureth for ever.

135:10. Who smote Egypt with their firstborn: for his mercy endureth for ever.

135:11. Who brought out Israel from among them: for his mercy endureth for ever.

135:12. With a mighty hand and with a stretched out arm: for his mercy endureth for ever.

135:13. Who divided the Red Sea into parts: for his mercy endureth for ever.

135:14. And brought out Israel through the midst thereof: for his mercy endureth for ever.

135:15. And overthrew Pharao and his host in the Red Sea: for his mercy endureth for ever.

135:16. Who led his people through the desert: for his mercy endureth for ever.

135:17. Who smote great kings: for his mercy endureth for ever.

135:18. And slew strong kings: for his mercy endureth for ever.

135:19. Sehon king of the Amorrhites: for his mercy endureth for ever.

135:20. And Og king of Basan: for his mercy endureth for ever.

135:21. And he gave their land for an inheritance: for his mercy endureth for ever.

135:22. For an inheritance to his servant Israel: for his mercy endureth for ever.

135:23. For he was mindful of us in our affliction: for his mercy endureth for ever.

135:24. And he redeemed us from our enemies: for his mercy endureth for ever.

135:25. Who giveth food to all flesh: for his mercy endureth for ever.

135:26. Give glory to the God of heaven: for his mercy endureth for ever.

135:27. Give glory to the Lord of lords: for his mercy endureth for ever.

Psalms Chapter 136
Super flumina.

The lamentation of the people of God in their captivity in Babylon.

A psalm of David, for Jeremias.

For Jeremias.... For the time of Jeremias, and the captivity of Babylon.

136:1. Upon the rivers of Babylon, there we sat and wept: when we remembered Sion:

136:2. On the willows in the midst thereof we hung up our instruments.

136:3. For there they that led us into captivity required of us the words of songs. And they that carried us away, said: Sing ye to us a hymn of the songs of Sion.

136:4. How shall we sing the song of the Lord in a strange land?

136:5. If I forget thee, O Jerusalem, let my right hand be forgotten.

136:6. Let my tongue cleave to my jaws, if I do not remember thee: If I make not Jerusalem the beginning of my joy.

136:7. Remember, O Lord, the children of Edom, in the day of Jerusalem: Who say: Rase it, rase it, even to the foundation thereof.

136:8. O daughter of Babylon, miserable: blessed shall he be who shall repay thee thy payment which thou hast paid us.

136:9. Blessed be he that shall take and dash thy little ones against the rock.

Dash thy little ones, etc.... In the spiritual sense, we dash the little ones of Babylon against the rock, when we mortify our passions, and stifle the first motions of them, by a speedy recourse to the rock which is Christ.

Psalms Chapter 137
Confitebor tibi.

Thanksgiving to God for his benefits.

137:1. For David himself. I will praise thee, O Lord, with my whole heart: for thou hast heard the words of my mouth. I will sing praise to thee in the sight of the angels:

137:2. I will worship towards thy holy temple, and I will give glory to thy name. For thy mercy, and for thy truth: for thou hast magnified thy holy name above all.

137:3. In what day soever I shall call upon thee, hear me: thou shalt multiply strength in my soul.

137:4. May all the kings of the earth give glory to thee: for they have heard all the words of thy mouth.

137:5. And let them sing in the ways of the Lord: for great is the glory of the Lord.

137:6. For the Lord is high, and looketh on the low: and the high he knoweth afar off.

137:7. If I shall walk in the midst of tribulation, thou wilt quicken me: and thou hast stretched forth thy hand against the wrath of my enemies: and thy right hand hath saved me.

137:8. The Lord will repay for me: thy mercy, O Lord, endureth for ever: O despise not the works of thy hands.

Psalms Chapter 138
Domine, probasti.

God’s special providence over his servants.

138:1. Unto the end, a psalm of David. Lord, thou hast proved me, and known me:

138:2. Thou hast known my sitting down, and my rising up.

138:3. Thou hast understood my thoughts afar off: my path and my line thou hast searched out.

138:4. And thou hast foreseen all my ways: for there is no speech in my tongue.

There is no speech, etc.... Viz., unknown to thee: or when there is no speech in my tongue; yet my whole interior and my most secret thoughts are known to thee.

138:5. Behold, O Lord, thou hast known all things, the last and those of old: thou hast formed me, and hast laid thy hand upon me.

138:6. Thy knowledge is become wonderful to me: it is high, and I cannot reach to it.

138:7. Whither shall I go from thy spirit? or whither shall I flee from thy face?

138:8. If I ascend into heaven, thou art there: if I descend into hell, thou art present.

138:9. If I take my wings early in the morning, and dwell in the uttermost parts of the sea:

138:10. Even there also shall thy hand lead me: and thy right hand shall hold me.

138:11. And I said: Perhaps darkness shall cover me: and night shall be my light in my pleasures.

138:12. But darkness shall not be dark to thee, and night shall be light all the day: the darkness thereof, and the light thereof are alike to thee.

138:13. For thou hast possessed my reins: thou hast protected me from my mother’s womb.

138:14. I will praise thee, for thou art fearfully magnified: wonderful are thy works, and my soul knoweth right well.

138:15. My bone is not hidden from thee, which thou hast made in secret: and my substance in the lower parts of the earth.

138:16. Thy eyes did see my imperfect being, and in thy book all shall be written: days shall be formed, and no one in them.

138:17. But to me thy friends, O God, are made exceedingly honourable: their principality is exceedingly strengthened.

138:18. I will number them, and they shall be multiplied above the sand, I rose up and am still with thee.

138:19. If thou wilt kill the wicked, O God: ye men of blood, depart from me:

138:20. Because you say in thought: They shall receive thy cities in vain.

Because you say in thought, etc.... Depart from me, you wicked, who plot against the servants of God, and think to cast them out of the cities of their habitation; as if they have received them in vain, and to no purpose.

138:21. Have I not hated them, O Lord, that hated thee: and pined away because of thy enemies?

138:22. I have hated them with a perfect hatred: and they are become enemies to me.

I have hated them.... Not with an hatred of malice, but a zeal for the observance of God’s commandments; which he saw were despised by the wicked, who are to be considered enemies to God.

138:23. Prove me, O God, and know my heart: examine me, and know my paths.

138:24. And see if there be in me the way of iniquity: and lead me in the eternal way.

Psalms Chapter 139
Eripe me, Domine.

A prayer to be delivered from the wicked.

139:1. Unto the end, a psalm of David.

139:2. Deliver me, O Lord, from the evil man: rescue me from the unjust man.

139:3. Who have devised iniquities in their hearts: all the day long they designed battles.

139:4. They have sharpened their tongues like a serpent: the venom of asps is under their lips.

139:5. Keep me, O Lord, from the hand of the wicked: and from unjust men deliver me. Who have proposed to supplant my steps:

139:6. The proud have hidden a net for me. And they have stretched out cords for a snare: they have laid for me a stumblingblock by the wayside.

139:7. I said to the Lord: Thou art my God: hear, O Lord, the voice of my supplication.

139:8. O Lord, Lord, the strength of my salvation: thou hast overshadowed my head in the day of battle.

139:9. Give me not up, O Lord, from my desire to the wicked: they have plotted against me; do not thou forsake me, lest they should triumph.

139:10. The head of them compassing me about: the labour of their lips shall overwhelm them.

139:11. Burning coals shall fall upon them; thou wilt cast them down into the fire: in miseries they shall not be able to stand.

139:12. A man full of tongue shall not be established in the earth: evil shall catch the unjust man unto destruction.

139:13. I know that the Lord will do justice to the needy, and will revenge the poor.

139:14. But as for the just, they shall give glory to thy name: and the upright shall dwell with thy countenance.

Psalms Chapter 140
Domine, clamavi.

A prayer against sinful words, and deceitful flatterers.

A psalm of David.

140:1. I have cried to thee, O Lord, hear me: hearken to my voice, when I cry to thee.

140:2. Let my prayer be directed as incense in thy sight; the lifting up of my hands, as evening sacrifice.

140:3. Set a watch, O Lord, before my mouth: and a door round about my lips.

140:4. Incline not my heart to evil words; to make excuses in sins. With men that work iniquity: and I will not communicate with the choicest of them.

140:5. The just man shall correct me in mercy, and shall reprove me: but let not the oil of the sinner fatten my head. For my prayer shall still be against the things with which they are well pleased:

Let not the oil of the sinner, etc.... That is, the flattery, or deceitful praise.—Ibid. For my prayer, etc.... So far from coveting their praises, who are never well pleased but with things that are evil; I shall continually pray to be preserved from such things as they are delighted with.

140:6. Their judges falling upon the rock have been swallowed up. They shall hear my words, for they have prevailed:

Their judges, etc.... Their rulers, or chiefs, quickly vanish and perish, like ships dashed against the rocks, and swallowed up by the waves. Let them then hear my words, for they are powerful and will prevail; or, as it is in the Hebrew, for they are sweet.

140:7. As when the thickness of the earth is broken up upon the ground: Our bones are scattered by the side of hell.

140:8. But to thee, O Lord, Lord, are my eyes: in thee have I put my trust, take not away my soul.

140:9. Keep me from the snare, which they have laid for me, and from the stumblingblocks of them that work iniquity.

140:10. The wicked shall fall in his net: I am alone until I pass.

I am alone, etc.... Singularly protected by the Almighty, until I pass all their nets and snares.

Psalms Chapter 141
Voce mea.

A prayer of David in extremity of danger.

141:1. Of understanding for David, A prayer when he was in the cave. [1 Kings 24.]

141:2. I cried to the Lord with my voice: with my voice I made supplication to the Lord.

141:3. In his sight I pour out my prayer, and before him I declare my trouble:

141:4. When my spirit failed me, then thou knewest my paths. In this way wherein I walked, they have hidden a snare for me.

141:5. I looked on my right hand, and beheld, and there was no one that would know me. Flight hath failed me: and there is no one that hath regard to my soul.

141:6. I cried to thee, O Lord: I said: Thou art my hope, my portion in the land of the living.

141:7. Attend to my supplication: for I am brought very low. Deliver me from my persecutors; for they are stronger than I.

141:8. Bring my soul out of prison, that I may praise thy name: the just wait for me, until thou reward me.

Psalms Chapter 142
Domine, exaudi.

The psalmist in tribulation calleth upon God for his delivery. The seventh penitential psalm.

142:1. A psalm of David, when his son Absalom pursued him. [2 Kings 17.] Hear, O Lord, my prayer: give ear to my supplication in thy truth: hear me in thy justice.

142:2. And enter not into judgment with thy servant: for in thy sight no man living shall be justified.

142:3. For the enemy hath persecuted my soul: he hath brought down my life to the earth. He hath made me to dwell in darkness as those that have been dead of old:

142:4. And my spirit is in anguish within me: my heart within me is troubled.

142:5. I remembered the days of old, I meditated on all thy works: I meditated upon the works of thy hands.

142:6. I stretched forth my hands to thee: my soul is as earth without water unto thee.

142:7. Hear me speedily, O Lord: my spirit hath fainted away. Turn not away thy face from me, lest I be like unto them that go down into the pit.

142:8. Cause me to hear thy mercy in the morning; for in thee have I hoped. Make the way known to me, wherein I should walk: for I have lifted up my soul to thee.

142:9. Deliver me from my enemies, O Lord, to thee have I fled:

142:10. Teach me to do thy will, for thou art my God. Thy good spirit shall lead me into the right land:

142:11. for thy name’s sake, O Lord, thou wilt quicken me in thy justice. Thou wilt bring my soul out of trouble:

142:12. And in thy mercy thou wilt destroy my enemies. And thou wilt cut off all them that afflict my soul: for I am thy servant.

Psalms Chapter 143
Benedictus Dominus.

The prophet praiseth God, and prayeth to be delivered from his enemies. No worldly happiness is to be compared with that of serving God.

A psalm of David against Goliath.

143:1. Blessed be the Lord my God, who teacheth my hands to fight, and my fingers to war.

143:2. My mercy, and my refuge: my support, and my deliverer: My protector, and I have hoped in him: who subdueth my people under me.

143:3. Lord, what is man, that thou art made known to him? or the son of man, that thou makest account of him?

143:4. Man is like to vanity: his days pass away like a shadow.

143:5. Lord, bow down thy heavens and descend: touch the mountains, and they shall smoke.

143:6. Send forth lightning, and thou shalt scatter them: shoot out thy arrows, and thou shalt trouble them.

143:7. Put forth thy hand from on high, take me out, and deliver me from many waters: from the hand of strange children:

143:8. Whose mouth hath spoken vanity: and their right hand is the right hand of iniquity.

143:9. To thee, O God, I will sing a new canticle: on the psaltery and an instrument of ten strings I will sing praises to thee.

143:10. Who givest salvation to kings: who hast redeemed thy servant David from the malicious sword:

143:11. Deliver me, And rescue me out of the hand of strange children; whose mouth hath spoken vanity: and their right hand is the right hand of iniquity:

143:12. Whose sons are as new plants in their youth: Their daughters decked out, adorned round about after the similitude of a temple:

143:13. Their storehouses full, flowing out of this into that. Their sheep fruitful in young, abounding in their goings forth:

143:14. Their oxen fat. There is no breach of wall, nor passage, nor crying out in their streets.

143:15. They have called the people happy, that hath these things: but happy is that people whose God is the Lord.

Psalms Chapter 144
Exaltabo te, Deus.

A psalm of praise, to the infinite majesty of God.

144:1. Praise, for David himself. I will extol thee, O God my king: and I will bless thy name for ever; yea, for ever and ever.

144:2. Every day will I bless thee: and I will praise thy name for ever; yea, for ever and ever.

144:3. Great is the Lord, and greatly to be praised: and of his greatness there is no end.

144:4. Generation and generation shall praise thy works: and they shall declare thy power.

144:5. They shall speak of the magnificence of the glory of thy holiness: and shall tell thy wondrous works.

144:6. And they shall speak of the might of thy terrible acts: and shall declare thy greatness.

144:7. They shall publish the memory of the abundance of thy sweetness: and shall rejoice in thy justice.

144:8. The Lord is gracious and merciful: patient and plenteous in mercy.

144:9. The Lord is sweet to all: and his tender mercies are over all his works.

144:10. Let all thy works, O lord, praise thee: and let thy saints bless thee.

144:11. They shall speak of the glory of thy kingdom: and shall tell of thy power:

144:12. To make thy might known to the sons of men: and the glory of the magnificence of thy kingdom.

144:13. Thy kingdom is a kingdom of all ages: and thy dominion endureth throughout all generations. The Lord is faithful in all his words: and holy in all his works.

144:14. The Lord lifteth up all that fall: and setteth up all that are cast down.

144:15. The eyes of all hope in thee, O Lord: and thou givest them meat in due season.

144:16. Thou openest thy hand, and fillest with blessing every living creature.

144:17. The Lord is just in all his ways: and holy in all his works.

144:18. The Lord is nigh unto all them that call upon him: to all that call upon him in truth.

144:19. He will do the will of them that fear him: and he will hear their prayer, and save them.

144:20. The Lord keepeth all them that love him; but all the wicked he will destroy.

144:21. My mouth shall speak the praise of the Lord: and let all flesh bless his holy name forever; yea, for ever and ever.

Psalms Chapter 145
Lauda, anima.

We are not to trust in men, but in God alone.

145:1. Alleluia, of Aggeus and Zacharias.

145:2. Praise the Lord, O my soul, in my life I will praise the Lord: I will sing to my God as long as I shall be. Put not your trust in princes:

145:3. In the children of men, in whom there is no salvation.

145:4. His spirit shall go forth, and he shall return into his earth: in that day all their thoughts shall perish.

145:5. Blessed is he who hath the God of Jacob for his helper, whose hope is in the Lord his God:

145:6. Who made heaven and earth, the sea, and all things that are in them.

145:7. Who keepeth truth for ever: who executeth judgment for them that suffer wrong: who giveth food to the hungry. The Lord looseth them that are fettered:

145:8. The Lord enlighteneth the blind. The Lord lifteth up them that are cast down: the Lord loveth the just.

145:9. The Lord keepeth the strangers, he will support the fatherless and the widow: and the ways of sinners he will destroy.

145:10. The Lord shall reign for ever: thy God, O Sion, unto generation and generation.

Psalms Chapter 146
Laudate Dominum.

An exhortation to praise God for his benefits.

146:1. Alleluia. Praise ye the Lord, because psalm is good: to our God be joyful and comely praise.

146:2. The Lord buildeth up Jerusalem: he will gather together the dispersed of Israel.

146:3. Who healeth the broken of heart, and bindeth up their bruises.

146:4. Who telleth the number of the stars: and calleth them all by their names.

146:5. Great is our Lord, and great is his power: and of his wisdom there is no number.

146:6. The Lord lifteth up the meek, and bringeth the wicked down even to the ground.

146:7. Sing ye to the Lord with praise: sing to our God upon the harp.

146:8. Who covereth the heaven with clouds, and prepareth rain for the earth. Who maketh grass to grow on the mountains, and herbs for the service of men.

146:9. Who giveth to beasts their food: and to the young ravens that call upon him.

146:10. He shall not delight in the strength of the horse: nor take pleasure in the legs of a man.

146:11. The Lord taketh pleasure in them that fear him: and in them that hope in his mercy.

Psalms Chapter 147
Lauda, Jerusalem.

The church is called upon to praise God for his peculiar graces and favours to his people. In the Hebrew, this psalm is joined to the foregoing.

147:12. Alleluia. Praise the Lord, O Jerusalem: praise thy God, O Sion.

147:13. Because he hath strengthened the bolts of thy gates, he hath blessed thy children within thee.

147:14. Who hath placed peace in thy borders: and filleth thee with the fat of corn.

147:15. Who sendeth forth his speech to the earth: his word runneth swiftly.

147:16. Who giveth snow like wool: scattereth mists like ashes.

147:17. He sendeth his crystal like morsels: who shall stand before the face of his cold?

He sendeth his crystal.... That is, his ice. Some understand it of hail, which is, as it were, ice, divided into particles or morsels.

147:18. He shall send out his word, and shall melt them: his wind shall blow, and the waters shall run.

147:19. Who declareth his word to Jacob: his justices and his judgments to Israel.

147:20. He hath not done in like manner to every nation: and his judgments he hath not made manifest to them. Alleluia.

Psalms Chapter 148
Laudate Dominum de caelis.

All creatures are invited to praise their Creator.

148:1. Alleluia. Praise ye the Lord from the heavens: praise ye him in the high places.

148:2. Praise ye him, all his angels, praise ye him, all his hosts.

148:3. Praise ye him, O sun and moon: praise him, all ye stars and light.

148:4. Praise him, ye heavens of heavens: and let all the waters that are above the heavens

148:5. Praise the name of the Lord. For he spoke, and they were made: he commanded, and they were created.

148:6. He hath established them for ever, and for ages of ages: he hath made a decree, and it shall not pass away.

148:7. Praise the Lord from the earth, ye dragons, and all ye deeps:

148:8. Fire, hail, snow, ice, stormy winds, which fulfil his word:

148:9. Mountains and all hills, fruitful trees and all cedars:

148:10. Beasts and all cattle: serpents and feathered fowls:

148:11. Kings of the earth and all people: princes and all judges of the earth:

148:12. Young men and maidens: let the old with the younger, praise the name of the Lord:

148:13. For his name alone is exalted.

148:14. The praise of him is above heaven and earth: and he hath exalted the horn of his people. A hymn to all his saints to the children of Israel, a people approaching to him. Alleluia.

Psalms Chapter 149
Cantate Domino.

The church is particularly bound to praise God.

149:1. Alleluia. Sing ye to the Lord a new canticle: let his praise be in the church of the saints.

149:2. Let Israel rejoice in him that made him: and let the children of Sion be joyful in their king.

149:3. Let them praise his name in choir: let them sing to him with the timbrel and the psaltery.

149:4. For the Lord is well pleased with his people: and he will exalt the meek unto salvation.

149:5. The saints shall rejoice in glory: they shall be joyful in their beds.

149:6. The high praises of God shall be in their mouth: and two-edged swords in their hands:

149:7. To execute vengeance upon the nations, chastisements among the people:

149:8. To bind their kings with fetters, and their nobles with manacles of iron.

149:9. To execute upon them the judgment that is written: this glory is to all his saints. Alleluia.

Psalms Chapter 150
Laudate Dominum in sanctis.

An exhortation to praise God with all sorts of instruments.

150:1. Alleluia. Praise ye the Lord in his holy places: praise ye him in the firmament of his power.

150:2. Praise ye him for his mighty acts: praise ye him according to the multitude of his greatness.

150:3. Praise him with the sound of trumpet: praise him with psaltery and harp.

150:4. Praise him with timbrel and choir: praise him with strings and organs.

150:5. Praise him on high sounding cymbals: praise him on cymbals of joy: let every spirit praise the Lord. Alleluia.

`



store_Bible_books_sessionally();
/**Must stay at the end!! */
redirect_User_to_the_right_page();