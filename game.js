// 화면 전환 함수들
function showMainMenu() {
document.getElementById(‘mainScreen’).classList.remove(‘hidden’);
document.getElementById(‘countryMenu’).classList.add(‘hidden’);
document.getElementById(‘capitalMenu’).classList.add(‘hidden’);
document.getElementById(‘gameScreen’).classList.add(‘hidden’);
}

function showCountryMenu() {
document.getElementById(‘mainScreen’).classList.add(‘hidden’);
document.getElementById(‘countryMenu’).classList.remove(‘hidden’);
document.getElementById(‘capitalMenu’).classList.add(‘hidden’);
document.getElementById(‘gameScreen’).classList.add(‘hidden’);
}

function showCapitalMenu() {
document.getElementById(‘mainScreen’).classList.add(‘hidden’);
document.getElementById(‘countryMenu’).classList.add(‘hidden’);
document.getElementById(‘capitalMenu’).classList.remove(‘hidden’);
document.getElementById(‘gameScreen’).classList.add(‘hidden’);
}

function showGameScreen() {
document.getElementById(‘mainScreen’).classList.add(‘hidden’);
document.getElementById(‘countryMenu’).classList.add(‘hidden’);
document.getElementById(‘capitalMenu’).classList.add(‘hidden’);
document.getElementById(‘gameScreen’).classList.remove(‘hidden’);
}

function startGame(mode) {
showGameScreen();
if (window.flagQuizGame) {
window.flagQuizGame.startNewGame(mode);
}
}

// 게임 상태 관리 클래스
class FlagQuizGame {
constructor() {
this.currentMode = ‘flag-to-country’;
this.currentQuestion = 0;
this.totalQuestions = 10;
this.score = 0;
this.questions = [];
this.currentQuestionData = null;
this.answered = false;

```
    this.setupEventListeners();
}

// 이벤트 리스너 설정
setupEventListeners() {
    // 다음 문제 버튼
    document.getElementById('nextBtn').addEventListener('click', () => {
        this.nextQuestion();
    });

    // 다시 시작 버튼
    document.getElementById('restartBtn').addEventListener('click', () => {
        this.restartGame();
    });
}

// 새 게임 시작
startNewGame(mode) {
    this.currentMode = mode;
    this.currentQuestion = 0;
    this.score = 0;
    this.answered = false;
    
    // UI 초기화
    document.getElementById('finalScore').classList.add('hidden');
    document.querySelector('.quiz-container').classList.remove('hidden');
    
    // 문제 생성 및 시작
    this.generateQuestions();
    this.displayQuestion();
}

// 문제 생성
generateQuestions() {
    this.questions = [];
    const usedCountries = new Set();

    for (let i = 0; i < this.totalQuestions; i++) {
        let correctAnswer;
        
        // 이미 사용된 국가가 아닌 국가 선택
        do {
            correctAnswer = CountryUtils.getRandomCountry();
        } while (usedCountries.has(correctAnswer.code));
        
        usedCountries.add(correctAnswer.code);

        // 모드에 따른 문제 생성
        const question = this.createQuestion(correctAnswer);
        this.questions.push(question);
    }
}

// 모드별 문제 생성
createQuestion(correctAnswer) {
    const question = {
        country: correctAnswer,
        mode: this.currentMode,
        options: []
    };

    switch (this.currentMode) {
        case 'flag-to-country':
            question.questionText = '이 국기는 어느 나라의 국기일까요?';
            question.correctAnswer = correctAnswer.name;
            question.options = this.generateCountryOptions(correctAnswer);
            question.showFlag = true;
            question.showCountryName = false;
            question.showCapitalName = false;
            break;
            
        case 'country-to-flag':
            question.questionText = `${correctAnswer.name}의 국기는 어느 것일까요?`;
            question.correctAnswer = correctAnswer.code;
            question.options = this.generateFlagOptions(correctAnswer);
            question.showFlag = false;
            question.showCountryName = true;
            question.showCapitalName = false;
            break;
            
        case 'capital-easy':
            question.questionText = `${correctAnswer.name}의 수도는 어디일까요?`;
            question.correctAnswer = correctAnswer.capital;
            question.options = this.generateCapitalOptions(correctAnswer);
            question.showFlag = true;
            question.showCountryName = true;
            question.showCapitalName = false;
            break;
            
        case 'capital-hard':
            question.questionText = '이 국기의 수도는 어디일까요?';
            question.correctAnswer = correctAnswer.capital;
            question.options = this.generateCapitalOptions(correctAnswer);
            question.showFlag = true;
            question.showCountryName = false;
            question.showCapitalName = false;
            break;

        case 'capital-to-flag':
            question.questionText = `${correctAnswer.capital}은(는) 어느 나라의 수도일까요?`;
            question.correctAnswer = correctAnswer.code;
            question.options = this.generateFlagOptions(correctAnswer);
            question.showFlag = false;
            question.showCountryName = false;
            question.showCapitalName = true;
            break;
    }

    return question;
}

// 국가명 선택지 생성
generateCountryOptions(correctCountry) {
    const options = [correctCountry.name];
    const wrongCountries = CountryUtils.getRandomCountries(3, correctCountry);
    
    wrongCountries.forEach(country => {
        options.push(country.name);
    });

    return this.shuffleArray(options);
}

// 국기 선택지 생성 (코드와 함께)
generateFlagOptions(correctCountry) {
    const options = [{
        code: correctCountry.code,
        name: correctCountry.name,
        flag: correctCountry.flag
    }];
    
    const wrongCountries = CountryUtils.getRandomCountries(3, correctCountry);
    wrongCountries.forEach(country => {
        options.push({
            code: country.code,
            name: country.name,
            flag: country.flag
        });
    });

    return this.shuffleArray(options);
}

// 수도 선택지 생성
generateCapitalOptions(correctCountry) {
    const options = [correctCountry.capital];
    const wrongCountries = CountryUtils.getRandomCountries(3, correctCountry);
    
    wrongCountries.forEach(country => {
        options.push(country.capital);
    });

    return this.shuffleArray(options);
}

// 배열 섞기
shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 문제 표시
displayQuestion() {
    if (this.currentQuestion >= this.totalQuestions) {
        this.showFinalScore();
        return;
    }

    this.currentQuestionData = this.questions[this.currentQuestion];
    this.answered = false;

    // UI 업데이트
    this.updateQuestionInfo();
    this.displayContent();
    this.displayQuestionText();
    this.displayOptions();
    this.hideResult();
}

// 문제 정보 업데이트
updateQuestionInfo() {
    document.getElementById('score').textContent = `점수: ${this.score}/${this.currentQuestion}`;
    document.getElementById('questionNumber').textContent = 
        `문제 ${this.currentQuestion + 1}/${this.totalQuestions}`;
}

// 컨텐츠 표시 (국기, 국가명, 수도명)
displayContent() {
    const flagDisplay = document.getElementById('flagDisplay');
    const countryNameDiv = document.getElementById('countryName');
    const capitalNameDiv = document.getElementById('capitalName');
    const country = this.currentQuestionData.country;

    // 국기 표시/숨김
    if (this.currentQuestionData.showFlag) {
        flagDisplay.innerHTML = `
            <img src="${CountryUtils.getFlagImageUrl(country.code)}" 
                 alt="${country.name} 국기" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <div class="flag-emoji" style="display:none;">${country.flag}</div>
        `;
        flagDisplay.classList.remove('hidden');
    } else {
        flagDisplay.classList.add('hidden');
    }

    // 국가명 표시/숨김
    if (this.currentQuestionData.showCountryName) {
        countryNameDiv.textContent = country.name;
        countryNameDiv.classList.remove('hidden');
    } else {
        countryNameDiv.classList.add('hidden');
    }

    // 수도명 표시/숨김  
    if (this.currentQuestionData.showCapitalName) {
        capitalNameDiv.textContent = country.capital;
        capitalNameDiv.classList.remove('hidden');
    } else {
        capitalNameDiv.classList.add('hidden');
    }
}

// 문제 텍스트 표시
displayQuestionText() {
    document.getElementById('questionText').textContent = 
        this.currentQuestionData.questionText;
}

// 선택지 표시
displayOptions() {
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    this.currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        
        // 모드에 따라 다른 형태로 표시
        if (this.currentMode === 'country-to-flag' || this.currentMode === 'capital-to-flag') {
            // 국기 선택지
            button.innerHTML = `
                <img src="${CountryUtils.getFlagImageUrl(option.code)}" 
                     alt="${option.name} 국기" 
                     style="width: 60px; height: 40px; object-fit: cover; border-radius: 5px; margin-bottom: 8px;"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display:none; font-size: 30px;">${option.flag}</div>
                <div style="font-size: 14px; margin-top: 5px;">${option.name}</div>
            `;
            button.addEventListener('click', () => this.selectOption(option.code, button));
        } else {
            // 텍스트 선택지
            button.textContent = option;
            button.addEventListener('click', () => this.selectOption(option, button));
        }
        
        optionsContainer.appendChild(button);
    });
}

// 선택지 선택
selectOption(selectedOption, buttonElement) {
    if (this.answered) return;

    this.answered = true;
    const isCorrect = selectedOption === this.currentQuestionData.correctAnswer;

    // 모든 버튼 비활성화
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.add('disabled');
    });

    // 정답/오답 표시
    if (this.currentMode === 'country-to-flag' || this.currentMode === 'capital-to-flag') {
        // 국기 선택지의 경우
        document.querySelectorAll('.option-btn').forEach(btn => {
            const optionData = this.currentQuestionData.options.find(opt => 
                btn.innerHTML.includes(opt.name)
            );
            if (optionData && optionData.code === this.currentQuestionData.correctAnswer) {
                btn.classList.add('correct');
            } else if (btn === buttonElement && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    } else {
        // 텍스트 선택지의 경우
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.textContent === this.currentQuestionData.correctAnswer) {
                btn.classList.add('correct');
            } else if (btn === buttonElement && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    }

    // 결과 표시
    this.showResult(isCorrect);

    // 점수 업데이트
    if (isCorrect) {
        this.score++;
    }

    // 다음 문제 버튼 표시
    document.getElementById('nextBtn').classList.remove('hidden');
}

// 결과 표시
showResult(isCorrect) {
    const resultDiv = document.getElementById('result');
    const country = this.currentQuestionData.country;
    
    let correctAnswerText = '';
    let additionalInfo = '';

    // 모드에 따른 정답 표시
    switch (this.currentMode) {
        case 'flag-to-country':
            correctAnswerText = country.name;
            additionalInfo = `수도: ${country.capital}`;
            break;
        case 'country-to-flag':
            correctAnswerText = `${country.name}의 국기`;
            additionalInfo = `수도: ${country.capital}`;
            break;
        case 'capital-easy':
        case 'capital-hard':
            correctAnswerText = country.capital;
            additionalInfo = `국가: ${country.name}`;
            break;
        case 'capital-to-flag':
            correctAnswerText = `${country.name}의 국기`;
            additionalInfo = `${country.capital}의 나라`;
            break;
    }
    
    if (isCorrect) {
        resultDiv.className = 'result correct';
        resultDiv.innerHTML = `
            <strong>정답입니다! 🎉</strong>
            <br>${additionalInfo}
        `;
    } else {
        resultDiv.className = 'result incorrect';
        resultDiv.innerHTML = `
            <strong>틀렸습니다. 😞</strong>
            <br>정답: <strong>${correctAnswerText}</strong>
            <br>${additionalInfo}
        `;
    }
    
    resultDiv.classList.remove('hidden');
}

// 결과 숨기기
hideResult() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
}

// 다음 문제
nextQuestion() {
    this.currentQuestion++;
    this.displayQuestion();
}

// 최종 점수 표시
showFinalScore() {
    document.querySelector('.quiz-container').classList.add('hidden');
    document.getElementById('finalScore').classList.remove('hidden');
    
    const percentage = Math.round((this.score / this.totalQuestions) * 100);
    document.getElementById('finalScoreText').textContent = 
        `${this.totalQuestions}문제 중 ${this.score}문제 정답! (${percentage}%)`;

    // 점수에 따른 메시지
    const messageDiv = document.getElementById('scoreMessage');
    let message = '';
    let emoji = '';

    if (percentage >= 90) {
        message = '완벽해요! 국기 마스터시네요! 🏆';
        emoji = '🏆';
    } else if (percentage >= 70) {
        message = '훌륭해요! 뛰어난 지리 지식이에요! 🎖️';
        emoji = '🎖️';
    } else if (percentage >= 50) {
        message = '나쁘지 않아요! 조금 더 연습하면 완벽할 거예요! 📚';
        emoji = '📚';
    } else {
        message = '더 열심히 공부해보세요! 다시 도전하면 분명 늘 거예요! 💪';
        emoji = '💪';
    }

    messageDiv.innerHTML = `
        <div style="font-size: 4rem; margin: 20px 0; animation: bounceIn 1s ease-out;">${emoji}</div>
        <div style="font-size: 1.3rem; color: #667eea; font-weight: bold;">${message}</div>
        <div style="margin-top: 15px; padding: 15px; background: rgba(102,126,234,0.1); border-radius: 15px; font-size: 1rem; color: #333;">
            총 ${CountryUtils.getTotalCount()}개국 중 ${this.totalQuestions}개국 도전 완료!
        </div>
    `;
}

// 게임 재시작
restartGame() {
    this.startNewGame(this.currentMode);
}
```

}

// 페이지 로드 시 초기화
document.addEventListener(‘DOMContentLoaded’, () => {
// 국가 데이터가 로드되었는지 확인
if (typeof countries !== ‘undefined’ && countries.length > 0) {
window.flagQuizGame = new FlagQuizGame();
console.log(`${CountryUtils.getTotalCount()}개국 데이터 로드 완료!`);

```
    // 통계 표시
    const stats = CountryUtils.getContinentStats();
    console.log('대륙별 국가 수:', stats);
} else {
    console.error('국가 데이터를 로드할 수 없습니다.');
    document.querySelector('.main-header p').textContent = '데이터 로딩 오류가 발생했습니다.';
}
```

});