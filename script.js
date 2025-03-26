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

// 箭头测试配置
const arrowTest = {
    colors: [
        { name: '红色', value: '#ff0000' },
        { name: '蓝色', value: '#0000ff' },
        { name: '绿色', value: '#00ff00' },
        { name: '黄色', value: '#ffa500' },
        { name: '紫色', value: '#800080' },
        { name: '橙色', value: '#ff6b00' }
    ],
    directions: [
        { symbol: '<i class="fas fa-arrow-up"></i>', name: '上' },
        { symbol: '<i class="fas fa-arrow-down"></i>', name: '下' },
        { symbol: '<i class="fas fa-arrow-left"></i>', name: '左' },
        { symbol: '<i class="fas fa-arrow-right"></i>', name: '右' }
    ],
    mode: 'single' // 'single' 或 'multiple'
};

// 视力表测试配置
const chartTest = {
    letters: ['E'],  // 只使用字母E
    rotations: [0, 90, 180, 270],  // 旋转角度：0度（向右）、90度（向上）、180度（向左）、270度（向下）
    rows: [
        { size: 1, count: 1 },   // 0.1
        { size: 2, count: 2 },   // 0.2
        { size: 3, count: 3 },   // 0.3
        { size: 4, count: 4 },   // 0.4
        { size: 5, count: 5 },   // 0.5
        { size: 6, count: 6 },   // 0.6
        { size: 7, count: 7 },   // 0.7
        { size: 8, count: 8 },   // 0.8
        { size: 9, count: 9 },   // 0.9
        { size: 10, count: 10 }  // 1.0
    ]
};

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
            // 箭头测试
            for (let i = 0; i < sizeLevels.length; i++) {
                const isMultipleMode = Math.random() < 0.5; // 随机选择单箭头或多箭头模式
                arrowTest.mode = isMultipleMode ? 'multiple' : 'single';
                
                if (arrowTest.mode === 'single') {
                    // 单箭头模式
                    const direction = arrowTest.directions[Math.floor(Math.random() * arrowTest.directions.length)];
                    const color = arrowTest.colors[Math.floor(Math.random() * arrowTest.colors.length)];
                    
                    // 添加测试问题
                    questions.push({
                        type: 'direction',
                        size: sizeLevels[i],
                        mode: 'single',
                        direction: direction,
                        color: color
                    });
                } else {
                    // 多箭头模式
                    const numArrows = 3; // 显示3个箭头
                    const arrows = [];
                    const usedColors = new Set();
                    const usedDirections = new Set();
                    
                    // 生成箭头
                    for (let j = 0; j < numArrows; j++) {
                        let color, direction;
                        do {
                            color = arrowTest.colors[Math.floor(Math.random() * arrowTest.colors.length)];
                        } while (usedColors.has(color.name));
                        
                        do {
                            direction = arrowTest.directions[Math.floor(Math.random() * arrowTest.directions.length)];
                        } while (usedDirections.has(direction.name));
                        
                        usedColors.add(color.name);
                        usedDirections.add(direction.name);
                        arrows.push({ color, direction });
                    }
                    
                    // 随机选择一个箭头作为目标
                    const targetArrow = arrows[Math.floor(Math.random() * arrows.length)];
                    
                    // 添加测试问题
                    questions.push({
                        type: 'direction',
                        size: sizeLevels[i],
                        mode: 'multiple',
                        arrows: arrows,
                        targetArrow: targetArrow
                    });
                }
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
                    part: part,
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
            // 创建一个已使用动物的集合，确保不会在短时间内重复
            const usedMatchingAnimals = new Set();
            // 深拷贝动物数组，不修改原数组
            let availableMatchingAnimals = [...animals];
            
            for (let i = 0; i < sizeLevels.length; i++) {
                // 确保我们有足够多的动物可选
                if (availableMatchingAnimals.length < 4) {
                    // 如果动物不够，清空已使用集合并重置可用动物
                    usedMatchingAnimals.clear();
                    availableMatchingAnimals = [...animals];
                }
                
                // 从可用动物中随机选择
                const shuffledAnimals = shuffle(availableMatchingAnimals);
                const questionAnimals = shuffledAnimals.slice(0, 4);
                
                // 添加测试问题
                questions.push({
                    type: 'matching',
                    size: sizeLevels[i],
                    animal: questionAnimals[0],
                    options: questionAnimals
                });
                
                // 标记这些动物为已使用
                questionAnimals.forEach(animal => {
                    usedMatchingAnimals.add(animal.emoji);
                    // 从可用动物中移除
                    availableMatchingAnimals = availableMatchingAnimals.filter(a => !usedMatchingAnimals.has(a.emoji));
                });
            }
            break;
        case 'differences':
            // 找不同游戏
            // 创建一个已使用动物的集合，确保不会在短时间内重复
            const usedDiffAnimals = new Set();
            // 深拷贝动物数组，不修改原数组
            let availableDiffAnimals = [...animals];
            
            for (let i = 0; i < sizeLevels.length; i++) {
                // 确保我们有足够多的动物可选
                if (availableDiffAnimals.length < 4) {
                    // 如果动物不够，清空已使用集合并重置可用动物
                    usedDiffAnimals.clear();
                    availableDiffAnimals = [...animals];
                }
                
                // 选择一个不同的动物
                const differentAnimal = availableDiffAnimals[Math.floor(Math.random() * availableDiffAnimals.length)];
                
                // 选择三个相同的动物（与不同的动物不同）
                const otherAnimals = availableDiffAnimals.filter(a => a.emoji !== differentAnimal.emoji);
                if (otherAnimals.length < 1) {
                    // 如果没有足够的其他动物，重置可用动物
                    usedDiffAnimals.clear();
                    availableDiffAnimals = [...animals];
                    i--; // 重试这一轮
                    continue;
                }
                
                const sameAnimal = otherAnimals[Math.floor(Math.random() * otherAnimals.length)];
                
                // 创建动物数组（一个不同，三个相同）
                const animalSet = [
                    differentAnimal,
                    { ...sameAnimal },
                    { ...sameAnimal },
                    { ...sameAnimal }
                ];
                
                // 添加测试问题
                questions.push({
                    type: 'differences',
                    size: sizeLevels[i],
                    differentAnimal: differentAnimal,
                    sameAnimal: sameAnimal,
                    animals: animalSet
                });
                
                // 标记这些动物为已使用
                usedDiffAnimals.add(differentAnimal.emoji);
                usedDiffAnimals.add(sameAnimal.emoji);
                
                // 从可用动物中移除
                availableDiffAnimals = availableDiffAnimals.filter(a => !usedDiffAnimals.has(a.emoji));
            }
            break;
        case 'chart':
            // 视力表测试
            chartTest.currentRow = 0;
            chartTest.currentLetter = 0;
            chartTest.correctCount = 0;
            chartTest.wrongCount = 0;
            
            // 生成视力表问题
            questions.push({
                type: 'chart',
                row: chartTest.rows[0],
                letter: chartTest.letters[Math.floor(Math.random() * chartTest.letters.length)]
            });
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
            // 箭头测试
            if (question.mode === 'single') {
                // 单箭头模式
                html = `
                    <p>这个${question.color.name}箭头指向哪个方向？</p>
                    <div class="arrow-container">
                        <div class="arrow" style="color: ${question.color.value}; font-size: ${question.size}rem">
                            ${question.direction.symbol}
                        </div>
                    </div>
                    <div class="option-container">
                `;
                
                const directions = ["上", "下", "左", "右"];
                directions.forEach(dir => {
                    html += `<button onclick="checkAnswer('${dir}')">${dir}</button>`;
                });
                
                html += `</div>`;
                correctAnswer = question.direction.name;
            } else {
                // 多箭头模式
                html = `
                    <p>请指出${question.targetArrow.color.name}箭头指向的方向</p>
                    <div class="arrow-container">
                `;
                
                question.arrows.forEach(arrow => {
                    html += `
                        <div class="arrow" style="color: ${arrow.color.value}; font-size: ${question.size}rem">
                            ${arrow.direction.symbol}
                        </div>
                    `;
                });
                
                html += `
                    </div>
                    <div class="option-container">
                `;
                
                const directions = ["上", "下", "左", "右"];
                directions.forEach(dir => {
                    html += `<button onclick="checkAnswer('${dir}')">${dir}</button>`;
                });
                
                html += `</div>`;
                correctAnswer = question.targetArrow.direction.name;
            }
            break;
            
        case 'missing':
            // 缺失部分测试
            const part = question.part;
            html = `
                <p>这个${question.animal}缺少了什么部分？</p>
                <div class="animal-container" style="font-size: ${question.size/8}rem">
                    <div class="animal">${question.full}</div>
                    <div class="${part.className} missing"></div>
                    <div class="missing-marker ${part.type}-marker"></div>
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
            const missingShuffledOptions = shuffle([...allMissingOptions]);
            let finalOptions = missingShuffledOptions.slice(0, 3);
            
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
                <p>找出与其他不同的动物：</p>
                <div class="animal-grid">
            `;
            
            // 打乱动物数组，确保不同的动物位置随机
            const shuffledDiffOptions = shuffle([...question.animals]);
            
            // 显示四个动物，其中一个不同
            shuffledDiffOptions.forEach(animal => {
                const isCorrect = animal.emoji === question.differentAnimal.emoji;
                html += `
                    <div class="animal-card ${isCorrect ? 'correct-animal' : ''}" onclick="checkAnswer('${animal.name}')">
                        <div class="animal-image" style="font-size: ${question.size}rem">
                            ${animal.emoji}
                        </div>
                    </div>
                `;
            });
            
            html += `</div>`;
            correctAnswer = question.differentAnimal.name;
            break;
        case 'chart':
            // 视力表测试
            html = `
                <p>请指出每个字母E的开口方向：</p>
                <div class="chart-container">
            `;
            
            // 生成完整的视力表
            chartTest.rows.forEach((row, rowIndex) => {
                html += `<div class="chart-row">`;
                for (let i = 0; i < row.count; i++) {
                    const rotation = chartTest.rotations[Math.floor(Math.random() * chartTest.rotations.length)];
                    html += `
                        <div class="chart-letter chart-size-${row.size}" 
                             style="transform: rotate(${rotation}deg)"
                             onclick="toggleLetter(this)">
                            E
                        </div>
                    `;
                }
                html += `</div>`;
            });
            
            html += `
                </div>
                <div class="option-container">
                    <button onclick="showResults()">完成测试</button>
                </div>
            `;
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
        
        // 如果是箭头测试，直接显示下一题
        if (question.type === 'direction') {
            currentQuestion++;
            showQuestion();
            return;
        }
        
        // 如果是找不同游戏，高亮显示正确答案
        if (question.type === 'differences') {
            // 高亮正确答案
            document.querySelector('.correct-animal').classList.add('highlight');
            
            // 等待一秒再显示下一题
            setTimeout(() => {
                currentQuestion++;
                showQuestion();
            }, 1500);
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

// 添加字母点击切换函数
function toggleLetter(element) {
    // 先移除所有字母的选中状态
    document.querySelectorAll('.chart-letter').forEach(letter => {
        letter.classList.remove('selected');
    });
    
    // 如果点击的字母没有被选中，则选中它
    if (!element.classList.contains('selected')) {
        element.classList.add('selected');
    }
}

// 显示结果
function showResults() {
    document.getElementById('test-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    
    let resultMessage = "";
    
    if (currentTest === 'chart') {
        // 视力表测试结果
        const selectedCount = document.querySelectorAll('.chart-letter.selected').length;
        const totalCount = document.querySelectorAll('.chart-letter').length;
        const visionLevel = (selectedCount / totalCount) * 1.0;
        
        if (visionLevel >= 0.8) {
            resultMessage = "视力良好，在正常范围内。";
        } else if (visionLevel >= 0.6) {
            resultMessage = "视力正常，建议1-2年后再次检查。";
        } else if (visionLevel >= 0.4) {
            resultMessage = "视力略低于正常水平，建议半年后复查。";
        } else {
            resultMessage = "建议咨询专业眼科医生。";
        }
        resultMessage += `<br><br>测试结果：${visionLevel.toFixed(1)}`;
    } else {
        // 其他测试的结果显示逻辑保持不变
        if (smallestSuccessSize <= 0.8) {
            resultMessage = "视力非常好！相当于成人正常视力。小朋友能看清非常小的图案。";
        } else if (smallestSuccessSize <= 1) {
            resultMessage = "视力很好！相当于成人较好的视力。小朋友能看清大部分小图案。";
        } else if (smallestSuccessSize <= 2) {
            resultMessage = "视力良好，在正常范围内。小朋友能看清大多数图案。";
        } else if (smallestSuccessSize <= 3) {
            resultMessage = "视力正常，可以看清中等大小的图案。建议1-2年后再次检查。";
        } else if (smallestSuccessSize <= 4) {
            resultMessage = "视力略低于正常水平，建议半年后再次测试。如果小朋友有看不清的情况，可以咨询儿童眼科医生。";
        } else {
            resultMessage = "建议带小朋友去医院做专业的儿童视力检查，以获得更准确的评估。";
        }
        resultMessage += `<br><br>小朋友能看清的最小尺寸：${smallestSuccessSize} rem`;
    }
    
    document.getElementById('result-message').innerHTML = resultMessage;
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

// 下一题按钮功能
function nextQuestion() {
    // 如果没有更多问题，显示结果
    if (currentQuestion >= questions.length - 1) {
        showResults();
        return;
    }
    
    // 显示下一题
    currentQuestion++;
    showQuestion();
}

// 页面加载完成后初始化
window.onload = function() {
    // 确保欢迎屏幕可见
    document.getElementById('welcome-screen').classList.add('active');
    document.getElementById('test-screen').classList.remove('active');
    document.getElementById('result-screen').classList.remove('active');
};