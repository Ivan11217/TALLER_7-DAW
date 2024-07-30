const { Perfil } = require('../models');

async function seed() {
  await Perfil.sync({ force: true });
  await Perfil.bulkCreate([
    { descripcion: 'Admin', estado: 'activo' },
    { descripcion: 'Supervisor', estado: 'activo' },
    { descripcion: 'Operador', estado: 'activo' },
    { descripcion: 'Cliente', estado: 'activo' }
  ]);
  console.log('Seed completed');
}

seed();
