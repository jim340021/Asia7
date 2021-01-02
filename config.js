var config = {
    style: 'mapbox://styles/mapjim09/ckjc7d1bv1dxb19vwdr54qo6u',
    accessToken: 'pk.eyJ1IjoibWFwamltMDkiLCJhIjoiNzRId1YtNCJ9.fvr7auc8mRE2wk2LDgnwXQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: '7th Century Asia',
    subtitle: 'A gazetteer of the region',
    byline: 'WapaMapaBingBong',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'pyu1',
            alignment: 'left',
            hidden: false,
            title: 'The Pyu States',
            image: './path/to/image/source.png',
            description: 'Early states of the Irawaddy valley',
            location: {
                center: [95.17272, 23.47254],
                zoom: 7,
                pitch: 60,
                bearing: 172.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2sriv',
            alignment: 'right',
            hidden: false,
            title: 'Srivijaya',
            image: './path/to/image/source.png',
            description: 'The pivot point',
            location: {
                center: [107.26560, -3.07261],
                zoom: 6,
                pitch: 60,
                bearing: -14.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
