
function initMap() {
    const usCoords = {
        lat: 38.090240,
        lng: -95.712891,
    }

    const clinicMap = new google.maps.Map(document.querySelector('#map'), {
        center: usCoords,
        zoom: 5,
        zoomControl: true,
        panControl: true,
        streetViewcontrol: false,
        mapTypeId: google.maps.MapTypeId.HYBRID, 
    });

    //defining single InfoWindow instance:
    const clinicInfo = new google.maps.InfoWindow();

    //retrive all clinic information with AJAX request
    fetch('/api/clinics')
        .then((response) => response.json())
        .then((clinic_info) => {
            console.log(clinic_info)

        //creating all map markers
            const clinicMarkers = [];
            for (const location of clinic_info) {
                const coords = {
                    lat: location.lat,
                    lng: location.lng,
                }
                clinicMarkers.push(
                    new google.maps.Marker({
                        position: coords,
                        title: location.name,
                        phone: location.phone,
                        address: location.address,
                        map: clinicMap,
                    }),
                );
            }

            //creating design for info window
            for (const marker of clinicMarkers) {
                const clinicInfoContent = `
                <div class='window-content'>
                    <div class='clinic-thumbnail'>
                        <img
                            src='/static/images/rights.png'
                        />
                    </div>

                    <ul class='clinic-info'>
                        <li><b>
                    <h1>${marker.title}</h1>
                    <p>
                        Address: <code>${marker.address}</code>
                        <br>
                        <br>
                        Phone: <code>${marker.phone}</code>
                    </p></>
                `;

                const infoWindow = new google.maps.InfoWindow({
                    content: clinicInfo,
                    maxWidth: 400,
                });

                //adding event listener to only show 1 info window at a time
                marker.addListener('click', () => {
                    clinicInfo.close();
                    clinicInfo.setContent(clinicInfoContent);
                    clinicInfo.open(clinicMap, marker);
                });
            }
        })

    //event listener for form submission on map page
    var userInput = document.getElementById('searchInput');
    userInput.addEventListener('submit', (evt) => {
        if (userInput == 'Alabama') {
            clinicMap.setCenter == {
                lat: 32.3182,
                lng: 86.9023
            }
        }
        else if (userInput == 'Alaska') {
            clinicMap.setCenter == {
                lat: 64.2008,
                lng: 149.4937
            }
        }
        else if (userInput == 'Arizona') {
            clinicMap.setCenter == {
                lat: 34.0489,
                lng: 111.0937
            }
        }
        else if (userInput == 'Arkansas') {
            clinicMap.setCenter == {
                lat: 34.5574,
                lng: 92.2863
            }
        }
        else if (userInput == 'California') {
            clinicMap.setCenter == {
                lat: 36.7783,
                lng: 119.4179
            }
        }
        else if (userInput == 'Colorado') {
            clinicMap.setCenter == {
                lat: 39.5501,
                lng: 105.7821
            }
        }
        else if (userInput == 'Connecticut') {
            clinicMap.setCenter == {
                lat: 41.6032,
                lng: 73.0877
            }
        }
        else if (userInput == 'Delaware') {
            clinicMap.setCenter == {
                lat: 38.9108,
                lng: 75.5277
            }
        }
        else if (userInput == 'Florida') {
            clinicMap.setCenter == {
                lat: 27.6648,
                lng: 81.5158
            }
        }
        else if (userInput == 'Georgia') {
            clinicMap.setCenter == {
                lat: 32.1656,
                lng: 82.9001
            }
        }
        else if (userInput == 'Hawaii') {
            clinicMap.setCenter == {
                lat: 19.8968,
                lng: 155.5828
            }
        }
        else if (userInput == 'Idaho') {
            clinicMap.setCenter == {
                lat: 44.0682,
                lng: 114.7420
            }
        }
        else if (userInput == 'Illinois') {
            clinicMap.setCenter == {
                lat: 40.6331,
                lng: 89.3985
            }
        }
        else if (userInput == 'Indiana') {
            clinicMap.setCenter == {
                lat: 40.2672,
                lng: 86.1349
            }
        }
        else if (userInput == 'Iowa') {
            clinicMap.setCenter == {
                lat: 41.8780,
                lng: 93.0977
            }
        }
        else if (userInput == 'Kansas') {
            clinicMap.setCenter == {
                lat: 39.0119,
                lng: 98.4842
            }
        }
        else if (userInput == 'Kentucky') {
            clinicMap.setCenter == {
                lat: 37.8393,
                lng: 84.2700
            }
        }
        else if (userInput == 'Louisiana') {
            clinicMap.setCenter == {
                lat: 30.9843,
                lng: 91.9623
            }
        }
        else if (userInput == 'Maine') {
            clinicMap.setCenter == {
                lat: 45.2538,
                lng: 69.4455
            }
        }
        else if (userInput == 'Maryland') {
            clinicMap.setCenter == {
                lat: 39.0458,
                lng: 76.6413
            }
        }
        else if (userInput == 'Massachusetts') {
            clinicMap.setCenter == {
                lat: 42.4072,
                lng: 71.3824
            }
        }
        else if (userInput == 'Michigan') {
            clinicMap.setCenter == {
                lat: 44.3148,
                lng: 85.6024
            }
        }
        else if (userInput == 'Minnesota') {
            clinicMap.setCenter == {
                lat: 46.7296,
                lng: 94.6859
            }
        }
        else if (userInput == 'Mississippi') {
            clinicMap.setCenter == {
                lat: 32.3547,
                lng: 89.3985
            }
        }
        else if (userInput == 'Missouri') {
            clinicMap.setCenter == {
                lat: 37.9643,
                lng: 91.8318
            }
        }
        else if (userInput == 'Montana') {
            clinicMap.setCenter == {
                lat: 46.8797,
                lng: 110.3626
            }
        }
        else if (userInput == 'Nebraska') {
            clinicMap.setCenter == {
                lat: 41.4925,
                lng: 99.9018
            }
        }
        else if (userInput == 'Nevada') {
            clinicMap.setCenter == {
                lat: 38.8026,
                lng: 116.4194
            }
        }
        else if (userInput == 'New Hampshire') {
            clinicMap.setCenter == {
                lat: 43.1939,
                lng: 71.5724
            }
        }
        else if (userInput == 'New Jersey') {
            clinicMap.setCenter == {
                lat: 40.0583,
                lng: 74.4057
            }
        }
        else if (userInput == 'New Mexico') {
            clinicMap.setCenter == {
                lat: 34.5199,
                lng: 105.8701
            }
        }
        else if (userInput == 'New York') {
            clinicMap.setCenter == {
                lat: 40.7128,
                lng: 74.0060
            }
        }
        else if (userInput == 'North Carolina') {
            clinicMap.setCenter == {
                lat: 35.7596,
                lng: 79.0193
            }
        }
        else if (userInput == 'North Dakota') {
            clinicMap.setCenter == {
                lat: 47.5515,
                lng: 101.0020
            }
        }
        else if (userInput == 'Ohio') {
            clinicMap.setCenter == {
                lat: 40.4173,
                lng: 82.9071
            }
        }
        else if (userInput == 'Oklahoma') {
            clinicMap.setCenter == {
                lat: 35.0078,
                lng: 97.0929
            }
        }
        else if (userInput == 'Oregon') {
            clinicMap.setCenter == {
                lat: 43.8041,
                lng: 120.5542
            }
        }
        else if (userInput == 'Pennsylvania') {
            clinicMap.setCenter == {
                lat: 41.2033,
                lng: 77.1945
            }
        }
        else if (userInput == 'Rhode Island') {
            clinicMap.setCenter == {
                lat: 41.5801,
                lng: 71.4774
            }
        }
        else if (userInput == 'South Carolina') {
            clinicMap.setCenter == {
                lat: 33.8361,
                lng: 81.1637
            }
        }
        else if (userInput == 'South Dakota') {
            clinicMap.setCenter == {
                lat: 43.9695,
                lng: 99.9018
            }
        }
        else if (userInput == 'Tennessee') {
            clinicMap.setCenter == {
                lat: 35.5175,
                lng: 86.5804
            }
        }
        else if (userInput == 'Texas') {
            clinicMap.setCenter == {
                lat: 31.9686,
                lng: 99.9018
            }
        }
        else if (userInput == 'Utah') {
            clinicMap.setCenter == {
                lat: 39.3210,
                lng: 111.0937
            }
        }
        else if (userInput == 'Vermont') {
            clinicMap.setCenter == {
                lat: 44.5588,
                lng: 72.5778
            }
        }
        else if (userInput == 'Virginia') {
            clinicMap.setCenter == {
                lat: 37.4316,
                lng: 78.6569
            }
        }
        else if (userInput == 'Washington') {
            clinicMap.setCenter == {
                lat: 41.8780,//
                lng: 93.0977//
            }
        }
        else if (userInput == 'West Virginia') {
            clinicMap.setCenter == {
                lat: 47.7511,
                lng: 120.7401
            }
        }
        else if (userInput == 'Wisconsin') {
            clinicMap.setCenter == {
                lat: 43.7844,
                lng: 88.7879
            }
        }
        else (userInput == 'Wyoming'); {
            clinicMap.setCenter == {
                lat: 43.0760,
                lng: 107.2903
            }
        }
    });
}
