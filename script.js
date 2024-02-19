function Omikuji() {
        
    let omikuji = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];
    let r = Math.floor( Math.random() * omikuji.length) ;//おみくじぶんの数字を作ります
    if (omikuji[r] === "大吉"){
        document.getElementById("kekka").innerHTML = omikuji[r];//結果をid="kekka"に表示します
        document.getElementById("kekka").style.color = "red";
        document.getElementById("comment").innerHTML = "Happy";
        
    }else if(omikuji[r] === "凶"){
        document.getElementById("kekka").innerHTML = omikuji[r];//結果をid="kekka"に表示します
        document.getElementById("kekka").style.color = "black";
        document.getElementById("comment").innerHTML = "Wow";
    }else if(omikuji[r] === "大凶"){
        document.getElementById("kekka").innerHTML = omikuji[r];//結果をid="kekka"に表示します
        document.getElementById("kekka").style.color = "red";
        document.getElementById("comment").innerHTML = "Wow";
    }else {
        document.getElementById("kekka").innerHTML = omikuji[r];//結果をid="kekka"に表示します
        document.getElementById("kekka").style.color = "black";
        document.getElementById("comment").innerHTML = "Wow";
    }
    

    // 何秒後に結果を消すか（例: 5秒後）
    let time_second = 3;
    setTimeout(function () {
        document.getElementById("kekka").innerHTML = ""; // 空にすることで結果を消す
        document.getElementById("comment").innerHTML = ""; // 空にすることで結果を消す
    },time_second * 1000);
}


// ボタン要素を取得
function pika_onClick(){
		window.open(
			"content.html",
			"_blank",
			"menubar=0,width=1200,height=800,top=100,left=100");
		// サブウィンドウから値を受け取るためのイベントリスナーを設定
		window.addEventListener('message', function(event) {
		// event.data にサブウィンドウからのデータが含まれています
		alert("Value from sub window: " + event.data);
		});
	}

    document.getElementById('returnButton03').addEventListener('click', function() {
        // ブラウザを閉じる
        window.close();
       });

       function updateTime() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');//tostring で文字列返す　２桁で返し、先頭には０をつける
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        var timeString = hours + ':' + minutes + ':' + seconds;
        document.getElementById('current-time').innerText = 'Current Time: ' + timeString;
    }

    // Update time every second
    setInterval(updateTime, 1000);//1秒ごとに返す


