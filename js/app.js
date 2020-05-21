
const country_name_element = document.querySelector(".country .name")
const total_cases_element = document.querySelector(".total-cases .value")
const new_cases_element = document.querySelector(".total-cases .new-value")
const recover_element = document.querySelector(".recovered .value")
const new_recover_element = document.querySelector(".recovered .new-value")
const deaths_element = document.querySelector(".deaths .value")
const new_deaths_element = document.querySelector(".deaths .new-value")

//variables
let app_data = [],
cases_list = [],
recovered_list = [],
death_list = [],
dates = []



//get country code
let country_code = '';
let user_country;
country_list.forEach(country => {
  if (country.code == country_code) {
    user_country = country.name;
  }
});


function fetchData(user_country) {
  country_name_element.innerHTML = "Loading...";

  cases_list = [], recovered_list =[], deaths_list = [], dates = []

  fetch(`https://covid19-monitor-pro.p.rapidapi.com/coronavirus/cases_by_days_by_country.php?country=${user_country}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid19-monitor-pro.p.rapidapi.com",
      "x-rapidapi-key": "7e269ec140msh8a5df9cfc21b4b4p1c1e3ejsn9aba26afc6e0"
    }
  })
  .then(response => {
    return response.json();
  })

  .then(data => {
    dates = Object.keys(data);

    dates.forEach(date => {
      let DATA = data[date];

      app_data.push(DATA);
      cases_list.push(parseInt(DATA.total_cases.replace(/,/g, "")));
      recovered_list.push(parseInt(DATA.total_recovered.replace(/,/g, "")));
      death_list.push(parseInt(DATA.total_deaths.replace(/,/g, "")));
    })
  })
  .then(()=> {
    update();
  })
  .catch(err => {
    alert(err);
  })
}

fetchData(user_country)

function update(){
  updateStats();
}

function updateStats(){
  let last_entry = app_data[app_data.length -1];
  let before = app_data[app_data.length-2];

  country_name_element.innerHTML = last_entry.country_name;
  total_cases_element.innerHTML = last_entry.total_cases || 0;
  new_cases_element.innerHTML = `+${last_entry.new_cases || 0}`;

  recover_element.innerHTML = last_entry.total_recovered || 0;
  new_recover_element.innerHTML =`+${ parseInt(last_entry.total_recovered.replace(/,/g, "")) - parseInt(before.total_recovered.replace(/,/g, ""))}`;


deaths_element.innerHTML = last_entry.total_deaths;
new_deaths_element.innerHTML = `+${last_entry.new_deaths || 0}`;
}
