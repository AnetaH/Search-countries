var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#country');
var capitalsList = $('#capital');
var regionsList = $('#region');
var populationList = $('#population');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();

  if(!countryName.length) {
    countryName = 'Poland';
  }
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList,
    error: function() {
      alert('Country not found. Try again.');
      notFound();
    },
  });
}

function showCountriesList(resp) {
  countriesList.empty();
  capitalsList.empty();
  regionsList.empty();
  populationList.empty();

  resp.forEach(function(item) {
    $('<li>').text('Country name: ' + item.name).appendTo(countriesList);
    $('<li>').text('Region: ' + item.region).appendTo(regionsList);
    $('<li>').text('Capital city: ' + item.capital).appendTo(capitalsList);
    $('<li>').text('Population: ' + item.population).appendTo(populationList);
  });
}

function notFound() { 
  countriesList.empty();
  $('#country').text('Country not found');
  $('#capital').text('');
  $('#region').text('');
  $('#population').text('');
}