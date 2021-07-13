// STRETCH

exports.seed = function(knex, Promise) {
  return knex('cars').truncate()
    .then(() => {
      return knex('cars').insert([
        {
          vin: '1T7YU4C2351154332',
          make: 'Ford',
          model: 'F-150',
          mileage: 18959,
          title: 'clear',
          transmission: 'automatic'
        },
        {
          vin: 'SALNY222X3A223078',
          make: 'Nissan',
          model: 'Rogue',
          mileage: 17700,
          title: 'clear',
          transmission: 'automatic'
        },
        {
          vin: '1FDKF37G7VEB14997',
          make: 'Subaru',
          model: 'Forester',
          mileage: 34478,
          title: 'clear',
          transmission: 'automatic'
        },
        {
          vin: '3VWDP7AJ5CM323956',
          make: 'Toyota',
          model: 'Tacoma',
          mileage: 24018,
          title: 'clear',
          transmission: 'automatic'
        },
        {
          vin: '1B4HS28N01F622408',
          make: 'Volkswagen',
          model: 'Tiguan',
          mileage: 85649,
          title: 'clear',
          transmission: 'automatic'
        },
        {
          vin: '2T2BK1BA1FC284117',
          make: 'Jeep',
          model: 'Grand Cherokee',
          mileage: 65239,
          title: 'clear',
          transmission: 'automatic'
        },
        {
          vin: '3FA6P0HR6DR272914',
          make: 'Lexus',
          model: 'GX 460',
          mileage: 26877,
          title: 'clear',
          transmission: 'automatic'
        },
        {
          vin: '1D8GP25B06B674244',
          make: 'Honda',
          model: 'CR-V',
          mileage: 24955,
          title: 'clear',
          transmission: 'automatic'
        },
        {
          vin: '1C6RR7FG4ES213062',
          make: 'Acura',
          model: 'MDX',
          mileage: 37033,
          title: 'clear',
          transmission: 'automatic'
        },
        {
          vin: 'KMHDU4AD8AU057907',
          make: 'GMC',
          model: 'Sierra',
          mileage: 38323,
          title: 'clear',
          transmission: 'automatic'
        }
      ]);
    });
};
