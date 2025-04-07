import { Routes, Route } from 'react-router-dom';
import LawCourse from './law';
import PPCCourse from './ppc';
import ConsumerCourse from './consumer';

export default function CourseRouter({ setCompleted }: { setCompleted: (state: any) => void }) {
  return (
    <Routes>
      <Route
        path="law-of-supply-and-demand"
        element={<LawCourse onComplete={() => setCompleted((s: any) => ({ ...s, law: true }))} />}
      />
      <Route
        path="ppc"
        element={<PPCCourse onComplete={() => setCompleted((s: any) => ({ ...s, ppc: true }))} />}
      />
      <Route
        path="consumer-choice"
        element={<ConsumerCourse onComplete={() => setCompleted((s: any) => ({ ...s, consumer: true }))} />}
      />
    </Routes>
  );
}
