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
    })

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
                        Address: <code>${marker.position}</code>,
                        <br>
                        Phone: <code>${marker.phone}</code>,
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
}
