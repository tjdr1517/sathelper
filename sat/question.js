document.write('<script src="script.js"></script>');

function init(){
}	
    var check = 0;
    var score_check = 0;
    var check_mix = 0;
	var index = 0;
	var num;
	var n;
	var explanation = "";
	random.exist.value = n-index;
    var Qkorean = new Array();
    var QMath = new Array();
    var QEnglish = new Array();
    var question = new Array();
    var worng_question = new Array();


function mix_num(){
        check = 0;
        worng_question = [];
        n = question.length;
		index = 0;
		check_mix += 1;
        var temp;
        var rnum;
		num ="";
		explanation = "";

        for(var i=0; i< question.length ; i++)
        {
            rnum = Math.floor(Math.random() *n);
            temp = question[i];
            question[i] = question[rnum];
            question[rnum] = temp;
        }
		random.now_pick.value = num;
		random.explanation.value = explanation;
    	random.exist.value = n-index;
}
	
function pick() {
	if (check_mix == 0) {
		return;
	}
    
	if (index >= n){
        if(score_check != 0){
            alert("Please refresh the page.")
            return;
        }
        
		alert("You've solved all the problems.\nQuestions has been automatic score.");
        
    if(check!=0){
        score_check ++;
        index --;
        console.log(index);
        if(random.input_answer.value != question[index].answer){
            worng_question.push(question[index]);
        }
        else{
        }
        
    question = worng_question;
    document.getElementsByClassName("inline3")[0].style.display = "inline-block";
    document.getElementsByClassName("input_As")[0].style.display = "none";
    document.getElementsByClassName("Answer")[0].style.display = "inline-block";
    }
        
        mix_num();
        pick();
		return;
}
    
	num = question[index];
    aswer = question[index].answer;
	explanation = question[index].explanation;
	random.now_pick.value = num.contents; 
    console.log(question[index].number);  
    
	random.explanation.value = "";
	random.answer.value = "";
    
    if(question[index].image == "none"){
    document.getElementsByClassName("inline2")[0].style.display = "none";
       }
    
    else{
    var img_paragraph = document.getElementById("paragraph");
    img_paragraph.src=question[index].image;
    document.getElementsByClassName("inline2")[0].style.display = "inline-block";
    }
    
    
    if(check!=0){
        
        if(index !=0){
        if(random.input_answer.value != question[index-1].answer){
            worng_question.push(question[index-1]);
        }
        }
        
        }
    console.log(worng_question);
    index += 1;
	random.exist.value = n-index; 
    check ++;
}

function show_explanation(){
	random.explanation.value = explanation;
    random.answer.value = aswer;
}

function test() {
    <!-- Korean Question -->
    Qkorean = [];
    Qkorean.push({
        number : 1,
        detail : "Grammar",
        year : 2020,
        level : 3,
        image : 'paragraph/Korean1.PNG',
        contents : '밑줄 친 단어들의 의미를 고려하여 ㄱ의 예에 해당하는 것만을 <보기>에서 있는 대로 고른 것은? \n\n1.빛쟁이    2.빛쟁이, 금방 \n3.뒤, 돈      4.뒤, 금방, 돈      5.빛쟁이, 뒤, 금방',
        explanation : 'Minsus term puppy refers to "the one who lent money to others," while Young-hee term means "the loser." In other words, the meaning of the polynomial word "dwarf" is in a confrontational relationship with each other. Similarly, "gumbang," as Young-hee said, means "just a little before the time you are talking," while "gumbang," as Min-su says, means "a little after the time you are talking." In other words, the meaning of the polynomial "gold" is in conflict with each other.',
        answer : 2});
    Qkorean.push({
        number : 2,
        year : 2020,
        level : 2,
        detail : "Grammar",
        image : 'paragraph/Korean2.PNG',
        contents : '윗글을 참고하여 추론한 내용으로 적절하지 않은 것은? \n\n1.대부분의 아이들이 별의 의미 중 군인의 계급장이라는 의미 보다 천체의 일부라는 의미를 먼저 배우겠군.\n\n2.‘앉다’의 의미 중 ‘착석하다’의 의미로 쓰이는 빈도가 ‘요직에 앉다’처럼 ‘직위나 자리를 차지하다’의 의미로 쓰이는 빈도보다더 높겠군.\n\n3.‘결론에 이르다’와 ‘포기하기에는 아직 이르다’에서 ‘이르다’의의미들은 서로 관련성이 없으니, 이 두 의미는 중심 의미와주변 의미의 관계로 볼 수 없겠군.\n\n4.‘팽이를 돌리다’는 어법에 맞는데 ‘침이 생기다’라는 의미의‘돌다’는 ‘군침을 돌리다’로 쓰이지 않으니, ‘군침이 돌다’의 ‘돌다’는 주변 의미로 사용된 것이겠군.\n\n5.사람의 감각 기관을 뜻하는 ‘눈’의 의미가 ‘눈이 나빠져서 안경의도수를 올렸다’에서의 ‘눈’의 의미로 확장되었으니, ‘눈’의 확장된의미는 기존 의미보다 더 구체적이겠군',
        explanation : '① in accordance with paragraph 1, meaning around, the center is typically a time of language acquisition than fast. ‘stars’, ‘part of the heavenly bodies’ and The soldiers rank insignia’ would mean around the center because ① reasoning in a statement. ② in accordance with paragraph 1, the center is typically around hot than sense. ‘sit’ means the reasoning ② is possible because it was ‘seat oneself’ and ‘The position and place.’ would mean around a statement. A multisense word, according to paragraph 4, ③ the center of the meaning and relevance is with each other around. By the way ‘reach a conclusion’ ‘come’ and ‘Its still too soon to give up.’ ‘come’ of the semantic because there is no link between the two and the center.Can not be regarded as the relationship between the peripheral sense. The verb and with the meaning of ‘What about or in the range.’, the latter meaning of ‘ahead of the public and standards and fast.’.An adjective, this corresponds to the two words are homonyms. A multisense word, according to paragraph 2, ④ grammatical when used as around the restrictions it might happen. Sadong type ‘turn ones lips *’ is ‘turn’ written in ‘ones mouth waters’ over ‘turn’ compared to ‘spin a top and a top spins’ grammar is not possible constraints.With. Given this, ‘ones mouth waters’ ‘turn’ is used as around the inference is that possible.',
        answer : 2});
    
    Qkorean.push({
        number : 3,
        year : 2020,
        level : 4,
        detail : "Litterature",
        image : 'paragraph/Korean3.PNG',
        contents : '<보기>를 참고하여 윗글을 감상한 내용으로 적절하지 않은 것은?\n\n1.유세기 이야기와 유세형 이야기를 보니, 각각의 갈등이 한가문의 혼사를 중심으로 발생한다는 점에서 두 이야기가 서로 연결되어 있음을 알 수 있군.\n\n2.유세기의 혼사 문제에 선생과 승상이 관여한 것을 보니, 혼사를 둘러싼 갈등 해결이 가문 구성원들의 문제로 다루어짐을 알 수 있군.\n\n3.유세기가 혼사와 관련한 곤욕을 치른 것과 유세형이 공주를 멀리 한것을 보니, 가법과 인물의 성격 간의 대립이 갈등의 원인임을 알 수 있군.\n\n4.백공이 유세기를 사위 삼으려는 것과 천자가 유세형을 부마삼은 것을 보니, 혼사가 혼인 당사자 개인의 문제에 그치지 않음을 알 수 있군.\n\n5.유세기가 평생 첩을 두지 않고 소 소저와 해로했다는 것을 보니, 유세기를 둘러싼 혼사 갈등이 해소되며 이야기 하나가 마무리됨을 알 수 있군.',
        explanation : 'The reason why the campaign period was so difficult in relation to the marriage was that the teacher and the promotion were so unfair. He thought he had broken the family law by deciding to marry without simulated permission. But the actual campaign period didnt mean to break the rules, and the white lie caused a bad thing. Also, the reason why Yoo has stayed away from the princess is because he feels sorry for Jang. Therefore, the confrontation between the pseudonym and the characters character is not the cause of the conflict.',
        answer : 3});    
 
    
    <!-- Math Question -->    
    QMath = [];
    QMath.push({
        number : 1,
        year : 2020,
        level : 2,
        detail : "Vector",
        image : "none",
        contents : 'The number of integer a that causes the curve y=ax^2-2sin2x to have an inflection point.\n\n 1.4        2.5\n\n3.6         4.7     5.8',
        explanation : 'At y=2ax-4cos2x, y2=2a+8sin2x, y3=0, sin2x=-a/4\n\nSince the curve y=ax^2-2sin2x shall have an inflection point, the value of the integer a is -3, -2, -1, 0, 1, 2, 3.',
        answer : 4});
    
    QMath.push({
        number : 2,
        year : 2020,
        level : 1,
        detail : "Probability",
        image : 'paragraph/Math2.PNG',
        contents : 'There are 10 balls with the number 1, 20 balls with the number 2, and 30 balls with the number 3.Take one ball out of this pocket at random, check the number on the ball and put it back in. Lets say the probability variable Y is the sum of the 10 numbers that have been verified 10 times. The following is the procedure for calculating the mean E(Y) and variance V(Y) of the probability variable Y.\nWhat is the value of p+q+r when the corresponding number for (가), (나), and (다) above is p, q, and r respectively?\n\n1.31/6     2.11/2\n\n3.35/6      4.37/6        5.13/2',
        explanation : 'Exclusion Plot: Can the mean and variance of probability variables be obtained?\n\nAnswer solution: Since x^2=V(X)=1*1/6+4*1/3+9*1/2-49/9=9=5/9 in the probability distribution of the given population,\np=5/9, ~X is the sample mean obtained by random sampling of samples of size 10 in this population, so V(X)=10=5/9X1/10=1/1/1/18. That is, it is also true that V(Y)=V(V)=100V(~X)=V(~10~V)=100X1/189=50=50=50.',
        answer : 4});
    
    QMath.push({
        number : 3,
        year : 2020,
        level : 3,
        detail : "Geometry",
        image : "paragraph/Math3.PNG",
        contents : 'As shown in the figure, what is the value of a three-dimensional shape with a curved y=sqrt(e^x/e^x+1) and a section surrounded by x-axis, y-axis, and straight x=k, all square in planes perpendicular to the x-axis?\n\n1.ln11        2.ln13\n\n3.ln15       4.ln17      5.ln19',
        explanation : 'Exclusion chart: Can the volume of a three-dimensional shape be obtained using static particles?\n\nAnswer: If the volume of a given stereoscopic shape is left with integral(sqrte^x/e^x+1)^2dx = integral(e^x/e^x+1)dx e^x +1=t, when dt/dx=e^x is then x=2 and xk=e1k+1k=ee11n. Therefore, k=ln13.',
        answer : 2});
    
    <!-- English Question -->
    QEnglish = [];
    QEnglish.push({
        number : 1,
        year : 2019,
        level : 3,
        detail : "Grammar",
        image : "none",
        contents : 'Which of the following underlined parts of the passage is incorrect by word of mouth?\n\nSpeculations about the meaning and purpose of prehistoricart ① rely heavily on analogies drawn with modern-dayhunter-gatherer societies. Such primitive societies, ② as Steven Mithen emphasizes in The Prehistory of the Modern Mind, tend to view man and beast, animal and plant, organic and inorganic spheres, as participants in an integrated, animated totality. The dual expressions of this tendency are anthropomorphism (the practice of regarding animals as humans) and totemism (the practice of regarding humans as animals), both of ③ which spread through the visual art and the mythology of primitive cultures. Thus the natural world is conceptualized in terms of human social relations. When considered in this light, the visual preoccupation of early humans with the nonhuman creatures ④ inhabited their world becomes profoundly meaningful. In the practice of totemism, he has suggested, an unlettered humanity broods upon ⑤ itself and its place in nature.',
        explanation : 'The consideration of the meaning and purpose of prehistoric art depends much on the similarities drawn between modern hunting societies. As Steven Mithen emphasizes in The History of the Modern Mind, such primitive societies tend to regard the areas of humans and animals, animals and plants, and inanimate objects as participants in an integrated and living aggregate. The two things that this tendency is expressed are "humanization" (the practice of treating animals as human beings) and "totemism" (the practice of treating humans as animals), both of which are prevalent in the visual arts and myths of primitive culture. Thus, the natural world is conceptualized in terms of human social relationships. In this respect, the visual fixation of early humans on non-human life in their world becomes deeply significant. As anthropologist Claude Lévi-Strauss said, animals are not only good to eat but also good to think about for hunter-gatherers. In the practice of totem faith, illiterate human beings "think over themselves and their place in nature," he said.',
        answer : 4});
    
    QEnglish.push({
        number : 2,
        year : 2018,
        level : 3,
        detail : "Topic",
        image : "paragraph/English2.PNG",
        contents : 'What is the most appropriate title for the above passage?\n\n1."Hands-on" activities as a source of creativity\n\n2.Activity-Ordered Learning Enters Science Education!\n\n3.Figure Out What Studies Like Most in Science Class\n\n4.Joy and Learning: More Effective When Separated\n\n5.Turn "Minds-on" Learning On in Science Class',
        explanation : 'The consideration of the meaning and purpose of prehistoric art depends much on the similarities drawn between modern hunting societies. As Steven Mithen emphasizes in The History of the Modern Mind, such primitive societies tend to regard the areas of humans and animals, animals and plants, and inanimate objects as participants in an integrated and living aggregate. The two things that this tendency is expressed are "humanization" (the practice of treating animals as human beings) and "totemism" (the practice of treating humans as animals), both of which are prevalent in the visual arts and myths of primitive culture. Thus, the natural world is conceptualized in terms of human social relationships. In this respect, the visual fixation of early humans on non-human life in their world becomes deeply significant. As anthropologist Claude Lévi-Strauss said, animals are not only good to eat but also good to think about for hunter-gatherers. In the practice of totem faith, illiterate human beings "think over themselves and their place in nature," he said.',
        answer : 4});
    
        QEnglish.push({
        number : 2,
        year : 2018,
        level : 1,
        detail : "Blank",
        image : "none",
        contents : 'The role of science can sometimes be overstated, with itsadvocates slipping into scientism. Scientism is the view that the scientific description of reality is the only truth there is. With the advance of science, there has been a tendency to slip into scientism, and assume that any factual claim can be authenticated if and only if the term ‘scientific’ can correctly be ascribed to it. The consequence is that non-scientific approaches to reality ― and that can include all the arts, religion, and personal, emotional and value-laden ways of encountering the world ― may become labelled as merely subjective, and therefore of little ________ in terms of describing the way the world is. The philosophy of science seeks to avoid crude scientism and get a balanced view on what the scientific method can and cannot achieve.\n\n1.question      2.account\n\n3.controversy      4.variation     5.bias',
        explanation : 'The role of science can sometimes be exaggerated, and its advocates fall into scientific allotment. The view is that science-alliteracy is the only truth in which scientific technology exists. With the development of science, there has been a tendency to indulge in science-onlyism and assume that the term scientific can be considered to belong precisely to it, and only in such cases can any factual claim be truly substantiated. As a result, an unscientific approach to reality — but it can include all art, religion, and personal, emotional, and value-based approaches to the world. — It is only subjective and may therefore be classified as of little importance in terms of describing the way the world exists. Science philosophy tries to avoid clumsiness in science and to have a balanced view of what scientific methods can and cannot achieve.',
        answer : 2});

        make_question();
}




function make_question(){
    question = [];
    if(check_sub == "Korean"){
        question = Qkorean;
    }
    else if(check_sub == "Math"){
        question = QMath;
    }
    else if(check_sub == "English"){
        question = QEnglish;
    }


}
