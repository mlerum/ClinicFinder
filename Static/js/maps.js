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

    const clinicInfo = new google.maps.InfoWindow();

    const locations = [
        {
            name: 'Planned Parenthood - Bend Health Center',
            phone: '888-975-7820',
            address: '2330 NE Division St, Suite 7',
            coords: {
                lat: 44.07340,
                lng: -121.30238,
            },

        },
        {
            name: 'Planned Parenthood - Eugene-Springfield Health Center',
            phone: '541-344-9411',
            address: '3579 Franklin Blvd, Eugene, OR 97403',
            coords: {
                lat: 44.04514,
                lng: -123.04082,
            },
        },
        {
            name: 'Planned Parenthood - West Eugene Health Center',
            phone: '541-463-9731',
            address: '793 N. Danebo Avenue, Eugene, OR',
            coords: {
                lat: 44.06936,
                lng: -123.17579,
            },
        },
        {
            name: 'Corvallis Clinic Ashbury Building',
            phone: '541-754-1150',
            address: '3680 NW Samaritan Drive, Corvallis, OR',
            coords: {
                lat: 44.60221,
                lng: -123.25479,
            },
        },
        {
            name: 'Planned Parenthood - Salem Health Center',
            phone: '888-875-7820',
            address: '3825 Wolverine St., NE, Salem, OR',
            coords: {
                lat: 44.95870,
                lng: -122.98575,
            },
        },
    ];

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

    for (const marker of markers) {
        const markerInfo = `
          <h1>${marker.title}</h1>
          <p>
            Address: <code>${marker.position.lat()}</code>,
            <code>${marker.position.lng()}</code>,
            Phone: <code>${marker.phone}</code>,
          </p>
        `;
    
        const infoWindow = new google.maps.InfoWindow({
          content: markerInfo,
          maxWidth: 200,
        });
    
        marker.addListener('click', () => {
          infoWindow.open(clinicMap, marker);
        });
      }
    };

