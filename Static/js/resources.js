

//retrieve all resource information with AJAX request
fetch('/api/resources')
    .then((response) => response.json())
    .then((resource_info) => {
        console.log(resource_info)

        const resourceGuide = [];
        for (const resource of resource_info) {
            resourceGuide.push({
                title: resource.name,
                summary: resource.summary,
                link: resource.link,
            })
        }

        for (const resource of resourceGuide) {
            const resourceInfo = `
            <div class='window-content'>
                <div class='resource-thumbnail'>
                    <img
                        src='/static/images/rights.png'
                    />
                </div>

                <ul class='resource-info'>
                    <li><b>
                <h1>${resource.name}</h1>
                <p>
                    Summary: <code>${resource.summary}</code>,
                    <br>
                    Link: <code>${resource.link}</code>,
                </p></>
            `;
        }
    })