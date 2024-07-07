exports.handler = async (event) => {
    const photoDatabase = {
        "1": "https://example.com/photo1.jpg",
        "2": "https://example.com/photo2.jpg",
        "3": "https://example.com/photo3.jpg",
        "4": "https://example.com/photo4.jpg",
        "5": "https://example.com/photo5.jpg",
        "6": "https://example.com/photo6.jpg",
        "7": "https://example.com/photo7.jpg",
        "8": "https://example.com/photo8.jpg",
        "9": "https://example.com/photo9.jpg",
        "10": "https://example.com/photo10.jpg",
        // 他の写真番号とURLを追加
    };

    const number = event.queryStringParameters.number;
    const url = photoDatabase[number];

    if (url) {
        return {
            statusCode: 200,
            body: JSON.stringify({ url: url }),
        };
    } else {
        return {
            statusCode: 404,
            body: JSON.stringify({ url: null }),
        };
    }
};