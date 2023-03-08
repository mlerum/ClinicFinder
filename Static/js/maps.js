// import data from '../../Data/clinics.json' assert { type: 'JSON' };

// console.log(data)

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
        mapTypeId: google.maps.MapTypeId.RASTER,
    });

    fetch('/api/clinics')
    .then((response) => response.json())
    .then((clinic_info) => {
      console.log(clinic_info)
    });

    //creating all map markers
        const locations = ('/api/clinics')
        const markers = [];
        for (const location of locations) {
        markers.push(
            new google.maps.Marker({
            position: location.coords,
            title: location.name,
            phone: location.phone,
            map: clinicMap,
            }),
        );
        }

    //setting up structure of markers - need to add link + address
        for (const marker of markers) {
            const markerInfo = `
            <h1>${marker.title}</h1>
            <p>
                Address: <code>${marker.position}</code>,
                Phone: <code>${marker.phone}</code>,
            </p>
            // `;
            const clinicInfo = new google.maps.InfoWindow();

            const infoWindow = new google.maps.InfoWindow({
            content: markerInfo,
            maxWidth: 200,
            });
        
            marker.addListener('click', () => {
            infoWindow.open(clinicMap, marker);
            });
        }};


