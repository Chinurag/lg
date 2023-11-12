function showLifeGraph() {
    const name = document.getElementById('name').value;
    const dob = new Date(document.getElementById('dob').value);
    const zodiacSign = getZodiacSign(dob.getMonth() + 1, dob.getDate());
    const selectedYear = document.getElementById('year').value;

    // Display zodiac sign and specific line
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<p>Hello ${name}, your zodiac sign is ${zodiacSign}.</p>`;

    // Add a specific line about the zodiac sign
    let zodiacInfo = '';

    switch (zodiacSign) {
        case 'Aries':
            zodiacInfo = 'You are known for your energetic and enthusiastic nature.';
            break;
        case 'Taurus':
            zodiacInfo = 'You are characterized by your stability and determination.';
            break;
        case 'Gemini':
            zodiacInfo = `With your adaptable and communicative nature, ${name}, make the most of social opportunities in ${selectedYear}.`;
            break;
        case 'Cancer':
            zodiacInfo = `As a Cancer, ${name}, you are known for your nurturing and protective qualities. Focus on emotional well-being in ${selectedYear}.`;
            break;
        case 'Leo':
            zodiacInfo = `Embrace your confident and generous nature, ${name}, in ${selectedYear}. Shine brightly in your endeavors.`;
            break;
        case 'Virgo':
            zodiacInfo = `With your analytical and detail-oriented approach, ${name}, strive for perfection in ${selectedYear}.`;
            break;
        case 'Libra':
            zodiacInfo = `As a Libra, ${name}, seek balance and harmony in relationships and decisions in ${selectedYear}.`;
            break;
        case 'Scorpio':
            zodiacInfo = `Channel your passion and intensity, ${name}, for transformative experiences in ${selectedYear}.`;
            break;
        case 'Sagittarius':
            zodiacInfo = `With your adventurous and optimistic spirit, ${name}, explore new horizons and opportunities in ${selectedYear}.`;
            break;
        case 'Capricorn':
            zodiacInfo = `As a Capricorn, ${name}, focus on your ambition and disciplined approach to achieve your goals in ${selectedYear}.`;
            break;
        case 'Aquarius':
            zodiacInfo = `Embrace your unique and innovative ideas, ${name}, for positive changes in ${selectedYear}.`;
            break;
        case 'Pisces':
            zodiacInfo = `Tap into your intuitive and compassionate nature, ${name}, to navigate the emotional waters of ${selectedYear}.`;
            break;
        default:
            zodiacInfo = 'Your zodiac sign has unique qualities.';
    }

    resultContainer.innerHTML += `<p>${zodiacInfo}</p>`;

    // Create a container for the graph
    const graphContainer = document.createElement('canvas');
    graphContainer.id = 'life-graph';
    resultContainer.appendChild(graphContainer);

    // Display cubic life graph
    const graphData = generateGraphData(selectedYear);
    
    new Chart(graphContainer, {
        type: 'line',
        data: {
            labels: getMonthLabels(),
            datasets: [{
                label: 'Luck Level',
                borderColor: '#ff8c00',
                data: graphData,
                fill: false,
                cubicInterpolationMode: 'monotone', // Set the interpolation mode to cubic
            }]
        },
        options: {
            scales: {
                y: {
                    min: -6,
                    max: 10
                }
            }
        }
    });

    // Show result container
    resultContainer.style.display = 'block';
}

function generateGraphData(selectedYear) {
    // Generate random happiness levels for each month in the selected year
    // Bias the values towards positive numbers to keep the line mostly above 0
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 12) + -2);
}

function getZodiacSign(month, day) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return 'Aries';
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return 'Taurus';
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return 'Gemini';
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return 'Cancer';
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return 'Leo';
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return 'Virgo';
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return 'Libra';
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return 'Scorpio';
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return 'Sagittarius';
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return 'Capricorn';
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return 'Aquarius';
    } else {
        return 'Pisces';
    }
}

function getMonthLabels() {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
}
