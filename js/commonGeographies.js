// Store references to common dropdown datasets (pull them into their own file and import cause why not)
const fullGeography = [
    {
        'key': 'DVRPC Region*',
        columns: ['year', 'DVRPC']
    },
    {
        'key': 'NJ Counties*',
        columns: ['year', 'New Jersey Suburbs'],
        disabled: true
    },
    {
        'key': 'PA Suburban Counties*',
        columns: ['year', 'Pennsylvania Suburbs'],
        disabled: true
    },
    {
        'key': 'Core Cities^',
        columns: ['year', 'Core City'],
        disabled: true
    },
    {
        'key': 'Developed Communities^',
        columns: ['year', 'Developed Community'],
        disabled: true
    },
    {
        'key': 'Growing Suburbs^',
        columns: ['year', 'Growing Suburb'],
        disabled: true
    },
    {
        'key': 'Rural Areas^',
        columns: ['year', 'Rural Area'],
        disabled: true
    },
    {
        'key': 'Bucks**',
        columns: ['year', 'Bucks County'],
        disabled: true
    },
    {
        'key': 'Burlington**',
        columns: ['year', 'Burlington County'],
        disabled: true
    },
    {
        'key': 'Camden**',
        columns: ['year', 'Camden County'],
        disabled: true
    },
    {
        'key': 'Chester**',
        columns: ['year', 'Chester County'],
        disabled: true
    },
    {
        'key': 'Delaware**',
        columns: ['year', 'Delaware County'],
        disabled: true
    },
    {
        'key': 'Gloucester**',
        columns: ['year', 'Gloucester County'],
        disabled: true
    },
    {
        'key': 'Mercer**',
        columns: ['year', 'Mercer County'],
        disabled: true
    },
    {
        'key': 'Montgomery**',
        columns: ['year', 'Montgomery County'],
        disabled: true
    },
    {
        'key': 'Philadelphia**',
        columns: ['year', 'Philadelphia County'],
        disabled: true
    }
]

export { fullGeography }