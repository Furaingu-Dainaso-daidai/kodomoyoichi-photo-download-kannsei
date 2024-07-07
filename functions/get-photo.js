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
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('photo-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const photoNumber = document.getElementById('photo-number').value;
        const photoContainer = document.getElementById('photo-container');

        // Fetch photo based on input number
        fetch(`/.netlify/functions/get-photo?number=${photoNumber}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.url) {
                    photoContainer.innerHTML = `<img src="${data.url}" alt="写真"><br><a href="${data.url}" download>ダウンロード</a>`;
                } else {
                    photoContainer.innerHTML = `<p>リンクが見つかりませんでした。もう一度入力してください。</p>`;
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                photoContainer.innerHTML = `<p>エラーが発生しました。再読み込み等をしてください。解決されない場合は、「問い合わせ等」から問い合わせてください。</p>`;
            });
    });
});
