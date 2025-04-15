import { Routes, Route } from 'react-router-dom';
import LawCourse from './law-of-supply-and-demand';
import PPCCourse from './production-possibilities-curve';
import ConsumerCourse from './consumer-choice';
import MarketStructuresCourse from './market-structures';
import MarketFailuresCourse from './market-failures';
import CourseLayout from './CourseLayout';
import lawMetadata from './law-of-supply-and-demand/metadata';
import ppcMetadata from './production-possibilities-curve/metadata';
import consumerMetadata from './consumer-choice/metadata';
import marketStructuresMetadata from './market-structures/metadata';
import marketFailuresMetadata from './market-failures/metadata';

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
        element={<CourseLayout metadata={lawMetadata}><></></CourseLayout>}
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
        element={<CourseLayout metadata={consumerMetadata}><></></CourseLayout>}
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
        path="production-possibilities-curve"
        element={<CourseLayout metadata={ppcMetadata}><></></CourseLayout>}
      />
      <Route
        path="production-possibilities-curve/:lessonId"
        element={
          <PPCCourse
            onComplete={() => setCompleted((s: any) => ({ ...s, ppc: true }))}
          />
        }
      />

      {/* === Market failures === */}
      <Route
        path="market-failures"
        element={<CourseLayout metadata={marketFailuresMetadata}><></></CourseLayout>}
      />
      <Route
        path="market-failures/:lessonId"
        element={
          <MarketFailuresCourse
            onComplete={() => setCompleted((s: any) => ({ ...s, marketFailurse: true }))}
          />
        }
      />

      {/* === Market Structures === */}
      <Route
        path="market-structures"
        element={<CourseLayout metadata={marketStructuresMetadata}><></></CourseLayout>}
      />
      <Route
        path="market-structures/:lessonId"
        element={
          <MarketStructuresCourse
            onComplete={() => setCompleted((s: any) => ({ ...s, marketStructures: true }))}
          />
        }
      />
    </Routes>
  );
}
