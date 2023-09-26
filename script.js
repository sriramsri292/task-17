var apiUrl = "https://restcountries.com/v3.1/all";

async function display() {
  try {
    let response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch country data');
    }
    let data = await response.json();
    
    for (const country of data) {
      var img = document.createElement("img");
      var countryCode = country.cca2.toLowerCase();
      img.src = `https://flagcdn.com/160x120/${countryCode}.png`;
      document.body.appendChild(img);

      var link = document.createElement("a");
      link.href = `https://openweathermap.org/`;
      link.target = "_blank"; // Open link in a new tab
      link.textContent = `Click for weather in ${country.name.common}`;
      document.body.appendChild(link);

      var info = document.createElement("p");
      info.textContent = `Country: ${country.name.common}, Region: ${country.region}, Population: ${country.population}`;
      document.body.appendChild(info);
    }
  } catch (error) {
    console.log('Error:', error);
  }
}

display();
