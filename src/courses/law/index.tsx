import { useLang } from '../../i18n';
import BaseCourse from '../BaseCourse';
import DemandSupplyGraph from '../../components/DemandSupplyGraph';
import lawMetadata from './metadata';
import { CourseProps } from '../types';
import { LawLesson } from './metadata';

export default function LawCourse({ onComplete }: CourseProps) {
  const { lang } = useLang();
  const metadata = {
    ...lawMetadata,
    title: lang === 'pl' ? 'Prawo Popytu i Podaży' : lawMetadata.title,
    description: lang === 'pl' ? 'Poznaj jak kształtują się ceny na rynku konkurencyjnym' : lawMetadata.description,
  };

  const renderLesson = (lessonIndex: number) => {
    const lesson = metadata.content.lessons[lessonIndex] as LawLesson;
    return (
      <div className="space-y-4">
        <div className="prose max-w-none">
          <p className="text-lg">{lesson.description}</p>
        </div>
        <div className="mt-6">
          <DemandSupplyGraph type={lesson.type} />
        </div>
      </div>
    );
  };

  return (
    <BaseCourse
      metadata={metadata}
      onComplete={onComplete}
      renderLesson={renderLesson}
    />
  );
}
