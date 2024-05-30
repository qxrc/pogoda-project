 const apiKey = 'fa8607ed41c3406c838131526241504';
  const api  = 'http://api.weatherapi.com/v1/current.json?key='

  

function go(){
// ВВОД ДАННЫХ ИЗ ИНПУТА ДЛЯ АПИ
  var zap = document.getElementById("gorod").value;
 const query = `${api}${apiKey}&q=${zap}`; 
 if(zap == ""){
  alert("Введите пожалуйста город")
 }
//  ВЫВОД ДАННЫХ ОТ АПИ
fetch(query).then((Response) => {
  return Response.json()
}).then((data) => { 
  
  let name = data['location']['name'] //  ВЫВОД ГОРОДА ОТ АПИ
  document.getElementById('gorod1').textContent = "Город: " + name //  ВВЫОД ГОРОДА ДЛЯ КАРТОЧКИ
  let temp = data['current']['temp_c']; //  ВЫВОД ТЕМПЕРАТУРЫ ОТ АПИ
  document.getElementById('gredus').textContent = temp + ' C°' //  ВВЫОД ТЕМПЕРАТУРЫ ДЛЯ КАРТОЧКИ
  let ms = data['current']['wind_kph'] //  ВЫВОД ВЕТРА В КМ.ЧАС ОТ АПИ
  document.getElementById('veterism').textContent = "Ветер: "+ ms + " m/s" //  ВВЫОД КМ.ЧАС ДЛЯ КАРТОЧКИ
 
  var vloc = document.getElementById('region');
  var existingImg = vloc.querySelector('img');  
 
  if (existingImg) {
     existingImg.remove();
}
 
 var img = document.createElement("img");
 img.src = data['current']['condition']['icon']; // ВЫВОД КАРТИНКИ ОТ АПИ 
 vloc.appendChild(img);  //  ВВЫОД КАРТИНКИ ДЛЯ КАРТОЧКИ
 
// ПЕРЕВОД ТЕКСТА
 let textweather;
 let weatherCondition = data['current']['condition']['text'];

 let translate;
 
 switch (weatherCondition.toLowerCase()) {
        case "sunny":
      translate = "Солнечно"; 
      break;
      case "Clearly":
        translate = "Солнечно"; 
        break;
        case "clear":
      translate = "Чистое небо"; 
      break;
        case "partly cloudy":
      translate = "Переменная облачность"; 
      break;
      case "cloudy":
        translate = "Облачно"; 
      break;
      case "rain":
        translate = "Дождь "; 
      break;
      case "snow":
        translate = "Снежно"; 
      break;
      case "fog":
        translate = "Туман "; 
      break;
      case "windy":
        translate = "Ветрено "; 
      break;
      case "hot ":
        translate = "Жарко "; 
      break;
      case "cold":
        translate = "Холодно "; 
      break;
      case "storm":
        translate = "Гроза "; 
      break;
      case "moderate rain":
        translate = "Умеренный дождь"; 
      break;
       default:
       translate = "Не известное условияе"
      break;
 }
 
 // Вывод перевод в элемент
      document.getElementById('uslovia').textContent = "Условия:    " +translate ;
})

}
