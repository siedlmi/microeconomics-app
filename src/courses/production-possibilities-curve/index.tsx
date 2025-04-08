import BaseCourse from '../BaseCourse';
import PPCGraph from './PPCLesson';
import ppcMetadata from './metadata';
import { CourseProps } from '../types';

export default function PPCCourse({ onComplete }: CourseProps) {
  const renderLesson = (lessonIndex: number) => {
    switch (lessonIndex) {
      case 0:
        return (
          <>
            <p className="mb-4">
              The Production Possibilities Curve (PPC) shows the maximum possible production combinations 
              of two goods using available resources and technology.
            </p>
            <PPCGraph />
          </>
        );
      case 1:
        return (
          <>
            <p className="mb-4">
              Opportunity cost is what must be given up to obtain something else. On the PPC, 
              it's shown by the slope at any point, representing how much of one good must be 
              sacrificed to produce more of another.
            </p>
            <PPCGraph />
          </>
        );
      case 2:
        return (
          <>
            <p className="mb-4">
              Points on the curve represent efficient production, while points inside show 
              underutilization of resources. Points outside the curve are unattainable with 
              current resources and technology.
            </p>
            <PPCGraph />
          </>
        );
      case 3:
        return (
          <>
            <p className="mb-4">
              Economic growth, technological improvements, or increases in resources can shift 
              the entire PPC outward, allowing for higher production possibilities of both goods.
            </p>
            <PPCGraph />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <BaseCourse
      metadata={ppcMetadata}
      onComplete={onComplete}
      renderLesson={renderLesson}
    />
  );
}
