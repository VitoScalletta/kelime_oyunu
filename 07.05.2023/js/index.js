const kelimeListesi = ["merhaba", "dünya", "javascript", "programlama", "web", 
"uygulama", "geliştirme", "framework", "fonksiyon", "dizi", "nesne", "yöntem", 
"arayüz", "modül", "kütüphane", "hata", "değişken", "sabit", "operatör", "mantıksal",
"atama", "döngü", "koşul", "switch", "break", "continue", "debug", "console", "log","vettel"];

  let kelimeGonderBtn = document.getElementById("kelimegonder");
  let harfgonder = document.querySelector("#harfgonder");
 
  kelimeGonderBtn.addEventListener("click", () => {

  let sayiSecmeInput = document.getElementById("sayisecme");
  let safsayi = parseInt(sayiSecmeInput.value)//inputtan gelen veri
  let sayi = safsayi - 1; //gelen veridem bir çıkartıyoruzki 0. eleman seçilebilsin
  let secilenKelime = kelimeListesi[sayi];
  var kelimekutusu = document.getElementsByClassName("kelimekutusu");
  //Kelime Kontrol
  if (!isNaN(sayi) && sayi >= 0 && sayi < kelimeListesi.length) {
    console.log(`Seçilen kelime: ${secilenKelime},${secilenKelime.length}`);
    sayiSecmeInput.value = ""; 
  } else {
    alert(`Geçersiz bir sayı girdiniz. 1- ${kelimeListesi.length} arası`);
    sayiSecmeInput.value = ""; 
  }
  document.querySelector(".sayidiv").style.display = "none"; //sayi secme kapama
  document.querySelector(".tahmin").style.display ="block"; //harf secme acma

  for (let index = 0; index < kelimeListesi.length; index++) {
    if(secilenKelime.length > index){
       kelimekutusu[index].style.backgroundColor = "whitesmoke";
    }
    else{
      kelimekutusu[index].style.backgroundColor = "blueviolet";
    }
  }

  })

 
  harfgonder.addEventListener("click",() => {
    let harf = document.querySelector("#harfsecme").value;
    console.log(harf);
  })