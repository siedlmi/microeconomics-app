import { useLang } from '../../i18n';
import BaseCourse from '../BaseCourse';
import consumerMetadata from './metadata';
import { CourseProps } from '../types';

export default function ConsumerCourse({ onComplete }: CourseProps) {
  const { lang } = useLang();
  const metadata = {
    ...consumerMetadata,
    title: lang === 'pl' ? 'Teoria Konsumenta' : consumerMetadata.title,
    description: lang === 'pl' ? 'Poznaj jak konsumenci podejmują decyzje' : consumerMetadata.description,
  };

  const renderLesson = (lessonIndex: number) => {
    const lesson = metadata.content.lessons[lessonIndex];
    return (
      <div className="space-y-4">
        <div className="prose max-w-none">
          <p className="text-lg">{lesson.description}</p>
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
