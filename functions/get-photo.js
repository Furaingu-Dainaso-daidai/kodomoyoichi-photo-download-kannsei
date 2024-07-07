document.getElementById('photo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const photoNumber = document.getElementById('photo-number').value;
    const photoContainer = document.getElementById('photo-container');

    fetch(`https://httpskodomoyoichi-shashin-download.daigo7camera.workers.dev/?number=${photoNumber}`)
        .then(response => response.json())
        .then(data => {
            if (data.url) {
                photoContainer.innerHTML = `<img src="${data.url}" alt="写真" style="max-width: 100%;"><br><a href="${data.url}" download>ダウンロード</a>`;
            } else {
                photoContainer.innerHTML = `<p>リンクが見つかりませんでした。もう一度入力してください。</p>`;
            }
        })
        .catch(error => {
            photoContainer.innerHTML = `<p>エラーが発生しました。再読み込み等をしてください。解決されない場合は、「問い合わせ等」から問い合わせてください。</p>`;
        });
});
