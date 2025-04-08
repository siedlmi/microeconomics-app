import { Routes, Route, Navigate } from 'react-router-dom';
import LawCourse from './law';
import PPCCourse from './ppc';
import ConsumerCourse from './consumer';

export default function CourseRouter({
  setCompleted,
}: {
  setCompleted: (state: any) => void;
}) {
  return (
    <Routes>
      {/* === Law of Supply and Demand === */}
      <Route
        path="law-of-supply-and-demand"
        element={<Navigate to="law-of-supply-and-demand/lesson-1" replace />}
      />
      <Route
        path="law-of-supply-and-demand/:lessonId"
        element={
          <LawCourse onComplete={() => setCompleted((s: any) => ({ ...s, law: true }))} />
        }
      />

      {/* === Consumer Choice === */}
      <Route
        path="consumer-choice"
        element={<Navigate to="consumer-choice/lesson-1" replace />}
      />
      <Route
        path="consumer-choice/:lessonId"
        element={
          <ConsumerCourse
            onComplete={() => setCompleted((s: any) => ({ ...s, consumer: true }))}
          />
        }
      />

      {/* === Production Possibilities Curve === */}
      <Route
        path="ppc"
        element={<Navigate to="ppc/1" replace />}
      />
      <Route
        path="ppc/:lessonId"
        element={
          <PPCCourse
            onComplete={() => setCompleted((s: any) => ({ ...s, ppc: true }))}
          />
        }
      />
    </Routes>
  );
}
