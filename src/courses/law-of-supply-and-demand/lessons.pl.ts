import { LessonType } from './types';

const lawLessons: { title: string; description: string; type: LessonType }[] = [
    { title: 'Lekcja 1: Podaż a cena', description: 'Zbadaj, jak podaż zmienia się wraz z ceną.', type: 'supply' },
    { title: 'Lekcja 2: Popyt a cena', description: 'Zbadaj, jak popyt zmienia się wraz z ceną.', type: 'demand' },
    { title: 'Lekcja 3: Podaż i popyt razem', description: 'Zobacz, jak podaż i popyt tworzą równowagę.', type: 'both' },
];

export default lawLessons;
