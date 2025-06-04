document.querySelector("button").addEventListener("click", () => {
  const place = document.getElementById("location").value;

  // value एक property है जो HTML input elements (जैसे <input>, <select>, <textarea>) से उनके current value को पढ़ने या सेट करने के लिए उपयोग होती है।
  // console.log(place)

  function updateTemp(data) {
    const element = document.getElementById("weatherInfo");
    element.innerHTML = `Today's ${place} Temperature: ${data.current.temp_c}°C`;
  }

  const prom = fetch(
    `http://api.weatherapi.com/v1/current.json?key=62a1734d952f4a31a84143920252702&q=${place}&aqi=yes`
  );

  prom.then((response) => response.json()).then((data) => updateTemp(data));
});

//1. value का प्रकार
// यह DOM property है (attribute नहीं)

// JavaScript के माध्यम से पढ़ी/लिखी जा सकती है

// Real-time में element के current value को reflect करती है
