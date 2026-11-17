import { Target, Compass, MonitorSmartphone, Rocket, UserRound, Database, CalendarClock, MessageSquare, Wrench, ListChecks, PenTool, Eye, BookOpen, BarChart3 } from 'lucide-react';
import { SampleTemplate, type SampleSpec } from './SampleTemplate';

const SPEC: SampleSpec = {
  duration: 'Monthly',
  process: [
    { icon: Target, when: 'Week 1', title: 'Pick the priority' },
    { icon: Compass, when: 'Week 2', title: 'Explore' },
    { icon: MonitorSmartphone, when: 'Week 3', title: 'Design & test' },
    { icon: Rocket, when: 'Week 4', title: 'Ship & report' },
  ],
  need: [
    { icon: UserRound, text: 'One clear owner' },
    { icon: Database, text: 'Backlog & data access' },
    { icon: CalendarClock, text: 'A weekly 30-min sync' },
    { icon: MessageSquare, text: 'A shared channel' },
    { icon: Wrench, text: 'Engineers to build it' },
  ],
  get: [
    { icon: ListChecks, text: 'Clear monthly priorities' },
    { icon: PenTool, text: 'Hands-on design work' },
    { icon: Eye, text: 'Design reviews & critique' },
    { icon: BookOpen, text: 'A running decision log' },
    { icon: BarChart3, text: 'Month-end report' },
  ],
  tag: 'Imagined engagement · Notion',
  statement: {
    lead: 'Imagine I joined Notion as a design partner for one month, with more ideas on the table than design time.',
    question: 'Which one problem, solved this month, would most help a new team get value in their first week?',
  },
  facts: [
    ['Product', 'Notion: connected workspace for notes, docs and projects'],
    ['Engagement', '40 focused hours, one month'],
    ['Focus', 'One priority, chosen with the team'],
    ['Output', 'A plan, a shipped improvement, a report'],
  ],
  slots: [
    { title: 'Priority framing', hint: 'The options on the table, and why one was chosen.', span: 'lg:col-span-5' },
    { title: 'Month plan', hint: 'What happens each week, and who is involved.', span: 'lg:col-span-7' },
    { title: 'Now · Next · Later', hint: 'The board you keep up to date with the team.', span: 'lg:col-span-4' },
    { title: 'Decision log', hint: 'Each decision, why it was made, and who owns it.', span: 'lg:col-span-4' },
    { title: 'Shipped work', hint: 'The flow or screens that went live this month.', span: 'lg:col-span-4' },
    { title: 'Month-end report', hint: 'What moved, what you learned, what is next.', span: 'lg:col-span-12' },
  ],
};

export function PartnerSample() {
  return <SampleTemplate spec={SPEC} />;
}
