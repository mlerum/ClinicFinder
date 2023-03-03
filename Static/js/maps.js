//create initMap function()
function initMap() {
    console.log("maps")
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
        mapTypeId: google.maps.MapTypeId.RASTER,
    });
    
    const usMarker = new google.maps.Marker({
        position: usCoords,
        title: 'US',
        map: clinicMap
    });

    usMarker.addListener('click', () => {
        alert('Hi!');
    })
};

//create single InfoWindow instance so only one info window will appear at one time
const clinicInfo = new google.maps.InfoWindow();

//fetch request from server.py
fetch('/api/clinics')
    .then((response) => response.json())
    .then((clinics) => {
        for (const clinic of clinics) {
            const clinicContent = `
            <div class="clinic-content">
              />
            </div>
  
            <ul class="clinic-info">
              <li><b>Name: </b>${clinic.name}</li>
              <li><b>Link: </b>${clinic.link}</li>
              <li><b>Phone: </b>${clinic.phone}</li>
              <li><b>Address: </b>${clinic.address}</li>
              <li><b>Zipcode: </b>${clinic.zipcode}</li>
              <li><b>State: </b>${clinic.state}</li>
              <li><b>Location: </b>${clinic.lat}, ${clinic.long}</li>
            </ul>
          </div>
        `;  
            const clinicMarker = new google.maps.Marker({
                position: {
                    lat: clinic.lat,
                    lng: clinic.long
                },
                title: `Clinic ID: ${clinic.clinicID}`,
                icon: {
                    url: 'enter icon url if I want one',
                    scaledSize: new google.maps.Size(50,50),
                },
                map: map,
            });

            clinicMarker.addListener('click', () => {
                clinicInfo.close();
                clinicInfo.setContent(clinicContent);
                clinicInfo.open(map, clinicMarker);
            });
        }
    });
