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
        'key': 'Core City^',
        columns: ['year', 'Core City'],
        disabled: true
    },
    {
        'key': 'Developed Community^',
        columns: ['year', 'Developed Community'],
        disabled: true
    },
    {
        'key': 'Growing Suburb^',
        columns: ['year', 'Growing Suburb'],
        disabled: true
    },
    {
        'key': 'Rural Area^',
        columns: ['year', 'Rural Area'],
        disabled: true
    },
    {
        'key': 'Bucks**',
        columns: ['year', 'Bucks County'],
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
        'key': 'Montgomery**',
        columns: ['year', 'Montgomery County'],
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
        'key': 'Philadelphia**',
        columns: ['year', 'Philadelphia County'],
        disabled: true
    }
]

const lightGeography = [
    {
        'key': 'DVRPC',
        columns: ['year', 'DVRPC']
    },
    {
        'key': 'Pennsylvania Suburbs',
        columns: ['year', 'Pennsylvania Suburbs']
    },
    {
        'key': 'New Jersey Suburbs',
        columns: ['year', 'New Jersey Suburbs']
    },
    {
        'key': 'Philadelphia Subregion',
        columns: ['year', 'Philadelphia Subregion']
    },
    {
        'key': 'Bucks County',
        columns: ['year', 'Bucks']
    },
    {
        'key': 'Chester County',
        columns: ['year', 'Chester']
    },
    {
        'key': 'Delaware County',
        columns: ['year', 'Delaware']
    },
    {
        'key': 'Montgomery County',
        columns: ['year', 'Montgomery']
    },
    {
        'key': 'Burlington County',
        columns: ['year', 'Burlington']
    },
    {
        'key': 'Camden County',
        columns: ['year', 'Camden']
    },
    {
        'key': 'Gloucester County',
        columns: ['year', 'Gloucester']
    },
    {
        'key': 'Mercer County',
        columns: ['year', 'Mercer']
    },
    {
        'key': 'Philadelphia County',
        columns: ['year', 'Philadelphia']
    }
]

export { fullGeography, lightGeography }