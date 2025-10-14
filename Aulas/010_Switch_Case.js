
const diaSemana = 'terça';

switch (diaSemana) {
    case 'segunda':
    case 'terça':
        console.log('Hoje tem SENAI');
        break;
    case 'quarta':
    case 'quinta':
    case 'sexta':
        console.log('Hoje tem aula do SESI');
        break;
    
    default:
        console.log('Hoje não tem aula');
        break;

}
