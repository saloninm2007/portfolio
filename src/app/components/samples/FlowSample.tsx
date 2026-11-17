import { Compass, MessagesSquare, PenTool, MonitorSmartphone, PackageCheck, Workflow, ShieldCheck, Users, UserRound, Clock, FileText, Route, LayoutTemplate, Smartphone, FlaskConical, Code2 } from 'lucide-react';
import { SampleTemplate, type SampleSpec } from './SampleTemplate';

const SPEC: SampleSpec = {
  duration: '4–6 weeks',
  process: [
    { icon: Compass, when: 'Week 1', title: 'Frame the problem' },
    { icon: MessagesSquare, when: 'Week 2', title: 'Research' },
    { icon: PenTool, when: 'Week 3', title: 'Explore & sketch' },
    { icon: MonitorSmartphone, when: 'Week 4', title: 'Design & test' },
    { icon: PackageCheck, when: 'Week 5', title: 'Handoff' },
  ],
  need: [
    { icon: Workflow, text: 'The flow & its data' },
    { icon: ShieldCheck, text: 'Tech & brand limits' },
    { icon: UserRound, text: 'A PM and an engineer' },
    { icon: Users, text: '5–6 users to test with' },
    { icon: Clock, text: 'Feedback within 48 hours' },
  ],
  get: [
    { icon: FileText, text: 'A reframed brief' },
    { icon: Route, text: 'Journey map, before & after' },
    { icon: LayoutTemplate, text: 'Flows & wireframes' },
    { icon: Smartphone, text: 'Final screens, every state' },
    { icon: FlaskConical, text: 'Usability test results' },
    { icon: Code2, text: 'Dev-ready handoff' },
  ],
  tag: 'Self-initiated redesign · Canva',
  statement: {
    lead: 'A small business owner wants every post they make in Canva to look on-brand.',
    question: 'How might setting up their brand feel quick enough to do on day one, not someday?',
  },
  facts: [
    ['Product', 'Canva: online design tool for non-designers'],
    ['Flow', 'Brand setup → first on-brand design'],
    ['Users', 'Small business owners making their own social posts'],
    ['Success', 'More people set up their brand, and use it in their first design'],
  ],
  slots: [
    { title: 'Reframed brief', hint: 'The obvious brief, and the question you actually solved.', span: 'lg:col-span-5' },
    { title: 'Current flow', hint: 'Today’s brand setup steps, with where people stall.', span: 'lg:col-span-7' },
    { title: 'Insights', hint: '3 things you learned from people going through it.', span: 'lg:col-span-4' },
    { title: 'New flow & wireframes', hint: 'The redesigned steps, sketched and explained.', span: 'lg:col-span-8' },
    { title: 'Key screens', hint: 'Final screens, including empty, error and loading states.', span: 'lg:col-span-7' },
    { title: 'Test results', hint: 'Before vs after with 5 to 6 people: success, time, confidence.', span: 'lg:col-span-5' },
  ],
};

export function FlowSample() {
  return <SampleTemplate spec={SPEC} />;
}
