// 动物表情数组
const animals = [
    { emoji: "🐱", name: "猫" },
    { emoji: "🐶", name: "狗" },
    { emoji: "🐰", name: "兔子" },
    { emoji: "🐻", name: "熊" },
    { emoji: "🐼", name: "熊猫" },
    { emoji: "🦁", name: "狮子" },
    { emoji: "🐨", name: "考拉" },
    { emoji: "🐯", name: "老虎" },
    { emoji: "🐵", name: "猴子" },
    { emoji: "🐸", name: "青蛙" },
    { emoji: "🦊", name: "狐狸" },
    { emoji: "🐮", name: "牛" },
    { emoji: "🐷", name: "猪" },
    { emoji: "🦓", name: "斑马" },
    { emoji: "🦒", name: "长颈鹿" },
    { emoji: "🐘", name: "大象" },
    { emoji: "🦛", name: "河马" },
    { emoji: "🦏", name: "犀牛" },
    { emoji: "🐪", name: "骆驼" },
    { emoji: "🦙", name: "羊驼" },
    { emoji: "🦘", name: "袋鼠" },
    { emoji: "🐺", name: "狼" },
    { emoji: "🦝", name: "浣熊" },
    { emoji: "🦡", name: "獾" },
    { emoji: "🦔", name: "刺猬" },
    { emoji: "🐿️", name: "松鼠" },
    { emoji: "🦫", name: "海狸" },
    { emoji: "🦦", name: "水獭" },
    { emoji: "🦨", name: "臭鼬" },
    { emoji: "🦥", name: "树懒" },
    { emoji: "🐁", name: "老鼠" },
    { emoji: "🐹", name: "仓鼠" },
    { emoji: "🐇", name: "兔子" },
    { emoji: "🦇", name: "蝙蝠" },
    { emoji: "🐒", name: "猴子" },
    { emoji: "🦍", name: "大猩猩" },
    { emoji: "🦧", name: "猩猩" },
    { emoji: "🐆", name: "豹子" },
    { emoji: "🐅", name: "虎" },
    { emoji: "🐊", name: "鳄鱼" },
    { emoji: "🦎", name: "蜥蜴" },
    { emoji: "🐢", name: "乌龟" },
    { emoji: "🐍", name: "蛇" },
    { emoji: "🐳", name: "鲸鱼" },
    { emoji: "🐬", name: "海豚" },
    { emoji: "🦭", name: "海豹" },
    { emoji: "🦈", name: "鲨鱼" },
    { emoji: "🐙", name: "章鱼" },
    { emoji: "🦑", name: "鱿鱼" },
    { emoji: "🦞", name: "龙虾" },
    { emoji: "🦀", name: "螃蟹" },
    { emoji: "🐠", name: "热带鱼" },
    { emoji: "🐟", name: "鱼" },
    { emoji: "🦢", name: "天鹅" },
    { emoji: "🦆", name: "鸭子" },
    { emoji: "🦉", name: "猫头鹰" },
    { emoji: "🦚", name: "孔雀" },
    { emoji: "🦜", name: "鹦鹉" },
    { emoji: "🐓", name: "公鸡" },
    { emoji: "🐧", name: "企鹅" },
    { emoji: "🕊️", name: "鸽子" },
    { emoji: "🦅", name: "老鹰" },
    { emoji: "🦩", name: "火烈鸟" },
    { emoji: "🦃", name: "火鸡" }
];

// 动物方向图形（用表情代替）
const animalDirections = [
    { emoji: "🐱", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "猫" },
    { emoji: "🐶", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "狗" },
    { emoji: "🐰", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "兔子" },
    { emoji: "🐻", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "熊" },
    { emoji: "🐼", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "熊猫" },
    { emoji: "🦁", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "狮子" },
    { emoji: "🦊", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "狐狸" },
    { emoji: "🐮", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "牛" },
    { emoji: "🐷", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "猪" },
    { emoji: "🦓", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "斑马" },
    { emoji: "🦒", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "长颈鹿" },
    { emoji: "🐘", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "大象" },
    { emoji: "🦛", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "河马" },
    { emoji: "🦏", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "犀牛" },
    { emoji: "🐪", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "骆驼" },
    { emoji: "🐺", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "狼" },
    { emoji: "🐵", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "猴子" },
    { emoji: "🦍", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "大猩猩" },
    { emoji: "🐆", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "豹子" },
    { emoji: "🐅", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "虎" },
    { emoji: "🦆", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "鸭子" },
    { emoji: "🐧", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "企鹅" },
    { emoji: "🦅", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "老鹰" },
    { emoji: "🐊", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "鳄鱼" },
    { emoji: "🐢", directions: ["⬆️", "⬇️", "⬅️", "➡️"], name: "乌龟" },
];

// 缺失部分测试
const missingParts = [
    { full: "🐱", name: "猫", parts: [
        { partial: "🐱 (缺耳朵)", missing: "耳朵" },
        { partial: "🐱 (缺尾巴)", missing: "尾巴" },
        { partial: "🐱 (缺牙齿)", missing: "牙齿" }
    ]},
    { full: "🐶", name: "狗", parts: [
        { partial: "🐶 (缺耳朵)", missing: "耳朵" },
        { partial: "🐶 (缺尾巴)", missing: "尾巴" },
        { partial: "🐶 (缺舌头)", missing: "舌头" }
    ]},
    { full: "🦁", name: "狮子", parts: [
        { partial: "🦁 (缺鬃毛)", missing: "鬃毛" },
        { partial: "🦁 (缺爪子)", missing: "爪子" },
        { partial: "🦁 (缺尾巴)", missing: "尾巴" }
    ]},
    { full: "🐰", name: "兔子", parts: [
        { partial: "🐰 (缺耳朵)", missing: "耳朵" },
        { partial: "🐰 (缺小牙)", missing: "小牙" },
        { partial: "🐰 (缺尾巴)", missing: "尾巴" }
    ]},
    { full: "🐘", name: "大象", parts: [
        { partial: "🐘 (缺鼻子)", missing: "鼻子" },
        { partial: "🐘 (缺耳朵)", missing: "耳朵" },
        { partial: "🐘 (缺象牙)", missing: "象牙" }
    ]},
    { full: "🦉", name: "猫头鹰", parts: [
        { partial: "🦉 (缺爪子)", missing: "爪子" },
        { partial: "🦉 (缺嘴)", missing: "嘴" },
        { partial: "🦉 (缺翅膀)", missing: "翅膀" }
    ]},
    { full: "🦒", name: "长颈鹿", parts: [
        { partial: "🦒 (缺脖子)", missing: "脖子" },
        { partial: "🦒 (缺角)", missing: "角" },
        { partial: "🦒 (缺耳朵)", missing: "耳朵" }
    ]},
    { full: "🐯", name: "老虎", parts: [
        { partial: "🐯 (缺条纹)", missing: "条纹" },
        { partial: "🐯 (缺爪子)", missing: "爪子" },
        { partial: "🐯 (缺尾巴)", missing: "尾巴" }
    ]},
    { full: "🐧", name: "企鹅", parts: [
        { partial: "🐧 (缺嘴)", missing: "嘴" },
        { partial: "🐧 (缺翅膀)", missing: "翅膀" },
        { partial: "🐧 (缺脚)", missing: "脚" }
    ]},
    { full: "🐸", name: "青蛙", parts: [
        { partial: "🐸 (缺眼睛)", missing: "眼睛" },
        { partial: "🐸 (缺腿)", missing: "腿" },
        { partial: "🐸 (缺舌头)", missing: "舌头" }
    ]}
];

// 当前测试类型
let currentTest = "";
// 当前问题索引
let currentQuestion = 0;
// 当前测试问题集
let questions = [];
// 正确答案
let correctAnswer = "";
// 当前大小级别
let currentSizeLevel = 0;
// 大小级别数组（单位：rem）
const sizeLevels = [8, 6, 4, 3, 2, 1.5, 1, 0.8];
// 成功回答的最小尺寸
let smallestSuccessSize = 8;

// 开始测试
function startTest(testType) {
    currentTest = testType;
    currentQuestion = 0;
    currentSizeLevel = 0;
    smallestSuccessSize = 8;
    
    // 隐藏欢迎屏幕，显示测试屏幕
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('test-screen').classList.add('active');
    
    // 准备测试问题
    prepareQuestions();
    
    // 显示第一个问题
    showQuestion();
}

// 准备测试问题
function prepareQuestions() {
    questions = [];
    
    switch (currentTest) {
        case 'animals':
            // 动物识别测试
            // 创建一个已使用动物的集合，确保不会在短时间内重复
            const usedAnimals = new Set();
            // 深拷贝动物数组，不修改原数组
            let availableAnimals = [...animals];
            
            for (let i = 0; i < sizeLevels.length; i++) {
                // 确保我们有足够多的动物可选
                if (availableAnimals.length < 4) {
                    // 如果动物不够，清空已使用集合并重置可用动物
                    usedAnimals.clear();
                    availableAnimals = [...animals];
                }
                
                // 从可用动物中随机选择
                const shuffledAnimals = shuffle(availableAnimals);
                const questionAnimals = shuffledAnimals.slice(0, 4);
                
                // 添加测试问题
                questions.push({
                    type: 'animals',
                    size: sizeLevels[i],
                    animal: questionAnimals[0],
                    options: questionAnimals
                });
                
                // 标记这些动物为已使用
                questionAnimals.forEach(animal => {
                    usedAnimals.add(animal.emoji);
                    // 从可用动物中移除
                    availableAnimals = availableAnimals.filter(a => !usedAnimals.has(a.emoji));
                });
            }
            break;
        case 'direction':
            // 动物朝向测试
            // 创建一个已使用动物的集合，确保不会在短时间内重复
            const usedDirectionAnimals = new Set();
            // 深拷贝动物数组，不修改原数组
            let availableDirectionAnimals = [...animalDirections];
            
            for (let i = 0; i < sizeLevels.length; i++) {
                // 确保我们有足够多的动物可选
                if (availableDirectionAnimals.length < 1) {
                    // 如果动物不够，清空已使用集合并重置可用动物
                    usedDirectionAnimals.clear();
                    availableDirectionAnimals = [...animalDirections];
                }
                
                // 随机选择动物
                const randomIndex = Math.floor(Math.random() * availableDirectionAnimals.length);
                const animal = availableDirectionAnimals[randomIndex];
                
                // 随机选择方向
                const directionIndex = Math.floor(Math.random() * animal.directions.length);
                const direction = animal.directions[directionIndex];
                
                // 添加测试问题
                questions.push({
                    type: 'direction',
                    size: sizeLevels[i],
                    animal: animal,
                    direction: direction
                });
                
                // 标记这个动物为已使用
                usedDirectionAnimals.add(animal.emoji);
                
                // 从可用动物中移除
                availableDirectionAnimals = availableDirectionAnimals.filter(a => !usedDirectionAnimals.has(a.emoji));
            }
            break;
        case 'missing':
            // 缺失部分测试
            // 创建一个已使用动物的集合，确保不会在短时间内重复
            const usedMissingAnimals = new Set();
            // 深拷贝动物数组，不修改原数组
            let availableMissingAnimals = [...missingParts];
            
            for (let i = 0; i < sizeLevels.length; i++) {
                // 确保我们有足够多的动物可选
                if (availableMissingAnimals.length < 1) {
                    // 如果动物不够，清空已使用集合并重置可用动物
                    usedMissingAnimals.clear();
                    availableMissingAnimals = [...missingParts];
                }
                
                // 随机选择动物
                const randomIndex = Math.floor(Math.random() * availableMissingAnimals.length);
                const animal = availableMissingAnimals[randomIndex];
                
                // 随机选择缺失部分
                const partIndex = Math.floor(Math.random() * animal.parts.length);
                const part = animal.parts[partIndex];
                
                // 添加测试问题
                questions.push({
                    type: 'missing',
                    size: sizeLevels[i],
                    full: animal.full,
                    animal: animal.name,
                    partial: part.partial,
                    missing: part.missing
                });
                
                // 标记这个动物为已使用
                usedMissingAnimals.add(animal.full);
                
                // 从可用动物中移除
                availableMissingAnimals = availableMissingAnimals.filter(a => !usedMissingAnimals.has(a.full));
            }
            break;
        case 'matching':
            // 配对游戏
            for (let i = 0; i < sizeLevels.length; i++) {
                const randomAnimals = shuffle([...animals]).slice(0, 4);
                questions.push({
                    type: 'matching',
                    size: sizeLevels[i],
                    animal: randomAnimals[0],
                    options: randomAnimals
                });
            }
            break;
        case 'differences':
            // 找不同游戏
            for (let i = 0; i < sizeLevels.length; i++) {
                const randomAnimals = shuffle([...animals]).slice(0, 4);
                questions.push({
                    type: 'differences',
                    size: sizeLevels[i],
                    differentAnimal: randomAnimals[0],
                    animals: randomAnimals
                });
            }
            break;
    }
}

// 显示当前问题
function showQuestion() {
    if (currentQuestion >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestion];
    const testContainer = document.getElementById('test-container');
    testContainer.innerHTML = '';
    
    let html = '';
    
    switch (question.type) {
        case 'animals':
            // 动物识别测试
            html = `
                <div class="animal-image" style="font-size: ${question.size}rem">
                    ${question.animal.emoji}
                </div>
                <p>这是什么动物？</p>
                <div class="option-container">
            `;
            
            const shuffledOptions = shuffle([...question.options]);
            shuffledOptions.forEach(animal => {
                html += `<button onclick="checkAnswer('${animal.name}')">${animal.name}</button>`;
            });
            
            html += `</div>`;
            correctAnswer = question.animal.name;
            break;
            
        case 'direction':
            // 动物朝向测试
            
            // 根据方向生成朝向动物
            let directionEmoji = '';
            const directions = ["上", "下", "左", "右"];
            const directionSymbols = ["⬆️", "⬇️", "⬅️", "➡️"];
            const correctIndex = directionSymbols.indexOf(question.direction);
            
            // 确定动物朝向的CSS类
            let directionClass = '';
            if (question.direction === "⬆️") {
                directionClass = 'animal-up';
            } else if (question.direction === "⬇️") {
                directionClass = 'animal-down';
            } else if (question.direction === "⬅️") {
                directionClass = 'animal-left';
            } else if (question.direction === "➡️") {
                directionClass = 'animal-right';
            }
            
            // 添加相应的方向箭头
            let directionArrow = '';
            if (question.direction === "⬆️") {
                directionArrow = '⬆️';
            } else if (question.direction === "⬇️") {
                directionArrow = '⬇️';
            } else if (question.direction === "⬅️") {
                directionArrow = '⬅️';
            } else if (question.direction === "➡️") {
                directionArrow = '➡️';
            }
            
            html = `
                <p>这个${question.animal.name}在看哪个方向？</p>
                <div class="animal-direction-container">
                    <div class="animal-image ${directionClass}" style="font-size: ${question.size}rem">
                        ${question.animal.emoji}
                        <span class="direction-arrow">${directionArrow}</span>
                    </div>
                </div>
                <div class="option-container">
            `;
            
            directions.forEach((dir, index) => {
                html += `<button onclick="checkAnswer('${dir}')">${dir}</button>`;
            });
            
            html += `</div>`;
            correctAnswer = directions[correctIndex];
            break;
            
        case 'missing':
            // 缺失部分测试
            html = `
                <p>这个${question.animal}缺少了什么部分？</p>
                <div class="animal-image" style="font-size: ${question.size}rem">
                    ${question.full}
                </div>
                <div class="missing-container">
                    <p>下面是缺失部分的动物：</p>
                    <div class="animal-image" style="font-size: ${question.size}rem; margin-top: 10px; color: #ff6b88;">
                        ${question.partial}
                    </div>
                </div>
                <div class="option-container">
            `;
            
            // 可能的缺失部分
            const allMissingOptions = [];
            
            // 收集所有可能的缺失部分
            missingParts.forEach(animal => {
                animal.parts.forEach(part => {
                    if (!allMissingOptions.includes(part.missing)) {
                        allMissingOptions.push(part.missing);
                    }
                });
            });
            
            // 生成选项，确保正确答案在其中
            const shuffledOptions = shuffle([...allMissingOptions]);
            let finalOptions = shuffledOptions.slice(0, 3);
            
            // 如果正确答案不在选项中，添加它
            if (!finalOptions.includes(question.missing)) {
                finalOptions.push(question.missing);
            }
            
            // 随机排序
            finalOptions = shuffle(finalOptions);
            
            finalOptions.forEach(part => {
                html += `<button onclick="checkAnswer('${part}')">${part}</button>`;
            });
            
            html += `</div>`;
            correctAnswer = question.missing;
            break;
            
        case 'matching':
            // 配对游戏
            const targetAnimal = question.animal;
            html = `
                <p>找出与下面相同的动物：</p>
                <div class="animal-image" style="font-size: ${question.size}rem">
                    ${targetAnimal.emoji}
                </div>
                <div class="animal-grid">
            `;
            
            const shuffledMatchOptions = shuffle([...question.options]);
            shuffledMatchOptions.forEach(animal => {
                html += `
                    <div class="animal-card" onclick="checkAnswer('${animal.name}')">
                        <div class="animal-image" style="font-size: ${Math.min(question.size * 1.5, 8)}rem">
                            ${animal.emoji}
                        </div>
                    </div>
                `;
            });
            
            html += `</div>`;
            correctAnswer = targetAnimal.name;
            break;
            
        case 'differences':
            // 找不同游戏
            html = `
                <p>找出与众不同的一个：</p>
                <div class="animal-grid">
            `;
            
            const differentAnimal = question.differentAnimal;
            const shuffledDiffOptions = shuffle([...question.animals]);
            
            shuffledDiffOptions.forEach(animal => {
                html += `
                    <div class="animal-card" onclick="checkAnswer('${animal.name}')">
                        <div class="animal-image" style="font-size: ${question.size}rem">
                            ${animal.emoji}
                        </div>
                    </div>
                `;
            });
            
            html += `</div>`;
            correctAnswer = differentAnimal.name;
            break;
    }
    
    testContainer.innerHTML = html;
}

// 检查答案
function checkAnswer(answer) {
    const currentSize = questions[currentQuestion].size;
    const question = questions[currentQuestion];
    
    if (answer === correctAnswer) {
        // 记录成功的最小尺寸
        if (currentSize < smallestSuccessSize) {
            smallestSuccessSize = currentSize;
        }
        
        // 如果是动物朝向测试，先显示正确的方向
        if (question.type === 'direction') {
            // 显示箭头
            document.querySelector('.animal-image').classList.add('show-arrow');
            
            // 等待一秒再显示下一题
            setTimeout(() => {
                currentQuestion++;
                showQuestion();
            }, 1000);
            return;
        }
        
        // 显示下一题
        currentQuestion++;
        showQuestion();
    } else {
        // 答错了，显示结果
        showResults();
    }
}

// 显示结果
function showResults() {
    document.getElementById('test-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    
    // 根据最小成功尺寸评估视力
    let resultMessage = "";
    if (smallestSuccessSize <= 1) {
        resultMessage = "视力非常好！可以看清最小的图案。";
    } else if (smallestSuccessSize <= 2) {
        resultMessage = "视力很好！可以看清大部分图案。";
    } else if (smallestSuccessSize <= 4) {
        resultMessage = "视力正常，可以看清中等大小的图案。";
    } else {
        resultMessage = "视力可能需要进一步检查，建议咨询专业眼科医生。";
    }
    
    document.getElementById('result-message').textContent = resultMessage;
}

// 返回首页
function goHome() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('test-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
}

// 工具函数：打乱数组
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}

// 页面加载完成后初始化
window.onload = function() {
    // 确保欢迎屏幕可见
    document.getElementById('welcome-screen').classList.add('active');
    document.getElementById('test-screen').classList.remove('active');
    document.getElementById('result-screen').classList.remove('active');
};