import mysql from 'mysql2/promise';
import { config } from 'dotenv';

config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

// Clear existing data
console.log('Limpiando datos existentes...');
await connection.execute('DELETE FROM clinicalReports');
await connection.execute('DELETE FROM medicalFiles');
await connection.execute('DELETE FROM medications');
await connection.execute('DELETE FROM followUps');
await connection.execute('DELETE FROM initialRecords');
await connection.execute('DELETE FROM alerts');
await connection.execute('DELETE FROM patients');

// Create test user
console.log('Creando usuario de prueba...');
const userId = 1;

// Sample patients data
const patientsData = [
  {
    firstName: 'Juan',
    lastName: 'García López',
    email: 'juan.garcia@email.com',
    phone: '+34 612 345 678',
    dateOfBirth: new Date('1965-03-15'),
    gender: 'male',
    identificationNumber: '12345678A',
    address: 'Calle Principal 123',
    city: 'Madrid',
    state: 'Madrid',
    postalCode: '28001',
    country: 'España',
    emergencyContactName: 'María García López',
    emergencyContactPhone: '+34 612 345 679',
    medicalHistory: 'Hipertensión desde 2010, diabetes tipo 2 desde 2015',
    allergies: 'Penicilina, Sulfonamidas',
    currentMedications: 'Metformina, Lisinopril',
    status: 'active',
    notes: 'Paciente cooperador, buen cumplimiento terapéutico',
  },
  {
    firstName: 'María',
    lastName: 'Rodríguez Martínez',
    email: 'maria.rodriguez@email.com',
    phone: '+34 623 456 789',
    dateOfBirth: new Date('1978-07-22'),
    gender: 'female',
    identificationNumber: '87654321B',
    address: 'Avenida Secundaria 456',
    city: 'Barcelona',
    state: 'Barcelona',
    postalCode: '08002',
    country: 'España',
    emergencyContactName: 'Carlos Rodríguez',
    emergencyContactPhone: '+34 623 456 790',
    medicalHistory: 'Asma desde infancia, alergia estacional',
    allergies: 'Aspirina',
    currentMedications: 'Salbutamol, Fluticasona',
    status: 'active',
    notes: 'Requiere seguimiento regular',
  },
  {
    firstName: 'Carlos',
    lastName: 'López Fernández',
    email: 'carlos.lopez@email.com',
    phone: '+34 634 567 890',
    dateOfBirth: new Date('1952-11-10'),
    gender: 'male',
    identificationNumber: '11223344C',
    address: 'Paseo de la Castellana 789',
    city: 'Madrid',
    state: 'Madrid',
    postalCode: '28046',
    country: 'España',
    emergencyContactName: 'Ana López',
    emergencyContactPhone: '+34 634 567 891',
    medicalHistory: 'Infarto de miocardio 2018, angina de pecho',
    allergies: 'Ninguna conocida',
    currentMedications: 'Atorvastatina, Clopidogrel, Metoprolol',
    status: 'active',
    notes: 'Paciente cardíaco, requiere monitoreo constante',
  },
  {
    firstName: 'Isabel',
    lastName: 'Sánchez González',
    email: 'isabel.sanchez@email.com',
    phone: '+34 645 678 901',
    dateOfBirth: new Date('1985-05-18'),
    gender: 'female',
    identificationNumber: '55667788D',
    address: 'Calle del Prado 321',
    city: 'Valencia',
    state: 'Valencia',
    postalCode: '46001',
    country: 'España',
    emergencyContactName: 'Pedro Sánchez',
    emergencyContactPhone: '+34 645 678 902',
    medicalHistory: 'Hipotiroidismo desde 2012',
    allergies: 'Yodo',
    currentMedications: 'Levotiroxina',
    status: 'active',
    notes: 'Control regular de TSH',
  },
  {
    firstName: 'Roberto',
    lastName: 'Martínez Ruiz',
    email: 'roberto.martinez@email.com',
    phone: '+34 656 789 012',
    dateOfBirth: new Date('1970-09-25'),
    gender: 'male',
    identificationNumber: '99887766E',
    address: 'Avenida de América 654',
    city: 'Sevilla',
    state: 'Sevilla',
    postalCode: '41001',
    country: 'España',
    emergencyContactName: 'Juana Martínez',
    emergencyContactPhone: '+34 656 789 013',
    medicalHistory: 'Artrosis cervical, lumbalgia crónica',
    allergies: 'AINE',
    currentMedications: 'Paracetamol, Tramadol',
    status: 'active',
    notes: 'Dolor crónico, requiere seguimiento fisioterapéutico',
  },
];

// Insert patients
console.log('Insertando pacientes...');
const patientIds = [];
for (const patient of patientsData) {
  const [result] = await connection.execute(
    `INSERT INTO patients (userId, firstName, lastName, email, phone, dateOfBirth, gender, identificationNumber, address, city, state, postalCode, country, emergencyContactName, emergencyContactPhone, medicalHistory, allergies, currentMedications, status, notes) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      userId,
      patient.firstName,
      patient.lastName,
      patient.email,
      patient.phone,
      patient.dateOfBirth,
      patient.gender,
      patient.identificationNumber,
      patient.address,
      patient.city,
      patient.state,
      patient.postalCode,
      patient.country,
      patient.emergencyContactName,
      patient.emergencyContactPhone,
      patient.medicalHistory,
      patient.allergies,
      patient.currentMedications,
      patient.status,
      patient.notes,
    ]
  );
  patientIds.push(result.insertId);
}

// Insert initial records
console.log('Insertando registros iniciales...');
const initialRecordsData = [
  {
    patientId: patientIds[0],
    consultationDate: new Date('2024-01-15'),
    chiefComplaint: 'Dolor de cabeza persistente y mareos',
    presentingIllness: 'Migrañas desde hace 2 semanas, acompañadas de náuseas',
    pastMedicalHistory: 'Hipertensión controlada',
    physicalExamination: 'Presión arterial 145/90, frecuencia cardíaca 78 bpm',
    initialDiagnosis: 'Migraña con aura, hipertensión no controlada',
    initialAssessment: 'Paciente con síntomas de migraña recurrente',
    treatmentPlan: 'Iniciar Sumatriptán, aumentar dosis de Lisinopril',
  },
  {
    patientId: patientIds[1],
    consultationDate: new Date('2024-01-20'),
    chiefComplaint: 'Tos persistente y dificultad respiratoria',
    presentingIllness: 'Tos seca desde hace 3 semanas, empeora por la noche',
    pastMedicalHistory: 'Asma desde infancia',
    physicalExamination: 'Sibilancias bilaterales, saturación O2 94%',
    initialDiagnosis: 'Crisis asmática moderada',
    initialAssessment: 'Exacerbación del asma, requiere ajuste de medicación',
    treatmentPlan: 'Aumentar dosis de Fluticasona, agregar Montelukast',
  },
  {
    patientId: patientIds[2],
    consultationDate: new Date('2024-01-10'),
    chiefComplaint: 'Dolor torácico leve',
    presentingIllness: 'Dolor precordial ocasional, de corta duración',
    pastMedicalHistory: 'Infarto previo, angina de pecho',
    physicalExamination: 'Corazón: ritmo regular, sin soplos. TA 130/80',
    initialDiagnosis: 'Angina estable',
    initialAssessment: 'Paciente cardíaco con síntomas controlados',
    treatmentPlan: 'Mantener medicación actual, realizar ECG',
  },
];

for (const record of initialRecordsData) {
  await connection.execute(
    `INSERT INTO initialRecords (patientId, userId, consultationDate, chiefComplaint, presentingIllness, pastMedicalHistory, physicalExamination, initialDiagnosis, initialAssessment, treatmentPlan) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      record.patientId,
      userId,
      record.consultationDate,
      record.chiefComplaint,
      record.presentingIllness,
      record.pastMedicalHistory,
      record.physicalExamination,
      record.initialDiagnosis,
      record.initialAssessment,
      record.treatmentPlan,
    ]
  );
}

// Insert follow-ups
console.log('Insertando seguimientos clínicos...');
const followUpsData = [
  {
    patientId: patientIds[0],
    followUpDate: new Date('2024-02-15'),
    clinicalEvolution: 'Paciente refiere mejoría de migrañas con nuevo tratamiento',
    symptoms: 'Migrañas menos frecuentes, presión arterial mejor controlada',
    observations: 'Buena tolerancia a Sumatriptán',
    diagnosis: 'Migraña con aura, en remisión',
    treatment: 'Continuar con tratamiento actual',
    nextFollowUpDate: new Date('2024-03-15'),
  },
  {
    patientId: patientIds[1],
    followUpDate: new Date('2024-02-10'),
    clinicalEvolution: 'Mejoría significativa de síntomas respiratorios',
    symptoms: 'Tos casi resuelta, respiración normal',
    observations: 'Saturación O2 98%, sin sibilancias',
    diagnosis: 'Asma controlada',
    treatment: 'Mantener medicación actual',
    nextFollowUpDate: new Date('2024-03-10'),
  },
  {
    patientId: patientIds[2],
    followUpDate: new Date('2024-02-05'),
    clinicalEvolution: 'Paciente sin síntomas de angina',
    symptoms: 'Sin dolor torácico, buena tolerancia al ejercicio',
    observations: 'ECG normal, troponinas negativas',
    diagnosis: 'Enfermedad coronaria estable',
    treatment: 'Continuar medicación antitrombótica',
    nextFollowUpDate: new Date('2024-03-05'),
  },
];

for (const followUp of followUpsData) {
  await connection.execute(
    `INSERT INTO followUps (patientId, userId, followUpDate, clinicalEvolution, symptoms, observations, diagnosis, treatment, nextFollowUpDate) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      followUp.patientId,
      userId,
      followUp.followUpDate,
      followUp.clinicalEvolution,
      followUp.symptoms,
      followUp.observations,
      followUp.diagnosis,
      followUp.treatment,
      followUp.nextFollowUpDate,
    ]
  );
}

// Insert medications
console.log('Insertando medicaciones...');
const medicationsData = [
  {
    patientId: patientIds[0],
    medicationName: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Una vez al día',
    route: 'Oral',
    startDate: new Date('2023-06-01'),
    endDate: new Date('2025-06-01'),
    duration: '1 año',
    indication: 'Hipertensión',
    specialNotes: 'Tomar por la mañana',
  },
  {
    patientId: patientIds[0],
    medicationName: 'Sumatriptán',
    dosage: '50mg',
    frequency: 'Según sea necesario',
    route: 'Oral',
    startDate: new Date('2024-01-15'),
    endDate: new Date('2025-01-15'),
    duration: '1 año',
    indication: 'Migraña',
    specialNotes: 'Tomar al inicio de la migraña',
  },
  {
    patientId: patientIds[1],
    medicationName: 'Fluticasona',
    dosage: '110mcg',
    frequency: 'Dos veces al día',
    route: 'Inhalada',
    startDate: new Date('2023-03-01'),
    endDate: new Date('2025-03-01'),
    duration: '2 años',
    indication: 'Asma',
    specialNotes: 'Enjuagar boca después de usar',
  },
  {
    patientId: patientIds[1],
    medicationName: 'Salbutamol',
    dosage: '100mcg',
    frequency: 'Según sea necesario',
    route: 'Inhalada',
    startDate: new Date('2023-03-01'),
    endDate: new Date('2025-03-01'),
    duration: '2 años',
    indication: 'Asma, broncoespasmo',
    specialNotes: 'Usar como rescate',
  },
  {
    patientId: patientIds[2],
    medicationName: 'Atorvastatina',
    dosage: '80mg',
    frequency: 'Una vez al día',
    route: 'Oral',
    startDate: new Date('2018-06-01'),
    endDate: new Date('2025-06-01'),
    duration: 'Indefinido',
    indication: 'Colesterol alto, prevención secundaria',
    specialNotes: 'Tomar por la noche',
  },
  {
    patientId: patientIds[2],
    medicationName: 'Clopidogrel',
    dosage: '75mg',
    frequency: 'Una vez al día',
    route: 'Oral',
    startDate: new Date('2018-06-01'),
    endDate: new Date('2025-06-01'),
    duration: 'Indefinido',
    indication: 'Prevención de trombosis post-infarto',
    specialNotes: 'No interrumpir sin consultar',
  },
];

for (const med of medicationsData) {
  await connection.execute(
    `INSERT INTO medications (patientId, userId, medicationName, dosage, frequency, route, startDate, endDate, duration, indication, specialNotes, isActive) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      med.patientId,
      userId,
      med.medicationName,
      med.dosage,
      med.frequency,
      med.route,
      med.startDate,
      med.endDate,
      med.duration,
      med.indication,
      med.specialNotes,
      true,
    ]
  );
}

// Insert alerts
console.log('Insertando alertas...');
const alertsData = [
  {
    userId,
    patientId: patientIds[0],
    alertType: 'pending_followup',
    title: 'Seguimiento pendiente - Juan García López',
    message: 'El paciente Juan García López tiene un seguimiento pendiente para el 15 de marzo de 2024',
  },
  {
    userId,
    patientId: patientIds[1],
    alertType: 'medication_expiring',
    title: 'Medicación próxima a vencer - María Rodríguez',
    message: 'La medicación Fluticasona del paciente María Rodríguez vence el 1 de marzo de 2025',
  },
  {
    userId,
    patientId: null,
    alertType: 'system',
    title: 'Recordatorio de backup',
    message: 'Se recomienda realizar un backup de los datos de pacientes',
  },
];

for (const alert of alertsData) {
  await connection.execute(
    `INSERT INTO alerts (userId, patientId, alertType, title, message, isRead, emailSent) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [alert.userId, alert.patientId, alert.alertType, alert.title, alert.message, false, false]
  );
}

console.log('✅ Base de datos poblada exitosamente con datos de ejemplo');
console.log(`✅ ${patientIds.length} pacientes creados`);
console.log('✅ Registros iniciales, seguimientos, medicaciones y alertas agregados');

await connection.end();
